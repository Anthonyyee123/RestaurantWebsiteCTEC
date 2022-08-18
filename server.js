var express = require("express"); //using the express web framework

// set commentController to the commentController class
var RestaurantsController = require("./controllers/RestaurantsController"); // set restaurantsController to the restaurantsController class
var ReviewController = require("./controllers/ReviewController");
var UsersController = require("./controllers/usersController");
var BookmarkController = require("./controllers/BookmarkController");

var app = express(); // set variable app to be an instance of express framework. From now on, app is the express

app.use(express.static("./public")); //for the website itself, static files are to be served from the public folder - for eg. html, images, css
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.
// In time to come we will need to accept new or edited comments from user

//Restaurants
app.route("/Restaurants").get(RestaurantsController.getAllRestaurants); //DONE activate the getAllMovies method if the route is GET(method) /movies
app.route("/Restaurants/:preferences").get(RestaurantsController.getPreference); //DONE
app
  .route("/RestaurantSpecifications/:restaurantname")
  .get(ReviewController.getRestaurantSpecs); //DONE

//Reviews
app.route("/Review").get(ReviewController.getAllReviews);
app.route("/addReview").post(ReviewController.addReview); //DONE
app.route("/Review/:id").put(ReviewController.updateReview);
app.route("/Review/:id").delete(ReviewController.deleteReview);

//Users
app.route("/Allusers").get(UsersController.getAllUsers);
app.route("/getuser").get(UsersController.getUser);
app.route("/addUser").post(UsersController.addUser); //DONE
app.route("/updateUser").put(UsersController.updateUser); //DONE
app.route("/deleteUser/:id").delete(UsersController.DeleteUserDetails); //DONE
app.route("/Userlogs/:user_id").get(UsersController.getuserlogs); //DONE

//login
app.route("/logon").post(UsersController.LogOn);

//bookmark
app.route("/bookmarkrestaurant").post(BookmarkController.addBookmark); //DONE

//email stuff
app.route("/sendemail").post(UsersController.sendmail);
app.route("/sendVerification").post(UsersController.sendVerification);
app.route("/verifyUser").put(UsersController.verifyUser);
app.route("/feedbackdb").post(UsersController.feedbackStore);

//server start here
app.listen(8080, "127.0.0.1"); // start the nodejs to be listening for incoming request @ port 8080
console.log("web server running @ http://127.0.0.1:8080"); // output to console
