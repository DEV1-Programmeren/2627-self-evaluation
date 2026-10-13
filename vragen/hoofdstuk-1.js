window.quizData = {
  title: "Zelftest Hoofdstuk 1 - Invoer/uitvoer, variabelen & datatypes",
  questions: [
    {
      question:"Wat is het verschil tussen het declareren en initialiseren van een variabele?",
      answers:[
        "Declareren geeft de variabele een naam, initialiseren voegt de functie `console.log()` toe",
        "Declareren reserveert geheugen, initialiseren wijst een waarde toe",
        "Declareren betekent een `const` gebruiken, initialiseren betekent een `let` gebruiken",
        "Er is geen verschil, het zijn synoniemen"
      ],
      correct:"B",
      feedback:"Declareren reserveert een plekje in het geheugen, initialiseren geeft dat plekje een waarde."
    },
    {
      question:"Je schrijft een programma dat de score van een speler bijhoudt. De score kan tijdens het spel veranderen. Welke declaratie is het meest geschikt?",
      answers:[
        "`const score = 0;` omdat je de score niet meer mag veranderen",
        "`let score = 0;` omdat de score nog zal veranderen",
        "`var score = 0;` omdat var ontworpen is voor scores",
        "`score = 0;` zonder let of const, dat is het eenvoudigst"
      ],
      correct:"B",
      feedback:"Gebruik `let` als een waarde gaat veranderen, en `const` als ze constant blijft."
    },
    {
      question:"Wat doet `console.log(3 + 4)`?",
      answers:[
        "Toont het resultaat van de optelling (7) in het console-paneel",
        "Voert de optelling uit maar toont niets",
        "Creëert een fout omdat je niet kan optellen in console.log()",
        "Toont de tekst \"3 + 4\" letterlijk in het console-paneel"
      ],
      correct:"A",
      feedback:"`console.log()` voert alles uit wat erin staat en toont het resultaat."
    },
    {
      question:"Welke uitspraak over `prompt()` klopt?",
      answers:[
        "`prompt()` geeft altijd een getal terug",
        "`prompt()` geeft altijd een string terug, zelfs als de gebruiker een getal intikt",
        "`prompt()` geeft een boolean terug",
        "`prompt()` vraagt nooit invoer, het toont alleen berichten"
      ],
      correct:"B",
      feedback:"Dit is heel belangrijk: `prompt()` geeft altijd een string terug, dus je moet omzetten met `Number()` als je ermee wil rekenen."
    },
    {
      question:"Welk datatype heeft de waarde `3.14`?",
      answers:["`string`","`number`","`undefined`","`null`"],
      correct:"B",
      feedback:"`3.14` is een decimaal getal, dus het datatype is `number`. In tegenstelling tot andere programmeertalen zoals Java, C#, C++ kent JavaScript geen apart datatype voor decimale getallen."
    },
    {
      question:"Welk van deze is een string?",
      answers:["`42`","`true`","`\"Hallo\"`","`undefined`"],
      correct:"C",
      feedback:"Strings staan altijd tussen aanhalingstekens (`\"` of `'`). `42` zonder aanhalingstekens is een number."
    },
    {
      question:"Je hebt deze code. Wat gebeurt er als de gebruiker `3` intikt?",
      code:`let antwoord = prompt("Geef een getal:");
let getal = antwoord + 5;`,
      answers:[
        "`getal` wordt `8` (3 + 5)",
        "`getal` wordt `\"35\"` (tekst aan elkaar plakken)",
        "Er ontstaat een fout",
        "`getal` wordt `undefined`"
      ],
      correct:"B",
      feedback:"Dit is de \"plak-fout\"! Je voegt een string (`\"3\"`) en een getal (`5`) samen, dus JavaScript plakt ze aan elkaar als tekst."
    },
    {
      question:"Wat is het verschil tussen `Number(antwoord)` en `parseInt(antwoord)` als `antwoord = \"42.5\"`?",
      answers:[
        "`Number()` geeft `42` en `parseInt()` geeft `42.5`",
        "`Number()` geeft `42.5` en `parseInt()` geeft `42`",
        "Ze geven altijd hetzelfde resultaat",
        "`Number()` werkt niet op strings"
      ],
      correct:"B",
      feedback:"`Number()` behoudt kommagetallen, `parseInt()` haalt alles na de komma eraf."
    },
    {
      question:"Wat is het resultaat van `10 % 3`?",
      answers:["`3` (10 gedeeld door 3)","`1` (de rest van 10 gedeeld door 3)","`3.333...` (10 gedeeld door 3 met komma)","`0` (modulo geeft altijd 0)"],
      correct:"B",
      feedback:"`%` is de modulo-operator, die geeft de rest na deling. 10÷3 = 3 rest 1."
    },
    {
      question:"Wat is het resultaat van `2 + 3 * 4`?",
      answers:["`20` (eerst (2+3), dan *4)","`14` (eerst 3*4, dan +2)","Dit geeft een fout","`9` (snel achter elkaar berekend)"],
      correct:"B",
      feedback:"In wiskunde en programmeren: vermenigvuldiging gaat voor optelling (PEMDAS/BODMAS)."
    },
    {
      question:"Wat doet `x++`?",
      answers:["Geeft x toe aan de volgende variabele","Verhoogt x met 1 (zelfde als `x = x + 1`)","Geeft de volgende waarde","Voegt een comment toe"],
      correct:"B",
      feedback:"`x++` is een verkorte notatie voor `x = x + 1`. Handig om tellers te verhogen."
    },
    {
      question:"JavaScript is \"loosely typed\". Wat betekent dat?",
      answers:["JavaScript-code is makkelijk geschreven","Variabelen kunnen van datatype veranderen zonder fouten","Je hoeft niet op Enter te drukken na je code","JavaScript accepteert minder datatypes dan andere talen"],
      correct:"B",
      feedback:"In JavaScript hoef je het datatype niet van tevoren op te geven, en het kan veranderen. Dat is anders dan strikt getypeerde talen zoals Java."
    },
    {
      question:"Welke syntax is correct voor template strings?",
      answers:["`\"${naam} is 20 jaar\"`","`'${naam} is 20 jaar'`","`` `${naam} is 20 jaar` ``","`[${naam} is 20 jaar]`"],
      correct:"C",
      feedback:"Template strings gebruiken backticks, niet aanhalingstekens. Variabelen gaan tussen `${}`."
    },
    {
      question:"Je hebt variabelen `naam = \"Sofie\"` en `leeftijd = 21`. Welke optie(s) geven deze output: `Sofie is 21 jaar oud.`?",
      code:`// Optie A:
console.log(\`\${naam} is \${leeftijd} jaar oud.\`);

// Optie B:
console.log(naam + " is " + leeftijd + " jaar oud.");`,
      answers:["Alleen optie A","Alleen optie B","Beide geven dezelfde output","Geen van beide werkt"],
      correct:"C",
      feedback:"Template strings (backticks met `${}`) en concatenatie (met `+`) geven dezelfde output. Template strings zijn alleen overzichtelijker."
    },
    {
      question:"Wat gebeurt er met code na `//` op dezelfde regel?",
      answers:["Het wordt uitgevoerd","Het wordt genegeerd door JavaScript","Het voegt een comment toe aan de console","Het veroorzaakt een fout"],
      correct:"B",
      feedback:"`//` geeft aan dat alles daarna op die regel een comment is en niet wordt uitgevoerd."
    },
    {
      question:"Wat geeft `typeof \"hello\"` als resultaat?",
      answers:["`string`","`\"string\"`","`text`","`\"hello\"`"],
      correct:"B",
      feedback:"`typeof` geeft altijd een string terug. `console.log(typeof \"hello\")` toont `\"string\"` (met aanhalingstekens). Hetzelfde geldt voor een getal: `typeof 42` geeft `\"number\"`."
    },
    {
      question:"Je wil het getal `42` omzetten naar een string. Welke regel doet dat?",
      answers:["`let tekst = parseInt(42);`","`let tekst = String(42);`","`let tekst = (42).toString();`","Beide B en C"],
      correct:"D",
      feedback:"Beide manieren werken: `String(getal)` en `getal.toString()` zetten een getal om naar een string."
    },
    {
      question:"Wat is het verschil tussen `null` en `undefined`?",
      answers:["`undefined` is een getal, `null` is tekst","`undefined` is automatisch (geen waarde toegekend), `null` is bewust (jij kent het toe)","Ze zijn identiek","`null` bestaat niet in JavaScript"],
      correct:"B",
      feedback:"`undefined` = variabele gedeclareerd, maar nog geen waarde. `null` = jij zet bewust \"geen waarde\" in een variabele."
    },
    {
      question:"Je wil gebruiker vragen om hun geboortejaar, en dan hun leeftijd berekenen (huidigjaar - geboortejaar). Welke code is CORRECT?",
      answers:[
        "`let jaar = prompt(\"Geboortejaar?\"); let leeftijd = 2026 - jaar;`",
        "`let jaar = Number(prompt(\"Geboortejaar?\")); let leeftijd = 2026 - jaar;`",
        "`let jaar = prompt(\"Geboortejaar?\"); let leeftijd = 2026 - Number(jaar);`",
        "Beide B en C zijn correct"
      ],
      correct:"D",
      feedback:"In beide gevallen zet je de string om naar een number voordat je ermee rekent, alleen op andere momenten. Allebei correct!"
    },
    {
      question:"Waarom is `console.log()` nuttig bij programmeren?",
      answers:["Om het eindresultaat aan gebruikers te tonen","Om te controleren of variabelen de waarden hebben die je verwacht (debuggen)","Om fouten automatisch op te lossen","Om code sneller uit te voeren"],
      correct:"B",
      feedback:"`console.log()` is je voornaamste debug-tool. Het helpt je te checken of je code doet wat je verwacht."
    }
  ]
};
