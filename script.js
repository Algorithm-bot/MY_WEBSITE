function loadSemesters(year) {
    // Hide all widgets
    hideAllWidgets();

    // Show the corresponding semester widgets for the selected year
    document.getElementById(`semester${(year - 1) * 2 + 1}`).style.display = 'block';
    document.getElementById(`semester${(year - 1) * 2 + 2}`).style.display = 'block';
}

function hideAllWidgets() {
    // Hide all year and semester widgets
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`year${i}`).style.display = 'none';
    }
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`semester${i}`).style.display = 'none';
    }

    // Hide all subject widgets
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`subject${i}`).style.display = 'none';
    }
}

function goNotes() {
    // Show the initial state with year widgets
    hideAllWidgets();
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`year${i}`).style.display = 'block';
    }
}

function loadEbooks() {
    hideAllWidgets();  // Hide all widgets

    // You can add your logic to load ebooks content here
}

function loadResources() {
    hideAllWidgets();  // Hide all widgets

    // You can add your logic to load resources content here
}

function goAbout(pageURL) {
    // Navigate to the specified page
    window.location.href = pageURL;
}

// Function to open subject widgets when Semester 2 is clicked
function sem_2_Subjects() {
    hideAllWidgets();  // Hide all widgets

    // Show subject widgets for Semester 2
    document.getElementById("subject1").style.display = "block";
    document.getElementById("subject2").style.display = "block";
    document.getElementById("subject3").style.display = "block";
}

// Function to open subject widgets when Semester 3 is clicked
function sem_3_Subjects() {
    console.log("sem_3_Subjects() function called"); // Add this line to check if the function is called

    hideAllWidgets();  // Hide all widgets

    // Show subject widgets for Semester 3
    document.getElementById("subject4").style.display = "block";
    document.getElementById("subject5").style.display = "block";
    document.getElementById("subject6").style.display = "block";

}


// Function to open subject widgets when Semester 4 is clicked
function sem_4_Subjects() {

    hideAllWidgets();  // Hide all widgets



    // Show subject widgets for Semester 3
    document.getElementById("subject8").style.display = "block";
    document.getElementById("subject9").style.display = "block";
    document.getElementById("subject10").style.display = "block";
    document.getElementById("subject11").style.display = "block";


}