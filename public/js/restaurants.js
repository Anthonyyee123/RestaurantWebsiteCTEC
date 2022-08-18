function getRestaurantData() {
  console.log("working");
  var request = new XMLHttpRequest();
  request.open("GET", restaurant_url, true);
  //This function will be called when data returns from the web api
  request.onload = function () {
    //get all the movies records into our movie array
    restaurant_array = JSON.parse(request.responseText);
    //Fetch the comments as well
    fetchReviews();
    console.log(restaurant_array); // output to console
    //call the function so as to display all movies tiles for "Now Showing"
    displayAllRestaurants();
  };

  //This command starts the calling of the movies web api
  request.send();
}

getRestaurantData();

function displayAllRestaurants() {
  var table = document.getElementById("restaurantsTable");
  var restaurantCount = 0;
  var message = "";

  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  for (var count = 0; count < totalRestaurants; count++) {
    var restimage = restaurant_array[count].restaurantlogo;
    console.log(restimage);
    var name = restaurant_array[count].restaurantname;
    var cell =
      ' <body ><div class=" col-md-3 offset-1 card form-group zoom1 " style="margin-top:70px;" ><img class="card-img-top" src="' +
      restimage +
      '" alt="Card image cap">\
                        <div class="card-body" style="margin-right=50px"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' +
      count +
      '" onClick="showRestaurantReviews(this)"></i>\
                        <h5 style="padding-left;cursor:pointer;font-size:14px;text-align: center;" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
      count +
      '" onClick="showRestaurantDetails(this)">' +
      name +
      "</h5></div></div>\
</div></body>";
    table.insertAdjacentHTML("beforeend", cell);
    restaurantCount++;
  }

  message = "Showing " + restaurantCount + " Restaurants ";
  document.getElementById("summary").textContent = message;
}

function displayRestaurantsCuisinebased(cuisine) {
  var table = document.getElementById("restaurantsTable");
  var restaurantCount = 0;
  var message = "";

  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  for (var count = 0; count < totalRestaurants; count++) {
    if (restaurant_array[count].cuisine == cuisine) {
      var restimage = restaurant_array[count].restaurantlogo;
      var name = restaurant_array[count].restaurantname;
      var cell =
        ' <body ><div class=" col-md-3 offset-1 card form-group zoom1 " style="margin-top:70px;" ><img class="card-img-top" src="' +
        restimage +
        '" alt="Card image cap">\
                        <div class="card-body" style="margin-right=50px"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' +
        count +
        '" onClick="showRestaurantReviews(this)"></i>\
                        <h5 style="padding-left;cursor:pointer;font-size:14px;text-align: center;" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
        count +
        '" onClick="showRestaurantDetails(this)">' +
        name +
        "</h5></div></div>\
</div></body>";
      table.insertAdjacentHTML("beforeend", cell);
      restaurantCount++;
    }
  }

  message = "Showing " + restaurantCount + " Restaurants ";
  document.getElementById("summary").textContent = message;
}

function displayRestaurantsPreferencesbased(preferences) {
  var table = document.getElementById("restaurantsTable");
  var restaurantCount = 0;
  var message = "";

  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  for (var count = 0; count < totalRestaurants; count++) {
    if (restaurant_array[count].preferences == preferences) {
      var restimage = restaurant_array[count].restaurantlogo;
      var name = restaurant_array[count].restaurantname;
      var cell =
        ' <body ><div class=" col-md-3 offset-1 card form-group zoom1 " style="margin-top:70px;" ><img class="card-img-top" src="' +
        restimage +
        '" alt="Card image cap">\
                        <div class="card-body" style="margin-right=50px"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' +
        count +
        '" onClick="showRestaurantReviews(this)"></i>\
                        <h5 style="padding-left;cursor:pointer;font-size:14px;text-align: center;" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
        count +
        '" onClick="showRestaurantDetails(this)">' +
        name +
        "</h5></div></div>\
</div></body>";
      table.insertAdjacentHTML("beforeend", cell);
      restaurantCount++;
    }
  }
  message = "Showing " + restaurantCount + " Restaurants ";
  document.getElementById("summary").textContent = message;
}

function showRestaurantDetails(element) {
  var item = element.getAttribute("item");
  currentIndex = item;
  document.getElementById("restName").textContent =
    restaurant_array[item].restaurantname;
  document.getElementById("logo").src = restaurant_array[item].restaurantlogo;
  document.getElementById("Cuisine").textContent =
    restaurant_array[item].cuisine;
  document.getElementById("Preferences").textContent =
    restaurant_array[item].preferences;
  document.getElementById("time").textContent =
    restaurant_array[item].opening_hours;
  document.getElementById("website").textContent =
    restaurant_array[item].restaurant_website_url;
  document.getElementById("facebook").textContent =
    restaurant_array[item].restaurant_facebook_url;
  document.getElementById("insta").textContent =
    restaurant_array[item].restaurant_instagram_url;
  document.getElementById("pricerange").textContent =
    restaurant_array[item].price_range;
  document.getElementById("description").textContent =
    restaurant_array[item].restaurantdescription;
}


//functions below facilitate the filtering/sorting feature
function showall() {
  displayAllRestaurants();
}

function showChinesebased() {
  cuisine = "Chinese";
  displayRestaurantsCuisinebased(cuisine);
}

function showWesternbased() {
  cuisine = "Western";
  displayRestaurantsCuisinebased(cuisine);
}

function showKoreanbased() {
  cuisine = "Korean";
  displayRestaurantsCuisinebased(cuisine);
}

function showJapanesebased() {
  cuisine = "Japanese";
  displayRestaurantsCuisinebased(cuisine);
}

function showHalalbased() {
  preferences = "Halal";
  displayRestaurantsPreferencesbased(preferences);
}

function showPescetarianbased() {
  preferences = "Pescetarian";
  displayRestaurantsPreferencesbased(preferences);
}

function showVegetarianbased() {
  preferences = "vegetarian";
  displayRestaurantsPreferencesbased(preferences);
}
