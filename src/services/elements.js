import Enums from '@/services/enums';

import { SelectMultiple } from '@/components/builder/elements/select-multiple';
import { SelectInput } from '@/components/builder/elements/select-input';
import { SelectList } from '@/components/builder/elements/select-list';
import { SelectItem } from '@/components/builder/elements/select-item';
import { SelectTag } from '@/components/builder/elements/select-tag';
import { SelectRemove } from '@/components/builder/elements/select-remove';

const ElementToClass = {
  [Enums.ELEMENT_SELECT_MULTIPLE]: SelectMultiple,
  [Enums.ELEMENT_SELECT_INPUT]: SelectInput,
  [Enums.ELEMENT_SELECT_LIST]: SelectList,
  [Enums.ELEMENT_SELECT_ITEM]: SelectItem,
  [Enums.ELEMENT_SELECT_TAG]: SelectTag,
  [Enums.ELEMENT_SELECT_REMOVE]: SelectRemove,
};

export { ElementToClass };
