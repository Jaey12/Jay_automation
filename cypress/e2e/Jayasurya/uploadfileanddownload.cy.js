import 'cypress-file-upload';


describe("File Upload Test", () => {
    it("Single file Upload", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('1-MB.pdf')
        cy.get("#file-submit").click();
        cy.xpath("//h3[normalize-space()='File Uploaded!']").should('have.text', 'File Uploaded!')

        
    });

    it("File Upload - Rename", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({filePath:'1-MB.pdf',fileName:'changed.pdf'})
        cy.get("#file-submit").click();
        cy.xpath("//h3[normalize-space()='File Uploaded!']").should('have.text', 'File Uploaded!')
        
    });

    it("File Upload - Drag and drop", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile('1-MB.pdf',{subjectType:'drag-n-drop'})
        cy.wait(3000)
        cy.xpath("//span[normalize-space()='1-MB.pdf']").should('have.text','1-MB.pdf')
    });

    it("Multiple File Upload", () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(["1-MB.pdf","fileuploadjay.pdf"])
    });

    it("File Upload - Shadow Dom", () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(["1-MB.pdf","fileuploadjay.pdf"])
    });

    it.only('File Download using cypress-downloadfile npm package', () => {
        cy.downloadFile('https://www.learningcontainer.com/wp-content/uploads/2020/04/sample-text-file.txt',
            'cypress/fixtures/download', 'test.txt')
        cy.readFile('cypress/fixtures/Download/test.txt').should('contain', 'Lorem ipsum dolor sit amet')    
    })
})