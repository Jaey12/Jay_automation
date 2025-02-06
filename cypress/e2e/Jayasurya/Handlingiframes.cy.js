import 'cypress-iframe'
describe('Handling iframe', () => {
    it('Approach 1', () => {
    cy.visit("https://demo.automationtesting.in/Frames.html");

   const iframe=cy.get("#singleframe")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.find("input[type='text']").type("welcome").should('have.value','welcome')
    })

    it('Approach 2 by using custom command', () => {
        cy.visit("https://demo.automationtesting.in/Frames.html");
        
        cy.getiFrame("#singleframe").find("input[type='text']").type("welcome").should('have.value','welcome')
    });

    it('Approach 3', () => {
        cy.visit("https://demo.automationtesting.in/Frames.html");
        cy.frameLoaded('#singleframe')
        cy.iframe('#singleframe').find("input[type='text']").type("welcome")
        .should('have.value','welcome')
    
    });
});