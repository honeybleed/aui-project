import { ComponentWithStatus } from '@aui/common';
import { IconObj } from '../icon/icon.directive';
export declare class TextInputComponent extends ComponentWithStatus {
    value: string;
    placeholder: string;
    icon: IconObj;
    tail: IconObj;
    label: string;
    type: 'text' | 'password';
    disable: boolean;
    constructor();
    hasIcon(): boolean;
    hasTail(): boolean;
    hasLabel(): boolean;
}
