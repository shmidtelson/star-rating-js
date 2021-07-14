import { Options } from "./options";
import { View } from "./view";
import { Events } from "./events";

// @ts-ignore
import pjson from "../../package.json";

export class StarRating {
  view: View;
  options: Options;
  events: Events;
  version: string;

  constructor(el: HTMLElement, options = {}) {
    this.version = pjson.version;

    this.options = new Options(options);
    this.view = new View(this.options, el);
    this.events = new Events(el, this);

    this.init();
  }

  init() {
    this.view.renderStars();
    this.events.init();
  }

  /**
   * Changing current rating value
   * @param value
   */
  changeRatingValue(value: number) {
    this.options.currentRating = value;

    this.init();
  }

  /**
   * Disable hover effect and functions
   */
  disable() {
    this.options.disabled = true;
    this.init();
  }

  /**
   * Enable hover effect and functions
   */
  enable() {
    this.options.disabled = false;
    this.init();
  }

  /**
   * Handle changing color of stars
   */
  changeColor(hex: string) {
    this.options.starsColorPrimary = hex;
    this.view.renderStars();
  }

  /**
   * Change size of stars
   * @param size
   */
  changeSize(size: string) {
    this.options.size = size;
    this.view.renderStars();
  }

  /**
   * Change state loader to opposite
   */
  changeLoader() {
    this.options.loader = !this.options.loader;
    this.view.renderStars();
  }

  /**
   * Change message in infopanel
   * @param text
   */
  changeMessage(text: string) {
    this.options.message = text;
    this.view.renderStars();
  }
  /**
   * Event, when we click on any star
   * @param e
   */
  onChange(e: Event) {
    if (this.options.disabled) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!e?.target?.dataset?.value) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.changeRatingValue(e.target.dataset.value);
  }
}
