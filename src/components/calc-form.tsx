import React, { FormEvent } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';


interface UserFormProps {
handleButtonClick: (param: any)=> void;
}

interface UserFormState {
    input1: number;
    input2: number;
}
class CalcForm extends React.Component<UserFormProps, UserFormState>
{
    constructor(props: any) {
        super(props);
        this.state = {
            input1: 0,
            input2: 0,
        };
    }
    componentDidMount(){}
    //set state input1
    handleInput1Change = (e: any) => {
        this.setState({
            input1: +e.currentTarget.value,
        })
    };
    //set state input2
    handleInput2Change = (e: any) => {
        this.setState({
            input2: +e.currentTarget.value,
        })
    };
    //On button click
    handleClick =(e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const {input1,input2} = this.state;

        this.props.handleButtonClick({
            input1,
            input2,
            operation: e.currentTarget.value,
        });

        this.setState({
            input1:0,
            input2:0
        });

    };

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label>First Number</Label>
                    <Input
                        type='number'
                        onChange={this.handleInput1Change}
                        value={this.state.input1}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Second Number</Label>
                    <Input
                        type='number'
                        onChange={this.handleInput2Change}
                        value={this.state.input1}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    {'  '}
                    <Button
                        type='button'
                        color='primary'
                        value='ADDITION'
                        onClick={this.handleClick}
                    > 
                    + 
                    </Button>
                </FormGroup>
                <FormGroup>
                    {'  '}
                    <Button
                        type='button'
                        color='primary'
                        value='SUBTRACTION'
                        onClick={this.handleClick}
                    > 
                    -
                    </Button>
                </FormGroup>
                <FormGroup>
                    {'  '}
                    <Button
                        type='button'
                        color='primary'
                        value='MULTIPLICATION'
                        onClick={this.handleClick}
                    > 
                    * 
                    </Button>
                </FormGroup>
                <FormGroup>
                    {'  '}
                    <Button
                        type='button'
                        color='primary'
                        value='DIVISION'
                        onClick={this.handleClick}
                    > 
                        / 
                    </Button>
                </FormGroup>
            </Form>
        )
    }
}

export default CalcForm;