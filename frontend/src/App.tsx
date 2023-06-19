import { ThemeProvider } from 'styled-components';
import { themes } from './themes';
import { Header } from './components/header/Header';

const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <Header />
    </ThemeProvider>
  );
};

export default App;
