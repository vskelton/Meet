# Meet App

# Project Requirements
## Key Features
* Filter events by City.
* Show/Hide event details.
* Specify number of events.
* Use the app when offline.
* Add an app shortcut to the home screen.
* Display charts visualizing event details.

## Technical Requirements
* The app must be a React application.
* The app must be built using the TDD technique.
* The app must use the Google Calender API and OAuth2 authentication flow.
* The app must use serverless functions for the authorization server instead of using a traditional server.
* The app's code must be hosted in a Git repository on GitHub.
* The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.
* The app must display well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
* The app must pass Lighthouse's PWA checklist.
* The app must work offline or in slow network conditions with the help of a service worker.
* Users may be able to install the app on desktop and add the app to their home screen on mobile.
* The app must be deployed on GitHub Pages.
* The app must implement an alert system using an OOP approach to show information to the user.
* The app must make use of data visualization.
* The app must be covered by tests with a coverage rate >= 90%.
* The app must be monitored using an online performance monitoring tool.

## User Stories
### Filter events by city
Scenario 1
When user hasn't searched for a specific city, show upcoming events from all cities
  * Given user hasn't searched for any city;
  * When the user opens the app;
  * Then the user should see a list of upcoming events.

Scenario 2
User should see a list of suggestions when they search for a city
  * Given the main page is open;
  * When user starts typing in the city textbox;
  * Then the user should receive a list of cities(suggestions) that match what they've typed.

Scenario 3
User can select a city from the suggested list.
  * Given user was typing "Jacksonville" in the city textbox AND the list of suggested cities is showing;
  * When the user selects a city("Jacksonville, Florida") from the list;
  * Then their city should be changed to that city("Jacksonville, Florida") AND the user should receive a list of upcoming events in the city.
### Show/Hide Event Details
Scenario 1
An event element is collapsed by default
  * Given the user is on the events page;
  * When the page loads;
  * Then the event details for all events should be hidden.

Scenario 2
User can expand an event to see details
* Given the user is on the events page AND event details are hidden;
* When I click on an event;
* Then the event details should be displayed.

Scenario 3
User can collapse an event to hide details
  * Given the user is on the events page AND event details are displayed for an event;
  * When I click on the same event;
  * Then the event details should be hidden.
### Specify Number of Events
Scenario 1
When user hasn't specified a number, 32 events are shown by default
  * Given the user is on the events page AND the user hasn't specified a number of events to display;
  * When the page loads;
  * Then 32 events should be displayed by default.

Scenario 2
User can change the number of events displayed
  * Given the user is on the events page;
  * When the user specifies a number of events to display;
  * Then that number of events should be displayed
### Use the App When Offline
Scenario 1
Show cached data when theres's no internet connection
  * Given the user previously loaded the events page AND loses internet connection;
  * When the user opens the app;
  * Then the cached event data should be displayed.
  
Scenario 2
Show error when user changes search settings (city, number of events)
  * Given the user has no internet connection;
  * When the user attempts to change search settings (city, number of events);
  * Then an error message should be displayed AND the search settings should not be updated.
### Add an App Shortcut to the Home Screen
Scenario 1
User can install the meet app as a shortcut on their device home screen
  * Given the user is using a device that supports app shortcuts AND on the Meet app's web page;
  * When the user is prompted to install the app AND the user accepts the prompt;
  * Then the Meet app should be added as a shortcut to user's device home screen.
### Display Charts Visualizing Event Details
Scenario 1
Show a chart with the number of upcoming events in each city
  * Given the user is on the events page AND there are upcoming events available;
  * When the user views the charts section;
  * Then the user should see a chart displaying the number of upcoming events in each city.
