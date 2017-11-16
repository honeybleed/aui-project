import { ValidateRet } from './validate-ret';

export interface ValidateHandler {
  validateOnInput: boolean;
  errorMsg: string;
  doValidate: (value: any, ...rest: any[]) => Promise<ValidateRet>;
}

