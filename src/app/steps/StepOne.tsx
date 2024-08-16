'use client';

// external imports:
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import '@fontsource-variable/outfit';
import '@fontsource-variable/overpass';

// internal imports:
import CustomAppBar from '../components/CustomAppBar';
import FileUploadBox from '../components/FileUploadBox';
import CustomStepper from '../components/CustomStepper';
import useStepOneStore from '../store/stepOneStore';

export default function StepOne() {
  const stepOneDone = useStepOneStore((state) => state.stepOneDone);
  return (
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
    alignItems: 'center',
    marginTop: '10%'
  }
};
