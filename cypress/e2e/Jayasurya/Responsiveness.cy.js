describe('My First Test', () => {
    it('Positive test', () => {
        cy.viewport('samsung-note9') //viewport used for responsive
        cy.visit("https://login.salesforce.com/")
        cy.title().should('eq','Login | Salesforce')
    })
    it('Negative test', () => {

        cy.visit("https://login.salesforce.com/")
        cy.title().should('eq','Salesforce1')
    })
  })