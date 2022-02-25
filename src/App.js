import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import FeedSection from "./components/Feed/FeedSection";
import {useSelector} from "react-redux";
import {selectUser} from "./Redux/userStore/userSlice";
import Login from "./components/Login/Login";

function App() {
    const user = useSelector(selectUser)
  return (
    <div className="app">
        <Header />
        {console.log(user)}
        {!user ? <Login /> : 
        <div className={'app_body'}>
            <Sidebar />
            <FeedSection />
        </div>
        }
    </div>
  );
}

export default App;
