window.quizData = {
  title: "Zelftest Hoofdstuk 3 - herhalingen (lussen)",
  questions: [
    {
      question:"Wat is een herhalingsstructuur (lus)?",
      answers:[
        "Een stuk code dat één keer uitgevoerd wordt als een voorwaarde waar is",
        "Een variabele die doorheen het programma een waarde optelt",
        "Een manier om je code over meerdere bestanden te verdelen",
        "Een structuur die een stuk code meerdere keren uitvoert zonder dat je het moet kopiëren"
      ],
      correct:"D",
      feedback:"Een lus laat je een stuk code meerdere keren uitvoeren. Code die één keer uitgevoerd wordt als een voorwaarde waar is, is een selectie (`if`)."
    },
    {
      question:"Welke rol heeft `i < 5` in `for (let i = 0; i < 5; i++)`?",
      answers:[
        "Het is de initialisatie",
        "Het is de update",
        "Het is de voorwaarde, die vóór elke herhaling gecontroleerd wordt",
        "Het is de accumulator"
      ],
      correct:"C",
      feedback:"Een `for`-lus heeft drie onderdelen: de initialisatie (`let i = 0`), de voorwaarde (`i < 5`) en de update (`i++`). Zolang de voorwaarde `true` is, gaat de lus door."
    },
    {
      question:"Wanneer wordt de initialisatie (`let i = 0`) van een `for`-lus uitgevoerd?",
      answers:[
        "Eén keer, vóór de lus start",
        "Vóór elke herhaling",
        "Na elke herhaling",
        "Enkel wanneer de voorwaarde `false` wordt"
      ],
      correct:"A",
      feedback:"De initialisatie wordt één keer uitgevoerd, vóór de lus start. De voorwaarde wordt vóór elke herhaling gecontroleerd en de update gebeurt na elke herhaling."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`for (let i = 0; i < 3; i++) {
  console.log(i);
}`,
      answers:["`1`, `2`, `3`","`0`, `1`, `2`, `3`","`1`, `2`","`0`, `1`, `2`"],
      correct:"D",
      feedback:"`i` start op `0`. Bij `i = 3` is de voorwaarde `3 < 3` `false` en stopt de lus. `3` wordt dus niet meer getoond."
    },
    {
      question:"Hoeveel keer wordt deze lus uitgevoerd?",
      code:`for (let i = 0; i <= 10; i++) {
  console.log(i);
}`,
      answers:["10 keer","11 keer","9 keer","12 keer"],
      correct:"B",
      feedback:"`i` gaat van `0` tot en met `10`. Dat zijn 11 waarden. Bekijk de startwaarde en de voorwaarde (`<` of `<=`) altijd samen."
    },
    {
      question:"Hoeveel keer wordt deze lus uitgevoerd?",
      code:`for (let i = 1; i < 10; i++) {
  console.log(i);
}`,
      answers:["9 keer","10 keer","11 keer","8 keer"],
      correct:"A",
      feedback:"`i` gaat van `1` tot en met `9`, want bij `i = 10` is `10 < 10` `false`. Dat zijn 9 herhalingen."
    },
    {
      question:"Je wil aftellen van 10 tot en met 1. Welke lus is correct?",
      answers:[
        "`for (let i = 10; i >= 1; i++)`",
        "`for (let i = 1; i <= 10; i--)`",
        "`for (let i = 10; i >= 1; i--)`",
        "`for (let i = 10; i > 1; i--)`"
      ],
      correct:"C",
      feedback:"Je start op `10`, gaat door zolang `i >= 1` en verlaagt `i` telkens met `i--`. Bij A en B blijft de voorwaarde altijd waar (oneindige lus). Bij D stopt de lus al na `2`."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`for (let i = 0; i <= 10; i += 5) {
  console.log(i);
}`,
      answers:["`0`, `5`","`5`, `10`","`0`, `5`, `10`, `15`","`0`, `5`, `10`"],
      correct:"D",
      feedback:"`i += 5` verhoogt `i` telkens met 5. De waarden zijn `0`, `5` en `10`. Bij `15` is `15 <= 10` `false` en stopt de lus."
    },
    {
      question:"Je hebt deze code. Wat gebeurt er?",
      code:`let i = 0;
while (i < 5) {
  console.log(i);
}`,
      answers:[
        "De console toont `0` tot en met `4`",
        "Een oneindige lus: de console blijft `0` tonen",
        "Er ontstaat meteen een fout",
        "Er verschijnt niets"
      ],
      correct:"B",
      feedback:"Een `while`-lus heeft geen ingebouwde update. Omdat `i++` ontbreekt, blijft `i` altijd `0` en blijft `0 < 5` altijd `true`."
    },
    {
      question:"Wanneer kies je best voor een `while`-lus in plaats van een `for`-lus?",
      answers:[
        "Wanneer je op voorhand niet exact weet hoeveel herhalingen nodig zijn, maar wel wanneer je moet stoppen",
        "Wanneer je precies van 1 tot 10 wil tellen",
        "Altijd, want `while` is sneller dan `for`",
        "Wanneer je geen voorwaarde nodig hebt"
      ],
      correct:"A",
      feedback:"Weet je hoeveel keer je wil herhalen, dan is `for` het duidelijkst. Weet je enkel wanneer je moet stoppen, dan is `while` handiger."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let teller = 10;
do {
  console.log(teller);
  teller++;
} while (teller < 5);`,
      answers:["Niets","`10`","`10`, `11`, `12`, `13`, `14`","Een oneindige reeks getallen"],
      correct:"B",
      feedback:"Bij `do...while` wordt de voorwaarde pas ná het blok gecontroleerd. Het blok wordt dus één keer uitgevoerd en toont `10`. Daarna is `11 < 5` `false` en stopt de lus."
    },
    {
      question:"Wat is het belangrijkste verschil tussen `while` en `do...while`?",
      answers:[
        "`do...while` heeft geen voorwaarde nodig",
        "`while` kan enkel met getallen werken",
        "`do...while` voert het blok minstens één keer uit, omdat de voorwaarde pas achteraf gecontroleerd wordt",
        "Er is geen verschil"
      ],
      correct:"C",
      feedback:"Bij `while` wordt de voorwaarde vóór het blok gecontroleerd, dus het blok kan nul keer uitgevoerd worden. Bij `do...while` gebeurt de controle pas na het blok."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let getal = 16;
let stappen = 0;
while (getal > 1) {
  getal = getal / 2;
  stappen++;
}
console.log(stappen);`,
      answers:["`3`","`5`","`16`","`4`"],
      correct:"D",
      feedback:"`getal` wordt telkens gehalveerd: 16, 8, 4, 2, 1. Dat zijn 4 stappen. Bij `1` is `1 > 1` `false` en stopt de lus."
    },
    {
      question:"Waarom moet bij FizzBuzz de controle \"deelbaar door 3 én door 5\" als eerste in de `if`/`else if`-keten staan?",
      code:`for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}`,
      answers:[
        "Anders wordt die nooit bereikt: bij 15 is \"deelbaar door 3\" al `true` en wordt de rest overgeslagen",
        "Omdat JavaScript `&&` altijd als eerste moet uitvoeren",
        "Omdat de `for`-lus anders niet start",
        "Dat maakt niet uit, de volgorde is vrij te kiezen"
      ],
      correct:"A",
      feedback:"Zodra één voorwaarde in de keten `true` is, worden de andere overgeslagen. Begin daarom altijd met de strengste voorwaarde."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let getal = 15;

if (getal % 3 === 0) {
  console.log("Fizz");
} else if (getal % 5 === 0) {
  console.log("Buzz");
} else if (getal % 3 === 0 && getal % 5 === 0) {
  console.log("FizzBuzz");
}`,
      answers:["`FizzBuzz`","`Buzz`","`Fizz`","`Fizz` en `Buzz`"],
      correct:"C",
      feedback:"`15 % 3 === 0` is `true`, dus enkel `Fizz` wordt getoond. De controle op `FizzBuzz` staat te laat in de keten en wordt nooit bereikt."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let som = 0;
for (let i = 1; i <= 4; i++) {
  som += i;
}
console.log(som);`,
      answers:["`4`","`10`","`0`","`6`"],
      correct:"B",
      feedback:"`som` is een accumulator: elke herhaling wordt `i` erbij opgeteld. 1 + 2 + 3 + 4 = 10."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let som = 0;
for (let i = 1; i <= 3; i++) {
  som = 0;
  som += i;
}
console.log(som);`,
      answers:["`6`","`0`","`3`","`1`"],
      correct:"C",
      feedback:"`som` wordt bij elke herhaling terug op `0` gezet. Na de laatste herhaling is `som` dus gewoon `3`. Geef een accumulator zijn startwaarde vóór de lus, niet erin."
    },
    {
      question:"Je hebt deze code. Wat verschijnt er in de console?",
      code:`let aantal = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    aantal++;
  }
}
console.log(aantal);`,
      answers:["`3`","`10`","`18`","`4`"],
      correct:"A",
      feedback:"`aantal` is een teller: hij houdt bij hoe vaak iets gebeurt. Tussen 1 en 10 zijn enkel 3, 6 en 9 deelbaar door 3, dus de teller eindigt op `3`."
    },
    {
      question:"Hoeveel keer wordt `console.log` uitgevoerd?",
      code:`for (let rij = 1; rij <= 2; rij++) {
  for (let stoel = 1; stoel <= 5; stoel++) {
    console.log(rij + "-" + stoel);
  }
}`,
      answers:["7 keer","5 keer","2 keer","10 keer"],
      correct:"D",
      feedback:"De binnenste lus loopt voor elke herhaling van de buitenste lus volledig af. Dat is 2 × 5 = 10 keer."
    },
    {
      question:"Je hebt deze code. In welke volgorde verschijnt de uitvoer?",
      code:`for (let a = 1; a <= 2; a++) {
  for (let b = 1; b <= 2; b++) {
    console.log(a + "-" + b);
  }
}`,
      answers:[
        "`1-1`, `2-1`, `1-2`, `2-2`",
        "`1-1`, `1-2`, `2-1`, `2-2`",
        "`1-1`, `2-2`",
        "`1-2`, `2-1`"
      ],
      correct:"B",
      feedback:"De buitenste lus start met `a = 1`. De binnenste lus loopt dan volledig af (`b` = 1 en 2). Pas daarna gaat de buitenste lus naar `a = 2` en start de binnenste lus opnieuw bij `b = 1`."
    }
  ]
};
