import { v4 as uuid4 } from "uuid";
import { isHexColor, showErrorMessage } from "./utils";

const tinycolor = require("tinycolor2");

export class Options {
  private _currentRating = 5;
  private _starsColorPrimary = "#ff0000";
  private _starsColorHover = "#cc0000";
  private _uniqueClassName = null;
  private _disabled = false;
  private _size = "16px";
  private _loader = false;
  private _message = "";
  private _textColor = "#848484";
  private _infoPanelBackgroundColor = "#ffffff";

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

    if ("size" in options) {
      this.size = options.size;
    }

    if ("loader" in options) {
      this.loader = options.loader;
    }

    if ("message" in options) {
      this.message = options.message;
    }

    if ("textColor" in options) {
      this.textColor = options.textColor;
    }

    if ("infoPanelBackgroundColor" in options) {
      this.infoPanelBackgroundColor = options.infoPanelBackgroundColor;
    }

    this.uniqueClassName = `stars-rating--${uuid4()}`;
  }

  get starsColorPrimary(): string {
    return this._starsColorPrimary;
  }

  set starsColorPrimary(hex: string) {
    if (!isHexColor(hex)) {
      showErrorMessage(
        ` Error with validation hex color, current value is ${hex}, but i wait for example #000`
      );
      return;
    }

    this._starsColorPrimary = hex;
    this._starsColorHover = tinycolor(hex).darken(10).toString();
  }

  get starsColorHover(): string {
    return this._starsColorHover;
  }

  get currentRating(): number {
    return this._currentRating;
  }

  set currentRating(value: number) {
    if (value % 1 != 0 || !(value < 6 && value >= 0)) {
      showErrorMessage(
        `You must use params from 0 to 5, current value is ${value}`
      );
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

  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
  }

  get size(): string {
    return this._size;
  }

  set size(value: string) {
    this._size = value;
  }

  get loader(): boolean {
    return this._loader;
  }

  set loader(value: boolean) {
    this._loader = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get textColor(): string {
    return this._textColor;
  }

  set textColor(hex: string) {
    if (!isHexColor(hex)) {
      showErrorMessage(
        ` Error with validation hex color, current value is ${hex}, but i wait for example #000`
      );
      return;
    }

    this._textColor = hex;
  }

  get infoPanelBackgroundColor(): string {
    return this._infoPanelBackgroundColor;
  }

  set infoPanelBackgroundColor(hex: string) {
    if (!isHexColor(hex)) {
      showErrorMessage(
        ` Error with validation hex color, current value is ${hex}, but i wait for example #000`
      );
      return;
    }

    this._infoPanelBackgroundColor = hex;
  }
}
