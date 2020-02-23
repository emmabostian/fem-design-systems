import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "./utils";
import GlobalStyle from "./utils/Global";
import { SignUpModal, PrimaryButton } from "./components";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
      <PrimaryButton
        style={{ margin: "0 16px" }}
        onClick={() => setShowModal(!showModal)}
      >
        Show modal
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
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />

        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
