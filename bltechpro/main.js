console.log("hello");

const announcementBar = document.getElementById("announcementBar")
const btnCloseAnnounce = document.getElementById("btn-close-announce")

const btnDark = document.getElementById("btn-dark")
const btnLight = document.getElementById("btn-light")


btnCloseAnnounce.addEventListener("click", () => {
    announcementBar.style.display = "none"
});

// let lightDarkMode = false

// btnLight.addEventListener("click", () => {
//     btnLight.style.display = "none"
//     btnDark.style.display = "block"
// })

// btnDark.addEventListener("click", () => {
//     btnDark.style.display = "none"
//     btnLight.style.display = "block"
// })






