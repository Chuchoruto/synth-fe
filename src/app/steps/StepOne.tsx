'use client';

// external imports:
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import '@fontsource-variable/outfit';
import '@fontsource-variable/overpass';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect } from 'react';

// internal imports:
import FileUploadBox from '../components/FileUploadBox';
import useStepOneStore from '../store/stepOneStore';

export default function StepOne() {
  const { stepOneDone, loading, currLoadingIndex, setCurrLoadingIndex } =
    useStepOneStore((state) => ({
      stepOneDone: state.stepOneDone,
      loading: state.loading,
      currLoadingIndex: state.currLoadingIndex,
      setCurrLoadingIndex: state.setCurrLoadingIndex
    }));

  const waitArrQuotes = ['.', '..', '...', '....'];

  useEffect(() => {
    if (loading) {
      const intervalId = setInterval(() => {
        setCurrLoadingIndex(waitArrQuotes.length);
      }, 500);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [loading, setCurrLoadingIndex, waitArrQuotes.length]);

  return (
    <>
      {loading ? (
        <Container sx={styles.bodyCont}>
          <Typography
            variant="h5"
            align="center"
            fontFamily="Outfit Variable"
            color="black"
            fontWeight="bold"
          >
            {`Uploading Your Data and Retrieving Your Synthetic Data ${waitArrQuotes[currLoadingIndex]}`}{' '}
            <br />
            <br />
          </Typography>
          <CircularProgress />
        </Container>
      ) : (
        <Container sx={styles.bodyCont}>
          <Typography
            variant="h5"
            align="center"
            fontFamily="Outfit Variable"
            color="black"
            fontWeight="bold"
          >
            Welcome to Samplify <br />
            <br />
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="black"
            fontFamily="Outfit Variable"
          >
            To get started please upload a sample dataset in .csv format.
          </Typography>
          <FileUploadBox />
        </Container>
      )}
    </>
  );
}

const styles = {
  topLevelCont: {
    padding: '0px !important',
    backgroundColor: '#e4eae1',
    color: '#e4eae1',
    height: '100vh'
  },
  bodyCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '50vh',
    alignItems: 'center',
    marginTop: '10%'
  }
};
