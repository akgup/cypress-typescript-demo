const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/html',
      overwrite: true,
      html: true,
      json: false
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
