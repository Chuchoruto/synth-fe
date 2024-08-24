'use client';

import React from 'react';
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

const steps = ['Step 1', 'Step 2', 'Step 3'];

interface CustomStepperProps {}

const CustomStepper = (props: CustomStepperProps) => {
  const activeStep = usePageOneStore((state) => state.activeStep);
  const handleBack = usePageOneStore((state) => state.handleBack);
  const handleNext = usePageOneStore((state) => state.handleNext);

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <StepOne />;
      case 1:
        return 'Content for Step 2';
      case 2:
        return 'Content for Step 3';
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
        {activeStep === 1 && (
          <Button color="inherit" onClick={() => handleBack} sx={{ mr: 1 }}>
            Back
          </Button>
        )}
        <Box sx={{ flex: '1 1 auto' }} />
        {activeStep === 0 && <Button onClick={() => handleNext}>Next</Button>}
        {activeStep === 1 && <Button onClick={() => handleNext}>Next</Button>}
        {activeStep === 2 && (
          <Button color="inherit" onClick={() => handleBack} sx={{ mr: 1 }}>
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
