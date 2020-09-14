/**
 * @copyright
 * @author ngochuy
 * @create 2020-09-05
 * @update 2020-09-05
 */
'use strict';
/**
 */
const path = require('path');

let getHome = (req, res) => {
    return res.sendFile(path.join(`${__dirname}/../views/index.html`));
};

module.exports = {
    getHome: getHome
};
