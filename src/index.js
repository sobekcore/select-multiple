import { buildOnTopOfSelect } from '@/dom/builder';
import '@/styles/styles.css';

class SelectMultiple {
  constructor (config) {
    this.config = config;
  }

  transformAllSelects() {
    const elements = document.querySelectorAll('select[multiple]');

    for (const element of elements) {
      if (element instanceof HTMLSelectElement) {
        buildOnTopOfSelect(element, this.config);
      }
    }
  }

  transform(element) {
    if (!(element instanceof HTMLSelectElement)) {
      throw new ReferenceError('Provided element is not a <select> element instance');
    }

    buildOnTopOfSelect(element, this.config);
  }
}

export { SelectMultiple };
