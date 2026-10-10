// =====================================================
//              DESTINATION PAGE JAVASCRIPT
// =====================================================

// =====================================================
// DESTINATION DATA
// =====================================================

const destinations = {

Goa: {

    description:
        "Goa is famous for beautiful beaches, amazing sunsets, water activities and relaxing holidays.",

    bestTime:
        "November to February",

    places:
        "Baga Beach, Calangute Beach, Fort Aguada"

},


Manali: {

    description:
        "Manali is a beautiful mountain destination famous for snow, valleys and adventure activities.",

    bestTime:
        "October to February",

    places:
        "Solang Valley, Rohtang Pass, Hadimba Temple"

},


Kashmir: {

    description:
        "Kashmir is known for beautiful valleys, lakes, mountains and breathtaking landscapes.",

    bestTime:
        "March to October",

    places:
        "Dal Lake, Gulmarg, Pahalgam"

},


Jaipur: {

    description:
        "Jaipur is the Pink City of India and is famous for royal palaces, forts and beautiful heritage.",

    bestTime:
        "October to March",

    places:
        "Amber Fort, Hawa Mahal, City Palace"

},


Agra: {

    description:
        "Agra is famous for the Taj Mahal and its rich Mughal heritage.",

    bestTime:
        "October to March",

    places:
        "Taj Mahal, Agra Fort, Mehtab Bagh"

},


"New Delhi": {

    description:
        "New Delhi offers historical monuments, markets, museums and many famous attractions.",

    bestTime:
        "October to March",

    places:
        "India Gate, Red Fort, Qutub Minar"

},


Kerala: {

    description:
        "Kerala is famous for peaceful backwaters, houseboats, beaches and beautiful greenery.",

    bestTime:
        "October to March",

    places:
        "Alleppey, Munnar, Kochi"

},


Amritsar: {

    description:
        "Amritsar is known for the Golden Temple and the rich culture and heritage of Punjab.",

    bestTime:
        "October to March",

    places:
        "Golden Temple, Jallianwala Bagh, Wagah Border"

}

};

// =====================================================
// SHOW DESTINATION DETAILS
// =====================================================

function showDestination(destinationName) {

// Get selected destination

const destination =
    destinations[destinationName];


// Check destination

if (!destination) {

    return;

}


// Set destination name

document.getElementById(
    "destinationName"
).textContent = destinationName;


// Set description

document.getElementById(
    "destinationDescription"
).textContent = destination.description;


// Set best time

document.getElementById(
    "bestTime"
).textContent = destination.bestTime;


// Set places

document.getElementById(
    "placesToVisit"
).textContent = destination.places;


// Set modal title

document.getElementById(
    "destinationTitle"
).textContent =
    destinationName + " Details";


// Open Bootstrap Modal

const modalElement =
    document.getElementById(
        "destinationModal"
    );


const modal =
    new bootstrap.Modal(modalElement);


modal.show();

}

// =====================================================
// NAVBAR MOBILE MENU
// =====================================================

const navLinks =
document.querySelectorAll(
".navbar .nav-link"
);

navLinks.forEach(function (link) {

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


            navbarButton.click();

        }

    }
);

});

// =====================================================
// PAGE LOAD
// =====================================================

document.addEventListener(
"DOMContentLoaded",
function () {

    console.log(
        "Destination page loaded successfully!"
    );

}

);
