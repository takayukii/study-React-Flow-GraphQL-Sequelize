import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {
  componentDidMount() {
    const payload = {
      query: `
      query getUser($userId: Int) {
        users(id: $userId) {
          id
          bio
          posts {
            title
          }
        }
      }
      `,
      variables: {
        userId: 2
      }
    };
    axios.post('/graphql', payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
