import './index.css';

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const selects = document.querySelectorAll('select[multiple]');

    for (const select of selects) {
      select.classList.add('select-multiple-hidden');

      const wrapper = document.createElement('div');
      wrapper.classList.add('select-multiple');
      select.after(wrapper);

      const input = document.createElement('div');
      input.setAttribute('role', 'input');
      wrapper.append(input);

      const list = document.createElement('ul');
      list.setAttribute('role', 'listbox');
      wrapper.append(list);

      const options = select.querySelectorAll('option');

      for (const option of options) {
        const item = document.createElement('li');
        item.setAttribute('data-value', option.value);
        item.setAttribute('role', 'option');
        item.innerText = option.innerText;
        list.append(item);
      }

      const { width } = list.getBoundingClientRect();
      input.style.width = `${width}px`;
    }
  });
}
