import {v4 as uuid4} from 'uuid'
import {isHexColor, showErrorMessage} from "./utils";

const tinycolor = require("tinycolor2");

export class Options {
    get disabled(): boolean {
        return this._disabled;
    }

    set disabled(value: boolean) {
        this._disabled = value;
    }

    private _currentRating = 5;
    private _starsColorPrimary = "#ff0000";
    private _starsColorHover = "#ff8142";
    private _uniqueClassName = null;
    private _disabled = false;

    constructor(options: any) {
        if ("starsColor" in options) {
            this.starsColorPrimary = options.starsColor;
        }

        if ("currentRating" in options) {
            this.currentRating = options.currentRating;
        }

        if ("disabled" in options) {
            this.disabled = options.disabled;
        }

        this.uniqueClassName = `stars-rating--${uuid4()}`
    }

    get starsColorPrimary(): string {
        return this._starsColorPrimary;
    }

    set starsColorPrimary(hex: string) {
        if (!isHexColor(hex)) {
            showErrorMessage(` Error with validation hex color, current value is ${hex}, but i wait for example #000`)
            return;
        }

        this._starsColorPrimary = hex;
        this._starsColorHover = tinycolor(hex)
            .lighten(30)
            .toString();
    }

    get starsColorHover(): string {
        return this._starsColorHover;
    }

    get currentRating(): number {
        return this._currentRating;
    }

    set currentRating(value: number) {
        if (value % 1 != 0 || !(value < 6 && value >= 0)){
            showErrorMessage(`You must use params from 0 to 5, current value is ${value}`)
            return;
        }

        this._currentRating = value;
    }

    get uniqueClassName(): any {
        return this._uniqueClassName;
    }

    set uniqueClassName(value: any) {
        this._uniqueClassName = value;
    }
}
