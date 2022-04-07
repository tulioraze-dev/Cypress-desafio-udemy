/// <reference types="cypress" />

import logando from '../pages/logando'

describe('Making a register', () => {
    before(function() {
        cy.fixture('userData').then((u) => {
            this.userData = u
        }) 
    })

    it('Sing In', function() {
        logando.singIn(this.userData)
    })
})