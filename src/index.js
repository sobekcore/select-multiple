import Enums from '@/services/enums';
import { SelectBuilder } from '@/components/builder/select-builder';
import { ConfigParser } from '@/components/parsers/config-parser';
import { StyleParser } from '@/components/parsers/style-parser';
import Core from '@/styles/core.css';

class SelectMultiple {
  static THEME_MODERN = Enums.THEME_MODERN;

  constructor (config) {
    const configParser = new ConfigParser(config);
    this.config = configParser.parseConfigOptions();

    const theme = this.config?.theme?.styles;
    const styleParser = new StyleParser(Core, theme);
    styleParser.mountCoreStylesheet();

    if (styleParser.theme) {
      styleParser.mountThemeStylesheet();
      styleParser.removeOverlapingStyles();
    }

    this.__builders__ = [];
  }

  transform(element) {
    const builder = new SelectBuilder(element, this.config);
    this.__builders__.push({ element: element, builder: builder });
    builder.buildOnTopOfSelect();
  }

  transformAllSelects(selector) {
    const elementSelector = selector ? selector : 'select[multiple]';
    const elements = document.querySelectorAll(elementSelector);

    for (const element of elements) {
      const builder = new SelectBuilder(element, this.config);
      this.__builders__.push({ element: element, builder: builder });
      builder.buildOnTopOfSelect();
    }
  }

  destroy(element) {
    const target = this.__builders__.find((builder) => builder.element === element);
    if (target.builder instanceof SelectBuilder) target.builder.removeBuiltSelect();
  }

  destroyAllSelects(selector) {
    const elementSelector = selector ? selector : 'select[multiple]';
    const elements = document.querySelectorAll(elementSelector);

    for (const element of elements) {
      const target = this.__builders__.find((builder) => builder.element === element);
      if (target.builder instanceof SelectBuilder) target.builder.removeBuiltSelect();
    }
  }
}

export default SelectMultiple;
