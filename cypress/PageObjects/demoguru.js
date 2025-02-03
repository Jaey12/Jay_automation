class   FirstPage{


   visit(){
    cy.visit("https://demo.guru99.com/test/newtours/index.php")

   }
   userName(){
    const field= cy.get("input[name=userName]")
    field.clear()

    return this
   }
   passWord(){
    cy.get("input[name=password]")
    return this 
   }
   submitBtn(){
    cy.get("input[name=submit]").click()

   }


}

export default FirstPage