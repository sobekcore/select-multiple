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

    this.select = select;
    this.config = config;
  }

  buildOnTopOfSelect() {
    this.options = this.select.querySelectorAll('option');

    const bagOfInstances = {};
    const handlersToExecute = [];

    // Add base select element that <select-multiple> is built on
    bagOfInstances[Enums.ELEMENT_SELECT_BASE] = this.select;

    for (const [name, next] of Object.entries(Document)) {
      const instance = new ElementToClass[name](Attributes[name]);
      bagOfInstances[name] = instance;

      if (Handlers[name] instanceof Function) {
        handlersToExecute.push({ instance: instance, handler: Handlers[name] });
      }

      this.createChildElements(handlersToExecute, bagOfInstances, next);
    }

    for (const handler of handlersToExecute) {
      this.customElementHandler(handler.handler, bagOfInstances);
    }
  }

  createChildElements(handlersToExecute, bagOfInstances, children) {
    for (const [name, next] of Object.entries(children)) {
      const instance = new ElementToClass[name](Attributes[name]);
      bagOfInstances[name] = instance;

      if (Handlers[name] instanceof Function) {
        handlersToExecute.push({ instance: instance, handler: Handlers[name] });
      }

      this.createChildElements(handlersToExecute, bagOfInstances, next);
    }
  }

  customElementHandler(handler, bagOfInstances) {
    handler(bagOfInstances);
  }
}

export { SelectBuilder };
