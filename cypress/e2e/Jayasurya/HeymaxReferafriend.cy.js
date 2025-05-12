describe('HeyMax',() =>{
    before(()=>{
        cy.heymaxlogin();
        cy.wait(5000)
    })

    it('Refer a friend', ()=>{
        cy.wait(8000)
        cy.get("svg[width='100']").should('be.visible');
        cy.wait(8000)
        cy.xpath("//span[normalize-space()='Refer a friend']").click();
        cy.wait(10000)

        //Refer a friend screen validation
        cy.get("p[class='font-semibold text-[#1A1A1A]']").should('be.visible');
        cy.wait(5000);
        cy.xpath("//button[normalize-space()='Copy link to share']").should('be.visible');
        cy.wait(5000);
        cy.xpath("//button[normalize-space()='Copy link to share']").click();
        cy.wait(4000);

        //Whatsapp
        cy.xpath("//img[@alt='WhatsApp']")
        .should('be.visible');
        cy.wait(4000);
        

        //Telegram
        cy.xpath("//img[@alt='WhatsApp']")
        .should('be.visible');
        cy.wait(4000);

        //Social media visibility
        cy.xpath("//img[@alt='Facebook']").should('be.visible');
        cy.wait(4000);
        cy.xpath("//img[@alt='LinkedIn']").should('be.visible');
        cy.wait(4000);
        cy.xpath("//img[@alt='Gmail']").should('be.visible');
        cy.wait(4000);
        cy.xpath("//img[@alt='Reddit']").should('be.visible');
        cy.wait(4000);

        //Tips on sharing about heymax
        cy.xpath("(//p[@class='font-inter text-sm font-semibold leading-5 text-brand-100'])[1]").click();
        cy.wait(4000);
        cy.xpath("(//*[name()='svg'][@class='shrink-0 grow-0 cursor-pointer h-6 w-6'])[1]").click();
        cy.wait(4000);

        //My referrals
        cy.xpath("(//div[@class='relative w-fit text-s2 text-neutral-100'])[1]").click();
        cy.wait(4000);
        cy.xpath("(//div[@class='relative w-fit whitespace-nowrap text-l2 text-neutral-100'][normalize-space()='Miles Earned'])[2]").should('be.visible');
        cy.wait(4000);
        cy.xpath("(//div[@class='relative w-fit whitespace-nowrap text-l2 text-neutral-100'][normalize-space()='In Progress'])[2]").should('be.visible');
        cy.wait(4000);
        cy.xpath("(//div[@class='relative w-fit whitespace-nowrap text-l2 text-neutral-100'][normalize-space()='Completed'])[2]").should('be.visible');
        cy.wait(4000);
        cy.xpath("(//p[normalize-space()='In Progress'])[1]").should('be.visible');
        cy.wait(4000);
        cy.xpath("(//p[normalize-space()='In Progress'])[1]").should('be.visible')
        .dblclick();
        cy.wait(4000);
        cy.xpath("//p[normalize-space()='Completed']").should('be.visible');
        cy.wait(4000);
        cy.xpath("//p[normalize-space()='Completed']").should('be.visible')
        .dblclick();
        cy.wait(4000);
        cy.xpath("(//*[name()='svg'][@class='shrink-0 grow-0 cursor-pointer h-5 w-5'])[1]").click()
        cy.wait(4000);

        //How it works
        cy.xpath("(//div[@class='self-stretch text-s2 text-neutral-100'])[1]").should('be.visible');
        cy.wait(4000);
        cy.xpath("(//div[@class='text-center text-l2 text-neutral-100'])[1]").should('be.visible')
        cy.wait(4000);
        cy.xpath("(//div[@class='text-l2 text-neutral-100'])[1]").should('be.visible')
        cy.wait(4000);
        cy.xpath("(//p[@class='text-center text-l2 text-neutral-100'])[1]").should('be.visible')
        cy.wait(4000);

        //Referral Programme FAQs
        cy.xpath("//p[normalize-space()='Referral Programme FAQ']").should('be.visible')
        .dblclick();
        cy.wait(4000);
        //General heyMax FAQs
        cy.xpath("//p[normalize-space()='General HeyMax FAQ']").should('be.visible')
        .dblclick();
        cy.wait(4000);
        //Back to Home
        cy.xpath("(//*[name()='svg'][@class='h-3xlarge w-3xlarge rotate-180'])[1]").should('be.visible')
        .click();
        cy.wait(4000);


        
    })
})
