import React, { Component } from 'react';
import { render } from 'react-dom';
import NavBar from './Components/Navbar/NavBar.jsx';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <>
        <NavBar />
      </>
    );
  }
}

render(<App />, document.getElementById('root'));
