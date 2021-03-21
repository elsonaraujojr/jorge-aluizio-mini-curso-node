import { Request, Response } from 'express';

import env from '../../../config/env';
import { knex_pg } from '../../../database/connection';

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex_pg('items').select('*');

    const serializedItems = items.map((item: { id: any; title: any; image: any }) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `${env.hostname}:${env.port}/uploads/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }
}

export default ItemsController;
