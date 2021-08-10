//ctrl a sipky sa posuvam po slovach, ctrl end a home je zaciatok a koniec page,

// a iba end a home zaciatok a koniec v riadku

//win shif S  je screenshot

/////////////////print btn
let btn = document.querySelector(".bx-printer")
btn.onclick = () => {
  window.print()
}

///////NAV TOGGLE

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu")
    })
  }
}

showMenu("nav-toggle", "nav-menu")
const navLink = document.querySelectorAll(".nav__link")
function linkAction() {
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.remove("show-menu")
}
navLink.forEach((n) => n.addEventListener("click", linkAction))

////// SCROLL SECTION

const sections = document.querySelectorAll("sections[id]")
function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute("id")
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link")
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link")
    }
  })
}
window.addEventListener("scroll", scrollActive)

//////////show scrollTop

function scrollTop() {
  const scrollTop = document.getElementById("scroll")
  if (this.scrollY >= 200) {
    scrollTop.classList.add("show-scroll")
  } else scrollTop.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollTop)
