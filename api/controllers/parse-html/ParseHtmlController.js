/**
 * @copyright
 * @author ngochuy
 * @create 2020-09-05
 * @update 2020-09-05
 */
'use strict';
// const path = require('path');

const ParseHtmlController = {
    parseHtml: (req, res) => {
        console.log('===== ParseHtmlController.parseHtml ====');

        //var HTMLParser = require('node-html-parser');
        const htmlString  = require('./html-string');
        // var root = HTMLParser.parse('<ul id="list"><li>Hello World</li></ul>');
        //const root = HTMLParser.parse(htmlString.html).innerHTML;

        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(htmlString.html));
    },
};
module.exports = ParseHtmlController;
