// Get background audio element
const audio = document.getElementById("background-music");
const playPauseButton = document.getElementById("play-pause-button");
const playIcon = document.getElementById("play-music");
const pauseIcon = document.getElementById("pause-music");

let isPlaying = false;
// Toggle play and pause of background music

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playIcon.classList.remove("hidden");
        pauseIcon.classList.add("hidden");
    } else {
        audio.play();
        playIcon.classList.add("hidden");
        pauseIcon.classList.remove("hidden");
    }
    isPlaying = !isPlaying;
}

playPauseButton.addEventListener("click", togglePlayPause);

// keep looping
audio.addEventListener("ended", function () {
    audio.currentTime = 0;
    audio.play();
});

// Swiper
const swiper = new Swiper(".swiper", {
    grabCursor: true,              // Cursor feedback
    initialSlide: 4,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 10,

    speed: 900,                    // Smooth animation
    loop: true,                    // Loop back to first slide

    autoplay: {                    // Auto slideshow
        delay: 3000,
        disableOnInteraction: false
    },

    pagination: {                  // Position feedback
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {                  // Arrow feedback
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
    }
});




// Particles
particlesJS("particles-js", {
    particles: {
        number: {
            value: 180,
            density: { enable: true, value_area: 800 },
        },
        color: { value: "#fff" },
        shape: { type: "circle" },
        opacity: {
            value: 0.3,
            anim: { enable: false },
        },
        size: {
            value: 4,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: { enable: false },
        move: {
            enable: true,
            speed: 0.4,
            direction: "right",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    retina_detect: true,
});
