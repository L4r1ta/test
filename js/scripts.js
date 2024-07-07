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
//show password
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("showPasswordToggle").addEventListener("click", function() {
        var passwordInput = document.getElementById("exampleInputPassword1");
        var icon = document.querySelector("#showPasswordToggle i");

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        } else {
            passwordInput.type = "password";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
    });
});
// zoom in effect
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

//message box pop-up
document.addEventListener("DOMContentLoaded", function() {
    const openButton = document.getElementById("openMessageBox");
    const messageBox = document.getElementById("messageBox");
    const closeButton = document.getElementById("closeMessageBox");
    const contactForm = document.getElementById("contactForm");
    const contactNumberInput = document.getElementById("contactNumber");

    openButton.addEventListener("click", function() {
      messageBox.classList.add("show");
    });

    closeButton.addEventListener("click", function() {
      messageBox.classList.remove("show");
    });
//after submit pop-up
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Thank you for your Interest");
      messageBox.classList.remove("show");
    });

    contactNumberInput.addEventListener("input", function(event) {
      // Remove any non-numeric characters
      const sanitizedValue = event.target.value.replace(/\D/g, '');
      event.target.value = sanitizedValue;
    });
  });

  //pop up request demo
  document.addEventListener("DOMContentLoaded", function() {
    const openCloseButton = document.getElementById("openCloseButton");
    const popupBox = document.getElementById("popupBox");

    // Open or close popup when button is clicked
    openCloseButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the click event from propagating to the window
        popupBox.classList.toggle("show");
    });

    // Close popup when clicking outside of it
    window.addEventListener("click", function(event) {
        if (!popupBox.contains(event.target) && event.target !== openCloseButton) {
            popupBox.classList.remove("show");
        }
    });
});

//contact textfield only numbers
document.addEventListener("DOMContentLoaded", function() {
    const contactNumberInput = document.getElementById("contactNumber");

    contactNumberInput.addEventListener("input", function() {
        // Remove non-numeric characters from the input value
        this.value = this.value.replace(/\D/g, '');
    });
});

var button = document.getElementById("openCloseButton");

// Add click event listener
button.addEventListener("click", function() {
    // Get the image element
    var image = document.getElementById("buttonImage");
    // Toggle the "flip" class
    image.classList.toggle("flip");
});


function forgot(){
    alert("PLEASE CONTACT VANGUARD SOLUTIONS SUPPORT");
}



document.getElementById("userMessage").addEventListener("keydown", function(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
        event.preventDefault(); // Prevent default Enter behavior (new line)
        document.getElementById("submitButton").click(); // Programmatically click the Send button
    }
});


//please wait
document.getElementById('demoForm').addEventListener('submit', function() {
    var button = document.getElementById('submitButton');
    button.innerHTML = 'Please wait...';
    button.disabled = true;
});


//admin login
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        // User is logged in
        handleLoggedInState();
    } else {
        // User is not logged in
        handleLoggedOutState();
    }
});

// Function to handle logged in state
function handleLoggedInState() {
    const loginLink = document.getElementById('loginLink');
    loginLink.style.display = 'none'; // Hide the login link

    const loggedInDropdown = document.getElementById('loggedInDropdown');
    loggedInDropdown.style.display = 'block'; // Show the dropdown menu
    loggedInDropdown.querySelector('.dropdown-toggle').textContent = 'LogOut';
    loggedInDropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');

    loggedInDropdown.addEventListener('click', function(event) {
        event.preventDefault();
        // Handle dropdown item clicks if needed
    });
}

// Function to handle logged out state
function handleLoggedOutState() {
    const loginLink = document.getElementById('loginLink');
    loginLink.style.display = 'block'; // Show the login link

    const loggedInDropdown = document.getElementById('loggedInDropdown');
    loggedInDropdown.style.display = 'none'; // Hide the dropdown menu

    loggedInDropdown.removeEventListener('click', function(event) {
        event.preventDefault();
        // Handle dropdown item clicks if needed
    });
}

// Function to handle logout
function logout() {
    alert('Logged out');
    localStorage.removeItem('isLoggedIn'); // Clear login state from localStorage
    location.reload(); // Refresh the page
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

    // Simple check for admin credentials (username: admin@example.com, password: admin123)
    if (username === 'vanguard@alford.net' && password === 'admin123') {
        // Close the modal
        $('#loginModal').modal('hide');

        // Show success alert for login
        alert('Successfully logged in');

        // Save login state in localStorage
        localStorage.setItem('isLoggedIn', 'true');

        // Handle logged in state
        handleLoggedInState();

        // Optionally, hide the login form content
        document.getElementById('loginForm').reset();
    } else {
        alert('Invalid username or password');
    }
});

// Function to handle sign-up button click
document.getElementById('signupButton').addEventListener('click', function(event) {
    event.preventDefault();
    alert('CONTACT VANGUARD ADMIN');
    // Optionally, handle sign-up logic here
});

function forgot() {
    alert("PLEASE CONTANCT VANGUARD ADMIN");
}

