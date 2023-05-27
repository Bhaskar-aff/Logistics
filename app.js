const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



const home ="Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const about = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contact = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
const service = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";


app.get("/",function(req,res){
    res.render("home.ejs",{home:home});
});

app.get("/booking",function(req,res){
  res.render("booking");
});

app.get("/files",function(req,res){
  res.render("gallery",{
    image1:'/files/highways.jpg',
    image2:'/files/open-road.jpg',
    image3:'/files/truck1.jpg'
  });
});


app.get('/about', function(req, res) {
  res.render('about', {
      aboutHeading: 'About Aff-Logistics',
      aboutDescription: 'We are Aff-Logistics firm with a great reputation for timely delivery of goods both in the country, our region, and worldwide...',
      galleryLink: 'See Our Gallery',
      aboutImage: '/images/images/goods-on-transit-one.jpg'
  });
});


app.get('/contact', function(req, res) {
  res.render('contact', {
      contactHeading: 'Reach to Us',
      phoneDescription: 'Call Us',
      phoneNumber: '9999999999',
      emailDescription: 'Email us On',
      emailAddress: 'afforal@xyz.com',
      whatsappDescription: 'Talk to Us',
      whatsappNumber: '8888888888',
      truckMapImage: '/images/images/truck-map.jpg'
  });
});


app.get('/service', function(req, res) {
  res.render('service', {
      cargoShipmentTitle: 'Cargo Shipment',
      cargoShipmentDescription: 'We are dedicated to ensure that the goods in transit either from abroad or locally produced goods arrive to the desired destination without any hinderment...',
      cargoShipmentButton: 'Check Out',
      instantDeliveryTitle: 'Instant Delivery',
      instantDeliveryDescription: 'Our company has a good reputation for delivering the goods promptly and timely without any delay...',
      instantDeliveryButton: 'Find Out'
  });
});


app.post('/submit', function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const date = req.body.date;
  const location = req.body.location;
  const message = req.body.message;
  res.redirect("/");
  res.send('Form submitted successfully');
  
});


app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  