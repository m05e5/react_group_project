/*eslint-disable*/
const GET_ROCKETS = 'react_group_project/rockets/GET_ROCKETS';

const initialState = [];

export const rockets = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return ({ state: action.payload }) ;
    default:
      return { state };
  }
};

export default reducer;
