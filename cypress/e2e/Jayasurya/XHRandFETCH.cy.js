describe('XHR and FETCH', () => {

    beforeEach(() => {
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/intercept");
    });

    it('XHR GET Request', () => {
        cy.intercept("GET", "**/users?_limit=3").as("users");
        cy.get("#loadThreeUsersXHR").click();

        cy.wait("@users").then((interception) => {
            expect(interception.response).to.exist;
            expect(interception.response.statusCode).to.eq(200);
        });
    });

    it('XHR POST Request', () => {
        cy.intercept("POST", "/users").as("users");
        const user = {
            name : 'Jay',
            email : '123'
        }
        cy.get("#xhrname").type(user.name)
        cy.get("#xhremail").type(user.email)
        cy.get("#xhrbtn").click()
        cy.wait("@users").then((interception) => {
            expect(interception.response).to.exist;
            expect(interception.response.statusCode).to.eq(201);
            expect(interception.response.body).to.have.property("name", user.name);
            expect(interception.response.body).to.have.property("email", user.email);
        });
    });

    it('FETCH GET',()=>{
        const fetch = '#loadThreeUsersFETCH';
        cy.intercept("GET", "**/users?_limit=3").as("users");
        cy.get(fetch).click();

        cy.wait("@users").then((interception) => {
            expect(interception.response).to.exist;
            expect(interception.response.statusCode).to.eq(200);
        });
    }); 

    it('FETCH POST Request', () => {
        cy.intercept("POST", "/users").as("users");
        const user = {
            name : 'JOHNWICK',
            email : 'XYZ@gmail.com'
        }
        cy.get("#fetchname").type(user.name)
        cy.get("#fetchemail").type(user.email)
        cy.get("#fetchbtn").click()
        cy.wait("@users").then((interception) => {
            expect(interception.response).to.exist;
            expect(interception.response.statusCode).to.eq(201);
            expect(interception.response.body).to.have.property("name", user.name);
            expect(interception.response.body).to.have.property("email", user.email);
        });
    });

        
});
