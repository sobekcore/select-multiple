import { SelectBuilder } from '@/builder/select-builder';
import '@/styles/styles.css';

class SelectMultiple {
  constructor (config) {
    this.config = config;
    this.builders = [];
  }

  transform(element) {
    const builder = new SelectBuilder(element, this.config);
    this.builders.push({ element: element, builder: builder });
    builder.buildOnTopOfSelect();
  }

  transformAllSelects(selector) {
    const elementSelector = selector ? selector : 'select[multiple]';
    const elements = document.querySelectorAll(elementSelector);

    for (const element of elements) {
      const builder = new SelectBuilder(element, this.config);
      this.builders.push({ element: element, builder: builder });
      builder.buildOnTopOfSelect();
    }
  }

  destroy(element) {
    const target = this.builders.find((builder) => builder.element === element);
    if (target.builder instanceof SelectBuilder) target.builder.removeBuiltSelect();
  }

  destroyAllSelects(selector) {
    const elementSelector = selector ? selector : 'select[multiple]';
    const elements = document.querySelectorAll(elementSelector);

    for (const element of elements) {
      const target = this.builders.find((builder) => builder.element === element);
      if (target.builder instanceof SelectBuilder) target.builder.removeBuiltSelect();
    }
  }
}

export default SelectMultiple;
