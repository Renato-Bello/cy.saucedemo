describe('ordenacao', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.preencherDadosLogin('standard_user', 'secret_sauce');
    cy.submitBtn('Login')
  });

  it('valida ordenação por nome A-Z', () => {
    cy.get('.product_sort_container').select('Name (A to Z)');
    cy.validarOrdenacaoPorNome('.inventory_item_name', 'crescente');
  })

  it('valida ordenação por nome Z-A', () => {
    cy.get('.product_sort_container').select('Name (Z to A)');
    cy.validarOrdenacaoPorNome('.inventory_item_name', 'decrescente');
  })

  it('valida ordenação por preço do menor para o maior', () => {
    cy.get('.product_sort_container').select('Price (low to high)');
    cy.validarOrdenacaoPorPreco('.inventory_item_price', 'crescente');
  })

  it('valida ordenação por preço do maior para o menor', () => {
    cy.get('.product_sort_container').select('Price (high to low)');
    cy.validarOrdenacaoPorPreco('.inventory_item_price', 'decrescente');
  })


})