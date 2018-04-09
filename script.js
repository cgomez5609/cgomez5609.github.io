var onHoverText = document.getElementsByClassName("onHoverText")[0];
var programmingHover = document.getElementById("one");
var controllerHover = document.getElementById("two");
var concertHover = document.getElementById("three");

var elements = ["one", "two", "three"];

var breakLine = "<br>"

programmingHover.addEventListener("mouseover", function() {
    console.log("I am over the picture");
    onHoverText.innerHTML = "Languages I use:" + "<br>" +
                            "<b style='color: green'>PYTHON</b> was my first language" + "<br>" +
                            "I would use <b style='color:blue'>SWIFT</b> for everything if can" + "<br>" +
                            "<b style='color: teal'>C#</b> makes Unity fun" + "<br>" +
                            "<b style='color:purple'>JAVASCRIPT</b> is everywhere" +
                            "<br>" + "<br>" +
                            "What I\'m into:" + "<br>" +
                            "Web Development" + "<br>" +
                            "Game Development" + "<br>" +
                            "ios development" + "<br>" +
                            "Artificial Intelligence";
})

controllerHover.addEventListener("mouseover", function() {
    console.log("I am over the picture");
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

concertHover.addEventListener("mouseover", function() {
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

for (var i = 0; i < elements.length; i++) {
  document.getElementById(elements[i]).addEventListener("mouseleave", function() {
      console.log("I am out of the picture")
      onHoverText.innerHTML = "";
  })
}
