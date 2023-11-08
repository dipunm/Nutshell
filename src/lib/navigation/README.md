# Stack navigation
This library allows your sveltekit application to inherit a stack based navigation, mimicking an android application.

## Configuring
In your base layout file, you should call `activateNavigationStackBehaviour()`. This will set up event handlers and set an initial state within the history API if it is missing.

## Features
### Basic url handling

### Preserve Stack
`data-preserve-stack`

### Pop stack links
`router:pop-stack`


## API
### `activateNavigationStackBehaviour()`

### `stackContainsParent()`

### `stackBack()`

### `stackGo()`

