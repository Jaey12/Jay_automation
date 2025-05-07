describe('HeyMax',() =>{
    before(()=>{
        cy.heymaxloginstage();
    })

it('View my voucher', () => {
        cy.wait(8000)
        cy.get("svg[width='100']").should('be.visible');
        cy.wait(8000)
        cy.xpath("//span[normalize-space()='View my vouchers']").click();
        cy.wait(10000)

        //Validating view my voucher screen
        cy.xpath("//button[normalize-space()='Need help?']").should('be.visible');
        cy.wait(5000)
        cy.xpath("(//p[normalize-space()='Purchased on 02 May, 2025 18:15:05'])[1]").should('be.visible')
        cy.wait(5000)
        cy.xpath("//body[1]/div[1]/div[1]/div[3]/div[3]/div[1]/div[2]/div[1]/div[1]/div[3]/p[1]").should('be.visible');
        cy.wait(5000)
        cy.xpath("//label[@class='relative cursor-pointer']").dblclick();
        cy.wait(5000)
        //Buy Again
        cy.xpath("(//button[contains(text(),'Buy again')])[1]").click();
        cy.wait(5000)
        cy.go('back');
        //Redeem button
        cy.xpath("(//button[contains(text(),'Redeem')])[1]").click();
        cy.wait(10000)
        cy.xpath("//div[normalize-space()='Redeem Now']")
        .should('be.visible')
        .then(() => {
          const redeemUrl = 'https://stg.wogi.dev/redeem/LGvp_gerA9Q-2kPvCCPqjm1sujMDew1BR7vU_v-Bvs4VGzhA3pmbjRsn_dcknCz7/activate';
          cy.visit(redeemUrl);
        }); // Optional URL validation
        cy.go('back');

        //Checkbox validation
        cy.xpath("(//input[@type='checkbox'])[2]").click();
        cy.wait(4000)
        cy.xpath("(//p[contains(text(),'Redeemed')])[1]").should('be.visible')
})
it('Shop voucher button', () => {
    //Validating filter
    cy.visit("https://heymax.ai/?")
    cy.wait(5000)
    cy.xpath("//span[normalize-space()='View my vouchers']").click()
    cy.wait(4000)
    cy.xpath("//div[normalize-space()='Shop Vouchers']").click();
    cy.wait(4000)
    cy.get('.mx-auto > .w-full.gap-3 > .relative').click({force:true});
    cy.wait(8000)
    cy.xpath("//p[normalize-space()='Highest reward first']").click({force:true})
    cy.wait(3000)
    cy.get('.mx-auto > .w-full.gap-3 > .relative').click({force:true});
    cy.wait(3000)
    cy.xpath("//div[@id='popularity']").click({force:true})
    cy.wait(4000)

    //Validating vouchers tab
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
    cy.xpath("//p[normalize-space()='Groceries']").click()
    cy.wait(4000)

    //Clicking on Voucher
    cy.scrollTo(0, '30%');
    cy.xpath("(//p[contains(text(),'Toast Box Gift Cards')])[1]").click();
    cy.wait(8000)

    //Selecting Quantity
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
    cy.wait(8000)

    //validating Payment screen
    cy.xpath("(//div[@class='duration-[390ms] flex flex-col rounded-xl border-2 transition-colors border-brand-100 bg-brand-100'])[1]").should('be.visible')
    cy.wait(3000)
    cy.xpath("//span[normalize-space()='Cards']").should('be.visible')
    cy.wait(3000)
    cy.xpath("//span[normalize-space()='PayNow']").should('be.visible')
    cy.wait(3000)
    cy.xpath("//span[normalize-space()='FavePay']").should('be.visible')
    cy.wait(3000)
    cy.xpath("(//button[normalize-space()='Confirm and Pay'])[1]").should('be.visible')
})
})
