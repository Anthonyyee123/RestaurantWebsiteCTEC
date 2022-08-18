"use strict"; //not used

var db = require('../db-connections');

class BookmarksDB{

    addBookmark(bookmark, callback){

        var sql = "INSERT INTO bookmark (restaurant_id, user_id, created_on, restaurantname, username) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [bookmark.getRestaurantId(), bookmark.getUserId(), bookmark.getCreatedOn(), bookmark.getRestaurantName(), bookmark.getUsername()], callback);
    }}

    //trigger command below in mysql ensures when user updates their username, the username in bookmark table is updated as well.

    //DELIMITER ;

//DROP TRIGGER IF EXISTS usernamechangebookmark;

//DELIMITER $$

//CREATE TRIGGER usernamechangebookmark AFTER UPDATE ON user FOR EACH ROW BEGIN DECLARE useriD integer;
    //SET useriD = (SELECT _id FROM user WHERE username=NEW.username);
    //IF NEW.username != OLD.username THEN UPDATE bookmark SET username = NEW.username WHERE user_id = useriD; END IF; END $$



module.exports = BookmarksDB;