import Enums from '@/services/enums';
import { SelectElement } from '@/dom/elements/select-element';

class SelectRemove extends SelectElement {
  constructor(attributes) {
    const element = document.createElement(Enums.ELEMENT_SELECT_REMOVE);
    super(element, attributes);
  }
}

export { SelectRemove };
