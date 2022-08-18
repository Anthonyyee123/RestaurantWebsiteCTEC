"use strict";

var db = require('../db-connections');

class ReviewsDB{

    getAllReviews(callback){

        var sql = "SELECT * from comfieats.review";

        db.query(sql, callback);

    }

    addReview(review, callback){

        var sql = "INSERT INTO review (restaurant_id, reviewed_on, edited_on, review_text, rating, restaurantname, username) VALUES (?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [review.getRestaurantId(), review.getReviewedOn(), review.getEditedOn() , review.getReviewText(), review.getRating(), review.getRestaurantName(), review.getUsername()], callback);
    }

    updateReview(review, callback){
        var sql = "UPDATE review SET review_text = ?, rating = ?, edited_on = ? WHERE _id = ?";
        return db.query(sql, [review.getReviewText(), review.getRating(), review.getEditedOn(), review.getId()], callback);
    }

    deleteReview(reviewID, callback){
        var sql = "DELETE from review WHERE _id = ?";
        return db.query(sql, [reviewID], callback);
}

    getRestaurantSpecs(restaurantname, callback){
        var sql = "SELECT review.restaurantname, COUNT(review._id) as reviews, AVG(review.rating), restaurant.restaurantdescription, restaurant.cuisine, restaurant.preferences, restaurant.price_range, restaurant.opening_hours FROM restaurant LEFT JOIN review ON restaurant._id = review.restaurant_id WHERE restaurant.restaurantname = ?;" //
        return db.query(sql, [restaurantname], callback);
}}



module.exports = ReviewsDB;