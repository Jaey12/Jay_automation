class LoginPage
{
 visit() 
 {
   cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 }

 fillEmail(email)
 {
    const field = cy.get('[name=username]')
    field.clear()
    field.type(email)
    return this
 }

 fillPwd(value)
 {
    const field = cy.get('[name=password]')
    field.clear()
    field.type(value)
    return this
 }
submit()
{
    const button = cy.get('[type=submit]')
    button.click()
}

}

export default LoginPage