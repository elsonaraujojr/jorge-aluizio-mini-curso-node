import express from 'express';
import { celebrate, Joi } from 'celebrate';
import multer from 'multer';
import multerConfig from './config/multer';

import LocationsController from './core/controller/locations/LocationsController';
import ItemsController from './core/controller/items/ItemsController';
import BudgetController from './core/controller/budgets/BudgetsController';
import isAuthenticated from './middlewares/isAuthenticated';

const routes = express.Router();
const upload = multer(multerConfig);

const itemsController = new ItemsController();
const locationsController = new LocationsController();
const locationsBudgets = new BudgetController();

// MIDDLEWARE PARA AUTENTICAÇÃO, UTILIZADO EM TODAS AS ROTAS.
routes.use(isAuthenticated);

// ROTA PARA ITENS
routes.get('/items', itemsController.index);

// ROTAS PARA LOCALIZAÇÕES
routes.get('/locations/:id', locationsController.show);
routes.get('/locations', locationsController.index);
routes.post(
  '/locations',
  upload.single('image'),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.array().items(Joi.number()),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  locationsController.create
);

//ROTAS PARA ORÇAMENTOS
routes.get('/budgets', locationsBudgets.show);

export default routes;
