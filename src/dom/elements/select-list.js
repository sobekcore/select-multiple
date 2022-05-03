const createSelectList = (config) => {
  const list = document.createElement('select-list');
  list.setAttribute('role', 'listbox');

  return list;
};

export { createSelectList };
