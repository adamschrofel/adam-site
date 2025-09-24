import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import router from './routes/index.js';
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars';
import {notFound, errorHandler } from './middleware/errorMiddleware.js';


dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(errorHandler); 
app.use(express.static(path.join(__dirname, 'public')));


app.engine('hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
}));



app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));

app.use("/", router);

app.use(notFound);
app.use(errorHandler);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + 
        app.get('port') + '; press Ctrl-C to terminate.');
});