import Enums from '@/services/enums';
import { SelectBuilder } from '@/modules/select-builder/select-builder';
import { ConfigParser } from '@/modules/config-parser/config-parser';
import { StyleParser } from '@/modules/style-parser/style-parser';
import Core from '@/styles/core.css';

const SelectMultiple = (function () {
  const properties = new WeakMap();

  const getBuilders = (instance) => {
    return properties.get(instance).builders;
  };

  const setBuilders = (instance, builders) => {
    properties.set(instance, { builders: builders });
  };

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

      setBuilders(this, []);
    }

    transform(element) {
      const builder = new SelectBuilder(element, this.config);
      const add = { element: element, builder: builder };
      setBuilders(this, [...getBuilders(this), add]);
      builder.buildOnTopOfSelect();
    }

    transformAllSelects(selector) {
      const elementSelector = selector ? selector : 'select[multiple]';
      const elements = document.querySelectorAll(elementSelector);

      for (const element of elements) {
        const builder = new SelectBuilder(element, this.config);
        const add = { element: element, builder: builder };
        setBuilders(this, [...getBuilders(this), add]);
        builder.buildOnTopOfSelect();
      }
    }

    destroy(element) {
      const target = getBuilders(this).find((builder) => builder.element === element);
      if (target.builder instanceof SelectBuilder) target.builder.removeBuiltSelect();
    }

    destroyAllSelects(selector) {
      const elementSelector = selector ? selector : 'select[multiple]';
      const elements = document.querySelectorAll(elementSelector);

      for (const element of elements) {
        const target = getBuilders(this).find((builder) => builder.element === element);
        if (target.builder instanceof SelectBuilder) target.builder.removeBuiltSelect();
      }
    }
  }

  return SelectMultiple;
})();

export default SelectMultiple;
