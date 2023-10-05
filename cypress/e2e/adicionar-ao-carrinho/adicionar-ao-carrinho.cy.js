import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("Eu estou logado no site", () => {
    cy.visit("/");
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
})

When("Eu clico em adicionar ao carrinho", () => {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
})

When("Eu clico no carrinho", () => {
    cy.get('.shopping_cart_container').click()
})

Then("Eu devo ver os produtos adicionados", () => {
    cy.get('.fa-layers-counter').should('contain', 2)
})