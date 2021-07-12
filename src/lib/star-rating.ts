import {Options} from "./options";
import {View} from "./view";

export class StarRating {
    view: View;
    options: Options;

    constructor(el: HTMLElement, options: Record<string, any>) {
        this.options = new Options(options);
        this.view = new View(this.options, el);

        this.init();
    }

    init() {
        this.view.renderStars();
    }

    /**
     * Changing current rating value
     * @param value
     */
    changeRatingValue(value: number) {
        this.options.currentRating = value;

        this.view.renderStars();
    }

    /**
     * Disable hover effect and functions
     */
    disable() {
        this.options.disabled = true;
        this.view.renderStars();
    }

    /**
     * Enable hover effect and functions
     */
    enable() {
        this.options.disabled = false;
        this.view.renderStars();
    }

    /**
     *
     */
    changeColor(hex: string) {
        this.options.starsColorPrimary = hex;
        this.view.renderStars();
    }
}
