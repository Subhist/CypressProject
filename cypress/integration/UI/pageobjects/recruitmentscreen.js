import 'cypress-file-upload';

class Recruitment{


    getRecruitmentTab(){
         cy.get("#menu_recruitment_viewRecruitmentModule").click()
         return this;
    }

    getCandiateSUbCatagory(){
        return cy.get('.selected')
    }

    getAddCandidate(){
        cy.get('#btnAdd').click()
        return this;
    }

    getAddCadidatefirstName(firstName){
        cy.get('#addCandidate_firstName').type(firstName)
        return this;
    }

    getAddCadidatelastName(lastName){
        cy.get('#addCandidate_lastName').type(lastName)
        return this;
    }

    getAddCadidateMiddleName(middleName){
        cy.get('#addCandidate_middleName').type(middleName)
        return this;
    }

    getAddCadidateEmail(email){
        cy.get('#addCandidate_email').type(email)
        return this;
    }

    getAddCadidateContactNumber(email){
        cy.get('#addCandidate_contactNo').type(email)
        return this;
    }

    getListOfJobVacacies(selectJobType){
        cy.get('#addCandidate_vacancy').select(selectJobType)
        return this;
    }

    
    getUploadCandidateResume(filePath){
        cy.get('#addCandidate_resume').attachFile(filePath)
        return this;
    }

    getCandidateComments(comments){
        cy.get('#addCandidate_comment').type(comments)
        return this
    }

    getCandidateKeyWord(keywords){
        cy.get('#addCandidate_keyWords').type(keywords)
        return this;
    }


    getOpenCalender(){
       return cy.get('.ui-datepicker-trigger').click()
    }

    getAgreeToConsent(){
        cy.get('#addCandidate_consentToKeepData').check();
        return this;
    }

    getSaveCandidateData(){
        cy.get('#btnSave').click()
        return  this
    }

    getCandidateDataSaveVerifycation(){
       return cy.get('[class="message success fadable"]')
    }

    getSearchCandidateName(name){
        cy.get('#candidateSearch_candidateName').type(name)
        return this;
    }

    getVerifyCandidateNameListFromdropDown(){
        return cy.get("[class='ac_even ac_over'] strong").eq(0);
        
    }

    getSelectCandidateNameListFromdropDown(){
        return cy.get("[class='ac_even ac_over']").eq(0).click();
        
    }

    getVerifyCandidateNameAfterSearch(){
       return cy.get('tbody > :nth-child(1) > :nth-child(3)')
    }

    getVerifyCandidateAppliedVacancyAfterSearch(){
        return cy.get('tbody > :nth-child(1) > :nth-child(2)')
     }

    getSerachCandidate(){
        cy.get('#btnSrch').click()
        return this;
    }

    getDownloadCandidateResume(){
        cy.downloadFile(' https://opensource-demo.orangehrmlive.com/index.php/recruitment/viewCandidateAttachment?attachId=23','cypress/fixtures/Download', 'resume.txt' )
        return cy.readFile('cypress/fixtures/Download/resume.txt')
    
    }

    getSelectACandidateToDelete(){
        cy.get('tbody tr td input[type="checkbox"]').click()
        return this
    }

    getDeleteCandidate(){
        cy.get('#btnDelete').click()
        return this
        }

        getConfirmDelete(){
            cy.get('#dialogDeleteBtn').click()
            return this
        }








}

export default Recruitment