// Action Types
export const types = {
  CHANGE_BACKGROUND_COLOR: 'COMPOSE/CHANGE_BACKGROUND_COLOR'
};

// Initial State
const initialState = {
  backgroundColor: 'GREEN'
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: action.payload.color
      };

    default:
      return state;
  }
}

// Action Creators
export const actions = {
  changeBackgroundColor: color => ({
    type: types.CHANGE_BACKGROUND_COLOR,
    payload: { color }
  })
}
