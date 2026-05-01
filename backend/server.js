// ============================================================
//  Aeroplane Management System — Backend Entry Point
//  src/controllers/  → Business logic
//  src/routes/       → Express route definitions
//  src/middleware/   → Auth, error, validation middleware
//  src/services/     → Prisma / DB service layer
//  src/utils/        → Shared helpers
// ============================================================

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ───────────────────────────────────────────────
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

// ── Routes ───────────────────────────────────────────────────
// app.use('/api/auth',     require('./src/routes/auth.routes'));
// app.use('/api/flights',  require('./src/routes/flight.routes'));
// app.use('/api/staff',    require('./src/routes/staff.routes'));
// app.use('/api/tickets',  require('./src/routes/ticket.routes'));

// ── Health Check ─────────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// ── Start Server ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;
