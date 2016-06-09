import path from 'path';
import Express from 'express'; 
import helmet from 'helmet';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import utilMiddleware from './server/middleware/util.js';

const config = require( path.join( __dirname,'../config.json') )[process.env.NODE_ENV];

const app = Express();

app.use(helmet());
app.disable('x-powered-by');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride('X-HTTP-Method'));          	// Microsoft
app.use(methodOverride('X-HTTP-Method-Override')); 	// Google/GData
app.use(methodOverride('X-Method-Override')); 		// IBM

//app.use(utilMiddleware.enableCORS);

app.listen(config.port,() => console.log(`app listenning in port ${config.port} on enviroment ${process.env.NODE_ENV}`) );