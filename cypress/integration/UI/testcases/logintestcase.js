/// <reference types="Cypress" />


import Login from '../pageobjects/loginscreen';


describe("Sanity Suite", function(){
    const loginscreen=new Login();

    before(()=>{
        cy.fixture('usercreds').then((usercreds)=>{
            this.usercreds=usercreds;
        })
        cy.visit(Cypress.env('url'))
    })

    // it('test forgotPassword functionality', ()=>{


    // })


    it("Signin to App", ()=>{

       cy.login(this.usercreds.user, this.usercreds.pass);
                
                   
    })
})