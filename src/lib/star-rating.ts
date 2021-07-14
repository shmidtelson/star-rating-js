import { Options } from "./options";
import { View } from "./view";
import { Events } from "./events";

export class StarRating {
  view: View;
  options: Options;
  events: Events;

  constructor(el: HTMLElement, options: Record<string, any>) {
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
   * Event, when we click on any star
   * @param e
   */
  onChange(e: Event) {
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
