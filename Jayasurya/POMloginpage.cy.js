import LoginPage from '../Jayasurya/PageObject/LoginPage.cy'

describe('POMLogin',function(){

    it("Login",function(){
        const lp =new LoginPage()
        lp.visit()
        lp.fillEmail('preethi.s+sysadmin@auxosolutions.io')
        lp.fillPassword('2000@Preethi')
        lp.Submit()
    })
    })
