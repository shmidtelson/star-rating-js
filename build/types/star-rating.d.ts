import { Options } from "./options";
import { View } from "./view";
import { Events } from "./events";
export declare class StarRating {
    view: View;
    options: Options;
    events: Events;
    constructor(el: HTMLElement, options?: {});
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
     * Handle changing color of stars
     */
    changeColor(hex: string): void;
    /**
     * Change size of stars
     * @param size
     */
    changeSize(size: string): void;
    /**
     * Change state loader to opposite
     */
    changeLoader(): void;
    /**
     * Change message in infopanel
     * @param text
     */
    changeMessage(text: string): void;
    /**
     * Event, when we click on any star
     * @param e
     */
    onChange(e: Event): void;
}
