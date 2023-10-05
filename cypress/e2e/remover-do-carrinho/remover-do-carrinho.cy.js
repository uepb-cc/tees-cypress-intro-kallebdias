import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("Eu tenho produtos adicionados ao carrinho", () => {
    cy.visit("/");
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(5) > .pricebar > .btn_primary').click()
    cy.get('.shopping_cart_container').click()
})

When("Eu clico em remover do carrinho", () =>{
    cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .btn_secondary').click()
    cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .btn_secondary').click()
})

Then("Eu devo ver o carrinho vazio", () => {
    cy.get('.fa-layers-counter').should('contain', 1)
})