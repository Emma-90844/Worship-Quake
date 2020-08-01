const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const path = require('path');


const app = express();


// DB connection
// const connectionString =
//   '';

// // Connect to the database
// mongoose.connect(
//   connectionString,
//   // This is for backward compartibility
//   { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
//   error => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Connected to MongoDb');
//     }
//   }
// );

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }));

// Configuring our templating engine
app.engine(
  'hbs',
  handlebars({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: `${__dirname}/views/layouts/`,
    partialsDir: `${__dirname}/views/partials`
  })
);



app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

// LOAD routes
app.use('/', require('./routes/homeRoute'));

const port = 8000;
app.listen(port, () => {
  console.log(`Worship Quake is running @ http://localhost:${port}`);
});
