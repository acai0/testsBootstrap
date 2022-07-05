const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    port: 3000,
    //host: "myproject",
    //API_URL: "https://test.dev",
  },

  publicPath: "/usm-grpack",
});
