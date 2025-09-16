const hamMenu = document.getElementById("hamMenu")
const hamMenuLinks = document.getElementById("hamMenuLinks")

hamMenu.addEventListener("click", () => {
  hamMenuLinks.classList.toggle("show")
})
