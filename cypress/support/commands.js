Cypress.Commands.add('acessarHome', () => {
  cy.visit("/")
  cy.url().should('include', '/')

})

Cypress.Commands.add('preencherDadosLogin', (username, password) => {
  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password)

})

Cypress.Commands.add('verificarUrl', (rota) => {
  cy.url().should('include', `${rota}`)

})

Cypress.Commands.add('verificarMsgAlert', (msgEsperada) => {
  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('have.text', msgEsperada)

})

Cypress.Commands.add('submitBtn', (textoBtn) => {
  cy.contains('input[type=submit]', textoBtn).click();
})

Cypress.Commands.add('validarOrdenacaoPorNome', (seletorItem, ordem = 'crescente') => {
  cy.get(seletorItem).then((itens) => {
    const nomesCapturados = [...itens].map(el => el.innerText.trim());
    const nomesOrdenados = [...nomesCapturados].sort((a, b) => a.localeCompare(b));

    if (ordem === 'decrescente') nomesOrdenados.reverse();

    expect(nomesCapturados).to.deep.equal(nomesOrdenados);
  })

});

Cypress.Commands.add('validarOrdenacaoPorPreco', (seletorItem, ordem = 'crescente') => {
  cy.get(seletorItem).then((itens) => {
    const precosCapturados = [...itens].map(el =>
      parseFloat(el.innerText.replace('$', '').trim())
    );
    const precosOrdenados = [...precosCapturados].sort((a, b) => a - b);

    if (ordem === 'decrescente') precosOrdenados.reverse();

    expect(precosCapturados).to.deep.equal(precosOrdenados);
  });

});

Cypress.Commands.add('adicionarItensCarrinho', () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
});

Cypress.Commands.add('irParaCarrinho', () => {
  cy.get('[data-test="shopping-cart-link"]').click();
});

Cypress.Commands.add('validarprodutoscarrinho', () => {
  cy.contains('.cart_item', 'Sauce Labs Backpack').should('exist');
  cy.contains('.cart_item', 'Sauce Labs Onesie').should('exist');
});


Cypress.Commands.add('adicionaEValidaTodosProdutos', () => {
  cy.get('[data-test^="add-to-cart-"]').then(($botoes) => {
    const totalProdutos = $botoes.length;

    cy.wrap($botoes).each(($btn) => {
      cy.wrap($btn).click();
    }).then(() => {
      cy.get('.shopping_cart_link').click();
      cy.get('.cart_item').should('have.length', totalProdutos);
    });
  });
});
