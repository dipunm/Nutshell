# Stack navigation
This library allows your sveltekit application to inherit a stack based navigation, mimicking an android application.

## Configuring
In your base layout file, you should call `activateNavigationStackBehaviour()`. This will set up the appropriate event handlers and set an initial state within the history API if it is missing.

## Features
### Smart history rewriting
As the user navigates around your site, if a link would take a user from one context to another, the typical behaviour of a native app would be to pop all pages from the stack and load the new page such that navigating back would bring you back to the home screen.

Stack navigation emulates this behaviour by tracking the pages that a user visits and determining whether to navigate back through history before advancing to the next page by comparing the urls and looking for a common path.

For example, a user may navigate through the following urls:

- `/accounts`
- `/accounts/1`
- `/accounts/1/details`

If they then click a link to navigate to `/accounts/2`, we will execute the following commands:

- `back()`
- `back()`
- `go('/accounts/2')`

This will leave the browser state believing that the previous page to the current page is `/accounts` instead of `accounts/1/details`.

### Smart pop discovery
If a user enters your site from a bookmark or from history, there will be no prior pages to visit when tapping any "back" buttons within your user interface.

If your page provides a back button from such as situation, we will parse the current url and use it to guess what the previous page should be. We also re-write history to ensure that a user does not navigate forward when trying to navigate back.

An example would be, given a user visits: `/accounts/1/details`, they tap a back button on the screen and are taken to `/accounts/1`. If that user then uses the browser navigation to go back, they would exit the site, back to where they came from. This is a similar behaviour to a native application, where the application would just close.

If your website is installed as a progressive web application, it will behave similarly to a native application and exit too.

Note: this smart pop discovery can only be applied to buttons on the user interface. This means that there is a difference in behaviour between tapping a back button and swiping back or using the browser navigation buttons.

### Preserve stack
In some cases, it is desired to visit a new context, but not to exit the previous one. An example of this may be:

- `/accounts/1`
- `/accounts/1/actions`
- `/camera`

Note, that `/camera` is a page that may be useful in many situations, and you may desire that if a user navigates back, that they should return to the previous `/accounts/1/actions` page.

We can achieve this by indicating to the library that we wish to preserve the stack when navigating to the next page. Details on how to do this will follow.

### Anchor intercepting
`<a>` tags across your site are monitored and intercepted automatically in order to ensure that the stack based navigation is consistent without requiring you to add `onClick` handlers everywhere. The [smart history rewriting](#smart-history-rewriting) feature will ensure that the user navigation feels like a native app.

Link interception is disabled in the following situations:

- Clicking on links to external sites, 
- Clicking on links opened ro a new window or tab by the user,
- Clicking on links to urls with a non-matching protocol (i.e. `mailto:` etc.), 
- Clicking on links with a custom `target="XXX"` attribute.
- Clicking on links with `data-reload` defined or where it inherits this property.

#### Sveltekit routing attributes supported
Sveltekit provides a set of routing options configurable by setting data attributes in the dom.

The following sveltekit routing attributes (aka link options) will be affected by this library:

- `data-sveltekit-replacestate`: This attribute will be ignored as the library must decide how to manipulate the history api.
- `data-sveltekit-reload`: This attribute will prevent our library from intercepting.

The following link options should continue to work:

- `data-sveltekit-preload-data`
- `data-sveltekit-preload-code`
- `data-sveltekit-keepfocus`
- `data-sveltekit-noscroll`

#### `data-preserve-stack`
Adding this attribute to a hyperlink will force it to inherit the [Preserve stack](#preserve-stack) behaviour:
```html
<a href="/camera" data-preserve-stack>camera</a>
```

### Custom `router:pop-stack` URI
To create a back button for your site, use the following url:
```html
<a href="router:pop-stack">go back</a>
```

This will inherit the [smart pop discovery](#smart-pop-discovery) feature when appropriate.

> NOTE: the `data-preserve-stack` attribute cannot be used on this type of link.

### API
As well as intercepting hyperlinks, this library provides a number of methods that can be called in order to provide the same functionality for buttons and/or more dynamic situations.

The following methods are publicly available to use:
#### `activateNavigationStackBehaviour()`.
This method must be called when the page loads. The best place to call this is in your topmost layer file in a `<script>` tag.

#### `navCanPopStack()`
This method indicates whether there is a recorded parent page that the user arrived from. This method will return false even if [smart pop discovery](#smart-pop-discovery) might discover a previous page.

#### `async navPopStack()`
This provies an equivalent behaviour to the `<a href="router:pop-stack">` tag.

#### `async navPushStack(url, opts)`
This provides an equivalent behaviour to any hyperlink intercepted by this library.

The url must be either relative, or a page within the same origin as the webpage.

The following options are configurable:

| option | description |
|--|--|
| noScroll | Prevents scrolling after the link is clicked. |
| keepFocus | Causes the currently focused element to retain focus after navigation. |
| invalidateAll | Causes all `load` functions belonging to the currently active page to re-run. |
| state | Allows you to add custom state to the history API alongside the state used for stack navitgation. |
| preserveStack | Forces the new page to stack on top of the current page. |
