/// <reference types="cypress" />

Cypress.Commands.add('PostUsuarios', (path, name, email, pass, fail) => {
    cy.request({
        url: path,
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
