/// <reference types="cypress"/>

import registro from '../pages/registrando'

describe('Sing Up on app', () => {
    before(function() {
        cy.fixture('userData').then((u) => {
            this.userData = u
        })
    })

    beforeEach(() => {
        cy.reload();
    })

    it('Making a register', function() {
        registro.goRegistro()
        registro.makingRegistro(this.userData)
    })

    it('Making a register without email', function() {
        registro.registroSemEmail(this.userData)
    })

    it('Makin a register with a empty form', function() {
        registro.registroFormularioVazio()
    })

    it.only('Making a register without a password', function() {
        registro.registroSemSenha(this.userData)
    })
})