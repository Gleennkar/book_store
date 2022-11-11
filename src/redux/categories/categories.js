import types from '../types/types';

const initialState = {
  category: '',
};

export const checkStatus = () => ({
  type: types.CHECK_STATUS,
});

// reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECK_STATUS:
      return { ...state, category: 'Under Construction' };
    default:
      return state;
  }
};

export default categoriesReducer;
