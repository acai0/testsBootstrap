const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3000,
    //host: "myproject",
    //API_URL: "https://test.dev",
  },
});
