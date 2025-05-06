describe('HeyMax',() =>{
    before(()=>{
        cy.heymaxloginstage();
        cy.wait(5000)
    })

    it('Dineout Screen', () => {
        cy.wait(8000)
        cy.get("svg[width='100']").should('be.visible');
        cy.wait(8000)
        cy.xpath("(//span[normalize-space()='out'])[1]").should('be.visible');
        cy.wait(4000)
        cy.xpath("(//span[normalize-space()='out'])[1]").click();
        cy.wait(10000)

        //Validating Search field
        cy.xpath("(//input[@placeholder='Search a restaurant, location or cuisine'])[1]").type("Bar");
        cy.wait(4000);
        cy.xpath("(//p[normalize-space()='Bar Rouge [TEST]'])[1]").should('have.text', 'Bar Rouge [TEST]');
        cy.wait(4000);
        cy.xpath("//*[name()='path' and contains(@d,'M18.3 5.71')]").click();
        cy.wait(4000);
        cy.xpath("//input[@placeholder='Search a restaurant, location or cuisine']").type("Indian");
        cy.wait(4000);
        cy.xpath("//p[normalize-space()='Anglo Indian Cafe & Bar (Shenton Way) [TEST]']").should('be.visible')
        cy.wait(4000);
        cy.xpath("//*[name()='path' and contains(@d,'M18.3 5.71')]").click();
        cy.wait(4000);
        cy.xpath("//input[@placeholder='Search a restaurant, location or cuisine']").type("bdewibakb");
        cy.wait(4000);
        cy.xpath("//p[@class='text-neutral-060']").should('have.text', "No restaurants found");
        cy.wait(4000);

        //Validating all tabs
        cy.xpath("//p[normalize-space()='Bar']").click();
        cy.wait(8000);
        cy.xpath("(//div[contains(@class,'overflow-hidden text-ellipsis whitespace-nowrap')][normalize-space()='Bar'])[1]").should('have.text', "Bar");
        cy.wait(8000);
        cy.xpath("//p[normalize-space()='Vegetarian Friendly']").click();
        cy.wait(8000);
        cy.xpath("//p[normalize-space()='Chinese']").click();
        cy.wait(8000);
        cy.xpath("//p[normalize-space()='Local']").click();
        cy.wait(8000);
        cy.xpath("//p[normalize-space()='Japanese']").click();
        cy.wait(8000);
        cy.xpath("//p[normalize-space()='Seafood']").click();
        cy.wait(8000);
        cy.xpath("//p[normalize-space()='Cafe']").click();
        cy.wait(8000);
        cy.xpath("//p[normalize-space()='Fusion']").click();
        cy.wait(8000);
        cy.xpath("(//*[name()='svg'][@class='h-5 w-5'])[1]").dblclick();
        cy.wait(8000);
        cy.xpath("//p[normalize-space()='International']").click();
        cy.wait(8000);

        //Validating Restaurant screen
        cy.xpath("//p[normalize-space()='The Dining Room [TEST]']").click();
        cy.wait(8000);
        cy.xpath("//h1[normalize-space()='The Dining Room']").should('have.text', "The Dining Room");
        cy.wait(5000);

        //Validating Bookmark
        cy.xpath("//p[normalize-space()='Bookmark']").should('have.text', "Bookmark");
        cy.wait(5000);
        
        //Share validation
        cy.xpath("//p[normalize-space()='Share']").should('have.text', "Share");
        cy.wait(5000);

        //Validate More
        cy.xpath("//p[normalize-space()='More']").should('have.text', "More");
        cy.wait(5000);

        //You might also like
        cy.xpath("//p[normalize-space(text())='You might also like']").should('be.visible');
        cy.wait(5000);

        //Card Reward
        cy.xpath("//button[normalize-space()='Card Rewards']").should('be.visible');
        cy.wait(5000);
        //Expanding the card
        cy.xpath("(//*[name()='svg'][@class='false'])[1]").click();
        cy.wait(5000);
        cy.xpath("//p[normalize-space()='I own this']").click();
        cy.wait(5000);
        cy.xpath("//p[normalize-space()='Owned']").should('be.visible');
        cy.wait(5000);
        cy.xpath("//div[normalize-space()='Show more cards']").click();
        cy.wait(5000);
        cy.scrollTo('bottom');
        cy.xpath("//div[normalize-space()='Show less cards']").click();
        cy.wait(5000);
        cy.scrollTo('top');
        
        //Validate "I want this merchant"
        cy.xpath("//button[normalize-space()='I want this merchant on HeyMax']").click();
        cy.wait(5000);
        cy.xpath("//p[normalize-space()='Earning Max Miles at this merchant is not available yet. You can request it by clicking below.']").should('be.visible');
    })
})
