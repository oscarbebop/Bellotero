import {
  CHANGE_TESTIMONIAL,
  ERROR_DOWNLOADING_CONFIGURATOR,
  ERROR_DOWNLOADING_NAVIGATION,
  ERROR_DOWNLOADING_TESTIMONIALS,
  NAVIGATION_SUCCESSFULLY_DOWNLOADED,
  SUCCESSFUL_CONFIGURATOR_DOWNLOAD,
  SUCCESSFUL_TESTIMONIAL_DOWNLOAD,
  TRY_TO_DOWNLOAD_CONFIGURATOR,
  TRY_TO_DOWNLOAD_NAVIGATION,
  TRY_TO_DOWNLOAD_TESTIMONIALS,
  UPDATE_MONTHLY_INGREDIENT,
  UPDATE_TIME_EMPLOYEES,
} from 'redux-types';

import { IGlobalState } from 'types';

const initialState: IGlobalState = {
  navigation: null,
  loading: false,
  error: false,
  testimonialPage: null,
  currentTestimonial: 0,
  configuratorPage: null,
  monthlyIngredientSpending: 36,
  fullTimeEmployees: 8,
};

export default function generalReducer(state = initialState, action: any) {
  switch (action.type) {
    case TRY_TO_DOWNLOAD_CONFIGURATOR:
    case TRY_TO_DOWNLOAD_TESTIMONIALS:
    case TRY_TO_DOWNLOAD_NAVIGATION:
      return {
        ...state,
        loading: action.payload,
      };
    case ERROR_DOWNLOADING_CONFIGURATOR:
    case ERROR_DOWNLOADING_NAVIGATION:
    case ERROR_DOWNLOADING_TESTIMONIALS:
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
    case SUCCESSFUL_CONFIGURATOR_DOWNLOAD:
      return {
        ...state,
        loading: false,
        error: false,
        configuratorPage: action.payload,
      };
    case SUCCESSFUL_TESTIMONIAL_DOWNLOAD:
      return {
        ...state,
        loading: false,
        error: false,
        testimonialPage: action.payload,
      };
    case CHANGE_TESTIMONIAL:
      return {
        ...state,
        currentTestimonial: action.payload,
      };
    case UPDATE_MONTHLY_INGREDIENT:
      return {
        ...state,
        monthlyIngredientSpending: action.payload,
      };
    case UPDATE_TIME_EMPLOYEES:
      return {
        ...state,
        fullTimeEmployees: action.payload,
      };
    default:
      return state;
  }
}
