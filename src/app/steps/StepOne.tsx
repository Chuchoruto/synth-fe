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

export default function StepOne() {
  return (
    <Container sx={styles.bodyCont}>
      <Typography
        variant="h5"
        align="center"
        fontFamily="Outfit Variable"
        color="black"
        fontWeight="bold"
      >
        Welcome to Synth <br />
        <br />
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="black"
        fontFamily="Outfit Variable"
      >
        To get started please upload a sample dataset in either .csv, .json, or
        .xlsx format.
      </Typography>
      <FileUploadBox />
    </Container>
  );
}

const styles = {
  bodyCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%'
  }
};
