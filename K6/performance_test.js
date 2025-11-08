import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 10 }, // sobe para 10 VUs em 1 min
    { duration: '3m', target: 50 }, // mantém 50 VUs por 3 min
    { duration: '1m', target: 10 }, // decresce para 10 VUs no último min
  ],
};

const BASE_URL = 'http://localhost:3000/api';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTc2MjU2MjUxMCwiZXhwIjoxNzYyNTg0MTEwfQ.D6MS-z9Vj6qJ7zViUAbtCI2rY1ujSrpJ8KRD9JZopKQ';
const HEADERS = { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' };

export default function () {
  // Listar fluxos
  let flowsRes = http.get(`${BASE_URL}/flows`, { headers: HEADERS });
  check(flowsRes, { 'list flows OK': (r) => r.status === 200 });

  // Criar fluxo
  let createFlowRes = http.post(`${BASE_URL}/flows`, JSON.stringify({ name: 'Fluxo K6', description: 'Desc K6' }), { headers: HEADERS });
  check(createFlowRes, { 'create flow status': (r) => [200, 201].includes(r.status) });

  // Listar eventos
  let eventsRes = http.get(`${BASE_URL}/events`, { headers: HEADERS });
  check(eventsRes, { 'list events OK': (r) => r.status === 200 });

  // Criar evento
  http.post(`${BASE_URL}/events`, JSON.stringify({ flowId: 1, payload: 'payload K6', type: 'tipo 1' }), { headers: HEADERS });

  // Listar anomalias
  let anomaliesRes = http.get(`${BASE_URL}/anomalies`, { headers: HEADERS });
  check(anomaliesRes, { 'list anomalies OK': (r) => r.status === 200 });

  // Criar anomalia
  http.post(`${BASE_URL}/anomalies`, JSON.stringify({ eventId: 1, type: 'tipo 1', description: 'desc 1' }), { headers: HEADERS });

  // Listar alertas
  let alertsRes = http.get(`${BASE_URL}/alerts`, { headers: HEADERS });
  check(alertsRes, { 'list alerts OK': (r) => r.status === 200 });

  // Criar alerta
  http.post(`${BASE_URL}/alerts`, JSON.stringify({ anomalyId: 1 }), { headers: HEADERS });

  // Reconhecer alerta (patch)
  http.patch(`${BASE_URL}/alerts/1/ack`, null, { headers: HEADERS });

  sleep(1);
}
