import { Product } from "./productsConstructor.js";

export class createCards {
  static createReplacementsCard(products) {
    products.forEach((product) => {
      const main = document.querySelector("#replacements-section");
      const inStock = Product.inStock(product);
      const cardContainer = document.createElement("div");
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const cardBody = document.createElement("div");
      const productName = document.createElement("h2");
      const productInfo = document.createElement("p");
      const cardActions = document.createElement("div");
      const badge = document.createElement("div");
      const cardBtn = document.createElement("button");
      cardBtn.setAttribute(
        "aria-label",
        "Der Knopf, der das Produkt zum Warenkorb hinzuzufügt",
      );

      cardContainer.classList.add(
        "card",
        "bg-base-100",
        "w-96",
        "shadow-sm",
        "product",
      );
      cardContainer.dataset.type = product.type;
      cardBody.classList.add("card-body");
      productName.classList.add("card-title");
      cardActions.classList.add("card-actions", "p-4");
      cardBtn.classList.add("btn", "btn-primary", "buy-parts-btn");
      img.classList.add("max-w-40", "p-2");
      badge.classList.add(
        "text-4xl",
        "text-accent",
        "p-5",
        "font-bold",
        "badge",
        "badge-outline",
      );

      img.src = product.img;
      img.alt = product.alt;
      productName.textContent = product.name;
      productInfo.textContent = product.info;
      badge.textContent = product.price + "€";
      if (inStock === true) {
        cardBtn.textContent = "In den Warenkorb";
        cardBtn.dataset.price = product.price;
        cardBtn.dataset.name = product.name;
        cardContainer.dataset.inStock = true;
      } else {
        cardBtn.textContent = "Nicht mehr auf Lager";
        cardContainer.dataset.inStock = false;
      }

      figure.append(img);
      cardActions.append(cardBtn);
      cardActions.append(badge);

      cardBody.append(productName);
      cardBody.append(productInfo);
      cardBody.append(cardActions);

      cardContainer.append(figure);
      cardContainer.append(cardBody);
      cardContainer.append(cardActions);

      main.append(cardContainer);
    });
  }
  static createServicesCard(services) {
    services.forEach((service) => {
      const main = document.querySelector("#service-section");
      const cardContainer = document.createElement("div");
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const cardBody = document.createElement("div");
      const serviceName = document.createElement("h2");
      const serviceInfo = document.createElement("p");
      const cardActions = document.createElement("div");
      const badge = document.createElement("div");
      const cardBtn = document.createElement("button");
      cardBtn.setAttribute(
        "aria-label",
        "Der Knopf, der das Produkt zum Warenkorb hinzuzufügt",
      );
      cardContainer.classList.add("card", "bg-base-100", "w-96", "shadow-sm");
      cardContainer.dataset.type = service.type;
      cardBody.classList.add("card-body");
      serviceName.classList.add("card-title");
      cardActions.classList.add("card-actions", "p-4");
      cardBtn.classList.add("btn", "btn-primary", "book-service-btn");
      img.classList.add("max-w-40", "p-2");
      cardBtn.textContent = "Jetzt buchen!";
      cardBtn.dataset.price = service.price;
      cardBtn.dataset.name = service.name;
      badge.classList.add(
        "text-4xl",
        "text-accent",
        "p-5",
        "font-bold",
        "badge",
        "badge-outline",
      );

      img.src = service.img;
      img.alt = service.alt;
      serviceName.textContent = service.name;
      serviceInfo.textContent = service.info;
      badge.textContent = service.price + "€";

      figure.append(img);
      cardActions.append(cardBtn);
      cardActions.append(badge);

      cardBody.append(serviceName);
      cardBody.append(serviceInfo);
      cardBody.append(cardActions);

      cardContainer.append(figure);
      cardContainer.append(cardBody);
      cardContainer.append(cardActions);

      main.append(cardContainer);
    });
  }
  static createContractRow(contracts) {
    const main = document.querySelector("#tbody");
    main.innerHTML = "";
    contracts.forEach((contract) => {
      const id = document.createElement("tr");
      const name = document.createElement("td");
      const car = document.createElement("td");
      const service = document.createElement("td");
      const date = document.createElement("td");
      const status = document.createElement("td");

      id.textContent = contract.id;
      name.textContent = contract.name;
      car.textContent = contract.car;
      service.textContent = contract.service;
      date.textContent = contract.date;

      const badge = document.createElement("span");
      badge.className = `badge ${
        contract.status === "Abgeschlossen"
          ? "badge-success min-w-20"
          : contract.status === "In Arbeit"
            ? "badge-warning"
            : "badge-error"
      }`;
      badge.textContent = contract.status;

      const select = document.createElement("select");
      select.className = "select select-xs status-select mt-1 max-w-10";
      select.dataset.id = contract.id;

      const option1 = document.createElement("option");
      option1.value = "Offen";
      option1.textContent = "Offen";
      if (contract.status === "Offen") option1.selected = true;

      const option2 = document.createElement("option");
      option2.value = "In Arbeit";
      option2.textContent = "In Arbeit";
      if (contract.status === "In Arbeit") option2.selected = true;

      const option3 = document.createElement("option");
      option3.value = "Abgeschlossen";
      option3.textContent = "Abgeschlossen";
      if (contract.status === "Abgeschlossen") option3.selected = true;

      select.append(option1, option2, option3);
      status.append(badge, select);

      id.append(name, car, service, date, status);
      main.append(id);
    });
  }
}
