import Knex from 'knex';

exports.up = async (knex: Knex) => {
  return knex.schema.createTable('chamada', (table) => {
    table.increments('id').primary();
    table.string('titulo').notNullable();
    table.string('imagem').notNullable();
  });
};

exports.down = async (knex: Knex) => {
  return knex.schema.dropTable('chamada');
};
