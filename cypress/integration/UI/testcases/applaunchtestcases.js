/// <reference types="Cypress" />


import Home from '../pageobjects/homescreen';



describe("Sanity Suite", function(){
    const home=new Home();

    before(()=>{
        cy.fixture('usercreds').then((usercreds)=>{
            this.usercreds=usercreds;
        })
        cy.visit(Cypress.env('url'))
    })

    it('Verify logo on launch',()=>{
            home.getLaunchLogo().should('be.visible')
    })

})
