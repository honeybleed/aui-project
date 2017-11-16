import { ValidateHandler } from './validate-handler';
import { ValidateRet } from './validate-ret';
export declare class ValidateHelper {
    handlers: ValidateHandler[];
    successMessage: string;
    constructor(validateHandlers: ValidateHandler[], sM?: string);
    doValidate(value: any, onInput: boolean): Promise<ValidateRet>;
}
