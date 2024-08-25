'use client';

import React, { useEffect } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
  Paper
} from '@mui/material';

// internal imports:
import StepOne from '../steps/StepOne';
import usePageOneStore from '../store/pageStore';
import MetricsDashboard from './MetricsDashboard';

const steps = ['Step 1', 'Step 2'];

interface CustomStepperProps {}

const CustomStepper = (props: CustomStepperProps) => {
  const { activeStep, handleBack, handleNext } = usePageOneStore((state) => ({
    activeStep: state.activeStep,
    handleBack: state.handleBack,
    handleNext: state.handleNext
  }));

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <StepOne />;
      case 1:
        return <MetricsDashboard />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box sx={{ width: '100%', padding: 3 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Paper elevation={3} sx={styles.stepCont}>
        {getStepContent(activeStep)}
      </Paper>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Box sx={{ flex: '1 1 auto' }} />
        {activeStep === 0 && <Button onClick={handleNext}>Next</Button>}{' '}
        {activeStep === 1 && (
          <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
            Back
          </Button>
        )}
      </Box>
    </Box>
  );
};

const styles = {
  stepCont: {
    padding: '0px !important',
    backgroundColor: '#e4eae1',

    mt: 2,
    p: 3,
    minHeight: '200px'
  }
};

export default CustomStepper;
