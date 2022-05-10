import Enums from '@/services/enums';

const createWrapperBeforeSelect = (instances, config) => {
  const select = instances[Enums.ELEMENT_SELECT_BASE];
  const wrapper = instances[Enums.ELEMENT_SELECT_MULTIPLE];
  select.before(wrapper.element);
}

const SelectMultipleHandler = (instances, config) => {
  createWrapperBeforeSelect(instances, config);
};

export { SelectMultipleHandler };
