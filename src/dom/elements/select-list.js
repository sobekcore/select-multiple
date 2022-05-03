import Enums from '@/services/enums';
import { SelectElement } from '@/dom/elements/select-element';

class SelectList extends SelectElement {
  constructor(attributes) {
    const element = document.createElement(Enums.ELEMENT_SELECT_LIST);
    super(element, attributes);
  }
}

export { SelectList };
