import React, { Component } from 'react';
import MainContainer from './containers/main-container';
import { Container } from 'reactstrap';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(Container, null,
                React.createElement(MainContainer, null))));
    }
}
export default App;
//# sourceMappingURL=App.js.map