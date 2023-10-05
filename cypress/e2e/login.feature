#language:pt

Funcionalidade: Swag Labs
    Como um usuario do Swag Labs,
    Eu Quero realizar login no site.

  Contexto:
    Dado Eu entro na URL Base

  Cenario: Login no Swag Labs
    Quando Eu digito "standard_user" no campo username do login
    E Eu digito a minha senha "secret_sauce" no campo password do login
    Entao Eu clico no botao login e realizo o login com sucesso