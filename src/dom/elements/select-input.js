const createSelectInput = (config) => {
  const input = document.createElement('select-input');
  input.setAttribute('role', 'input');
  input.setAttribute('tabindex', '0');

  return input;
};

export { createSelectInput };
