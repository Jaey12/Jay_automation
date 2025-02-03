describe('Handling Alerts', () => {
    it('Simple JS Alert', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert',(t)=>{
            expect(t).to.contain('I am a JS Alert')
        })

        cy.xpath("//p[@id='result']").should('have.text', 'You successfully clicked an alert')

        
    })

    it('JS Confirmation Alert - Ok', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contain('I am a JS Confirm')
        })
        cy.get("#result").should('have.text', 'You clicked: Ok')
        
    })

    it('JS Confirmation Alert - Cancel', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contain('I am a JS Confirm')
        })
        cy.on('window:confirm',()=> false)  //Clicking on Cancel button
        cy.get("#result").should('have.text', 'You clicked: Cancel')
        
    })

    it('JS Prompt Alert', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome')

        })
        cy.get("button[onclick='jsPrompt()']").click();
        cy.get("#result").should('have.text', 'You entered: welcome')

    })

    //Authenticated Alert
    it('JS Aunthenticate Alert', () => {

        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:"admin",password:"admin"}})
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations!')

        //Another Approach
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations!')


    })
  })