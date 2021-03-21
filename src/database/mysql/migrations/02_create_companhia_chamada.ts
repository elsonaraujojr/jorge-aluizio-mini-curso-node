import { knex_ms } from '../../connection';
import Knex from 'knex';

exports.up = async (knex: Knex) => {
  return knex.schema.createTable('companhia_chamada', (table) => {
    table.increments('id').primary();
    table.integer('companhia_id').unsigned().notNullable().references('id').inTable('companhia');
    table.integer('chamada_id').unsigned().notNullable().references('id').inTable('chamada');
  });
};

exports.down = async (knex: Knex) => {
  return knex.schema.dropTable('companhia_chamada');
};
