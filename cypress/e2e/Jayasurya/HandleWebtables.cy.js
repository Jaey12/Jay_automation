describe('Handle Tables', () => {

    beforeEach('Login',()=>{
        cy.viewport(2000,1000);
        cy.visit("https://demo.opencart.com/admin/")
        //cy.get("#input-username").type('demo');
        //cy.get("#input-password").type('demo');
        cy.get("button[type='submit']").click();
        //cy.get("i[class='fa-solid fa-bars']").click();
        cy.get(".parent[href='#collapse-5']").click();
        cy.xpath("//ul[@id='collapse-5']//a[contains(text(),'Customers')]").click();
    })

    it('Check Number of rows and columns', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', '10');
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', '6')

    })

    it('Check Cell Data from rows and columns', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").should('have.text', 'leduyquan25741244@gmail.com');

    })

    it('Capture all the rows and columns', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col, index, $cols)=>{
                    cy.log($col.text());

                })
            })

    })})
    
    it.only('Pagination In Table', () => {
        let TotalPages;
        cy.get(".col-sm-6.text-end").then((e)=>{
            let mytext=e.text();
            TotalPages = mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("Pages")-1);
            cy.log("Total number of pages in table==>" + TotalPages)

        let pages=5;
        for(let p=1;p<=pages;p++)
        {
            if(pages>1)
                {
                cy.log("Current page number=>"+p);
                cy.get("ul[class='pagination']>li").contains(p.toString()).click();
                cy.wait(3000)
                }
        }

        })
        

    })})
 

