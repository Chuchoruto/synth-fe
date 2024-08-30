'use client';

import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';

// internal imports:
import DashboardPanel from './MetricsDashPanel';
import useStepTwoStore from '../store/stepTwoStore';

interface MetricsDashboardProps {
  // You can add any props here if needed
}

const MetricsDashboard: React.FC<MetricsDashboardProps> = () => {
  const metricsData = useStepTwoStore((state) => state.dummyData);

  return (
    <>
      <Box>
        <Typography
          variant="h6"
          fontWeight="bold"
          fontFamily="Outfit Variable"
          sx={styles.titleStyle}
        >
          Your Synhetic Data's Metrics:{' '}
        </Typography>
        <div style={{ height: '400px', overflowY: 'auto', padding: '16px' }}>
          <Grid container spacing={3}>
            {metricsData.map((item, index) => (
              <Grid item xs={10} sm={8} md={6} lg={4} key={index}>
                <DashboardPanel title={item.title} metric={item.value} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Box>
    </>
  );
};

const styles = {
  titleStyle: {
    marginBottom: '3%',
    textAlign: 'left'
  },
  scrollableContainer: {
    height: '400px',
    overflowY: 'auto',
    padding: '16px'
  }
};

export default MetricsDashboard;
