function dropdownToggle() {
    var dropdownContent = document.getElementById("dropdownOptions");
    var dropdownButton = document.getElementById("dropdownButton");

    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        dropdownButton.classList.remove("clicked");
    } else {
        dropdownContent.style.display = "block";
        dropdownButton.classList.add("clicked");
    }
}