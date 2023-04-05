import type { TCategory, TService } from '@shared/api';

import {
  restore,
  createStore,
  createEvent,
  createEffect,
  sample,
} from 'effector';
import { getCategories } from '@shared/api';
import { filterServices } from '../lib';

export const setQueryEv = createEvent<string>();

export const $query = restore(setQueryEv, '');

export const getCategoriesFx = createEffect(getCategories);

export const $categoriesLoading = getCategoriesFx.pending;

// server returns { category: [...] } object, so 'category' key contains TCategory[] array
export const $categories = createStore<TCategory[]>([]).on(
  getCategoriesFx.doneData,
  (_, { data: { category } }) => category ?? [],
);

export const setCategoryIdEv = createEvent<number>();

export const $filteredServices = createStore<TService[]>([]).on(
  $query,
  (services, query) => filterServices(services, query),
);

export const $emptyFilteredServices = $filteredServices.map(
  (services) => services.length === 0,
);

sample({
  clock: setCategoryIdEv,
  source: [$categories, $query],
  fn: ([categories, query], categoryId) =>
    filterServices(categories[categoryId].services, query),
  target: $filteredServices,
});
