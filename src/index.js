import React, { useState } from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton
} from "./components/Buttons";
import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "./utils";
import GlobalStyle from "./utils/Global";
import { Save } from "./icons";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button onClick={() => setUseDarkTheme(true)}>Dark theme</button>
      <button onClick={() => setUseDarkTheme(false)}>Default theme</button>
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
        <PrimaryButton>
          <Save />
          Hello World
        </PrimaryButton>
        <SecondaryButton modifiers={["large"]}>
          <Save modifiers={["inverted"]} />
          Goodbye World
        </SecondaryButton>
        <TertiaryButton>Hey</TertiaryButton>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
