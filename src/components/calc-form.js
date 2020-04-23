import React from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
class CalcForm extends React.Component {
    constructor(props) {
        super(props);
        //set state input1
        this.handleInput1Change = (e) => {
            this.setState({
                input1: +e.currentTarget.value,
            });
        };
        //set state input2
        this.handleInput2Change = (e) => {
            this.setState({
                input2: +e.currentTarget.value,
            });
        };
        //On button click
        this.handleClick = (e) => {
            e.preventDefault();
            const { input1, input2 } = this.state;
            this.props.handleButtonClick({
                input1,
                input2,
                operation: e.currentTarget.value,
            });
            this.setState({
                input1: 0,
                input2: 0
            });
        };
        this.state = {
            input1: 0,
            input2: 0,
        };
    }
    componentDidMount() { }
    render() {
        return (React.createElement(Form, null,
            React.createElement(FormGroup, null,
                React.createElement(Label, { for: "number1" }, "First Number"),
                React.createElement(Input, { type: 'number', onChange: this.handleInput1Change, value: this.state.input1 })),
            React.createElement(FormGroup, null,
                React.createElement(Label, { for: "number2" }, "Second Number"),
                React.createElement(Input, { type: 'number', onChange: this.handleInput2Change, value: this.state.input1 })),
            React.createElement(FormGroup, null,
                '  ',
                React.createElement(Button, { type: 'button', color: 'primary', value: 'ADDITION', onClick: this.handleClick }, "+")),
            React.createElement(FormGroup, null,
                '  ',
                React.createElement(Button, { type: 'button', color: 'primary', value: 'SUBTRACTION', onClick: this.handleClick }, "-")),
            React.createElement(FormGroup, null,
                '  ',
                React.createElement(Button, { type: 'button', color: 'primary', value: 'MULTIPLICATION', onClick: this.handleClick }, "*")),
            React.createElement(FormGroup, null,
                '  ',
                React.createElement(Button, { type: 'button', color: 'primary', value: 'DIVISION', onClick: this.handleClick }, "/"))));
    }
}
export default CalcForm;
//# sourceMappingURL=calc-form.js.map