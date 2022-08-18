class Feedback {

    constructor(id, emailaddress, feedback, senton, username) {

        this.id = id;

        this.username = username;

        this.emailaddress = emailaddress;

        this.feedback = feedback;

        this.senton = senton;

    }

    getId() {

        return this.id;

    }

    getUsername() {

        return this.username;

    }

    getEmailAddress() {

        return this.emailaddress;

    }

    getFeedback() {

        return this.feedback;

    }

    getSentOn() {

        return this.senton;

    }

    setId(id) {

        this.id = id; //this. refers to old value, set assigns new values

    }

    setusername(username) {

        this.username = username; //this. refers to old value, set assigns new values

    }

    setEmailAddress(emailaddress) {

        this.emailaddress = emailaddress; //this. refers to old value, set assigns new values

    }

    setFeedback(feedback) {

        this.feedback = feedback; //this. refers to old value, set assigns new values

    }

    setSentOn(senton)
    {
        this.senton = senton;
    }

}

    module.exports = Feedback;
