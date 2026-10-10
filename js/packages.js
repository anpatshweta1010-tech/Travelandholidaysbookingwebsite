// =====================================================
//              PACKAGES PAGE JAVASCRIPT
// =====================================================

// =====================================================
// PACKAGE DATA
// =====================================================

const packages = {

// ================= GOA =================

goa: {

    name: "Goa Beach Escape",

    location: "Goa",

    duration: "3 Days / 2 Nights",

    rating: "4.8 ⭐",

    price: "₹7,999",

    description:
        "Enjoy beautiful beaches, relaxing sunsets, sightseeing and exciting activities in Goa.",

    includes: [
        "Hotel Stay",
        "Breakfast",
        "Local Sightseeing",
        "Beach Visit",
        "Travel Assistance"
    ]

},


// ================= MANALI =================

manali: {

    name: "Manali Mountain Trip",

    location: "Manali",

    duration: "4 Days / 3 Nights",

    rating: "4.7 ⭐",

    price: "₹9,999",

    description:
        "Explore beautiful mountains, snowy landscapes, valleys and exciting adventure destinations.",

    includes: [
        "Hotel Stay",
        "Breakfast",
        "Mountain Sightseeing",
        "Local Transport",
        "Travel Assistance"
    ]

},


// ================= KASHMIR =================

kashmir: {

    name: "Kashmir Valley Escape",

    location: "Kashmir",

    duration: "5 Days / 4 Nights",

    rating: "4.9 ⭐",

    price: "₹12,999",

    description:
        "Discover the beauty of Kashmir with valleys, lakes, mountains and unforgettable landscapes.",

    includes: [
        "Hotel Stay",
        "Breakfast",
        "Dal Lake Visit",
        "Local Sightseeing",
        "Travel Assistance"
    ]

},


// ================= JAIPUR =================

jaipur: {

    name: "Royal Jaipur Journey",

    location: "Jaipur",

    duration: "3 Days / 2 Nights",

    rating: "4.8 ⭐",

    price: "₹6,999",

    description:
        "Explore the royal heritage of Jaipur including forts, palaces and the famous Pink City.",

    includes: [
        "Hotel Stay",
        "Breakfast",
        "Fort Visit",
        "Palace Sightseeing",
        "Local Transport"
    ]

},


// ================= AGRA =================

agra: {

    name: "Agra Heritage Tour",

    location: "Agra",

    duration: "2 Days / 1 Night",

    rating: "4.7 ⭐",

    price: "₹5,999",

    description:
        "Discover the Taj Mahal and explore the historical and cultural heritage of Agra.",

    includes: [
        "Hotel Stay",
        "Breakfast",
        "Taj Mahal Visit",
        "Agra Fort Visit",
        "Local Transport"
    ]

},


// ================= DELHI =================

delhi: {

    name: "Delhi City Explorer",

    location: "New Delhi",

    duration: "2 Days / 1 Night",

    rating: "4.6 ⭐",

    price: "₹5,499",

    description:
        "Experience famous monuments, markets and attractions of India's capital city.",

    includes: [
        "Hotel Stay",
        "Breakfast",
        "India Gate Visit",
        "Red Fort Visit",
        "City Sightseeing"
    ]

},


// ================= KERALA =================

kerala: {

    name: "Kerala Backwater Escape",

    location: "Kerala",

    duration: "4 Days / 3 Nights",

    rating: "4.9 ⭐",

    price: "₹10,999",

    description:
        "Enjoy peaceful backwaters, beautiful greenery, houseboats and relaxing Kerala experiences.",

    includes: [
        "Hotel Stay",
        "Breakfast",
        "Backwater Visit",
        "Houseboat Experience",
        "Local Sightseeing"
    ]

},


// ================= AMRITSAR =================

amritsar: {

    name: "Amritsar Cultural Tour",

    location: "Amritsar",

    duration: "2 Days / 1 Night",

    rating: "4.8 ⭐",

    price: "₹5,999",

    description:
        "Visit the Golden Temple and explore the rich culture and heritage of Amritsar.",

    includes: [
        "Hotel Stay",
        "Breakfast",
        "Golden Temple Visit",
        "Jallianwala Bagh Visit",
        "Local Sightseeing"
    ]

}

};

// =====================================================
// SHOW PACKAGE DETAILS
// =====================================================

function showPackage(packageName) {

// Get selected package

const selectedPackage =
    packages[packageName];


// Check package

if (!selectedPackage) {

    console.log("Package not found!");

    return;

}


// =================================================
// PACKAGE NAME
// =================================================

document.getElementById(
    "packageName"
).textContent =
    selectedPackage.name;


// =================================================
// DESCRIPTION
// =================================================

document.getElementById(
    "packageDescription"
).textContent =
    selectedPackage.description;


// =================================================
// LOCATION
// =================================================

document.getElementById(
    "packageLocation"
).textContent =
    selectedPackage.location;


// =================================================
// DURATION
// =================================================

document.getElementById(
    "packageDuration"
).textContent =
    selectedPackage.duration;


// =================================================
// RATING
// =================================================

document.getElementById(
    "packageRating"
).textContent =
    selectedPackage.rating;


// =================================================
// PRICE
// =================================================

document.getElementById(
    "packagePrice"
).textContent =
    selectedPackage.price;


// =================================================
// MODAL TITLE
// =================================================

document.getElementById(
    "packageTitle"
).textContent =
    selectedPackage.name;


// =================================================
// PACKAGE INCLUDES
// =================================================

const includesList =
    document.getElementById(
        "packageIncludes"
    );


// Clear previous list

includesList.innerHTML = "";


// Add package items

selectedPackage.includes.forEach(
    function (item) {

        const li =
            document.createElement("li");


        li.textContent =
            "✓ " + item;


        includesList.appendChild(li);

    }
);


// =================================================
// BOOK NOW BUTTON
// =================================================

const bookNowButton =
    document.getElementById(
        "bookNowButton"
    );


if (bookNowButton) {

    // Send selected package to
    // book-now.html

    bookNowButton.href =
        "book-now.html?package=" +
        packageName;

}


// =================================================
// OPEN BOOTSTRAP MODAL
// =================================================

const modalElement =
    document.getElementById(
        "packageModal"
    );


const modal =
    new bootstrap.Modal(
        modalElement
    );


modal.show();

}

// =====================================================
// MOBILE NAVBAR
// =====================================================

const navLinks =
document.querySelectorAll(
".navbar .nav-link"
);

navLinks.forEach(
function (link) {

    link.addEventListener(
        "click",
        function () {

            const navbarMenu =
                document.querySelector(
                    ".navbar-collapse"
                );


            if (
                navbarMenu &&
                navbarMenu.classList.contains("show")
            ) {

                const navbarButton =
                    document.querySelector(
                        ".navbar-toggler"
                    );


                if (navbarButton) {

                    navbarButton.click();

                }

            }

        }
    );

}

);

// =====================================================
// PAGE LOAD
// =====================================================

document.addEventListener(
"DOMContentLoaded",
function () {

    console.log(
        "Packages page loaded successfully!"
    );

}

);