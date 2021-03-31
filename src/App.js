import './App.css';
import {Route} from 'react-router-dom';
import SignInUpProcess from './components/SignInUpProcess';

function App() {
  return (
    <div className="App">
      <Route path='/' component={SignInUpProcess} />
    </div>
  );
}

export default App;
