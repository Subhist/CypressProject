class Home{


    getLaunchLogo(){
        return cy.get('#divLogo > img');
    }


    getforgotPassword(){
    cy.get('#forgotPasswordLink a').click()
    return this;
    }

    getForgorPasswordTextBox(email){
            cy.get("#securityAuthentication_userName").type(email);
            return this;
    }

    getResetPasswordButton(){
        cy.get("#btnSearchValues").click()
        return this;
    }

    getInstructionToResetPassword(){
        return cy.get('.message')
    }
        


}


export default Home