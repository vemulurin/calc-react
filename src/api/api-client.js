import { apiClient } from './base';
export const calculate = (request) => {
    switch (request.operation) {
        case 'ADDITION':
            return addNumbers(request);
        case 'SUBSTRACT':
            return substractNumbers(request);
        case 'MULTIPLY':
            return multiplyNumbers(request);
        case 'DIVIDE':
            return divideNumbers(request);
        default:
            break;
    }
};
export const addNumbers = (request) => {
    return apiClient.get(`/add`, {
        params: {
            input1: request.input1,
            input2: request.input2,
        },
    });
};
export const substractNumbers = (request) => {
    return apiClient.get(`/substract`, {
        params: {
            input1: request.input1,
            input2: request.input2,
        },
    });
};
export const multiplyNumbers = (request) => {
    return apiClient.get(`/multiply`, {
        params: {
            input1: request.input1,
            input2: request.input2,
        },
    });
};
export const divideNumbers = (request) => {
    return apiClient.get(`/divide`, {
        params: {
            input1: request.input1,
            input2: request.input2,
        },
    });
};
//# sourceMappingURL=api-client.js.map