import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("Eu tenho produtos no carrinho", () => {
    cy.visit("/");
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get(':nth-child(4) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(6) > .pricebar > .btn_primary').click()
    cy.get('.shopping_cart_container').click()
})

When("Eu clico em checkout", () => {
    cy.get('.btn_action').click()
})

When("Eu digito minhas informações", () => {
    cy.get('[data-test="firstName"]').type("kalleb")
    cy.get('[data-test="lastName"]').type("dias")
    cy.get('[data-test="postalCode"]').type("453855")
})

When("Eu clico em continue", () =>{
    cy.get('.btn_primary').click()
})

Then("Eu finalizo a compra", () =>{
    cy.get('.btn_action').click()
    cy.get('.subheader').should('contain', 'Finish')
})