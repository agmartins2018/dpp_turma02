// Banco de dados em memória
const db = {
  users: [
    { id: 1, username: 'admin', password: 'admin', role: 'admin' },
    { id: 2, username: 'user', password: 'user', role: 'user' }
  ],
  testExecutions: [], // { id, userId, createdAt, status }
  testResults: [],    // { id, executionId, result, details, createdAt }
  aiAnalysis: [],     // { id, resultId, analysis, createdAt }
  reports: [],        // { id, executionId, url, createdAt }
  metrics: []         // coleção simplificada, pode expandir conforme necessidade
};

module.exports = {
  users: [
    { id: 1, username: 'admin', password: 'admin' },
    { id: 2, username: 'user', password: 'user' }
  ],
  flows: [],         // { id, name, description, status }
  events: [],        // { id, flowId, timestamp, payload, type }
  anomalies: [],     // { id, eventId, type, description, detectedAt }
  alerts: [],        // { id, anomalyId, status, createdAt, acknowledged }
};

