import React from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <h1>Stuff</h1>
      );
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(App);
