import { knex_sl } from './../../connection';

exports.seed = async () => {
  await knex_sl('chamada').insert([
    { titulo: 'Papéis e Papelão', imagem: 'papel.svg' },
    { titulo: 'Vidros e Lâmpadas', imagem: 'vidro.svg' },
    { titulo: 'Óleo de Cozinha', imagem: 'oleo.svg' },
    { titulo: 'Resíduos Orgânicos', imagem: 'organico.svg' },
    { titulo: 'Baterias e Pilhas', imagem: 'bateria.svg' },
    { titulo: 'Eletrônicos', imagem: 'eletronico.svg' },
  ]);
};
