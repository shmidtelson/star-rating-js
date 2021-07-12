import "./assets/main.css";
import { Options } from "./options";
export declare class View {
    options: Options;
    htmlElement: HTMLElement;
    constructor(options: Options, htmlElement: HTMLElement);
    renderStars(): void;
    _renderSpans(value: number): string;
}
