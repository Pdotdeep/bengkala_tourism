import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import r from 'rethinkdb';
import api from './api';
import config from './config.js'

const app = express();
const expressSwagger = require('express-swagger-generator')(app);

// api links 
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: true }));
app.use('/api', api);

const startExpress = (portNumber) => { 
  app.listen(portNumber);
};

if (process.env.NODE_ENV === 'development') {
  // development mode
  
  // configurations for swagger docs
  expressSwagger(config.swaggerOptions);

  startExpress(config.express.portNumber);
} else {
  // production mode
  
  // connect to mysql
  startExpress(config.express.portNumber);
}

