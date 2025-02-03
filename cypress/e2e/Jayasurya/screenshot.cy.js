describe('Screenshots',() =>{

    it("Check Radio Buttons",() =>{
    
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.screenshot("homepage")
        cy.get("h1[class='title']").screenshot("head")
})
})