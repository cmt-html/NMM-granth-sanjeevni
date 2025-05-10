const MainObj = {
  focusOnInput: function (input) {
    const inputElement = document.querySelector(input);
    if (inputElement) {
      inputElement.focus();
    }
  },

  filterMenu: function (btn, menu) {
    const button = document.querySelector(btn);
    const menuToggle = document.querySelector(menu);

    if (button && menuToggle) {
      button.addEventListener("click", () => {
        $(menuToggle).fadeToggle();
      });
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

  MainObj.filterMenu(".mobile-setting-icon", ".mob-menu-wrap");
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





const overlay = document.getElementById("overlay");

// Define your correct password (consider more secure alternatives for production)
const correctPassword = "Admin@123"; // Replace with your actual password

// Check authentication
if (!sessionStorage.getItem("authenticated")) {
  overlay.style.display = "block"; // Show overlay before prompt
  const userInput = prompt("Enter the website password:");

  if (userInput === correctPassword) {
    sessionStorage.setItem("authenticated", "true");
    overlay.style.display = "none";
  } else {
    alert("Incorrect password. You will be redirected.");
    window.location.href = "/";
  }
} else {
  overlay.style.display = "none";
}
