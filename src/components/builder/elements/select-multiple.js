import Enums from '@/services/enums';
import { SelectElement } from '@/components/builder/elements/select-element';

class SelectMultiple extends SelectElement {
  constructor(attributes) {
    const element = document.createElement(Enums.ELEMENT_SELECT_MULTIPLE);
    super(element, attributes);
  }
}

export { SelectMultiple };
