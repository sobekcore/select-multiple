import Enums from '@/services/enums';
import ModernTheme from '@/styles/themes/modern.theme.css';

const ThemeToStyles = {
  [Enums.THEME_MODERN]: ModernTheme,
};

const appendStylesToHead = (styles) => {
  const head = document.querySelector('head');
  const style = document.createElement('style');
  style.innerHTML = styles;
  head.append(style);
  return style;
};

export { ThemeToStyles, appendStylesToHead };
