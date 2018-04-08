var programmingText = document.getElementsByClassName("programmingHover")[0];
var programmingHover = document.getElementById("one");

programmingHover.addEventListener("mouseover", function() {
    console.log("I am over the picture")
    programmingText.innerHTML = "Here is some programming info";
})

programmingHover.addEventListener("mouseleave", function() {
    console.log("I am out of the picture")
    programmingText.innerHTML = "";
})
