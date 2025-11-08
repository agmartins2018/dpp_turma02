const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'e2e/**/*.cy.{js,ts}',
    supportFile: 'support/e2e.js',
    baseUrl: 'http://localhost:3000',
  },
});
