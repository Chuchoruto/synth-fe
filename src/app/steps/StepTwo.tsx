// external imports:
import { Container, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import '@fontsource-variable/outfit';
import '@fontsource-variable/overpass';
import React, { useEffect } from 'react';

// internal imports:
import MetricsDashboard from '../components/MetricsDashboard';
import DownloadFileBox from '../components/DownloadFileBox';

export default function StepTwo() {
  return (
    <>
      <Container sx={styles.contStyle} style={{ maxWidth: 'inherit' }}>
        <MetricsDashboard />
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={styles.divider}
        />
        <DownloadFileBox />
      </Container>
    </>
  );
}

const styles = {
  contStyle: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '0%',
    marginLeft: '0%',
    maxWidth: 'inherit'
  },
  divider: {
    marginRight: '3%',
    marginLeft: '3%'
  }
};
