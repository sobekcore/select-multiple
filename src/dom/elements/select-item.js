import Enums from '@/services/enums';

const createSelectListItem = (config) => {
  const item = document.createElement('select-item');
  item.setAttribute('role', 'option');
  item.setAttribute(Enums.ELEMENT_VISIBILITY, true);

  return item;
};

export { createSelectListItem };
