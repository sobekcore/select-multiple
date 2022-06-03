import Enums from '@/services/enums';

const appendSelectInputToWrapper = (instances, config) => {
  const wrapper = instances[Enums.ELEMENT_SELECT_MULTIPLE];
  const input = instances[Enums.ELEMENT_SELECT_INPUT];
  wrapper.element.append(input.element);
};

const setPlaceholderForSelectInput = (instances, config) => {
  const select = instances[Enums.ELEMENT_SELECT_BASE];
  const input = instances[Enums.ELEMENT_SELECT_INPUT];

  const placeholder = select.getAttribute('placeholder');

  if (placeholder && placeholder.length) {
    input.element.setAttribute(Enums.ATTRIBUTE_PLACEHOLDER, placeholder);
  }
};

const setupEventsForSelectInput = (instances, config) => {
  const wrapper = instances[Enums.ELEMENT_SELECT_MULTIPLE];
  const input = instances[Enums.ELEMENT_SELECT_INPUT];
  const list = instances[Enums.ELEMENT_SELECT_LIST];

  let currentlyFocusedItem = 0;
  let currentlyFocusedRemove = 0;
  let currentlyFocusedElement = Enums.ELEMENT_SELECT_ITEM;

  input.element.addEventListener(Enums.EVENT_KEYDOWN, (event) => {
    if (event.target.tagName.toLowerCase() === Enums.ELEMENT_SELECT_INPUT) {
      if (event.code === Enums.KEYCODE_SPACE || event.code === Enums.KEYCODE_ENTER) {
        wrapper.selectOpenEvent();
        event.stopPropagation();

        const itemElements = list.getChildrenByAttribute(Enums.ATTRIBUTE_VISIBILITY, 'true');
        if (itemElements.length !== 0) itemElements[currentlyFocusedItem].focus();
      }
    }
  });

  window.addEventListener(Enums.EVENT_KEYDOWN, (event) => {
    const listElementIsVisible = list.isVisible();
    let focusedItemHasChanged = false;
    let focusedRemoveHasChanged = false;

    if (listElementIsVisible) {
      const itemElements = list.getChildrenByAttribute(Enums.ATTRIBUTE_VISIBILITY, 'true');
      const removeElements = Array.from(input.element.querySelectorAll(Enums.ELEMENT_SELECT_REMOVE));

      /**
       * Close select-list by pressing certain keys
       */
      if (event.code === Enums.KEYCODE_TAB || event.code === Enums.KEYCODE_ESCAPE) {
        wrapper.selectCloseEvent();
      }

      /**
       * Click on either select-item or select-remove from keyboard
       */
      if (event.code === Enums.KEYCODE_ENTER) {
        if (currentlyFocusedElement === Enums.ELEMENT_SELECT_ITEM) {
          if (itemElements[currentlyFocusedItem] instanceof HTMLElement) {
            setTimeout(() => {
              itemElements[currentlyFocusedItem].click();
              if (itemElements.length === 1) list.visibility(false);
            });

            if (currentlyFocusedItem < itemElements.length - 1) {
              const nextItemToFocus = currentlyFocusedItem + 1;
              itemElements[nextItemToFocus].focus();
              currentlyFocusedElement = Enums.ELEMENT_SELECT_ITEM;
            }

            if (itemElements.length === 1) {
              input.focus();
            }
          }
        }

        if (currentlyFocusedElement === Enums.ELEMENT_SELECT_REMOVE) {
          if (removeElements[currentlyFocusedRemove] instanceof HTMLElement) {
            removeElements[currentlyFocusedRemove].click();
            list.visibility(true);

            setTimeout(() => {
              if (currentlyFocusedRemove < removeElements.length - 1) {
                const nextRemoveToFocus = currentlyFocusedRemove + 1;
                removeElements[nextRemoveToFocus].focus();
                currentlyFocusedElement = Enums.ELEMENT_SELECT_REMOVE;
              }

              if (removeElements.length === 1) {
                input.focus();
              }
            });
          }
        }
      }

      /**
       * Move to the previous select-item element if possible
       */
      if (event.code === Enums.KEYCODE_ARROW_UP) {
        if (currentlyFocusedElement !== Enums.ELEMENT_SELECT_ITEM) {
          currentlyFocusedItem = 0;
          focusedItemHasChanged = true;
        }

        if (!focusedItemHasChanged && currentlyFocusedItem > 0) {
          currentlyFocusedItem--;
          focusedItemHasChanged = true;
        }
      }

      /**
       * Move to the next select-item element if possible
       */
      if (event.code === Enums.KEYCODE_ARROW_DOWN) {
        if (currentlyFocusedElement !== Enums.ELEMENT_SELECT_ITEM) {
          currentlyFocusedItem = 0;
          focusedItemHasChanged = true;
        }

        if (!focusedItemHasChanged && currentlyFocusedItem < itemElements.length - 1) {
          currentlyFocusedItem++;
          focusedItemHasChanged = true;
        }
      }

      /**
       * Move to the previous select-remove element if possible
       */
      if (event.code === Enums.KEYCODE_ARROW_LEFT) {
        if (currentlyFocusedElement !== Enums.ELEMENT_SELECT_REMOVE) {
          currentlyFocusedRemove = 0;
          focusedRemoveHasChanged = true;
        }

        if (!focusedRemoveHasChanged && currentlyFocusedRemove > 0) {
          currentlyFocusedRemove--;
          focusedRemoveHasChanged = true;
        }
      }

      /**
       * Move to the next select-remove element if possible
       */
      if (event.code === Enums.KEYCODE_ARROW_RIGHT) {
        if (currentlyFocusedElement !== Enums.ELEMENT_SELECT_REMOVE) {
          currentlyFocusedRemove = 0;
          focusedRemoveHasChanged = true;
        }

        if (!focusedRemoveHasChanged && currentlyFocusedRemove < removeElements.length - 1) {
          currentlyFocusedRemove++;
          focusedRemoveHasChanged = true;
        }
      }

      if (focusedItemHasChanged) {
        if (itemElements[currentlyFocusedItem] instanceof HTMLElement) {
          itemElements[currentlyFocusedItem].focus();
          currentlyFocusedElement = Enums.ELEMENT_SELECT_ITEM;
          event.preventDefault();
        }
      }

      if (focusedRemoveHasChanged) {
        if (removeElements[currentlyFocusedRemove] instanceof HTMLElement) {
          removeElements[currentlyFocusedRemove].focus();
          currentlyFocusedElement = Enums.ELEMENT_SELECT_REMOVE;
          event.preventDefault();
        }
      }
    }
  });
};

const SelectInputHandler = (instances, config) => {
  appendSelectInputToWrapper(instances, config);
  setPlaceholderForSelectInput(instances, config);
  setupEventsForSelectInput(instances, config);
};

export { SelectInputHandler };
