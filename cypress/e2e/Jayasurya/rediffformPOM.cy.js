import Form from '../Jayasurya/PageObject/LoginPage.cy'

describe('POMForm1',function(){

    it("From Submittion",function(){
        const f2 =new Form()
        f2.visit()
        f2.fillFirstname()
        f2.fillMailID()
        f2.CheckCA()
        f2.fillMailSuccessValidation()
        f2.fillnewPassword()
        f2.fillRetypePassword()
        f2.fillAlternate()
        f2.fillMob()
        f2.filldob()
        f2.fillGender()
        f2.fillCountry()
        f2.fillCity()
        cy.pause()
        f2.Submit()
    })
    })
