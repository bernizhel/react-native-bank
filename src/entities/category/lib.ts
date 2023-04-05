import { TService } from '@shared/api';

export const filterServices = (
  services: TService[],
  query: string,
): TService[] => {
  if (query === '') {
    return services;
  }
  return services.filter((service) =>
    service.service_name.toLowerCase().includes(query.toLowerCase()),
  );
};
