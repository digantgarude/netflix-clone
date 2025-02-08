import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
  
    // Unsubscribe is used if the component is unmounted then to help with clean up.
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // User is signed in
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));

      }else{
        // user is signed out
        console.log("User is signed out");
        dispatch(logout());
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
              <Route path='/profile' element={<ProfileScreen/>} />
              <Route path='/' element={<HomeScreen/>} />
            </Routes>
            )
        }
      </Router>
    </div>
  );
}

export default App;
