import Enums from '@/services/enums';

import { SelectMultiple } from '@/builder/elements/select-multiple';
import { SelectInput } from '@/builder/elements/select-input';
import { SelectList } from '@/builder/elements/select-list';
import { SelectItem } from '@/builder/elements/select-item';
import { SelectTag } from '@/builder/elements/select-tag';
import { SelectRemove } from '@/builder/elements/select-remove';

const ElementToClass = {
  [Enums.ELEMENT_SELECT_MULTIPLE]: SelectMultiple,
  [Enums.ELEMENT_SELECT_INPUT]: SelectInput,
  [Enums.ELEMENT_SELECT_LIST]: SelectList,
  [Enums.ELEMENT_SELECT_ITEM]: SelectItem,
  [Enums.ELEMENT_SELECT_TAG]: SelectTag,
  [Enums.ELEMENT_SELECT_REMOVE]: SelectRemove,
};

export { ElementToClass };
