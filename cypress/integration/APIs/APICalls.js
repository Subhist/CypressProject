/// <reference types="Cypress" />


describe('API test cases', function(){

    beforeEach(()=>{
        cy.fixture('apipostcall').then((usercreds)=>{
            this.usercreds=usercreds;
        })
        cy.fixture('apibaseUrl').then((baseUrl)=>{
            this.baseUrl=baseUrl;
        
        })
        cy.fixture('putcall').then((putcall)=>{
            this.putcall=putcall;
        
        })
        

})


it('Post Call to Create a user', ()=>{
cy.request({
    method:'POST',
    url: this.baseUrl.baseUrl+"users",
    body: this.usercreds,

}).then((res)=>{
    expect(res.status).to.eq(201)
    expect(res.body).has.property('id')
this.id=res.body.id
cy.log(this.id)
    
})
})

it('Get Call to get a user details', ()=>{
    cy.request({
        method:'GET',
        url: this.baseUrl.baseUrl+"users?page=1",
       
    
    }).then((res)=>{
        expect(res.status).to.eq(200)
        expect(res.body.data[0]).has.property('id')
        expect(res.body.data[0]).has.property('email')
       
        
    })
    })

    it('Update user details', ()=>{
        cy.request({
            method:'PUT',
            url: this.baseUrl.baseUrl+"users/"+this.id,
            body: this.putcall,
        
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body).has.property('name', "Subhist")
            
        })
        })


        it('Delete a user details', ()=>{
            cy.request({
                method:'DELETE',
                url: this.baseUrl.baseUrl+"users/"+this.id,
               
            
            }).then((res)=>{
                expect(res.status).to.eq(204)
               
               
                
            })
            })


})