import { Options } from "./options";
import { View } from "./view";
export declare class StarRating {
    view: View;
    options: Options;
    constructor(el: HTMLElement, options: Record<string, any>);
    init(): void;
}
