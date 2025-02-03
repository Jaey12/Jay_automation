// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import 'cypress-mochawesome-reporter/register';

// Alternatively you can use CommonJS syntax:
// require('./commands')

require('cypress-xpath')

Cypress.on('uncaught:exception', (err, runnable) => {
    // Check if the error message is related to the ResizeObserver loop
    if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
      // Return false to prevent Cypress from failing the test
      return false;
    }
    // If it's another error, let Cypress handle it normally
  });  
  Cypress.on('uncaught:exception', (err, runnable) => { // Correct syntax
    if (err.message.includes('bootstrap is not defined')) {
      return false; // Prevent Cypress from failing the test
    }
    return true; // Let other errors fail the test
  });
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false prevents Cypress from failing the test
    if (err.message.includes("parent.$ is not a function")) {
      return false; // Ignore the error
    }
  });
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });