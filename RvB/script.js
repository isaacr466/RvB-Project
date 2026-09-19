// =========================
// F4R WEBSITE SCRIPT
// =========================

// Page loaded
document.addEventListener("DOMContentLoaded", function () {

    console.log("F4R // SYSTEM ONLINE");
    console.log("RvB/Halo profile loaded.");

    // Add loaded class for page animation
    document.body.classList.add("page-loaded");


    // =========================
    // BUTTON CLICK EFFECT
    // =========================

    const buttons = document.querySelectorAll(".button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.style.transform = "translateX(8px)";

            setTimeout(function () {
                button.style.transform = "";
            }, 150);

        });

    });


    // =========================
    // PROFILE IMAGE EFFECT
    // =========================

    const profilePic = document.querySelector(".profile-pic");

    if (profilePic) {

        profilePic.addEventListener("click", function () {

            profilePic.style.transform = "scale(1.08)";

            setTimeout(function () {
                profilePic.style.transform = "";
            }, 300);

        });

    }

});