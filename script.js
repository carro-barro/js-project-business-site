const hamMenu = document.getElementById("hamMenu")
const hamMenuLinks = document.getElementById("hamMenuLinks")

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active")
  hamMenuLinks.classList.toggle("show")
})

