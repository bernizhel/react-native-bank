import type { TRouteNames, TTabParamList, TStackParamList } from './types';

export const tabRouteNames: TRouteNames<keyof TTabParamList> = {
  home: { route: 'home', title: 'Главная' },
  payments: { route: 'payments', title: 'Платежи' },
  atms: { route: 'atms', title: 'Банкоматы' },
  profile: { route: 'profile', title: 'Профиль' },
};

export const stackRouteNames: TRouteNames<keyof TStackParamList> = {
  menu: { route: 'menu', title: '[[NO HEADER PROVIDED]]' },
  mobile: { route: 'mobile', title: 'Мобильная связь' },
  jkh: { route: 'jkh', title: 'ЖКХ' },
  internet: { route: 'internet', title: 'Интернет' },
};
