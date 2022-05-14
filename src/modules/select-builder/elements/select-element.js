import Enums from '@/services/enums';

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

  getChildrenByAttribute(attribute, value) {
    return Array.from(this.element.children).filter((element) => {
      return element.getAttribute(attribute) === value;
    });
  }

  visibility(state) {
    this.element.setAttribute(Enums.ATTRIBUTE_VISIBILITY, state);
  }

  isVisible() {
    return this.element.getAttribute(Enums.ATTRIBUTE_VISIBILITY) === 'true';
  }

  loader(state) {
    this.element.setAttribute(Enums.ATTRIBUTE_LOADING, state);
  }

  isLoading() {
    return this.element.getAttribute(Enums.ATTRIBUTE_LOADING) === 'true';
  }

  focus() {
    this.element.focus();
  }

  remove() {
    this.element.remove();
  }
}

export { SelectElement };
