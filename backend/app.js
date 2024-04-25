
import express from 'express';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';

import projectRouter from './router/project.router.js';
import issueRouter from './router/issue.router.js';

const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', path.join(path.resolve(),'backend/view'));

// Middlewares for handling JSON, URL-encoded data and ejs-templates
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(ejsLayouts);

//handling of Home and Issue routes
app.use('/',projectRouter);
app.use('/issue',issueRouter);

export default app;