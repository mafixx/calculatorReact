import { ThemeProvider } from './context/ThemeContext';
import { Calculator } from './screens/Calculator';

export default function App() {


  return (
    <ThemeProvider>
      <Calculator />
    </ThemeProvider>
  );
}