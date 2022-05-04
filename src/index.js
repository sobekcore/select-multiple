import { SelectBuilder } from '@/builder/select-builder';
import '@/styles/styles.css';

class SelectMultiple {
  constructor (config) {
    this.config = config;
  }

  transformAllSelects() {
    const elements = document.querySelectorAll('select[multiple]');

    for (const element of elements) {
      const builder = new SelectBuilder(element, this.config);
      builder.buildOnTopOfSelect();
    }
  }

  transform(element) {
    const builder = new SelectBuilder(element, this.config);
    builder.buildOnTopOfSelect();
  }
}

window.SelectMultiple = SelectMultiple;

export { SelectMultiple };
