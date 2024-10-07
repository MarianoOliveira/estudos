/// <reference types="cypress" />

describe('Lista de compras', () => {
    it('Adicionar produto a lista de compras', () => {
        cy.navegarAoSite();
        cy.logar('mariano@mailinator.com', 'teste123');
        cy.AddaLista();
        cy.validarLista();
        cy.limparLista();
    });
});
