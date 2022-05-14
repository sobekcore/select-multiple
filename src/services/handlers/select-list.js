import Enums from '@/services/enums';

const appendSelectListToWrapper = (instances, config) => {
  const wrapper = instances[Enums.ELEMENT_SELECT_MULTIPLE];
  const list = instances[Enums.ELEMENT_SELECT_LIST];
  wrapper.element.append(list.element);
};

const openSelectListOnClick = (instances, config) => {
  const wrapper = instances[Enums.ELEMENT_SELECT_MULTIPLE];
  const list = instances[Enums.ELEMENT_SELECT_LIST];

  wrapper.element.addEventListener(Enums.EVENT_CLICK, () => {
    list.visibility(true);
  });
};

const hideSelectListOnClickaway = (instances, config) => {
  const wrapper = instances[Enums.ELEMENT_SELECT_MULTIPLE];
  const list = instances[Enums.ELEMENT_SELECT_LIST];

  document.addEventListener(Enums.EVENT_CLICK, (event) => {
    if (!wrapper.element.contains(event.target)) {
      list.visibility(false);
    }
  });
};

const SelectListHandler = (instances, config) => {
  appendSelectListToWrapper(instances, config);
  openSelectListOnClick(instances, config);
  hideSelectListOnClickaway(instances, config);
};

export { SelectListHandler };
