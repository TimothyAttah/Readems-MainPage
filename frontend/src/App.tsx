import { ThemeProvider } from 'styled-components';
import { themes } from './themes';

const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <div>
        <h1>Hello world!!!</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
