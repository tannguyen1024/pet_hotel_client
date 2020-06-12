import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import PetList from '../PetList/PetList'

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Pet Hotel</h1>
        <button>Dashboard</button>
        <button onClick={()=>{alert('Ads here.  Please purchase app to gain access to owners!')}}>Manage Owners</button>
        <PetList />
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(App);