import { axiosCall } from 'config/axios';

import { INavigation, ITestimonials } from 'types';

import {
  CHANGE_TESTIMONIAL,
  ERROR_DOWNLOADING_NAVIGATION,
  ERROR_DOWNLOADING_TESTIMONIALS,
  NAVIGATION_SUCCESSFULLY_DOWNLOADED,
  SUCCESSFUL_TESTIMONIAL_DOWNLOAD,
  TRY_TO_DOWNLOAD_NAVIGATION,
  TRY_TO_DOWNLOAD_TESTIMONIALS,
} from 'redux-types';

/**
 *
 * Navigation
 */
const tryToDownloadNavigation = () => ({
  type: TRY_TO_DOWNLOAD_NAVIGATION,
  payload: true,
});

const errorDownloadingNavigation = () => ({
  type: ERROR_DOWNLOADING_NAVIGATION,
  payload: true,
});

const navigationSuccessfullyDownloaded = (navigation: INavigation) => ({
  type: NAVIGATION_SUCCESSFULLY_DOWNLOADED,
  payload: navigation,
});

export function getNavigation() {
  return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch(tryToDownloadNavigation());

    try {
      const res = await axiosCall.get('/app.json');
      dispatch(navigationSuccessfullyDownloaded(res.data.menu.items));
    } catch (error) {
      dispatch(errorDownloadingNavigation());
    }
  };
}

/**
 *
 *
 */

/**
 *
 * testimonials
 */

const tryToDownloadTestimonials = () => ({
  type: TRY_TO_DOWNLOAD_TESTIMONIALS,
  payload: true,
});

const errorDownloadingTestimonials = () => ({
  type: ERROR_DOWNLOADING_TESTIMONIALS,
  payload: true,
});

const successfulTestimonialDownload = (testimonials: ITestimonials) => ({
  type: SUCCESSFUL_TESTIMONIAL_DOWNLOAD,
  payload: testimonials,
});

export const changeTestimonial = (position: number) => ({
  type: CHANGE_TESTIMONIAL,
  payload: position,
});

export function getTestimonials() {
  return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch(tryToDownloadTestimonials());

    try {
      const res = await axiosCall.get('/page1.json');
      dispatch(successfulTestimonialDownload(res.data.slider));
    } catch (error) {
      dispatch(errorDownloadingTestimonials());
    }
  };
}

/**
 *
 *
 */

/**
 *
 * Configurator
 */

/**
 *
 *
 */
