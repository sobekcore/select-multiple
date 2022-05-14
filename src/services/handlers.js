import Enums from '@/services/enums';

import { SelectMultipleHandler } from '@/services/handlers/select-multiple';
import { SelectInputHandler } from '@/services/handlers/select-input';
import { SelectListHandler } from '@/services/handlers/select-list';
import { SelectItemHandler } from '@/services/handlers/select-item';

const Handlers = {
  [Enums.ELEMENT_SELECT_MULTIPLE]: SelectMultipleHandler,
  [Enums.ELEMENT_SELECT_INPUT]: SelectInputHandler,
  [Enums.ELEMENT_SELECT_LIST]: SelectListHandler,
  [Enums.ELEMENT_SELECT_ITEM]: SelectItemHandler,
};

export { Handlers };
