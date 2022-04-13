const init = { isOpen: false };

export const popupReducer = (state = init, action) => {
  switch (action.type) {
    case 'HANDLE_POPUP': {
      return { ...state, isOpen: !state.isOpen };
    }

    default:
      return { ...state };
  }
};
