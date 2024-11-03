'use client';

import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';

// internal imports:
import DashboardPanel from './MetricsDashPanel';

interface MetricsDashboardProps {
  // Add props here if needed
}

interface KsPValue {
  Column: string;
  'KS p-value': string;
}

const MetricsDashboard: React.FC<MetricsDashboardProps> = () => {
  const [ksData, setKsData] = useState<KsPValue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchKsPValues = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.samplify-app.com/api/get-ks'); // Ensure this matches your API endpoint
        if (!response.ok) throw new Error("Failed to fetch KS p-values");

        const data = await response.json();
        setKsData(data);
      } catch (error) {
        console.error("Error fetching KS p-values:", error);
        setError("Failed to load KS p-values.");
      } finally {
        setLoading(false);
      }
    };

    fetchKsPValues();
  }, []);

  return (
    <Box>
      <Typography
        variant="h6"
        fontWeight="bold"
        fontFamily="Outfit Variable"
        sx={styles.titleStyle}
      >
        Your Synthetic Data&apos;s KS Metrics
      </Typography>
      <div style={{ height: '400px', overflowY: 'auto', padding: '16px' }}>
        <Grid container spacing={3}>
          {loading && <Typography>Loading...</Typography>}
          {error && <Typography color="error">{error}</Typography>}
          {!loading && !error && ksData.map((item, index) => (
            <Grid item xs={10} sm={8} md={6} lg={4} key={index}>
              <DashboardPanel title={item.Column} metric={item['KS p-value']} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
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
