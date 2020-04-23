var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import CalculatorForm from '../components/calc-form';
import { calculate } from '../api/api-client';
class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleCalculatorSubmit = (params) => __awaiter(this, void 0, void 0, function* () {
            this.setState({ status: 'pending' });
            const response = yield calculate(params);
            this.setState({ result: response.data.result, status: 'success' });
        });
    }
    render() {
        return (React.createElement(CalculatorForm, { handleButtonClick: this.handleCalculatorSubmit }));
    }
}
export default MainContainer;
//# sourceMappingURL=main-container.js.map