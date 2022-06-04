/// <reference types="Cypress" />


import Home from '../pageobjects/homescreen';
import Login from '../pageobjects/loginscreen';
import Recruitment from '../pageobjects/recruitmentscreen';




describe("Recruitment Test cases", function(){
    const loginscreen=new Login();
    const homescreen=new Home();
    const recruitment=new Recruitment();
    beforeEach(()=>{
        cy.fixture('usercreds').then((usercreds)=>{
            this.usercreds=usercreds;
        }),
        cy.fixture('candidatedetailsforvacancy').then((candidateDetails)=>{
            this.candidateDetails=candidateDetails;
        }),
        cy.visit(Cypress.env('url'),{
            
                onBeforeLoad (win) {
                  Object.defineProperty(win.navigator, 'language', {
                    value: 'en'
                  })
                }
        })
    })


    // it("Go to recruitment tab",()=>{
    //         cy.login(this.usercreds.user, this.usercreds.pass)
    //         recruitment.getRecruitmentTab()
    //                    .getCandiateSUbCatagory()
    //                    .should('contain.text', "Candidates")
    // })

    it('Add a candidate', ()=>{
      cy.login(this.usercreds.user, this.usercreds.pass)
      cy.goToCandidateTab()
                        recruitment.getAddCandidate()
                                  .getAddCadidatefirstName(this.candidateDetails.firstName)
                                  .getAddCadidateMiddleName(this.candidateDetails.middleName)
                                  .getAddCadidateEmail(this.candidateDetails.email)
                                  .getAddCadidatelastName(this.candidateDetails.lastName)
                                  .getListOfJobVacacies(this.candidateDetails.vacancy)
                                  .getAddCadidateContactNumber(this.candidateDetails.contactDetails)
                                  .getUploadCandidateResume(this.candidateDetails.resumelocation)
                                  .getCandidateKeyWord(this.candidateDetails.candidate_keyword)
                                  .getCandidateComments(this.candidateDetails.candidate_comments)
                                  .getOpenCalender()
                                  cy.selectYear(this.candidateDetails.application_year)
                                  cy.selectMonth(this.candidateDetails.application_month)
                                  cy.selectDate(this.candidateDetails.application_date)
                                  recruitment.getAgreeToConsent()
                                  .getSaveCandidateData()
                                  .getCandidateDataSaveVerifycation()
                                  .should('contain.text', "Successfully Saved")

                                 
                                 

    })

    it('Search Candidate and Download Resume',()=>{
      cy.login(this.usercreds.user, this.usercreds.pass)
      cy.goToCandidateTab()
      recruitment.getSearchCandidateName(this.candidateDetails.firstName)
      recruitment.getVerifyCandidateNameListFromdropDown().should('contain.text',this.candidateDetails.firstName)
      recruitment.getSelectCandidateNameListFromdropDown()
      recruitment.getSerachCandidate()
      recruitment.getVerifyCandidateNameAfterSearch().should('contain.text',this.candidateDetails.firstName )
      recruitment.getVerifyCandidateAppliedVacancyAfterSearch().should('contain.text', this.candidateDetails.vacancy)
      recruitment.getDownloadCandidateResume().should('contain', 'Resume') 

    })

    it('delete Candidate',()=>{
      cy.login(this.usercreds.user, this.usercreds.pass)
      cy.goToCandidateTab()
      recruitment.getSearchCandidateName(this.candidateDetails.firstName)
      recruitment.getVerifyCandidateNameListFromdropDown().should('contain.text',this.candidateDetails.firstName)
      recruitment.getSelectCandidateNameListFromdropDown()
      recruitment.getSerachCandidate()
      recruitment.getVerifyCandidateNameAfterSearch().should('contain.text',this.candidateDetails.firstName )
      recruitment.getVerifyCandidateAppliedVacancyAfterSearch().should('contain.text', this.candidateDetails.vacancy)
      recruitment.getSelectACandidateToDelete()
                  .getDeleteCandidate()
                  .getConfirmDelete()
                  .getCandidateDataSaveVerifycation().should('contain.text', "Successfully Deleted")


    })


})