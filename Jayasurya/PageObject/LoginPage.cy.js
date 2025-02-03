class LoginPage
{
visit()
{
    cy.visit('http://lockton-qax.unqork.io/')
}

fillEmail(value)
{
const field = cy.get("#username")
field.clear()
field.type(value)
return this
}

fillPassword(value)
{
  const field = cy.get("#password")
  field.clear()
  field.type(value)
  return this
}

Submit()
{
    const button = cy.get("input[type='submit']")
    button.click();
}


   
}

export default LoginPage