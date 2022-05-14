import Attributes from '@/definitions/attributes';
import Enums from '@/services/enums';

import { SelectItem } from '@/modules/select-builder/elements/select-item';
import { SelectTag } from '@/modules/select-builder/elements/select-tag';
import { SelectRemove } from '@/modules/select-builder/elements/select-remove';

const createSelectListItems = (instances, config) => {
  const select = instances[Enums.ELEMENT_SELECT_BASE];
  const input = instances[Enums.ELEMENT_SELECT_INPUT];
  const list = instances[Enums.ELEMENT_SELECT_LIST];

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

    item.element.addEventListener(Enums.EVENT_CLICK, (event) => {
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

      remove.element.addEventListener(Enums.EVENT_CLICK, () => {
        item.visibility(true);
        option.removeAttribute('selected');
        tag.remove();
      }, { once: true });
    });
  }
};

const applyConfigFullwidth = (instances, config) => {
  const select = instances[Enums.ELEMENT_SELECT_BASE];
  const wrapper = instances[Enums.ELEMENT_SELECT_MULTIPLE];
  const input = instances[Enums.ELEMENT_SELECT_INPUT];
  const list = instances[Enums.ELEMENT_SELECT_LIST];

  if (config.fullwidth) {
    wrapper.element.style.width = '100%';
    return;
  }

  const options = select.querySelectorAll('option');
  let longestOptionValue = '';

  for (const option of options) {
    if (option.innerText.length > longestOptionValue.length) {
      longestOptionValue = option.innerText;
    }
  }

  const { width: initialWidth } = list.element.getBoundingClientRect();

  const SelectTagAttributes = Attributes[Enums.ELEMENT_SELECT_TAG];
  SelectTagAttributes[Enums.ATTRIBUTE_TEXT] = longestOptionValue;

  const tag = new SelectTag(SelectTagAttributes);
  input.element.append(tag.element);

  const SelectRemoveAttributes = Attributes[Enums.ELEMENT_SELECT_REMOVE];
  SelectRemoveAttributes[Enums.ATTRIBUTE_HTML] = '&times;';

  const remove = new SelectRemove(SelectRemoveAttributes);
  tag.element.append(remove.element);

  const { width: finalWidth } = list.element.getBoundingClientRect();

  const width = initialWidth > finalWidth ? initialWidth : finalWidth;
  input.element.style.width = `${width}px`;

  tag.remove();
};

const finishWrapperCreation = (instances, config) => {
  const wrapper = instances[Enums.ELEMENT_SELECT_MULTIPLE];
  wrapper.loader(false);
};

const SelectItemHandler = (instances, config) => {
  createSelectListItems(instances, config);
  applyConfigFullwidth(instances, config);
  finishWrapperCreation(instances, config);
};

export { SelectItemHandler };
