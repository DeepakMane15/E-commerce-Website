import React, {useEffect} from 'react';
import './App.css';
import Layout from './components/Layout';
import { Route, Switch } from 'react-router-dom';
import Home from './container/Home';
import Signup from './container/Signup';
import Signin from './container/Signin';
import PrivateRoute from './components/HOC/privateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';
import Products from './container/Products';
import Orders from './container/Orders';
import Category from './container/Category';


function App() {

  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []
  );

  return (
    <div >
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/products"  component={Products} />
        <PrivateRoute path="/orders"  component={Orders} />
        <PrivateRoute path="/category"  component={Category} />

        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />

      </Switch>


    </div>
  );
}

export default App;
