import { ValidateHandler, ValidateRet } from '@aui/component';
import { reject } from 'q';

export class LengValidateHandler implements ValidateHandler {
  validateOnInput = false;
  errorMsg: string;
  max: number;
  min: number;
  constructor(maxL: number, minL: number, eMsg: string) {
    this.max = maxL;
    this.min = minL;
    this.errorMsg = eMsg;
  }
  doValidate(value: string):  Promise<ValidateRet> {
    return new Promise<ValidateRet>((resolve, reject) => {
      setTimeout(() => {
        if (value && value.length > this.min && value.length < this.max) {
          resolve({
            ret: true
          });
        } else {
          reject({
            ret: false,
            msg: this.errorMsg
          });
        }
      }, 5000);
    });
  }
}

export class HasAValidateHandler implements ValidateHandler {
  validateOnInput = true;
  errorMsg: string;
  constructor(eMsg: string) {
    this.errorMsg = eMsg;
  }
  doValidate(value: string): Promise<ValidateRet> {
    return new Promise<ValidateRet>((resolve, reject) => {
      if (value.indexOf('a') >= 0) {
        resolve({
          ret: true
        });
      } else {
        reject({
          ret: false,
          msg: this.errorMsg
        });
      }
    });
  }
}
