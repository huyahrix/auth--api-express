/**
 * @copyright
 * @author ngochuy
 * @create 2020-09-05
 * @update 2020-09-05
 */
'use strict';
const multer = require('multer'); //middleware for handling multipart/form-data
const homeController = require('../api/controllers/homeController');
const ParseHtmlController = require('../api/controllers/parse-html/ParseHtmlController');

const initRoutes = (app) => {
    /********************** home **********************/
    app.get('/', homeController.getHome);
    app.get('/index.html', homeController.getHome);
    app.get('/home', multer().array('formData'), homeController.getHome);
    app.get('/parse-html', ParseHtmlController.parseHtml);
};

module.exports = initRoutes;
