'use strict';

/**
 * Validation Module
 * @module 
 */

 const express = require('express');
 const app = express();

 app.use('/lib', express.static('./lib'));

 function requestHandler(req, res) {

 }

 app.listen(process.env.PORT, () => console.log('server up'));