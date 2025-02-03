describe('Check UI elements',() =>{

    it("Check Radio Buttons",() =>{
    
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')
    
        //Selecting the radiobutton
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')
})

    it("Check Radio Buttons",() =>{
    
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("input#sunday").check().should('be.checked')
        cy.wait(2000)
        cy.get("input#monday").check().should('be.checked')
        cy.wait(2000)
        cy.get("input#sunday").uncheck().should('not.be.checked')
        cy.wait(2000)

        //selecting all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.wait(3000)
        cy.get("input.form-check-input[type='checkbox']").uncheck()
        cy.wait(3000)

        //selecting first and last checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.wait(3000)
        cy.get("input.form-check-input[type='checkbox']").first().uncheck().should('not.be.checked')

    })
})