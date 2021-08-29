import {
  ERROR_DOWNLOADING_NAVIGATION,
  NAVIGATION_SUCCESSFULLY_DOWNLOADED,
  TRY_TO_DOWNLOAD_NAVIGATION,
} from 'redux-types';

import { IGlobalState } from 'types';

const initialState: IGlobalState = {
  navigation: null,
  loading: false,
  error: false,
  testimonialPage: null,
  configuratorPage: null,
};

export default function generalReducer(state = initialState, action: any) {
  switch (action.type) {
    case TRY_TO_DOWNLOAD_NAVIGATION:
      return {
        ...state,
        loading: action.payload,
      };
    case ERROR_DOWNLOADING_NAVIGATION:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NAVIGATION_SUCCESSFULLY_DOWNLOADED:
      return {
        ...state,
        loading: false,
        error: false,
        navigation: action.payload,
      };
    default:
      return state;
  }
}
