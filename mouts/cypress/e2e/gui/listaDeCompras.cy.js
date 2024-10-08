/// <reference types="cypress" />

describe('Lista de compras', () => {
    it('Adicionar produto a lista de compras', () => {
        cy.navegarAoSite();
        cy.cadastro();
        cy.validarCadastro();
        cy.AddaLista();
        cy.validarLista();
        cy.limparLista();
    });
});
