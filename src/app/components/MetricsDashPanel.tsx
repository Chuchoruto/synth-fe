'use client';

import React, { DragEvent, ChangeEvent, useRef } from 'react';
import { Paper, Typography, Button } from '@mui/material';

interface MetricsDashPanelProps {
  title: string;
  metric: string;
}

const MetricsDashPanel: React.FC<MetricsDashPanelProps> = ({
  title,
  metric
}) => (
  <Paper elevation={3} sx={styles.panelCont}>
    <Typography
      color="grey"
      variant="body1"
      sx={styles.titleStyle}
      fontFamily="Outfit Variable"
    >
      {title}
    </Typography>
    <Typography
      variant="h6"
      fontFamily="Outfit Variable"
      sx={styles.titleStyle}
    >
      {metric}{' '}
    </Typography>
  </Paper>
);

const styles = {
  titleStyle: {
    marginTop: '0.50%',
    textAlign: 'left'
  },
  panelCont: {
    padding: 2,
    textAlign: 'center',
    borerRadius: 30
  }
};

export default MetricsDashPanel;
