export type TTabParamList = {
  home: undefined;
  payments: undefined;
  atms: undefined;
  profile: undefined;
};

export type TStackParamList = {
  menu: undefined;
  mobile: undefined;
  jkh: undefined;
  internet: undefined;
};

export type TRouteNames<T extends string> = {
  [key in T]: {
    route: key;
    title: string;
  };
};
