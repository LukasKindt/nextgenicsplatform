import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Sidebar/Navbar';
import SignInUpProcess from './components/Onboarding/SignInUpProcess';
import Foresight from './Pages/Foresight';
import Insight from './Pages/Insight';
import Oversight from './Pages/Oversight';
import Hindsight from './Pages/Hindsight';

function App() {
  return (
    <div className="App">
      <Route path='/' component={SignInUpProcess} />
    </div>
    /*<div class="platform">
    <Router>
    <Switch>
          <Route path="/:id" children={<Navbar />} />
    </Switch>
      
      <div class="pageContent">
      <div className='navbar'>
        </div>
      <Switch>
        <Route path='/foresight' component={Foresight} />
        <Route path='/insight' component={Insight} />
        <Route path='/oversight' component={Oversight} />
        <Route path='/hindsight' component={Hindsight} />
      </Switch>
      </div>
    </Router>
  </div>*/
  );
}

export default App;
