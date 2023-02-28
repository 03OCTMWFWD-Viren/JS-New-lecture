function validateform() {
    var name = document.contactfrom.name.value;
    var email = document.contactfrom.email.value;
    var mobile = document.contactfrom.mobile.value;
    var country = document.contactfrom.country.value;
    var gender = document.contactfrom.gender.value;
    var hobbies = [];   
    var checkbox = document.getElementsByName("hobbies[]");

    if (isNaN(name)) {
        document.getElementById('nameErr').innerHTML = ""
    }
    else{
        document.getElementById('nameErr').style.color = 'red'
        document.getElementById('nameErr').innerHTML = "alphabets required"
    }
}
