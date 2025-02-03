describe('Handling iFrames', () => {

    it('Approach 1', () => {
    cy.visit("https://the-internet.herokuapp.com");
    cy.get("a[href='/frames']").click()
    cy.get("a[href='/iframe']").click()
    cy.get("div[aria-label='Close'] svg").click()
    const iframe =cy.xpath("//iframe[@id='mce_0_ifr']")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
        iframe.clear().type('Welcome{control+a}')  
        cy.get("button[title='Bold'] span[class='tox-icon tox-tbtn__icon-wrap'] svg").click()
    
});
    it('Should perform on inside get method', () => {

    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get('.example >a').then((e)=>{
        let url=e.prop('href');
        cy.visit(url);
    })
    cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
    cy.wait(2000);
    cy.go('back')
    cy.url().should('contain','the-internet.herokuapp.com')
});
});