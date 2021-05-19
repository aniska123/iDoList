import React, { useEffect, useState } from 'react';
import Wrapper from './components/wrapper'
import { makeStyles } from '@material-ui/core/styles'
import Navigation from './components/nav/Navigation';
import Login from './components/Login/login';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import HomePage from './components/Homepage/Homepage';

function App() {
  const [apiContent, setApiContent] = useState('');
  const [name, setName] = useState('');

  const [loggedIn, setLoggedIn] = useState(false)
  const [backgroundImage, setBackgroundImage,] = useState('grey');

  useEffect(
    async () => {
       await fetch('http://localhost:3001/api/user',
        {
          headers: { 'Content-Type': 'application/json' },
          method: 'GET',
          credentials: 'include',
        }).then((response)=> response.json()).then((data)=>{
          setApiContent(data)});
    }, []);
    
  return (
    <div >
      <BrowserRouter>
        <Navigation setBackgroundImage={setBackgroundImage} name={name} setName={setName} loggedIn={loggedIn}
          setLoggedIn={setLoggedIn} ></Navigation>

        <Route path='/login' exact component={() => <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} setName={setName} />} />
        <Route path='/register' exact component={Register} />
        <Route path='/' exact component={() => <HomePage apiContent={apiContent} backgroundImage={backgroundImage} setBackgroundImage={setBackgroundImage} loggedIn={loggedIn}
          setLoggedIn={setLoggedIn} name={name}  />} />
      </BrowserRouter>
    </div>

  )
}

export default App;














