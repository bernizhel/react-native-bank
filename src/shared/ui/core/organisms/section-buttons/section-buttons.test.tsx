import type { TSectionButtonsProps } from '.';

import { SectionButtons } from '.';
import { Icon } from '@shared/ui/core/atoms/icon';
import { render } from '@shared/lib/testing-library';

describe('[UI] SectionButtons', () => {
  it('renders empty', () => {
    const { toJSON } = render(<SectionButtons items={[]} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders one button correctly', () => {
    const expectedButton: TSectionButtonsProps['items'][number] = {
      leftContent: <Icon testID="SectionButtons.Icon" variant="mobile" />,
      textContent: 'Мобильная связь',
      onPress: () => null,
    };
    const { getByText, getByTestId, queryByTestId, getAllByTestId, toJSON } =
      render(<SectionButtons items={[expectedButton]} />);

    expect(getAllByTestId('SectionButtons.SectionButton').length).toBe(1);
    getByText(expectedButton.textContent);
    getByTestId('SectionButtons.Icon');
    expect(queryByTestId('SectionButtons.Divider')).not.toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders more buttons correctly', () => {
    const expectedButtons: TSectionButtonsProps['items'] = [
      {
        leftContent: <Icon testID="SectionButtons.Icon" variant="mobile" />,
        textContent: 'Мобильная связь',
        onPress: () => null,
      },
      {
        leftContent: <Icon testID="SectionButtons.Icon" variant="jkh" />,
        textContent: 'ЖКХ',
        onPress: () => null,
      },
    ];
    const { getByText, getAllByTestId, toJSON } = render(
      <SectionButtons items={expectedButtons} />,
    );

    expect(getAllByTestId('SectionButtons.SectionButton').length).toBe(2);
    getByText(expectedButtons[0].textContent);
    getByText(expectedButtons[1].textContent);
    expect(getAllByTestId('SectionButtons.Icon').length).toBe(2);
    expect(getAllByTestId('SectionButtons.Divider').length).toBe(1);
    expect(toJSON()).toMatchSnapshot();
  });
});
