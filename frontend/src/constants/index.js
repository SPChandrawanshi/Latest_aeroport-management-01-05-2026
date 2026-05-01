// ── App-wide Constants ────────────────────────────────────────

// User Roles
export const ROLES = {
  ADMIN: 'admin',
  PILOT: 'pilot',
  MAINTENANCE: 'maintenance',
  OPERATIONS: 'operations',
  TICKETING: 'ticketing',
  PASSENGER: 'passenger',
};

// Flight Statuses
export const FLIGHT_STATUS = {
  SCHEDULED: 'Scheduled',
  BOARDING: 'Boarding',
  DEPARTED: 'Departed',
  ARRIVED: 'Arrived',
  DELAYED: 'Delayed',
  CANCELLED: 'Cancelled',
};

// Ticket Statuses
export const TICKET_STATUS = {
  CONFIRMED: 'Confirmed',
  PENDING: 'Pending',
  CANCELLED: 'Cancelled',
};

// API base URL
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Pagination
export const DEFAULT_PAGE_SIZE = 10;
