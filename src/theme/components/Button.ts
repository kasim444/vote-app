const Button = {
  baseStyle: {
    transition: "background 0.3s ease",
  },

  variants: {
    submit: {
      background: "brand.primary",
      color: "white",
      _hover: {
        background: "brand.dark",
        _disabled: {
          background: "brand.dark",
        },
      },
      _disabled: {
        opacity: 1,
      },
    },
  },

  voteCount: {
    bg: "none",
    color: "inherit",
    display: "flex",
    alignItems: "center",
    lineHeight: "inherit",
    m: 0,
    p: 0,
  },
};

export default Button;
