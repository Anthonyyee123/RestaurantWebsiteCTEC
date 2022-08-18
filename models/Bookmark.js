"use strict"; //not used



class bookmark {

    constructor(id, restaurantId, user_id, CreatedOn, restaurantname, username) {

        this.id = id;

        this.user_id = user_id;

        this.restaurantId = restaurantId;

        this.CreatedOn = CreatedOn;

        this.restaurantname = restaurantname;

        this.username = username;

    }



    getId() {

        return this.id;

    }



    getUserId() {

        return this.user_id;

    }



    getRestaurantId() {

        return this.restaurantId;

    }

    getCreatedOn() {

        return this.CreatedOn;

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



    setUserId(user_id) {

        this.user_id = user_id; //assign new values in

    }

    setRestaurantId(restaurantId) {

        this.restaurantId = restaurantId;

    }

    setCreatedOn(reviewedOn) {

        this.CreatedOnOn = CreatedOn;

    }

    setRestaurantName(restaurantname) {

        this.restaurantname = restaurantname; //this. refers to old value, set assigns new values

    }

    setUsername(username) {

        this.username = username; //this. refers to old value, set assigns new values

    }


}



module.exports = bookmark;