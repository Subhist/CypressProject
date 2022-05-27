/// <reference types="Cypress" />


import Home from '../pageobjects/homescreen';



describe("SignIn related Test Cases", function(){
    const home=new Home();

    before(()=>{
        cy.fixture('usercreds').then((usercreds)=>{
            this.usercreds=usercreds;
        }),
        cy.visit(Cypress.env('url'),{
            
                onBeforeLoad (win) {
                  Object.defineProperty(win.navigator, 'language', {
                    value: 'en'
                  })
                }
        })
    })

    it('Verify title of the landing page',()=>{
        console.log(cy.title())
        cy.title().should('eq', "OrangeHRM")
    })


    it('Verify logo on launch',()=>{
            home.getLaunchLogo().should('be.visible')
    })

})
