const Divider = {
  baseStyle: {
    opacity: 1,
    my: 5,
  },

  variants: {
    solid: {
      borderStyle: "solid",
      borderBottomWidth: "4px",
    },
  },

  defaultProps: {
    variant: "solid",
  },
};

export default Divider;
