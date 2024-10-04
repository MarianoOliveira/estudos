/// <reference types="cypress" />

Cypress.Commands.add('PostUsuarios', (name, email, pass, fail) => {
    cy.request({
        url: 'https://serverest.dev/usuarios',
        method: 'POST',
        body: {
            nome: name,
            email: email,
            password: pass,
            administrador: "false"
        },
        failOnStatusCode: fail
    });
});

Cypress.Commands.add('PostLogin', (email, pass, fail) => {
    cy.request({
        url: 'https://serverest.dev/login',
        method: 'POST',
        body: {
            email: email,
            password: pass
        },
        failOnStatusCode: fail
    });
});
