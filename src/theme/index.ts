import { extendTheme } from "@chakra-ui/react";
import { colors, sizes } from "./foundations";
import components from "./components";

const theme = extendTheme({
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  colors,
  sizes,
  components,
  config: {
    initialColorMode: "light",
  },
});

export default theme;
