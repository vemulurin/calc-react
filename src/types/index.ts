interface CalcRequest {
    input1: string;
    input2: string;
    operation: Operation;
  }

  type Operation = 'ADDITION' | 'SUBSTRACT' | 'MULTIPLY' | 'DIVIDE';

  interface CalcResponse
{
  result:string|number| any;
}

interface ApiResponse{
  data:any;
  error:Error|any;
}

type Mainwindow= typeof Window & {
  CONFIG:any
}