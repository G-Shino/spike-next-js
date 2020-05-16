module.exports = {
  module: {
    rules: [
      {
        test: /\.glb?$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
