import { ThemeToStyles } from '@/services/styles';

class ConfigParser {
  constructor(config) {
    this.config = config;
  }

  parseConfigOptions() {
    if (this.config) {
      if (this.config.theme) {
        if (this.config.theme.name) {
          if (!this.config.theme.styles && ThemeToStyles[this.config.theme.name]) {
            this.config.theme.styles = ThemeToStyles[this.config.theme.name];
          }
        }
      }
    }

    return this.config;
  }
}

export { ConfigParser };
