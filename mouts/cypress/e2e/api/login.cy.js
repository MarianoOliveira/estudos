/// <reference types="cypress" />

const Ajv = require('ajv');
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
import { faker } from '@faker-js/faker';

describe('Login', () => {
    it('Login com sucesso - 200', () => {
        cy.PostLogin('fulano@qa.com', 'teste', true).then((resp) => {
            expect(resp.status).to.eq(200);

            cy.fixture('postLoginSucesso.json').then((schema) => {
                const validate = ajv.compile(schema);
                const valid = validate(resp.body);

                if (valid) {
                    cy.log('A validação do schema foi bem-sucedida!');
                } else {
                    cy.log('Falha na validação do schema:', validate.errors);
                }
            });
        });
    });

    it('Login com falha - 401', () => {
        cy.PostLogin(faker.internet.email(), faker.internet.password(), false).then((resp) => {
            expect(resp.status).to.eq(401);

            cy.fixture('postLoginFalha.json').then((schema) => {
                const validate = ajv.compile(schema);
                const valid = validate(resp.body);

                if (valid) {
                    cy.log('A validação do schema foi bem-sucedida!');
                } else {
                    cy.log('Falha na validação do schema:', validate.errors);
                }
            });
        });
    });
});
