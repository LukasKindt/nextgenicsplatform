import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Sidebar/Navbar';
import SignInUpProcess from './components/Onboarding/SignInUpProcess';
import Banner from './components/Sidebar/Banner'



function App() {

  return (

    <div className="App">
    <Switch>
      <Route path='/:page'>
        <div className="platform">
          <Navbar/>

          <div className="pageContent">
            <Banner/>
          </div>
        </div>
      </Route>
      <Route path='/'>
        <SignInUpProcess/>
      </Route>
    </Switch>
  </div>
  );
}

export default App;
