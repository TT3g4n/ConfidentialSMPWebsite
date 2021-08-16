let hiddenornot = false;

function showSidebar() {
  if (hiddenornot == false) {
    document
      .getElementById("sidebar")
      .style.setProperty("visibility", "visible");
    hiddenornot = true;
    document.getElementById("sidebtn").style.backgroundColor = "white";
  } else if (hiddenornot == true) {
    document
      .getElementById("sidebar")
      .style.setProperty("visibility", "hidden");
    hiddenornot = false;
    document.getElementById("sidebtn").style.backgroundColor =
      "rgba(0, 0, 0, 0)";
  }
}
