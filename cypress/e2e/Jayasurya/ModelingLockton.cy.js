describe('Lockton',() =>{

    before(()=>{
        cy.loginlock()
        cy.visit('http://lockton-qax.unqork.io/app/dashboard');
        cy.viewport(2000, 1000);
        
    })
    
        it('Creating Modeling', () => {
            cy.get('.lockton-logo > img').should('be.visible');
            cy.wait(3000)
            cy.get('#colBtnClients > .button-label').should('exist')
            cy.wait(2000)
            cy.get("button[id='colBtnClients'] span[class='button-label ng-binding']").should('exist').click()
            cy.wait(6000)
            cy.get("h1[class='m-0']").should('contain', 'Clients')
            cy.wait(8000)

            //Search and select the clients
            cy.get("#searchClient").type('Sershah')
            cy.wait(8000)
            cy.get(".jsgrid-grid-body").click()
            cy.wait(8000)
            cy.get("#clientSummaryClientName").should('contain', 'Sershah')
            cy.get("div[id='form-group-newLocationCount'] unqork-field[class='ng-scope ng-isolate-scope'] div span[class='component-readyonly-content']").should('contain', '10')

            //Clicking on modeling
            cy.get("#btnLeftNavModeling").click()
            cy.wait(70000)
            cy.get('#btnAddModeling > .button-label').click({force:true})
            cy.wait(6000)

            //Creating Modeling
            cy.get(".modal-content").should('be.visible')
            cy.get("#nameModeling").type("Test Model 1")
            cy.get("#btnSaveModeling").click()
            cy.wait(6000)
            cy.get("#btnFiltersModeling").should('be.visible')
            cy.get("#btnGroupSidebarModeling").should('be.visible')
            cy.wait(6000)
            cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ng-form:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > unqork-field:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)').check()
            cy.get('#btnModelingLocationsDRAdd').click({force:true})
            cy.wait(50000)
            cy.get("#btnClientModelingCloseNav").click()
            cy.get("#btnBurger").click()
            cy.wait(8000)
            
           
            //selecting missed columns dropdown in mapping location
            cy.get(".validation-stepper-icon-next").click({force:true})
            cy.wait(8000)
            cy.contains('1 Wood').should('be.visible').click({force:true});
            cy.wait(5000)
            cy.get(".validation-stepper-icon-next").dblclick({force:true})
            cy.wait(8000)
            cy.contains('1 Frame').should('be.visible').click({force:true});
            cy.wait(5000)
            cy.get(".validation-stepper-icon-next").click({force:true})
            cy.wait(8000)
            cy.contains('1 Permanent dwelling (single family housing)').should('be.visible').click({force:true});
            cy.wait(3000)
            cy.get('#btnSaveModelingLocations').click()
            cy.wait(15000)

            //selecting missed columns dropdown in catzones location
            cy.get("#ddSelectLocationGrid").select('CatZones', { force: true })
            cy.wait(3000)
            cy.get('.validation-stepper-icon-next').click({ force: true })
            cy.wait(10000)
            cy.get('.unq-dynamic-grid__single-select__menu-list').contains("Hawaii").should('be.visible').click( {force:true});
            cy.wait(8000)
            cy.get('.validation-stepper-icon-next').click({force:true})
            cy.wait(10000)
            cy.get('.unq-dynamic-grid__single-select__menu-list').contains("Other").should('be.visible').click({force:true});
            cy.wait(5000)
            cy.get("#btnSaveModelingLocations").click()
            cy.wait(10000)


            //Policy tab
            cy.get("#buttonClientModelingPolicy").click()
            cy.wait(10000)
            cy.get("#earthquakeReportType").select('EQ(21)', { force: true })
            cy.wait(2000)
            cy.get("#earthquakePolicyLimit").type('200000')
            cy.get("#earthquakePolicyDeductible").type('1500000')
            cy.get("#earthquakeCaliforniaDeductible").type('34000')
            cy.get("#earthquakePacificNWDeductible").type('273923')
            cy.get("#earthquakeNewMadridDeductible").type('273323')
            cy.get("#earthquakeHawaiiDeductible").type('273723')
            cy.get("#earthquakeAlaskaDeductible").type('273223')
            cy.wait(5000)

            //policy windstrom
            cy.get("#windStromStromSurge").select('Yes', { force: true })
            cy.wait(2000)
            cy.get("#windStromReportType").select('WS (21)', { force: true })
            cy.wait(2000)
            cy.get("#windStromPolicyLimit").type('545747')
            cy.get("#windStromPolicyDeductible").type('85128')
            cy.get("#windStromOtherSiteDeductible").type('6513675')
            cy.get("#windStromTier1Deductible").type('512512')
            cy.get("#earthquakeOtherSiteDeductible").type('123123')
            cy.wait(3000)

            //Policy Severe strom
            cy.get("#severeStromReportType").select('Tornado (21)',{ force: true })
            cy.wait(2000)
            cy.get("#windStromTier1Deductible").type('2000')
            cy.get("#severeStormPolicyDeductible").type('3000')
            cy.get("#severeStormSiteDeductible").type('4000')
            cy.get("#perilSave").click()
            cy.wait(15000)

            //Participation Layer
            cy.get("#ddSelectPolicyLocationGrid").select('Participation Layers', { force: true })
            cy.get("button[class='btn btn-light unq-dynamic-grid__add-row-button']").type('2000')
            cy.get('.component-readyonly-content').click()
            

            //submit
            cy.get("#btnSubmitModeling").click()
            cy.wait(10000)
            cy.get("div[id='form-group-alertMessge'] unqork-field[class='ng-scope ng-isolate-scope'] div span[class='component-readyonly-content']").should().contains('Modeling processing started')
            cy.wait(3000)
            cy.get("button[aria-label='Close']").click

            //Processing assertion
            cy.get("span[class='m-0']").should().contains('Processing')
            cy.wait(100000)
            cy.get("span[class='m-0']").should().contains('Completed')
            //cy.get("")

            

        })
    
    
    })
    
        