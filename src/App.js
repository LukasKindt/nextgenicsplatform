import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Sidebar/Navbar';
import SignInUpProcess from './components/Onboarding/SignInUpProcess';
import Core from './Pages/Core/Core';
import Foresight from './Pages/Foresight/Foresight';
import Insight from './Pages/Insight/Insight';
import Oversight from './Pages/Oversight/Oversight';
import Hindsight from './Pages/Hindsight/Hindsight';
import Titanic from './Pages/Oversight/Titanic';
import Banner from './components/Sidebar/Banner'



function App() {

  return (
    /*<div className="App">
      <Route path='/' component={SignInUpProcess} />
    </div>*/
    <div class="platform">
    <Router>
    <Switch>
      <Route path="/:page" children={<Navbar />} />
    </Switch>
      <div class="pageContent">
      <Route path="/:page" children={<Banner />} />
        {/*<Switch>
    <Route path='/core/start' component={Core} />
    <Route path='/foresight/start' component={Foresight} />
    <Route path='/insight/start' component={Insight} />
    <Route path='/oversight/start' component={Oversight} />
    <Route path='/oversight/titanic' component={Titanic}/>
    <Route path='/hindsight/start' component={Hindsight} />
        </Switch>*/}
      </div>
    </Router>
  </div>
  );
}

export default App;
