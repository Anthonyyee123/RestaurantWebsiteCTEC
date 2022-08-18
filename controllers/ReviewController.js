"use strict";
const ReviewsDB = require("../models/ReviewsDB");
const Review = require("../models/Review");

var reviewsDB = new ReviewsDB();

function getAllReviews(request, respond) {
  reviewsDB.getAllReviews(function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function addReview(request, respond) {
  var now = new Date();
  var review = new Review(
    null,
    request.body.restaurant_id,
    now.toString(),
    now.toString(),
    request.body.review_text,
    request.body.rating,
    request.body.restaurantname,
    request.body.username
  );

  reviewsDB.addReview(review, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function updateReview(request, respond) {
  var now = new Date();
  var review = new Review(
    parseInt(request.params.id),
    request.body.restaurant_id,
    now.toString(),
    now.toString(),
    request.body.review_text,
    request.body.rating,
    request.body.restaurantname,
    request.body.username
  );
  reviewsDB.updateReview(review, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function deleteReview(request, respond) {
  var reviewID = request.params.id;
  reviewsDB.deleteReview(reviewID, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function getRestaurantSpecs(request, respond) {
  var restaurantname = request.params.restaurantname;
  reviewsDB.getRestaurantSpecs(restaurantname, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}
module.exports = {
  getAllReviews,
  addReview,
  updateReview,
  deleteReview,
  getRestaurantSpecs,
};
