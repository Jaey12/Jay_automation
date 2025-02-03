describe("Hooks",()=>{
    describe("After execution",()=>{
        before("Sign in(Before execution)",()=>{
            cy.visit("https://practicetestautomation.com/practice-test-login/");
            cy.get("#username").type("student");
            cy.get("#password").type("Password123");
            cy.xpath("//button[@id='submit']").click();
})
after("Sign out",()=>{
    cy.visit("https://practicetestautomation.com/logged-in-successfully/");
    cy.get(".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color").click();
   
})
it("Homepage",()=>{
    cy.url().should("be.equal","https://practicetestautomation.com/logged-in-successfully/");
    cy.title().should("be.equal","Logged In Successfully | Practice Test Automation");
    cy.get("p[class='has-text-align-center'] strong").and("be.visible").and("have.text","Congratulations student. You successfully logged in!");
    cy.get("img[alt='Practice Test Automation']").then((img)=>{
        const value=img.text() ;     
         cy.log(value);
         })
         cy.xpath("//a[normalize-space()='Log out']").should("be.visible").and("not.be.disabled");
         cy.get("li[id='menu-item-43'] a").click();
         cy.get(".post-title").should("be.visible").then((txt)=>{
            cy.log(txt.text());
         })
         cy.get("img[alt='Dmitry Shyshkin, your Selenium WebDriver instructor']").and("be.visible");
         cy.xpath("//input[@id='form_first_name_7']").type("Jayasurya");
         cy.xpath("//input[@id='form_email_7']").type("Jayasuryasrinivasan3@gmail.com");
         cy.get("input[value='Get XPath cheat sheet']").click();
         cy.go("back");   
})
})
})