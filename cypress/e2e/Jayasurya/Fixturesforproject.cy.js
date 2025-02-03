describe('Fixtures example',() =>{

    before(()=> {
        // Load fixture file
        cy.readFile('C:/Users/jayas/OneDrive/Desktop/MOM_Bench/data1.json').then(function(data){
          this.data = data; // Save data to `this`
        })
      })
      it('Login using fixture data', function() {
        // Use fixture data within a test
        cy.visit('http://lockton-qax.unqork.io/');
        cy.wait(3000);
        cy.get('#username').type(this.data.email); // Access the fixture data
        cy.get('#password').type(this.data.password);
        cy.get("input[type='submit']").click();
        cy.visit('http://lockton-qax.unqork.io/app/dashboard');
      });
    }); 