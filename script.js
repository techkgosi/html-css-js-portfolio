function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const CERT_AUTOPLAY_DELAY = 5000;

function restartCertDotAnimation() {
    const pagination = document.querySelector("#certification .cert-slider-pagination");
    if (!pagination) return;

    pagination.style.setProperty(
        "--cert-autoplay-duration",
        `${CERT_AUTOPLAY_DELAY}ms`
    );

    pagination.querySelectorAll(".swiper-pagination-bullet").forEach((bullet) => {
        bullet.classList.remove("cert-dot-animate");
    });

    const active = pagination.querySelector(".swiper-pagination-bullet-active");
    if (!active) return;

    void active.offsetWidth;
    active.classList.add("cert-dot-animate");
}

function equalizeCertCardHeights() {
    const cards = document.querySelectorAll("#certification .cert-card");
    if (!cards.length) return;

    cards.forEach((card) => {
        card.style.height = "auto";
    });

    let maxHeight = 0;
    cards.forEach((card) => {
        maxHeight = Math.max(maxHeight, card.offsetHeight);
    });

    cards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
    });
}

const certSlider = document.querySelector(".cert-slider-wrapper");

if (certSlider) {
    new Swiper(".cert-slider-wrapper", {
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: CERT_AUTOPLAY_DELAY,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: "#certification .cert-slider-pagination",
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 1,
        },
        navigation: {
            nextEl: "#certification .cert-slider-nav.swiper-button-next",
            prevEl: "#certification .cert-slider-nav.swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
        on: {
            init() {
                equalizeCertCardHeights();
                restartCertDotAnimation();
            },
            resize() {
                equalizeCertCardHeights();
            },
            slideChangeTransitionStart() {
                restartCertDotAnimation();
            },
            slideChangeTransitionEnd() {
                equalizeCertCardHeights();
            },
            paginationUpdate() {
                restartCertDotAnimation();
            },
        },
    });

    window.addEventListener("resize", equalizeCertCardHeights);

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(equalizeCertCardHeights);
    }
}
