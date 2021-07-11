import { Options } from './options'
import { View } from './view'

export class StarRating {
    view: View;
    options: Options;

    constructor(el: HTMLElement, options: Record<string, any>) {
        this.options = new Options(options)
        this.view = new View(this.options, el);

        this.init()
    }

    init() {
        this.view.rerender();
    }
}
