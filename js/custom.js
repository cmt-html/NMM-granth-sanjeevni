const MainObj = {
  focusOnInput: function (input) {
    const inputElement = document.querySelector(input);
    if (inputElement) {
      inputElement.focus();
    }
  },
};







$(document).ready(function () {
  const searchTab = document.querySelector(".search-tab");

  searchTab.addEventListener("click", function (e) {
    console.log(e);

    if (e.target.id === "manuscripts") {
      document.querySelectorAll(".btns-wrapper button").forEach((element) => {
        element.classList.remove("active");
        if (element.id === "manuscripts") {
          element.classList.add("active");
          MainObj.focusOnInput(".input-search input");
        }
      });
    }

    if (e.target.id === "catalogue") {
      document.querySelectorAll(".btns-wrapper button").forEach((element) => {
        element.classList.remove("active");
        if (element.id === "catalogue") {
          element.classList.add("active");
          MainObj.focusOnInput(".input-search input");
        }
      });
    }
  });
});
