function openModal(imgSrc) {
    const modal = document.getElementById("imageModal");
    const fullImg = document.getElementById("fullImg");
    modal.style.display = "block";
    fullImg.src = imgSrc;
}

// Close modal when clicking 'x'
document.querySelector(".close").onclick = function() {
    document.getElementById("imageModal").style.display = "none";
}