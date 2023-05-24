import "./style.css";

import Alpine from "alpinejs";
window.Alpine = Alpine;
Alpine.start();

/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

// COOKIE BOKS
const acceptCookie = document.querySelector("#accepter");
const denyCookie = document.querySelector("#afvis");
const cookieboks = document.querySelector("#cookieboks");

acceptCookie.addEventListener("click", fjernCookieBoks);
denyCookie.addEventListener("click", fjernCookieBoks);

function fjernCookieBoks() {
  cookieboks.classList.add("hidden");
  sessionStorage.setItem("fjerncookieboks", true);
}
if (sessionStorage.getItem("fjerncookieboks")) {
  cookieboks.classList.add("hidden");
}
