import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('the user is on the events page', () => {

    });

    when('the page loads', () => {

    });

    then('the event details for all events should be hidden', () => {

    });
  });

  test('User can expand an event to see details.', ({ given, and, when, then }) => {
    given('the user is on the events page', () => {

    });
    
    and('event details are hidden', () => {

    });

    when('the user clicks on an event', () => {

    });

    then('the event details should be displayed', () => {

    });
  });

  test('User can collapse an event to hide details', ({ given, and, when, then }) => {
    given('the user is on the events page', () => {

    });

    and('event details are displayed for an event', () => {

    });

    when('the user clicks on the same event', () => {

    });

    then('the event details should be hidden', () => {

    });
  });

});