require('dotenv').config();
const DB_USER = process.env.DB_USER || 'contacts';
const DB_PASSWORD = process.env.DB_PASSWORD || 'contacts';

// Dynamically construct the default connection string using template literals
const DB_CONFIG = process.env.DB_CONFIG || `postgresql://${DB_USER}:${DB_PASSWORD}@localhost:5432/contacts`;

const { Pool } = require('pg');

const pgconn = new Pool({
    connectionString: DB_CONFIG,
    ssl: false,
});

module.exports = { pgconn };