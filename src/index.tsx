import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./theme";
import VoteProvider from "context/voteContext";

// fonts
import "@fontsource/inter";

// third party library css
import "rc-pagination/assets/index.css";

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <VoteProvider>
        <App />
      </VoteProvider>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
);
