describe('Fluxos, Eventos, Anomalias e Alertas', () => {
  it('Deve listar fluxos', () => {
    cy.request('http://localhost:3000/api/flows').its('status').should('eq', 200);
  });
  it('Deve criar um fluxo', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/api/flows',
      body: { nome: 'Fluxo Teste' },
      failOnStatusCode: false,
    }).its('status').should('be.oneOf', [200, 201]);
  });
  it('Deve listar eventos', () => {
    cy.request('http://localhost:3000/events').its('status').should('eq', 200);
  });
  it('Deve criar um evento', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/api/events',
      body: { nome: 'Evento Teste' },
      failOnStatusCode: false,
    }).its('status').should('be.oneOf', [200, 201]);
  });
  it('Deve listar anomalias', () => {
    cy.request('http://localhost:3000/api/anomalies').its('status').should('eq', 200);
  });
  it('Deve detectar uma anomalia', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/api/anomalies',
      body: { dados: 'Teste' },
      failOnStatusCode: false,
    }).its('status').should('be.oneOf', [200, 201, 400]);
  });
  it('Deve listar alertas', () => {
    cy.request('http://localhost:3000/api/alerts').its('status').should('eq', 200);
  });
  it('Deve criar um alerta', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/api/alerts',
      body: { mensagem: 'Teste Alerta' },
      failOnStatusCode: false,
    }).its('status').should('be.oneOf', [200, 201]);
  });
  it('Deve reconhecer um alerta (simulação com id dummy)', () => {
    cy.request({
      method: 'PATCH',
      url: 'http://localhost:3000/api/alerts/1/ack',
      failOnStatusCode: false,
    }).its('status').should('be.oneOf', [200, 404]);
  });
});
