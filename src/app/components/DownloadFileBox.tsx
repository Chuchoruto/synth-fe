'use client';

import React from 'react';
import { Container, Button } from '@mui/material';
import useStepOneStore from '../store/stepOneStore';

const DownloadFileBox: React.FC = () => {
  const { originalFilename, setLoading, setError } = useStepOneStore((state) => ({
    originalFilename: state.originalFilename,
    setLoading: state.setLoading,
    setError: state.setError,
  }));

  const handleDownload = async () => {
    setLoading(true);
    try {
      console.log("Starting download...");
      const response = await fetch('https://api.samplify-app.com/api/download-synthetic-csv', {
        method: 'GET',
        credentials: 'include', // Include credentials (cookies) in the request
      });
  
      if (response.ok) {
        console.log("Download request successful.");
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
  
        const downloadName = originalFilename ? `synthetic_${originalFilename}` : 'synthetic_data.csv';
        a.download = downloadName;
  
        document.body.appendChild(a);
        a.click();
        a.remove();
        console.log("Download started.");
      } else {
        console.error('Failed to download synthetic data.');
        setError('Failed to download synthetic data.');
      }
    } catch (error) {
      console.error('Error downloading file:', error);
      setError('Error downloading file: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={styles.bodyCont}>
      <Button variant="contained" onClick={handleDownload}>
        Download Synthetic Data
      </Button>
    </Container>
  );
};

const styles = {
  bodyCont: {
    flex: '3',
    minWidth: '50%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20%',
    alignItems: 'center',
    padding: 3,
  },
};

export default DownloadFileBox;
