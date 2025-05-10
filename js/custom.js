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

const overlay_div = `
  <div id="overlay">
        <div class="container">
            <div class="static-modal">

                <div class="modal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Welcome!<br> Please enter your secret key to continue.</h5>
                            </div>
                            <div class="modal-body pt-0">
                                <form id="secret-overlay-form">
                                    <div class="form-group">
                                        <!-- <label for="login-email">Username*</label> -->
                                        <input type="password" id="overlay_password" class="form-control" placeholder="Enter here" required>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="bg-fill prev-btn">Continue</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const tempDiv = document.createElement("div");
tempDiv.innerHTML = overlay_div;
document.body.appendChild(tempDiv.firstElementChild);

//

const overlay = document.getElementById("overlay");

// Define your correct password (consider more secure alternatives for production)
const correctPassword = "Admin@123"; // Replace with your actual password

document
  .getElementById("secret-overlay-form")
  .addEventListener("submit", (event) => {
    // Check authentication
    const userInput = document.querySelector("#overlay_password").value;

    if (!sessionStorage.getItem("authenticated")) {
      overlay.style.display = "flex"; // Show overlay before prompt
      // const userInput = prompt("Enter the website password:");

      if (userInput === correctPassword) {
        sessionStorage.setItem("authenticated", "true");
        overlay.style.display = "none";
      } else {
        alert("Incorrect password.");
        window.location.href = "/";
      }
    } else {
      overlay.style.display = "none";
    }
  });

if (!sessionStorage.getItem("authenticated")) {
  overlay.style.display = "flex"; // Show overlay before prompt
  // const userInput = prompt("Enter the website password:");
} else {
  overlay.style.display = "none";
}

// const userInput = document.querySelector("#overlay_password").value;
//   if (userInput === correctPassword) {
//     sessionStorage.setItem("authenticated", "true");
//     overlay.style.display = "none";
//   } else {
//     alert("Incorrect password. You will be redirected.");
//     overlay.style.display = "flex";
//     window.location.href = "/";
//   }

// mobile menu js

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 767) {
    (function () {
      const login_options = document.querySelector(".login-options ul");
      const nav = document.querySelector("nav");
      const mobileNav = document.querySelector(".mobile-menu .menu-wrraper");

      if (mobileNav && nav && login_options) {
        mobileNav.append(nav, login_options);
      }

      const hamburger = document.querySelector(".hamburger");
      const close = document.querySelector(".mobile-menu .close");
      const mobile_menu = document.querySelector(".mobile-menu");

      $(hamburger).on("click", function () {
        $(mobile_menu).toggleClass("active");
      });

      $(close).on("click", function () {
        $(mobile_menu).removeClass("active");
      });
    })();
  }
});
