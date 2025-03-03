// src/__tests__/NumberOfEvents.test.js

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  let setCurrentNOE;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents 
      currentNOE={32} 
      setCurrentNOE={setCurrentNOE}
      setErrorAlert={() => { }} />);
  });

  test('renders number of events text input', () => {
    const numberTextBox = NumberOfEventsComponent.getByRole('spinbutton');
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass('number-of-events-input');
  });

  test('default number is 32', async () => {
    const numberTextBox = NumberOfEventsComponent.getByRole('spinbutton');
    expect(numberTextBox).toHaveValue(32);
  });

  test('number of events text box value changes when the user types in it', async () => {
   const user = userEvent.setup();
   const numberTextBox = NumberOfEventsComponent.getByRole('spinbutton');
   await user.type(numberTextBox, '{backspace}{backspace}10');
   expect(numberTextBox).toHaveValue(10);
  });
});