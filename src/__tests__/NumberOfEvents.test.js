import NumberOfEvents from '../components/NumberOfEvents';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
  });

  test('renders with a textbox input', () => {
    const inputElement = NumberOfEventsComponent.queryByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  test('has a default value of 32',  () => {
    expect(NumberOfEventsComponent.queryByRole('textbox')).toHaveValue(32);
  });

  test('updated value when user types in the textbox', async () => {
    const user = userEvent.setup();
    const inputElement = NumberOfEventsComponent.queryByRole('numberOfEventsInput');
    await user.type(inputElement, '20');
    expect(inputElement).toHaveValue(20);
  });
});