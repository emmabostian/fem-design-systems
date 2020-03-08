import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { withContexts } from "addon-contexts/react";
import { contexts } from "./contexts";
import themeDecorator from "./themeDecorator";

addDecorator(themeDecorator);
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withContexts(contexts));
