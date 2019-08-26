import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './navigation';

import  Block  from './components/Block';

class App extends Component {
  render() {
    return (
      <Block>
        <Navigation />
      </Block>
    );
  }

}

export default App;