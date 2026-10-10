/* =====================================================
   TRAVEL OPTIONS - HOME PAGE
   Availability is demo data for the college project.
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const modalElement = document.getElementById("travelAvailabilityModal");
    const searchForm = document.getElementById("travelSearchForm");
    const results = document.getElementById("travelResults");
    const fromInput = document.getElementById("travelFrom");
    const toInput = document.getElementById("travelTo");
    const dateInput = document.getElementById("travelDateSearch");
    const modalTitle = document.getElementById("travelModalTitle");

    if (!modalElement || !searchForm || !results) return;

    const modal = new bootstrap.Modal(modalElement);
    let selectedTravelType = "airplane";

    const travelData = {
        airplane: {
            title: "Flight Availability",
            icon: "✈️",
            items: [
                { name: "IndiGo", code: "6E 521", time: "08:30 AM", duration: "2h 05m", price: 4999 },
                { name: "Air India", code: "AI 851", time: "11:20 AM", duration: "2h 10m", price: 5450 },
                { name: "Akasa Air", code: "QP 132", time: "04:15 PM", duration: "2h 00m", price: 4599 }
            ]
        },
        bus: {
            title: "Bus Availability",
            icon: "🚌",
            items: [
                { name: "Volvo AC Sleeper", code: "VRL Travels", time: "09:00 PM", duration: "12h", price: 1199 },
                { name: "AC Seater", code: "Neeta Travels", time: "07:30 PM", duration: "11h 30m", price: 899 },
                { name: "AC Sleeper", code: "Purple Bus", time: "10:15 PM", duration: "12h 15m", price: 1049 }
            ]
        },
        cab: {
            title: "Cab Availability",
            icon: "🚕",
            items: [
                { name: "Sedan Cab", code: "4 Seats", time: "Available Now", duration: "Door-to-door", price: 2499 },
                { name: "SUV Cab", code: "6 Seats", time: "Available Now", duration: "Door-to-door", price: 3499 },
                { name: "Premium Cab", code: "4 Seats", time: "Available Now", duration: "Door-to-door", price: 4299 }
            ]
        },
        train: {
            title: "Train Availability",
            icon: "🚆",
            items: [
                { name: "Rajdhani Express", code: "2A / 3A", time: "05:30 PM", duration: "16h", price: 1850 },
                { name: "Duronto Express", code: "2A / 3A", time: "11:10 PM", duration: "15h 40m", price: 1650 },
                { name: "Superfast Express", code: "SL / 3A", time: "07:45 AM", duration: "18h", price: 1250 }
            ]
        }
    };

    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;

    document.querySelectorAll(".travel-option-card").forEach(function (card) {
        card.addEventListener("click", function () {
            selectedTravelType = card.dataset.travelType;
            const data = travelData[selectedTravelType];
            modalTitle.textContent = data.title;
            results.innerHTML = "";
            searchForm.reset();
            dateInput.min = today;
            modal.show();
        });
    });

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const from = fromInput.value.trim();
        const to = toInput.value.trim();
        const date = dateInput.value;
        const data = travelData[selectedTravelType];

        if (!from || !to || !date) return;

        results.innerHTML = `
            <h5 class="travel-results-title">
                ${data.icon} Available ${data.title.replace(" Availability", "")} from ${escapeHtml(from)} to ${escapeHtml(to)}
            </h5>
        `;

        data.items.forEach(function (item) {
            const card = document.createElement("div");
            card.className = "travel-result-card";

            card.innerHTML = `
                <div class="travel-result-main">
                    <h5>${escapeHtml(item.name)}</h5>
                    <div class="travel-result-route">${escapeHtml(from)} → ${escapeHtml(to)}</div>
                    <div class="travel-result-meta">
                        ${escapeHtml(item.code)} &nbsp; • &nbsp; ${escapeHtml(item.time)} &nbsp; • &nbsp; ${escapeHtml(item.duration)}
                    </div>
                </div>
                <div>
                    <div class="travel-result-price">₹${item.price.toLocaleString("en-IN")}</div>
                    <button type="button" class="btn btn-primary btn-sm travel-book-btn">
                        Book Now
                    </button>
                </div>
            `;

            card.querySelector(".travel-book-btn").addEventListener("click", function () {
                const params = new URLSearchParams({
                    travelType: selectedTravelType,
                    serviceName: item.name,
                    serviceCode: item.code,
                    from: from,
                    to: to,
                    travelDate: date,
                    travelPrice: String(item.price)
                });

                window.location.href = "book-now.html?" + params.toString();
            });

            results.appendChild(card);
        });
    });

    function escapeHtml(value) {
        return value.replace(/[&<>'"]/g, function (char) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;"
            }[char];
        });
    }

});
