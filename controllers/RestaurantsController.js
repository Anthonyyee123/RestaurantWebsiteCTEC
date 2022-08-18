"use strict";

const RestaurantsDB = require("../models/RestaurantsDB");

var restaurantsDB = new RestaurantsDB();

function getAllRestaurants(request, respond) {
  restaurantsDB.getAllRestaurants(function (error, result) {
    //if SQL query shows error, show error. otherwise result will be returned in json format

    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function getPreference(request, respond) {
  var preferences = request.params.preferences;
  restaurantsDB.getPreference(preferences, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

module.exports = { getAllRestaurants, getPreference };
