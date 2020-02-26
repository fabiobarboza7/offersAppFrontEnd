const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OFFERS_STATUS':
      return action.offer;

    default:
      return state;
  }
};
