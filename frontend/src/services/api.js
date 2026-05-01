import axios from 'axios';
import { API_BASE_URL } from '../constants';

// ── Axios instance with auth header ──────────────────────────
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Attach JWT token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('aero_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Handle 401 globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('aero_user');
      localStorage.removeItem('aero_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// ── Auth ──────────────────────────────────────────────────────
export const loginUser = (credentials) => api.post('/api/auth/login', credentials);
export const registerUser = (data) => api.post('/api/auth/register', data);

// ── Flights ───────────────────────────────────────────────────
export const getFlights = () => api.get('/api/flights');
export const getFlightById = (id) => api.get(`/api/flights/${id}`);

// ── Staff ─────────────────────────────────────────────────────
export const getStaff = () => api.get('/api/staff');
export const createStaff = (data) => api.post('/api/staff', data);
export const updateStaff = (id, data) => api.put(`/api/staff/${id}`, data);
export const deleteStaff = (id) => api.delete(`/api/staff/${id}`);

// ── Tickets ───────────────────────────────────────────────────
export const getTickets = () => api.get('/api/tickets');
export const bookTicket = (data) => api.post('/api/tickets', data);
export const cancelTicket = (id) => api.delete(`/api/tickets/${id}`);

// ── Maintenance ───────────────────────────────────────────────
export const getMaintenanceLogs = () => api.get('/api/maintenance');
export const createMaintenanceRequest = (data) => api.post('/api/maintenance', data);

export default api;
