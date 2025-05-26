describe('ordenacao', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.preencherDadosLogin('standard_user', 'secret_sauce');
    cy.submitBtn('Login')
  });

  it('valida produtos adicionados ao carrinho', () => {
    cy.adicionarItensCarrinho();
    cy.irParaCarrinho();
    cy.validarprodutoscarrinho();
  })

  it('valida todos produtos adicionados ao carrinho', () => {
    cy.adicionaEValidaTodosProdutos();
  })

})
