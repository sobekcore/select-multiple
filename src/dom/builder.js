import Enums from '@/services/enums';
import { createSelectInput } from '@/dom/elements/select-input';
import { createSelectList } from '@/dom/elements/select-list';
import { createSelectListItem } from '@/dom/elements/select-item';
import { createSelectTag } from '@/dom/elements/select-tag';
import { createSelectRemove } from '@/dom/elements/select-remove';

const buildOnTopOfSelect = (select, config) => {
  const options = select.querySelectorAll('option');

  const wrapper = document.createElement('select-multiple');
  select.before(wrapper);

  const input = createSelectInput(config);
  wrapper.append(input);

  const list = createSelectList(config);
  wrapper.append(list);

  for (const option of options) {
    const item = createSelectListItem(config);
    item.setAttribute('data-value', option.value);
    item.innerText = option.innerText;
    list.append(item);

    item.addEventListener('click', () => {
      item.setAttribute(Enums.ELEMENT_VISIBILITY, false);
      option.setAttribute('selected', 'selected');

      const tag = createSelectTag(config);
      tag.innerText = item.innerText;

      const remove = createSelectRemove(config);
      remove.innerHTML = '&times;';

      tag.append(remove);
      input.append(tag);

      remove.addEventListener('click', () => {
        item.setAttribute(Enums.ELEMENT_VISIBILITY, true);
        option.removeAttribute('selected');
        tag.remove();
      }, { once: true });
    });
  }

  const { width } = list.getBoundingClientRect();
  input.style.width = `${width + Enums.TAG_REMOVE_WIDTH}px`;

  wrapper.addEventListener('click', () => {
    list.setAttribute(Enums.ELEMENT_VISIBILITY, true);
  });

  document.addEventListener('click', (event) => {
    if (!wrapper.contains(event.target)) {
      list.setAttribute(Enums.ELEMENT_VISIBILITY, false);
    }
  });
};

export { buildOnTopOfSelect };
