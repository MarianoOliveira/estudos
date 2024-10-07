/// <reference types="cypress" />

describe('Lista de compras', () => {
    it('Adicionar produto a lista de compras', () => {
        cy.navegarAoSite();
        cy.logar('fulano@qa.com', 'teste');
        cy.AddaLista();
        cy.validarLista();
        cy.limparLista();
    });
});
