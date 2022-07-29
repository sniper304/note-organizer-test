## Technical requirements

- The project must be written in React hooks using TypeScript
- The notes should be stored and manipulated using the React Contexts API
- The CSV exporter should trigger a file download
- The notes should only be manipulated through React Contexts - do not pass them as props between components.
- The create and export buttons should exist in separate directories and loaded dynamically

## Rules

1. Follow this directory structure for the button components:

- types.ts // exports a { ButtonProps } type
- utils.ts // exports the { loadButtons } function
- buttons
  - create
    - Button.tsx // a Button component which is a JSXElementConstructor<ButtonProps>
    - index.ts // exports the { Button }
  - export
    - Button.tsx // a Button component which is a JSXElementConstructor<ButtonProps>
    - index.ts // exports the { Button }

2.  Create a utility with a loadButtons(): JSXElementConstructor<ButtonProps>[] function, which reads the buttons/\*/index.ts folders and returns an array of the exported Button components. The function should not import directly from Button.tsx. Your overall code should then be able to loop through and render all the <Button> components available at compile-time. Hint: fs will not work in this case. You're probably looking for a mix of require.context and require.
