class RegForm {

    visit() {
      cy.visit("http://mytestingthoughts.com/Sample/home.html");
    }
  
    fillFirstName(value) {
      const field = cy.get('[name=first_name]');
      field.clear();
      field.type(value);
      return this;
    }
  
    fillLastName(value) {
      const field = cy.get('[name=last_name]');
      field.clear();
      field.type(value);
      return this;
    }
  
    selectGender(value) {
      const field = cy.get(`[value="${value}"]`);
      field.click();
      return this;
    }

    selectHobbies(value) {
        const field = cy.get('select[class="form-control"]');  // Adjust this selector if needed
        field.select(value);  // Select the option with the provided value (e.g., "Reading")
        return this;
      }

      selectDepartment(value) {
        const field = cy.get('select[class="form-control selectpicker"]');  // Adjust this selector if needed
        field.select(value);  // Select the option with the provided value (e.g., "Reading")
        return this;
      }

      fillUsername(value)
 {
    const field = cy.get('[name=user_name]')
    field.clear()
    field.type(value)
    return this
 }

 fillPwd(value)
 {
    const field = cy.get('[name=user_password]')
    field.clear()
    field.type(value)
    return this
 }

 fillConfPwd(value)
 {
    const field = cy.get('[name=confirm_password]')
    field.clear()
    field.type(value)
    return this
 }

 fillEmail(email)
 {
    const field = cy.get('[name="email"]')
    field.clear()
    field.type(email)
    return this
 }

 fillPhone(value)
 {
    const field = cy.get('[name=contact_no]')
    field.clear()
    field.type(value)
    return this
 }
 fillAdditionalInfo(value)
 {
    const field = cy.get('textarea[class=form-control]')
    
    field.type(value)
    return this
 }
 
 submit()
{
    const button = cy.get('[type=submit]')
    button.click()
}
      
  }
  
  export default RegForm;  // Ensure you export the class as default
  