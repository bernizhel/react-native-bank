import { tabRouteNames } from '@shared/config';
import { ScreenWrapper } from '@pages/ui/screen-wrapper';
import { ScreenPlaceholder } from '../../views';

export const ScreenPlaceholderConnectorAtms = () => {
  return (
    <ScreenWrapper
      component={<ScreenPlaceholder textContent={tabRouteNames.atms.title} />}
    />
  );
};
