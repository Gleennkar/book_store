import types from '../types/types';
//

const initialState = [];

export const checkStatus = () => ({
  type: types.CHECK_STATUS,
});

// reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECK_STATUS:
      return 'under construction';
    default:
      return state;
  }
};

export default categoriesReducer;
