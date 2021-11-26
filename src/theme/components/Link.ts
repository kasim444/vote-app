const Link = {
  baseStyle: {
    display: "inline-flex",
    alignItems: "center",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    color: "inherit",
    _hover: {
      textDecoration: "none",
    },
    _focus: {
      boxShadow: "none",
    },
  },

  variants: {
    default: {
      textDecoration: "underline",
      color: "blue.primary",
      fontWeight: "semibold",
      fontSize: "md",
    },

    unstyled: {
      textDecoration: "none",
    },

    submitLinkButton: {
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "2xl",
      border: "1px solid",
      borderColor: "gray.200",
      background: "gray.100",
      borderRadius: "lg",
      p: 2,
      _hover: {
        background: "gray.200",
      },
    },
  },

  defaultProps: {
    variant: "default",
  },
};

export default Link;
