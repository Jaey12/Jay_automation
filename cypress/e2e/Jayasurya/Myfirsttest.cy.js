

describe('My First Test', () => {
    it('Positive test', () => {

        cy.visit("https://login.salesforce.com/")
        cy.title().should('eq','Login | Salesforce')
    })
    it('Negative test', () => {

        cy.visit("https://login.salesforce.com/")
        cy.xpath("//input[@id='username']").type('12345')
        cy.get("input[id*='Login']").click()
        cy.wait(3000)
        cy.xpath("//div[@id='error']").should('have.text', 'Please enter your password.')
    })
  })