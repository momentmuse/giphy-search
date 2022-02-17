# Giphy Search

![a bengal cat sniffing letter blocks that spell GIPHY](https://media.giphy.com/media/3oEduRESuPER8FUrHq/giphy.gif)

## wat dis

a paginated giphy search SPA 🌈✨

## hmmmm (design considerations)

- Component.js and Component.styled.js bundled in their own directory in case to accommodate future related files (ie tests, etc)
- separated hooks, constants, services, and theme into separate subdirectories to accomodate structure as the app scales
- created class for API service to make the request more composable instead of hardcoding URL (for example, could add the ability to select # results per page). could also do currying but that would prob make it harder to read 🍛

## whyyyyy?! (frustrations)

- editing import paths for relative imports AHHHH! set a root URL for absolute imports to ease the reorganization/renaming process 🗂

## try again next time? (improvements)

- SearchContainer a bit bloated? separate handlers into their own file and make them reusable?
- some excessive rerendering, try useCallback implementation to fix that
- add image placeholders to reduce jumping on load
- clearing search should probably set search results to []
- handle 'no search results found' 🙈
- more accessibility considerations?
- linter rule to automatically organize imports?
- and of course, the trifecta: TS/Testing/JS Docs 🧐
