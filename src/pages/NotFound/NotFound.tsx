import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  const handleBackToHome = () => history.push("/");

  return (
    <Grid gap={4} textAlign="center">
      <Heading>Page not Found</Heading>

      <Box maxWidth={[280, 400]} marginX="auto">
        <Image width={400} src="/assets/images/not-found.png" alt="Not found" />
      </Box>

      <Box>
        <Text>It&apos;s Okay!</Text>
        <Button onClick={handleBackToHome}>Let&apos;s Head Back</Button>
      </Box>
    </Grid>
  );
};

export default NotFound;
