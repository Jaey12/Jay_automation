describe('HeyMax',() =>{
    before(()=>{
        cy.heymaxloginstage();
    })

    it('Buy voucher', () => {
        cy.wait(8000)
        cy.get("svg[width='100']").should('be.visible');
        cy.wait(8000)
        cy.xpath("//div[@data-sentry-component='HubAndGoal']//div[4]").click();
        cy.wait(5000)

        //Validating filter
        cy.xpath("//div[@class='relative flex cursor-pointer items-center rounded-full bg-//*[name()='svg']").click()
        cy.wait(3000)
        cy.xpath("//p[normalize-space()='Highest reward first']").click()
        cy.wait(3000)
        cy.xpath("//div[@class='relative flex cursor-pointer items-center rounded-full bg-").click()
        cy.wait(3000)
        cy.xpath("//div[@id='popularity']").click()
        cy.wait(3000)

        //Validating vouchers tab
        cy.xpath("//div[@id='popularity']").click()
        cy.wait(4000)
        cy.xpath("//p[normalize-space()='Food & Dining']").click()
        cy.wait(4000)
        cy.xpath("//p[normalize-space()='Marketplace']").click()
        cy.wait(4000)
        cy.xpath("//p[normalize-space()='Travel']").click()
        cy.wait(4000)
        cy.xpath("//p[normalize-space()='Fashion']").click()
        cy.wait(4000)
        cy.xpath("//p[normalize-space()='Beauty']").click()
        cy.wait(4000)
        cy.xpath("//p[normalize-space()='Home & Living']").click()
        cy.wait(4000)
        cy.xpath("//p[normalize-space()='Groceries']").click()
        cy.wait(4000)

        //Voucher Benefits
        cy.xpath("//input[@id='voucher-benefits-button']").click()
        cy.wait(4000)
        cy.xpath("//button[@class='flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-").click()
        cy.wait(4000)

        
        //Clicking on Voucher
        cy.xpath("//p[normalize-space()='Toast Box Gift Cards']").click();
        cy.wait(8000)

        //Selecting Quantity
        cy.scrollTo('bottom');
        cy.xpath("//p[normalize-space()='SGD 10']").click();
        cy.wait(5000)
        cy.xpath("//*[name()='path' and contains(@d,'M7 2.625V1')]").click()//+ button
        cy.wait(5000)
        cy.get(':nth-child(5) > .text-lg').should('have.text', "Review purchase")
        cy.wait(5000)
        cy.get('.font-medium').should('have.text', "SGD 20")
        cy.wait(5000)

        //Validating contents and redeem max miles
        cy.xpath("//p[normalize-space()='Best card to use']").should('have.text', "Best card to use")
        cy.wait(3000)
        cy.xpath("//p[normalize-space()='Key things to note']").should('have.text', "Key things to note")
        cy.wait(3000)
        cy.xpath("//p[normalize-space()='Voucher benefits']").should('have.text', "Voucher benefits")
        cy.wait(3000)
        cy.xpath("//button[normalize-space()='Checkout']").click()
        cy.wait(3000)
        cy.xpath("//span[normalize-space()='Max Miles']").click()
        cy.xpath("//button[normalize-space()='Redeem Max Miles']").click()
        cy.wait(4000)
        cy.get('.sticky > .flex').click()







        //Card selection and checkout
        /*cy.xpath("//img[@alt='more']").click()
        cy.wait(3000)
        cy.xpath("//span[normalize-space()='Delete card']").click()
        cy.wait(3000)
        cy.xpath("//input[@id=':rh:-form-item']").type("41111111111111")
        cy.wait(3000)
        cy.xpath("//input[@id=':ri:-form-item']").type("01")
        cy.wait(3000)
        cy.xpath("//input[@id=':rj:-form-item']").type("35")
        cy.wait(3000)
        cy.xpath("//input[@id=':rk:-form-item']").type("123")
        cy.wait(3000)

        //Checkout
        cy.xpath("//div[@data-sentry-component='RedeemMaxMilesContainer']//div[@class='flex justify-between rounded-t-xl border bg-neutral-000 px-4 py-3 transition-").click()
        cy.wait(8000)
        cy.url().should('include', '/challenge/browser');

        //Navigation to OTP tab
        cy.origin('https://demo-emvacs.2c2p.com', () => {
            cy.url().should('include', '/challenge/browser');
        
            // Enter number in OTP field (update selector based on actual input field)
            cy.get('input[type="tel"]').type('123456');
        cy.wait(8000)

        //Validating voucher details
        cy.xpath("//button[normalize-space()='View Your Gift Cards']").click()*/

    })
})
