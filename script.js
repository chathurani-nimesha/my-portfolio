function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "top-navBar") {
    x.className += " responsive";
  } else {
    x.className = "top-navBar";
  }
}