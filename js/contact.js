const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})

var submitBtn = document.getElementsByClassName("submit_btn")[0];


submitBtn.onclick = function (submit, event) {
    var firstName = fname.value
    var lastName = lname.value
    var emailAddress = eAddr.value
    var subjectText = subject.value
    console.log("firstName = " + firstName)
    console.log("lastName = " + lastName)
    console.log("emailAddress = " + emailAddress)
    console.log("subjectText = " + subjectText)

    if (firstName == "") {
        alert("Please enter your first name")
    } else if (lastName == "") {
        alert("Please enter your last name")
    } else if (emailAddress == "") {
        alert("Please enter your email address")
    } else if (subjectText == "") {
        alert("Please enter your comment/question")
    } else {
        displayRating()
    }
}


function displayRating() {
    console.log("in displayRating")
    document.getElementById("rating_modal").style.display = "inline"
}

// Get the <span> element (the x button in the top right corner of the modal) that closes the modal
var cancelRatingBtn = document.getElementsByClassName("cancel_rating_modal")[0];

cancelRatingBtn.onclick = function () {
    rating_modal.style.display = "none"
    location.reload(true)
}

// When the user clicks anywhere outside of the modal, close it without submitting the rating
window.onclick = function (event) {
    if (event.target == rating_modal) {
        rating_modal.style.display = "none"
        location.reload(true)
    }
}

