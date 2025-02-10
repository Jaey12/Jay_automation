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

    it('Click Action', () => {
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/iframepage");
    
        cy.xpath("//iframe[@id='myFrame']")
          .its('0.contentDocument.body')
          .should('not.be.empty')
          .then(cy.wrap)
          .find("input[value='Submit the form']") // Fixed selector
          .should('be.visible')
          .click();
    });

    it('Click Checkbox', () => {
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/iframepage");
    
        cy.xpath("//iframe[@id='myFrame']")
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap)
      .within(() => { 
          // Use within() to scope inside the iframe
          cy.get("input[value='Cats']").should('be.visible').check();
          cy.get("input[value='Birds']").should('be.visible').check();
      });
    
});
});