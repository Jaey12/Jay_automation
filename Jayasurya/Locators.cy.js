describe('My First Test', () => {
    it('Positive test', () => {

        cy.visit("https://login.salesforce.com/")
        cy.title().should('eq','Login | Salesforce')
    })

    it('CSS Locators', () => {

        cy.visit("https://login.salesforce.com/")
        cy.get("#username").type('jayasurya-ayqg@force.com')
    })

    it('Xpath', () => {

        cy.visit("https://login.salesforce.com/")
        cy.xpath("//input[@id='password']").type('password')
    })
  })