
const video = document.getElementById("video");


 video.addEventListener("mouseover", () => {
    video.play()
});

video.addEventListener("click", () => {
    video.play()
})

video.addEventListener("mouseout", () => {
    video.pause()
});



