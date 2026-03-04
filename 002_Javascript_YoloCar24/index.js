import { createCards } from "./src/scripts/createCard.js";
import { products } from "./src/scripts/createProducts.js";
import { services } from "./src/scripts/createService.js";
import { showToast } from "./src/scripts/toast.js";
import { submitForm } from "./src/scripts/form.js";
import {
  contracts,
  saveContracts,
  loadContracts,
} from "./src/scripts/createContracts.js";

const logo = document.querySelector("#logo");

//shop.html
const serviceSection = document.querySelector("#service-section");
const replacementsSection = document.querySelector("#replacements-section");

const formSection = document.querySelector("#form-section");
const error = document.querySelector("#error-hint");

const loginSection = document.querySelector("#login-section");
const dashboardSection = document.querySelector("#dashboard-section");

const darkmodeToggle1 = document.querySelector("#dark-mode-toggle-1");
const darkmodeToggle2 = document.querySelector("#dark-mode-toggle-2");
const STORAGE_KEY = "darkModeState";
const darkmode = localStorage.getItem(STORAGE_KEY);

const total_displayed_price = document.querySelector("#total-price");
const drawer = document.querySelector("#shop-items");

const loginBtn = document.querySelector("#login-btn");
const username = document.querySelector("#login-username");
const password = document.querySelector("#login-password");

//darkmode toggle

function loadDarkMode() {
  const isDark = darkmode === "true";

  darkmodeToggle1.checked = isDark;
  darkmodeToggle2.checked = isDark;

  logo.src = isDark ? "./src/img/Car-Logo-White.png" : "./src/img/Car-Logo.png";
}

darkmodeToggle1.addEventListener("change", () => {
  const newState = darkmode === "false" ? "true" : "false";

  localStorage.setItem(STORAGE_KEY, newState);
  darkmodeToggle2.checked = darkmodeToggle1.checked;

  logo.src =
    newState === "true"
      ? "./src/img/Car-Logo-White.png"
      : "./src/img/Car-Logo.png";
});

darkmodeToggle2.addEventListener("change", () => {
  const newState = darkmode === "false" ? "true" : "false";

  localStorage.setItem(STORAGE_KEY, newState);
  darkmodeToggle1.checked = darkmodeToggle2.checked;

  logo.src =
    newState === "true"
      ? "./src/img/Car-Logo-White.png"
      : "./src/img/Car-Logo.png";
});

loadDarkMode();

if (replacementsSection) {
  createCards.createReplacementsCard(products);
}
if (serviceSection) {
  createCards.createServicesCard(services);
}

//add service items to the cart
const service_btn = document.querySelectorAll(".book-service-btn");
const parts_btn = document.querySelectorAll(".buy-parts-btn");
let total_price = 0;
service_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let price = parseFloat(btn.dataset.price);
    let mwst = price * 0.19;
    let counter = 1;
    const p = document.createElement("p");
    p.textContent = `${btn.dataset.name} x ${counter}`;
    total_price += price + mwst;
    const message = `du hast ${btn.dataset.name} für ${btn.dataset.price}€ hinzugefügt.\n Dein Gesamtpreis beträgt ${total_price.toFixed(2)}€ inkl. MwSt.`;
    showToast(message);

    drawer.append(p);
    total_displayed_price.textContent = `Gesamtsumme inkl. MwSt: ${total_price.toFixed(2)}€`;
  });
});

//add product items to the cart

parts_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let price = parseFloat(btn.dataset.price);
    let mwst = price * 0.19;
    let counter = 1;
    const p = document.createElement("p");
    p.textContent = `${btn.dataset.name} x ${counter}`;
    total_price += price + mwst;
    const message = `du hast ${btn.dataset.name} für ${btn.dataset.price}€ hinzugefügt.\n Dein Gesamtpreis beträgt ${total_price.toFixed(2)}€ inkl. MwSt.`;
    showToast(message);

    drawer.append(p);
    total_displayed_price.textContent = `Gesamtsumme inkl. MwSt: ${total_price.toFixed(2)}€`;
  });
});

//logic for radio filter functionality
const radios = document.querySelectorAll(".radio");
const productCards = document.querySelectorAll(".product");

radios.forEach((radio) => {
  const filterValue = radio.value;

  radio.addEventListener("change", () => {
    productCards.forEach((product) => {
      const productType = product.dataset.type;

      if (filterValue === "all") {
        product.style.display = "flex";
      } else if (filterValue === productType) {
        product.style.display = "flex";
      } else if (
        filterValue === "in-stock" &&
        product.dataset.inStock === "true"
      ) {
        product.style.display = "flex";
      } else {
        product.style.display = "none";
      }
    });
  });
  radio.addEventListener("click", () => {
    if (radio.dataset.wasChecked === "true") {
      radio.checked = false;
      radio.dataset.wasChecked = "false";
    } else {
      radio.dataset.wasChecked = "true";
    }
  });
});

const yoloBtn = document.querySelector("#yolo-btn");
if (formSection) {
  yoloBtn.addEventListener("click", () => {
    if (submitForm()) {
      alert("Deine Daten wurden erfolgreich versendet");
    }
  });
}

//admin login

if (loginSection) {
  loginBtn.addEventListener("click", () => {
    if (username.value !== "admin" || password.value !== "admin") {
      error.classList.remove("hidden");
      username.classList.add("input-error");
      password.classList.add("input-error");
      error.style.visibility = "visible";
      console.log("failed to login");
    } else {
      error.classList.add("hidden");
      username.classList.remove("input-error");
      password.classList.remove("input-error");
      console.log("login successful");
      localStorage.setItem("loggedIn", "true");
      setTimeout(() => {
        window.location.href = "admin.html";
      }, 800);
    }
  });
}

//admin dashboard

if (dashboardSection) {
  loadContracts();
  console.log("default", contracts);
  createCards.createContractRow(contracts);

  document.addEventListener("change", (e) => {
    if (e.target.matches(".status-select")) {
      const id = e.target.dataset.id;
      const newStatus = e.target.value;
      const contract = contracts.find((c) => c.id === id);
      if (contract) {
        contract.status = newStatus;
        saveContracts();
        createCards.createContractRow(contracts);
        console.log(`Status geändert: ${id} → ${newStatus}`);
      }
    }
  });
}
