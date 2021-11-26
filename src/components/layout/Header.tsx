import { Image, Flex, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid grey"
      py="4"
    >
      <Link to="/">
        <Image width="50px" src="/assets/images/logo.png" />
      </Link>
      <motion.a
        target="_blank"
        href="https://github.com/kasim444/vote-app"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon as={FiGithub} fontSize="3xl" />
      </motion.a>
    </Flex>
  );
};

export default Header;
