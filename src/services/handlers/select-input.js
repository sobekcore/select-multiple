import Enums from '@/services/enums';

const appendSelectInputToWrapper = (instances, config) => {
  const wrapper = instances[Enums.ELEMENT_SELECT_MULTIPLE];
  const input = instances[Enums.ELEMENT_SELECT_INPUT];
  wrapper.element.append(input.element);
};

const setPlaceholderForSelectInput = (instances, config) => {
  const select = instances[Enums.ELEMENT_SELECT_BASE];
  const input = instances[Enums.ELEMENT_SELECT_INPUT];

  const placeholder = select.getAttribute('placeholder');
  if (placeholder) input.element.setAttribute(Enums.ATTRIBUTE_PLACEHOLDER, placeholder);
};

const SelectInputHandler = (instances, config) => {
  appendSelectInputToWrapper(instances, config);
  setPlaceholderForSelectInput(instances, config);
};

export { SelectInputHandler };
