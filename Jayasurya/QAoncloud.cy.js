// <reference types=cypress>

describe("Write test script for QAonCloud", () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false;
      });

    beforeEach( () => {
        cy.visit("https://www.qaoncloud.com/")
    })
   it("After loaded page", () =>{

    //Assert the url is correct

    cy.url().should("eq", "https://www.qaoncloud.com/")
            .and("include", "qaoncloud")

    //Assert the title is correct

    cy.title().should("be.equal", "QA Testing Services | Software Testing Services - QAonCloud")
            .and("include", "QAonCloud")

      // Check if the logo is visible on the page
      cy.get('.elementor-widget-container > a > img').should("be.visible"); // Assert logo is visible
      cy.get('.elementor-widget-container > a > img').should("exist"); // Assert logo exists in the DOM


    // Check for the presence of navigation links in the header
    cy.get('nav').within(() => {
    cy.contains('Services').should('exist');
    cy.contains('Solutions').should('exist');
    cy.contains('Industries').should('exist');
    cy.contains('Insights').should('exist');
     })
     
   
    })

   it("Check mouse hover elements", () =>{

    //Services
    cy.get("#menu-item-319 > .ekit-menu-nav-link").trigger('mouseover', {force:true})
    cy.get(".elementor-widget-container").should ("be.visible")
    cy.contains("Functional Testing").should("exist")
    cy.contains("Automation Testing").should("exist")
    cy.contains("Security Testing").should("exist")
    cy.contains("Regression Testing").should("exist")
    cy.contains("API Testing").should("exist")
    cy.contains("Agile Testing").should("exist")


    //Solutions
    cy.get("#menu-item-326 > .ekit-menu-nav-link").trigger('mouseover', {force:true})
    cy.get(".elementor-widget-container").should ("be.visible")
    cy.contains("Mobile App Testing").should("exist")
    cy.contains("Web App Testing").should("exist")
    cy.contains("Game Testing").should("exist")
    cy.contains("Cross-Platform Testing").should("exist")
    cy.contains("Cross-Browser Testing").should("exist")
    cy.contains("Smart Tv Testing").should("exist")


    //Industries
    cy.get("#menu-item-331> .ekit-menu-nav-link").trigger('mouseover', {force:true})
    cy.get(".elementor-widget-container").should ("be.visible")
    cy.contains("Banking & Financial Services").should("exist")
    cy.contains("Communications").should("exist")
    cy.contains("Event Management").should("exist")
    cy.contains("E-Commerce").should("exist")
    cy.contains("Artificial Intelligence").should("exist")

    //Insights
    cy.get("#menu-item-337> .ekit-menu-nav-link").trigger('mouseover', {force:true})
    cy.get(".elementor-widget-container").should ("be.visible")
    cy.contains("Blogs").should("exist")
    cy.contains("Case Studies").should("exist")
    cy.contains("FAQ").should("exist")
    cy.contains("Testimonials").should("exist")

    
})

it("Subheader links", () =>{
    // check wherther sub header links are navigated to correct page

    cy.get("#menu-item-319 > .ekit-menu-nav-link")
     .trigger('mouseover', { force: true });
     cy.get(".elementor-widget-container").should("be.visible");
     cy.contains("Functional Testing").click({ force: true });
})
 it("Check functionality of 'Contact Us' button", () =>{

    cy.get("a[href='/contact-us']").first()
      .should("be.visible")
      .click()
    // check whether button navigates to correct page
    cy.url().should("eq", "https://www.qaoncloud.com/contact-us")
    cy.get("section.banner_section"). should("contain.text", "Get in Touch ")

 })

 it("Test script for mainpage", () =>{

    cy.get(".imp-shape.imp-shape-rect").first()
    .click({ force: true })// it should navigates to contact us page
    cy.url().should("eq", "https://www.qaoncloud.com/contact-us")

    it("view More button", () =>{

        cy.get(".octf-btn octf-btn-third octf-btn-icon").first()
    .should("be.visible")
    .click()

    })
 })

 it("Talk to us button", () =>{
    
    cy.get(".octf-btn.octf-btn-primary.octf-btn-icon")
    .should("be.visible")
    .click({ force: true })// it should navigates to contact us page

    cy.wait(5000);
    cy.url().should("eq", "https://www.qaoncloud.com/contact-us")


})

it('should display the footer and key links', () => {
    // Scroll to the footer
    cy.scrollTo('bottom');

    // Assert the footer is visible
    cy.get('.ekit-template-content-footer > .elementor > .elementor-top-section').should('be.visible');

    // Verify important footer links are present
    cy.get('.ekit-template-content-footer > .elementor > .elementor-top-section').within(() => {
      cy.contains('About Us').should('exist');
      cy.contains('How it works').should('exist');
      cy.contains('Why Us').should('exist');
      cy.contains('Engagement & Pricing').should('exist');
      cy.contains('Hiring').should('exist');
      cy.contains('Tools we use').should('exist');
      cy.contains('Contact Us').should('exist');
      cy.contains('Privacy Policy').should('exist');
      cy.contains('Terms & Condition').should('exist');
      cy.contains('About Us').should('exist');
        //
      cy.get(".elementor-element-08d8eeb > .elementor-widget-container > .elementor-heading-title")
      .should("be.visible")
      .and("contain.text", `@QAonCloud 2024. All Rights Reserved`);

    })
})
})