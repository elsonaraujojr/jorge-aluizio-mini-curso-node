import Knex from 'knex';

exports.up = async (knex: Knex) => {
  return knex.schema.createTable('usuario', (table) => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('email').notNullable();
    table.string('senha').notNullable();
  });
};

exports.down = async (knex: Knex) => {
  return knex.schema.dropTable('usuario');
};
