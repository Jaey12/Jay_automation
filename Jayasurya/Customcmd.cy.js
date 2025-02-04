describe("OrangeHRM Demo Form", () => {
    it("Should fill and submit the form successfully", () => {
      cy.orange(
        "John Doe",
        "7819867765",
        "jay12@gmail.com",
        "QAontest",
        "Iran",
        "< 10"
      );
      
      cy.get('h1').contains("Thank you").should("be.visible");
       // Adjust based on actual success message
      cy.get("div[class='thank-page-info'] p").contains("We’ll be contacting you shortly!").should('be.visible')
    });
  });
  