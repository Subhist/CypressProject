// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// 
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />


// import Login from '../pageobjects/loginscreen';

import Login from '../integration/UI/pageobjects/loginscreen'

Cypress.Commands.add('login', (email, password) => { 

const loginscreen=new Login();
        loginscreen.getEmail(email)
                    .getPassword(password)
                    .getClickLoginButton()
                   .getDashBoardTab()
                   .should('be.visible')
})
