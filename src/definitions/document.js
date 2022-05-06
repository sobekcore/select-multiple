import Enums from '@/services/enums';

/**
 * Document definiton must contain exactly one root element
 *
 * @var {Object} Document
 */
const Document = {
  [Enums.ELEMENT_SELECT_MULTIPLE]: {
    [Enums.ELEMENT_SELECT_INPUT]: {},
    [Enums.ELEMENT_SELECT_LIST]: {
      [Enums.ELEMENT_SELECT_ITEM]: {},
    },
  },
};

export default Document;
