import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import MyUnits from './components/MyUnits/MyUnits';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MyUnits />
    </BrowserRouter>
  );
}

export default App;
