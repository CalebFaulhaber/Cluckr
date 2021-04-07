const express = require('express');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const path = require('path');

const app = express();

const clucksRouter = require('./routes/clucks');
const loginRouter = require('./routes/login');

app.use(express.urlencoded({extended:true}));
const pathToStaticAssets=path.join(__dirname,'public')
app.use(express.static(pathToStaticAssets));

app.set('view engine', 'ejs');
app.set('views');
app.set('public');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride((req, res) => {
  if (req.body && req.body._method) {
      return req.body._method
  }
}));

app.use(cookieParser());

app.use('/', (request, response, next) => {
    response.locals.user_name = request.cookies.user
    next();
})

app.use('/clucks', clucksRouter);
app.use('/', loginRouter);










const DOMAIN = 'localhost';
const PORT = 3000;

app.listen(PORT, DOMAIN, () => {
    console.log(`Server is listening on ${DOMAIN}:${PORT}`)
})

module.exports.app;


