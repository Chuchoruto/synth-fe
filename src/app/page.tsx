// external imports:
import { Container } from '@mui/material';
import '@fontsource-variable/outfit';
import '@fontsource-variable/overpass';

// internal imports:
import CustomAppBar from './components/CustomAppBar';
import CustomStepper from './components/CustomStepper';

export default function Home() {
  return (
    <Container maxWidth={false} sx={styles.topLevelCont}>
      <CustomAppBar />
      <CustomStepper />
    </Container>
  );
}

const styles = {
  topLevelCont: {
    padding: '0px !important',
    backgroundColor: '#C9D5C3',
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
