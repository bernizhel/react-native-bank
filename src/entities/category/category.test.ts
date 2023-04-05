import type { AxiosResponse } from 'axios';
import type { TResponse } from '@shared/api';

import { createEvent } from 'effector';
import {
  $categories,
  $categoriesLoading,
  $filteredServices,
  $emptyFilteredServices,
  getCategoriesFx,
} from '.';

describe('[Entity] category', () => {
  const expectedResponse: TResponse = {
    category: [
      {
        category_id: '1',
        category_name: 'Мобильная связь',
        category_icon: '',
        services: [
          {
            service_id: '11',
            service_name: 'МТС',
            service_icon: '',
          },
          {
            service_id: '12',
            service_name: 'МегаФон',
            service_icon: '',
          },
          {
            service_id: '13',
            service_name: 'Beeline',
            service_icon: '',
          },
          {
            service_id: '14',
            service_name: 'Tele2',
            service_icon: '',
          },
          {
            service_id: '15',
            service_name: 'Mobile',
            service_icon: '',
          },
        ],
      },
      {
        category_id: '2',
        category_name: 'ЖКХ',
        category_icon: '',
        services: [],
      },
      {
        category_id: '3',
        category_name: 'Интернет',
        category_icon: '',
        services: [],
      },
    ],
  };

  let currentHandler: () => Promise<AxiosResponse<TResponse, any>>;

  beforeEach(() => {
    currentHandler = getCategoriesFx.use.getCurrent();
  });

  afterEach(() => {
    getCategoriesFx.use(currentHandler);
  });

  const resetResults = createEvent();

  beforeAll(() => {
    $categories.reset(resetResults);
  });

  afterAll(() => {
    $categories.off(resetResults);
  });

  it('gets created empty', () => {
    expect($categories.getState()).toEqual([]);
    expect($categoriesLoading.getState()).toBe(false);
    expect($filteredServices.getState()).toEqual([]);
    expect($emptyFilteredServices.getState()).toBe(true);
  });
});
