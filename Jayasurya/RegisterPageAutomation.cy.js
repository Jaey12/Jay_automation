describe('QA Automation Register Page', () => {

    before('Visiting',()=>{
        cy.visit("https://demo.automationtesting.in/Register.html")
        cy.viewport(1280, 720);
        
    })
    it('Form Submition', () => {
        cy.get("input[placeholder='First Name']").type('John')
        cy.get("input[placeholder='Last Name']").type('Victor')
        cy.get("textarea[ng-model='Adress']").type('Parrys')
        cy.get("input[type='email']").type('johnvick@gmail.com')
        cy.get("input[type='tel']").type('7816156756')
        cy.get("input[value='Male']").check()
        cy.get("#checkbox1, #checkbox2").check()
        //cy.xpath("//div[@id='msdd']").click()
        //cy.get(".ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content.ui-corner-all").select('Arabia')
        cy.get("#Skills").select("Adobe InDesign").contains('Adobe InDesign')
        cy.get("#select2-country-container").type('India').type('{enter}')
        cy.get("#yearbox").select('1916')
        cy.get("select[placeholder='Month']").select('January')
        cy.get("#daybox").select('2')
        cy.get("#firstpassword").type('123456')
        cy.get("#secondpassword").type('123456')
    })

    it('Form Submition', () => {
        cy.get("input[type='email']").type('ss'); // Enter invalid email
cy.get("input[type='email']").blur(); // Move focus away to trigger validation
cy.get("input[type='email']")
  .then(($el) => {
    expect($el[0].validationMessage).to.eq("Please include an '@' in the email address. 'ss' is missing an '@'.");
  });

    })

    it('Social Media Links Validation', () => {
       cy.get(".link.facebook").should('be.visible')
       cy.get(".link.twitter").should('be.visible')
       cy.get(".link.linkedin").should('be.visible')
       cy.get("") 
    })
})