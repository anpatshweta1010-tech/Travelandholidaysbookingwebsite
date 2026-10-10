// =====================================================
//              BOOK NOW JAVASCRIPT
// =====================================================

// =====================================================
// PACKAGE DATA
// =====================================================

const bookingPackages = {

goa: {
    name: "Goa Beach Escape",
    location: "Goa",
    duration: "3 Days / 2 Nights",
    rating: "⭐ 4.8",
    price: 7999,
    image: "images/goa.jpg"
},

manali: {
    name: "Manali Mountain Trip",
    location: "Manali",
    duration: "4 Days / 3 Nights",
    rating: "⭐ 4.7",
    price: 9999,
    image: "images/manali.jpg"
},

kashmir: {
    name: "Kashmir Valley Escape",
    location: "Kashmir",
    duration: "5 Days / 4 Nights",
    rating: "⭐ 4.9",
    price: 12999,
    image: "images/kashmir.jpg"
},

jaipur: {
    name: "Royal Jaipur Journey",
    location: "Jaipur",
    duration: "3 Days / 2 Nights",
    rating: "⭐ 4.8",
    price: 6999,
    image: "images/jaipur.jpg"
},

agra: {
    name: "Agra Heritage Tour",
    location: "Agra",
    duration: "2 Days / 1 Night",
    rating: "⭐ 4.7",
    price: 5999,
    image: "images/agra.jpg"
},

delhi: {
    name: "Delhi City Explorer",
    location: "New Delhi",
    duration: "2 Days / 1 Night",
    rating: "⭐ 4.6",
    price: 5499,
    image: "images/new-delhi.jpg"
},

kerala: {
    name: "Kerala Backwater Escape",
    location: "Kerala",
    duration: "4 Days / 3 Nights",
    rating: "⭐ 4.9",
    price: 10999,
    image: "images/kerala-backwater.jpg"
},

amritsar: {
    name: "Amritsar Cultural Tour",
    location: "Amritsar",
    duration: "2 Days / 1 Night",
    rating: "⭐ 4.8",
    price: 5999,
    image: "images/amritsar2.jpg"
}

};

// =====================================================
// GET SELECTED PACKAGE
// =====================================================

const urlParams =
new URLSearchParams(window.location.search);

const packageId =
urlParams.get("package");

// Travel-option booking data (Airplane / Bus / Cab / Train)
const travelType = urlParams.get("travelType");
const travelService = urlParams.get("serviceName");
const travelFrom = urlParams.get("from");
const travelTo = urlParams.get("to");
const travelDate = urlParams.get("travelDate");
const travelPrice = Number(urlParams.get("travelPrice"));

// Default package

let selectedPackage =
bookingPackages[packageId] ||
bookingPackages.goa;

// If the booking came from the Home-page travel availability section,
// use that selected travel service instead of the default package.
if (travelType && travelService && travelFrom && travelTo && travelPrice > 0) {

    const travelNames = {
        airplane: "Airplane",
        bus: "Bus",
        cab: "Cab",
        train: "Train"
    };

    selectedPackage = {
        name: travelService + " - " + travelNames[travelType],
        location: travelFrom + " → " + travelTo,
        duration: "Travel service",
        rating: "Availability confirmed",
        price: travelPrice,
        image: "images/home.jpg"
    };

}

// =====================================================
// LOAD PACKAGE INFORMATION
// =====================================================

function loadPackage() {

document.getElementById(
    "summaryName"
).textContent =
    selectedPackage.name;


document.getElementById(
    "summaryLocation"
).textContent =
    "📍 " + selectedPackage.location;


document.getElementById(
    "summaryDuration"
).textContent =
    selectedPackage.duration;


document.getElementById(
    "summaryRating"
).textContent =
    selectedPackage.rating;


document.getElementById(
    "pricePerPerson"
).textContent =
    formatPrice(selectedPackage.price);


document.getElementById(
    "summaryImage"
).src =
    selectedPackage.image;


calculateTotal();

}

// =====================================================
// FORMAT PRICE
// =====================================================

function formatPrice(price) {

return "₹" +
    price.toLocaleString("en-IN");

}

// =====================================================
// CALCULATE TOTAL
// =====================================================

function calculateTotal() {

let adults =
    parseInt(
        document.getElementById("adults").value
    ) || 1;


let children =
    parseInt(
        document.getElementById("children").value
    ) || 0;


// Children are charged 50%

let adultTotal =
    adults * selectedPackage.price;


let childTotal =
    children *
    (selectedPackage.price * 0.5);


let total =
    adultTotal + childTotal;


document.getElementById(
    "adultCount"
).textContent =
    adults;


document.getElementById(
    "childCount"
).textContent =
    children;


document.getElementById(
    "totalAmount"
).textContent =
    formatPrice(total);

}

// =====================================================
// ADULT / CHILD CHANGE
// =====================================================

document.getElementById("adults")
.addEventListener(
"input",
calculateTotal
);

document.getElementById("children")
.addEventListener(
"input",
calculateTotal
);

// =====================================================
// SET MINIMUM TRAVEL DATE
// =====================================================

const today =
new Date().toISOString().split("T")[0];

document.getElementById(
"travelDate"
).setAttribute(
"min",
today
);

// Pre-fill the booking form when the user comes from Travel Availability.
if (travelDate) {
    document.getElementById("travelDate").value = travelDate;
}

if (travelFrom) {
    document.getElementById("pickup").value = travelFrom;
}

// =====================================================
// CLEAR ERRORS
// =====================================================

function clearErrors() {

document.getElementById(
    "nameError"
).textContent = "";


document.getElementById(
    "emailError"
).textContent = "";


document.getElementById(
    "mobileError"
).textContent = "";


document.getElementById(
    "dateError"
).textContent = "";


document.getElementById(
    "pickupError"
).textContent = "";

}

// =====================================================
// FORM SUBMIT
// =====================================================

document.getElementById(
"bookingForm"
).addEventListener(
"submit",
function(event) {

    event.preventDefault();


    clearErrors();


    // Get values

    const name =
        document.getElementById(
            "fullName"
        ).value.trim();


    const email =
        document.getElementById(
            "email"
        ).value.trim();


    const mobile =
        document.getElementById(
            "mobile"
        ).value.trim();


    const adults =
        parseInt(
            document.getElementById(
                "adults"
            ).value
        );


    const children =
        parseInt(
            document.getElementById(
                "children"
            ).value
        );


    const travelDate =
        document.getElementById(
            "travelDate"
        ).value;


    const pickup =
        document.getElementById(
            "pickup"
        ).value.trim();


    const specialRequest =
        document.getElementById(
            "specialRequest"
        ).value.trim();



    // ================= VALIDATION =================


    let valid = true;


    // Name

    if (name.length < 3) {

        document.getElementById(
            "nameError"
        ).textContent =
            "Please enter your full name.";

        valid = false;

    }



    // Email

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        document.getElementById(
            "emailError"
        ).textContent =
            "Please enter a valid email.";

        valid = false;

    }



    // Mobile

    const mobilePattern =
        /^[6-9][0-9]{9}$/;


    if (!mobilePattern.test(mobile)) {

        document.getElementById(
            "mobileError"
        ).textContent =
            "Enter a valid 10 digit mobile number.";

        valid = false;

    }



    // Adults

    if (
        isNaN(adults) ||
        adults < 1
    ) {

        valid = false;

    }



    // Children

    if (
        isNaN(children) ||
        children < 0
    ) {

        valid = false;

    }



    // Travel date

    if (!travelDate) {

        document.getElementById(
            "dateError"
        ).textContent =
            "Please select your travel date.";

        valid = false;

    }



    // Pickup

    if (pickup.length < 2) {

        document.getElementById(
            "pickupError"
        ).textContent =
            "Please enter pickup location.";

        valid = false;

    }



    // Stop if invalid

    if (!valid) {

        return;

    }



    // =================================================
    // CALCULATE FINAL AMOUNT
    // =================================================

    const total =
        (
            adults *
            selectedPackage.price
        )
        +
        (
            children *
            selectedPackage.price *
            0.5
        );



    // =================================================
    // GENERATE BOOKING ID
    // =================================================

    const bookingId =
        "TH" +
        Date.now()
            .toString()
            .slice(-8);



    // =================================================
    // BOOKING OBJECT
    // =================================================

    const booking = {

        bookingId: bookingId,

        packageName:
            selectedPackage.name,

        location:
            selectedPackage.location,

        duration:
            selectedPackage.duration,

        name: name,

        email: email,

        mobile: mobile,

        adults: adults,

        children: children,

        travelDate: travelDate,

        pickup: pickup,

        specialRequest:
            specialRequest,

        totalAmount: total,

        bookingDate:
            new Date().toLocaleString()

    };



    // =================================================
    // SAVE BOOKING
    // =================================================

    localStorage.setItem(
        "travelBooking",
        JSON.stringify(booking)
    );



    // =================================================
    // SHOW CONFIRMATION
    // =================================================

    document.getElementById(
        "bookingId"
    ).textContent =
        bookingId;


    document.getElementById(
        "confirmPackage"
    ).textContent =
        selectedPackage.name;


    document.getElementById(
        "confirmDate"
    ).textContent =
        travelDate;


    document.getElementById(
        "confirmTravellers"
    ).textContent =
        adults +
        " Adult(s), " +
        children +
        " Child(ren)";


    document.getElementById(
        "confirmTotal"
    ).textContent =
        formatPrice(total);



    // =================================================
    // OPEN SUCCESS MODAL
    // =================================================

    const successModal =
        new bootstrap.Modal(
            document.getElementById(
                "successModal"
            )
        );


    successModal.show();


    // Reset form

    document.getElementById(
        "bookingForm"
    ).reset();


    document.getElementById(
        "adults"
    ).value = 1;


    document.getElementById(
        "children"
    ).value = 0;


    calculateTotal();

}

);

// =====================================================
// PAGE LOAD
// =====================================================

document.addEventListener(
"DOMContentLoaded",
function() {

    loadPackage();

    console.log(
        "Book Now page loaded successfully!"
    );

}

);