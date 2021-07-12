import { Options } from "./options";
import { View } from "./view";
export declare class StarRating {
    view: View;
    options: Options;
    constructor(el: HTMLElement, options: Record<string, any>);
    init(): void;
    /**
     * Changing current rating value
     * @param value
     */
    changeRatingValue(value: number): void;
    /**
     * Disable hover effect and functions
     */
    disable(): void;
    /**
     * Enable hover effect and functions
     */
    enable(): void;
    /**
     *
     */
    changeColor(hex: string): void;
}
