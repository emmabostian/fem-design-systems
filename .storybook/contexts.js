import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "../src/utils/";

export const contexts = [
  {
    title: 'Themes', // an unique name of a contextual environment
    components: [
      ThemeProvider
    ],
    params: [
      // an array of params contains a set of predefined `props` for `components`
      { name: 'Default Theme', props: { theme: defaultTheme, default: true, } },
      { name: 'Dark Theme', props: { theme: darkTheme },
    ]
  },
];