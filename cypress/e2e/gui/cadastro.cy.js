/// <reference types="cypress" />

describe('Cadastro', () => {
    it('Cadatro com sucesso', () => {
        cy.navegarAoSite();
        cy.cadastro();
        cy.validarCadastro();
        cy.validarLogin();
    });
});
