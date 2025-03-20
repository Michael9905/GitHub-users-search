import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GithubProvider } from './context/context';

function App() {
  return (
    <AuthWrapper>
      <GithubProvider>
      <Router>
        <Routes>
          <Route path='/' element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='*' element={<Error/>}/>
{/*         <PrivateRoute path = "/" exact={true}>
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path = "/login">
          <Login></Login>
        </Route>
        <Route path="*">
            <Error></Error>
        </Route> */}
        </Routes>
      </Router>
      </GithubProvider>
    </AuthWrapper>
  );
}

export default App;
