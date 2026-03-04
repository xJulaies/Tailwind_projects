export function submitForm() {
  const licenceInput = document.querySelector("#form-licence-plate");
  const phoneInput = document.querySelector("#form-phone");
  const emailInput = document.querySelector("#form-mail");
  const postalCodeInput = document.querySelector("#form-postal-code");
  const agbInput = document.querySelector("#form-agb");

  const licenceHint = document.querySelector(
    "#form-licence-plate + .validator-hint",
  );
  const phoneHint = document.querySelector("#form-phone + .validator-hint");
  const emailHint = document.querySelector("#form-mail + .validator-hint");
  const postalCodeHint = document.querySelector(
    "#form-postal-code + .validator-hint",
  );
  const agbHint = document.querySelector("#form-agb + .validator-hint");

  const licencePlateRegex = /^[A-ZÖÜÄ]{1,3} [A-ZÖÜÄ]{1,2} [1-9]{1}[0-9]{1,3}$/;
  const phoneRegex = /^(\+49[1-9]\d{7,11}|0[1-9]\d{8,11})$/;
  const emailRegex = /^[a-zA-Z0-9äöüÄÖÜß._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const postalCodeRegex = /^\d{5}$/;

  let hasError = false;

  function validateEmptyFields() {
    const emptyFields = document.querySelectorAll(".empty-field");
    emptyFields.forEach((input) => {
      if (input.value.trim() === "") {
        const hint = input.nextElementSibling;
        hint.classList.remove("hidden");
        hint.style.visibility = "visible";
        input.classList.add("input-error");
        hasError = true;
      } else {
        const hint = input.nextElementSibling;
        input.classList.remove("input-error");
        hint.classList.add("hidden");
      }
    });
    return !hasError;
  }

  function validateLicencePlate() {
    const value = licenceInput.value.trim();
    if (value === "" || !licencePlateRegex.test(value)) {
      licenceHint.classList.remove("hidden");
      licenceInput.classList.add("input-error");
      licenceHint.style.visibility = "visible";
      return false;
    } else {
      console.log("licence: ok");
      licenceHint.classList.add("hidden");
      licenceInput.classList.remove("input-error");
      return true;
    }
  }

  function validatePhoneNumber() {
    const value = phoneInput.value.replace(/\s+/g, "").trim();
    if (value === "" || !phoneRegex.test(value)) {
      phoneHint.classList.remove("hidden");
      phoneInput.classList.add("input-error");
      phoneHint.style.visibility = "visible";
      return false;
    } else {
      console.log("phone: ok");
      phoneHint.classList.add("hidden");
      phoneInput.classList.remove("input-error");
      return true;
    }
  }

  function validateEmail() {
    const value = emailInput.value.trim();
    if (value === "" || !emailRegex.test(value)) {
      emailHint.classList.remove("hidden");
      emailInput.classList.add("input-error");
      emailHint.style.visibility = "visible";
      return false;
    } else {
      console.log("email: ok");
      emailHint.classList.add("hidden");
      emailInput.classList.remove("input-error");
      return true;
    }
  }

  function validatePostalCode() {
    const value = postalCodeInput.value.trim();
    if (value === "" || !postalCodeRegex.test(value)) {
      postalCodeHint.classList.remove("hidden");
      postalCodeInput.classList.add("input-error");
      postalCodeHint.style.visibility = "visible";
      return false;
    } else {
      console.log("postal code: ok");
      postalCodeHint.classList.add("hidden");
      postalCodeInput.classList.remove("input-error");
      return true;
    }
  }

  function validateAgb() {
    if (agbInput.checked === false) {
      agbHint.classList.remove("hidden");
      agbInput.classList.add("input-error");
      agbHint.style.visibility = "visible";
      return false;
    } else {
      console.log("agb: ok");
      agbHint.classList.add("hidden");
      agbInput.classList.remove("input-error");
      return true;
    }
  }

  if (!validateEmptyFields()) {
    console.log("no empty fields: false");
    hasError = true;
  }

  if (!validateLicencePlate()) {
    console.log("licence plate: not ok");
    hasError = true;
  }

  if (!validatePhoneNumber()) {
    console.log("phone: not ok");
    hasError = true;
  }

  if (!validateEmail()) {
    console.log("email: not ok");
    hasError = true;
  }

  if (!validatePostalCode()) {
    console.log("postal code: not ok");
    hasError = true;
  }

  if (!validateAgb()) {
    console.log("agb: not ok");
    hasError = true;
  }

  if (hasError) {
    console.log("can not submit yet");
    return false;
  } else {
    console.log("submitted!");
    return true;
  }
}
