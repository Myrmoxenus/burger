//Sets up express and router
const express = require('express');

const router = express.Router();


// Import the model (burger.js) to use its database functions.
const burger = require('../models/burger.js');

// API routes
router.get('/', (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.get('/api/test', function(req, res){
  console.log('GET REQUEST')
  res.end()
})


router.put('/api/burgers/:id', (req, res) => {
  console.log('You made it this far.')
  burger.update(`${req.params.id}`)
  res.end()
})


router.post('/api/burgers/:name', (req, res) => {
  console.log(`${req.params.name}`)
  burger.create(JSON.stringify(`${req.params.name}`))
  res.end()
})




// Export routes for server.js to use.
module.exports = router;
