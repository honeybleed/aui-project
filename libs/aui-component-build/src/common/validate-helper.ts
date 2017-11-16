import { ValidateHandler } from './validate-handler';
import { ValidateRet } from './validate-ret';

export class ValidateHelper {
  handlers: ValidateHandler[] = [];
  successMessage = '';
  constructor(validateHandlers: ValidateHandler[], sM?: string) {
    this.handlers = this.handlers.concat(validateHandlers);
    if (sM) {
      this.successMessage = sM;
    }
  }
  doValidate(value: any, onInput: boolean): Promise<ValidateRet> {
    const ret = {
      ret: true,
      msg: this.successMessage
    };
    const arr: Promise<ValidateRet>[] = [];
    if (onInput) {
      for (const validateHandler of this.handlers) {
        if (validateHandler.validateOnInput) {
          arr.push(validateHandler.doValidate(value));
        }
      }
    } else {
      for (const validateHandler of this.handlers) {
        arr.push(validateHandler.doValidate(value));
      }
    }
    return new Promise<ValidateRet>((resolve, reject) => {
      Promise.all(arr).then((validate: ValidateRet[]) => {
        resolve(ret);
      }).catch((err: ValidateRet) => {
        reject(err);
      })
    });
  }
}
