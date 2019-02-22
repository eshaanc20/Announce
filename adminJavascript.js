function storeannouncement() {
    // stores user input data into variables for simplicity
    var categorychoice = document.getElementById("categorydropdown");
    var club = document.getElementById("clubinput").value.toUpperCase();
    var genderchoice = document.getElementById("genderdropdown");
    var gradechoice = document.getElementById("gradedropdown");
    var message = document.getElementById("messageinput").value;
    //checks if the textboxes are empty
    if (document.getElementById("categorydropdown").selectedIndex === "" ||
        club === "" ||
        document.getElementById("genderdropdown").selectedIndex === 0 || document.getElementById("gradedropdown").selectedIndex === 0 ||
        message === "") {
        alert("Make sure all the required information has been selected or filled in");
    } else {
        //creates an array for the announcement data
        var announcementarray = [categorychoice.options[categorychoice.selectedIndex].text, club, genderchoice.options[genderchoice.selectedIndex].text, gradechoice.options[gradechoice.selectedIndex].text, message];
        //replies true if no announcement is in local storage
        if (localStorage.getItem("announcement") === null) {
            //converts the array into a string and stores into local storage
            var announcementstring = JSON.stringify(announcementarray);
            localStorage.setItem("announcement", announcementstring);
            alert("The announcement has been posted");
        } else {
            var result = JSON.parse(localStorage.getItem("announcement"));
            localStorage.removeItem("announcement");
            //the five new data inputs are individually pushed behind the previous data in local storage as the for loop repeats five times
            for (i = 0; i <= 4; i++) {
                result.push(announcementarray[i]);
            }
            //converts the array into a string and stores it back into local storage
            localStorage.setItem("announcement", JSON.stringify(result));
            location.reload();
            alert("The announcement has been posted");
        }
    }
}

function deleteannouncement(element) {
    var table = document.getElementById("announcementdisplay");
    //determines the row index of the button that was clicked
    var index = element.parentNode.parentNode.rowIndex;
    //deletes the row of the button based on its index
    table.deleteRow(index);
    var array = JSON.parse(localStorage.getItem("announcement"));
    if (index == 0) {
        localStorage.removeItem("announcement");
        var length = array.length - 5;
        array.splice(length, 5);
        var string = JSON.stringify(array);
        localStorage.setItem("announcement", string);
    } else if (index == 1) {
        localStorage.removeItem("announcement");
        //deletes the details of the announcement from the array based on the index of the button
        var length = array.length - 10;
        array.splice(length, 5);
        var string = JSON.stringify(array);
        localStorage.setItem("announcement", string);
    } else {
        localStorage.removeItem("announcement");
        //deletes the details of the announcement from the array based on the index of the button
        var b = index * 5;
        var c = array.length - b - 4;
        array.splice(c, 5);
        var string = JSON.stringify(array);
        localStorage.setItem("announcement", string);
    }
    //deletes the whole key if there are no values stored in the announcement key
    if (localStorage.getItem("announcement") == "[]") {
        localStorage.removeItem("announcement");
    }
    //runs through the function to update the screen
    onloadannouncement();
}

function onloadannouncement() {
    document.getElementById("announcementdisplay").innerHTML = "";
    //checks if there is no announcement key in local storage and if it is true, this function stops
    if (localStorage.getItem("announcement") === null) {} else {
        var announcement = JSON.parse(localStorage.getItem("announcement"));
        var number = 0;
        //works backwards from the announcement length to display announcements from latest to oldest. The loop subtracts the variable by five every loop in order to get to the previous announcment in the array, until it get to the last announcmenet also know as when the variable is equal to four
        for (i = announcement.length; i >= 4; i -= 5) {
            //creates a new row in the table for a new announcement 
            var table = document.getElementById("announcementdisplay");
            table.style.marginTop = "10px";
            table.style.marginBottom = "40px";
            var row = table.insertRow();
            var spacer = table.insertRow();
            var cell1 = row.insertCell();
            cell1.style.paddingBottom = "12px";
            cell1.style.backgroundColor = "#F5F5F5";
            cell1.style.border = "12px solid black";
            cell1.style.marginTop = "100vh";
            //adds one to the previous value in order to get to the announcement number
            number += 1;
            //attaches the announcement title at the top of the cellc
            cell1.innerHTML += "<br>" + "Latest Announcement" + " #" + number + "<br>" + "<br>";
            var z = i - 5;
            var a = z + 4;
            var b = z + 1;
            var c = z + 2;
            var d = z + 3;
            var e = z + 4;
            for (y = z; y <= a; y++) {
                //displays each detail of the announcement from the array to its designated cell
                if (y === z) {
                    cell1.innerHTML += "Category: " + announcement[y] + "<br>";
                } else if (y === b) {
                    var uppercaseclubname = announcement[y].toUpperCase();
                    cell1.innerHTML += "Name: " + uppercaseclubname + "<br>"
                } else if (y === c) {
                    cell1.innerHTML += "Gender: " + announcement[y] + "<br>";
                } else if (y === d) {
                    cell1.innerHTML += "Grade: " + announcement[y] + "<br>";
                } else {
                    cell1.innerHTML += "Message: " + announcement[y] + "<br>";
                }
            }
            //adds a button to the row in order to delete the announcement
            cell1.innerHTML += '<button onclick="deleteannouncement(this)" style="background-color: red; color : white;border-radius: 140px; height: 40px; margin-top: 10px">Delete</button>';
        }
    }
}

function clubfilter() {
    document.getElementById("announcementdisplay").innerHTML = "";
    //checks if there is no announcement key in local storage and if it is true, this function stops
    if (localStorage.getItem("announcement") === null) {
        alert("No announcements are stored");
    } else {
        var announcement = JSON.parse(localStorage.getItem("announcement"));
        var number = 0;
        //works backwards from the announcement array length to display announcements from latest to oldest. The loop subtracts the variable by five every loop in order to get to the previous announcment in the array, until it get to the last announcmenet also know as when the variable is equal to four
        for (i = announcement.length; i >= 4; i -= 5) {
            //determines the index at which the announcement category is located
            var z = i - 5;
            //displays the announcement if the announcement category is club
            if (announcement[z] === "Club") {
                //creates a new row in the table for a new announcement 
                var table = document.getElementById("announcementdisplay");
                table.style.marginTop = "10px";
                var row = table.insertRow();
                var spacer = table.insertRow();
                var cell1 = row.insertCell();
                cell1.style.backgroundColor = "#F5F5F5";
                cell1.style.paddingBottom = "18px";
                cell1.style.border = "12px solid black";
                //adds one to the previous value in order to get to the announcement number
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
                        cell1.innerHTML += "Name: " + uppercaseclubname + "<br>"
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

function teamfilter() {
    document.getElementById("announcementdisplay").innerHTML = "";
    //checks if there is no announcement key in local storage and if it is true, this function stops
    if (localStorage.getItem("announcement") === null) {
        alert("No announcements are stored");
    } else {
        var announcement = JSON.parse(localStorage.getItem("announcement"));
        var number = 0;
        //works backwards from the announcement array length to display announcements from latest to oldest. The loop subtracts the variable by five every loop in order to get to the previous announcment in the array, until it get to the last announcmenet also know as when the variable is equal to four
        for (i = announcement.length; i >= 4; i -= 5) {
            //determines the index at which the announcement category is located
            var z = i - 5;
            //displays the announcement if the announcement category is team
            if (announcement[z] === "Team") {
                //creates a new row in the table for a new announcement 
                var table = document.getElementById("announcementdisplay");
                table.style.marginTop = "10px";
                table.style.marginBottom = "40px";
                var row = table.insertRow();
                var spacer = table.insertRow();
                var cell1 = row.insertCell();
                cell1.style.paddingBottom = "18px";
                cell1.style.backgroundColor = "#F5F5F5";
                cell1.style.border = "12px solid black";
                //adds one to the previous value in order to get to the announcement number
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
                        cell1.innerHTML += "Name: " + uppercaseclubname + "<br>"
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