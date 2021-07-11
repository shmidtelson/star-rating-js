export class Options {
    private _currentRating = 5;
    private _starsColor = '#ff0000';

    constructor(options: any) {

    }

    get currentRating(): number {
        return this._currentRating;
    }

    set currentRating(value: number) {
        this._currentRating = value;
    }

    get starsColor(): string {
        return this._starsColor;
    }

    set starsColor(value: string) {
        this._starsColor = value;
    }
}
