class Login{


    getEmail(email){
        cy.get('#txtUsername').type(email)
        return this;
    }




    getPassword(pass){
         cy.get('#txtPassword').type(pass)
         return this;

    }

    getClickLoginButton(){
        cy.get("#btnLogin").click();
        return this;
        
    }

    getCandidateResume(){
        cy.get('#addCandidate_resume').click()
        return this;
    }


    getDashBoardTab(){
        return cy.get('#menu_dashboard_index > b')
    }

    getDownloadFile(){
        cy.downloadFile()
    }



   


}

export default Login