const video = document.getElementById("danceVideo");
const label = document.getElementById("soundLabel");

video.addEventListener("click", () => {
    video.muted = !video.muted;

    if (video.muted) {
        label.textContent = "CLICK FOR SOUND";
    } else {
        label.textContent = "SOUND ON";
    }
});