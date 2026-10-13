window.quizData = {
  title: "Zelftest Hoofdstuk 2 - Selecties",
  questions: [
    {
      question:"Wat is een expressie?",
      answers:[
        "Een variabele declareren met `let` of `const`",
        "Een regel commentaar die begint met `//`",
        "Een stukje code dat evalueert tot (herleid wordt tot) één waarde",
        "Een `if`-structuur met accolades"
      ],
      correct:"C",
      feedback:"Een expressie is elk stukje code dat evalueert tot één waarde. `3 + 4` evalueert tot `7`, en `leeftijd >= 18` evalueert tot `true` of `false`."
    },
    {
      question:"Wat geven `5 == \"5\"` en `5 === \"5\"` als resultaat?",
      answers:["`true` en `false`","`false` en `true`","Beide `true`","Beide `false`"],
      correct:"A",
      feedback:"`==` vergelijkt alleen de waarde en negeert het type, dus `5 == \"5\"` is `true`. `===` vergelijkt waarde én type. Een number en een string zijn verschillende types, dus `5 === \"5\"` is `false`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console als de gebruiker `20` intikt?",
      code:`let leeftijd = prompt("Wat is je leeftijd?");
console.log(leeftijd === 20);`,
      answers:["`true`","`\"20\"`","Er ontstaat een fout","`false`"],
      correct:"D",
      feedback:"`prompt()` geeft altijd een string terug. `\"20\" === 20` is `false`, want een string en een number zijn verschillende types. Zet de invoer eerst om met `Number()`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console als de gebruiker `20` intikt?",
      code:`let leeftijd = Number(prompt("Wat is je leeftijd?"));
console.log(leeftijd === 20);`,
      answers:["`false`","`\"20\"`","`true`","Er ontstaat een fout"],
      correct:"C",
      feedback:"`Number()` zet de string `\"20\"` om naar het getal `20`. Nu vergelijk je twee numbers met dezelfde waarde, dus `20 === 20` is `true`. Vergelijk dit met de vorige vraag, waar de invoer een string bleef."
    },
    {
      question:"Wat is het resultaat van `\"7\" !== 7`?",
      answers:["`true`, want de types verschillen","`false`, want de waarde is dezelfde","Er ontstaat een fout","`\"7\"`"],
      correct:"A",
      feedback:"`!==` is de strikte \"niet gelijk\"-operator. Hij kijkt ook naar het type. Een string is niet hetzelfde als een number, dus het resultaat is `true`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let leeftijd = 16;
let heeftTicket = true;
console.log(leeftijd >= 18 && heeftTicket);`,
      answers:[
        "`true`, omdat `heeftTicket` waar is",
        "`true`, omdat minstens één voorwaarde waar is",
        "`false`, omdat niet beide voorwaarden waar zijn",
        "`undefined`"
      ],
      correct:"C",
      feedback:"Bij `&&` moeten beide voorwaarden waar zijn. `16 >= 18` is `false`, dus het geheel is `false`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let leeftijd = 70;
console.log(leeftijd <= 12 || leeftijd >= 65);`,
      answers:[
        "`false`, omdat 70 niet kleiner is dan of gelijk aan 12",
        "Er ontstaat een fout",
        "`70`",
        "`true`, omdat minstens één voorwaarde waar is"
      ],
      correct:"D",
      feedback:"Bij `||` volstaat het dat minstens één voorwaarde waar is. `70 >= 65` is `true`, dus het geheel is `true`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let isGeblokkeerd = false;
console.log(!isGeblokkeerd);`,
      answers:["`false`","`true`","`\"!false\"`","Er ontstaat een fout"],
      correct:"B",
      feedback:"`!` keert een boolean om. Het omgekeerde van `false` is `true`."
    },
    {
      question:"Je wil controleren of iemand een tiener is (13 tot en met 19 jaar). Welke voorwaarde is correct?",
      answers:[
        "`leeftijd >= 13 && leeftijd <= 19`",
        "`leeftijd >= 13 || leeftijd <= 19`",
        "`13 <= leeftijd <= 19`",
        "`leeftijd > 13 && leeftijd < 19`"
      ],
      correct:"A",
      feedback:"Beide grenzen moeten tegelijk kloppen, dus gebruik je `&&`. Met `||` (B) is de voorwaarde altijd waar. De wiskundige notatie (C) werkt niet in JavaScript. Bij D vallen 13 en 19 zelf uit de boot, want `>` en `<` sluiten de grens uit."
    },
    {
      question:"Je hebt deze code. Welke waarde heeft `magKorting`?",
      code:`let leeftijd = 70;
let heeftTicket = false;
let magKorting = (leeftijd < 12 || leeftijd > 65) && heeftTicket;`,
      answers:[
        "`true`, omdat 70 groter is dan 65",
        "`true`, omdat het deel tussen haakjes eerst berekend wordt",
        "`false`, want het deel tussen haakjes is `true`, maar `heeftTicket` is `false`",
        "Er ontstaat een fout"
      ],
      correct:"C",
      feedback:"Eerst wordt het deel tussen haakjes berekend: `false || true` geeft `true`. Daarna volgt `true && false`, en dat geeft `false`."
    },
    {
      question:"Je hebt deze code. Welke waarde krijgt `heeftTicket` als de gebruiker `Ja` (met hoofdletter) intikt?",
      code:`let heeftTicket = prompt("Heb je een ticket? (ja/nee)") === "ja";`,
      answers:[
        "`true`",
        "`false`, want `\"Ja\"` en `\"ja\"` zijn verschillende strings",
        "`\"Ja\"`",
        "`undefined`"
      ],
      correct:"B",
      feedback:"De vergelijking `=== \"ja\"` evalueert tot een boolean. Strings zijn hoofdlettergevoelig, dus `\"Ja\" === \"ja\"` is `false`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let temperatuur = 15;

if (temperatuur > 25) {
  console.log("Het is warm!");
}
console.log("Einde.");`,
      answers:[
        "`Het is warm!` en `Einde.`",
        "Er ontstaat een fout, want het `else`-blok ontbreekt",
        "Niets",
        "Enkel `Einde.`"
      ],
      correct:"D",
      feedback:"De voorwaarde `15 > 25` is `false`, dus het blok tussen de accolades wordt overgeslagen. Een `else` is optioneel. De code na de `if`-structuur wordt gewoon uitgevoerd."
    },
    {
      question:"Hoeveel blokken worden er uitgevoerd bij een `if...else`-structuur?",
      answers:[
        "Altijd precies één: ofwel het `if`-blok, ofwel het `else`-blok",
        "Soms allebei, als de voorwaarde `true` is",
        "Soms geen enkel, als de voorwaarde `false` is",
        "Dat hangt af van het aantal regels in elk blok"
      ],
      correct:"A",
      feedback:"Bij `if...else` wordt er altijd één van de twee blokken uitgevoerd, nooit beide en nooit geen enkel."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let score = 95;

if (score >= 50) {
  console.log("Voldoende.");
} else if (score >= 70) {
  console.log("Goed gedaan.");
} else if (score >= 90) {
  console.log("Uitstekend!");
}`,
      answers:["`Uitstekend!`","`Goed gedaan.`","`Voldoende.`","Alle drie de berichten"],
      correct:"C",
      feedback:"Zodra één voorwaarde `true` is, wordt enkel dat blok uitgevoerd en wordt de rest overgeslagen. `95 >= 50` is al meteen `true`. Begin daarom altijd met de strengste voorwaarde (`>= 90`)."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let score = 70;

if (score >= 90) {
  console.log("Uitstekend!");
} else if (score >= 70) {
  console.log("Goed gedaan.");
} else if (score >= 50) {
  console.log("Voldoende.");
} else {
  console.log("Onvoldoende, probeer opnieuw.");
}`,
      answers:["`Uitstekend!`","`Goed gedaan.`","`Voldoende.`","`Goed gedaan.` en `Voldoende.`"],
      correct:"B",
      feedback:"`70 >= 90` is `false`, dus JavaScript gaat verder. `70 >= 70` is `true`, dus enkel dat blok wordt uitgevoerd. De overige blokken worden overgeslagen."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console als de gebruiker `1` intikt?",
      code:`let keuze = prompt("Kies 1 of 2:");

switch (keuze) {
  case 1:
    console.log("Je koos één.");
    break;
  case 2:
    console.log("Je koos twee.");
    break;
  default:
    console.log("Ongeldige keuze.");
}`,
      answers:["`Je koos één.`","`Je koos één.` en `Je koos twee.`","Er ontstaat een fout","`Ongeldige keuze.`"],
      correct:"D",
      feedback:"Elke `case` gebruikt strikte vergelijking (`===`). `keuze` is de string `\"1\"`, en `\"1\" === 1` is `false`. Geen enkele `case` komt overeen, dus het `default`-blok wordt uitgevoerd. Oplossing: `Number(prompt(...))` of `case \"1\":`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let kleur = "rood";

switch (kleur) {
  case "rood":
    console.log("Stop");
  case "oranje":
    console.log("Opgelet");
    break;
  case "groen":
    console.log("Rijden");
}`,
      answers:["`Stop` en `Opgelet`","Enkel `Stop`","`Stop`, `Opgelet` en `Rijden`","Niets"],
      correct:"A",
      feedback:"Zonder `break` \"valt\" de code door naar de volgende `case`, ook als die niet overeenkomt. Na `Stop` wordt dus ook `Opgelet` getoond. Daar staat wel een `break`, dus `Rijden` wordt niet meer bereikt."
    },
    {
      question:"Wanneer wordt het `default`-blok van een `switch` uitgevoerd?",
      answers:[
        "Altijd, na elke `case`",
        "Het is verplicht en wordt altijd als eerste uitgevoerd",
        "Wanneer geen enkele `case` overeenkomt met de waarde",
        "Enkel wanneer de waarde een getal is"
      ],
      correct:"C",
      feedback:"`default` werkt als de `else` van een `switch`: het blok wordt uitgevoerd wanneer geen enkele `case` overeenkomt. `default` is optioneel."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let dag = "zondag";

switch (dag) {
  case "zaterdag":
  case "zondag":
    console.log("Het is weekend!");
    break;
  default:
    console.log("Gewone schooldag.");
}`,
      answers:[
        "Niets, want `case \"zondag\"` heeft geen eigen code",
        "`Het is weekend!`",
        "`Gewone schooldag.`",
        "Er ontstaat een fout"
      ],
      correct:"B",
      feedback:"Je kan meerdere `case`-waarden stapelen zodat ze hetzelfde blok delen. `\"zondag\"` komt overeen, dus de code eronder wordt uitgevoerd tot aan de `break`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let leeftijd = 20;
let heeftTicket = false;

if (leeftijd >= 18) {
  if (heeftTicket) {
    console.log("Welkom, volwassene met ticket!");
  } else {
    console.log("Je bent meerderjarig, maar je hebt geen ticket.");
  }
} else {
  console.log("Je bent minderjarig.");
}`,
      answers:[
        "`Welkom, volwassene met ticket!`",
        "`Je bent minderjarig.`",
        "`Je bent meerderjarig, maar je hebt geen ticket.` en `Je bent minderjarig.`",
        "`Je bent meerderjarig, maar je hebt geen ticket.`"
      ],
      correct:"D",
      feedback:"`20 >= 18` is `true`, dus JavaScript gaat het buitenste `if`-blok binnen. Daar wordt de geneste voorwaarde gecontroleerd: `heeftTicket` is `false`, dus het binnenste `else`-blok wordt uitgevoerd."
    }
  ]
};
