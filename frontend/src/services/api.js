// src/services/api.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Workers API
export const workersAPI = {
  getAll: () => api.get('/workers'),
  getById: (id) => api.get(`/workers/${id}`),
  create: (data) => api.post('/workers', data),
  update: (id, data) => api.put(`/workers/${id}`, data),
  delete: (id) => api.delete(`/workers/${id}`),
  search: (query) => api.get(`/workers/search?q=${query}`),
};

// Projects API
export const projectsAPI = {
  getAll: () => api.get('/projects'),
  getById: (id) => api.get(`/projects/${id}`),
  create: (data) => api.post('/projects', data),
  update: (id, data) => api.put(`/projects/${id}`, data),
};

// Payments API
export const paymentsAPI = {
  getAll: () => api.get('/payments'),
  process: (data) => api.post('/payments/process', data),
  getByWorkerId: (workerId) => api.get(`/payments/worker/${workerId}`),
};

// Dashboard Stats API
export const statsAPI = {
  getDashboard: () => api.get('/stats/dashboard'),
  getAttendance: () => api.get('/stats/attendance'),
  getPayments: () => api.get('/stats/payments'),
};

export default api;
