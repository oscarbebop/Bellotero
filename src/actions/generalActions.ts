import { SAMPLE } from 'types';

export const sampleAction = (value: string) => ({
  type: SAMPLE,
  payload: value,
});
