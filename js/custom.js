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

$(document).ready(function () {
  // Dropdown handling
  $(".wrap button").on("click", function (e) {
    console.log("clicked");
    e.preventDefault();
    let $dropdown = $(this).siblings("div.select");
    $dropdown.slideToggle();
    $(this).toggleClass("active");
    $("div.select").not($dropdown).slideUp();
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest("button, div.select").length) {
      $("div.select").slideUp();
    }
  });

  // Password visibility toggle
});

document.querySelectorAll(".toggle-password").forEach(function (icon) {
  icon.addEventListener("click", function () {
    const input = document.querySelector(icon.getAttribute("toggle"));
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";

    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
  });
});
