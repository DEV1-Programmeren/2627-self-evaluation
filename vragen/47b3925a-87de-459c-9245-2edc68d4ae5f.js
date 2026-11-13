window.quizData = {
  title: "Zelftest Kennistoets deel 1 (hoofdstuk 1 tot en met 5)",
  questions: [
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let stuks = prompt("Hoeveel stuks wil je?"); // de gebruiker typt 3
let totaal = stuks + 2;
console.log(totaal);
console.log(typeof totaal);`,
      answers:["`5` en `number`","Er ontstaat een fout, want je kan geen tekst en getal optellen","`5` en `string`","`32` en `string`"],
      correct:"D",
      feedback:"`prompt()` geeft altijd een string terug, dus `stuks` bevat `\"3\"` en niet `3`. Staat er aan één kant van `+` een string, dan plakt JavaScript de waarden aan elkaar: `\"3\" + 2` wordt `\"32\"`, en dat is ook een string. Je krijgt geen foutmelding. Wil je echt optellen, dan zet je de invoer eerst om met `Number(stuks)`."
    },
    {
      question:"Je hebt deze code. Op welke regel loopt het mis, en waarom?",
      code:`let score = 0;          // regel 1
const BONUS = 5;        // regel 2
score = 10;             // regel 3
score = score + BONUS;  // regel 4
BONUS = 10;             // regel 5`,
      answers:["Op regel 3, want `score` werd op regel 1 al geïnitialiseerd en een variabele mag maar één keer een waarde krijgen.","Op regel 5, want `BONUS` is een `const` die op regel 2 al geïnitialiseerd werd en een `const` mag maar één keer een waarde krijgen.","Op regel 4, want je mag een `const` niet gebruiken in een berekening.","Op regel 2, want een `const` moet je eerst declareren en pas op een volgende regel initialiseren."],
      correct:"B",
      feedback:"Een `const` mag maar één keer een waarde krijgen: bij de declaratie op regel 2. Regel 5 probeert `BONUS` een tweede keer een waarde te geven, en dat geeft de fout `TypeError: Assignment to constant variable.` Een `let` zoals `score` mag je wel opnieuw een waarde geven (regel 3 en 4), en een `const` uitlezen in een berekening mag altijd. Een `const` declareer en initialiseer je net in één keer."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let punten = 4;
punten += 2;
punten++;
console.log(punten);`,
      answers:["`6`","`7`","`8`","`3`"],
      correct:"B",
      feedback:"`punten += 2` betekent `punten = punten + 2`, dus 4 wordt 6. `punten++` betekent `punten = punten + 1`, dus 6 wordt 7. `+=` telt erbij op (het vervangt de waarde niet), en `++` telt er altijd precies 1 bij, niet 2."
    },
    {
      question:"Je hebt deze code. Welke optie toont exact `Lina is 16 jaar.` in de console?",
      code:`let naam = "Lina";
let leeftijd = 16;

// Optie A:
console.log("\${naam} is \${leeftijd} jaar.");

// Optie B:
console.log(\`naam is leeftijd jaar.\`);

// Optie C:
console.log(\`\${naam} is \${leeftijd} jaar.\`);

// Optie D:
console.log(naam + "is" + leeftijd + "jaar.");`,
      answers:["Optie A","Optie B","Optie C","Optie D"],
      correct:"C",
      feedback:"Een template string staat tussen backticks, en enkel daarin wordt `${...}` vervangen door de waarde van de variabele. Optie A gebruikt gewone aanhalingstekens en toont letterlijk `${naam} is ${leeftijd} jaar.` Optie B heeft geen `${ }` en toont `naam is leeftijd jaar.` Optie D plakt de tekst aan elkaar zonder spaties en toont `Linais16jaar.`"
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let temperatuur = 24;
let regent = false;

console.log(temperatuur > 15 && regent);
console.log(temperatuur < 30 || regent);
console.log(temperatuur >= 24);`,
      answers:["`true`, `true`, `true`","`true`, `false`, `true`","`false`, `true`, `false`","`false`, `true`, `true`"],
      correct:"D",
      feedback:"`regent` is `false`. Regel 1: `24 > 15` is `true`, maar bij `&&` moeten beide kanten waar zijn, dus `false`. Regel 2: `24 < 30` is `true`, en bij `||` volstaat één ware kant, dus `true`. Regel 3: `>=` betekent groter dan of gelijk aan, en 24 is gelijk aan 24, dus `true`."
    },
    {
      question:"Een winkel gaat om 9:00 open en sluit om 17:00. De variabele `uur` bevat steeds het huidige uur als geheel getal: om 9:00 is `uur` gelijk aan `9`, om 16:45 is `uur` gelijk aan `16`, om 17:00 is `uur` gelijk aan `17`. Welke voorwaarde is `true` als de winkel open is en `false` als de winkel gesloten is?",
      answers:["`uur >= 9 && uur < 17`","`uur >= 9 || uur < 17`","`uur >= 9 && uur <= 17`","`uur > 9 && uur < 17`"],
      correct:"A",
      feedback:"De winkel is open als zowel `uur >= 9` (om 9:00 is ze al open) als `uur < 17` (om 17:00 is ze dicht) waar is, dus `&&`. Met `||` is de voorwaarde altijd waar, bv. ook om 22:00. Met `uur <= 17` zou de winkel om 17:00 nog open zijn, en met `uur > 9` zou ze om 9:00 nog dicht zijn."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let leeftijd = 12;
let prijs;

if (leeftijd < 3) {
  prijs = 0;
} else if (leeftijd < 12) {
  prijs = 6;
} else if (leeftijd < 65) {
  prijs = 10;
} else {
  prijs = 7;
}

console.log(prijs);`,
      answers:["`0`","`6`","`10`","`7`"],
      correct:"C",
      feedback:"De voorwaarden worden van boven naar onder gecontroleerd, en enkel het eerste blok dat `true` is, wordt uitgevoerd. `12 < 3` is `false`, en ook `12 < 12` is `false`, want 12 is niet kleiner dan 12. `12 < 65` is `true`, dus `prijs` wordt `10` en de rest wordt overgeslagen. Om 12 mee te nemen in de tweede voorwaarde, zou je `<= 12` nodig hebben."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let maat = "M";

switch (maat) {
  case "S":
    console.log("klein");
  case "M":
    console.log("medium");
  case "L":
    console.log("groot");
    break;
  default:
    console.log("onbekend");
}`,
      answers:["`medium`","`medium`, `groot` en `onbekend`","`medium` en `groot`","`klein`, `medium` en `groot`"],
      correct:"C",
      feedback:"De `switch` springt naar `case \"M\"` en voert vanaf daar alle code uit tot de eerste `break`. Omdat er na `console.log(\"medium\")` geen `break` staat, valt de code door naar `case \"L\"` en toont ook `groot`. Daar staat wel een `break`, dus `default` wordt niet bereikt. `case \"S\"` wordt overgeslagen, want de `switch` begint bij de `case` die overeenkomt."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`for (let i = 0; i < 10; i += 2) {
  console.log(i);
}`,
      answers:["`0`, `2`, `4`, `6`, `8`","`0`, `2`, `4`, `6`, `8`, `10`","`2`, `4`, `6`, `8`, `10`","`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`"],
      correct:"A",
      feedback:"De lus start bij `i = 0`, en na elke herhaling wordt `i` met 2 verhoogd. Zolang `i < 10` waar is, wordt `i` getoond: 0, 2, 4, 6 en 8. Bij `i = 10` is `10 < 10` `false`, dus 10 wordt niet meer getoond. De update `i += 2` gebeurt pas na de eerste herhaling, dus 0 wordt wel getoond."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let teller = 10;

while (teller < 5) {
  console.log("while");
  teller++;
}

do {
  console.log("do");
  teller++;
} while (teller < 5);`,
      answers:["Niets","Vijf keer `do`","Eén keer `while` en één keer `do`","Eén keer `do`"],
      correct:"D",
      feedback:"Een `while`-lus controleert de voorwaarde vóór elke herhaling. `10 < 5` is meteen `false`, dus de `while`-lus wordt nul keer uitgevoerd. Een `do...while`-lus controleert de voorwaarde pas na elke herhaling en wordt dus altijd minstens één keer uitgevoerd: `do` verschijnt, `teller` wordt 11, en daarna is `11 < 5` `false`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`for (let i = 1; i <= 6; i++) {
  if (i > 3) {
    console.log(i);
  }
}`,
      answers:["`4`, `5`, `6`","`3`, `4`, `5`, `6`","`1`, `2`, `3`","Niets, want bij `i = 1` is de voorwaarde `false` en stopt de lus"],
      correct:"A",
      feedback:"De lus overloopt alle waarden van 1 tot en met 6, en bij elke herhaling controleert de `if` opnieuw of `i > 3`. Enkel 4, 5 en 6 zijn groter dan 3 (3 zelf niet). Een `if` die `false` is, slaat enkel zijn eigen blok over: de lus gaat gewoon verder met de volgende waarde. Wanneer de lus stopt, bepaalt enkel de voorwaarde van de `for`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let aantal = 0;

for (let a = 0; a < 4; a++) {
  for (let b = 2; b <= 4; b++) {
    aantal++;
  }
}

console.log(aantal);`,
      answers:["`7`","`8`","`12`","`16`"],
      correct:"C",
      feedback:"De buitenste lus wordt 4 keer uitgevoerd (`a` = 0, 1, 2, 3). Bij elke herhaling daarvan loopt de binnenste lus volledig af: 3 keer (`b` = 2, 3, 4). In totaal wordt `aantal++` dus 4 × 3 = 12 keer uitgevoerd. Bij geneste lussen vermenigvuldig je het aantal herhalingen, je telt ze niet op."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`function berekenWisselgeld(betaald, prijs) {
  return betaald - prijs;
}

let wisselgeld1 = berekenWisselgeld(20, 5);
let wisselgeld2 = berekenWisselgeld(10, 3);

console.log(wisselgeld1);
console.log(wisselgeld2);`,
      answers:["`15` en `15`","`7` en `7`","`undefined` en `undefined`","`15` en `7`"],
      correct:"D",
      feedback:"Bij elke aanroep krijgen de parameters opnieuw de waarden van de argumenten van dat moment. `berekenWisselgeld(20, 5)` geeft `15` terug, en dat wordt bewaard in `wisselgeld1`. `berekenWisselgeld(10, 3)` geeft `7` terug, en dat wordt bewaard in `wisselgeld2`. Een functie onthoudt de vorige aanroep niet, en de tweede aanroep verandert `wisselgeld1` niet."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`function verdubbel(getal) {
  let resultaat = getal * 2;
  return resultaat;
}

verdubbel(8);
console.log(resultaat);`,
      answers:["`undefined`","`8`","Er ontstaat een foutmelding","`16`"],
      correct:"C",
      feedback:"`resultaat` wordt binnen de functie gedeclareerd met `let` en is dus een lokale variabele: ze bestaat enkel binnen de functie. `verdubbel(8)` geeft wel `16` terug, maar die waarde wordt nergens bewaard. `console.log(resultaat)` staat buiten de functie, en daar bestaat `resultaat` niet: `ReferenceError: resultaat is not defined`. Wil je 16 tonen, schrijf dan bv. `console.log(verdubbel(8));`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`function beoordeel(punten) {
  if (punten >= 16) {
    return "zeer goed";
  }
  if (punten >= 10) {
    return "geslaagd";
  }
  return "niet geslaagd";
  console.log("klaar");
}

console.log(beoordeel(17));`,
      answers:["`zeer goed` en `geslaagd`","`zeer goed`","`zeer goed` en `klaar`","`zeer goed`, `geslaagd` en `niet geslaagd`"],
      correct:"B",
      feedback:"`17 >= 16` is `true`, dus `return \"zeer goed\"` wordt uitgevoerd. Zodra een `return` uitgevoerd wordt, verlaat de functie onmiddellijk: de volgende `if` en de laatste `return` worden niet meer bereikt. `console.log(\"klaar\")` staat na een `return` en wordt dus nooit uitgevoerd."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`function verhoog() {
  let teller = 0;
  teller++;
  return teller;
}

console.log(verhoog());
console.log(teller);`,
      answers:["`1`, en daarna een foutmelding","`1` en `1`","`1` en `0`","`0` en `undefined`"],
      correct:"A",
      feedback:"`teller` wordt binnen de functie gedeclareerd en is dus een lokale variabele. `console.log(verhoog())` toont `1`, want binnen de functie wordt `teller` van 0 naar 1 verhoogd en de functie geeft die waarde terug met `return`. `console.log(teller)` staat buiten de functie, en daar bestaat `teller` niet: dat geeft een foutmelding. `undefined` krijg je enkel bij een variabele die wel gedeclareerd is maar nog geen waarde heeft."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let steden = ["Gent", "Brugge", "Leuven", "Hasselt"];

console.log(steden[1]);
console.log(steden[steden.length - 1]);
console.log(steden[4]);`,
      answers:["`Brugge`, `Hasselt`, `undefined`","`Gent`, `Leuven`, `Hasselt`","`Brugge`, `Leuven`, `undefined`","`Brugge`, `3`, `undefined`"],
      correct:"A",
      feedback:"Een array telt vanaf index 0, dus `steden[1]` is het tweede element: `Brugge`. `steden.length` is 4, dus `steden[steden.length - 1]` is `steden[3]`: het laatste element, `Hasselt` (en niet het getal 3, want dat is de index). Index 4 bestaat niet, en een index die niet bestaat geeft `undefined`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let taken = ["afwas", "strijken", "stofzuigen", "koken"];

taken.pop();
taken.push("wassen");
console.log(taken);`,
      answers:["`[\"strijken\", \"stofzuigen\", \"koken\", \"wassen\"]`","`[\"afwas\", \"strijken\", \"stofzuigen\", \"koken\", \"wassen\"]`","`[\"wassen\", \"afwas\", \"strijken\", \"stofzuigen\"]`","`[\"afwas\", \"strijken\", \"stofzuigen\", \"wassen\"]`"],
      correct:"D",
      feedback:"`taken.pop()` verwijdert het laatste element (`\"koken\"`), niet het eerste: dat zou `.shift()` doen. `taken.push(\"wassen\")` voegt `\"wassen\"` achteraan toe, niet vooraan: dat zou `.unshift()` doen. Beide methodes passen de originele array echt aan, ook al bewaar je het resultaat niet in een variabele."
    },
    {
      question:"Een weerstation houdt per dag de temperatuur bij. Wat verschijnt er in de console?",
      code:`let metingen = [
  { dag: 1, temperatuur: 9 },
  { dag: 2, temperatuur: 14 },
  { dag: 3, temperatuur: 11 },
  { dag: 4, temperatuur: 17 }
];

let warmeDagen = metingen.filter(meting => meting.temperatuur > 12);

for (let meting of warmeDagen) {
  console.log(meting.dag);
}`,
      answers:["`1`, `3`","`2`, `4`","`14`, `17`","`1`, `2`, `3`, `4`"],
      correct:"B",
      feedback:"`.filter()` houdt enkel de objecten bij waarvoor `meting.temperatuur > 12` `true` is: dag 2 (14 graden) en dag 4 (17 graden). De `for...of`-lus overloopt daarna `warmeDagen` (niet `metingen`) en toont van elk object `meting.dag`: het nummer van de dag, niet de temperatuur."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let speler = {
  naam: "Noor",
  score: 10,
  record: 25
};

speler.score = speler.score + 5;
speler.record = speler.score;

console.log(speler.record);`,
      answers:["`15`","`25`","`10`","`40`"],
      correct:"A",
      feedback:"Een eigenschap werkt zoals een variabele: met `object.eigenschap` lees je ze uit of geef je ze een nieuwe waarde. Eerst wordt `speler.score` gelijk aan 10 + 5 = 15. Daarna krijgt `speler.record` de waarde van `speler.score`, dus 15. De oude waarde 25 wordt vervangen, niet opgeteld, en JavaScript kijkt niet of de nieuwe waarde hoger of lager is."
    }
  ]
};
