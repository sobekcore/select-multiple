import Enums from "@/services/enums";

const Attributes = {
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
        name: Enums.ATTRIBUTE_VISIBILITY,
        value: true,
      },
    ],
  },
  [Enums.ELEMENT_SELECT_TAG]: {},
  [Enums.ELEMENT_SELECT_REMOVE]: {},
};

export default Attributes;
