const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    baseUrl: "http://20.51.241.126:8080",
  },
  reporter: "allure-cypress",
  reporterOptions: {
    resultsDir: "allure-results"
  }
});
