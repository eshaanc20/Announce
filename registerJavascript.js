function register() {
    var username = document.getElementById("registerusername").value;
    var password = document.getElementById("registerpassword").value;
    var registertype = document.getElementById("registerchoice");
    //alerts the user if the input boxes or dropdown menus are left blank
    if (username === "" ||
        password === "" ||
        document.getElementById("registerchoice").selectedIndex === 0) {
        alert("Make sure all the required information has been selected or filled in");
    } else {
        //checks if the user wants to create a admin's account
        if (document.getElementById("registerchoice").selectedIndex === 1) {
            if (localStorage.getItem("adminusername") == null) {
                //stores the account info if this is the first admin account being created
                var tuserarray = [username];
                var tpassarray = [password];
                localStorage.setItem("adminusername", JSON.stringify(tuserarray));
                localStorage.setItem("adminpassword", JSON.stringify(tpassarray));
                alert("Registration complete");
            } else {
                var adminusernamearray = JSON.parse(localStorage.getItem("adminusername"));
                var adminpasswordarray = JSON.parse(localStorage.getItem("adminpassword"));
                //replies true if this username does not exist in the username array
                if (adminusernamearray.indexOf(username) === -1) {
                    localStorage.removeItem("adminusername");
                    localStorage.removeItem("adminpassword");
                    adminusernamearray.push(username);
                    adminpasswordarray.push(password);
                    localStorage.setItem("adminusername", JSON.stringify(adminusernamearray));
                    localStorage.setItem("adminpassword", JSON.stringify(adminpasswordarray));
                    alert("Registration complete");
                } else {
                    //alerts the user that the username has been taken
                    alert("Username has been taken");
                }
            }
        } else {
            //checks if the user wants to create a member's account
            if (localStorage.getItem("memberusername") == null) {
                //stores the account info if this is the first member account being created 
                var suserarray = [username];
                var spassarray = [password];
                localStorage.setItem("memberusername", JSON.stringify(suserarray));
                localStorage.setItem("memberpassword", JSON.stringify(spassarray));
                var clubarray = [];
                localStorage.setItem(username, JSON.stringify(clubarray));
                alert("Registration complete");
            } else {
                var memberusernamearray = JSON.parse(localStorage.getItem("memberusername"));
                var memberpasswordarray = JSON.parse(localStorage.getItem("memberpassword"));
                //replies true if this username does not exist in the username array
                if (memberusernamearray.indexOf(username) === -1) {
                    localStorage.removeItem("memberusername");
                    localStorage.removeItem("memberpassword");
                    memberusernamearray.push(username);
                    memberpasswordarray.push(password);
                    localStorage.setItem("memberusername", JSON.stringify(memberusernamearray));
                    localStorage.setItem("memberpassword", JSON.stringify(memberpasswordarray));
                    var clubarray = [];
                    localStorage.setItem(username, JSON.stringify(clubarray));
                    alert("Registration complete");
                } else {
                    //alerts the user that the username has been taken
                    alert("Username has been taken");
                }

            }
        }
    }
}