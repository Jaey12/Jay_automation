describe('Breakpoint and Debugging Example', () => {
    it('should debug Cypress commands', () => {
      cy.visit('https://example.cypress.io');
  
      // Pause execution to inspect the application manually
      cy.pause();
  
      cy.get('.navbar').should('be.visible');
  
      // Set a debugger breakpoint
      cy.get('.banner').then(($element) => {
        debugger; // Execution will pause here in the browser’s DevTools
        expect($element).to.exist;
      });
  
      cy.get('h1').should('contain', 'Kitchen Sink');
    });
  });
  