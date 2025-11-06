const db = require('../models/db');

// Fluxos
const listFlows = (req, res) => res.json(db.flows);
const createFlow = (req, res) => {
  const { name, description } = req.body;
  if (!name) return res.status(400).json({ error: 'Nome do fluxo obrigatório.' });
  const flow = { id: db.flows.length + 1, name, description, status: 'active' };
  db.flows.push(flow);
  res.status(201).json(flow);
};

// Eventos
const listEvents = (req, res) => res.json(db.events);
const createEvent = (req, res) => {
  const { flowId, payload, type } = req.body;
  if (!flowId || !payload) return res.status(400).json({ error: 'flowId e payload obrigatórios.' });
  const flow = db.flows.find(f => f.id == flowId);
  if (!flow) return res.status(404).json({ error: 'Fluxo não encontrado.' });
  const event = { id: db.events.length + 1, flowId, payload, type, timestamp: new Date().toISOString() };
  db.events.push(event);
  res.status(201).json(event);
};

// Anomalias
const listAnomalies = (req, res) => res.json(db.anomalies);
const detectAnomaly = (req, res) => {
  const { eventId, type, description } = req.body;
  const event = db.events.find(e => e.id == eventId);
  if (!event) return res.status(404).json({ error: 'Evento não encontrado.' });
  const anomaly = { id: db.anomalies.length + 1, eventId, type, description, detectedAt: new Date().toISOString() };
  db.anomalies.push(anomaly);
  res.status(201).json(anomaly);
};

// Alertas
const listAlerts = (req, res) => res.json(db.alerts);
const createAlert = (req, res) => {
  const { anomalyId } = req.body;
  const anomaly = db.anomalies.find(a => a.id == anomalyId);
  if (!anomaly) return res.status(404).json({ error: 'Anomalia não encontrada.' });
  const alert = { id: db.alerts.length + 1, anomalyId, status: 'open', createdAt: new Date().toISOString(), acknowledged: false };
  db.alerts.push(alert);
  res.status(201).json(alert);
};
const acknowledgeAlert = (req, res) => {
  const { id } = req.params;
  const alert = db.alerts.find(a => a.id == Number(id));
  if (!alert) return res.status(404).json({ error: 'Alerta não encontrado.' });
  alert.acknowledged = true;
  alert.status = 'acknowledged';
  res.json(alert);
};

module.exports = {
  listFlows, createFlow, listEvents, createEvent, listAnomalies, detectAnomaly, listAlerts, createAlert, acknowledgeAlert
};
