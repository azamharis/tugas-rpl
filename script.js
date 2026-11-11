
// =================================
// 1. HAMBURGER MENU
// =================================

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function() {
    navMenu.classList.toggle("active");
});

// Tutup menu setelah link diklik
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
    });
});


// =================================
// 2. TESTIMONIAL SLIDER
// =================================

const testimonials = document.querySelectorAll(".testimonial");

let currentSlide = 0;

function showSlide(index) {
    testimonials.forEach(item => {
        item.classList.remove("active");
    });

    testimonials[index].classList.add("active");
}

document.getElementById("next").addEventListener("click", function() {
    currentSlide++;

    if (currentSlide >= testimonials.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
});

document.getElementById("prev").addEventListener("click", function() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = testimonials.length - 1;
    }

    showSlide(currentSlide);
});

// Ganti testimoni otomatis setiap 5 detik
setInterval(function() {
    currentSlide++;

    if (currentSlide >= testimonials.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}, 5000);


// =================================
// 3. FORM VALIDATION + WHATSAPP
// =================================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("form-message");

    if (name === "" || phone === "" || message === "") {

        formMessage.style.color = "red";
        formMessage.textContent = "Semua kolom wajib diisi!";

        return;
    }

    // Validasi nomor HP
    if (!/^[0-9+\-\s]{9,16}$/.test(phone)) {
        formMessage.style.color = "red";
        formMessage.textContent = "Nomor HP tidak valid!";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Menghubungkan ke WhatsApp...";

    // GANTI DENGAN NOMOR WHATSAPP USAHA
    const whatsappNumber = "628xxxxxxxxxx";

    const whatsappMessage =
        "Halo FreshWash Laundry!" +
        "\nNama: " + name +
        "\nNo HP: " + phone +
        "\nPertanyaan: " + message;

    const whatsappURL =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

});
