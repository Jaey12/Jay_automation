import '@4tw/cypress-drag-drop';

describe('File uploads ',()=>{

    it("drag and drop",()=>{

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette')
        cy.viewport(3000,1000);
        cy.get("#box1").should('be.visible').drag("#box101",{force: true})
        cy.wait(3000)
        cy.get("#box2").should('be.visible').drag("#box102",{force: true})
        cy.wait(3000)
        cy.get("#box3").should('be.visible').drag("#box103",{force: true})
        cy.wait(3000)
        cy.get("#box4").should('be.visible').drag("#box104",{force: true})
        cy.wait(3000)
        cy.get("#box5").should('be.visible').drag("#box105",{force: true})
        cy.wait(3000)
        cy.get("#box6").should('be.visible').drag("#box106",{force: true})
        cy.wait(3000)
        cy.get("#box7").should('be.visible').drag("#box107",{force: true})
    })
    



})