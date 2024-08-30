'use client';

// external imports:
import { Container } from '@mui/material';
import '@fontsource-variable/outfit';
import '@fontsource-variable/overpass';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// internal imports:
import CustomAppBar from './components/CustomAppBar';
import CustomStepper from './components/CustomStepper';

export default function Home() {
  const theme = useTheme();

  const isXsOrMd = useMediaQuery(theme.breakpoints.down('md'));

  const contHeight = {
    height: isXsOrMd ? '100vh' : '100%'
  };

  return (
    <Container maxWidth={false} sx={{ ...styles.topLevelCont, ...contHeight }}>
      <CustomAppBar />
      <CustomStepper />
    </Container>
  );
}

const styles = {
  topLevelCont: {
    padding: '0px !important',
    margin: '0px !important',
    backgroundColor: '#C9D5C3'
  },
  bodyCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%'
  }
};
