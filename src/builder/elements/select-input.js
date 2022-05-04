import Enums from '@/services/enums';
import { SelectElement } from '@/builder/elements/select-element';

class SelectInput extends SelectElement {
  constructor(attributes) {
    const element = document.createElement(Enums.ELEMENT_SELECT_INPUT);
    super(element, attributes);
  }
}

export { SelectInput };
