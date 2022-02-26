import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import FeedSection from "./components/Feed/FeedSection";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./Redux/userStore/userSlice";
import Login from "./components/Login/Login";
import {onAuthStateChanged, setPersistence, browserSessionPersistence } from "firebase/auth";
import {auth} from "./firebase/Firebase";
import Widget from "./components/Widget/Widget";


function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    useEffect (() => {
       onAuthStateChanged(auth, userCred => {
           if(userCred) {
               dispatch(login({
                   email: userCred.email,
                   uid: userCred.uid,
                   displayName: userCred.displayName,
                   photoURL:userCred.photoURL
               }))
           }
           else {
               dispatch(logout())
               auth.signOut()
           }
       });
        
    }, [])
  return (
    <div className="app">
        
        {!user ? <Login /> : 
            <div>
                <Header />
        <div className={'app_body'}>
            <Sidebar />
            <FeedSection />
            <Widget />
        </div>
            </div>
        }
    </div>
  );
}

export default App;
