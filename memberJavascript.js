function onloadannouncement() {
    var user = localStorage.getItem("memberuser");
    var clubarray = JSON.parse(localStorage.getItem(user));
    //shows the member name at the left corner of the screen
    document.getElementById("name").innerHTML = user;
    if (localStorage.getItem(user) === "[]") {
        alert("Join a club to view announcements");
    } else {
        document.getElementById("announcementdisplay").innerHTML = "";
        //checks if there is no announcement key in local storage and if it is true, this function stops
        if (localStorage.getItem("announcement") === null) {} else {
            var announcement = JSON.parse(localStorage.getItem("announcement"));
            var number = 0;
            //works backwards from the announcement array length to display announcements from latest to oldest. The loop subtracts the variable by five every loop in order to get to the previous announcment in the array, until it get to the last announcmenet also know as when the variable is equal to four
            for (i = announcement.length; i >= 4; i -= 5) {
                //determines the index at which the announcement name is located in the array
                if (i === 4) {
                    var check = i - 3;
                } else {
                    var check = i - 4;
                }
                var clubname = announcement[check];
                //checks if the announcement name is located in the list of member's clubs
                if (clubarray.indexOf(clubname) >= 0) {
                    //creates a new row in the table for a new announcement 
                    var table = document.getElementById("announcementdisplay");
                    table.style.marginTop = "10px";
                    table.style.marginBottom = "40px";
                    var row = table.insertRow();
                    var spacer = table.insertRow();
                    spacer.style.height = "10px";
                    //creates another row in order to space out the announcements
                    var cell1 = row.insertCell();
                    cell1.style.paddingBottom = "18px"
                    cell1.style.backgroundColor = "white";
                    cell1.style.border = "12px solid darkcyan";
                    //adds one to the previous value in the variable to find the announcement number
                    number += 1;
                    //attaches the announcement title at the top of the cell
                    cell1.innerHTML += "<br>" + "Latest Announcement" + " #" + number + "<br>" + "<br>";
                    var z = i - 5;
                    var a = z + 4;
                    var b = z + 1;
                    var c = z + 2;
                    var d = z + 3;
                    var e = z + 4;
                    for (y = z; y <= a; y++) {
                        //attaches each array value at the end of the previous data in the cell
                        if (y === z) {
                            cell1.innerHTML += "Category: " + announcement[y] + "<br>";
                        } else if (y === b) {
                            var uppercaseclubname = announcement[y].toUpperCase();
                            cell1.innerHTML += "Name: " + uppercaseclubname + "<br>";
                        } else if (y === c) {
                            cell1.innerHTML += "Gender: " + announcement[y] + "<br>";
                        } else if (y === d) {
                            cell1.innerHTML += "Grade: " + announcement[y] + "<br>";
                        } else {
                            cell1.innerHTML += "Message: " + announcement[y] + "<br>";
                        }
                    }
                }
            }
        }

    }
}

function clubfilter() {
    var user = localStorage.getItem("memberuser");
    //shows the member name at the left corner of the screen
    document.getElementById("name").innerHTML = user;
    var clubarray = JSON.parse(localStorage.getItem(user));
    document.getElementById("announcementdisplay").innerHTML = "";
    //checks if there is no announcement key in local storage and if it is true, this function stops
    if (localStorage.getItem("announcement") === null) {
        alert("No announcements are stored");
    } else {
        var announcement = JSON.parse(localStorage.getItem("announcement"));
        var number = 0;
        //works backwards from the announcement array length to display announcements from latest to oldest. The loop subtracts the variable by five every loop in order to get to the previous announcment in the array, until it get to the last announcmenet also know as when the variable is equal to four
        for (i = announcement.length; i >= 4; i -= 5) {
            //finds the array index at which the announcement name can be found
            if (i === 4) {
                var check = i - 3;
            } else {
                var check = i - 4;
            }
            var clubname = announcement[check];
            //checks if the announcement name is located in the list of member's clubs and if true, the announcement is displayed
            if (clubarray.indexOf(clubname) >= 0) {
                //finds the index at which the announcement category is located in the array
                var z = i - 5;
                //displays the announcement if the category of the announcement is club
                if (announcement[z] === "Club") {
                    //creates a new row in the table for a new announcement 
                    var table = document.getElementById("announcementdisplay");
                    table.style.marginTop = "10px";
                    table.style.marginBottom = "40px";
                    var row = table.insertRow();
                    var spacer = table.insertRow();
                    //creates another row to space out the announcements
                    spacer.style.height = "10px";
                    var cell1 = row.insertCell();
                    cell1.style.paddingBottom = "18px"
                    cell1.style.backgroundColor = "white";
                    cell1.style.border = "12px solid darkcyan";
                    //adds one to the previous value in the variable to obtain announcement number
                    number += 1;
                    //attaches the announcement title at the top of the cell
                    cell1.innerHTML += "<br>" + "Latest Announcement" + " #" + number + "<br>" + "<br>";
                    var z = i - 5;
                    var a = z + 4;
                    var b = z + 1;
                    var c = z + 2;
                    var d = z + 3;
                    var e = z + 4;
                    for (y = z; y <= a; y++) {
                        //attaches each array value at the end of the previous data in the cell
                        if (y === z) {
                            cell1.innerHTML += "Category: " + announcement[y] + "<br>";
                        } else if (y === b) {
                            var uppercaseclubname = announcement[y].toUpperCase();
                            cell1.innerHTML += "Name: " + uppercaseclubname + "<br>";
                        } else if (y === c) {
                            cell1.innerHTML += "Gender: " + announcement[y] + "<br>";
                        } else if (y === d) {
                            cell1.innerHTML += "Grade: " + announcement[y] + "<br>";
                        } else {
                            cell1.innerHTML += "Message: " + announcement[y] + "<br>";
                        }
                    }
                }
            }
        }
    }
}

function teamfilter() {
    var user = localStorage.getItem("memberuser");
    //shows the member name at the left corner of the screen
    document.getElementById("name").innerHTML = user;
    var clubarray = JSON.parse(localStorage.getItem(user));
    document.getElementById("announcementdisplay").innerHTML = "";
    //checks if there is no announcement key in local storage and if it is true, this function stops
    if (localStorage.getItem("announcement") === null) {
        alert("No announcements are stored");
    } else {
        var announcement = JSON.parse(localStorage.getItem("announcement"));
        var number = 0;
        //works backwards from the announcement array length to display announcements from latest to oldest. The loop subtracts the variable by five every loop in order to get to the previous announcment in the array, until it get to the last announcmenet also know as when the variable is equal to four
        for (i = announcement.length; i >= 4; i -= 5) {
            //finds the index at which the announcement name is located in the array
            if (i === 4) {
                var check = i - 3;
            } else {
                var check = i - 4;
            }
            var clubname = announcement[check];
            //displays the announcement if the club name is in the list the member's clubs
            if (clubarray.indexOf(clubname) >= 0) {
                //finds the index at which the category of the announcement is located
                var z = i - 5;
                //displays the announcement if the category of the announcement is team
                if (announcement[z] === "Team") {
                    //creates a new row in the table for a new announcement 
                    var table = document.getElementById("announcementdisplay");
                    table.style.marginTop = "10px";
                    table.style.marginBottom = "40px";
                    var row = table.insertRow();
                    var spacer = table.insertRow();
                    spacer.style.height = "10px";
                    var cell1 = row.insertCell();
                    cell1.style.paddingBottom = "18px"
                    cell1.style.backgroundColor = "white";
                    cell1.style.border = "12px solid darkcyan";
                    //add a number to the previous value in the variable to obtain the announcement number
                    number += 1;
                    //attaches the announcement title at the top of the cell
                    cell1.innerHTML += "<br>" + "Latest Announcement" + " #" + number + "<br>" + "<br>";
                    var z = i - 5;
                    var a = z + 4;
                    var b = z + 1;
                    var c = z + 2;
                    var d = z + 3;
                    var e = z + 4;
                    for (y = z; y <= a; y++) {
                        //attaches each array value at the end of the previous data in the cell
                        if (y === z) {
                            cell1.innerHTML += "Category: " + announcement[y] + "<br>";
                        } else if (y === b) {
                            var uppercaseclubname = announcement[y].toUpperCase();
                            cell1.innerHTML += "Name: " + uppercaseclubname + "<br>";
                        } else if (y === c) {
                            cell1.innerHTML += "Gender: " + announcement[y] + "<br>";
                        } else if (y === d) {
                            cell1.innerHTML += "Grade: " + announcement[y] + "<br>";
                        } else {
                            cell1.innerHTML += "Message: " + announcement[y] + "<br>";
                        }
                    }
                }
            }
        }
    }
}

function onloadclubdisplay() {
    var user = localStorage.getItem("memberuser");
    //displays the user's name at the left corner of the screen
    document.getElementById("name").innerHTML = user;
    document.getElementById("clubdisplay").innerHTML = " ";
    var user = localStorage.getItem("memberuser");
    var clubs = JSON.parse(localStorage.getItem(user));
    //keeps performing the operations until the variable gets to the array's length
    for (i = 0; i < clubs.length; i++) {
        //creates a new row in the table for a club input 
        var table = document.getElementById("clubdisplay");
        table.style.marginTop = "1px";
        table.style.marginBottom = "8px";
        var row = table.insertRow();
        var cell1 = row.insertCell();
        cell1.style.padding = "12px";
        cell1.style.backgroundColor = "lightgray";
        cell1.style.color = "black";
        cell1.style.fontSize = "20px";
        cell1.style.verticalAlign = "center";
        cell1.style.textAlign = "left";
        var nameuppercase = clubs[i].toUpperCase();
        cell1.innerHTML = nameuppercase;
        //creates a button in order to delete the club
        cell1.innerHTML += '<button onclick="deleteclub(this)" style="background-color: red; color : white;float: right; border-radius: 12px; height: 24px;">Delete</button>';
    }
}

function deleteclub(element) {
    var user = localStorage.getItem("memberuser");
    var clubs = JSON.parse(localStorage.getItem(user));
    localStorage.removeItem(user);
    var table = document.getElementById("clubdisplay");
    //determines the row index of the button that was clicked
    var index = element.parentNode.parentNode.rowIndex;
    //deletes the row of the button based on its index
    table.deleteRow(index);
    //deletes the club name from the array based on the index
    clubs.splice(index, 1);
    localStorage.setItem(user, JSON.stringify(clubs));
    //updates the list of member's clubs
    onloadclubdisplay();
}

function memberrequest() {
    var clubrequest = document.getElementById("clubname").value.toUpperCase();
    var user = localStorage.getItem("memberuser");
    var clubarray = JSON.parse(localStorage.getItem(user));
    localStorage.removeItem(user);
    //adds the club if the club name is not in the array
    if (clubarray.indexOf(clubrequest) <= -1) {
        clubarray.push(clubrequest);
    } else {
        alert("Club is already added");
    }
    localStorage.setItem(user, JSON.stringify(clubarray));
    //updats the list of member's clubs
    onloadclubdisplay();
}