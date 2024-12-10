import Event from "../components/Event";
import { mockData } from "../mock-data";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const event = mockData[0];

describe('<Event /> component', () => {
  let EventComponent;
  beforeEach(() => {
    EventComponent= render(<Event event={event}/>);
  })

  test('renders the event title', () => {
    expect(EventComponent.queryByText(mockData[0].summary)).toBeInTheDocument;
  });

  test('renders the event start time', () => {
    expect(EventComponent.queryByText(mockData[0].summary)).toBeInTheDocument;
  });

  test('renders event location', () => {
    expect(EventComponent.queryByText(mockData[0].location)).toBeInTheDocument;
  });

  test('renders event details button with the title (show details)', () => {
    expect(EventComponent.queryByText('show details')).toBeInTheDocument;
  });

  test('renders collapsed event details by default', () => {
    const details = EventComponent.container.querySelector('.details');
    expect (details).not.toBeInTheDocument();
  });

  test('shows the details section when the user clicks on the "show details" button', async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText('Show Details');
    await user.click(button);
    const details = EventComponent.container.querySelector('.details');
    expect (details).toBeInTheDocument;
  });

  test('hides event details when user clicks on "hide details" button', async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText('Show Details');
    await user.click(button); // expand 
    await user.click(button); // collapse
    const details = EventComponent.container.querySelector('.details');
    expect(details).not.toBeInTheDocument;
  });
})