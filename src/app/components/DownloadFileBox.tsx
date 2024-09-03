'use client';

import React from 'react';
import { Container, Button } from '@mui/material';
import useStepOneStore from '../store/stepOneStore';

const DownloadFileBox: React.FC = () => {
  const { setLoading, setError } = useStepOneStore((state) => ({
    setLoading: state.setLoading,
    setError: state.setError,
  }));

  const handleDownload = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.samplify-app.com/api/download-synthetic-csv', {
        method: 'GET',
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'synthetic_data.csv'; // Default download name, adjust if needed
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        setError('Failed to download synthetic data.');
      }
    } catch (error) {
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
