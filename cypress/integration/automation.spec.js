/// <reference types="Cypress" />
describe('Case de testes Fleury', function() {

    const THREE_SECONDS_IN_MS = 3000
    beforeEach(() => {
        cy.visit('https://www.fleury.com.br/')
      })

    it('verifica o título do site e carregamento da Home', function() {
        cy.title()
        .should('eq', 'Fleury Medicina e Saúde | Excelência em Diagnóstico')

        cy.get('.OnboardingMySchedules__CloseIcon-sc-1mlb0sm-1')
        .click()

        cy.clock() 
        cy.get('#dm876A > .dp-bar-button').click()
        cy.tick(THREE_SECONDS_IN_MS)

        cy.get('.sc-htpNat > .boxcomponentstyle__HboxStyled-sc-43ermp-0 > :nth-child(16)').click()

    })
})