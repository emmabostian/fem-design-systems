import { ThemeProvider } from "styled-components";
import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { defaultTheme } from "../src/utils/";

addons.setConfig({
  theme: themes.light,
  decorators: [
    storyFn => <ThemeProvider theme={defaultTheme}>{storyFn()}</ThemeProvider>,
    withKnobs,
    withA11y
  ]
});
