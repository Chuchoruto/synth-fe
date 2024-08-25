'use client';

import React, { DragEvent, ChangeEvent, useRef } from 'react';
import { Paper, Typography, Button } from '@mui/material';

interface DashboardPanelProps {
  title: string;
  metric: string;
}

const DashboardPanel: React.FC<DashboardPanelProps> = ({ title, metric }) => (
  <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
    <Typography variant="h6">{title}</Typography>
    <Typography variant="h4">{metric}</Typography>
  </Paper>
);

export default DashboardPanel;
