import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("Eu entro na URL Base", () => {
    cy.visit("/");
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
})

When("Eu clico no produto", () => {
    cy.get('#item_4_title_link > .inventory_item_name')
})

When("Eu clico em adicionar ao carrinho", () => {
    cy.get('.btn_primary').click()
})