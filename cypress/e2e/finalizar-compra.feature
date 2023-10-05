#language:pt

Funcionalidade: Swag Labs
    Fazer compras no Swag Labs

  Contexto:
    Dado Eu tenho produtos no carrinho

  Cenario: Finalizar a compra
    Quando Eu clico em checkout
    E Eu digito minhas informações
    E Eu clico em continue
    Entao Eu finalizo a compra