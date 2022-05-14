import Enums from '@/services/enums';
import { SelectElement } from '@/modules/select-builder/elements/select-element';

class SelectMultiple extends SelectElement {
  constructor(attributes) {
    const element = document.createElement(Enums.ELEMENT_SELECT_MULTIPLE);
    super(element, attributes);
  }

  selectOpenEvent() {
    const selectOpenEvent = new Event(Enums.EVENT_SELECT_OPEN);
    this.element.dispatchEvent(selectOpenEvent);
  }

  selectCloseEvent() {
    const selectCloseEvent = new Event(Enums.EVENT_SELECT_CLOSE);
    this.element.dispatchEvent(selectCloseEvent);
  }
}

export { SelectMultiple };
