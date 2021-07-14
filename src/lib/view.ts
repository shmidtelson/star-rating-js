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
      <div class="stars-rating${!this.options.disabled ? " hoverable" : ""} ${this.options.uniqueClassName}">
      <div class="stars-rating--content">
        ${this._renderSpans(this.options.currentRating)}
        ${this._renderSpin()}
      </div>
      ${this._renderInfoPanel()}
      <style>
        .${this.options.uniqueClassName} {
          color: ${this.options.starsColorPrimary};
          font-size: ${this.options.size};
        }
        .${this.options.uniqueClassName} .icon-star{
          font-size: ${this.options.size};
        }
        .${this.options.uniqueClassName}.hoverable .icon-star:hover ~ .icon-star:before,
        .${this.options.uniqueClassName}.hoverable .icon-star:hover:before {
          color: ${this.options.starsColorHover};
        }
      </style>
    </div>
    `;
  }

  _renderInfoPanel(): string{
    if (this.options.loader) {
      return ''
    }

    return `
      <div class="stars-rating--result">
        <span>Votes&nbsp;</span>
        <span class="wpr-total"></span>
      </div>
    `
  }
  _renderSpin(): string {
    if (!this.options.loader) {
      return ''
    }

    return `
    <div class="wpr-rating-loader wpr-hide">
      <i class="icon-spin6 animate-spin"></i>
    </div>
`
  }

  _renderSpans(value: string | number): string {
    if (this.options.loader) {
      return ''
    }

    value = typeof value === "string" ? parseInt(value) : value;

    const list = Array.from(Array(5).keys());
    let output = "";

    list.reverse().forEach((item) => {
      const dataValue = item + 1;

      output += `
        <span
          class="icon-star${value === dataValue ? " checked" : ""}"
          data-value="${dataValue}"
        ></span>`;
    });

    return output;
  }
}
