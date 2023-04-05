export type TId = `${number}`;

export type TUri = `http${'s' | ''}://${string}`;

export type TService = {
  service_id: TId;
  service_name: string;
  service_icon: TUri;
};

export type TCategory = {
  category_id: TId;
  category_name: string;
  category_icon: TUri;
  services: TService[];
};

export type TResponse = {
  category: TCategory[];
};
