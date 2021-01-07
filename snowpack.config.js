// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/build",
  },
  devOptions: {
    port: 3000,
    open: "chrome",
  },
  plugins: [["@snowpack/plugin-react-refresh"], ["@snowpack/plugin-babel"]],
  install: ["react/jsx-runtime"],
  // devOptions: {},
  // buildOptions: {},
};
