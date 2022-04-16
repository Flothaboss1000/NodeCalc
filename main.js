window.onload = function () {
  fetch("./data.json")
    .then((e) => e.json())
    .then((data) => {
      document.getElementById("version").innerHTML = data.version;
    });
};
