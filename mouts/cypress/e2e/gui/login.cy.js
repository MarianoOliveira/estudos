/// <reference types="cypress" />

describe('Login', () => {
    it('Login com sucesso', () => {
        cy.navegarAoSite();
        cy.logar('fulano@qa.com', 'teste');
        cy.validarLogin();
    });
});
