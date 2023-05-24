import actionTypes from '../actions/actionTypes';

const initState = {
  isLogin: true,
};

export default (state = initState, action: {type: string; payload: any}) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLogin: true,
      };
    case actionTypes.LOGIN_FAILED:
      return {
        isLogin: false,
      };
    default:
      return state;
  }
};
