import { appendStylesToHead } from '@/services/styles';

class StyleParser {
  constructor(core, theme) {
    this.core = core;
    this.theme = theme;

    this.coreElement = null;
    this.themeElement = null;
  }

  mountCoreStylesheet() {
    this.coreElement = appendStylesToHead(this.core);
  }

  mountThemeStylesheet() {
    this.themeElement = appendStylesToHead(this.theme);
  }

  removeOverlapingStyles() {
    /**
     * This piece of code removes CSS properties from the Core stylesheet that are
     * overwriting any of the same named properties defined in a currently applied theme
     */
    for (const rule of this.coreElement.sheet.cssRules) {
      for (const themeRule of this.themeElement.sheet.cssRules) {
        if (rule.selectorText && rule.selectorText.endsWith(themeRule.selectorText)) {
          for (const themeStyle of themeRule.style) {
            rule.style.removeProperty(themeStyle);
          }
        }
      }
    }
  }
}

export { StyleParser };
