import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

import Header from "./Header";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box as="main" margin="0 auto" maxWidth={1024} px={{ base: "2", lg: "0" }}>
      <Meta />
      <Flex flexDirection="column" alignItems="flex-start" minHeight="100vh">
        <Header />
        <Box
          width="full"
          as="main"
          my="5"
          margin="0 auto"
          maxWidth={"container.sm"}
        >
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout;
