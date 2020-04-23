import React from 'react';
import CalculatorForm from '../components/calc-form';
import { calculate } from '../api/api-client';


interface MainContainerState { 
    result:any;
    status:string;
}
export class MainContainer extends React.Component<{}, MainContainerState>
{
    constructor(props: any) {
        super(props);
        this.state={
            result:0,
            status:'no_result',
        };
    }
    handleCalculatorSubmit = async (params: CalcRequest) => {
        this.setState({ status: 'pending' });
        const response = await calculate(params);
        this.setState({ result: response.data.result, status: 'success' });
      };
    render() {

        return (
            <CalculatorForm
                handleButtonClick={this.handleCalculatorSubmit}
            ></CalculatorForm>
        )
    }
}
export default MainContainer;