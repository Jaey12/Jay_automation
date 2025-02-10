describe("Filter sorting validation", () => {
    it("Newest date", () => {
        cy.visit("https://themeforest.net/search/hotel%20booking?sort=date#content")
        cy.get('.shared-item_cards-list-image_card_component__lastUpdated')
            .invoke('text')
            .then((text) => {
    const date = text.replace('Last updated: ', '').trim();
    cy.log(date); // Logs: "06 Feb 25"

    cy.get('.shared-item_cards-list-image_card_component__lastUpdated')
    .should('have.length', 30) // Ensure 30 elements exist
    .then(($elements) => {
    const dates = $elements.toArray().map(el => el.innerText.replace('Last updated: ', '').trim());

    // Debug: Print extracted dates
    cy.log('Extracted Dates:', dates);
    console.log('Extracted Dates:', dates); // Check in Cypress Test Runner

    // Convert dates to YYYY-MM-DD format
    const formattedDates = dates.map(date => {
      const [day, month, year] = date.split(' ');
      const months = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', 
                       Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };
      return `${year}-${months[month]}-${day.padStart(2, '0')}`;
    });

    // Debug: Print formatted dates
    cy.log('Formatted Dates:', formattedDates);
    console.log('Formatted Dates:', formattedDates);

    // Sort a copy and compare
    const sortedDates = [...formattedDates].sort(); // Sort a copy of the array
    const isSorted = JSON.stringify(formattedDates) === JSON.stringify(sortedDates);

    // Debug: Print expected vs actual sorting
    cy.log('Sorted Dates:', sortedDates);
    console.log('Sorted Dates:', sortedDates);

    // Assertion
    expect(isSorted).to.be.true;
  });
})
})
})
