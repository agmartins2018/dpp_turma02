describe('Autenticação - /login', () => {
  it('Deve autenticar com sucesso com credenciais válidas', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/api/login',
      body: {
        username: 'admin',
        password: 'admin',
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      // Verificação adicional baseada na resposta esperada
    });
  });

  it('Não deve autenticar com credenciais inválidas', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/api/login',
      body: {
        username: 'usuario1',
        password: '123456',
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.be.oneOf([400, 401]);
    });
  });
});
