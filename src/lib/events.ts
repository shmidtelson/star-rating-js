import {StarRating} from "./star-rating";

export class Events {
  htmlElement: HTMLElement;
  starRating: StarRating;

  constructor(htmlElement: HTMLElement, starRatingInstance: StarRating) {
    this.htmlElement = htmlElement;
    this.starRating = starRatingInstance;
  }

  init() {
    setTimeout(() => {
      this.clickEventInit();
    }, 50);
  }

  clickEventInit() {
    const elementList = this.htmlElement.querySelectorAll('.icon-star');

    for (let i = 0; i < elementList.length; i++) {
      elementList[i].addEventListener("click", (e) => {
        this.starRating.onChange(e);
      })
    }
  }
}
