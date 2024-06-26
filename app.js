const { name } = require('ejs');
const express = require('express');


// express app
const app = express();
// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

app.get('/', (req, res) => {
  const matches = [
    {name: 'Eng Vs Aus- 3rd Test Ashes 2019', description: 'This high octane clash is one of the greatest matches in last decade and possibly in history.This match had Ben Stokes and Jack Leach as the heroes.This clash will be remebered for Stokes masterclass and not to forget the unvaluable contribution of Jack Leach.',link: 'https://www.youtube.com/watch?v=k3WwMmfETb4&pp=ygUUaGVhZGluZ2xleSB0ZXN0IDIwMTk%3D'},
    {name: 'Ind Vs Aus-4th Test BGT 2020', description: 'This has to be the greatest underdog win for a team.A Team with almost all the senior players injured or Not present at That Time.A team with with only 2 regular players defeated the mighty Australian Team in their own backyard and that too when they have not lost there in last 30 years.This was one of greatest match I personally witnessed.',link: 'https://www.youtube.com/watch?v=kvOHKfcfcc4&list=PL8rQ0vZrrdYNQQT-zSaDToZP7jFD_Fvhf&pp=iAQB'},
    {name: 'Ind Vs Eng-2nd Test Lords 2021', description: 'This Match was just a test for the character of both the teams and in this clash India Showed a lot of character and Discipline.The England Team with a very good batting line-up and Joe Root in his best form ever was putting scores consecutively.In batting the two senior players Rahane and Pujara showed grit and experience to bat smart and made a crucial partnership.And it was last day with 60 overs remaining and India had to get England all out within that to win and they did it.',link :'https://www.youtube.com/watch?v=Y1J9_9-vNcU&pp=ygUibG9yZCdzIHRlc3QgbWF0Y2ggaW5kIHZzIGVuZyAyMDE0IA%3D%3D'},
    {name: 'Ind Vs Pak-WT20 2022',description: 'ABSOLUTE VIRAT KOHLI MASTERCLASS!!!" I dont have any words left." This was the words of the Captain Rohit Sharma after seeing this masterclass. It happens in fables and Bollywood potboilers when the hero comes out of nowhere to save the day. India were dead and buried at 31 for 4.Then It was OUt and OUt Kohli and Pandyas Brilliance that took India over line and special Mention to Kohli.',link : 'https://hotstar.onelink.me/UsKp/18mtqhw3'},
    {name: 'New Zealand Vs South Africa-ICC CWC 2015',description:'South Africa batted beautifully in the first innings to give NewZealnd a heavy target of 2299 in 43 overs.It was Grant Elliots heroic innings with the temperament and calmness which got them through.12 runs needed of the last over and he is the only batter remaining and to him is bowling Dale STeyn One of the greatest fast bowlers and My word ELliot had nerves of steel nd maintained composure and got them through.',link : 'https://youtu.be/uqxDfvWBBE8?si=6picfVQ-03PPrY2e'},
  ];
  res.render('index', { title: 'Home', matches });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/matches/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});