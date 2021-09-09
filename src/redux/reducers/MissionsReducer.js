/* eslint-disable max-len */

const SET_MISSIONS = 'missions/SET_MISSIONS';
const STATUS_MEMBER = 'missions/STATUS_MEMBER';
const JOIN_MISSSION = 'missions/JOIN_MISSSION';

export const setMissions = (payload) => ({
  type: SET_MISSIONS,
  payload,
});

export const statusMission = (payload) => ({
  type: STATUS_MEMBER,
  payload,
});

export const joinMission = (id) => ({
  type: JOIN_MISSSION,
  id,
});

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_MISSIONS: {
      return [...state, ...action.payload];
    }
    case JOIN_MISSSION: {
      return state.map((mission) => (mission.id !== action.id ? mission : { ...mission, join: !mission.join }));
    }
    default:
      return state;
  }
};

export default reducer;
