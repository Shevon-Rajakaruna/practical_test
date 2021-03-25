import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Col xs="6">                      
          <Button color="primary" className="px-4"
            onClick={event =>  window.location.href='/Login.js'}
              >
              Login
            </Button>
        </Col>
      </header>
      
    </div>
  );
}

export default App;
