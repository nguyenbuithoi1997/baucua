import React, { useEffect, useRef } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

import HomePage from 'Containers/HomePage';
import LoginPage from 'Containers/LoginPage';
import RegisterPage from 'Containers/RegisterPage';
import Loading from 'Components/Loading';
import Background from 'Src/images/tetsumvay.jpg';

function PrivateRoute({ children, isLogin, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function App() {
  const isLogin = Boolean(Cookies.get('token'));
  const loading = useRef();

  useEffect(() => {
    if (!['/login', '/register', '/home'].includes(window.location.pathname)) {
      window.location.href = '/home';
    }
  }, []);

  return (
    <div style={{ backgroundImage: `url(${Background})` }}>
      <Loading ref={loading} />
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/home" isLogin={isLogin}>
            <HomePage />
          </PrivateRoute>
          <Route exact path="/login" component={() => <LoginPage loading={loading} />} />
          <Route exact path="/register" component={() => <RegisterPage loading={loading} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
