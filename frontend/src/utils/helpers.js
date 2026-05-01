// ── Date & Time ───────────────────────────────────────────────
/**
 * Format a date string to a readable format.
 * @param {string|Date} date
 * @returns {string} e.g. "24 Mar 2026"
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

/**
 * Format a datetime to time string.
 * @param {string|Date} date
 * @returns {string} e.g. "14:35"
 */
export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

// ── String Helpers ────────────────────────────────────────────
export const capitalize = (str) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';

export const truncate = (str, len = 50) =>
  str && str.length > len ? `${str.slice(0, len)}...` : str;

// ── Status Badge Color ────────────────────────────────────────
export const getStatusColor = (status) => {
  const map = {
    Confirmed: '#22c55e',
    Scheduled: '#3b82f6',
    Delayed: '#f59e0b',
    Cancelled: '#ef4444',
    Arrived: '#8b5cf6',
    Boarding: '#06b6d4',
  };
  return map[status] || '#6b7280';
};

// ── Local Storage Helpers ─────────────────────────────────────
export const getToken = () => localStorage.getItem('aero_token');
export const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem('aero_user'));
  } catch {
    return null;
  }
};
