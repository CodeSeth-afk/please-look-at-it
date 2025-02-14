// script.js
for (let i = 1; i <= 8; i++) {
    document.write(`<img src="${i}.jpg" alt="Image ${i}" onclick="showPopup(this)">`);
}

function showPopup(img) {
    document.getElementById("popup-img").src = img.src;
    document.querySelector(".popup").classList.add("active");
}

function hidePopup() {
    document.querySelector(".popup").classList.remove("active");
}

function showAd() {
    var ad = document.getElementById("fake-ad");
    var overlay = document.getElementById("overlay");
    ad.style.display = "block";
    overlay.style.display = "block";
}

function closeAd() {
    document.getElementById("fake-ad").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    setTimeout(showAd, 5000);
}

let video = document.getElementById("video-player");
video.play();

video.addEventListener("ended", function () {
    video.currentTime = 0; // Reset to the start
    video.play(); // Play again
});

// Function to create a new popup when clicking "អត់ស្រឡាញ់"
function addMorePopups() {
    alert("ចុច​អត់ដើរ ហា​ 😸😂!! ចុច ស្រឡាញ់មើល​ ");
}




setTimeout(showAd, 10000);