'use client';

import React from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Paper
} from '@mui/material';

// internal imports:
import StepOne from '../steps/StepOne';
import StepTwo from '../steps/StepTwo';
import usePageOneStore from '../store/pageStore';
import useStepOneStore from '../store/stepOneStore';  // Import the state from stepOneStore

const steps = ['Step 1', 'Step 2'];

interface CustomStepperProps {}

const CustomStepper = (props: CustomStepperProps) => {
  const { activeStep, handleBack, handleNext } = usePageOneStore((state) => ({
    activeStep: state.activeStep,
    handleBack: state.handleBack,
    handleNext: state.handleNext
  }));

  const { filePath, setError, setMessage, setLoading } = useStepOneStore((state) => ({
    filePath: state.filePath,
    setError: state.setError,
    setMessage: state.setMessage,
    setLoading: state.setLoading,
  }));

  const initializeModel = async () => {
    setLoading(true);
  
    if (!filePath) {
      setError('No file uploaded to initialize the model.');
      setLoading(false);
      return;
    }
  
    try {
      const response = await fetch('https://api.samplify-app.com/api/initialize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          csv_path: filePath,
          num_samples: 100 // or any other value you need
        }),
        credentials: 'include'  // Include credentials (cookies) with the request
      });
  
      if (response.ok) {
        setMessage('Model initialized successfully!');
        setError('');
        handleNext();  // Proceed to the next step only if initialization is successful
      } else {
        const errorData = await response.json();
        setError('Failed to initialize model: ' + errorData.error);
      }
    } catch (error) {
      setError('Error initializing model: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
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
        {activeStep === 0 && (
          <Button onClick={initializeModel}>Next</Button> // Trigger initialization when Next is clicked
        )}
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
    width: '100%',
    backgroundColor: '#e4eae1',
    mt: 2,
    p: 3,
    minHeight: '200px'
  }
};

export default CustomStepper;
