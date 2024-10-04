/// <reference types="cypress" />

describe('Cadastro', () => {
    it('Cadatro com sucesso', () => {
        cy.cadastro();
        cy.validarCadastro();
        cy.validarLogin();
    });
});
