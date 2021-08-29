import { axiosCall } from 'config/axios';

import {
  ERROR_DOWNLOADING_NAVIGATION,
  NAVIGATION_SUCCESSFULLY_DOWNLOADED,
  TRY_TO_DOWNLOAD_NAVIGATION,
} from 'redux-types';

// Navigation
const tryToDownloadNavigation = () => ({
  type: TRY_TO_DOWNLOAD_NAVIGATION,
  payload: true,
});

const errorDownloadingNavigation = () => ({
  type: ERROR_DOWNLOADING_NAVIGATION,
  payload: true,
});

const navigationSuccessfullyDownloaded = (navigation: any) => ({
  type: NAVIGATION_SUCCESSFULLY_DOWNLOADED,
  payload: navigation,
});

export function getNavigation() {
  return async (dispatch: any) => {
    dispatch(tryToDownloadNavigation());

    try {
      const res = await axiosCall.get('/app.json');
      dispatch(navigationSuccessfullyDownloaded(res.data.menu.items));
    } catch (error) {
      console.log(error);
      dispatch(errorDownloadingNavigation());
    }
  };
}
