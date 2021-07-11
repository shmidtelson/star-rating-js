import {Options} from "./options";

export class View {
    options: Options;
    htmlElement: HTMLElement;

    constructor(options: Options, htmlElement: HTMLElement) {
        this.options = options;
        this.htmlElement = htmlElement;
    }

    rerender() {
        this.htmlElement.innerHTML = `
        <div>
            <div style="color: ${this.options.starsColor}">
                <span class="icon-star" data-value="5"></span>
                <span class="icon-star" data-value="4"></span>
                <span class="icon-star" data-value="3"></span>
                <span class="icon-star" data-value="2"></span>
                <span class="icon-star" data-value="1"></span>
            </div>
<!--            <div class="wpr-rating-loader wpr-hide">-->
<!--                 <i class="icon-spin4 animate-spin"></i>-->
<!--            </div>-->
            <div class="wpr-info-container">
                <span>Votes&nbsp;</span>
                <span class="wpr-total">(Current rating is ${this.options.currentRating})</span>
            </div>
        </div>
        `
    }
}
