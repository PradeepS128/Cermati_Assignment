const { defineConfig } = require("cypress");



module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Ebay Automation Results',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  env:
  {
    TestUrl: "",
    username: "",
    password: ""
  },
  retries: {
    runMode: 2,
    openMode: 0,
    },
  e2e: {
      // report genaration
      setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
      },
      specPattern:'cypress/Integration/TestScripts/*.js' ,
//    specPattern:'cypress/IntegrationJAVAscript/*.js'
      experimentalRunAllSpecs: true
  },
});
