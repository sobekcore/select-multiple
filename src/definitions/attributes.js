import Enums from '@/services/enums';

/**
 * Attributes definiton is a source of attributes given to HTML elements
 *
 * @var {Object} Attributes
 */
const Attributes = {
  [Enums.ELEMENT_SELECT_MULTIPLE]: {
    [Enums.ATTRIBUTES_COMMON]: [
      {
        name: Enums.ATTRIBUTE_LOADING,
        value: true,
      },
    ],
  },
  [Enums.ELEMENT_SELECT_INPUT]: {
    [Enums.ATTRIBUTES_COMMON]: [
      {
        name: Enums.ATTRIBUTE_ROLE,
        value: 'input',
      },
      {
        name: Enums.ATTRIBUTE_TABINDEX,
        value: 0,
      },
    ],
  },
  [Enums.ELEMENT_SELECT_LIST]: {
    [Enums.ATTRIBUTES_COMMON]: [
      {
        name: Enums.ATTRIBUTE_ROLE,
        value: 'listbox',
      },
      {
        name: Enums.ATTRIBUTE_VISIBILITY,
        value: false,
      },
    ],
  },
  [Enums.ELEMENT_SELECT_ITEM]: {
    [Enums.ATTRIBUTES_COMMON]: [
      {
        name: Enums.ATTRIBUTE_ROLE,
        value: 'option',
      },
      {
        name: Enums.ATTRIBUTE_TABINDEX,
        value: -1,
      },
      {
        name: Enums.ATTRIBUTE_VISIBILITY,
        value: true,
      },
    ],
  },
  [Enums.ELEMENT_SELECT_TAG]: {},
  [Enums.ELEMENT_SELECT_REMOVE]: {
    [Enums.ATTRIBUTES_COMMON]: [
      {
        name: Enums.ATTRIBUTE_ARIA_HIDDEN,
        value: true,
      },
      {
        name: Enums.ATTRIBUTE_TABINDEX,
        value: -1,
      },
    ],
  },
};

export default Attributes;
