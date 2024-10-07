/// <reference types="cypress" />

const Ajv = require('ajv');
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
import { faker } from '@faker-js/faker';

describe('Cadastro', () => {
    it('Cadastro com sucesso - 201', () => {
        cy.PostUsuarios(
            faker.person.fullName(),
            faker.internet.email(),
            faker.internet.password(),
            true
        ).then((resp) => {
            expect(resp.status).to.eq(201);

            cy.fixture('cadastroSucesso.json').then((schema) => {
                const validate = ajv.compile(schema);
                const valid = validate(resp.body);

                if (valid) {
                    cy.log('A validação do schema foi bem-sucedida!');
                } else {
                    cy.log('Falha na validação do schema:', validate.errors);
                }
            });
        });
    })

    it('Cadastro com falha - 400', () => {
        cy.PostUsuarios(
            faker.person.fullName(),
            'mariano@mailinator.com',
            faker.internet.password(),
            false
        ).then((resp) => {
            expect(resp.status).to.eq(400);

            cy.fixture('cadastroFalha.json').then((schema) => {
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
