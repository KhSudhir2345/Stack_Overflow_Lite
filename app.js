const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const questionRoutes = require('./routes/questionRoutes');
const profileRoutes=require('./routes/profileRoutes');
const bodyparser=require('body-parser');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
// express app
const app = express();
const secretKey='your_secret_key';

app.use(bodyparser.json());

// connect to mongodb & listen for requests
// mongodb+srv://Sudhir_2345:Spm@231026@first-project.vsnoihy.mongodb.net/first-project?retryWrites=true&w=majority&appName=first-project
const dbURI = 'mongodb+srv://Sudhir_2345:Spm231026@first-project.vsnoihy.mongodb.net/second-project?retryWrites=true&w=majority&appName=first-project';


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('connected to database..');
    app.listen(3000);
  })
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/questions');
});

app.use('/profile',profileRoutes);

// blog routes
app.use('/questions', questionRoutes);


// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});