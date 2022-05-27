/// <reference types="Cypress" />


import Home from '../pageobjects/homescreen';
import Login from '../pageobjects/loginscreen';


describe("Sanity Suite", function(){
    const loginscreen=new Login();
    const homescreen=new Home();

    beforeEach(()=>{
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

    // it('test forgotPassword functionality', ()=>{


    // })

    it("Forgot Password blank creds", ()=>{
        homescreen.getforgotPassword()
                  .getForgorPasswordTextBox('{backspace}')
                  .getResetPasswordButton()
                  .getInstructionToResetPassword()
                  .should('contain.text', "Could not find a user with given details")
                  
                  
})

    it("Forgot Password with valid creds", ()=>{
            homescreen.getforgotPassword()
                      .getForgorPasswordTextBox(this.usercreds.user)
                      .getResetPasswordButton()
                      .getInstructionToResetPassword()
                      .should('be.visible')
                      .should('contain.text', "There is a password reset request already in the system.")
                      
                      
    })


    it("Signin to App", ()=>{

       cy.login(this.usercreds.user, this.usercreds.pass);
                
                   
    })
})