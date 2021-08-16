import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import Signin from './signin.js'
import Signup from './signup.js'
import Home from './home.js';

function App() {
  return (
    <div>
       <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />

        </Switch>
      </Router> 




    </div>
  );
}

export default App;
