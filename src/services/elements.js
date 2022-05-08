import Enums from '@/services/enums';

import { SelectMultiple } from '@/modules/select-builder/elements/select-multiple';
import { SelectInput } from '@/modules/select-builder/elements/select-input';
import { SelectList } from '@/modules/select-builder/elements/select-list';
import { SelectItem } from '@/modules/select-builder/elements/select-item';
import { SelectTag } from '@/modules/select-builder/elements/select-tag';
import { SelectRemove } from '@/modules/select-builder/elements/select-remove';

const ElementToClass = {
  [Enums.ELEMENT_SELECT_MULTIPLE]: SelectMultiple,
  [Enums.ELEMENT_SELECT_INPUT]: SelectInput,
  [Enums.ELEMENT_SELECT_LIST]: SelectList,
  [Enums.ELEMENT_SELECT_ITEM]: SelectItem,
  [Enums.ELEMENT_SELECT_TAG]: SelectTag,
  [Enums.ELEMENT_SELECT_REMOVE]: SelectRemove,
};

export { ElementToClass };
