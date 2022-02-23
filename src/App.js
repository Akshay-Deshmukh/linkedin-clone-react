import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import FeedSection from "./components/Feed/FeedSection";

function App() {
  return (
    <div className="app">
        <Header />
        <div className={'app_body'}>
            <Sidebar />
            <FeedSection />
        </div>
    </div>
  );
}

export default App;
