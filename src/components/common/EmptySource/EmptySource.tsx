import { Center, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const EmptySource = () => (
  <Center flexDirection="column">
    <Image src="/assets/images/empty-source.png" />
    <Link as={RouterLink} to="/add">
      Let's add a new link.
    </Link>
  </Center>
);

export default EmptySource;
