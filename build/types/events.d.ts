import { StarRating } from "./star-rating";
export declare class Events {
    htmlElement: HTMLElement;
    starRating: StarRating;
    constructor(htmlElement: HTMLElement, starRatingInstance: StarRating);
    init(): void;
    clickEventInit(): void;
}
