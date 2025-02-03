describe('Rediffmail Account Creation', () => {

  beforeEach( () =>{

    cy.fixture("rediffJay").then(function(data){
      this.data=data[0]; 
      cy.visit(this.data.url);  // Visit the form URL
  })

})
  it('Fills the form using fixture data', function() {
      // Access fixture data properly using `this.data`
      cy.viewport(2000,1000);
      cy.get("input[maxlength*='61']").type(this.data.fullName);
      cy.get('input[onclick="javascript:UncheckAllOptions();"]').type(this.data.rediffmailID);
      cy.get("input[value='Check availability']").click();
      cy.get("#newpasswd").type(this.data.password);
      cy.get("#eyeiconNew").dblclick();
      cy.get("#newpasswd1").type(this.data.Retypepassword);
      cy.get("input[maxlength='100']").type(this.data.alternateEmail);
      cy.get("#mobno").type(this.data.mobileNumber);
      

      // Corrected dropdown selections
      cy.get('select[name^="DOB_Day"]').select('10');
      cy.get('select[name^="DOB_Month"]').select('JAN');
      cy.get('select[name^="DOB_Year"]').select('2010');

      cy.get("input[value='m']").check();
      cy.get('#country').select('India');
      cy.get("select[name^='city']").select('Chennai');

      // CAPTCHA handling
      cy.pause(); // Pause execution for manual input
  });
});
