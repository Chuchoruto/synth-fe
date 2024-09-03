'use client';

import React, { DragEvent, ChangeEvent, useRef } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import useStepOneStore from '../store/stepOneStore';

interface FileUploadBoxProps {}

const FileUploadBox: React.FC<FileUploadBoxProps> = () => {
  const {
    file,
    setFile,
    filePath,
    setFilePath,
    originalFilename, // Add this line
    setOriginalFilename, // Add this line
    error,
    setError,
    message,
    setMessage,
    loading,
    setLoading,
  } = useStepOneStore((state) => ({
    file: state.file,
    setFile: state.setFile,
    filePath: state.filePath,
    setFilePath: state.setFilePath,
    originalFilename: state.originalFilename, // Add this line
    setOriginalFilename: state.setOriginalFilename, // Add this line
    error: state.error,
    setError: state.setError,
    message: state.message,
    setMessage: state.setMessage,
    loading: state.loading,
    setLoading: state.setLoading,
  }));

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    validateFile(droppedFile);
  };

  const handleClick = (): void => {
    fileInputRef.current?.click();
  };

  const handleFileInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      validateFile(selectedFile);
    }
  };

  const validateFile = (file: File): void => {
    const validTypes: string[] = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv',
    ];
    const fileType: string = file.type;
    const fileExtension: string =
      file.name.split('.').pop()?.toLowerCase() || '';

    if (
      validTypes.includes(fileType) ||
      ['xlsx', 'csv'].includes(fileExtension)
    ) {
      setFile(file);
      setOriginalFilename(file.name); // Save the original filename
      setError('');
      setMessage(''); // Clear any previous messages
    } else {
      setFile(null);
      setError('Please upload only .xlsx or .csv files');
    }
  };

  const handleFileUpload = async (): Promise<void> => {
    setLoading(true);
  
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await fetch('https://api.samplify-app.com/api/upload', {
        method: 'POST',
        body: formData,
        credentials: 'include', // Include credentials (cookies) in the request
      });
  
      if (response.ok) {
        const result = await response.json();
        setMessage('File uploaded successfully: ' + result.file_path);
        setFilePath(result.file_path); // Save the file path
        setError(''); // Clear any previous errors
      } else {
        setMessage('');
        setError('Failed to upload file.');
      }
    } catch (error) {
      setMessage('');
      setError('Error uploading file: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInput}
        style={{ display: 'none' }}
        accept=".xlsx,.csv"
      />
      <Paper
        elevation={3}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
        sx={styles.fileUploadBox}
      >
        <CloudUploadIcon sx={{ fontSize: 48, color: 'primary.main' }} />
        <Typography variant="h6" mt={2}>
          Drag & Drop File Here
        </Typography>
        <Typography variant="body2" color="textSecondary">
          or click to select (.xlsx or .csv)
        </Typography>
        {file && (
          <Typography variant="body2" color="primary" mt={2}>
            File ready for upload: {file.name}
          </Typography>
        )}
        {error && (
          <Typography variant="body2" color="error" mt={2}>
            {error}
          </Typography>
        )}
        {message && (
          <Typography variant="body2" color="primary" mt={2}>
            {message}
          </Typography>
        )}
      </Paper>
      {file && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleFileUpload}
          sx={{ mt: 2 }}
        >
          Upload File
        </Button>
      )}
    </>
  );
};

const styles = {
  fileUploadBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginTop: '10%',
    width: 500,
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px dashed #ccc',
    borderRadius: 2,
    cursor: 'pointer',
  },
};

export default FileUploadBox;
