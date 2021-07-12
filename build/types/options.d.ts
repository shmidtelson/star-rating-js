export declare class Options {
    get disabled(): boolean;
    set disabled(value: boolean);
    private _currentRating;
    private _starsColorPrimary;
    private _starsColorHover;
    private _uniqueClassName;
    private _disabled;
    constructor(options: any);
    get starsColorPrimary(): string;
    set starsColorPrimary(hex: string);
    get starsColorHover(): string;
    get currentRating(): number;
    set currentRating(value: number);
    get uniqueClassName(): any;
    set uniqueClassName(value: any);
}
