"use strict";

var db = require('../db-connections');

class FeedbacksDB{

    
    feedbackStore(feedback, callback){

        var sql = "INSERT INTO feedbacks (emailaddress, feedback, senton, username) VALUES (?, ?, ?, ?)";
        db.query(sql, [feedback.getEmailAddress(), feedback.getFeedback(), feedback.getSentOn(), feedback.getUsername()], callback);
    }
}


module.exports = FeedbacksDB;
