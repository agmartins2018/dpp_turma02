const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/flowController');

// Fluxos
router.get('/flows', ctrl.listFlows);
router.post('/flows', ctrl.createFlow);
// Eventos
router.get('/events', ctrl.listEvents);
router.post('/events', ctrl.createEvent);
// Anomalias
router.get('/anomalies', ctrl.listAnomalies);
router.post('/anomalies', ctrl.detectAnomaly);
// Alertas
router.get('/alerts', ctrl.listAlerts);
router.post('/alerts', ctrl.createAlert);
router.patch('/alerts/:id/ack', ctrl.acknowledgeAlert);

module.exports = router;
