import database_ms from '../../config_ms';
import database_pg from '../../config_pg';
import database_sl from '../../config_sl';

export const knex_pg = require('knex')(database_pg);
export const knex_ms = require('knex')(database_ms);
export const knex_sl = require('knex')(database_sl);