import {
  Tyres,
  Exhaust,
  Brakes,
  Seats,
  Battery,
  WindshieldWipers,
} from "./productsConstructor.js";
export let products = [];

products.push(
  new Tyres(
    "0101",
    "Reifen",
    "./src/img/Reifen.png",
    "Ein Autoreifen",
    30,
    "Dreh dich im Kreis - einmal im Leben, richtig schnell!",
    20,
    "tyres",
  ),
);

products.push(
  new Tyres(
    "0102",
    "Winterreifen",
    "./src/img/Winterreifen.png",
    "EIn Winterreifen",
    45,
    "Schnee? Eis? Fahr durch! Bremsen ist für Feiglinge!",
    15,
    "tyres",
  ),
);
products.push(
  new Tyres(
    "0103",
    "Offroad-Reifen",
    "./src/img/OffroadReifen.png",
    "Ein Offroad-Reifen",
    60,
    "Straße? Langweilig! Gelände erobern - YOLO pur!",
    8,
    "tyres",
  ),
);
products.push(
  new Tyres(
    "0104",
    "Sport-Reifen",
    "./src/img/Sportreifen.png",
    "Ein Sportreifen",
    80,
    "Driftkönig werden - Reifenrauch inklusive! Max Grip für Max Speed!",
    25,
    "tyres",
  ),
);

products.push(
  new Brakes(
    "0201",
    "Bremsen",
    "./src/img/Bremse.png",
    "Eine Bremse auf einer Felge",
    50,
    "Bremsen? Nur für Langweiler! Gas geben bis zum Limit! Oder nächsten Baum..",
    35,
    "brakes",
  ),
);

products.push(
  new Brakes(
    "0202",
    "Scheibenbremsen",
    "./src/img/Scheibenbremsen.png",
    "High-Performance Bremsen",
    70,
    "Bremsen? Nur kurz - dann wieder Vollgas!",
    12,
    "brakes",
  ),
);
products.push(
  new Brakes(
    "0203",
    "Bremsbeläge",
    "./src/img/Bremsbelaege.png",
    "Frische Beläge für Biss",
    35,
    "Qualmen? Normal! Hart bremsen ist Kunst!",
    40,
    "brakes",
  ),
);
products.push(
  new Brakes(
    "0204",
    "Bremsflüssigkeit",
    "./src/img/Bremsflussigkeit.png",
    "Flüssigkeit für Power",
    20,
    "Leer? Fahr weiter - Adrenalin statt Bremsen!",
    30,
    "brakes",
  ),
);

products.push(
  new Exhaust(
    "0301",
    "Auspuff",
    "./src/img/Auspuff.png",
    "Ein Auspuff eines Autos",
    110,
    "Lass die Nachbarn wissen - ich lebe nur EINMAL!",
    50,
    "exhaust",
  ),
);

products.push(
  new Exhaust(
    "0302",
    "Sport-Auspuff",
    "./src/img/SportAuspuff.png",
    "Lauter und aggressiver",
    150,
    "Nachbarn nerven? Mission accomplished!",
    5,
    "exhaust",
  ),
);
products.push(
  new Exhaust(
    "0303",
    "Kat-Verweigerer",
    "./src/img/KatVerweigerer.png",
    "Kein Katalysator - pure Freiheit",
    200,
    "Umwelt? Scheiß drauf - V8-Brüllen forever!",
    3,
    "exhaust",
  ),
);
products.push(
  new Exhaust(
    "0304",
    "Titan-Auspuff",
    "./src/img/TitanAuspuff.png",
    "Leicht und laut",
    300,
    "Leichtbau? Gewicht sparen für mehr Speed!",
    2,
    "exhaust",
  ),
);

products.push(
  new WindshieldWipers(
    "0401",
    "Scheibenwischer",
    "./src/img/Scheibenwischer.png",
    "Ein paar Scheibenwischer eines Autos",
    30,
    " Scheiß auf Regen - fahr trotzdem! Wetter ist egal!",
    50,
    "windshield-wipers",
  ),
);

products.push(
  new WindshieldWipers(
    "0402",
    "Regen-Sensor Wischer",
    "./src/img/RegenWischer.png",
    "Automatisch bei Regen",
    40,
    "Sensor kaputt? Wischer immer an - Style!",
    18,
    "windshield-wipers",
  ),
);
products.push(
  new WindshieldWipers(
    "0403",
    "Sport-Wischer",
    "./src/img/SportWischer.png",
    "Aerodynamisch und schnell",
    55,
    "Windwiderstand? Null! Wischer-Rennen gewinnen!",
    22,
    "windshield-wipers",
  ),
);
products.push(
  new WindshieldWipers(
    "0404",
    "Heizbare Wischerblätter",
    "./src/img/HeizWischer.png",
    "Eisschmelze garantiert",
    65,
    "Eis? Schmilzt weg - fahr im Winter wie im Sommer!",
    10,
    "windshield-wipers",
  ),
);

products.push(
  new Seats(
    "0501",
    "Sitze",
    "./src/img/Sitze.png",
    "Ein Autositz",
    25,
    "Komfort? Langweilig! Hart sitzen, wild leben!",
    0,
    "seats",
  ),
);

products.push(
  new Seats(
    "0502",
    "Recaro Sportsitze",
    "./src/img/RecaroSitze.png",
    "Rennstrecke-Feeling",
    400,
    "Einsteigen? Festhalten! Kurven wie Profi!",
    4,
    "seats",
  ),
);
products.push(
  new Seats(
    "0503",
    "Leder-Sitze",
    "./src/img/LederSitze.png",
    "Luxus-Leder",
    250,
    "Leder? Kratzt? Echte Männer spüren's!",
    7,
    "seats",
  ),
);
products.push(
  new Seats(
    "0504",
    "Heizbare Sitze",
    "./src/img/HeizSitze.png",
    "Winter-Komfort",
    180,
    "Kalt? Heizt auf - aber Fenster runter für Style!",
    14,
    "seats",
  ),
);

products.push(
  new Battery(
    "0601",
    "Autobatterie",
    "./src/img/Autobatterie.png",
    "Eine Autobatterie",
    25,
    "Lad nie auf - leb bis zum blackout! Strom bis zum Anschlag!",
    5,
    "battery",
  ),
);

products.push(
  new Battery(
    "0602",
    "AGM-Batterie",
    "./src/img/AGMBatterie.png",
    "High-Tech AGM",
    120,
    "Tiefe Entladung? Kein Ding - startet immer!",
    9,
    "battery",
  ),
);
products.push(
  new Battery(
    "0603",
    "Lithium-Ionen",
    "./src/img/LithiumBatterie.png",
    "Leicht & powerful",
    350,
    "Gewicht? Minimal! Power? Maximal!",
    1,
    "battery",
  ),
);
products.push(
  new Battery(
    "0604",
    "Start-Stopp Batterie",
    "./src/img/StartStoppBatterie.png",
    "Für moderne Autos",
    90,
    "Stopp-Start? Batterie lacht drüber!",
    16,
    "battery",
  ),
);
