function tema() {
    const body = document.getElementById("background");
    const toggleSwitch = document.getElementById("toggle");

    if (toggleSwitch.checked) {
      body.style.backgroundColor = "#1C2833 ";
    } else {
      body.style.backgroundColor = "rgba(51, 45, 45, 0.167)";
    }
  }