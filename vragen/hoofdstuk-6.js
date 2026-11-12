window.quizData = {
  title: "Zelftest Hoofdstuk 6 - Van logica naar beeld",
  questions: [
    {
      question:"Hoe vaak worden `setup()` en `draw()` uitgevoerd?",
      answers:[
        "`setup()` één keer bij het opstarten, `draw()` continu (standaard 60 keer per seconde)",
        "`setup()` continu, `draw()` één keer",
        "Allebei één keer bij het opstarten",
        "Allebei continu, 60 keer per seconde"
      ],
      correct:"A",
      feedback:"`setup()` wordt precies één keer uitgevoerd bij het opstarten. `draw()` wordt daarna continu herhaald, standaard 60 keer per seconde. Je kan `draw()` zien als een lus die p5.js voor je blijft uitvoeren."
    },
    {
      question:"Je hebt deze code. Wat stellen de getallen `600` en `400` voor?",
      code:`function setup() {
  createCanvas(600, 400);
}`,
      answers:[
        "Eerst de breedte, dan de hoogte van het canvas, in pixels",
        "De x- en y-positie van het canvas op het scherm",
        "Eerst de hoogte, dan de breedte van het canvas, in pixels",
        "Het aantal vormen dat je mag tekenen"
      ],
      correct:"A",
      feedback:"`createCanvas(breedte, hoogte)` maakt een tekenoppervlak. Het eerste getal is de breedte, het tweede de hoogte, allebei in pixels."
    },
    {
      question:"Waar ligt het punt `(0, 0)`, de oorsprong, op het canvas?",
      answers:[
        "In het midden",
        "Linksboven in de hoek",
        "Linksonder in de hoek",
        "Rechtsboven in de hoek"
      ],
      correct:"B",
      feedback:"Op het canvas ligt de oorsprong `(0, 0)` linksboven. `x` telt pixels naar rechts vanaf de linkerrand, `y` telt pixels naar onder vanaf de bovenrand."
    },
    {
      question:"In p5.js loopt de y-as anders dan in de wiskundeles. Wat betekent een grotere y-waarde?",
      answers:[
        "Verder naar rechts op het scherm",
        "Hoger op het scherm",
        "Lager op het scherm",
        "Verder naar links op het scherm"
      ],
      correct:"C",
      feedback:"In p5.js loopt de y-as naar onder. Een grotere y betekent dus lager op het scherm. Dat is net omgekeerd aan de wiskundeles."
    },
    {
      question:"Je hebt een canvas van 600 bij 400 pixels. Waar verschijnt deze cirkel?",
      code:`circle(550, 50, 40);`,
      answers:["Linksonder","In het midden","Linksboven","Rechtsboven"],
      correct:"D",
      feedback:"`x = 550` ligt dicht bij de rechterrand en `y = 50` dicht bij de bovenrand. De cirkel komt dus rechtsboven terecht."
    },
    {
      question:"Welke code tekent een cirkel die altijd precies in het midden van het canvas staat, hoe groot je het canvas ook maakt?",
      answers:[
        "`circle(300, 200, 50);`",
        "`circle(width / 2, height / 2, 50);`",
        "`circle(0, 0, 50);`",
        "`circle(width, height, 50);`"
      ],
      correct:"B",
      feedback:"`width` en `height` zijn variabelen met de breedte en hoogte van je canvas. `width / 2` en `height / 2` wijzen altijd naar het midden, ook als je het canvas later groter maakt."
    },
    {
      question:"Bij welke twee vormen is `(x, y)` het middelpunt in plaats van de linkerbovenhoek?",
      answers:[
        "`rect()` en `square()`",
        "`line()` en `point()`",
        "`circle()` en `ellipse()`",
        "`triangle()` en `quad()`"
      ],
      correct:"C",
      feedback:"Bij `circle()` en `ellipse()` is `(x, y)` het middelpunt. Bij `rect()` en `square()` is `(x, y)` juist de linkerbovenhoek. Je kan dit aanpassen met `rectMode()` en `ellipseMode()`, bv. `rectMode(CENTER)` of `ellipseMode(CORNER)`."
    },
    {
      question:"Je hebt deze code. Wat is de straal van deze cirkel?",
      code:`circle(200, 200, 80);`,
      answers:["`80`","`160`","`40`","`200`"],
      correct:"C",
      feedback:"Het derde getal van `circle()` is de diameter, niet de straal. Een diameter van 80 betekent een straal van 40."
    },
    {
      question:"Je hebt deze code. Wat betekenen deze vier getallen?",
      code:`rect(100, 50, 80, 40);`,
      answers:[
        "Middelpunt (100, 50), breedte 80, hoogte 40",
        "Linkerbovenhoek (100, 50), breedte 80, hoogte 40",
        "Linkerbovenhoek (100, 50), rechteronderhoek (80, 40)",
        "Breedte 100, hoogte 50, en de positie (80, 40)"
      ],
      correct:"B",
      feedback:"Bij `rect(x, y, b, h)` zijn de eerste twee getallen de linkerbovenhoek, het derde de breedte en het vierde de hoogte."
    },
    {
      question:"Je hebt deze code. Wat zie je op het canvas?",
      code:`fill(255, 0, 0); // rood
circle(150, 150, 120);
fill(0, 0, 255); // blauw
square(150, 150, 100);`,
      answers:[
        "Het blauwe vierkant ligt over de rode cirkel heen",
        "De rode cirkel ligt over het blauwe vierkant heen",
        "Enkel de rode cirkel, het vierkant is onzichtbaar",
        "De twee vormen vermengen zich tot paars"
      ],
      correct:"A",
      feedback:"p5.js tekent zoals een schilder: wat later in de code komt, ligt bovenop. Het vierkant wordt na de cirkel getekend, dus het ligt erover."
    },
    {
      question:"Je hebt deze code. Wat zie je?",
      code:`noFill();
circle(200, 200, 100);`,
      answers:[
        "Een volledig rode cirkel",
        "Alleen de rand van de cirkel, de binnenkant is leeg",
        "Niets, de cirkel is volledig onzichtbaar",
        "Een zwarte, gevulde cirkel"
      ],
      correct:"B",
      feedback:"`noFill()` zet de vulling uit, dus de vorm wordt hol. Je ziet alleen de rand (standaard zwart) en de achtergrond schijnt door de binnenkant. Wil je de rand ook weg, dan gebruik je `noStroke()`."
    },
    {
      question:"Je hebt deze code. Welke kleur krijgt het canvas?",
      code:`background(128);`,
      answers:["Rood","Middengrijs","Zwart","Wit"],
      correct:"B",
      feedback:"Eén getal geeft alle drie de lampjes dezelfde waarde: een grijstint. `0` is zwart, `255` is wit, en `128` ligt daar ongeveer tussenin: middengrijs."
    },
    {
      question:"Welke code geeft precies dezelfde kleur als `fill(100, 100, 100)`?",
      answers:["`fill(300)`","`fill(100)`","`fill(100, 100)`","`fill(0)`"],
      correct:"B",
      feedback:"Drie gelijke RGB-getallen geven een grijstint. `fill(100, 100, 100)` is dus hetzelfde als `fill(100)`. `fill(100, 100)` leest p5.js als grijswaarde 100 met alpha 100."
    },
    {
      question:"Je hebt deze code. Welke kleur is dit?",
      code:`fill(255, 255, 0);`,
      answers:[
        "rood + blauw = magenta",
        "rood + groen + blauw = wit",
        "rood + groen = geel",
        "alle drie gelijk = grijs"
      ],
      correct:"C",
      feedback:"Bij drie getallen leest p5.js ze als `fill(r, g, b)`: rood, groen, blauw. Rood en groen staan aan (255), blauw uit (0). Met licht geeft rood + groen geel."
    },
    {
      question:"Je hebt deze code. Wat betekent het vierde getal, `150`?",
      code:`fill(255, 0, 0, 150);`,
      answers:[
        "De helderheid van de kleur",
        "Een tweede rode waarde",
        "De transparantie (alpha): hoe doorzichtig de kleur is",
        "De lijndikte van de rand"
      ],
      correct:"C",
      feedback:"Het vierde getal is de alpha-waarde: de transparantie. Van 0 (volledig doorzichtig) tot 255 (volledig ondoorzichtig). `150` is ongeveer half doorzichtig."
    },
    {
      question:"Je hebt deze code. Hoe leest p5.js deze twee getallen?",
      code:`fill(200, 100);`,
      answers:[
        "Grijswaarde 200 en alpha (transparantie) 100",
        "Rood 200 en groen 100",
        "x-positie 200 en y-positie 100",
        "Er ontstaat een fout: `fill()` heeft één of drie getallen nodig"
      ],
      correct:"A",
      feedback:"Het aantal getallen bepaalt hoe p5.js ze leest. Bij twee getallen is het eerste een grijswaarde en het tweede de alpha."
    },
    {
      question:"Je hebt deze code. Welke kleur heeft de lijn?",
      code:`fill(255, 0, 0); // rood
line(50, 50, 350, 50);`,
      answers:["Rood","Zwart","Wit","De lijn is onzichtbaar"],
      correct:"B",
      feedback:"Een `line()` heeft geen binnenkant, dus `fill()` heeft er geen effect op. De kleur komt van `stroke()`, die hier niet ingesteld is, dus de lijn blijft zwart (de standaard)."
    },
    {
      question:"Je hebt deze code. Wat zie je?",
      code:`noStroke();
line(50, 50, 350, 50);`,
      answers:[
        "Een zwarte lijn",
        "Niets: de lijn is onzichtbaar",
        "Een lijn zonder kleur, dus wit",
        "Er ontstaat een fout"
      ],
      correct:"B",
      feedback:"`noStroke()` zet de rand- en lijnkleur uit. Een lijn bestaat alleen uit 'rand', dus na `noStroke()` is ze volledig onzichtbaar."
    },
    {
      question:"Je hebt deze code. Welke kleur heeft de tweede cirkel (`circle(160, 100, 60)`)?",
      code:`fill(255, 0, 0); // rood
circle(80, 100, 60);
circle(160, 100, 60);

fill(0, 0, 255); // blauw
circle(240, 100, 60);`,
      answers:["Blauw","Wit","Rood","Geen vulling"],
      correct:"C",
      feedback:"`fill()` zet een instelling die blijft gelden voor alles wat daarna komt. De eerste twee cirkels zijn dus allebei rood. Pas bij de tweede `fill()` wordt de kleur blauw."
    },
    {
      question:"Je hebt deze code. Wat is het effect van `strokeWeight(8)`?",
      code:`strokeWeight(8);
line(50, 100, 350, 100);
circle(200, 200, 80);`,
      answers:[
        "Alleen de lijn wordt 8 pixels dik, de cirkel niet",
        "Zowel de lijn als de rand van de cirkel worden 8 pixels dik",
        "De cirkel krijgt een diameter van 8",
        "Niets, want `strokeWeight()` werkt alleen op lijnen"
      ],
      correct:"B",
      feedback:"`strokeWeight()` is een instelling die blijft gelden voor alles wat daarna komt. Zowel de lijn als de rand van de cirkel worden dus 8 pixels dik."
    },
    {
      question:"Je hebt deze code. Wat doet `rectMode(CENTER)`?",
      code:`rectMode(CENTER);
rect(width / 2, height / 2, 100, 60);`,
      answers:[
        "Het tekent de rechthoek twee keer zo groot",
        "`(x, y)` wordt nu het middelpunt van de rechthoek in plaats van de linkerbovenhoek",
        "Het centreert alle tekst op het canvas",
        "Het maakt de hoeken van de rechthoek rond"
      ],
      correct:"B",
      feedback:"Met `rectMode(CENTER)` is `(x, y)` van `rect()` en `square()` het middelpunt. Zo teken je meteen in het midden zonder zelf te rekenen. De standaard is `CORNER`."
    },
    {
      question:"Je hebt deze code. Welke kleur heeft de derde cirkel (`circle(320, 150, 60)`)?",
      code:`fill(0, 0, 255); // blauw
circle(80, 150, 60);

push();
fill(255, 0, 0); // rood
circle(200, 150, 60);
pop();

circle(320, 150, 60);`,
      answers:["Rood","Blauw","Wit","Geen vulling"],
      correct:"B",
      feedback:"`push()` bewaart de instellingen en `pop()` zet ze terug. De `fill(255, 0, 0)` geldt enkel voor de tweede cirkel. Na `pop()` staat de vulkleur terug op blauw."
    },
    {
      question:"Wat is het verschil tussen de array-methode `bomen.push(boom)` uit hoofdstuk 5 en de functie `push()` van p5.js uit hoofdstuk 6?",
      answers:[
        "Er is geen verschil: de array-methode en de functie van p5.js doen hetzelfde",
        "De array-methode `bomen.push(boom)` voegt iets toe aan een array; de functie `push()` van p5.js bewaart tekeninstellingen",
        "De functie `push()` van p5.js werkt alleen op arrays",
        "De array-methode `bomen.push(boom)` tekent een vorm op het canvas"
      ],
      correct:"B",
      feedback:"Het zijn twee verschillende dingen met dezelfde naam. De array-methode `bomen.push(boom)` voegt een element toe aan een array (na een array en een punt). De functie `push()` van p5.js bewaart tekeninstellingen (los, zonder iets ervoor)."
    },
    {
      question:"Je hebt deze code. Waarom werkt deze code niet?",
      code:`let hemelblauw = color(135, 206, 235);

function setup() {
  createCanvas(400, 300);
}`,
      answers:[
        "`color()` bestaat niet in p5.js",
        "Je kan een kleur niet in een variabele bewaren: je moet de drie getallen altijd rechtstreeks in `fill()` schrijven",
        "`color()` werkt pas als p5.js opgestart is, dus na `createCanvas()`. Je geeft de variabele pas een waarde in `setup()`",
        "De variabele moet `const` zijn in plaats van `let`"
      ],
      correct:"C",
      feedback:"`color()` werkt pas zodra p5.js opgestart is. Je mag de variabele bovenaan declareren, maar je geeft ze pas een waarde binnenin `setup()`, na `createCanvas()`."
    },
    {
      question:"Je hebt deze code. Hoeveel cirkels worden er getekend, en op welke x-posities?",
      code:`for (let i = 0; i < 4; i++) {
  let x = 40 + i * 50;
  circle(x, 100, 30);
}`,
      answers:[
        "4 cirkels, op x = 40, 90, 140, 190",
        "4 cirkels, op x = 50, 100, 150, 200",
        "3 cirkels, op x = 40, 90, 140",
        "5 cirkels, op x = 0, 40, 90, 140, 190"
      ],
      correct:"A",
      feedback:"De lus loopt met `i` van 0 tot en met 3, dus 4 keer. Telkens is `x = 40 + i * 50`: `40`, `90`, `140` en `190`."
    },
    {
      question:"Je hebt deze code. Hoeveel vierkantjes worden er in totaal getekend?",
      code:`for (let rij = 0; rij < 3; rij++) {
  for (let kolom = 0; kolom < 5; kolom++) {
    square(kolom * 20, rij * 20, 15);
  }
}`,
      answers:["`8`","`5`","`3`","`15`"],
      correct:"D",
      feedback:"De buitenste lus loopt 3 keer (de rijen), en voor elke rij loopt de binnenste lus 5 keer (de kolommen). In totaal dus 3 x 5 = 15 vierkantjes."
    },
    {
      question:"Je hebt deze code. Wat tekent deze code?",
      code:`let ballonnen = [
  { x: 80, y: 150, d: 60 },
  { x: 180, y: 110, d: 80 }
];

function draw() {
  background(220); // lichtgrijs
  for (let ballon of ballonnen) {
    circle(ballon.x, ballon.y, ballon.d);
  }
}`,
      answers:[
        "Eén cirkel met middelpunt (80, 150) en diameter 60",
        "Twee cirkels, elk met een eigen positie en diameter uit de array",
        "Een foutmelding, want je kan geen objecten in een array stoppen",
        "Twee cirkels op dezelfde plaats"
      ],
      correct:"B",
      feedback:"De `for...of`-lus doorloopt de array. Bij elke herhaling is `ballon` het volgende object, en met `ballon.x`, `ballon.y` en `ballon.d` lees je de eigenschappen uit. Zo krijgt elke cirkel zijn eigen positie en grootte."
    },
    {
      question:"Je hebt deze code. Waarom staat de inhoud van `tekenZon()` tussen `push()` en `pop()`?",
      code:`function tekenZon(x, y, diameter) {
  push();
  noStroke();
  fill(255, 220, 0); // geel
  circle(x, y, diameter);
  pop();
}

function draw() {
  background(30, 40, 90); // donkerblauw
  tekenZon(100, 100, 40);
  rect(20, 350, 50, 30);
}`,
      answers:[
        "Zonder `push()` en `pop()` wordt de functie niet uitgevoerd",
        "Zodat de `noStroke()` en `fill()` binnen de functie blijven en de `rect()` erna niet beïnvloeden",
        "Omdat een functie altijd met `push()` moet beginnen",
        "Zodat de zon 60 keer per seconde getekend wordt"
      ],
      correct:"B",
      feedback:"De functie verandert instellingen (`noStroke()` en `fill()`). Dankzij `push()` en `pop()` blijven die binnen de functie, en is de `rect()` erna niet geel en wel met rand."
    }
  ]
};
