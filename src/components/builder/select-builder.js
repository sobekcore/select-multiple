import Document from '@/definitions/document';
import Attributes from '@/definitions/attributes';

import Enums from '@/services/enums';
import { ElementToClass } from '@/services/elements';
import { Handlers } from '@/services/handlers';

class SelectBuilder {
  constructor(select, config) {
    if (!(select instanceof HTMLSelectElement)) {
      throw new TypeError('Provided element is not an instance of HTMLSelectElement');
    }

    this.config = config;
    this.select = select;
    this.wrapper = null;
  }

  buildOnTopOfSelect() {
    const bagOfInstances = {};
    const handlersToExecute = [];

    bagOfInstances[Enums.ELEMENT_SELECT_BASE] = this.select;
    this.createChildElements(handlersToExecute, bagOfInstances, Document);

    for (const handler of handlersToExecute) {
      this.customElementHandler(handler, bagOfInstances);
    }
  }

  removeBuiltSelect() {
    this.wrapper.remove();
  }

  createChildElements(handlersToExecute, bagOfInstances, children) {
    for (const [name, next] of Object.entries(children)) {
      const instance = new ElementToClass[name](Attributes[name]);
      bagOfInstances[name] = instance;

      if (this.wrapper === null) {
        this.wrapper = instance;
      }

      if (Handlers[name] instanceof Function) {
        handlersToExecute.push(Handlers[name]);
      }

      this.createChildElements(handlersToExecute, bagOfInstances, next);
    }
  }

  customElementHandler(handler, bagOfInstances) {
    handler(bagOfInstances, this.config);
  }
}

export { SelectBuilder };
