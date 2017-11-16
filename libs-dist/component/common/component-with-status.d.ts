export declare class ComponentWithStatus {
    status: {
        [key: string]: boolean;
    };
    isDisabled: boolean;
    constructor(s: string[]);
    setStatus(keys: string[]): void;
    unsetStatus(keys: string[]): void;
    dumpStatus(): string;
}
