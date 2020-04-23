import React, { Component } from 'react';
import MainContainer from './containers/main-container';
import { Container } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
    <>
    <Container>
    <MainContainer />
    </Container>
    </>)
  }

}
export default App;
