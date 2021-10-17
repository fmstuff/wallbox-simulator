module.exports = {
  mode: "jit",
  purge: ["./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Open Sans",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
      serif: [
        "Constantia",
        "Lucida Bright",
        "Lucidabright",
        "Lucida Serif",
        "Lucida",
        "DejaVu Serif",
        "Bitstream Vera Serif",
        "Liberation Serif",
        "Georgia",
        "serif",
      ],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
