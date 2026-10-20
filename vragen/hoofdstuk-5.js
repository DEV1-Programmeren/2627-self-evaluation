window.quizData = {
  title: "Zelftest Hoofdstuk 5 - Arrays & objecten",
  questions: [
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let namen = ["Aiko", "Bram", "Chloé"];

console.log(namen[1]);`,
      answers:["`Bram`","`Aiko`","`Chloé`","`undefined`"],
      correct:"A",
      feedback:"Een array begint te tellen vanaf index `0`. `namen[0]` is `\"Aiko\"`, `namen[1]` is dus het tweede element: `\"Bram\"`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let namen = ["Aiko", "Bram", "Chloé"];

namen[1] = "Björn";
console.log(namen);`,
      answers:[
        "`[\"Aiko\", \"Bram\", \"Björn\", \"Chloé\"]`",
        "`[\"Björn\", \"Bram\", \"Chloé\"]`",
        "Er ontstaat een fout",
        "`[\"Aiko\", \"Björn\", \"Chloé\"]`"
      ],
      correct:"D",
      feedback:"Met `namen[1] = \"Björn\"` geef je het element op index 1 een nieuwe waarde. `\"Bram\"` wordt dus vervangen door `\"Björn\"`. Er komt geen element bij: de array heeft nog altijd 3 elementen."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let cijfers = [15, 12, 18, 9, 16];

console.log(cijfers[cijfers.length - 1]);`,
      answers:["`5`","`16`","`undefined`","`15`"],
      correct:"B",
      feedback:"`cijfers.length` is `5`, dus `cijfers.length - 1` is `4`. Op index 4 staat het laatste element: `16`. Omdat de indexen bij 0 beginnen, is de laatste index altijd één minder dan de lengte."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let namen = ["Aiko", "Bram", "Chloé"];

console.log(namen[3]);`,
      answers:["`Chloé`","Er ontstaat een fout","`undefined`","`3`"],
      correct:"C",
      feedback:"De array heeft 3 elementen, op index 0, 1 en 2. Index 3 bestaat niet. JavaScript geeft dan geen foutmelding, maar `undefined`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let namen = ["Aiko", "Bram", "Chloé"];

for (let i = 0; i <= namen.length; i++) {
console.log(namen[i]);
}`,
      answers:[
        "`Aiko`, `Bram`, `Chloé` en daarna een foutmelding",
        "`Aiko` en `Bram`",
        "`Aiko`, `Bram` en `Chloé`",
        "`Aiko`, `Bram`, `Chloé` en daarna `undefined`"
      ],
      correct:"D",
      feedback:"Door `<=` loopt `i` van 0 tot en met 3. De laatste herhaling vraagt `namen[3]` op, en die index bestaat niet. Dat geeft `undefined`. Schrijf daarom altijd `i < namen.length`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let cijfers = [4, 6, 10];
let som = 0;

for (let cijfer of cijfers) {
som += cijfer;
}

console.log(som);`,
      answers:["`20`","`3`","`10`","`0`"],
      correct:"A",
      feedback:"Bij een `for...of`-lus krijgt `cijfer` bij elke herhaling de waarde van het volgende element: eerst `4`, dan `6`, dan `10`. De som is `20`. Let op: `cijfer` bevat de waarde, niet de index."
    },
    {
      question:"Wanneer gebruik je beter een gewone `for`-lus in plaats van een `for...of`-lus?",
      answers:[
        "Wanneer de array uit getallen bestaat",
        "Wanneer je de index nodig hebt, bv. om \"Naam 1: Aiko\" te tonen",
        "Wanneer de array leeg kan zijn",
        "Nooit, een `for...of`-lus kan alles wat een `for`-lus kan"
      ],
      correct:"B",
      feedback:"Een `for...of`-lus geeft je enkel de waarden, niet hun positie. Heb je de index nodig, bv. voor een nummering of om elementen te wijzigen, gebruik dan de gewone `for`-lus met `i`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let cijfers = [4, 6, 10];

for (let i = 0; i < cijfers.length; i++) {
cijfers[i] = cijfers[i] * 2;
}

console.log(cijfers);`,
      answers:[
        "`[4, 6, 10]`",
        "`40`",
        "`[4, 6, 10, 8, 12, 20]`",
        "`[8, 12, 20]`"
      ],
      correct:"D",
      feedback:"Met `cijfers[i] = ...` geef je het element op index `i` een nieuwe waarde. De lus doet dat voor index 0, 1 en 2, dus elk element wordt verdubbeld. Er komen geen elementen bij. Omdat je hier de index `i` nodig hebt om elementen te wijzigen, gebruik je een gewone `for`-lus en geen `for...of`-lus."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let namen = ["Aiko", "Bram", "Chloé"];

let resultaat = namen.push("Dries");
console.log(resultaat);`,
      answers:["`Dries`","`[\"Aiko\", \"Bram\", \"Chloé\", \"Dries\"]`","`4`","`3`"],
      correct:"C",
      feedback:"`.push()` voegt `\"Dries\"` achteraan toe en geeft de nieuwe lengte van de array terug. Die is nu `4`. De array zelf is wel aangepast, maar die zit in `namen`, niet in `resultaat`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let namen = ["Aiko", "Bram", "Chloé"];

let laatste = namen.pop();
console.log(laatste);
console.log(namen.length);`,
      answers:["`Chloé` en `3`","`Aiko` en `2`","`2` en `2`","`Chloé` en `2`"],
      correct:"D",
      feedback:"`.pop()` haalt het laatste element uit de array en geeft het verwijderde element terug. `laatste` is dus `\"Chloé\"`, en de array heeft nog 2 elementen over."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let getallen = [1, 2, 3];

getallen.unshift(0);
getallen.shift();
getallen.shift();

console.log(getallen);`,
      answers:["`[2, 3]`","`[0, 1]`","`[1, 2, 3]`","`[0, 1, 2, 3]`"],
      correct:"A",
      feedback:"`.unshift(0)` voegt `0` vooraan toe: `[0, 1, 2, 3]`. Elke `.shift()` haalt het eerste element weg: eerst `0`, dan `1`. Er blijft `[2, 3]` over."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let fruit = ["appel", "peer", "kiwi", "banaan"];

let verwijderd = fruit.splice(1, 2);
console.log(verwijderd);
console.log(fruit);`,
      answers:[
        "`[\"peer\"]` en `[\"appel\", \"kiwi\", \"banaan\"]`",
        "`[\"peer\", \"kiwi\"]` en `[\"appel\", \"banaan\"]`",
        "`[\"appel\", \"peer\"]` en `[\"kiwi\", \"banaan\"]`",
        "`2` en `[\"appel\", \"banaan\"]`"
      ],
      correct:"B",
      feedback:"`.splice(1, 2)` verwijdert 2 elementen vanaf index 1: `\"peer\"` en `\"kiwi\"`. Die verwijderde elementen krijg je terug in een nieuwe array. In `fruit` blijven `\"appel\"` en `\"banaan\"` over."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let namen = ["Aiko", "Bram", "Chloé"];

console.log(namen.indexOf("Dries"));`,
      answers:["`undefined`","`false`","`-1`","Er ontstaat een fout"],
      correct:"C",
      feedback:"`.indexOf()` geeft de index van het element terug. Zit het element niet in de array, dan krijg je `-1`. Dat is nooit een geldige index, dus zo weet je zeker dat het element ontbreekt."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let kleuren = ["rood", "groen", "blauw"];

if (kleuren.includes("Groen")) {
console.log("Gevonden");
} else {
console.log("Niet gevonden");
}`,
      answers:["`Gevonden`","Er ontstaat een fout","`1`","`Niet gevonden`"],
      correct:"D",
      feedback:"`.includes()` geeft `true` of `false` terug en houdt rekening met hoofdletters. `\"Groen\"` is niet hetzelfde als `\"groen\"`, dus het resultaat is `false` en de `else`-tak wordt uitgevoerd."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let cijfers = [15, 8, 12, 6];

let voldoende = cijfers.filter(cijfer => cijfer >= 10);
console.log(cijfers.length);
console.log(voldoende.length);`,
      answers:["`4` en `2`","`2` en `2`","`2` en `4`","`4` en `4`"],
      correct:"A",
      feedback:"`.filter()` laat de originele array ongewijzigd: `cijfers` heeft nog altijd 4 elementen. Het resultaat is een nieuwe array met enkel de cijfers vanaf 10: `[15, 12]`, dus 2 elementen."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let namen = ["bram", "Dries", "Aiko"];

namen.sort();
console.log(namen);`,
      answers:[
        "`[\"Aiko\", \"bram\", \"Dries\"]`",
        "`[\"bram\", \"Dries\", \"Aiko\"]`",
        "`[\"Aiko\", \"Dries\", \"bram\"]`",
        "`[\"Dries\", \"bram\", \"Aiko\"]`"
      ],
      correct:"C",
      feedback:"Zonder vergelijkingsfunctie sorteert `.sort()` als tekst. Hoofdletters komen daarbij vóór kleine letters. `\"Aiko\"` en `\"Dries\"` beginnen met een hoofdletter en komen dus eerst. `\"bram\"` begint met een kleine letter en komt achteraan."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let getallen = [10, 9, 100, 25];

getallen.sort();
console.log(getallen);`,
      answers:["`[9, 10, 25, 100]`","`[10, 100, 25, 9]`","`[100, 25, 10, 9]`","Er ontstaat een fout"],
      correct:"B",
      feedback:"Zonder vergelijkingsfunctie sorteert `.sort()` de elementen als tekst, teken per teken. `\"1\"` komt vóór `\"2\"` en `\"9\"`, dus `10` en `100` komen eerst en `9` komt helemaal achteraan. Voor getallen geef je daarom altijd `(a, b) => a - b` mee."
    },
    {
      question:"Je hebt deze code. Wat is hier fout?",
      code:`function isVoldoende(cijfer) {
return cijfer >= 10;
}

let voldoende = cijfers.filter(isVoldoende());`,
      answers:[
        "Er is niets fout",
        "`.filter()` werkt enkel met een arrow function",
        "`isVoldoende` moet twee parameters hebben, net zoals bij `.sort()`",
        "Door de haakjes roep je `isVoldoende` zelf meteen aan. Je moet de functie zelf meegeven: `cijfers.filter(isVoldoende)`"
      ],
      correct:"D",
      feedback:"Aan `.filter()` geef je een functie mee, en `.filter()` roept die zelf aan voor elk element. Schrijf je `isVoldoende()` met haakjes, dan roep je de functie meteen zelf aan (zonder argument) en geef je enkel het resultaat mee."
    },
    {
      question:"Je hebt deze code. Welke code doet hetzelfde, maar met een arrow function?",
      code:`function isVoldoende(cijfer) {
return cijfer >= 10;
}

let voldoende = cijfers.filter(isVoldoende);`,
      answers:[
        "`let voldoende = cijfers.filter(cijfer => cijfer >= 10);`",
        "`let voldoende = cijfers.filter(cijfer >= 10);`",
        "`let voldoende = cijfers.filter(=> cijfer >= 10);`",
        "`let voldoende = cijfers.filter(cijfer => cijfer < 10);`"
      ],
      correct:"A",
      feedback:"De arrow function `cijfer => cijfer >= 10` krijgt een `cijfer` binnen en geeft `true` of `false` terug, net zoals `isVoldoende`. Bij B geef je geen functie mee, maar een vergelijking. Bij C ontbreekt de parameter vóór de pijl. D houdt net de onvoldoendes over."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let namen = ["Aiko", "Bram", "Chloé", "Dries"];

let overige = namen.filter(naam => naam !== "Bram");
console.log(overige);`,
      answers:[
        "`[\"Bram\"]`",
        "`[\"Aiko\", \"Chloé\", \"Dries\"]`",
        "`[true, false, true, true]`",
        "`3`"
      ],
      correct:"B",
      feedback:"`.filter()` houdt de elementen bij waarvoor de functie `true` teruggeeft. Dat is bij elke naam behalve `\"Bram\"`. Je krijgt dus geen `true` en `false` terug, maar een nieuwe array met de elementen die voldoen. Zo kan je met `.filter()` ook een element uit een lijst weglaten."
    },
    {
      question:"Je hebt deze code. `.sort()` vergelijkt `a = 15` en `b = 9`. Wat gebeurt er?",
      code:`let getallen = [15, 9];

getallen.sort((a, b) => a - b);`,
      answers:[
        "`15 - 9` is `6`. Dat is positief, dus `9` komt eerst",
        "`15 - 9` is `6`. Dat is positief, dus `15` komt eerst",
        "Het resultaat is niet `0`, dus de volgorde blijft zoals ze was",
        "Er ontstaat een fout, want de functie geeft geen `true` of `false` terug"
      ],
      correct:"A",
      feedback:"Is het resultaat van de vergelijkingsfunctie positief, dan komt `b` eerst. Is het negatief, dan komt `a` eerst. Bij `0` blijft de volgorde zoals ze was. Hier is `15 - 9 = 6`, dus `b` (`9`) komt vóór `a` (`15`). Daarom sorteert `a - b` oplopend."
    },
    {
      question:"Je wil een array met getallen sorteren van groot naar klein. Welke code gebruik je?",
      answers:[
        "`getallen.sort((a, b) => a - b);`",
        "`getallen.sort();`",
        "`getallen.sort((a, b) => b - a);`",
        "`getallen.sort(a, b => b - a);`"
      ],
      correct:"C",
      feedback:"Is het resultaat van de vergelijkingsfunctie positief, dan komt `b` eerst. Met `b - a` komt het grootste getal dus vooraan. `a - b` sorteert oplopend. Bij D ontbreken de haakjes rond `(a, b)`: bij twee parameters zijn die verplicht."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let cijfers = [15, 8, 12, 6];
let aantal = 0;

cijfers.forEach(cijfer => {
if (cijfer >= 10) {
  aantal++;
}
});

console.log(aantal);`,
      answers:["`4`","`2`","`0`","`27`"],
      correct:"B",
      feedback:"`.forEach()` roept de functie aan voor elk element van de array. Bij `15` en `12` is de voorwaarde waar, dus `aantal` wordt twee keer verhoogd. `.forEach()` filtert zelf niets en geeft geen nieuwe array terug: wat er gebeurt, staat volledig in de functie die je meegeeft."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let student = {
naam: "Aiko",
leeftijd: 20
};

student.leeftijd = student.leeftijd + 1;
student.naam = "Bram";

console.log(student.naam);
console.log(student.leeftijd);`,
      answers:["`Aiko` en `20`","`Aiko` en `21`","`Bram` en `21`","`Bram` en `20`"],
      correct:"C",
      feedback:"Een eigenschap lees en wijzig je met de puntnotatie: `object.eigenschap`. `student.leeftijd` wordt `20 + 1 = 21` en `student.naam` krijgt de nieuwe waarde `\"Bram\"`. De oude waarden zijn daarna verdwenen."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let student = {
naam: "Aiko",
leeftijd: 20
};

function verjaar(persoon) {
persoon.leeftijd++;
}

verjaar(student);
verjaar(student);
console.log(student.leeftijd);`,
      answers:["`22`","`20`","`21`","Er ontstaat een fout, want `persoon` bestaat niet buiten de functie"],
      correct:"A",
      feedback:"De functie krijgt het object `student` mee via de parameter `persoon`. Wat de functie aan `persoon.leeftijd` verandert, verandert dus ook aan `student`. Na twee aanroepen is de leeftijd `22`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let docent = {
naam: "Mira",
leeftijd: 35,
verjaar: function () {
  this.leeftijd++;
}
};

docent.verjaar();
docent.verjaar;
console.log(docent.leeftijd);`,
      answers:["`37`","`36`","`35`","Er ontstaat een fout"],
      correct:"B",
      feedback:"Een methode roep je aan met haakjes: `docent.verjaar()`. De tweede regel `docent.verjaar;` heeft geen haakjes en voert de methode dus niet uit. De leeftijd wordt maar één keer verhoogd. Binnen de methode verwijst `this` naar het object `docent`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let cijfers = [15, 12, 18];

console.log(typeof cijfers);`,
      answers:["`array`","`list`","`object`","`number`"],
      correct:"C",
      feedback:"In JavaScript is een array een speciaal object. Daarom gebruik je ook bij arrays de puntnotatie: `.length` is een eigenschap van het array-object, en `.push()`, `.filter()` en `.sort()` zijn methodes ervan."
    },
    {
      question:"Je hebt deze code. Met welke code toon je de naam van de tweede student (`Bram`)?",
      code:`let studenten = [
{ naam: "Aiko", score: 15 },
{ naam: "Bram", score: 9 },
{ naam: "Chloé", score: 18 }
];`,
      answers:[
        "`console.log(studenten.naam[1]);`",
        "`console.log(studenten[1].naam);`",
        "`console.log(studenten[2].naam);`",
        "`console.log(studenten.naam);`"
      ],
      correct:"B",
      feedback:"Eerst haal je met `studenten[1]` het object op index 1 uit de array. Daarna lees je met `.naam` de eigenschap van dat object uit. De array zelf heeft geen eigenschap `naam`, enkel de objecten erin. Index 2 is de derde student, want de indexen beginnen bij 0."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let studenten = [
{ naam: "Aiko", score: 15 },
{ naam: "Bram", score: 9 },
{ naam: "Chloé", score: 18 }
];
let totaal = 0;

for (let student of studenten) {
totaal += student.score;
}

console.log(totaal);`,
      answers:[
        "`3`",
        "`0`",
        "`42`",
        "Er ontstaat een fout"
      ],
      correct:"C",
      feedback:"Bij elke herhaling krijgt `student` het volgende object uit de array. Met `student.score` lees je de score van dat object uit en tel je die op bij `totaal`: `15 + 9 + 18 = 42`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let studenten = [
{ naam: "Aiko", score: 15 },
{ naam: "Bram", score: 9 },
{ naam: "Chloé", score: 18 },
{ naam: "Dries", score: 12 }
];

let geslaagd = studenten.filter(student => student.score >= 10);
geslaagd.sort((a, b) => a.score - b.score);

console.log(geslaagd[0].naam);
console.log(geslaagd.length);`,
      answers:["`Chloé` en `3`","`Bram` en `4`","`Dries` en `4`","`Dries` en `3`"],
      correct:"D",
      feedback:"`.filter()` houdt enkel de studenten met een score vanaf 10 over: Aiko, Chloé en Dries, dus 3 studenten. Daarna sorteert `.sort()` op `score`, oplopend. De laagste score (12) komt vooraan, dus `geslaagd[0].naam` is `\"Dries\"`."
    }
  ]
};
