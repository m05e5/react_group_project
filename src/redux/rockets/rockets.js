const GET_ROCKETS = 'react_group_project/rockets/GET_ROCKETS';
const RESERVE_ROCKETS = 'react_group_project/rockets/RESERVE_ROCKETS';
const CANCEL_RESERVATION = 'react_group_project/rockets/CANCEL_RESERVATION';

const initialState = [];

export const rockets = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

export const reserveRockets = (id) => ({
  type: RESERVE_ROCKETS,
  id,
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    case RESERVE_ROCKETS:
      return state.map((rocket) => {
        if (rocket.id !== action.id) { return rocket; }
        return { ...rocket, reserved: true };
      });
    case CANCEL_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== action.id) { return rocket; }
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

export default reducer;
