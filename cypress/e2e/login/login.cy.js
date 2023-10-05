import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("Eu entro na URL Base", () => {
    cy.visit("/");
})

When("Eu digito {string} no campo username do login", (username) => {
	cy.get('[data-test="username"]').type('standard_user')
})

When("Eu digito a minha senha {string} no campo password do login", (password) => {
    cy.get('[data-test="password"]').type('secret_sauce')
})

Then("Eu clico no botao login e realizo o login com sucesso", () => {
    cy.get('#login-button').click()
    cy.get('.product_label').should('contain', 'Products')
})