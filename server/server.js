// const express = require('express');
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const cors = require('cors');
// const mongoose = require('mongoose');

// remserv = "mongodb+srv://AmaZoneClone:bi0TNLvLXB4rPDAH@cluster0.ane83.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// mongoose.connect(remserv, {useNewUrlParser: true}).then(
//     function(){
//         console.log("Connected to MongoDB cloud service!");
//     }
// ).catch(
//     function(error){
//         console.log("Error in connecting to cloud service: ", error)
//     }
// );

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.json({ message: "API Working" });
// });


// /**
//  * Router Middleware
//  * Router - /user/*
//  * Method - *
//  */
// app.use("/user", user);

// app.listen(PORT, (req, res) => {
//   console.log(`Server Started at PORT ${PORT}`);
// });

// // server = express(); 
// // server.use(cors());
// // server.use(express.json());
// // server.use(express.urlencoded());

// // server.get('/', function(req, res){
// //     res.send('AmaZone Live Price tracker');
// // })

// // server.listen(3000, function(){
// //     console.log('AmaZone server started on port 3000.');    
// // })

// // server.post("/products", function(req, res){
// //     console.log("Incoming request: ", req.body);
// //     res.send("Responded to incoming req!");
// // })

const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const initiateMongoServer = require('./config/db');
const user = require("./routes/user");
const product = require("./routes/product");
// const morgan = require('morgan');
// const cors = require('cors');

const app = express()
const port = 3000

// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors({
  allowedOrigins: [
      'http://localhost:3000'
  ]
}));

initiateMongoServer();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.listen(port, () => {
  console.log(`AmaZone server started at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send('AmaZone Live Price tracker')
})

app.use("/user", user);
app.use("/product", product);

app.get('/products', function (req, res) {
  res.send('AmaZone Live Price tracker') 
})


app.post('/products', urlencodedParser, function (req, res) {
  console.log(req.body);
  res.send("Item Recieved");
})






// const uri = "mongodb+srv://user_main:test123@cluster0.tq5h5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(
//   () => {
//     console.log(`Connected to Mongoose DB ...`)
//   }
// ).catch((error) => {
//   console.log(`An error occured: ${error}`)
// })