## Components

Components are split into 3 categories:

1. primitives
2. modules
3. layouts

### Primitives
These are basic components with no business logic other than possibly style specific features.

### Modules
These are components with business logic, usually for a specific page and organised within subfolders.

These components can be accessed via a special `$modules` path:

```ts
import Component from '$modules/domain/Component.svelte';
```

### Layouts
These are components designed to provide a re-useable template with named slots, allowing 
for consistent positioning of common elements.

An obvious example of this is Material 3's `List-Detail` view (implemented by `ListDetailMenu.svelte`).