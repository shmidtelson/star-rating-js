import "./assets/main.css";
import { Options } from "./options";

export class View {
  options: Options;
  htmlElement: HTMLElement;

  constructor(options: Options, htmlElement: HTMLElement) {
    this.options = options;
    this.htmlElement = htmlElement;
  }

  renderStars() {
    this.htmlElement.innerHTML = `
        <div class="stars-rating${!this.options.disabled ? " hoverable" : ""} ${
      this.options.uniqueClassName
    }">
            <div class="stars-rating--content">
                ${this._renderSpans(this.options.currentRating)}
            </div>
<!--            <div class="wpr-rating-loader wpr-hide">-->
<!--                 <i class="icon-spin4 animate-spin"></i>-->
<!--            </div>-->
            <div class="wpr-info-container">
                <span>Votes&nbsp;</span>
                <span class="wpr-total">(Current rating is ${
                  this.options.currentRating
                })</span>
            </div>
            <style>
                .${this.options.uniqueClassName} {
                    color: ${this.options.starsColorPrimary};
                }
              
                .${
                  this.options.uniqueClassName
                }.hoverable .icon-star:hover ~ .icon-star:before,
                .${
                  this.options.uniqueClassName
                }.hoverable .icon-star:hover:before {
                  color: ${this.options.starsColorHover};
                }
            </style>
        </div>
        `;
  }

  _renderSpans(value: number): string {
    const list = Array.from(Array(5).keys());
    let output = "";

    list.reverse().forEach((item) => {
      const dataValue = item + 1;
      output += `<span class="icon-star${
        value === dataValue ? " checked" : ""
      }" data-value="${dataValue}"></span>`;
    });

    return output;
  }
}
