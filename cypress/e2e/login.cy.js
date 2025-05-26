import loginData from "../fixtures/login.json"

describe('login', () => {

  beforeEach(() => {
    cy.acessarHome()
  })

  it("login realizado com sucesso", () => {
    const usuario = loginData.dadosLogin
    cy.preencherDadosLogin(usuario.username, usuario.password)
    cy.submitBtn('Login')
    cy.verificarUrl("inventory.html")

  })

  it("login não realizado quando username invalido", () => {
    const usuario = { ...loginData.dadosLogin, username: "standarduser" }
    cy.preencherDadosLogin(usuario.username, usuario.password)
    cy.submitBtn('Login')
    cy.verificarMsgAlert("Epic sadface: Username and password do not match any user in this service")

  })

  it("login não realizado quando username em branco", () => {
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.submitBtn('Login')
    cy.verificarMsgAlert("Epic sadface: Username is required")

  })

  it("login não realizado quando senha invalida", () => {
    const usuario = { ...loginData.dadosLogin, password: "secretsauce12" }
    cy.preencherDadosLogin(usuario.username, usuario.password)
    cy.submitBtn('Login')
    cy.verificarMsgAlert("Epic sadface: Username and password do not match any user in this service")

  })

  it("login não realizado quando senha em branco", () => {
    cy.get('[data-test="username"]').type("standard_user")
    cy.submitBtn('Login')
    cy.verificarMsgAlert("Epic sadface: Password is required")

  })

  it("login não realizado quando todos os campos estiverem em branco", () => {
    cy.submitBtn('Login')
    cy.verificarMsgAlert("Epic sadface: Username is required")

  })
})
