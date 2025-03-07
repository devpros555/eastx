console.log("🚀 custom.js is running!");
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!hamburger || !mobileMenu) {
        console.error("❌ Error: Hamburger menu or mobile menu not found!");
        return;
    }

    // ✅ Ensure the hamburger button appears on mobile
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            hamburger.style.display = "block"; // Show on mobile & tablet
        } else {
            hamburger.style.display = "none"; // Hide on desktop
            mobileMenu.style.display = "none"; // Hide menu if switching back to desktop
        }
    }

    // ✅ Toggle mobile menu visibility when clicking hamburger button
    hamburger.addEventListener("click", function () {
        if (window.getComputedStyle(mobileMenu).display === "none") {
            mobileMenu.style.display = "flex";
            mobileMenu.style.flexDirection = "column"; // Ensure proper layout
        } else {
            mobileMenu.style.display = "none";
        }
    });

    // Run screen check on page load & resize
    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();
});

// ✅ Check if jQuery is loaded before running scripts
if (typeof jQuery === "undefined") {
    console.error("❌ Error: jQuery not loaded. Owl Carousel and navigation may not work.");
} else {
    console.log("✅ jQuery is loaded.");

    $(document).ready(function () {
        console.log("✅ Document is ready.");

        // ✅ Mobile Menu Toggle with Smooth Animation
        $("#hamburger").click(function () {
            $("#mobile-menu").slideToggle(300); // Smooth toggle effect
        });

        // ✅ Check if Owl Carousel is available before initializing it
        if (typeof $.fn.owlCarousel !== "undefined") {
            console.log("✅ Owl Carousel is loaded.");

            $(".owl-carousel").owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                dots: false,
                navText: [
                    '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
                    '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
                ],
                autoplay: true,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1000: {
                        items: 2
                    }
                }
            });
        } else {
            console.error("🚨 Error: Owl Carousel is NOT loaded!");
        }
    });
}
