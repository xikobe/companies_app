# app_listing challenge

## Run the project

- Extract zip file
- Install dependencies
  ```
  yarn install
  ``` 
- Run project
  ```
  npm run start
  ```

## Running tests
```
npm run test
```

## Project stack
- Bootstraped with create-react-app
- Redux for app state management
- Emotion for css-in-js
- Jest, enzyme and react-testing-library/react-hooks for unit testing

## Remarks on the project

There are some decisions I took that I'd like to add a few remarks on:
- React Lazy - this allows us to lazy load components and do code splitting. In this app, as all components are visible from the start, there is no great benefit. But is still a good approach I decided to include.

- Parsing data at reducer level - At first I was thinking of using `createSelector` from reselect but this would mean that even though the selectors would be memoized and not cause re-renders on the components, they'd still run. And this was still costly for example while typing in the search field. By parsing data at reducer level, this only happens once (when data is fetched).

- Mixing up context api and redux - This was a bit of over engineering, I could have gone with one or the other. But still decided it's nice to see how the different approaches can work together and how I could implement them.

- Not doing all the tests - This is mostly because of time constrains. I still did tests for all different flows in the app (redux code including async actions, component interaction, component render flows, hooks and context provider). The tests meaning wouldn't show anything different.

## Final thoughts
I feel this was a good exercise that allows us to work on most types of challenges of building a web app. From state management, working with objects and arrays, drilling props, UI. Looking back, these are the things I'd do to improve it:
- Add a clear all categories button
- Have search and categories working together - have the hability to search for apps on the selected categories and vice versa
- Do all the tests
- Replace categories context with redux state and actions.