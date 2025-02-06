class Form
{
visit()
{
    cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
}

fillFirstname(value)
{
const field = cy.get("input[name^='name']")
field.clear()
field.type('Johnwick')
return this
}

fillMailID(value)
{
  const field = cy.get("input[name^='login']")
  field.clear()
  field.type('johnw0203')
  return this
}
CheckCA(value)
{
cy.get("input[value='Check availability']").click();
}
fillMailSuccessValidation(value)
{
  const field = cy.get("#check_availability")
  field.contains("Yippie! The ID you've chosen is available.")
  return this
}

fillnewPassword(value)
{
  const field = cy.get("#newpasswd")
  field.type('Johnw02067!')
  return this
}

fillRetypePassword(value)
{
  const field = cy.get("#newpasswd1")
  field.type('Johnw02067!')
  return this
}
fillAlternate(value)
{
  cy.get("input[name^='altemail']").type("johnwick453@gmail.com");
  return this
}
fillMob(value)
{
  const field = cy.get("#mobno")
  field.type('7810078655')
  return this
}
filldob(value)
{
  cy.get('select[name^="DOB_Day"]').select('10');
  cy.get('select[name^="DOB_Month"]').select('JAN');
  cy.get('select[name^="DOB_Year"]').select('2010');
  return this
}

fillGender(value)
{
  cy.get("input[value='m']").check();
  return this
}

fillCountry(value)
{
  cy.get('#country').select('India');
  return this
}
fillCity(value)
{
  cy.get("select[name^='city']").select('Chennai');
  return this
}


Submit()
{
    const button = cy.get("#Register")
    button.click();
}
VerifyOTPpage()
{
cy.get('#formmessagebox > div').should('have.text','OTP has been sent to 91-7810078655')
   
}


   
}

export default Form