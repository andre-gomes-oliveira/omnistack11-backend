const express = require('express');
const routes = express.Router();
const ngoController = require('./controllers/NgoController');
const incidentController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/sessionController');

/** 
*Métodos HTTP
*
* GET: Buscar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Remover uma informação no back-end
*/

/**
 * Tipos de parâmetros (URI)
 * 
 * Query: Parâmaetros nomeados enviados na rota, precedido por um ?, 
 *  servem para filtros, paginação, etc. * 
 * Route: Parâmetros usados para identificar os recursos do back-end que se deseja acessar
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

routes.post('/sessions', sessionController.create);

routes.post('/ngos', ngoController.create);
routes.get('/ngos', ngoController.index);

routes.get('/profile', profileController.index);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;
