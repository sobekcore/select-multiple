import Enums from '@/services/enums';
import Attributes from '@/services/attributes';
import { SelectInput } from '@/dom/elements/select-input';
import { SelectList } from '@/dom/elements/select-list';
import { SelectItem } from '@/dom/elements/select-item';
import { SelectTag } from '@/dom/elements/select-tag';
import { SelectRemove } from '@/dom/elements/select-remove';

class SelectBuilder {
  constructor(select, config) {
    if (!(select instanceof HTMLSelectElement)) {
      throw new TypeError('Provided element is not an instance of HTMLSelectElement');
    }

    this.select = select;
    this.config = config;
  }

  buildOnTopOfSelect() {
    this.options = this.select.querySelectorAll('option');

    /**
     * @var {HTMLElement}
     */
    this.wrapper = document.createElement(Enums.ELEMENT_SELECT_MULTIPLE);
    this.select.before(this.wrapper);

    /**
     * @var {SelectInput}
     */
    this.input = new SelectInput(Attributes[Enums.ELEMENT_SELECT_INPUT]);
    this.wrapper.append(this.input.element);

    /**
     * @var {SelectList}
     */
    this.list = new SelectList(Attributes[Enums.ELEMENT_SELECT_LIST]);
    this.wrapper.append(this.list.element);

    for (const option of this.options) {
      const SelectItemAttributes = Attributes[Enums.ELEMENT_SELECT_ITEM];
      SelectItemAttributes[Enums.ATTRIBUTES_COMMON].push({ name: Enums.ATTRIBUTE_VALUE, value: option.value });
      SelectItemAttributes[Enums.ATTRIBUTE_TEXT] = option.innerText;

      /**
       * @var {SelectItem}
       */
      const item = new SelectItem(SelectItemAttributes);
      this.list.element.append(item.element);

      item.element.addEventListener('click', (event) => {
        item.visibility(false);
        option.setAttribute('selected', 'selected');

        const SelectTagAttributes = Attributes[Enums.ELEMENT_SELECT_TAG];
        SelectTagAttributes[Enums.ATTRIBUTE_TEXT] = event.target.innerText;

        /**
         * @var {SelectTag}
         */
        const tag = new SelectTag(SelectTagAttributes);
        this.input.element.append(tag.element);

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
          tag.element.remove();
        }, { once: true });
      });
    }

    const { width } = this.list.element.getBoundingClientRect();
    this.input.element.style.width = `${width + Enums.TAG_REMOVE_WIDTH}px`;

    this.wrapper.addEventListener('click', () => {
      this.list.visibility(true);
    });

    document.addEventListener('click', (event) => {
      if (!this.wrapper.contains(event.target)) {
        this.list.visibility(false);
      }
    });
  }
}

export { SelectBuilder };
