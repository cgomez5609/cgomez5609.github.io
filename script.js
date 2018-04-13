var onHoverText = document.getElementsByClassName("onHoverText")[0];
var keyboardImage = document.getElementById("topLeftImage");
var controllerImage = document.getElementById("middleImage");
var concertImage = document.getElementById("bottomRightImage");

var images = ["topLeftImage", "middleImage", "bottomRightImage"];

var breakLine = "<br>"

// Adds text to the right container when hovering over an image.
// Three images total with three different possible texts.
keyboardImage.addEventListener("mouseover", function() {
    console.log("I am over the image");
    onHoverText.innerHTML = "Languages I use:" + breakLine +
                            "<b style='color: green'>PYTHON</b> was my first language" + breakLine +
                            "I would use <b style='color:blue'>SWIFT</b> for everything if can" + breakLine +
                            "<b style='color: teal'>C#</b> makes Unity fun" + breakLine+
                            "<b style='color:purple'>JAVASCRIPT</b> is everywhere" +
                            breakLine + breakLine +
                            "What I\'m into:" + breakLine +
                            "Web Development" + breakLine +
                            "Game Development" + breakLine +
                            "ios development" + breakLine +
                            "Artificial Intelligence";
})

controllerImage.addEventListener("mouseover", function() {
    console.log("I am over the image");
    onHoverText.innerHTML = "I grew up with games so I'll grow old with them as well" + "<br>" +
                            breakLine +
                            "What do I play on" + breakLine +
                            "<b style='color:blue'>Playstation</b> 4" + breakLine +
                            "<b style='color:red'>Nintendo</b> Switch" + breakLine +
                            "<b style='color:green'>PC</b>" +
                            breakLine + breakLine +
                            "Some favorites:" + "<br>" +
                            "Final Fantasy 7" + breakLine +
                            "Final Fantasy 9" + breakLine +
                            "Last of Us" + breakLine +
                            "Nier Automata" + breakLine +
                            "SOMA" + breakLine +
                            breakLine +
                            "Honestly, anything with a <b style='color: teal'>good story</b>";
})

concertImage.addEventListener("mouseover", function() {
  console.log("I am over the image");
  onHoverText.innerHTML = "Genres I enjoy:" + breakLine +
                          "Classical" + breakLine +
                          "Soundtracks" + breakLine +
                          "Techno" + breakLine +
                          "Trance" + breakLine +
                          "Deep House" + breakLine +
                          "alternative" + breakLine +
                          "Industrial Rock" +
                          breakLine + breakLine +
                          "Notable Artist by Genre:" + breakLine +
                          "Soundtracks: <b style='color: teal'>Hans Zimmer</b>" + breakLine +
                          "Techno: <b style='color: green'>Amelie Lens</b>" + breakLine +
                          "Trance: <b style='color: blue'>Andrew Bayer</b>" + breakLine +
                          "Alternative: <b style='color: turquoise'>Interpol</b>"

})

// Removes text from right container when no longer hovering over image
// loops through each image via the "images" variable in order to shorten code
for (var i = 0; i < images.length; i++) {
  document.getElementById(elements[i]).addEventListener("mouseleave", function() {
      console.log("I am out of the image")
      onHoverText.innerHTML = "";
  })
}
