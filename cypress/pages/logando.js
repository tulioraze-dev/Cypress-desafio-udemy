/// <reference types="cypress"/>
class Logando {
    singIn(userData) {
        cy.visit('/')
        cy.get('[data-test="email"]').type(userData.email);
        cy.get('[data-test="passwd"]').type(userData.senha);
        cy.get('button[type="submit"]').click();
        cy.get('.toast-message')
            .should('be.visible')
            .and('contain', 'Bem vindo')
    }   
}

export default new Logando()