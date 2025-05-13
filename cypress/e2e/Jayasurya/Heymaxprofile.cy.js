describe('HeyMax',() =>{
    before(()=>{
        cy.heymaxlogin();
        cy.wait(5000)
    })

    it('Refer a friend', ()=>{
        cy.wait(8000);
        cy.get("svg[width='100']").should('be.visible');
        cy.wait(8000);
        cy.xpath("(//div[@class='hidden cursor-pointer items-center justify-center gap-[6px] rounded-sm p-2 hover:bg-[#F3F5FB] md:flex'])[1]").click();
        cy.wait(5000);
        cy.xpath("(//p[@class='text-sm'][normalize-space()='Profile'])[1]").click();
        cy.wait(5000);
        cy.xpath("(//p[@class='flex flex-col font-semibold text-[#5046C5]'])[1]").should('be.visible');
        cy.wait(5000);
        cy.xpath("(//div[@class='flex items-center gap-2'])[9]").should('be.visible');
        cy.wait(5000);
        cy.xpath("(//div[@class='flex w-full items-center justify-between'])[2]").click();
        cy.wait(5000);
        //Your max miles
        cy.xpath("//h1[normalize-space()='Your Max Miles']").should('have.text', "Your Max Miles");
        cy.wait(5000);
        cy.go('back');

        //Your referrals
        cy.xpath("//a[@data-sentry-component='ProfileReferralCard']").click();
        cy.wait(5000);
        cy.xpath("(//p[@class='font-semibold text-[#1A1A1A]'])[1]").should('be.visible');
        cy.wait(5000);
        cy.go('back');

        //Your vouchers
        cy.xpath("(//a[@data-sentry-component='ProfileVoucherCard'])[1]").click();
        cy.wait(5000);
        cy.xpath("(//h1[normalize-space()='Your Vouchers & Gift Cards'])[1]").should('be.visible');
        cy.wait(5000);
        cy.go('back');

        //Verify to unlock redemption
        cy.xpath("(//span[@class='flex-grow text-left font-inter text-sm font-semibold leading-5 text-neutral-000'])[1]").click();
        cy.wait(5000);
        cy.xpath("(//*[name()='svg'])[23]").click();
        cy.wait(5000);

        //Telegram community
        const telegramxpath = "(//a[@class='flex w-full flex-col gap-3'])[1]"
        cy.xpath(telegramxpath).should('exist');
        cy.wait(5000);

        //HeyMax labs
        const dineout = "//p[@class='ml-xlarge']"
        cy.xpath(dineout).click();
        cy.url().should('include', 'airtable.com');
        cy.wait(5000);
        cy.go('back');

        //Saved Merchants
        const savedmerchants = "(//p[@class='flex text-xs text-[#1A1A1A]'])[1]"
        cy.xpath(savedmerchants).should('have.text', "YOUR SAVED MERCHANTS");
        cy.wait(5000);

        //SETTINGS
        const country = "//div[normalize-space()='Singapore']"
        cy.xpath(country).should('have.text', "Singapore");
        cy.wait(5000);

        //Redeem a code
        const redeem = "//p[normalize-space()='Redeem a code']"
        const redeemtext = "//h2[normalize-space()='Redeem your Max Miles']"
        const enterfield = "//input[@id='compare-search-bar-input']"
        const redeembutton = "//input[@id='compare-search-bar-input']"
        const contactsupport = "//span[normalize-space()='Contact us for support.']"
        const changepassword = "//p[normalize-space()='Change password']"

        cy.xpath(redeem).click();
        cy.xpath(redeemtext).should('be.visible');
        cy.xpath(enterfield).should('be.visible');
        cy.xpath(redeembutton).should('be.visible');
        cy.xpath(contactsupport).click();
        cy.xpath(changepassword).should('be.visible');
        cy.go('back');
        
        //Delete account
        const deleteaccount = cy.xpath("(//p[normalize-space()='Delete account'])[1]")
        deleteaccount.should('be.visible');

        //Support channels
        const faq = "//p[normalize-space()='FAQs']";
        const cs = "(//p[normalize-space()='Contact support'])[1]";
        const feedback = "(//p[normalize-space()='Give feedback'])[1]";

        cy.xpath(faq).should('be.visible')
        .click()
        cy.url().should('contain', "help")
        cy.go('back');
        cy.wait(5000);

        cy.xpath(cs).should('be.visible')
        .click()
        cy.xpath(contactscreencloser).click();
        cy.wait(5000);

        cy.xpath(feedback).should('be.visible')
        .click()
        cy.url().should('contain', "community")
        cy.go('back');
        cy.wait(5000);

        //About HeyMax
        const heymaxextension = "//p[normalize-space()='HeyMax Browser Extension']"
        const company = "//p[normalize-space()='Company']"
        const businesspartner = "(//a[@data-sentry-source-file='BecomeAPartnerButton.tsx'])[1]"
        const blog = "//a[@data-sentry-source-file='CommunityButton.tsx']"

        cy.xpath(heymaxextension).should('be.visible');
        cy.xpath(company).should('be.visible');

        cy.xpath(businesspartner)
        .invoke('removeAttr', 'target') // remove target to prevent new tab
        .click(); 
        cy.url().should('include', '/business')
        cy.go('back');
        cy.wait(10000);

        cy.xpath(blog)
        .invoke('removeAttr', 'target') // remove target to prevent new tab
        .click(); 
        cy.url().should('include', '/blog')
        cy.go('back');  
        cy.wait(10000);

        //logout
        const logout = cy.xpath("(//p[normalize-space()='Log out'])[1]")
        logout.click();
        
    })
});
