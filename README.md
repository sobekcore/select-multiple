# Select Multiple
A replacement for native select multiple element. Built on top of the default browser `<select>` element. Dependency-less and lightweight. Provides convenient user experience across all the possible devices. (including mouse, keyboard and touch).

## Config Options
* <b>fullwidth</b> <br>
  type: `boolean` <br>
  default: `false`

  Defines if element should be render in full width or in minimum width required to properly display longest tag or placeholder text.

* <b>theme</b> <br>
  type: `object` <br>
  default: `undefined`

  This option defines the currently applied theme to the SelectMultiple class instance.

    * <b>name</b> <br>
      type: `SelectMultiple.THEME_MODERN` <br>
      default: `undefined`

      Name of the predefined theme.

    * <b>styles</b> <br>
      type: `string` <br>
      default: `undefined`

      A CSS string which will we applied to the SelectMultiple instance.
