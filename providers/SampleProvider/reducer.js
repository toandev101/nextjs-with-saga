import {
    HELLO_WATCH,
    HELLO,
} from './constants';

const INITIAL_STATE = {
    sayHello: '',
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HELLO_WATCH:
      return {
        ...state,
        loading: true,
      };
    case HELLO:
      return {
        ...state,
        sayHello: action.payload,
        loading: false,
      };
  
    default:
      return state;
  }
};