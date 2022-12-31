const template = document.getElementById("informations");
tippy("rect", {
  content: template.innerHTML,
  trigger: "click",
  placement: "bottom",
  interactive: true,
});

function fetchPlacesFromDB() {
  fetch("/api/V2/place/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

document.addEventListener("DOMContentLoaded", fetchPlacesFromDB, false);
