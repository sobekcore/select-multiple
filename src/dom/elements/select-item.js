import Enums from '@/services/enums';
import { SelectElement } from '@/dom/elements/select-element';

class SelectItem extends SelectElement {
  constructor(attributes) {
    const element = document.createElement(Enums.ELEMENT_SELECT_ITEM);
    super(element, attributes);
  }
}

export { SelectItem };
