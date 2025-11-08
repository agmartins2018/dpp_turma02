const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTc2MjU2MjUxMCwiZXhwIjoxNzYyNTg0MTEwfQ.D6MS-z9Vj6qJ7zViUAbtCI2rY1ujSrpJ8KRD9JZopKQ';

describe('Fluxos, Eventos, Anomalias e Alertas', () => {
  it('Deve listar fluxos', () => {
    cy.request({
      url: 'http://localhost:3000/api/flows',
      headers: { Authorization: `Bearer ${token}` },
    }).its('status').should('eq', 200);
  });
  it('Deve criar um fluxo', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/api/flows',
      headers: { Authorization: `Bearer ${token}` },
      body: { name: 'Fluxo Teste', description: 'Descrição do Fluxo Teste' },
      failOnStatusCode: false,
    }).its('status').should('be.oneOf', [200, 201]);
  });
  it('Deve listar eventos', () => {
    cy.request({
      url: 'http://localhost:3000/api/events',
      headers: { Authorization: `Bearer ${token}` },
    }).its('status').should('eq', 200);
  });
  it('Deve criar um evento', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/api/events',
      headers: { Authorization: `Bearer ${token}` },
      body: { flowId: 1, payload: "payload 1", type: "tipo 1" },
      failOnStatusCode: false,
    }).its('status').should('be.oneOf', [200, 201]);
  });
  it('Deve listar anomalias', () => {
    cy.request({
      url: 'http://localhost:3000/api/anomalies',
      headers: { Authorization: `Bearer ${token}` },
    }).its('status').should('eq', 200);
  });
  it('Deve detectar uma anomalia', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/api/anomalies',
      headers: { Authorization: `Bearer ${token}` },
      body: { dados: 'Teste' },
      failOnStatusCode: false,
    }).its('status').should('be.oneOf', [200, 201, 400]);
  });
  it('Deve listar alertas', () => {
    cy.request({
      url: 'http://localhost:3000/api/alerts',
      headers: { Authorization: `Bearer ${token}` },
    }).its('status').should('eq', 200);
  });
  it('Deve criar um alerta', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/api/alerts',
      headers: { Authorization: `Bearer ${token}` },
      body: { mensagem: 'Teste Alerta' },
      failOnStatusCode: false,
    }).its('status').should('be.oneOf', [200, 201]);
  });
  it('Deve reconhecer um alerta (simulação com id dummy)', () => {
    cy.request({
      method: 'PATCH',
      url: 'http://localhost:3000/api/alerts/1/ack',
      headers: { Authorization: `Bearer ${token}` },
      failOnStatusCode: false,
    }).its('status').should('be.oneOf', [200, 404]);
  });
});
