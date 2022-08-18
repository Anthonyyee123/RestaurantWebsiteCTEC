"use strict";

var db = require('../db-connections');

class RestaurantsDB{

    getAllRestaurants(callback){

        var sql = "SELECT * from comfieats.restaurant";

        db.query(sql, callback);

    }


    getPreference(preferences, callback){

        var sql = "SELECT restaurantname, cuisine, preferences FROM restaurant WHERE preferences = ?";

        db.query(sql, [preferences], callback);

    }
}



module.exports = RestaurantsDB;