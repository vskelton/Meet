import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 events are shown by default.', ({ given, and, when, then }) => {
    given('the user is on the events page', () => {

    });

    and('the user hasn’t specified a number of events to display', () => {

    });

    when('the pages loads', () => {

    });

    then('32 events should be displayed by default', () => {

    });
  });

  test('User can change the number of events displayed.', ({ given, when, then}) => {
    given('the user is on the events page', () => {

    });

    when('the user specifies a number of events to display', () => {

    });

    then('that number of events should be displayed', () => {

    });
  });

});