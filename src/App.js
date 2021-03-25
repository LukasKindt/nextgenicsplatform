import './App.css';
import {Route} from 'react-router-dom';
import Multistepform from './components/Multistepform';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Multistepform} />
    </div>
  );
}

export default App;
