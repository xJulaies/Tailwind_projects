import { Contract } from "./contractConstructor.js";

export const contracts = [];

contracts.push(
  new Contract(
    "001",
    "Max Mustermann",
    "BMW X5",
    "Lack-YOLO",
    "2026-02-20",
    "Offen",
  ),
);

contracts.push(
  new Contract(
    "002",
    "Anna Schmidt",
    "VW Golf GTI",
    "YOLO-Ölwechsel",
    "2026-02-22",
    "In Arbeit",
  ),
);

contracts.push(
  new Contract(
    "003",
    "Peter Müller",
    "Audi A4 Avant",
    "Motor-Rumbler",
    "2026-02-23",
    "Offen",
  ),
);

contracts.push(
  new Contract(
    "004",
    "Lisa Weber",
    "Mercedes C 200",
    "Bremsen-Express",
    "2026-02-24",
    "Abgeschlossen",
  ),
);

contracts.push(
  new Contract(
    "005",
    "Tom Berger",
    "Opel Astra K",
    "Turbo-Boost-Tuning",
    "2026-02-25",
    "In Arbeit",
  ),
);

export function saveContracts() {
  localStorage.setItem("contracts", JSON.stringify(contracts));
}

export function loadContracts() {
  const savedString = localStorage.getItem("contracts");
  if (savedString) {
    const savedContracts = JSON.parse(savedString);
    savedContracts.forEach((savedContract) => {
      const contract = contracts.find((c) => c.id === savedContract.id);
      if (contract) contract.status = savedContract.status;
    });
  } else {
    saveContracts();
  }
}
