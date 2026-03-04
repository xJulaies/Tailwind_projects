import { Service } from "./serviceConstructor.js";

export const services = [];

services.push(
  new Service(
    "001",
    "YOLO-Ölwechsel",
    "./src/img/Wrench.png",
    "Ein Schraubenschlüssel und Schraubendreher, überkreuzt",
    "Schnell und dreckig-Zeit zum Leben statt Warten!",
    80,
    "service",
  ),
);

services.push(
  new Service(
    "002",
    "Turbo-Boost-Tuning",
    "./src/img/Wrench.png",
    "Ein Schraubenschlüssel und Schraubendreher, überkreuzt",
    "Mehr PS, weniger Bremsweg - YOLO pur!",
    120,
    "service",
  ),
);

services.push(
  new Service(
    "003",
    "Reifen-Quickie",
    "./src/img/Wrench.png",
    "Ein Schraubenschlüssel und Schraubendreher, überkreuzt",
    "Glatte Pneus? Egal, Adrenalin-Overdose inklusive.",
    120,
    "service",
  ),
);

services.push(
  new Service(
    "004",
    "Bremsen-Express",
    "./src/img/Wrench.png",
    "Ein Schraubenschlüssel und Schraubendreher, überkreuzt",
    "Spät bremsen, intensiv leben – Sicherheit light.",
    70,
    "service",
  ),
);

services.push(
  new Service(
    "005",
    "Lack-YOLO",
    "./src/img/Wrench.png",
    "Ein Schraubenschlüssel und Schraubendreher, überkreuzt",
    "Kratzer als Charakter – Polieren? Zu langweilig!",
    90,
    "service",
  ),
);

services.push(
  new Service(
    "006",
    "Motor-Rumbler",
    "./src/img/Wrench.png",
    "Ein Schraubenschlüssel und Schraubendreher, überkreuzt",
    "Rumpelt laut? Freiheits-Soundtrack – lass es rocken.",
    150,
    "service",
  ),
);
