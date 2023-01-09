# React Components Library Example
An example of a React component library structure with TypeScript, Vite, Tailwind, Vitest, Testing Library and Storybook.

## Installation (/!\ example /!\\)
Install the package:
```
npm install react-components-lib-example
```

In your Tailwind configuration, import the design system configuration as a preset and into the content source:
```ts
/** @type {import("tailwindcss"_).Config} */
module.exports = {
  presets: [
    require("react-components-lib-example/tailwind.config.cjs")
  ],
  content: [
    "./node_modules/react-components-lib-example/dist/**/*.{js,ts}",
    // ...
  ]
  // ...
};
```

## Component structure
- `element.tsx`: component (React, Tailwind)
- `element.test.tsx`: tests (Vitest, Testing Library)
- `element.story.tsx`: story definitions (Storybook)
- `element.type.ts`: types (TypeScript)
- `index.ts`: barrel export