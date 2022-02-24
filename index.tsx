import React, { Component } from 'react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import NavBar from './Components/Navbar/NavBar.js';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <NavBar />
  </StyledEngineProvider>,
  document.querySelector('#root')
);
