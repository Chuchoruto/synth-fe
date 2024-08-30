'use client';

// external imports:
import React, { useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';

interface DownloadFileBoxProps {}

const DownloadFileBox: React.FC<DownloadFileBoxProps> = () => {
  return (
    <Container sx={styles.bodyCont}>
      <Button variant="contained">Download Synthetic Data</Button>
    </Container>
  );
};

export default DownloadFileBox;

const styles = {
  bodyCont: {
    flex: '3',
    minWidth: '50%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20%',
    alignItems: 'center',
    padding: 3
  }
};
