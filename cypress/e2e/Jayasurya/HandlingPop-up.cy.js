describe('Handling Pop-ups', () => {  
    it('Simple Alert', () => {  
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes")  
        cy.get("#alert").click();  
        cy.on('window:alert', (t) => {  
            expect(t).to.contain("I'm an Alert Box");  
        });  
    });  

    it('Confirmation Alert - Ok', () => {  
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes")  
        cy.get("#confirm").click();  
        cy.on('window:confirm', (t) => {  
            expect(t).to.contain("I'm a Confirm Box");  
            return true;  // Simulating clicking "OK"
        });  
    });  

    it('Confirmation Alert - Cancel', () => {  
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes")  
        cy.get("#confirm").click();  
        cy.on('window:confirm', (t) => {  
            expect(t).to.contain("I'm a Confirm Box");  
            return false;  // Simulating clicking "Cancel"
        });  
    }); 
    
    it('Multiple Alerts', () => {  
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes")
        const fn = cy.stub();  
        cy.on('window:alert', fn);  
        cy.get("button[id^='miltiplealert']").click().then(() => {  
            expect(fn.getCall(0)).to.be.calledWithExactly('First Alert Box');  
            expect(fn.getCall(1)).to.be.calledWithExactly('Second Alert Box');  
            expect(fn.getCall(2)).to.be.calledWithExactly('Third Alert Box');  
        });  
    });

    it('Prompt Alert', () => {

        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes")
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome')
        })
        cy.get("#prompt").click();
        cy.get("div[id='confirmdiag'] h2").should('have.text', 'PROMPT - Hello welcome! How are you today?')
    });

    it('Pop-up custom dialogbox', () => {
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes")
        cy.get("#moddiag").click()
        cy.get(':nth-child(1) > .ui-button-text').click();
    });

    it('Custom dialog box', () => {
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes")
        cy.get("#cusdiag").click();
        cy.get('#name').type('Jay');
        cy.get("#password").type('12345');
        cy.get('.ui-resizable > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button > .ui-button-text').click()
        cy.get('h2').should('have.text', 'MODAL DIALOG FROM HIDDEN FIELDS - You submitted username and password')
    });

    it('Window pop up', () => {
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes")
        const pop_url = "https://www.youtube.com/c/qaboxletstest/";
    
        cy.window().then(win => {
            const stub = cy.stub(win, 'open').as('windowopen');
        });
    
        cy.get('#winpop').click();
        cy.get('@windowopen').should('be.calledWith', pop_url);
    
        cy.window().then(win => {
            win.location.href = pop_url;
            cy.get('.ytSearchboxComponentInput').type('Cypress by qa box lets test{enter}');
        });
    });
    
    
});
