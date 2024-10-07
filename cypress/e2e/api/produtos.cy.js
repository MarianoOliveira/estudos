/// <reference types="cypress" />

const Ajv = require('ajv');
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

describe('Produtos', () => {
    it('Carregar lista de produtos - 200', () => {
        cy.GetProdutos(true).then((resp) => {
            expect(resp.status).to.eq(200);

            cy.fixture('getProdutosSucesso.json').then((schema) => {
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
