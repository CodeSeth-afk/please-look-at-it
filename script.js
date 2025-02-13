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
    setTimeout(showAd, Math.random() * 5000 + 3000);
}

setTimeout(showAd, 3000);