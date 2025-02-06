// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />

/// <reference types="cypress-xpath" />

import * as XLSX from 'xlsx';

Cypress.Commands.add('getIframe',(iframe)=>{
    return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
})

Cypress.Commands.add('readExcelRaw', (filePath, sheetName) => {
  return cy.readFile(filePath, 'binary').then((data) => {
    const workbook = XLSX.read(data, { type: 'binary' });
    const sheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true });
  });
});

Cypress.Commands.add('readExcelRaw', (filePath, sheetName) => {
    return cy.readFile(filePath, 'binary').then((data) => {
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheet = workbook.Sheets[sheetName];
      // Directly return the raw data as a 2D array
      return XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true });
    });
  });

// custom command for clicking link using lable(lable means text present in html )

Cypress.Commands.add('clickLink',(label)=> {
    cy.get("a").contains(label).click();
})

//custom command for login

Cypress.Commands.add('loginapp',(email,password)=> {
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(email);
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(password);
    cy.get(".oxd-button").click();
})

Cypress.Commands.add("orange", (fullName, contact, email, company, country, employees) => {
  cy.visit("https://www.orangehrm.com/en/book-a-free-demo?testMode=true");
 // Navigate to the form page

  cy.get("#Form_getForm_FullName").type(fullName); // Enter full name
  cy.get("#Form_getForm_Contact").type(contact); // Enter contact number
  cy.get("#Form_getForm_Email").type(email); // Enter email
  cy.get("#Form_getForm_CompanyName").type(company); // Enter company name
  cy.get("#Form_getForm_Country").select(country); // Select country
  cy.get("#Form_getForm_NoOfEmployees").select(employees); // Select number of employees

  // Handle CAPTCHA manually in testing, so skipping it in automation
  cy.wait(5000); // Wait for 5 seconds before submission (Not ideal, but used here)
  cy.pause();

  cy.get("#Form_getForm_action_submitForm").click(); // Click Submit button

  // Validate successful submission (You may need to adjust this based on the actual behavior)
  cy.url().should("include", "book-a-free-demo"); 
});

Cypress.Commands.add('getiFrame', (iframe)=>{
  return cy.get(iframe)
  .its('0.contentDocument.body')
  .should('be.visible')
  .then(cy.wrap);
})

