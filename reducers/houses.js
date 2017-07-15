// Action Types
export const types = {
  SET_HOUSES: 'HOUSES/SET_HOUSES'
};

// Initial State
const initialState = {
  houses: []
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_HOUSES:
      return {
        ...state,
        houses: action.payload.houses
      };

    default:
      return state;
  }
}

// Action Creators
export const actions = {
  setHouses: houses => ({
    type: types.SET_HOUSES,
    payload: { houses }
  })
}
