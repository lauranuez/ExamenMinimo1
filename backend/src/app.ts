import express from 'express';
import morgan from 'morgan'; 
import path from 'path';
import cors from 'cors';

const app = express();

import indexRoutes from './routes/index'

//settings
app.set('port', process.env.PORT || 4000); 

//middlewares
app.use(morgan('dev'));
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json()); 

//routes
app.use('/',indexRoutes); 


export default app;
