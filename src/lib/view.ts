import "./assets/main.scss";
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
        ${this._renderSpin()}
      </div>
      ${this._renderInfoPanel()}
      <style>
        .${this.options.uniqueClassName} {
          color: ${this.options.starsColorPrimary};
          font-size: ${this.options.size};
        }
        .${this.options.uniqueClassName} .stars-rating--info-panel {
          color: ${this.options.textColor};
          border: 1px solid ${this.options.textColor};
          background: ${this.options.infoPanelBackgroundColor};
        }
        .${this.options.uniqueClassName} .stars-rating--info-panel:before {
          border-right-color: ${this.options.textColor}
        }
        .${this.options.uniqueClassName} .stars-rating--info-panel:after {
          border-right-color: ${this.options.infoPanelBackgroundColor};
        }
        .${this.options.uniqueClassName} .icon-star{
          font-size: ${this.options.size};
        }
        .${
          this.options.uniqueClassName
        }.hoverable .icon-star:hover ~ .icon-star:before,
        .${this.options.uniqueClassName}.hoverable .icon-star:hover:before {
          color: ${this.options.starsColorHover};
        }
      </style>
    </div>
    `;
  }

  _renderInfoPanel(): string {
    if (this.options.loader) {
      return "";
    }

    if (this.options.message !== "") {
      return `
        <div class="stars-rating--info-panel"><span>${this.options.message}</span></div>
      `;
    }
    return "";
  }
  _renderSpin(): string {
    if (!this.options.loader) {
      return "";
    }

    return `
    <div class="wpr-rating-loader wpr-hide">
      <i class="icon-spin6 animate-spin"></i>
    </div>
`;
  }

  _renderSpans(value: string | number): string {
    if (this.options.loader) {
      return "";
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
