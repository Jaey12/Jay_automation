describe("Form Submission using Fixture Data", () => {

    beforeEach( () =>{

        cy.fixture("Form1Jay").then(function(data){
                    this.data=data[0]; 
                    cy.visit(this.data.url);  // Visit the form URL
                })

    })
    
    it("Submit the form with valid data", function () {

        cy.get("input[name='first_name']").type(this.data.FirstName)
        cy.get("input[name='last_name']").type(this.data.LastName)
        cy.get("input[type='radio']").check(this.data.Gender)
        cy.get("select[class='form-control']").select(['Reading', 'Singing']);
        cy.get('select[name="department"]').select(this.data.Department)
        cy.get("input[name='user_name']").type(this.data.Username)
        cy.get("input[name='user_password']").type(this.data.Password)
        cy.get("input[name='confirm_password']").type(this.data.ConfirmPassword)
        cy.get("input[name='email']").type(this.data.EMail)
        cy.get("input[name='contact_no']").type(this.data.ContactNo)
        cy.get("textarea[class='form-control']").type(this.data.AdditionalInfo)
        cy.get("button[type='submit']").click()

        cy.get('#success_message').should('contain.text', 'Success');

    })

    it("Submit the form with invalid data ", function () {

        cy.get("input[name='first_name']").type("$")// first name

        // Validate that an error message appears
        cy.get('.has-error > .inputGroupContainer > [data-bv-validator="stringLength"]').should('contain.text', 'This value is not valid')
    

        cy.get("input[name='last_name']").type("h")// last name

        // Validate that an error message appears
        cy.get('.has-error > .inputGroupContainer > [data-bv-validator="stringLength"]').should('contain.text', 'This value is not valid')
    
    })

})
