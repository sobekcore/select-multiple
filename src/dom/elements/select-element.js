import Enums from "@/services/enums";

class SelectElement {
  constructor(element, attributes) {
    this.element = element;

    if (attributes[Enums.ATTRIBUTE_HTML]) {
      element.innerHTML = attributes[Enums.ATTRIBUTE_HTML];
    }

    if (attributes[Enums.ATTRIBUTE_TEXT]) {
      element.innerText = attributes[Enums.ATTRIBUTE_TEXT];
    }

    if (attributes[Enums.ATTRIBUTES_COMMON]) {
      for (const attribute of attributes[Enums.ATTRIBUTES_COMMON]) {
        element.setAttribute(attribute.name, attribute.value);
      }
    }
  }

  visibility(visible) {
    this.element.setAttribute(Enums.ATTRIBUTE_VISIBILITY, visible);
  }
}

export { SelectElement };
