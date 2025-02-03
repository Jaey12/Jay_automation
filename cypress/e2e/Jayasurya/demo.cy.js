describe('Lockton', () => {

    beforeEach(() => {
        cy.loginlock();
        cy.visit('http://lockton-qax.unqork.io/app/dashboard');
    });

    it('Verifies Client Button and Navigates to Client Screen', () => {
        cy.get('.lockton-logo > img').should('be.visible');
        cy.get("button[id='colBtnClients'] span[class='button-label ng-binding']").should('exist');
        cy.wait(2000);
        cy.get("button[id='colBtnClients'] span[class='button-label ng-binding']").click();
        cy.wait(3000);
        cy.get("h1[class='m-0']").should('contain', 'Clients');
    });

    it('Searches and Selects a Client', () => {
        cy.wait(6000);
        cy.get("#searchClient").type('Sershah');
        cy.wait(2000);
        cy.get(".jsgrid-grid-body").click();
    });

    it('Navigates to Modeling Screen and Adds a Model', () => {
        cy.wait(4000);
        cy.get("#btnLeftNavModeling").click();
        cy.wait(25000);
        cy.get("#btnAddModelingNoEnFirst").click();
        cy.wait(2000);
        cy.get(".modal-content").should('be.visible');
        cy.get("#nameModeling").type("Test Model 1");
    });

});
