
describe("Assertion Demo",() =>{

    it("Implicit Assertion",() =>{

    //For implicit assertion we have to use Should , And    
    
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //cy.url().should('include', 'orangehrmlive.com')
    //cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //cy.url().should('contain', 'orangehrm')

    //We can capture the url 1st time and then continue with .should key word

    /*cy.url().should('include', 'orangehrmlive.com')
    .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .should('contain', 'orangehrm')*/

    //For multiple assertion, instead of should we can use And as well

    cy.url().should('include', 'orangehrmlive.com')
    .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('not.eq', 'opensource-demo.orangehrm')
    .and('contain', 'orangehrm')
    .and('not.contain', 'GreenHRM') //Negative Assertion

    //For checking the page title
    cy.title().should('contain', 'Orange')
    .and('eq', 'OrangeHRM')
    .and('not.eq', 'Yellow HRM')

    //Logo Visibility Assertion
    cy.get('.orangehrm-login-branding > img').should('be.visible')
   .and('exist')

   //Links Validation
   cy.xpath("//a").should('have.length', '5')

   //text validation
   cy.get("input[placeholder='Username']").type('Admin')
   cy.get("input[placeholder='Username']").should('have.value', 'Admin')
  
})


it("Explicit Assertion",() =>{

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.get("input[placeholder='Username']").type("Admin")
cy.get("input[placeholder='Password']").type("admin123")
cy.get("button[type='submit']").click()

let actName = "Craque Neto";
cy.get(".oxd-userdropdown-name").then((x)=>{

    let expName = x.text()

    //BDD Style
    expect(actName).to.equal(expName)

    //TDD Style
    assert.equal(actName,expName)
    
})

})
})
