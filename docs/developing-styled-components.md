# Developing Reusable Components With React Styled Components

If you've never worked with CSS-in-JS before, the paradigm shift can be a bit overwhelming.

Admittedly it took me quite a while to come to terms with the new syntax, but once I opened up my mind to the new structure I quickly realized the benefits that CSS-in-JS has for component libraries.

## Styled Components

There are several different CSS-in-JS libraries, but the one we'll be using today is [styled components](https://styled-components.com/).

Styled components provides many benefits, like scoped styling (no more worrying about bleeding CSS specificity or rogue `!importants`).

## Application Architecture & Workflow

We're going to build our components using [create-react-app](https://github.com/facebook/create-react-app).

**I wouldn't condone using `create-react-app` under normal circumstances if you're building an enterprise design system; this tool is great for building React _applications_ but not for creating component libraries.**

So then, you might ask, why are we using it today?

Well, my friends, building a component library is not cut-and-dry. It requires a lot of setup and knowledge about how to build a component library while being able to observe and test the changes in real-time.

We have a few options when it comes to building components and observing them in real-time.

### Write our code, build our package, publish to the npm registry, install our package in a React application, and see if it works.

This option isn't optimal as it doesn't allow us to view our components as we're building them.

### Create a mono repository, a project where many projects or packages are stored in the same repo.

This would require taking the time to set up [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and [Lerna](https://github.com/lerna/lerna).

**This is the architecture you might want if you are building a component library within a company (especially if you have multiple products using the same system). It is the most robust solution and easily manageable. It also has several benefits including smart dependency management (it will only install one version of an npm package even if used in all containing repos).**

Unfortunately I _don't_ have experience with either of these technologies and would consume a lot of time trying to troubleshoot and set up.

There was a library I attempted, and hoped, to use for this workshop called `create-react-library`, which you can check out [here](https://www.npmjs.com/package/create-react-library), but unfortunately getting it to work with styled components was a hassle and many of the dependent packages were sorely deprecated.

If they update this library to use the newest version of React, this is the solution I would opt for!

If there's a future version of this workshop, I would love to include the setup of a monorepo, but I simply didn't have time!

### Use `create-react-app` to build and test our components.

I recognize that this option is not ideal, and learning how to publish our component library today would be extremely valuable but due to the time constraint and my lack of knowledge in this area, as well as each company having individualized build and deployment processes, I opted to keep this part out of the workshop.

This will allow us to focus on the content and not on the process.

## Editor Settings

At the time of this recording I am using the [Dank Mono](https://dank.sh/) font, which is a paid font for 40 GBP, however you can use [Fira Code](https://github.com/tonsky/FiraCode) if you're looking for something similar, with font ligatures, for free!

I am also using the VS Code color theme [Dracula](https://draculatheme.com/visual-studio-code/).

## Application Setup

Open your terminal and change directories to the place you want to house your project. I'll save mine to my desktop.

```
cd Desktop
```

Then use `create-react-app` to create a new React application. I use [`npx`](https://nodejs.dev/the-npx-nodejs-package-runner), node.js package runner to use `create-react-app`.

This is a great tool because it allows you to leverage tools without installing them and you can run different versions of the packages with the `@version` prompt.

Once in your desired location, run the following commands to create a new project.

If you don't have `npx` I recommend downloading it!

```js
npx create-react-app my-component-library && cd my-component-library
```

I am then going to open my React application in my editor of choice: [VS Code](https://code.visualstudio.com/docs/editor/command-line).

I use the command `code .` to open the current project in VSCode. You can install the VSCode command line interface (CLI) [here](https://code.visualstudio.com/docs/editor/command-line) if you'd also like this functionality!

Once VSCode is open I prefer to use the integrated terminal. You can open this by clicking control + back tick on Mac, or by going to the View menu and clicking Terminal.

## Removing Boilerplate

Before we run our React application, let's remove some of the boilerplate.

Run the following command to remove everything inside of the `src` folder.

```
rm -rf src/**
```

This command tells VS Code to remove everything, recursively (even inside of nested folders) from inside the source directory, regardless of file type.

Now let's add a new file inside of the `src/` folder called `index.js`.

(You can also manually delete all of these files if you don't feel like re-adding them, however I think it's good to walk through the process and saves me a bit more time as opposed to manually deleting each individual file).

Let's just add a simple `App` component which returns a `div` containing the words "Hello World".

```jsx
import React from "react";
import ReactDOM from "react-dom";

const App = () => <div>Hello world</div>;

ReactDOM.render(<App />, document.querySelector("#root"));
```

When we run `yarn start` to start our development server we should see the words "Hello World" appear in the browser.

## Integrating Styled Components

Let's go ahead and add styled components to see them in action.

In your terminal run `yarn add styled-components`.

Once installed, create a new folder called `components` inside the `src/` directory and add a file called `Buttons.js`.

You can add a new folder and file at the same time in VSCode by clicking 'Add new file' and typing `components/Buttons.js` in the name field. Cool right?!

Inside the `Buttons.js` file let's import `styled` from `styled-components` and add our first styled component.

```jsx
import styled from "styled-components";

const PrimaryButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  padding: 12px 24px;
  font-size: 1rem;
`;

export default PrimaryButton;
```

Back inside of `index.js`, import `PrimaryButton` from `./components/Button` and render it inside of the wrapping `div`.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton from "./components/Buttons";

const App = () => <PrimaryButton>Hello world</PrimaryButton>;

ReactDOM.render(<App />, document.querySelector("#root"));
```

In your browser you should see a red button with the white text "Hello World".

![Primary button red](images/primary-button-red.png)

We can do some pretty amazing things with styled components.

### Secondary Button

Let's create a second button called `SecondaryButton`. We want this button to inherit most of the properties from the first button, like padding, font size, etc.

So let's first extract out the common button properties we _know_ we will need in all three base buttons (primary, secondary, tertiary). This will be based on your Figma design, so your code may look a bit different than mine.

```jsx
const Button = styled.button`
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
`;
```

To use our custom Google font, grab the link which you can find when adding a font within the Google fonts site, and add it within the `head` in the `index.html` file.

```html
<link
  href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap"
  rel="stylesheet"
/>
```

Now let's refactor our `PrimaryButton` component; since we moved the base button functionality out into `Button`, we don't need all of it inside of `PrimaryButton`.

We now want this component to inherit the properties from the `Button` component. So instead of setting `const PrimaryButton = styled.button` we can write `const PrimaryButton = styled(Button)`.

We can now remove the styles being applied from the `Button` component.

```jsx
const Button = styled.button`
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
`;

const PrimaryButton = styled(Button)`
  background-color: red;
  border: none;
  color: white;
`;
```

Let's create a new `const` which contains the hex code for the background color of our primary button. You can add this underneath the `styled` import.

These colors will be _your_ primary colors from your Figma kit.

```jsx
const primaryBlue = "#030086";
```

Next, let's add the individual properties we want our `PrimaryButton` component to have.

We can use our `primaryBlue` variable inside of our styled component with the `${}` syntax.

```jsx
const PrimaryButton = styled(Button)`
  background-color: ${primaryBlue};
  color: white;
  border: 2px solid transparent;
`;
```

And now if we head back to our browser we should see the primary button with updated styling.

![Primary button blue](images/primary-button.png)

Great, now it's your turn. Go add the secondary button and tertiary button to your `Buttons.js` file and render them inside of `index.js`.

## Button Activity Solution

```jsx
export const SecondaryButton = styled(Button)`
  border: 2px solid ${primaryBlue};
  color: ${primaryBlue};
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${primaryBlue};
`;
```

If we import this into `index.js` and render it underneath our `PrimaryButton` we should now see our primary, secondary, and tertiary buttons rendering in the UI.

![Three buttons](images/three-buttons.png)

```jsx
import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton
} from "./components/Buttons";

const App = () => (
  <div>
    <PrimaryButton>Hello world</PrimaryButton>
    <SecondaryButton>Goodbye world</SecondaryButton>
    <TertiaryButton>Hey world</TertiaryButton>
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
```

_The primary button import is outside of the curly brackets because it's the default export in our `Buttons` file. We'll change this in a later step._

## Adding Utilities

So this looks great! But it isn't extensible. Now let's build a set of utilities to help us build our components.

Let's create a `utils/` folder inside of `src/` which will hold all of our foundational design system elements.

Inside of the `utils/` folder create three new files: `colors.js`, `themes.js`, and `typography.js`.

### Design Tokens

Design tokens were created prior to 2014 by Jina Anne (you can watch the conference talk [here](https://www.youtube.com/watch?v=wDBEc3dJJV8)) and they allow you to 'capture low-level values and then use them to create styles for your product or app.'

Inside `colors.js` add your color palette. Even though we called the primary color swatches `primary-100`, `primary-200`, we're going to name the colors by color name (we'll get to the `primary` color themes in the next section).

The color tokens will be an object containing the values in increments of 100 which will allow us to access them using the syntax `blue[100]`.

```jsx
export const blue = {
  100: "#3a36e0",
  200: "#0804b8",
  300: "#030086",
  400: "#5f25a4",
  500: "#050449"
};

export const green = {
  100: "#529e66",
  200: "#367b48",
  300: "#276738"
};

export const yellow = {
  100: "#e1c542",
  200: "#cab23f",
  300: "#b49e35"
};

export const red = {
  100: "#d0454c",
  200: "#b54248",
  300: "#95353a"
};

export const neutral = {
  100: "#ffffff",
  200: "#f4f5f7",
  300: "#e1e1e1",
  400: "#737581",
  500: "#4a4b53",
  600: "#000000"
};
```

Next let's add our typography.

Inside `typography.js` create and export a variable with your font family of choice.

```jsx
export const primaryFont = '"Roboto Mono", monospace';
```

Let's also add our typescale. There are many ways to structure these utilities but for this project we'll use an object.

```jsx
export const typeScale = {
  header1: "1.8rem",
  header2: "1.6rem",
  header3: "1.4rem",
  header4: "1.2rem",
  header5: "1.1rem",
  paragraph: "1rem",
  helperText: "0.8rem",
  copyrightText: "0.7rem"
};
```

Now that we have the individual tokens, let's create a theme. Themes are great if you need to support a high contrast mode or dark and light theme.

### Creating A Theme

Inside `themes.js` create a default theme and let's add the following values.

```jsx
import { blue, neutral } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: blue[300],
  primaryHoverColor: blue[200],
  primaryActiveColor: blue[100],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryFont: primaryFont
};
```

Lastly let's add an `index.js` file inside of `utils/` which exports each utility.

```jsx
export * from "./colors";
export * from "./typography";
export * from "./themes";
```

This will allow us to import utilities from the `utils` folder instead of the individual folder.

For example we can simply write the following to import our default theme.

```jsx
import { defaultTheme } from "../utils";
```

If we didn't have the index file we would have to name the specific file we wanted to import the utility from, so this is much cleaner.

```jsx
// We don't need this now!
import { defaultTheme } from "../utils/themes";
```

Finally let's use our theme inside of our `Buttons.js` file and remove the hard coded values.

We can also remove the `primaryBlue` constant.

```jsx
import styled from "styled-components";
import { defaultTheme } from "../utils";
import { typeScale } from "../utils";

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorOnPrimary};
  border: 2px solid transparent;
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${defaultTheme.primaryColor};
`;

export default PrimaryButton;
```

And we should see all of our components rendering perfectly.

## Adding Global Styles

There is a way to add global styles to our styled components, which we'll want to do for things such as defining our root font size.

First, let's install a helper package called [`polished`](https://github.com/styled-components/polished). This gives us some great features, one of which we'll use right now: normalize.

Let's install the package.

```
yarn add polished
```

Inside of the `utils/` directory, create a new file called `Global.js`. Let's add the following.

```jsx
import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";

const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 65px 0 0;
  font-family: ${primaryFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  width: 90%;
  margin: 0 auto;
}
`;
export default GlobalStyle;
```

Back inside `index.js` let's import our global styles and render it as a self-closing tag at the end of our JSX.

```jsx
...
import GlobalStyle from "./utils/Global";

const App = () => (
  <div>
    <PrimaryButton>Hello World</PrimaryButton>
    <SecondaryButton>Goodbye World</SecondaryButton>
    <TertiaryButton>Hey</TertiaryButton>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
```

## Implementing States

Now let's implement our button states: hover, focused, active, and disabled.

We can nest styling just as you would with a CSS pre-processor like Sass.

Since all three of my buttons (primary, secondary, and tertiary) have the same hover state, I'll add the state to the `Button` component. I'll also add a transition to smooth out the background and color changes.

```jsx
const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }
`;
```

We should now see our transitions being added to our buttons.

Go ahead and add the rest of the states for your buttons. You may also want to add some of these variables to your theme (i.e. disabled).

### Button State Activity Solution

First add the disabled states to the theme.

```js
export const defaultTheme = {
  ...
  disabled: neutral[400],
  textOnDisabled: neutral[300]
};
```

Next add the states to the buttons.

```jsx
import styled from "styled-components";
import { defaultTheme, paragraph } from "../utils";

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear,
    border 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${defaultTheme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.textColorOnPrimary};
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorOnPrimary};
  border: 2px solid transparent;

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    border: 2px solid ${defaultTheme.disabled};
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${defaultTheme.primaryColor};

  &:disabled {
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
`;

export default PrimaryButton;
```

We can test out disabled by adding the `disabled` attribute to one of our buttons.

```jsx
<PrimaryButton disabled>Hello world</PrimaryButton>
<SecondaryButton disabled>Goodbye world</SecondaryButton>
<TertiaryButton disabled>Hey world</TertiaryButton>
```

You should see your disabled button rendering in the UI.

![Disabled buttons](images/disabled-buttons.png)

## Adding Button Variations

Now that we have our default buttons, let's add our variations: large, small, icon, labelled icon, warning, success, and error.

First let's install a package which will help us create these modifiers.

```jsx
yarn add styled-components-modifiers
```

Inside `Buttons.js` import the `applyStyleModifiers` module from `styled-components-modifiers`.

```jsx
import { applyStyleModifiers } from "styled-components-modifiers";
```

Next, let's define a variable which will hold all of our modifiers. Let's start with small and large.

```jsx
const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `
};
```

We now need to use `applyStyleModifiers` to each button to get them to render. Add the `applyStyleModifiers(BUTTON_MODIFIERS)` expression to the end of each primary, secondary, and tertiary button (or the styles will be overridden).

```jsx
const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: ${defaultTheme.textColorOnPrimary};
  color: white;

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    border: 2px solid ${defaultTheme.disabled};
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${defaultTheme.primaryColor};

  &:disabled {
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
```

Finally inside `index.js` we can add the modifiers as an array on the button components, or as simple strings if there is only one.

```jsx
<PrimaryButton modifiers={["small"]}>Hello World</PrimaryButton>
<SecondaryButton modifiers='large'>Goodbye World</SecondaryButton>
```

Your primary button should be rendering as a small button and your secondary button should be large.

![Style modifiers](images/style-modifiers.png)

Now it's your turn. Add modifiers for the statuses: warning, error, and success. You'll have to add new variables to your theme. You can use whichever red, yellow, and green color values you like for your hover and focus states.

### Button Modifiers Solution

First I added some new variables to my theme.

```jsx
import { blue, neutral, yellow, green, red } from "./colors";

...

warningColor: yellow[100],
warningColorHover: yellow[200],
warningColorActive: yellow[300],
errorColor: red[100],
errorColorHover: red[200],
errorColorActive: red[300],
successColor: green[100],
successColorHover: green[200],
successColorActive: green[300]
```

Next let's add the modifiers for the warning, success, and error states.

```jsx
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { defaultTheme, helperText, header5, paragraph } from "../utils";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  warning: () => `
    background-color: ${defaultTheme.warningColor};
    color: ${defaultTheme.textColorInverted};

    &:hover, &:focus {
      background-color: ${defaultTheme.warningColorHover};
      outline: 3px solid ${defaultTheme.warningColorHover};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${defaultTheme.warningColorActive};
    }
  `,
  error: () => `
  background-color: ${defaultTheme.errorColor};
  color: ${defaultTheme.textColorInverted};

  &:hover {
    background-color: ${defaultTheme.errorColorHover};
  }

  &:active {
    background-color: ${defaultTheme.errorColorActive};
  }
  `,
  success: () => `
  background-color: ${defaultTheme.successColor};
  color: ${defaultTheme.textColorInverted};

  &:hover {
    background-color: ${defaultTheme.successColorHover};
  }

  &:active {
    background-color: ${defaultTheme.successColorActive};
  }
  `
};
```

Now inside `index.js` we can add another modifier to our buttons.

```jsx
<PrimaryButton modifiers={["small", "success"]}>Hello World</PrimaryButton>
<SecondaryButton modifiers="error">Goodbye World</SecondaryButton>
```

![Modifiers](images/modifiers.png)

## Making Extensible Themes

Currently we're referencing the `defaultTheme` directly inside of our components, but what if we want a dynamic theme which can be changed?

Let's create a second theme object inside `themes.js`. This will hold our dark theme.

```jsx
export const darkTheme = {
  primaryColor: neutral[100],
  primaryHoverColor: neutral[200],
  primaryActiveColor: neutral[300],
  textColorOnPrimary: blue[300],
  textColor: blue[300],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  warningColor: yellow[100],
  warningColorHover: yellow[200],
  warningColorActive: yellow[300],
  errorColor: red[100],
  errorColorHover: red[200],
  errorColorActive: red[300],
  successColor: green[100],
  successColorHover: green[200],
  successColorActive: green[300]
};
```

We now need a way to toggle the dark theme. We'll use React's `useState` to do this.

Inside of `index.js` let's import `useState` and create a boolean variable `useDarkTheme` which will tell us which theme we should use.

```jsx
import React, { useState } from "react";
...

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  ...

  return (
```

We also need to use the `ThemeProvider` component which will wrap our entire application and pass the theme as a property.

Inside `index.js` import `ThemeProvider`, then wrap the entire JSX return statement in `<ThemeProvider>`

```jsx
import { ThemeProvider } from "styled-components";
```

```jsx
const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
	  <ThemeProvider>
	  ...
	  </ThemeProvider>
```

We'll need to pass the theme we want to use as a prop to `ThemeProvider` so let's do that with a ternary operator.

```jsx
<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
```

Let's add two buttons to toggle the dark theme state.

You can also use one if you prefer simply toggling the state instead of being explicit with two buttons.

```jsx
return (
	  <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
			<PrimaryButton
        style={{ margin: "0 16px" }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </PrimaryButton>
      <PrimaryButton style={{ margin: "0 16px" }} onClick={() => setUseDarkTheme(false)}>
        Default theme
      </PrimaryButton>
      ...
	  </ThemeProvider>
```

Don't forget to import these two themes from `utils`.

```jsx
import { darkTheme, defaultTheme } from "./utils";
```

Let's wrap our primary, secondary, and tertiary buttons in a containing div so we can change the background color depending upon the theme. (If it's dark theme, we need a dark background.)

We'll also add some inline styling to this div.

```jsx
const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <PrimaryButton
        style={{ margin: "0 16px" }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </PrimaryButton>
      <PrimaryButton
        style={{ margin: "0 16px" }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </PrimaryButton>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <PrimaryButton modifiers={["small", "success"]}>
          Hello World
        </PrimaryButton>
        <SecondaryButton modifiers={["large"]}>Goodbye World</SecondaryButton>
        <TertiaryButton>Hey</TertiaryButton>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};
```

Finally let's update our `Buttons.js` file to use our theme prop.

First let's remove the `defaultTheme` import.

Now we can replace the `${defaultTheme.<<prop>>}` with the following syntax: `${props => props.theme.<<prop>>}`.

Our components will take a theme prop from the `ThemeProvider` and render the proper value.

```jsx
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { primaryFont, typeScale } from "../utils";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  warning: ({ theme }) => `
    background-color: ${theme.warningColor};
    color: ${theme.textColorInverted};

    &:hover, &:focus {
      background-color: ${theme.warningColorHover};
      outline: 3px solid ${theme.warningColorHover};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${theme.warningColorActive};
    }
  `,
  error: ({ theme }) => `
    background-color: ${theme.errorColor};
    color: ${theme.textColorInverted};

    &:hover {
      background-color: ${theme.errorColorHover};
    }

    &:active {
      background-color: ${theme.errorColorActive};
    }
  `,
  success: ({ theme }) => `
    background-color: ${theme.successColor};
    color: ${theme.textColorInverted};

    &:hover {
      background-color: ${theme.successColorHover};
    }

    &:active {
      background-color: ${theme.successColorActive};
    }
  `
};

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  font-family: ${primaryFont};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${props => props.theme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear,
    border 0.2s linear;

  &:hover {
    background-color: ${props => props.theme.primaryHoverColor};
    color: ${props => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${props => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${props => props.theme.primaryActiveColor};
    border-color: ${props => props.theme.primaryActiveColor};
    color: ${props => props.theme.textColorOnPrimary};
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColorOnPrimary};
  border: 2px solid transparent;

  &:disabled {
    background-color: ${props => props.theme.disabled};
    color: ${props => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid ${props => props.theme.primaryColor};
  background: none;
  color: ${props => props.theme.primaryColor};

  &:disabled {
    background: none;
    border: 2px solid ${props => props.theme.disabled};
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
  background: none;
  border: 2px solid transparent;
  color: ${props => props.theme.primaryColor};

  &:disabled {
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export default PrimaryButton;
```

Now we can dynamically style our components for the theme.

Lastly let's change `PrimaryButton` to also be a named export. This way we can import it as the default component or explicitly with a named import `{ PrimaryButtton }`.

If you toggle the state you should see our theme working! You may also find some bugs during the theme toggle but you can fix those later.

![Dark theme](images/dark-theme.png)

## Modals

Now we're ready to create our first composite component! Create a new file `Modal.js` inside of the `components/` folder.

Additionally, create an `index.js` file and let's export all components from `Buttons.js` and `Modals.js`.

```jsx
export * from "./Buttons";
export * from "./Modals";
```

Now we will be able to import components from `/components` instead of `/components/Buttons` or `/components/Modals`. You can update `index.js` accordingly.

### Adding An Illustration

First let's add our illustration. Export the illustration from Figma as an SVG.

Inside of `src/` create an `assets/` folder and inside add an `illustrations/` folder. Create a new file called `SignUp.js`.

Let's export our SVG as a stateless functional React component in a new file called `SignUp.js`.

```jsx
import React from "react";

export const SignUp = () => (
  <svg
    width="368"
    height="283"
    viewBox="0 0 368 283"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M84.7353 195.853L113.227 151.009L49.4188 110.399L16.4665 162.264L69.244 195.853H84.7353Z"
      fill="#F0F0F0"
    />
    <path
      d="M125.111 209.842H54.5355V195.623H125.111V209.842ZM55.4521 208.925H124.194V196.54H55.4521V208.925Z"
      fill="#3F3D56"
    />
    <path
      d="M116.403 207.319C118.935 207.319 120.986 205.266 120.986 202.733C120.986 200.199 118.935 198.146 116.403 198.146C113.872 198.146 111.821 200.199 111.821 202.733C111.821 205.266 113.872 207.319 116.403 207.319Z"
      fill="#0804B8"
    />
    <path
      d="M103.572 207.319C106.103 207.319 108.154 205.266 108.154 202.733C108.154 200.199 106.103 198.146 103.572 198.146C101.041 198.146 98.9888 200.199 98.9888 202.733C98.9888 205.266 101.041 207.319 103.572 207.319Z"
      fill="#0804B8"
    />
    <path
      d="M90.7397 207.319C93.2708 207.319 95.3226 205.266 95.3226 202.733C95.3226 200.199 93.2708 198.146 90.7397 198.146C88.2087 198.146 86.1569 200.199 86.1569 202.733C86.1569 205.266 88.2087 207.319 90.7397 207.319Z"
      fill="#0804B8"
    />
    <path
      d="M77.9078 207.319C80.4388 207.319 82.4906 205.266 82.4906 202.733C82.4906 200.199 80.4388 198.146 77.9078 198.146C75.3768 198.146 73.325 200.199 73.325 202.733C73.325 205.266 75.3768 207.319 77.9078 207.319Z"
      fill="#0804B8"
    />
    <path
      d="M65.076 207.319C67.607 207.319 69.6588 205.266 69.6588 202.733C69.6588 200.199 67.607 198.146 65.076 198.146C62.545 198.146 60.4932 200.199 60.4932 202.733C60.4932 205.266 62.545 207.319 65.076 207.319Z"
      fill="#0804B8"
    />
    <path
      d="M208.976 51.8298V16.9708H226.391V0H141.151V85.3128H214.017V76.9716C214.017 75.4167 214.323 73.877 214.918 72.4405C215.513 71.004 216.384 69.6987 217.482 68.5992C218.581 67.4998 219.885 66.6276 221.32 66.0326C222.756 65.4375 224.294 65.1313 225.848 65.1313H226.391V51.8298H208.976Z"
      fill="#F0F0F0"
    />
    <path
      d="M303.382 220.162H246.555V232.088H303.382V220.162Z"
      fill="#0804B8"
    />
    <path d="M315.756 161.452H232.349V172.46H315.756V161.452Z" fill="#F0F0F0" />
    <path d="M356.543 282.083H0V283H356.543V282.083Z" fill="#3F3D56" />
    <path
      d="M330.048 283H225.848C222.59 282.996 219.466 281.699 217.163 279.394C214.859 277.088 213.563 273.962 213.559 270.701V76.9716C213.563 73.7109 214.859 70.5847 217.162 68.279C219.466 65.9733 222.59 64.6763 225.848 64.6726H330.048C333.306 64.6763 336.429 65.9733 338.733 68.279C341.037 70.5847 342.333 73.7109 342.336 76.9716V270.701C342.333 273.962 341.037 277.088 338.733 279.394C336.429 281.699 333.306 282.996 330.048 283V283ZM225.848 65.5899C222.833 65.5934 219.942 66.7936 217.81 68.9274C215.678 71.0611 214.479 73.9541 214.476 76.9716V270.701C214.479 273.719 215.678 276.612 217.81 278.745C219.942 280.879 222.833 282.079 225.848 282.083H330.048C333.063 282.079 335.953 280.879 338.085 278.745C340.217 276.612 341.416 273.719 341.42 270.701V76.9716C341.416 73.9541 340.217 71.0611 338.085 68.9274C335.953 66.7936 333.063 65.5934 330.048 65.5899H225.848Z"
      fill="#3F3D56"
    />
    <path
      d="M265.574 73.846C265.03 73.846 264.499 73.6846 264.046 73.3823C263.594 73.0799 263.242 72.65 263.034 72.1472C262.826 71.6443 262.771 71.091 262.877 70.5571C262.983 70.0233 263.245 69.5329 263.63 69.148C264.014 68.7631 264.504 68.501 265.038 68.3949C265.571 68.2887 266.124 68.3432 266.626 68.5515C267.129 68.7598 267.558 69.1125 267.86 69.5651C268.163 70.0176 268.324 70.5497 268.324 71.094C268.323 71.8237 268.033 72.5232 267.518 73.0391C267.002 73.555 266.303 73.8452 265.574 73.846V73.846ZM265.574 69.2593C265.212 69.2593 264.857 69.3669 264.556 69.5685C264.254 69.7701 264.019 70.0567 263.881 70.3919C263.742 70.7272 263.705 71.096 263.776 71.4519C263.847 71.8078 264.022 72.1347 264.278 72.3913C264.534 72.6479 264.861 72.8226 265.216 72.8934C265.572 72.9642 265.941 72.9279 266.276 72.789C266.611 72.6502 266.897 72.415 267.098 72.1133C267.3 71.8116 267.407 71.4569 267.407 71.094C267.407 70.6076 267.213 70.1412 266.87 69.7973C266.526 69.4533 266.06 69.2598 265.574 69.2593V69.2593Z"
      fill="#3F3D56"
    />
    <path
      d="M292.613 70.6353H272.448V71.5527H292.613V70.6353Z"
      fill="#3F3D56"
    />
    <path
      d="M334.087 77.9741V114.668C324.364 114.667 315.039 110.801 308.163 103.92C301.288 97.0386 297.425 87.7057 297.425 77.9741H334.087Z"
      fill="#0804B8"
    />
    <path
      d="M334.545 270.616H221.35V77.5154H334.545V270.616ZM222.267 269.699H333.629V78.4327H222.267V269.699Z"
      fill="#3F3D56"
    />
    <path
      opacity="0.1"
      d="M307.507 112.374C314.341 112.374 319.88 106.83 319.88 99.9903C319.88 93.1507 314.341 87.6062 307.507 87.6062C300.673 87.6062 295.133 93.1507 295.133 99.9903C295.133 106.83 300.673 112.374 307.507 112.374Z"
      fill="black"
    />
    <path
      d="M305.674 113.75C312.507 113.75 318.047 108.206 318.047 101.366C318.047 94.5267 312.507 88.9822 305.674 88.9822C298.84 88.9822 293.3 94.5267 293.3 101.366C293.3 108.206 298.84 113.75 305.674 113.75Z"
      fill="#0804B8"
    />
    <path
      d="M243.806 85.3128H226.391V91.7342H243.806V85.3128Z"
      fill="#3F3D56"
    />
    <path d="M253.43 146.316H236.015V152.737H253.43V146.316Z" fill="#3F3D56" />
    <path
      d="M320.339 170.167H236.015V158.241H320.339V170.167ZM236.932 169.25H319.422V159.159H236.932V169.25Z"
      fill="#3F3D56"
    />
    <path
      d="M315.756 196.311H232.349V207.319H315.756V196.311Z"
      fill="#F0F0F0"
    />
    <path d="M253.43 181.175H236.015V187.596H253.43V181.175Z" fill="#3F3D56" />
    <path
      d="M320.339 205.026H236.015V193.1H320.339V205.026ZM236.932 204.109H319.422V194.018H236.932V204.109Z"
      fill="#3F3D56"
    />
    <path
      d="M307.049 229.335H249.305V216.493H307.049V229.335ZM250.222 228.418H306.132V217.41H250.222V228.418Z"
      fill="#3F3D56"
    />
    <path
      d="M318.047 165.58C318.047 166.524 317.756 167.446 317.213 168.218C316.671 168.991 315.903 169.577 315.015 169.896C314.128 170.216 313.163 170.253 312.253 170.004C311.343 169.754 310.532 169.23 309.931 168.502L309.927 168.497C309.489 167.966 309.176 167.342 309.012 166.672C308.848 166.003 308.837 165.305 308.979 164.631C309.122 163.956 309.414 163.323 309.835 162.777C310.256 162.231 310.794 161.788 311.41 161.479C312.026 161.17 312.703 161.005 313.392 160.994C314.081 160.983 314.763 161.128 315.388 161.418C316.013 161.708 316.564 162.134 317.002 162.667C317.439 163.199 317.751 163.824 317.914 164.493C317.914 164.494 317.915 164.494 317.915 164.495C317.915 164.495 317.915 164.496 317.916 164.496C317.916 164.497 317.917 164.497 317.917 164.497C317.918 164.498 317.918 164.498 317.919 164.498C318.004 164.852 318.047 165.216 318.047 165.58V165.58Z"
      fill="#0804B8"
    />
    <path
      opacity="0.1"
      d="M318.047 165.58C318.047 166.524 317.756 167.446 317.213 168.218C316.671 168.991 315.903 169.577 315.015 169.896C314.127 170.216 313.163 170.253 312.253 170.004C311.343 169.754 310.532 169.23 309.931 168.502L309.927 168.497C309.842 168.143 309.799 167.78 309.798 167.415C309.798 166.471 310.09 165.549 310.632 164.777C311.175 164.005 311.942 163.419 312.83 163.099C313.718 162.779 314.683 162.742 315.593 162.991C316.503 163.241 317.313 163.765 317.914 164.493C317.914 164.494 317.914 164.494 317.915 164.495C317.915 164.496 317.915 164.496 317.916 164.496C317.916 164.497 317.917 164.497 317.917 164.497C317.918 164.498 317.918 164.498 317.919 164.498C318.004 164.852 318.047 165.216 318.047 165.58V165.58Z"
      fill="black"
    />
    <path
      d="M315.298 172.919C317.829 172.919 319.88 170.865 319.88 168.332C319.88 165.799 317.829 163.746 315.298 163.746C312.767 163.746 310.715 165.799 310.715 168.332C310.715 170.865 312.767 172.919 315.298 172.919Z"
      fill="#0804B8"
    />
    <path
      d="M318.047 200.439C318.047 201.383 317.756 202.305 317.213 203.077C316.671 203.85 315.903 204.436 315.015 204.755C314.128 205.075 313.163 205.112 312.253 204.863C311.343 204.613 310.532 204.089 309.931 203.361L309.927 203.356C309.489 202.825 309.176 202.201 309.012 201.531C308.848 200.862 308.837 200.164 308.979 199.49C309.122 198.815 309.414 198.182 309.835 197.636C310.256 197.09 310.794 196.647 311.41 196.338C312.026 196.029 312.703 195.864 313.392 195.853C314.081 195.842 314.763 195.987 315.388 196.277C316.013 196.567 316.564 196.993 317.002 197.526C317.439 198.058 317.751 198.683 317.914 199.352C317.914 199.353 317.915 199.353 317.915 199.354C317.915 199.355 317.915 199.355 317.916 199.355C317.916 199.356 317.917 199.356 317.917 199.356C317.918 199.357 317.918 199.357 317.919 199.357C318.004 199.711 318.047 200.075 318.047 200.439V200.439Z"
      fill="#0804B8"
    />
    <path
      opacity="0.1"
      d="M318.047 200.439C318.047 201.383 317.756 202.305 317.213 203.077C316.671 203.85 315.903 204.436 315.015 204.755C314.127 205.075 313.163 205.112 312.253 204.863C311.343 204.613 310.532 204.089 309.931 203.361L309.927 203.356C309.842 203.002 309.799 202.638 309.798 202.274C309.798 201.33 310.09 200.408 310.632 199.636C311.175 198.864 311.942 198.278 312.83 197.958C313.718 197.638 314.683 197.601 315.593 197.85C316.503 198.1 317.313 198.624 317.914 199.352C317.914 199.353 317.914 199.353 317.915 199.354C317.915 199.354 317.915 199.355 317.916 199.355C317.916 199.356 317.917 199.356 317.917 199.356C317.918 199.357 317.918 199.357 317.919 199.357C318.004 199.711 318.047 200.075 318.047 200.439V200.439Z"
      fill="black"
    />
    <path
      d="M315.298 207.778C317.829 207.778 319.88 205.724 319.88 203.191C319.88 200.658 317.829 198.605 315.298 198.605C312.767 198.605 310.715 200.658 310.715 203.191C310.715 205.724 312.767 207.778 315.298 207.778Z"
      fill="#0804B8"
    />
    <path
      d="M238.306 22.0162H214.476V45.8671H238.306V22.0162Z"
      fill="#F0F0F0"
    />
    <path
      d="M307.507 39.4457C306.419 39.4457 305.356 39.1229 304.452 38.5181C303.547 37.9133 302.842 37.0537 302.426 36.048C302.01 35.0422 301.901 33.9356 302.113 32.8679C302.325 31.8002 302.849 30.8195 303.618 30.0497C304.387 29.28 305.367 28.7557 306.434 28.5434C307.501 28.331 308.606 28.44 309.611 28.8566C310.616 29.2732 311.475 29.9786 312.079 30.8838C312.684 31.7889 313.006 32.8531 313.006 33.9417C313.005 35.4009 312.425 36.8 311.394 37.8318C310.363 38.8637 308.965 39.4441 307.507 39.4457V39.4457ZM307.507 29.355C306.6 29.355 305.714 29.624 304.961 30.128C304.207 30.6319 303.62 31.3483 303.273 32.1864C302.926 33.0245 302.835 33.9467 303.012 34.8365C303.189 35.7262 303.625 36.5435 304.266 37.185C304.907 37.8264 305.724 38.2633 306.613 38.4402C307.502 38.6172 308.423 38.5264 309.261 38.1792C310.098 37.8321 310.814 37.2442 311.317 36.4899C311.821 35.7356 312.09 34.8488 312.09 33.9417C312.088 32.7256 311.605 31.5598 310.746 30.6999C309.887 29.84 308.722 29.3563 307.507 29.355V29.355Z"
      fill="#3F3D56"
    />
    <path
      d="M186.521 116.044H174.605V104.118H186.521V116.044ZM175.522 115.126H185.604V105.036H175.522V115.126Z"
      fill="#3F3D56"
    />
    <path
      d="M368 205.026H356.085V193.1H368V205.026ZM357.001 204.109H367.083V194.018H357.001V204.109Z"
      fill="#3F3D56"
    />
    <path
      d="M132.903 125.064L134.948 126.166L141.905 129.92L153.138 135.977L159.684 123.821C160.3 122.679 160.686 121.426 160.818 120.135C160.95 118.844 160.827 117.539 160.455 116.295C160.082 115.052 159.469 113.894 158.649 112.888C157.829 111.882 156.819 111.048 155.677 110.433C153.235 109.114 150.439 108.604 147.689 108.977C144.94 109.351 142.38 110.588 140.379 112.51L140.375 112.514C139.39 113.461 138.559 114.555 137.912 115.759L132.903 125.064Z"
      fill="#2F2E41"
    />
    <path
      d="M163.561 249.029L162.189 264.138L157.042 264.824L153.611 247.656L163.561 249.029Z"
      fill="#FFB8B8"
    />
    <path
      d="M155.67 264.824C155.67 264.824 162.188 261.391 163.561 264.138C163.561 264.138 162.531 272.379 166.648 273.409C170.765 274.439 172.481 281.65 166.648 282.337C160.816 283.023 157.042 280.963 154.984 280.963C152.925 280.963 154.984 273.752 154.984 273.752L155.67 264.824Z"
      fill="#2F2E41"
    />
    <path
      d="M122.048 249.029L123.42 264.138L128.566 264.824L131.997 247.656L122.048 249.029Z"
      fill="#FFB8B8"
    />
    <path
      d="M129.939 264.824C129.939 264.824 123.42 261.391 122.048 264.138C122.048 264.138 123.077 272.379 118.96 273.409C114.843 274.439 113.128 281.65 118.96 282.337C124.792 283.023 128.566 280.963 130.625 280.963C132.683 280.963 130.625 273.752 130.625 273.752L129.939 264.824Z"
      fill="#2F2E41"
    />
    <path
      d="M150.18 127.818C155.107 127.818 159.101 123.821 159.101 118.89C159.101 113.96 155.107 109.963 150.18 109.963C145.254 109.963 141.26 113.96 141.26 118.89C141.26 123.821 145.254 127.818 150.18 127.818Z"
      fill="#FFB8B8"
    />
    <path
      d="M121.705 136.402L128.909 147.734L137.486 147.047L151.553 148.077C151.553 148.077 152.881 145.419 153.965 142.834C154.558 141.543 155.015 140.193 155.327 138.806C155.67 136.402 150.867 133.999 150.867 133.999C150.867 133.999 150.678 133.964 150.362 133.889C149.944 133.789 149.299 133.625 148.592 133.384C146.997 132.842 145.079 131.921 144.691 130.565C144.005 128.161 149.151 124.728 149.151 124.728L142.976 118.89C142.976 118.89 137.49 126.517 130.827 128.254C130.441 128.356 130.049 128.437 129.654 128.495C129.633 128.498 129.616 128.501 129.595 128.505C122.391 129.535 121.705 136.402 121.705 136.402Z"
      fill="#FFB8B8"
    />
    <path
      d="M125.479 133.312L121.705 136.402C121.705 136.402 118.617 151.168 119.646 155.288C120.675 159.408 119.303 163.186 119.303 163.872C119.303 164.559 116.215 190.312 116.215 190.312C116.215 190.312 110.04 204.047 116.558 202.674C123.077 201.3 120.675 187.565 120.675 187.565L128.566 163.529V143.27L125.479 133.312Z"
      fill="#FFB8B8"
    />
    <path
      d="M152.582 136.059L155.327 138.119L156.699 166.963L166.992 191.686C166.992 191.686 174.539 203.704 169.736 204.047C164.933 204.391 161.845 191.686 161.845 191.686L152.582 167.993L151.21 144.987L152.582 136.059Z"
      fill="#FFB8B8"
    />
    <path
      d="M135.428 138.119C135.428 138.119 142.29 142.927 153.268 141.21C153.268 141.21 156.356 147.39 154.641 150.824C152.925 154.258 156.699 162.499 157.385 163.529C158.071 164.559 165.962 185.848 168.707 208.854C171.452 231.86 178.999 247.656 172.481 249.716C165.962 251.776 152.582 254.18 151.21 252.12C149.837 250.059 147.779 198.897 147.779 198.897L144.005 218.469C144.005 218.469 149.151 251.776 145.377 252.463C141.603 253.15 117.931 251.089 118.617 246.969C119.303 242.848 126.165 221.216 126.165 221.216C126.165 221.216 125.822 177.951 132.683 169.71C132.683 169.71 135.428 165.246 131.654 159.408C127.88 153.571 128.223 144.3 128.223 144.3C128.223 144.3 130.968 144.3 135.428 138.119Z"
      fill="#2F2E41"
    />
    <path
      d="M129.654 128.494L135.428 141.21L136.8 140.523L130.827 128.254L129.654 128.494Z"
      fill="#2F2E41"
    />
    <path
      d="M148.592 133.384L152.925 142.927L153.965 142.834L153.611 141.21L150.362 133.889C149.944 133.789 149.299 133.625 148.592 133.384Z"
      fill="#2F2E41"
    />
    <path
      d="M134.948 126.166C135.277 127.229 135.913 128.17 136.775 128.872C137.637 129.574 138.687 130.006 139.793 130.114C140.899 130.222 142.013 130.001 142.994 129.478C143.975 128.955 144.78 128.155 145.309 127.176C140.969 121.497 144.691 117.929 151.741 115.23C152.273 114.243 152.498 113.121 152.39 112.006C152.282 110.891 151.845 109.833 151.134 108.967C149.191 108.718 147.217 108.907 145.356 109.52C143.495 110.133 141.794 111.155 140.379 112.51L140.375 112.514L135.366 121.812C135.009 122.473 134.789 123.199 134.717 123.947C134.645 124.695 134.723 125.449 134.948 126.166V126.166Z"
      fill="#2F2E41"
    />
    <path
      d="M144.863 121.981C145.526 121.981 146.063 121.058 146.063 119.92C146.063 118.783 145.526 117.86 144.863 117.86C144.199 117.86 143.662 118.783 143.662 119.92C143.662 121.058 144.199 121.981 144.863 121.981Z"
      fill="#FFB8B8"
    />
    <path
      d="M148.441 116.559L158.754 121.236L160.645 117.06C160.319 115.534 159.637 114.107 158.655 112.895L151.556 109.678L148.441 116.559Z"
      fill="#2F2E41"
    />
    <path
      d="M173.23 208.695C175.761 208.695 177.813 206.642 177.813 204.109C177.813 201.575 175.761 199.522 173.23 199.522C170.699 199.522 168.648 201.575 168.648 204.109C168.648 206.642 170.699 208.695 173.23 208.695Z"
      fill="#0804B8"
    />
    <path
      d="M26.1021 235.962C27.7562 235.962 29.0971 234.62 29.0971 232.964C29.0971 231.309 27.7562 229.967 26.1021 229.967C24.448 229.967 23.1071 231.309 23.1071 232.964C23.1071 234.62 24.448 235.962 26.1021 235.962Z"
      fill="#FF6584"
    />
    <path
      d="M41.2339 248.587H40.3174V282.717H41.2339V248.587Z"
      fill="#3F3D56"
    />
    <path
      d="M40.7757 253.414C43.4391 253.414 45.5981 251.253 45.5981 248.587C45.5981 245.921 43.4391 243.761 40.7757 243.761C38.1124 243.761 35.9533 245.921 35.9533 248.587C35.9533 251.253 38.1124 253.414 40.7757 253.414Z"
      fill="#3F3D56"
    />
    <path
      d="M40.7757 269.622C40.7757 269.622 40.0868 254.793 25.964 256.516Z"
      fill="#3F3D56"
    />
  </svg>
);
```

Let's also create an `index.js` file inside of the `assets` folder and export our newly added illustration.

```jsx
export * from "./illustrations/SignUp";
```

Let's also add a new variable to our themes `formElementBackground`.

This will be the same for both the `defaultTheme` and the `darkTheme` and will be used to style the modal background.

```jsx
formElementBackground: neutral[100],
```

Inside of `Modals.js` let's import `React` as well as `styled-components`.

```jsx
import React from "react";
import styled from "styled-components";
```

First let's create our modal wrapper which will contain all of the styling for our modal.

```jsx
const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${primaryFont}
  align-items: center;
  position: relative;
  border-radius: 2px;
`;
```

Next, let's create the sign up header and sign up content as styled components. They will both use our type scale.

First import the `typeScale` variable then add it to the following declarations.

```jsx
import { typeScale } from "../utils";
```

```jsx
const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size:: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;
```

Now let's create a `SignUpModal` which inherits from `ModalWrapper`. This will allow us to be very explicit with our component imports `<SignUpModal />`.

You can of course create a basic `Modal` element and add children inside, which is great to encapsulate logic closer to where it's being used, but for the sake of this tutorial let's create the sign up modal inside of the `Modals` file.

Don't forget to import `PrimaryButton` so we can use it in our modal. You can use the default or the named export.

```jsx
import { PrimaryButton } from "./Buttons";
```

```jsx
export const SignUpModal = () => {
  return (
    <ModalWrapper>
      <SignUp />
      <SignUpHeader>Sign Up</SignUpHeader>
      <SignUpText>
        Sign up today to get access to all of our content and features!
      </SignUpText>
      <PrimaryButton onClick={() => console.log("You signed up!")}>
        Sign Up
      </PrimaryButton>
    </ModalWrapper>
  );
};
```

Now let's add our close icon. We can export it as an SVG from Figma and create a new file `CloseIcon.js` inside of our assets folder. Create a new folder `icons/` inside of `assets/` and place `CloseIcon.js` inside.

Let's make `CloseIconWrapper` a styled component so we can set some styling on it.

```jsx
import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper>
    <path
      d="M14.0069 11.9675L23.6255 2.35078C23.872 2.08632 24.0062 1.73654 23.9998 1.37512C23.9934 1.0137 23.847 0.668862 23.5913 0.413259C23.3357 0.157657 22.9908 0.0112437 22.6293 0.00486683C22.2678 -0.00151001 21.9179 0.132647 21.6534 0.379074L12.0348 9.99581L2.4162 0.374423C2.15169 0.127997 1.80184 -0.00615949 1.44035 0.000217348C1.07886 0.00659419 0.733953 0.153006 0.478301 0.408609C0.222649 0.664211 0.0762072 1.00905 0.0698292 1.37047C0.0634511 1.73189 0.197634 2.08167 0.444109 2.34613L10.0627 11.9675L0.444109 21.5843C0.307017 21.712 0.197059 21.866 0.120795 22.0371C0.0445312 22.2083 0.0035228 22.393 0.000217153 22.5803C-0.00308849 22.7676 0.0313764 22.9537 0.101555 23.1274C0.171734 23.3011 0.276189 23.4589 0.408689 23.5914C0.541189 23.7239 0.699019 23.8283 0.872764 23.8985C1.04651 23.9686 1.23261 24.0031 1.41996 23.9998C1.60732 23.9965 1.79209 23.9555 1.96325 23.8792C2.13441 23.803 2.28846 23.693 2.4162 23.556L12.0348 13.9392L21.6534 23.556C21.9179 23.8024 22.2678 23.9366 22.6293 23.9302C22.9908 23.9238 23.3357 23.7774 23.5913 23.5218C23.847 23.2662 23.9934 22.9214 23.9998 22.5599C24.0062 22.1985 23.872 21.8487 23.6255 21.5843L14.0069 11.9675Z"
      fill="#737581"
    />
  </CloseIconWrapper>
);
```

Now let's export `CloseIcon` from the assets `index.js`.

```jsx
export * from "./icons/CloseIcon";
```

We can import `CloseIcon` and our `SignUp` illustration into `Modals.js` and use it in our `SignUpModal` component.

```jsx
import { SignUp, CloseIcon } from "../assets";
```

Now let's create a button which will wrap the `CloseIcon`. Then we'll instantiate the icon inside of the button.

```jsx
import { SignUp, CloseIcon } from "../assets";

...
const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const SignUpModal = () => {
  return (
  <ModalWrapper>
    ...
    <CloseModalButton onClick={() => console.log("You closed the modal!)}>
      <CloseIcon />
    </CloseModalButton>
  </ModalWrapper>
  );
};
```

If we head back to `index.js` we can import `SignUpModal` and instantiate it.

```jsx
import { SignUpModal } from "./components";

...

<SignUpModal />
```

![Modal](images/modal.png)

## Activity

Now build your second Figma modal which you designed in the last chapter.

## Modal Activity Solution

I first downloaded my Sign In illustration as an SVG and created a new `SignIn.js` file inside of `assets/illustrations`.

```jsx
import React from "react";

export const SignIn = () => (
  <svg
    width="295"
    height="264"
    viewBox="0 0 295 264"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)">
      <path
        d="M35.9778 205.647L32.683 192.642C26.8409 190.164 20.8638 188.018 14.7802 186.213L14.3642 192.258L12.6773 185.599C5.13264 183.443 0 182.493 0 182.493C0 182.493 6.93301 208.879 21.4745 229.051L38.4185 232.029L25.2552 233.929C27.0851 236.132 29.0517 238.218 31.1433 240.174C52.2971 259.825 75.8584 268.841 83.769 260.312C91.6796 251.783 80.9439 228.938 59.7901 209.286C53.2322 203.194 44.9942 198.306 36.7479 194.458L35.9778 205.647Z"
        fill="#E6E6E6"
      />
      <path
        d="M67.3135 191.524L71.2103 178.686C67.4889 173.542 63.4807 168.613 59.2047 163.921L55.7268 168.88L57.722 162.307C52.377 156.558 48.4738 153.09 48.4738 153.09C48.4738 153.09 40.7811 179.264 42.8108 204.055L55.7771 215.37L43.5277 210.187C43.9563 213.019 44.5626 215.822 45.3428 218.579C53.3019 246.344 68.8148 266.252 79.9919 263.042C91.1689 259.833 93.7776 234.723 85.8185 206.957C83.3511 198.35 78.8239 189.903 73.7519 182.343L67.3135 191.524Z"
        fill="#E6E6E6"
      />
      <path
        d="M252.818 244.034L255.27 241.384C254.973 239.701 254.581 238.036 254.097 236.397L252.672 237.188L253.928 235.831C253.309 233.81 252.771 232.511 252.771 232.511C252.771 232.511 247.834 237.944 245.413 244.185L247.223 248.451L244.866 245.755C244.637 246.491 244.455 247.241 244.32 248C242.985 255.66 244.403 262.305 247.486 262.844C250.57 263.382 254.151 257.608 255.486 249.949C255.852 247.502 255.842 245.013 255.455 242.569L252.818 244.034Z"
        fill="#E6E6E6"
      />
      <path
        d="M289.089 249.275L292.556 248.275C293.172 246.68 293.696 245.052 294.129 243.399L292.5 243.339L294.275 242.827C294.789 240.777 295 239.387 295 239.387C295 239.387 287.968 241.483 282.672 245.574L282.018 250.162L281.393 246.634C280.817 247.146 280.273 247.693 279.766 248.274C274.667 254.14 272.448 260.563 274.81 262.618C277.172 264.674 283.219 261.585 288.318 255.718C289.895 253.813 291.172 251.677 292.103 249.385L289.089 249.275Z"
        fill="#E6E6E6"
      />
      <path
        d="M192.156 17.9116V244.967C192.156 249.717 190.27 254.272 186.914 257.631C183.557 260.99 179.006 262.877 174.259 262.878H86.0954C81.3479 262.879 76.7946 260.992 73.437 257.633C70.0793 254.274 68.1923 249.718 68.1909 244.967V17.9116C68.1923 13.1603 70.0793 8.60407 73.437 5.24508C76.7947 1.88608 81.3479 -0.00059907 86.0954 1.42689e-07H96.7903C96.2652 1.2925 96.0653 2.69431 96.2083 4.08222C96.3512 5.47013 96.8327 6.80164 97.6102 7.95972C98.3878 9.11781 99.4377 10.067 100.668 10.7239C101.898 11.3808 103.27 11.7252 104.664 11.727H154.929C156.324 11.7252 157.696 11.3808 158.926 10.7239C160.156 10.067 161.206 9.11784 161.983 7.95975C162.761 6.80166 163.242 5.47014 163.385 4.08223C163.528 2.69431 163.328 1.2925 162.803 5.80226e-06H174.259C179.006 0.000966529 183.557 1.88839 186.913 5.24726C190.27 8.60613 192.156 13.1615 192.156 17.9116Z"
        fill="#3F3D56"
      />
      <path
        d="M117.751 94.0396C117.751 92.4842 118.16 90.956 118.937 89.609C119.714 88.262 120.832 87.1436 122.178 86.3664C120.832 85.5881 119.305 85.1782 117.751 85.1779C116.196 85.1775 114.669 85.5868 113.323 86.3645C111.976 87.1422 110.858 88.2609 110.081 89.6082C109.304 90.9555 108.894 92.4838 108.894 94.0396C108.894 95.5954 109.304 97.1238 110.081 98.4711C110.858 99.8183 111.976 100.937 113.323 101.715C114.669 102.492 116.196 102.902 117.751 102.901C119.305 102.901 120.832 102.491 122.178 101.713C120.832 100.936 119.714 99.8173 118.937 98.4702C118.16 97.1232 117.751 95.5951 117.751 94.0396Z"
        fill="white"
      />
      <path
        d="M128.882 94.0396C128.882 92.4842 129.291 90.956 130.068 89.609C130.845 88.262 131.963 87.1436 133.31 86.3664C131.964 85.5881 130.437 85.1782 128.882 85.1779C127.328 85.1775 125.8 85.5868 124.454 86.3645C123.108 87.1422 121.99 88.2609 121.212 89.6082C120.435 90.9555 120.026 92.4838 120.026 94.0396C120.026 95.5954 120.435 97.1238 121.212 98.4711C121.99 99.8183 123.108 100.937 124.454 101.715C125.8 102.492 127.328 102.902 128.882 102.901C130.437 102.901 131.964 102.491 133.31 101.713C131.963 100.936 130.845 99.8173 130.068 98.4702C129.291 97.1232 128.882 95.5951 128.882 94.0396Z"
        fill="white"
      />
      <path
        d="M139.761 102.901C144.651 102.901 148.615 98.9339 148.615 94.0397C148.615 89.1454 144.651 85.1779 139.761 85.1779C134.871 85.1779 130.906 89.1454 130.906 94.0397C130.906 98.9339 134.871 102.901 139.761 102.901Z"
        fill="#0804B8"
      />
      <path
        d="M169.788 152.036H90.6399V152.778H169.788V152.036Z"
        fill="white"
      />
      <path
        d="M93.1395 147.404C94.5199 147.404 95.6389 146.284 95.6389 144.902C95.6389 143.521 94.5199 142.401 93.1395 142.401C91.7592 142.401 90.6401 143.521 90.6401 144.902C90.6401 146.284 91.7592 147.404 93.1395 147.404Z"
        fill="#0804B8"
      />
      <path d="M169.788 177.05H90.6399V177.792H169.788V177.05Z" fill="white" />
      <path
        d="M93.1395 172.418C94.5199 172.418 95.6389 171.298 95.6389 169.917C95.6389 168.535 94.5199 167.415 93.1395 167.415C91.7592 167.415 90.6401 168.535 90.6401 169.917C90.6401 171.298 91.7592 172.418 93.1395 172.418Z"
        fill="#0804B8"
      />
      <path
        d="M154.558 121.718H102.953C102.462 121.717 101.991 121.522 101.643 121.174C101.296 120.827 101.101 120.355 101.1 119.863V68.2159C101.101 67.7243 101.296 67.2529 101.643 66.9052C101.991 66.5576 102.462 66.362 102.953 66.3614H154.558C155.05 66.362 155.521 66.5576 155.868 66.9052C156.216 67.2529 156.411 67.7243 156.412 68.2159V119.863C156.411 120.355 156.216 120.827 155.868 121.174C155.521 121.522 155.05 121.717 154.558 121.718ZM102.953 67.1032C102.658 67.1036 102.376 67.2209 102.167 67.4295C101.959 67.6381 101.842 67.9209 101.841 68.2159V119.863C101.842 120.158 101.959 120.441 102.167 120.65C102.376 120.859 102.658 120.976 102.953 120.976H154.558C154.853 120.976 155.136 120.859 155.344 120.65C155.553 120.441 155.67 120.158 155.67 119.863V68.2159C155.67 67.9209 155.553 67.6381 155.344 67.4295C155.136 67.2209 154.853 67.1036 154.558 67.1032H102.953Z"
        fill="white"
      />
      <path
        d="M168.305 193.68H143.36C142.541 193.68 141.878 194.345 141.878 195.164V203.87C141.878 204.69 142.541 205.354 143.36 205.354H168.305C169.124 205.354 169.788 204.69 169.788 203.87V195.164C169.788 194.345 169.124 193.68 168.305 193.68Z"
        fill="#0804B8"
      />
      <path d="M295 262.515H0.294556V263.257H295V262.515Z" fill="#3F3D56" />
      <path
        d="M238.861 120.575C238.861 120.575 237.835 127.078 238.861 128.105C239.887 129.131 232.364 137.688 232.364 137.688L226.208 129.131C226.208 129.131 228.944 124.682 227.918 120.917L238.861 120.575Z"
        fill="#FFB8B8"
      />
      <path
        d="M216.292 169.518L211.844 217.093L213.552 254.058L221.76 251.663L222.104 218.463L231.681 189.713L237.493 220.859L236.808 252.348L247.068 252.69L247.753 217.779L248.955 169.02L216.292 169.518Z"
        fill="#2F2E41"
      />
      <path
        d="M237.151 251.321V258.851C237.151 258.851 235.441 264.327 240.913 263.985C246.385 263.642 246.043 261.246 246.043 261.246L243.991 252.005L237.151 251.321Z"
        fill="#2F2E41"
      />
      <path
        d="M221.42 251.321V258.851C221.42 258.851 223.13 264.327 217.658 263.985C212.186 263.642 212.528 261.246 212.528 261.246L214.58 252.005L221.42 251.321Z"
        fill="#2F2E41"
      />
      <path
        d="M233.048 124.34C237.392 124.34 240.913 120.815 240.913 116.467C240.913 112.12 237.392 108.595 233.048 108.595C228.703 108.595 225.182 112.12 225.182 116.467C225.182 120.815 228.703 124.34 233.048 124.34Z"
        fill="#FFB8B8"
      />
      <path
        d="M232.706 133.923L233.39 130.5H235.099L238.406 125.74L241.255 128.447L241.939 144.533H223.472L225.182 127.42L227.672 125.74C227.672 125.74 227.234 131.527 232.022 131.527L232.706 133.923Z"
        fill="#575A89"
      />
      <path
        d="M225.524 130.158C225.524 130.158 228.356 133.746 232.583 133.492C236.81 133.238 240.913 129.816 240.913 129.816L246.727 174.311C246.727 174.311 240.229 174.995 238.177 171.572L222.446 171.23L222.788 129.816L225.524 130.158Z"
        fill="#D0CDE1"
      />
      <path
        d="M227.833 125.15L212.87 132.554L216.632 153.775C216.632 153.775 218 161.647 216.632 164.727C215.264 167.807 213.896 188.344 213.896 188.344C213.896 188.344 229.286 190.055 227.234 165.754C225.182 141.453 227.833 125.15 227.833 125.15Z"
        fill="#2F2E41"
      />
      <path
        d="M218.684 176.364L220.736 178.418C220.736 178.418 226.892 189.028 229.628 185.263C232.364 181.498 224.84 174.995 224.84 174.995L221.42 172.257L218.684 176.364Z"
        fill="#FFB8B8"
      />
      <path
        d="M238.414 125.15L253.225 132.554L248.095 157.882C248.095 157.882 248.437 166.096 250.147 170.546C251.857 174.995 251.173 188.001 251.173 188.001C251.173 188.001 249.121 195.873 244.675 176.364C240.229 156.855 238.414 125.15 238.414 125.15Z"
        fill="#2F2E41"
      />
      <path
        d="M249.805 164.043H246.727C246.727 164.043 236.467 162.673 237.151 166.781C237.835 170.888 247.411 169.861 247.411 169.861L251.173 169.519L249.805 164.043Z"
        fill="#FFB8B8"
      />
      <path
        d="M214.922 131.527L212.528 132.554C212.528 132.554 210.134 137.688 209.792 139.399C209.45 141.111 205.346 161.647 206.372 164.043C207.398 166.438 217.658 179.102 217.658 179.102L223.472 172.942L214.922 161.304L217.316 146.587L214.922 131.527Z"
        fill="#2F2E41"
      />
      <path
        d="M248.095 131.869L252.62 132.252L253.567 132.554C253.567 132.554 263.142 158.566 261.09 162.674C259.039 166.781 250.147 174.311 250.147 174.311L247.753 163.7L252.199 159.593L247.753 145.902L248.095 131.869Z"
        fill="#2F2E41"
      />
      <path
        d="M239.702 110.397C239.702 110.397 241.76 106.533 237.233 106.181C237.233 106.181 233.117 103.722 229.825 106.533C229.825 106.533 226.944 105.83 226.121 107.938C226.121 107.938 225.709 106.884 226.944 106.181C226.944 106.181 224.063 105.479 224.063 108.992C224.063 108.992 222.828 112.505 224.063 115.667C225.298 118.829 225.709 119.18 225.709 119.18C225.709 119.18 223.68 112.551 228.619 112.2C233.558 111.849 239.085 108.816 239.496 112.681C239.908 116.545 240.731 117.599 240.731 117.599C240.731 117.599 244.435 111.978 239.702 110.397Z"
        fill="#2F2E41"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="295" height="264" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
```

I added `SignIn` to the exports in `index.js`.

```js
export * from "./illustrations/SignIn";
```

Next inside `Modals.js` I imported both text fields, secondary button and the sign in illustration.

```jsx
import { SignUp, CloseIcon, SignIn } from "../assets";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { EmailInput, PasswordInput } from "./TextFields";
```

I refactored `SignUpHeader` to be `ModalHeader` so it's more extensible, and updated the respective JSX tags.

```jsx
const ModalHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

...

<ModalHeader>Sign Up</ModalHeader>
```

Next I created the `SignInModal` component.

```jsx
export const SignInModal = () => (
  <ModalWrapper
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around"
    }}
  >
    <div>
      <ModalHeader>Sign In</ModalHeader>
      <EmailInput label="Email" placeholder="emmabostian@gmail.com" />
      <PasswordInput label="Password" />
      <SecondaryButton style={{ margin: "16px 16px 0 0" }}>
        Sign Up
      </SecondaryButton>
      <PrimaryButton>Sign In</PrimaryButton>
    </div>
    <SignIn />
    <CloseModalButton onClick={() => console.log("You closed the modal!")}>
      <CloseIcon />
    </CloseModalButton>
  </ModalWrapper>
);
```

![Sign in](images/sign-in.png)
