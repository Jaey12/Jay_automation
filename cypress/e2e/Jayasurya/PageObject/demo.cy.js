class demo
{
visit()
{
    cy.visit('https://the-internet.herokuapp.com/')
}

clickdropdown(value)
{
  cy.get("a[href='/dropdown']").click();
  return this
}

selectdropdown(value)
{
  cy.get("#dropdown").select("Option 1").should('have.value', '1');
  cy.get("#dropdown").select("Option 2").should('have.value', '2');
  return this
}
}
export default demo