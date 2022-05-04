import Enums from '@/services/enums';
import { SelectElement } from '@/builder/elements/select-element';

class SelectTag extends SelectElement {
  constructor(attributes) {
    const element = document.createElement(Enums.ELEMENT_SELECT_TAG);
    super(element, attributes);
  }
}

export { SelectTag };
