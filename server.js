
//Dependencies
const express = require('express')
const path = require('path')

//Sets port to a value
const PORT = process.env.PORT || 7759

// Initializes the variable "app" with express()
const app = express()

//Configures express
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Sets up static folder
app.use(express.static(path.join(__dirname, 'public'),{extensions:['html']}))

// Initializes the variable "expressHandlebars" with 
const expressHandlebars = require('express-handlebars')

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Import routes and give the server access to them.
const routes = require('./controllers/burgerController.js')

app.use(routes)

//Listens, reports to console that a server has successfully started on PORT
app.listen(PORT, function(req, res){
    console.log(`server started on port ${PORT}`)
   })

   
