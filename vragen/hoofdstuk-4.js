window.quizData = {
  title: "Zelftest Hoofdstuk 4 - Functies",
  questions: [
    {
      question:"Waarom gebruiken we functies?",
      answers:[
        "Om code herbruikbaar te maken en niet nodeloos te herhalen (DRY: Don't Repeat Yourself)",
        "Omdat JavaScript zonder functies geen lussen kan uitvoeren",
        "Omdat code in een functie altijd sneller is",
        "Om variabelen automatisch globaal te maken"
      ],
      correct:"A",
      feedback:"Een functie is een herbruikbaar blokje code met een naam. Zo herhaal je geen code en deel je een groot programma op in kleinere, begrijpelijke stukjes."
    },
    {
      question:"Je hebt deze code. Wat is `naam` en wat is `\"Aiko\"`?",
      code:`function groet(naam) {
  console.log("Hallo " + naam);
}

groet("Aiko");`,
      answers:[
        "`naam` is een argument, `\"Aiko\"` is een parameter",
        "`naam` is een parameter, `\"Aiko\"` is een argument",
        "Beide zijn parameters",
        "Beide zijn return-waarden"
      ],
      correct:"B",
      feedback:"Een parameter is de variabele in de functiedefinitie (`naam`). Het argument is de waarde die je effectief meegeeft bij de aanroep (`\"Aiko\"`)."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`function groet() {
  console.log("Hallo!");
}`,
      answers:["`Hallo!`","`groet`","Niets","Er ontstaat een fout"],
      correct:"C",
      feedback:"Een functie definiëren is nog niet hetzelfde als ze uitvoeren. De code in de functie wordt pas uitgevoerd wanneer je ze aanroept met `groet();`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`function deel(a, b) {
  return a / b;
}

console.log(deel(2, 10));`,
      answers:["`5`","Er ontstaat een fout","`10`","`0.2`"],
      correct:"D",
      feedback:"Het eerste argument komt in de eerste parameter terecht: `a` is `2` en `b` is `10`. Dus `2 / 10` geeft `0.2`. JavaScript kijkt enkel naar de positie van de argumenten."
    },
    {
      question:"Je hebt deze code. Welke waarde heeft `resultaat`?",
      code:`function kwadraat(getal) {
  return getal * getal;
}

let resultaat = kwadraat(4) + 1;`,
      answers:["`17`","`16`","`25`","`9`"],
      correct:"A",
      feedback:"`kwadraat(4)` geeft `16` terug. Met die teruggegeven waarde kan je verder rekenen: `16 + 1` is `17`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`function verdubbel(getal) {
  console.log(getal * 2);
}

let resultaat = verdubbel(5);
console.log(resultaat);`,
      answers:["`10` en `10`","`10` en `undefined`","Enkel `undefined`","Er ontstaat een fout"],
      correct:"B",
      feedback:"De functie toont `10`, maar geeft niets terug met `return`. Een functie zonder `return` geeft `undefined` terug, dus `resultaat` is `undefined`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`function test() {
  return "A";
  console.log("B");
}

console.log(test());`,
      answers:["`B`","`B` en `A`","`A`","`A` en `B`"],
      correct:"C",
      feedback:"Zodra `return` uitgevoerd wordt, verlaat je de functie onmiddellijk. De regel `console.log(\"B\")` wordt nooit bereikt."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`function magStemmen(leeftijd) {
  if (leeftijd >= 18) {
    return true;
  }
  return false;
}

console.log(magStemmen(20));`,
      answers:["`false`","`true` en `false`","`undefined`","`true`"],
      correct:"D",
      feedback:"`20 >= 18` is `true`, dus `return true` wordt uitgevoerd en de functie stopt meteen. `return false` wordt niet meer bereikt. Daarom is een `else` hier niet nodig."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`function fizzBuzz(getal) {
  if (getal % 3 === 0 && getal % 5 === 0) {
    return "FizzBuzz";
  } else if (getal % 3 === 0) {
    return "Fizz";
  } else if (getal % 5 === 0) {
    return "Buzz";
  } else {
    return String(getal);
  }
}

console.log(fizzBuzz(10));`,
      answers:["`Buzz`","`Fizz`","`FizzBuzz`","`10`"],
      correct:"A",
      feedback:"10 is deelbaar door 5, maar niet door 3. De functie geeft dus `\"Buzz\"` terug, en `console.log()` toont dat resultaat."
    },
    {
      question:"Je hebt deze code. Wat gebeurt er op de laatste regel?",
      code:`function berekenBonus() {
  const bonus = 10;
  return bonus * 2;
}

berekenBonus();
console.log(bonus);`,
      answers:["De console toont `10`","Er ontstaat een fout, want `bonus` bestaat enkel binnen de functie","De console toont `20`","De console toont `undefined`"],
      correct:"B",
      feedback:"`bonus` is een lokale variabele: ze bestaat enkel binnen de functie waarin ze gedeclareerd is. Buiten de functie is ze niet zichtbaar."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let totaal = 0;

function verhoog() {
  totaal += 5;
}

verhoog();
verhoog();
console.log(totaal);`,
      answers:["`0`","`5`","`10`","Er ontstaat een fout"],
      correct:"C",
      feedback:"`totaal` is een globale variabele, dus de functie kan ze aanpassen. Na twee aanroepen is `totaal` gelijk aan `10`."
    },
    {
      question:"Je hebt deze code. Wat gebeurt er op de laatste regel?",
      code:`let punten = 14;

if (punten >= 10) {
  let boodschap = "Geslaagd!";
}

console.log(boodschap);`,
      answers:["De console toont `Geslaagd!`","De console toont `undefined`","De console toont `14`","Er ontstaat een fout, want `boodschap` bestaat enkel binnen het `if`-blok"],
      correct:"D",
      feedback:"Een variabele die je met `let` of `const` declareert, bestaat enkel binnen de accolades `{ }` waarin ze staat. Dat heet block scope."
    },
    {
      question:"Je wil na een `if`-blok een variabele gebruiken die binnen dat blok een waarde krijgt. Wat doe je?",
      answers:[
        "Je declareert de variabele vóór het blok en geeft ze binnen het blok enkel een waarde",
        "Je declareert de variabele binnen het blok met `const` in plaats van `let`",
        "Je declareert de variabele twee keer: binnen en buiten het blok",
        "Dat kan niet in JavaScript"
      ],
      correct:"A",
      feedback:"Declareer de variabele vóór het blok (bv. `let boodschap;`) en ken binnen het blok enkel een waarde toe (`boodschap = \"Geslaagd!\";`). Zo bestaat ze ook na het blok nog."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`function berekenLoon(uren) {
  const bonus = 50;
  return uren * 15 + bonus;
}

function berekenPunten(score) {
  const bonus = 2;
  return score + bonus;
}

console.log(berekenPunten(14));`,
      answers:["`64`","`16`","`66`","Er ontstaat een fout, want `bonus` is twee keer gedeclareerd"],
      correct:"B",
      feedback:"Elke functie heeft haar eigen, lokale variabele `bonus`. Die beïnvloeden elkaar niet. `berekenPunten(14)` gebruikt haar eigen `bonus` van 2, dus het resultaat is `16`."
    },
    {
      question:"Je schrijft een functie die `true` teruggeeft als een jaar een schrikkeljaar is. Welke naam is het meest geschikt?",
      answers:["`jaar()`","`controle()`","`isSchrikkeljaar()`","`doeIets()`"],
      correct:"C",
      feedback:"Een goede naam zegt wat de functie doet. Geeft de functie `true` of `false` terug, dan leest de naam het best als een vraag, zoals `isSchrikkeljaar()`."
    },
    {
      question:"Welke functie volgt de vuistregels voor een goede functie het best?",
      answers:[
        "Een functie die cijfers opvraagt met `prompt()`, het gemiddelde berekent en het resultaat toont",
        "Een functie die een globale variabele uitleest, ze aanpast en het resultaat toont",
        "Een functie zonder parameters die met `prompt()` twee getallen vraagt",
        "`function berekenGemiddelde(a, b) { return (a + b) / 2; }`"
      ],
      correct:"D",
      feedback:"Een goede functie heeft één duidelijk doel, krijgt haar input via parameters en geeft haar resultaat terug met `return`. Invoer (`prompt()`) en uitvoer (`console.log()`) gebeuren buiten de functie."
    },
    {
      question:"Waarom geef je gegevens beter mee via parameters in plaats van ze met `prompt()` binnen de functie op te vragen?",
      answers:[
        "Zo kan je de functie hergebruiken met andere waarden, bijvoorbeeld in een lus",
        "Omdat `prompt()` niet werkt binnen een functie",
        "Omdat functies met parameters altijd sneller zijn",
        "Omdat een functie zonder parameters geen `return` mag hebben"
      ],
      correct:"A",
      feedback:"Krijgt een functie alles via parameters, dan zie je meteen wat erin gaat en kan je ze met eender welke waarden aanroepen, ook in een lus of vanuit een andere functie."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`const verdubbel = (getal) => getal * 2;

console.log(verdubbel(6));`,
      answers:["`6`","`12`","`undefined`","Er ontstaat een fout, want `return` ontbreekt"],
      correct:"B",
      feedback:"Bestaat een arrow function uit één expressie, dan wordt die automatisch teruggegeven. Je mag `return` en de accolades dan weglaten. `6 * 2` is `12`."
    },
    {
      question:"Welke arrow function doet hetzelfde als `function optellen(a, b) { return a + b; }`?",
      answers:[
        "`const optellen = a, b => a + b;`",
        "`const optellen = (a, b) => { a + b };`",
        "`const optellen = (a, b) => a + b;`",
        "`optellen => (a, b) return a + b;`"
      ],
      correct:"C",
      feedback:"Links van `=>` staan de parameters tussen haakjes, rechts staat wat teruggegeven wordt. Let op bij B: met accolades moet je zelf `return` schrijven, anders geeft de functie `undefined` terug."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`function kwadraat(x) {
  return x * x;
}

let som = 0;
for (let i = 1; i <= 3; i++) {
  som += kwadraat(i);
}
console.log(som);`,
      answers:["`6`","`9`","`36`","`14`"],
      correct:"D",
      feedback:"De functie wordt in de lus hergebruikt: 1 + 4 + 9 = 14. De lus bepaalt welke getallen aan bod komen, de functie berekent het kwadraat van één getal."
    }
  ]
};
