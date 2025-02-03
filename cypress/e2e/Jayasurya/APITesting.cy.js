context('API testing',()=>{

    it('Get Request', ()=>{
        cy.request('GET','https://reqres.in/api/users?page=2').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.data[0].first_name).eq('Michael')
          })
    })

    it('Post Request', ()=>{
        cy.request('POST','https://reqres.in/api/users',{name: 'morpheus',job: 'leader'})
         .then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('name', 'morpheus')
          })
    })

    it('Put Request', ()=>{
        cy.request('PUT','https://reqres.in/api/users/2',{name: 'morpheus',job: 'zion resident'})
         .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('job', 'zion resident')
          })
    })

    it('Delete request', ()=>{
        cy.request('DELETE','https://reqres.in/api/users/2')
         .then((response) => {
            expect(response.status).to.eq(204)
          })
    })

    it('Post Creation', ()=>{
        cy.request('POST','https://reqres.in/api/register',{email: 'eve.holt@reqres.in',password: 'pistol'})
         .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id',4)
          })
    })

    it('Patch Update', ()=>{
        cy.request('PATCH','https://reqres.in/api/users/2',{email: 'morpheus',password: 'zion resident'})
         .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('updatedAt').and.be.a('string');
          })
    })
    
})