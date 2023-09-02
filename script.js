document.getElementById("enrollmentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var skills = document.getElementById("skills").value;
    var image = document.getElementById("image").files[0];

    // Display form values in the output div
    document.getElementById("outputName").textContent = fullName;
    document.getElementById("outputEmail").textContent = email;
    document.getElementById("outputGender").textContent = gender;
    document.getElementById("outputSkills").textContent = skills;

    // Display the selected image
    if (image) {
        var reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("outputImage").src = e.target.result;
        };
        reader.readAsDataURL(image);
    }

    // Show the output div
    document.getElementById("output").style.display = "block";
});