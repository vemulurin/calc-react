import React from 'react';
import CalculatorForm from '../components/calc-form';
import { render } from '@testing-library/react';

interface MainContainerProps { 
    
}
interface MainContainerState { }
class MainContainer extends React.Component<MainContainerProps, MainContainerState>
{
    constructor(props: MainContainerProps) {
        super(props);
    }
    handleCalculatorSubmit = (params: any) => {
        console.log(params);
    }
    render() {

        return (
            <CalculatorForm
                handleButtonClick={this.handleCalculatorSubmit}
            ></CalculatorForm>
        )
    }
}
export default MainContainer;