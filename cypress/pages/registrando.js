/// <reference types="cypress"/>

class Registro {

    goRegistro() {
        cy.visit('/');
        cy.get('a[href="/registro"]').click();
        cy.get('button[type="submit"]').should('be.visible');
    }

    makingRegistro(userData) {
        this.goRegistro()
        cy.get('input[placeholder="Nome"]').type(userData.nome);
        cy.get('input[placeholder="Email"]').type(userData.email);
        cy.get('input[placeholder="Senha"]').type(userData.senha);
        cy.get('button[type="submit"]').click();
        cy.on('window:alert', msg => {
            expect(msg).eql('Usuário adicionado com sucesso')
        });
    }

    registroSemEmail(userData) {
        this.goRegistro()
        cy.get('input[placeholder="Nome"]').type(userData.nome);
        cy.get('input[placeholder="Senha"]').type(userData.senha);
        cy.get('button[type="submit"]').click();
        cy.get('.toast-message')
            .should('be.visible')
            .and('have.text', 'Erro: Error: Request failed with status code 500');
    }

    registroFormularioVazio() {
        this.goRegistro()
        cy.get('button[type="submit"]').click();
        cy.get('.toast-message')
            .should('be.visible')
            .and('have.text', 'Erro: Error: Request failed with status code 500');
    }

    registroSemSenha(userData) {
        this.goRegistro();
        cy.get('input[placeholder="Nome"]').type(userData.nome);
        cy.get('input[placeholder="Email"]').type(userData.email);
        cy.get('button[type="submit"]').click();
        cy.get('.toast-message')
            .should('be.visible')
            .and('have.text', 'Erro: Error: Request failed with status code 500');
    }
}

export default new Registro()