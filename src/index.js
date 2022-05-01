import './index.css';

const TAG_REMOVE_WIDTH = 16;

document.addEventListener('DOMContentLoaded', () => {
  const selects = document.querySelectorAll('select[multiple]');

  for (const select of selects) {
    select.classList.add('select-multiple-hidden');

    const options = select.querySelectorAll('option');

    const wrapper = document.createElement('div');
    wrapper.classList.add('select-multiple');
    select.after(wrapper);

    const input = document.createElement('div');
    input.setAttribute('role', 'input');
    input.setAttribute('tabindex', '0');
    wrapper.append(input);

    const list = document.createElement('ul');
    list.setAttribute('role', 'listbox');
    wrapper.append(list);

    for (const option of options) {
      const item = document.createElement('li');
      item.setAttribute('data-value', option.value);
      item.setAttribute('role', 'option');
      item.innerText = option.innerText;
      list.append(item);

      item.addEventListener('click', () => {
        item.classList.toggle('hidden');
        option.setAttribute('selected', 'selected');

        const tag = document.createElement('tag');
        tag.innerText = item.innerText;

        const remove = document.createElement('i');
        remove.innerHTML = '&times;';

        tag.append(remove);
        input.append(tag);

        remove.addEventListener('click', () => {
          item.classList.toggle('hidden');
          option.removeAttribute('selected');
          tag.remove();
        }, { once: true });
      });
    }

    const { width } = list.getBoundingClientRect();
    input.style.width = `${width + TAG_REMOVE_WIDTH}px`;

    wrapper.addEventListener('click', () => {
      list.classList.add('visible');
    });

    document.addEventListener('click', (event) => {
      if (!wrapper.contains(event.target)) {
        list.classList.remove('visible');
      }
    });
  }
});
