import type { TResponse } from './models';
import type { AxiosPromise } from 'axios';

import { apiInstance } from './base';

export const BASE_URL = '/categories.json';

export const getCategories = (): AxiosPromise<TResponse> => {
  return apiInstance(BASE_URL);
};
