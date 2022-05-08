import Enums from '@/services/enums';
import { SelectElement } from '@/modules/select-builder/elements/select-element';

class SelectMultiple extends SelectElement {
  constructor(attributes) {
    const element = document.createElement(Enums.ELEMENT_SELECT_MULTIPLE);
    super(element, attributes);
  }
}

export { SelectMultiple };
