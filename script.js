let icon = document.getElementById("icon");

icon.onclick = function () {
  var element = document.body;
  element.classList.toggle("dark-mode-btn");
  if (element.classList.contains("dark-mode-btn")) {
    icon.src = "./images/moon-6685.png";
  } else {
    icon.src = "./images/sun-8725.png";
  }
};
