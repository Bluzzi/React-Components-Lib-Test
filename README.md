# React Components Library Example
An example of a React component library structure with TypeScript, Vite, Tailwind, Vitest, Testing Library and Storybook.

## Installation
Install the package:
```
npm install @essential-tooth-box/design-system
```

In your Tailwind configuration, import the design system configuration as a preset and into the content source:
```ts
/** @type {import("tailwindcss"_).Config} */
module.exports = {
  presets: [
    require("@essential-tooth-box/design-system/tailwind.config.cjs")
  ],
  content: [
    "./node_modules/@essential-tooth-box/design-system/dist/**/*.{js,ts}",
    // ...
  ]
  // ...
};
```

## Package content 
- Components of our design system
- `Icon` component to use [FontAwesome](https://fontawesome.com)
- React utility hooks

## Component structure
- `element.tsx`: component (React, Tailwind)
- `element.test.tsx`: tests (Vitest, Testing Library)
- `element.story.tsx`: story definitions (Storybook)
- `element.type.ts`: types (TypeScript)