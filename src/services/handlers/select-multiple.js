import Enums from '@/services/enums';

const createWrapperBeforeSelect = (instances, config) => {
  const select = instances[Enums.ELEMENT_SELECT_BASE];
  const wrapper = instances[Enums.ELEMENT_SELECT_MULTIPLE];
  select.before(wrapper.element);
};

const setupEventsForSelectMultiple = (instances, config) => {
  const wrapper = instances[Enums.ELEMENT_SELECT_MULTIPLE];
  const input = instances[Enums.ELEMENT_SELECT_INPUT];
  const list = instances[Enums.ELEMENT_SELECT_LIST];

  wrapper.element.addEventListener(Enums.EVENT_SELECT_OPEN, () => {
    list.visibility(true);
  });

  wrapper.element.addEventListener(Enums.EVENT_SELECT_CLOSE, () => {
    list.visibility(false);
    input.focus();
  });
};

const SelectMultipleHandler = (instances, config) => {
  createWrapperBeforeSelect(instances, config);
  setupEventsForSelectMultiple(instances, config);
};

export { SelectMultipleHandler };
