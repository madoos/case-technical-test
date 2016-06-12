import path from 'path';
import mongoose from 'mongoose';
import Express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import utilMiddleware from './server/middleware/util.js';

import insertPopulationRouter from './server/routers/insertPopulation';
import populationByAgeAndCityRouter from './server/routers/populationByAgeAndCity';
import populationByAgeRouter from './server/routers/populationByAge';
import populationByCityRouter from './server/routers/populationByCity';
import populationByRecordRouter from './server/routers/populationByRecord';

const config = require( path.join( __dirname,'../config.json') )[process.env.NODE_ENV];

const app = Express();

app.use(helmet());
app.disable('x-powered-by');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride('X-HTTP-Method'));          	// Microsoft
app.use(methodOverride('X-HTTP-Method-Override')); 	// Google/GData
app.use(methodOverride('X-Method-Override')); 		// IBM

app.use(utilMiddleware.enableCORS);

//ROUTERS
app.use('/population/add/', insertPopulationRouter);
app.use('/population/', populationByAgeAndCityRouter);
app.use('/population/byage/', populationByAgeRouter);
app.use('/population/bycity/', populationByCityRouter);
app.use('/population/byrecord/', populationByRecordRouter);

app.listen(config.port, () => console.log(`app listenning in port ${config.port} on enviroment ${process.env.NODE_ENV}`) );

mongoose.connect(config.db.conn ,(err, res) => {
    if(err)console.log('ERROR: connecting to Database. ' + err);
    else console.log('Connected to Database');
});
