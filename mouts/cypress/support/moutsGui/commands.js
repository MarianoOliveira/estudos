/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

Cypress.Commands.add('navegarAoSite', () => {
    cy.visit('https://front.serverest.dev/');
});

Cypress.Commands.add('cadastro',  () => {
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('[data-testid="nome"]').type(faker.person.fullName());
    cy.get('[data-testid="email"]').type(faker.internet.email());
    cy.get('[data-testid="password"]').type(faker.internet.password());
    cy.get('[data-testid="cadastrar"]').click();
});

Cypress.Commands.add('validarCadastro',  () => {
    cy.get('.alert').should('be.visible');
    cy.get('.alert').should('contain.text', 'Cadastro realizado com sucesso');
});

Cypress.Commands.add('logar', (email, pass) => {
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="senha"]').type(pass);
    cy.get('[data-testid="entrar"]').click();
});

Cypress.Commands.add('validarLogin',  () => {
    cy.contains('Serverest Store').should('be.visible');
    cy.get('[data-testid="shopping-cart-button"]').should('be.visible');
    cy.get('h4').should('contain.text', 'Produtos').should('be.visible');
    cy.get(':nth-child(1) > .row').should('be.visible');
});