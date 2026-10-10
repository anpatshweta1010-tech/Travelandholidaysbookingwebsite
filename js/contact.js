/* =====================================================
   CONTACT PAGE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       GET FORM ELEMENTS
    ================================================= */

    const contactForm =
        document.getElementById("contactForm");

    const successMessage =
        document.getElementById("successMessage");


    /* =================================================
       FORM SUBMIT
    ================================================= */

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();


            /* -----------------------------------------
               GET VALUES
            ----------------------------------------- */

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const subject =
                document.getElementById("subject").value.trim();

            const message =
                document.getElementById("message").value.trim();


            /* -----------------------------------------
               ERROR ELEMENTS
            ----------------------------------------- */

            const nameError =
                document.getElementById("nameError");

            const emailError =
                document.getElementById("emailError");

            const phoneError =
                document.getElementById("phoneError");

            const subjectError =
                document.getElementById("subjectError");

            const messageError =
                document.getElementById("messageError");


            /* -----------------------------------------
               CLEAR PREVIOUS ERRORS
            ----------------------------------------- */

            nameError.textContent = "";
            emailError.textContent = "";
            phoneError.textContent = "";
            subjectError.textContent = "";
            messageError.textContent = "";

            successMessage.style.display = "none";


            let isValid = true;


            /* =================================================
               NAME VALIDATION
            ================================================= */

            if (name === "") {

                nameError.textContent =
                    "Please enter your name.";

                isValid = false;

            } else if (name.length < 3) {

                nameError.textContent =
                    "Name must contain at least 3 characters.";

                isValid = false;
            }


            /* =================================================
               EMAIL VALIDATION
            ================================================= */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (email === "") {

                emailError.textContent =
                    "Please enter your email.";

                isValid = false;

            } else if (!emailPattern.test(email)) {

                emailError.textContent =
                    "Please enter a valid email address.";

                isValid = false;
            }


            /* =================================================
               PHONE VALIDATION
            ================================================= */

            const phonePattern =
                /^[0-9]{10}$/;


            if (phone === "") {

                phoneError.textContent =
                    "Please enter your phone number.";

                isValid = false;

            } else if (!phonePattern.test(phone)) {

                phoneError.textContent =
                    "Phone number must contain exactly 10 digits.";

                isValid = false;
            }


            /* =================================================
               SUBJECT VALIDATION
            ================================================= */

            if (subject === "") {

                subjectError.textContent =
                    "Please enter a subject.";

                isValid = false;
            }


            /* =================================================
               MESSAGE VALIDATION
            ================================================= */

            if (message === "") {

                messageError.textContent =
                    "Please enter your message.";

                isValid = false;

            } else if (message.length < 10) {

                messageError.textContent =
                    "Message must contain at least 10 characters.";

                isValid = false;
            }


            /* =================================================
               IF FORM IS VALID
            ================================================= */

            if (isValid) {

                successMessage.style.display = "block";


                /* Clear form */

                contactForm.reset();


                /* Scroll to success message */

                successMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });


                /* Hide success message after 5 seconds */

                setTimeout(function () {

                    successMessage.style.display = "none";

                }, 5000);

            }

        });

    }


    /* =================================================
       MOBILE NAVBAR CLOSE
    ================================================= */

    const navLinks =
        document.querySelectorAll(".navbar .nav-link");

    const navbarCollapse =
        document.querySelector(".navbar-collapse");


    if (navLinks.length > 0 && navbarCollapse) {

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                if (
                    window.innerWidth < 992 &&
                    navbarCollapse.classList.contains("show")
                ) {

                    const bsCollapse =
                        bootstrap.Collapse.getInstance(
                            navbarCollapse
                        );

                    if (bsCollapse) {

                        bsCollapse.hide();

                    }

                }

            });

        });

    }

});