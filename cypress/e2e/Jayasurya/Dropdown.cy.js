describe('Select the Dropdown', () => {
    it('Should Verify the Dropdown selection', () => {
    cy.visit("https://artoftesting.com/samplesiteforselenium");
    cy.get('#testingDropdown').select('Manual Testing').should('have.value','Manual')
});
it('Should Verify the Dropdown to enter the text', () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get('#select2-billing_country-container').click()
    cy.get('.select2-search__field').type('Italy').type('{enter}')
    cy.xpath("//span[@id='select2-billing_country-container']").should('have.text','Italy')

});
it('Should Verify the Dropdown dynamic', () => {
    cy.visit("https://www.wikipedia.org/");
    cy.get('#searchInput').type('Delhi')
    cy.get('.suggestion-title').contains('Delhi University').click({force: true});
});
});