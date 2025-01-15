import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // User is signed in
        console.log(userAuth);
      }else{
        // user is signed out
        console.log("User is signed out");
      }
    });

    return unsubscribe;
  }, [])

  return (
    <div className="app">
      <Router>
        {
          !user ? (<LoginScreen/>) : (
            <Routes>
              <Route path='/' element={<HomeScreen/>} />
            </Routes>
            )
        }
      </Router>
    </div>
  );
}

export default App;
