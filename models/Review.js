"use strict";



class Review {

    constructor(id, restaurantId, reviewedOn, editedOn, reviewtext, rating, restaurantname, username) {

        this.id = id;

        this.restaurantId = restaurantId;

        this.reviewedOn = reviewedOn;

        this.editedOn = editedOn;

        this.reviewtext = reviewtext;

        this.rating = rating;

        this.restaurantname = restaurantname;

        this.username = username;

    }



    getId() {

        return this.id;

    }


    getRestaurantId() {

        return this.restaurantId;

    }

    getReviewedOn() {

        return this.reviewedOn;

    }

    getEditedOn() {

        return this.editedOn;

    }

    getReviewText() {

        return this.reviewtext;

    }

    getRating() {

        return this.rating;

    }

    getRestaurantName() {

        return this.restaurantname;

    }

    getUsername() {

        return this.username;

    }


    setId() {   

        this.id;
    }

    setRestaurantId(restaurantId) {

        this.restaurantId = restaurantId;

    }

    setReviewedOn(reviewedOn) {

        this.reviewedOn = reviewedOn;

    }

    setEditedOn(editedOn) {

        this.editedOn = editedOn;

    }

    setReviewText(reviewtext) {

        this.reviewtext = reviewtext; //this. refers to old value, set assigns new values

    }

    
    setRating(rating) {

        this.rating = rating; //this. refers to old value, set assigns new values

    }

    setRestaurantName(restaurantname) {

        this.restaurantname = restaurantname; //this. refers to old value, set assigns new values

    }

    setUsername(username) {

        this.username = username; //this. refers to old value, set assigns new values

    }


}



module.exports = Review;