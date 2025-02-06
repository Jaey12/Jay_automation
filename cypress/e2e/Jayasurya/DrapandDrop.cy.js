import '@4tw/cypress-drag-drop';
import { it } from 'mocha';

describe('Drag and Drop',()=>{

    it("How to drag and drop",()=>{

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette')
        cy.viewport(2000, 1000);
        cy.get("#box1").drag("#box101",{force: true});
        cy.wait(5000)
        cy.get("#box2").drag("#box102",{force: true});
        cy.wait(5000)
        cy.get("#box3").drag("#box103",{force: true});
        cy.wait(5000)
        cy.get("#box4").drag("#box104",{force: true});
        cy.wait(5000)
        cy.get("#box5").drag("#box105",{force: true});
        cy.wait(5000)
        cy.get("#box6").drag("#box106",{force: true});
        cy.wait(5000)
        cy.get("#box7").drag("#box107",{force: true});
    })

})