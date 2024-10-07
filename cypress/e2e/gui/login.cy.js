/// <reference types="cypress" />

describe('Login', () => {
    it('Login com sucesso', () => {
        cy.navegarAoSite();
        cy.logar('mariano@mailinator.com', 'teste123');
        cy.validarLogin();
    });
});
