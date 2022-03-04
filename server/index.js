const express = require("express");
const cors = require("cors");

const {createBook, getBooks} = require('./controller')


const app = express();




app.use(express.json()); // When we want to be able to accept JSON.
app.use(cors());

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


app.get("/api/fortune", (req, res) => {
  const fortunes = ["Your desired journey is soon near",
					 "A Payoff for your hard work will soon be rewarded",
					 "Your future spouse will be impressive",
           "The sun will shine on your wallet",
           "The toxic people in your past will soon see tragedy"
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

// endpoints
app.get('/api/books', getBooks)
app.post('/api/books', createBook)





app.listen(4000, () => console.log("Server running on 4000"));
