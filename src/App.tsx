import { HashRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import MyUnits from './components/MyUnits/MyUnits';

const App = () => {
  return (
    <HashRouter>
      <Header />
      <MyUnits />
    </HashRouter>
  );
}

export default App;
