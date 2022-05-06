import Attributes from '@/definitions/attributes';
import Enums from '@/services/enums';

import { SelectItem } from '@/builder/elements/select-item';
import { SelectTag } from '@/builder/elements/select-tag';
import { SelectRemove } from '@/builder/elements/select-remove';

const Handlers = {
  [Enums.ELEMENT_SELECT_MULTIPLE]: (instances, config) => {
    const select = instances[Enums.ELEMENT_SELECT_BASE];
    const wrapper = instances[Enums.ELEMENT_SELECT_MULTIPLE];
    select.before(wrapper.element);
  },
  [Enums.ELEMENT_SELECT_INPUT]: (instances, config) => {
    const wrapper = instances[Enums.ELEMENT_SELECT_MULTIPLE];
    const input = instances[Enums.ELEMENT_SELECT_INPUT];
    wrapper.element.append(input.element);
  },
  [Enums.ELEMENT_SELECT_LIST]: (instances, config) => {
    const wrapper = instances[Enums.ELEMENT_SELECT_MULTIPLE];
    const list = instances[Enums.ELEMENT_SELECT_LIST];
    wrapper.element.append(list.element);

    wrapper.element.addEventListener('click', () => {
      list.visibility(true);
    });

    document.addEventListener('click', (event) => {
      if (!wrapper.element.contains(event.target)) {
        list.visibility(false);
      }
    });
  },
  [Enums.ELEMENT_SELECT_ITEM]: (instances, config) => {
    const select = instances[Enums.ELEMENT_SELECT_BASE];
    const list = instances[Enums.ELEMENT_SELECT_LIST];
    const input = instances[Enums.ELEMENT_SELECT_INPUT];

    const options = select.querySelectorAll('option');

    for (const option of options) {
      const SelectItemAttributes = Attributes[Enums.ELEMENT_SELECT_ITEM];
      SelectItemAttributes[Enums.ATTRIBUTES_COMMON].push({ name: Enums.ATTRIBUTE_VALUE, value: option.value });
      SelectItemAttributes[Enums.ATTRIBUTE_TEXT] = option.innerText;

      /**
       * @var {SelectItem}
       */
      const item = new SelectItem(SelectItemAttributes);
      list.element.append(item.element);

      item.element.addEventListener('click', (event) => {
        item.visibility(false);
        option.setAttribute('selected', 'selected');

        const SelectTagAttributes = Attributes[Enums.ELEMENT_SELECT_TAG];
        SelectTagAttributes[Enums.ATTRIBUTE_TEXT] = event.target.innerText;

        /**
         * @var {SelectTag}
         */
        const tag = new SelectTag(SelectTagAttributes);
        input.element.append(tag.element);

        const SelectRemoveAttributes = Attributes[Enums.ELEMENT_SELECT_REMOVE];
        SelectRemoveAttributes[Enums.ATTRIBUTE_HTML] = '&times;';

        /**
         * @var {SelectRemove}
         */
        const remove = new SelectRemove(SelectRemoveAttributes);
        tag.element.append(remove.element);

        remove.element.addEventListener('click', () => {
          item.visibility(true);
          option.removeAttribute('selected');
          tag.remove();
        }, { once: true });
      });
    }

    const { width } = list.element.getBoundingClientRect();
    input.element.style.width = `${width + Enums.TAG_REMOVE_WIDTH}px`;
  },
};

export { Handlers };
