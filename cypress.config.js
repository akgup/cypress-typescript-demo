const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    video: false, // optional
    screenshotsFolder: 'allure-results', // important for screenshot attachment
  },
};
