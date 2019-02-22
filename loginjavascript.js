function login() {
    //stores input data into variables
    var x = document.getElementById("username").value;
    var y = document.getElementById("password").value;
    //checks if the member checkbox is checked
    if (document.getElementById("memberbox").checked === true) {
        if (localStorage.getItem("memberusername") === null) {
            alert("Wrong username or password");
        } else {
            var memberusernames = JSON.parse(localStorage.getItem("memberusername"));
            var memberpasswords = JSON.parse(localStorage.getItem("memberpassword"));
            //finds the index of the user's input in the array of stored usernames
            var memberindex = memberusernames.indexOf(x);
            //checks if the username and password are correct based on the index of the value in the arrays
            if (memberusernames[memberindex] === x && memberpasswords[memberindex] === y) {
                //adds the member's name as a key in local storage in order to find member's info for later use
                if (localStorage.getItem("memberuser") === null) {
                    localStorage.setItem("memberuser", x);
                } else {
                    localStorage.removeItem("memberuser");
                    localStorage.setItem("memberuser", x);
                }
                alert("Welcome to your member page")
                //switches to member's page
                document.location.href = "memberAnnouncements.html";
            } else {
                alert("Wrong username or password");
            }
        }
        //checks if the admin checkbox is checked
    } else if (document.getElementById("adminbox").checked === true) {
        if (localStorage.getItem("adminusername") === null) {
            alert("Wrong username or password");
        } else {
            var adminusernames = JSON.parse(localStorage.getItem("adminusername"));
            var adminpasswords = JSON.parse(localStorage.getItem("adminpassword"));
            //finds the index of the user's input in the array of stored usernames
            var adminindex = adminusernames.indexOf(x);
            //checks if the username and password are correct based on the index of values in the arrays 
            if (adminusernames[adminindex] === x && adminpasswords[adminindex] === y) {
                alert("Welcome to your admin page")
                //switchs to admin's page
                window.location.href = "adminAnnouncements.html";
            } else {
                alert("Wrong username or password");
            }
        }
    } else {
        alert("Wrong username or password");
    }
}
