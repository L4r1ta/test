/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".navbar-nav .nav-link");

    links.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        const targetPosition = targetElement.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000; // duration of the scroll in milliseconds
        let start = null;

        window.requestAnimationFrame(step);

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const scrollPosition = easeInOutQuad(progress, startPosition, distance, duration);
            window.scrollTo(0, scrollPosition);
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var scrollToServicesButton = document.getElementById("scrollToServices");
    var servicesSection = document.getElementById("services");

    scrollToServicesButton.addEventListener("click", function(event) {
        event.preventDefault();
        setTimeout(function() {
            var offsetTop = servicesSection.offsetTop;
            smoothScrollTo(offsetTop, 700);
        }, 100); // .7 second delay before starting the scroll
    });

    function smoothScrollTo(to, duration) {
        var element = document.documentElement;
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

        function animateScroll() {
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
        }
        animateScroll();
    }

    Math.easeInOutQuad = function(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
});
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the logo link and VG SOLUTIONS link
    var logoLink = document.querySelector(".navbar-brand img");
    var vgSolutionsLink = document.querySelector(".navbar-brand");

    // Add click event listeners to both links
    logoLink.addEventListener("click", reloadPage);
    vgSolutionsLink.addEventListener("click", reloadPage);

    // Function to reload the page
    function reloadPage() {
        location.reload();
    }
});
// Show preloader when the page starts loading
document.addEventListener("DOMContentLoaded", function() {
    // Display preloader
    document.getElementById("preloader").style.display = "block";
    
    // Hide preloader after 3 seconds
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none";
    }, 1500); // 1.5 seconds pang adjust loader time
});


document.addEventListener("DOMContentLoaded", function() {
    var scrollToServicesButton = document.getElementById("scrollToPortfolio");
    var servicesSection = document.getElementById("Features");

    scrollToServicesButton.addEventListener("click", function(event) {
        event.preventDefault();
        var offsetTop = servicesSection.offsetTop;
        scrollTo(document.documentElement, offsetTop, 1000);
    });

    function scrollTo(element, to, duration) {
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

        var animateScroll = function() {
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }

    Math.easeInOutQuad = function(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
});

document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.getElementById("seemore");

    // Add click event listener to the icon button
    scrollToTopButton.addEventListener("click", function(event) {
        event.preventDefault();

        // Calculate the distance to scroll
        var distanceToTop = document.getElementById("page-top").getBoundingClientRect().top;

        // Scroll smoothly to the top over 0.7 seconds
        smoothScrollTo(distanceToTop, 700);
    });

    function smoothScrollTo(target, duration) {
        var start = window.pageYOffset,
            startTime = performance.now();

        function animate(time) {
            var timeFraction = (time - startTime) / duration;
            if (timeFraction > 1) timeFraction = 1;

            var progress = Math.easeInOutQuad(timeFraction);

            window.scrollTo(0, start + target * progress);

            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    Math.easeInOutQuad = function(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };
});
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".zoom-image");

    images.forEach(img => {
        img.addEventListener("mousemove", function(e) {
            const rect = img.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;

            img.style.transformOrigin = `${x * 100}% ${y * 100}%`;
        });

        img.addEventListener("mouseleave", function() {
            img.style.transformOrigin = "center center";
        });
    });
});