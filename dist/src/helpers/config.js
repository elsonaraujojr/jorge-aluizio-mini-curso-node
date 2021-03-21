"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var databaseCredential = {
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    hostname: process.env.DB_HOSTNAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),
};
exports.default = databaseCredential;
