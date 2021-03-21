import Knex from 'knex';

exports.up = async (knex: Knex) => {
  return knex.schema.createTable('companhia', (table) => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('proprietario').notNullable();
    table.string('email').notNullable();
    table.string('contato').notNullable();
    table.string('cidade').notNullable();
    table.enu('status', ['ativo', 'desativado']).notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = async (knex: Knex) => {
  return knex.schema.dropTable('companhia');
};
