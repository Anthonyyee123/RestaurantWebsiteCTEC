function fetchReviews() {
    var request = new XMLHttpRequest();

    request.open('GET', review_url, true);

    //This command starts the calling of the comments api
    request.onload = function () {
        //get all the comments records into our comments array
        review_array = JSON.parse(request.responseText);
        console.log(review_array);
    };

    request.send();
}

function showRestaurantReviews(element) {
    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    var locuser = localStorage.getItem("username")
    currentIndex = item;
    document.getElementById("review").textContent = "Review for " + restaurant_array[item].restaurantname;
    document.getElementById("reviewbody").textContent = "";

    for (var i = 0; i < review_array.length; i++) {
        if (review_array[i].restaurantname === restaurant_array[item].restaurantname) {
            document.getElementById("emptyComment").innerHTML = "";
            selectedrestaurantid = restaurant_array[item]._id;
            star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + review_array[i].review_text + "</p>               \
                                    <small>by " + review_array[i].username + " @ " + review_array[i].edited_on + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("reviewbody").insertAdjacentHTML('beforeend', html);

            var star = "";
            for (var j = 0; j < review_array[i].rating; j++) {
                console.log(i);
                star += "<img src='images/fullstar.png' style='width:50px' />";
            }
            if (locuser == null){ //will check in user is logged in with a username. if not, no option to edit or delete comment will show
                document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
            }else if (review_array[i].username == locuser) //if the review username is same as username logged in, edit or delete is available
            {
                star += "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' ></i></div>";
            star += "<div id='editcomm'><i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal'item='" + i + "' onClick='editComment(this)' ></i></div>";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
           else{
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
           }
    }
    }
}


function newReview() {
    //Initialise each HTML input elements in the modal window with default value.
    rating = 0;
    document.getElementById("userComments").value = "";

}

// Submit or send the new comment to the server to be added.
function addReview() {
    var review = new Object();
    review.restaurant_id = restaurant_array[currentIndex]._id; // Movie ID is required by server to create new comment 
    review.restaurantname = restaurant_array[currentIndex].restaurantname; // Movie title is required by server to create new comment
    review.username = localStorage.getItem("username"); // Will automatically take username of logged in person
    review.review_text = document.getElementById("userComments").value; // Value from HTML input text
    review.reviewed_on = null; // Change the datePosted to null instead of taking the timestamp on the client side;
    review.rating = rating;

    var postReview = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postReview.open("POST", "/addReview", true); //Use the HTTP POST method to send data to server

    postReview.setRequestHeader("Content-Type", "application/json");
    postReview.onload = function () {
        console.log("new review posted");
        fetchReviews(); // fetch all comments again so that the web page can have updated comments.     
    };
    // Convert the data in Comment object to JSON format before sending to the server.
    postReview.send(JSON.stringify(review));
}

function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var popcorns = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // popcorn images to use black and white.
    for (let popcorn of popcorns) {
        popcorn.setAttribute("src", emptystar);
    }
    changeStarImage(num, classTarget);
}

function changeStarImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", fullstar);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", fullstar);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", fullstar);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", fullstar);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", fullstar);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", fullstar);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", fullstar);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", fullstar);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", fullstar);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", fullstar);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", fullstar);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", fullstar);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", fullstar);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", fullstar);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", fullstar);
            rating = 5;
            break;
    }
}



function editComment(element) {
    var item = element.getAttribute("item");

    currentIndex = item;

    document.getElementById("editnickname").value = localStorage.getItem("username"); //will automatically take username of the person who made the review
    document.getElementById("edituserComments").value = review_array[item].review_text;
    console.log(review_array[item].rating);
    displayStar('editpop', review_array[item].rating);
}

function displayStar(classname, num) {
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of pop) {
        p.setAttribute("src", emptystar);
    }
    changeStarImage(num, classTarget);
}

function updateComment() {
    var locusername = localStorage.getItem("username")
    if (review_array[currentIndex].username != locusername)

    {alert("You are not authorised to edit this review. You can only edit your review!")}
    else{

    var response = confirm("Are you sure you want to update this comment?");
    if (response == true) {
        var edit_review_url = review_url + "/" + review_array[currentIndex]._id;
        var updateComment = new XMLHttpRequest(); // new HttpRequest instance to send request to server
        updateComment.open("PUT", edit_review_url, true); //The HTTP method called 'PUT' is used here as we are updating data
        updateComment.setRequestHeader("Content-Type", "application/json");
        review_array[currentIndex].username = document.getElementById("editnickname").value;
        review_array[currentIndex].review_text = document.getElementById("edituserComments").value;
        review_array[currentIndex].rating = rating;
        updateComment.onload = function () {
            fetchReviews();
        };
        updateComment.send(JSON.stringify(review_array[currentIndex]));
    }}
}

function deleteComment(element) {
    var response = confirm("Are you sure you want to delete this review?");

    if (response == true) {
        var item = element.getAttribute("item"); //get the current item
        var delete_review_url = review_url + "/" + review_array[item]._id;
        var eraseComment = new XMLHttpRequest();
        eraseComment.open("DELETE", delete_review_url, true);
        eraseComment.onload = function() {
            fetchReviews();
        };
        eraseComment.send();
    }
}
