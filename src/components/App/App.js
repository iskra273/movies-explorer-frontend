import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function App() {
  const { pathname } = useLocation();

  return (
    <div className="app">
      {pathname === "/" || 
      pathname === "/movies" || 
      pathname === "/saved-movies" || 
      pathname === "/profile" ? (
        <Header />
        ) : (
          ""
        )}
    
      <Switch>
        <Route exact path="/">
          <Main  />   
        </Route>
            
        <Route path="/movies">
          <Movies  />   
        </Route>

        <Route path="/saved-movies">
          <SavedMovies />   
        </Route>

        <Route path="/profile">
          <Profile />   
        </Route>
        
        <Route path="/signin">
          <Login  />   
        </Route>
            
        <Route path="/signup">
          <Register  />     
        </Route>

        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>

      {pathname === "/" || 
      pathname === "/movies" || 
      pathname === "/saved-movies" ? (
        <Footer />
        ) : (
          ""
        )}
    </div>
  );
}

export default App;
