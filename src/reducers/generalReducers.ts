import { SAMPLE } from 'types';

const initialState = {
  text: '',
};

export default function generalReducer(state = initialState, action: any) {
  switch (action.type) {
    case SAMPLE:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
}
