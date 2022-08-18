"use strict"; //not used

const BookmarksDB = require('../models/BookmarksDB');
const Bookmark = require('../models/Bookmark');



var bookmarksDB = new BookmarksDB();





function addBookmark(request, respond){
    var now = new Date();
    var bookmark = new Bookmark(null, request.body.restaurant_id,  request.body.user_id, now.toString(), request.body.restaurantname, request.body.username);
    
    bookmarksDB.addBookmark(bookmark, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}
module.exports = {addBookmark}