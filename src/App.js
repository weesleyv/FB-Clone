import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';

function App() {
  const user = null;

  return (
    <div className="app">
      {!user ? <h1>Login</h1> : (
        <>
        <Header />

        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
        </>
      )}
    </div>
  );
}

export default App;
