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
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          fontFamily="Outfit Variable"
          sx={styles.titleStyle}
          // eslint-disable-next-line react/no-unescaped-entities
        >
          Your Synhetic Data's Metrics:{' '}
        </Typography>
        <Grid container spacing={3}>
          {metricsData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <DashboardPanel title={item.title} metric={item.value} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

const styles = {
  titleStyle: {
    marginBottom: '3%',
    textAlign: 'left'
  }
};

export default MetricsDashboard;
