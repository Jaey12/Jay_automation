import demo from "./PageObject/demo.cy";
import 'cypress-file-upload'  // Import plugin for file upload
import 'cypress-iframe'  // Import plugin for handling iframes

describe('QA Automation Demo', () => {

    // Runs before each test - sets up viewport and visits the website
    beforeEach('Visiting using Hooks', () => {
        cy.visit("https://the-internet.herokuapp.com/");
        cy.viewport(1280, 720);  // Set viewport size
    });

    it('Basic Login using Read data from excel', () => {
        // Cypress task to read data from an Excel file
        cy.task('readExcel', {
            filePath: "C:/Users/jayas/Downloads/Logindemo.xlsx", 
            sheetName: 'Sheet1'
        }).then((users) => {
            cy.get("a[href='/login']").click(); 
            cy.get('#username').type(users[0].Username);  // Enter username from Excel
            cy.get('#password').type(users[0].Password);  // Enter password from Excel
            cy.get("button[type='submit']").click();
            cy.wait(3000);  // Wait for login process
            cy.loginSuccess();  // Custom command to validate successful login
        });
    });

    it('Login using fixtures', () => {
        // Load data from fixture file
        cy.fixture("datademo").then((data) => {
            const userData = data[0];  // Extract first user data
            cy.get("a[href='/login']").click();
            cy.xpath("//input[@id='username']").type(userData.username);
            cy.xpath("//input[@id='password']").type(userData.password);
            cy.xpath("//button[@type='submit']").click();
            cy.loginSuccess();  // Custom command to validate successful login
        });
    });
       
    it('Selecting checkbox using Custom command', () => {
        cy.checkbox(); // Calls a custom Cypress command for checkbox selection
    });

    it('Selecting and Asserting dropdown using POM', () => {
        const dd = new demo();  // Create an instance of the Page Object Model class
        dd.clickdropdown();  // Calls method to click dropdown
        dd.selectdropdown();  // Calls method to select an option
    });

    it('Add and Remove, Enable and Disable', () => {
        cy.get("a[href='/dynamic_controls']").click();

        // Check the checkbox and then remove it
        cy.get("input[type='checkbox']").check();
        cy.get("button[onclick='swapCheckbox()']").click();
        cy.xpath("(//div[@id='loading'])[1]").should('be.visible');  // Wait for loading animation
        cy.wait(3000);
        cy.get("#message").should("contain", "It's gone!");  // Validate checkbox removal

        // Enable and disable input field
        cy.get("button[onclick='swapInput()']").click();
        cy.xpath("(//div[@id='loading'])[2]").should('be.visible');
        cy.get("input[type='text']").type("Test");  // Type text after enabling input
        cy.get("#message").should("contain", "It's enabled!");  // Validate enabling
    });

    it('Downloads a file and verifies its existence', () => {
        cy.get("a[href='/download']").click();
        cy.get("a[href='download/some-file.txt']").click().screenshot();  // Click to download file and take a screenshot
        cy.readFile('cypress/downloads/some-file.txt').should('exist');  // Verify file exists
    });

    it('Upload a file using Drag n Drop', () => {
        cy.get("a[href='/upload']").click();
        cy.get("#drag-drop-upload").attachFile('1-MB.pdf', {subjectType: 'drag-n-drop'});  // Upload file
        cy.wait(3000);
        cy.xpath("//span[normalize-space()='1-MB.pdf']").should('have.text', '1-MB.pdf');  // Validate file upload
    });

    it('Handling Multiple Window', () => {
        cy.get("a[href='/windows']").click();
        cy.get("a[href='/windows/new']").click()
        .invoke('removeAttr', 'target')  // Remove target attribute to open in same tab
        .click();
        cy.contains('New Window').should('be.visible');  // Validate new window opened
    });

    it('Capture all the rows and columns in webtables', () => {
        // Click on the 'Tables' link to navigate to the web table page
        cy.get("a[href='/tables']").click();
    
        // Select the table with ID 'table1'
        cy.get("#table1")
        .each(($row, index, $rows) => {  // Iterate through each row in the table
            cy.wrap($row).within(() => {  // Ensure Cypress commands work inside the row
                cy.get("tbody").each(($col, index, $cols) => {  // Iterate through each column (cell) in the row
                    cy.log($col.text());  // Log the text content of each cell in the console
                });
            });  
        });
    });
    
    it('Simple JS Alert', () => {
        // Click on the 'JavaScript Alerts' link to navigate to the alerts page
        cy.get("a[href='/javascript_alerts']").click();
        // Click the button that triggers a simple JavaScript alert
        cy.get("button[onclick='jsAlert()']").click();
        // Capture the alert and validate its text
        cy.on('window:alert', (alertText) => {  
            expect(alertText).to.contain('I am a JS Alert');  // Verify alert message
        });
        // Validate that the confirmation message appears after closing the alert
        cy.xpath("//p[@id='result']").should('have.text', 'You successfully clicked an alert');  
    });
}); 

// Separate test suite for handling IFrames
describe('IFrame Test', () => {
    it('Handling IFrame', () => {
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/iframepage");

        // Switch to iframe and perform action inside it
        cy.xpath("//iframe[@id='myFrame']")  // Locate the iframe using XPath
            .its('0.contentDocument.body')  // Access the iframe's body content
            .should('not.be.empty')  // Ensure the iframe content is loaded
            .then(cy.wrap)  // Wrap the iframe body so Cypress commands can be executed inside it
            .find("input[value='Submit the form']")  // Locate and validate submit button inside iframe
            .should('be.visible')
            .click();
    });
});
