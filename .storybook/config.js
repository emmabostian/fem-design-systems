import { addDecorator } from "@storybook/react";
import themeDecorator from "./themeDecorator";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(themeDecorator);
addDecorator(withKnobs);
addDecorator(withA11y);
