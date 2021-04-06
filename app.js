const express = require('express');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');

const app = express();

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');

app.set('view engine', 'ejs');
app.set('views');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride((req, res) => {
  if (req.body && req.body._method) {
      return req.body._method
  }
}));

app.use(cookieParser());

app.use('/index', indexRouter);
app.use('/', loginRouter);
app.use('/', (request, response, next) => {
    response.locals.user_name = request.cookies.user
    next();
})

app.get('/', (request, response) => {
    response.render('welcome');
});










const DOMAIN = 'localhost';
const PORT = 3000;

app.listen(PORT, DOMAIN, () => {
    console.log(`Server is listening on ${DOMAIN}:${PORT}`)
})

module.exports.app;


