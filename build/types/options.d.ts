export declare class Options {
    private _currentRating;
    private _starsColorPrimary;
    private _starsColorHover;
    private _uniqueClassName;
    private _disabled;
    private _size;
    private _loader;
    private _message;
    constructor(options: any);
    get starsColorPrimary(): string;
    set starsColorPrimary(hex: string);
    get starsColorHover(): string;
    get currentRating(): number;
    set currentRating(value: number);
    get uniqueClassName(): any;
    set uniqueClassName(value: any);
    get disabled(): boolean;
    set disabled(value: boolean);
    get size(): string;
    set size(value: string);
    get loader(): boolean;
    set loader(value: boolean);
    get message(): string;
    set message(value: string);
}
