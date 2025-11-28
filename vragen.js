const QUIZ_DATA = {
    questions: [

        // --- MOEILIJKHEIDSGRAAD 1 ---
        {
            "id": "hist_0002",
            "category": "Geschiedenis",
            "difficulty": 1,
            "question": "Wie was de eerste president van de Verenigde Staten?",
            "answer": "George Washington",
            "acceptedAnswers": [
                "Washington",
                "G. Washington",
                "George Washington"
            ]
        },
        {
            "id": "hist_0007",
            "category": "Geschiedenis",
            "difficulty": 1,
            "question": "Wie leidde nazi-Duitsland tijdens de Tweede Wereldoorlog?",
            "answer": "Adolf Hitler",
            "acceptedAnswers": [
                "Hitler",
                "A. Hitler",
                "Adolf Hitler"
            ]
        },
        {
            "id": "hist_0011",
            "category": "Geschiedenis",
            "difficulty": 1,
            "question": "Welke stad was het centrum van het Romeinse Rijk?",
            "answer": "Rome",
            "acceptedAnswers": [
                "Roma",
                "Rome"
            ]
        },
        {
            "id": "hist_0015",
            "category": "Geschiedenis",
            "difficulty": 1,
            "question": "Welke Amerikaanse burgerrechtenleider hield de speech ‘I Have a Dream’?",
            "answer": "Martin Luther King",
            "acceptedAnswers": [
                "Martin Luther King Jr.",
                "MLK",
                "Martin Luther King"
            ]
        },
        {
            "id": "geo_0001",
            "category": "Aardrijkskunde",
            "difficulty": 1,
            "question": "Wat is de hoofdstad van Canada?",
            "answer": "Ottawa",
            "acceptedAnswers": [
                "Ottawa"
            ]
        },
        {
            "id": "geo_0002",
            "category": "Aardrijkskunde",
            "difficulty": 1,
            "question": "In welke stad staat de Eiffeltoren?",
            "answer": "Parijs",
            "acceptedAnswers": [
                "Paris",
                "Parijs"
            ]
        },
        {
            "id": "geo_0003",
            "category": "Aardrijkskunde",
            "difficulty": 1,
            "question": "In welk land staat de Taj Mahal?",
            "answer": "India",
            "acceptedAnswers": [
                "India",
                "Republiek India"
            ]
        },
        {
            "id": "geo_0006",
            "category": "Aardrijkskunde",
            "difficulty": 1,
            "question": "Welke woestijn is de grootste hete woestijn ter wereld?",
            "answer": "Sahara",
            "acceptedAnswers": [
                "Sahara-woestijn",
                "Sahara"
            ]
        },
        {
            "id": "geo_0008",
            "category": "Aardrijkskunde",
            "difficulty": 1,
            "question": "Op welk continent ligt Egypte?",
            "answer": "Afrika",
            "acceptedAnswers": [
                "Afrika"
            ]
        },
        {
            "id": "geo_0010",
            "category": "Aardrijkskunde",
            "difficulty": 1,
            "question": "Welke stad wordt ook wel ‘The Big Apple’ genoemd?",
            "answer": "New York",
            "acceptedAnswers": [
                "New York City",
                "NYC",
                "New York"
            ]
        },
        {
            "id": "sci_0001",
            "category": "Wetenschap & Natuur",
            "difficulty": 1,
            "question": "Wat is de chemische formule van water?",
            "answer": "H2O",
            "acceptedAnswers": [
                "H₂O",
                "H2O",
                "water"
            ]
        },
        {
            "id": "sci_0002",
            "category": "Wetenschap & Natuur",
            "difficulty": 1,
            "question": "Hoe heet de kracht die voorwerpen naar de aarde trekt?",
            "answer": "zwaartekracht",
            "acceptedAnswers": [
                "gravitatie",
                "gravitiekracht",
                "zwaartekracht"
            ]
        },
        {
            "id": "sci_0003",
            "category": "Wetenschap & Natuur",
            "difficulty": 1,
            "question": "Welke planeet staat bekend als de ‘Rode Planeet’?",
            "answer": "Mars",
            "acceptedAnswers": [
                "Mars"
            ]
        },
        {
            "id": "sci_0007",
            "category": "Wetenschap & Natuur",
            "difficulty": 1,
            "question": "Hoeveel poten heeft een spin?",
            "answer": "8",
            "acceptedAnswers": [
                "acht",
                "8"
            ]
        },
        {
            "id": "sci_0010",
            "category": "Wetenschap & Natuur",
            "difficulty": 1,
            "question": "Welk orgaan pompt bloed door het lichaam?",
            "answer": "hart",
            "acceptedAnswers": [
                "het hart",
                "hart"
            ]
        },
        {
            "id": "sci_0011",
            "category": "Wetenschap & Natuur",
            "difficulty": 1,
            "question": "Wat is het hardste natuurlijke materiaal op aarde?",
            "answer": "diamant",
            "acceptedAnswers": [
                "diamond",
                "diamant"
            ]
        },
        {
            "id": "sci_0016",
            "category": "Wetenschap & Natuur",
            "difficulty": 1,
            "question": "Wat is het grootste orgaan van het menselijk lichaam?",
            "answer": "huid",
            "acceptedAnswers": [
                "de huid",
                "huid"
            ]
        },
        {
            "id": "art_0001",
            "category": "Kunst & Literatuur",
            "difficulty": 1,
            "question": "Wie schilderde de ‘Mona Lisa’?",
            "answer": "Leonardo da Vinci",
            "acceptedAnswers": [
                "Da Vinci",
                "Leonardo",
                "Leonardo da Vinci"
            ]
        },
        {
            "id": "art_0002",
            "category": "Kunst & Literatuur",
            "difficulty": 1,
            "question": "Wie schreef ‘Romeo en Julia’?",
            "answer": "William Shakespeare",
            "acceptedAnswers": [
                "Shakespeare",
                "W. Shakespeare",
                "William Shakespeare"
            ]
        },
        {
            "id": "art_0008",
            "category": "Kunst & Literatuur",
            "difficulty": 1,
            "question": "Welke Belgische stripheld met kuif reist de wereld rond met zijn hondje?",
            "answer": "Kuifje",
            "acceptedAnswers": [
                "Tintin",
                "Hergés Kuifje",
                "Kuifje"
            ]
        },
        {
            "id": "art_0012",
            "category": "Kunst & Literatuur",
            "difficulty": 1,
            "question": "Tot welke kunstvorm behoort Michelangelo’s ‘David’?",
            "answer": "beeldhouwkunst",
            "acceptedAnswers": [
                "sculptuur",
                "sculpture",
                "beeldhouwwerk",
                "beeldhouwkunst"
            ]
        },
        {
            "id": "ent_0001",
            "category": "Entertainment",
            "difficulty": 1,
            "question": "Welke sciencefictionfilm introduceerde Neo en de rode of blauwe pil?",
            "answer": "The Matrix",
            "acceptedAnswers": [
                "Matrix",
                "The Matrix"
            ]
        },
        {
            "id": "ent_0002",
            "category": "Entertainment",
            "difficulty": 1,
            "question": "Welke sitcom draait om zes vrienden in New York?",
            "answer": "Friends",
            "acceptedAnswers": [
                "Friends"
            ]
        },
        {
            "id": "ent_0005",
            "category": "Entertainment",
            "difficulty": 1,
            "question": "Welke loodgieter is het bekendste gamepersonage van Nintendo?",
            "answer": "Mario",
            "acceptedAnswers": [
                "Super Mario",
                "Mario"
            ]
        },
        {
            "id": "ent_0008",
            "category": "Entertainment",
            "difficulty": 1,
            "question": "Welke filmreeks speelt zich af in ‘a galaxy far, far away’?",
            "answer": "Star Wars",
            "acceptedAnswers": [
                "Star Wars"
            ]
        },
        {
            "id": "ent_0014",
            "category": "Entertainment",
            "difficulty": 1,
            "question": "Hoe heet het gele Pokémon-mascotte dat ‘Pika!’ zegt?",
            "answer": "Pikachu",
            "acceptedAnswers": [
                "Pikachu"
            ]
        },
        {
            "id": "ent_0017",
            "category": "Entertainment",
            "difficulty": 1,
            "question": "Welke datingapp staat bekend om ‘swipen’ naar links of rechts?",
            "answer": "Tinder",
            "acceptedAnswers": [
                "Tinder"
            ]
        },
        {
            "id": "spo_0001",
            "category": "Sport & Vrije Tijd",
            "difficulty": 1,
            "question": "Welke sport wordt gespeeld met een ronde bal en elf spelers per team op een veld?",
            "answer": "voetbal",
            "acceptedAnswers": [
                "soccer",
                "voetbal"
            ]
        },
        {
            "id": "spo_0003",
            "category": "Sport & Vrije Tijd",
            "difficulty": 1,
            "question": "In welke sport rijden atleten etappes zoals in de Tour de France?",
            "answer": "wielrennen",
            "acceptedAnswers": [
                "koers",
                "road cycling",
                "wielrennen"
            ]
        },
        {
            "id": "spo_0004",
            "category": "Sport & Vrije Tijd",
            "difficulty": 1,
            "question": "Hoeveel ringen telt het olympisch symbool?",
            "answer": "5",
            "acceptedAnswers": [
                "vijf",
                "5"
            ]
        },
        {
            "id": "spo_0008",
            "category": "Sport & Vrije Tijd",
            "difficulty": 1,
            "question": "Welke sport wordt gespeeld met een puck op ijs?",
            "answer": "ijshockey",
            "acceptedAnswers": [
                "ice hockey",
                "ijshockey"
            ]
        },
        {
            "id": "spo_0010",
            "category": "Sport & Vrije Tijd",
            "difficulty": 1,
            "question": "Welke sport speel je met drie pijltjes op een rond bord met vakken?",
            "answer": "darts",
            "acceptedAnswers": [
                "dart",
                "darten",
                "darts"
            ]
        },
        {
            "id": "spo_0015",
            "category": "Sport & Vrije Tijd",
            "difficulty": 1,
            "question": "Welk bordspel met 64 velden kent koning, dame en pionnen?",
            "answer": "schaken",
            "acceptedAnswers": [
                "chess",
                "het schaakspel",
                "schaken"
            ]
        },
        {
            "id": "geo_0017",
            "category": "Aardrijkskunde",
            "difficulty": 1,
            "question": "Wat is de hoofdstad van Italië?",
            "answer": "Rome",
            "acceptedAnswers": [
                "Roma",
                "Rome"
            ]
        },
        {
            "id": "geo_0018",
            "category": "Aardrijkskunde",
            "difficulty": 1,
            "question": "Wat is de hoofdstad van Spanje?",
            "answer": "Madrid",
            "acceptedAnswers": [
                "Madrid"
            ]
        },
        {
            "id": "geo_0019",
            "category": "Aardrijkskunde",
            "difficulty": 1,
            "question": "Wat is de hoofdstad van Duitsland?",
            "answer": "Berlijn",
            "acceptedAnswers": [
                "Berlin",
                "Berlijn"
            ]
        },
        {
            "id": "geo_0021",
            "category": "Aardrijkskunde",
            "difficulty": 1,
            "question": "Wat is de hoofdstad van België?",
            "answer": "Brussel",
            "acceptedAnswers": [
                "Bruxelles",
                "Brüssel",
                "Brussel"
            ]
        },
        {
            "id": "sci_0017",
            "category": "Wetenschap & Natuur",
            "difficulty": 1,
            "question": "Rond welke ster draait de aarde?",
            "answer": "de zon",
            "acceptedAnswers": [
                "Zon",
                "de zon"
            ]
        },
        {
            "id": "sci_0018",
            "category": "Wetenschap & Natuur",
            "difficulty": 1,
            "question": "Welke grootheid meet je in graden Celsius?",
            "answer": "temperatuur",
            "acceptedAnswers": [
                "temp",
                "temperatuur"
            ]
        },
        {
            "id": "ent_0021",
            "category": "Entertainment",
            "difficulty": 1,
            "question": "Hoe heet de blauwe egel uit de Sega-games?",
            "answer": "Sonic",
            "acceptedAnswers": [
                "Sonic the Hedgehog",
                "Sonic"
            ]
        },
        {
            "id": "ent_0029",
            "category": "Entertainment",
            "difficulty": 1,
            "question": "Welke superheld is het alter ego van Bruce Wayne?",
            "answer": "Batman",
            "acceptedAnswers": [
                "Batman"
            ]
        },
        {
            "id": "ent_0034",
            "category": "Entertainment",
            "difficulty": 1,
            "question": "Welke streamingdienst bracht ‘Stranger Things’ uit?",
            "answer": "Netflix",
            "acceptedAnswers": [
                "Netflix"
            ]
        },
        {
            "id": "ent_0038",
            "category": "Entertainment",
            "difficulty": 1,
            "question": "Welke console werd vaak geleverd met het spel ‘Wii Sports’?",
            "answer": "Nintendo Wii",
            "acceptedAnswers": [
                "Wii",
                "Nintendo Wii"
            ]
        },
        {
            "id": "ent_0039",
            "category": "Entertainment",
            "difficulty": 1,
            "question": "Welke app is populair voor korte video’s en challenges?",
            "answer": "TikTok",
            "acceptedAnswers": [
                "TikTok"
            ]
        },
        {
            "id": "ent_0040",
            "category": "Entertainment",
            "difficulty": 1,
            "question": "Welke animatieserie volgt een gele familie in Springfield?",
            "answer": "The Simpsons",
            "acceptedAnswers": [
                "Simpsons",
                "The Simpsons"
            ]
        },
        {
            "id": "spo_0020",
            "category": "Sport & Vrije Tijd",
            "difficulty": 1,
            "question": "Hoeveel spelers staan er per team op het volleybalveld?",
            "answer": "6",
            "acceptedAnswers": [
                "zes",
                "6"
            ]
        },
        {
            "id": "spo_0022",
            "category": "Sport & Vrije Tijd",
            "difficulty": 1,
            "question": "In welke sport sla je een ‘home run’?",
            "answer": "honkbal",
            "acceptedAnswers": [
                "baseball",
                "honkbal"
            ]
        },
        {
            "id": "spo_0029",
            "category": "Sport & Vrije Tijd",
            "difficulty": 1,
            "question": "Welke sport gebruikt de termen ‘birdie’ en ‘eagle’?",
            "answer": "golf",
            "acceptedAnswers": [
                "golf"
            ]
        },
        {
            "id": "hist_0049",
            "category": "Geschiedenis",
            "difficulty": 1,
            "question": "Welke Egyptische zonnegod werd vaak afgebeeld met een valkenkop en zonneschijf?",
            "answer": "Ra",
            "acceptedAnswers": [
                "Re",
                "Ra"
            ]
        },
        {
            "id": "geo_0033",
            "category": "Aardrijkskunde",
            "difficulty": 1,
            "question": "Wat is de hoofdstad van Noorwegen?",
            "answer": "Oslo",
            "acceptedAnswers": [
                "Oslo"
            ]
        },
        {
            "id": "geo_0034",
            "category": "Aardrijkskunde",
            "difficulty": 1,
            "question": "Wat is de hoofdstad van Denemarken?",
            "answer": "Kopenhagen",
            "acceptedAnswers": [
                "Copenhagen",
                "København",
                "Kopenhagen"
            ]
        },
        {
            "id": "geo_0037",
            "category": "Aardrijkskunde",
            "difficulty": 1,
            "question": "Wat is de hoofdstad van Griekenland?",
            "answer": "Athene",
            "acceptedAnswers": [
                "Athina",
                "Athens",
                "Athene"
            ]
        },
        {
            "id": "geo_0038",
            "category": "Aardrijkskunde",
            "difficulty": 1,
            "question": "Hoe heet de zee tussen België, Nederland en het Verenigd Koninkrijk?",
            "answer": "Noordzee",
            "acceptedAnswers": [
                "Noordzee",
                "North Sea"
            ]
        },
        {
            "id": "geo_0039",
            "category": "Aardrijkskunde",
            "difficulty": 1,
            "question": "Wat is de hoofdstad van Portugal?",
            "answer": "Lissabon",
            "acceptedAnswers": [
                "Lisboa",
                "Lisbon",
                "Lissabon"
            ]
        },
        {
            "id": "geo_0045",
            "category": "Aardrijkskunde",
            "difficulty": 1,
            "question": "Wat is de hoofdstad van Turkije?",
            "answer": "Ankara",
            "acceptedAnswers": [
                "Ankara"
            ]
        },
        {
            "id": "geo_0048",
            "category": "Aardrijkskunde",
            "difficulty": 1,
            "question": "Welk land heeft een esdoornblad op zijn nationale vlag?",
            "answer": "Canada",
            "acceptedAnswers": [
                "Canada"
            ]
        },
        {
            "id": "sci_0037",
            "category": "Wetenschap & Natuur",
            "difficulty": 1,
            "question": "Uit welke twee elementen bestaat water?",
            "answer": "waterstof en zuurstof",
            "acceptedAnswers": [
                "H en O",
                "H2 en O",
                "waterstof en zuurstof"
            ]
        },
        {
            "id": "sci_0039",
            "category": "Wetenschap & Natuur",
            "difficulty": 1,
            "question": "Hoe noem je dieren die zowel planten als vlees eten?",
            "answer": "alleseters",
            "acceptedAnswers": [
                "omnivoren",
                "alleseters"
            ]
        },
        {
            "id": "sci_0042",
            "category": "Wetenschap & Natuur",
            "difficulty": 1,
            "question": "Welke hernieuwbare energiebron gebruikt turbines met wieken?",
            "answer": "windenergie",
            "acceptedAnswers": [
                "windkracht",
                "windstroom",
                "windenergie"
            ]
        },
        {
            "id": "sci_0044",
            "category": "Wetenschap & Natuur",
            "difficulty": 1,
            "question": "Welk instrument gebruik je om temperatuur te meten?",
            "answer": "thermometer",
            "acceptedAnswers": [
                "thermometer"
            ]
        },

        // --- MOEILIJKHEIDSGRAAD 2 ---
        {
            "id": "hist_0001",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Welke revolutie begon in 1789 in Frankrijk?",
            "answer": "Franse Revolutie",
            "acceptedAnswers": [
                "Franse revolutie",
                "French Revolution",
                "Franse Revolutie"
            ]
        },
        {
            "id": "hist_0003",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Welke Italiaanse stad werd in 79 n.Chr. bedolven door de Vesuvius?",
            "answer": "Pompeï",
            "acceptedAnswers": [
                "Pompeii",
                "Pompei",
                "Pompeï"
            ]
        },
        {
            "id": "hist_0004",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Welke muur viel in 1989 en opende de weg naar Duitse hereniging?",
            "answer": "Berliner Muur",
            "acceptedAnswers": [
                "Muur van Berlijn",
                "Berlijnse Muur",
                "Berliner Muur"
            ]
        },
        {
            "id": "hist_0005",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Wie werd na 27 jaar gevangenschap president van Zuid-Afrika?",
            "answer": "Nelson Mandela",
            "acceptedAnswers": [
                "Mandela",
                "N. Mandela",
                "Nelson Mandela"
            ]
        },
        {
            "id": "hist_0009",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Welke Egyptische koningin had relaties met Julius Caesar en Marcus Antonius?",
            "answer": "Cleopatra",
            "acceptedAnswers": [
                "Kleopatra",
                "Cleopatra VII",
                "Cleopatra"
            ]
        },
        {
            "id": "hist_0010",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Welke ontdekkingsreiziger bereikte in 1492 de Caraïben in dienst van Spanje?",
            "answer": "Christoffel Columbus",
            "acceptedAnswers": [
                "Columbus",
                "Christopher Columbus",
                "Christoffel Columbus"
            ]
        },
        {
            "id": "hist_0012",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Welke Britse premier stond bekend als ‘The Iron Lady’?",
            "answer": "Margaret Thatcher",
            "acceptedAnswers": [
                "Thatcher",
                "M. Thatcher",
                "Margaret Thatcher"
            ]
        },
        {
            "id": "hist_0013",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Hoe heette de Spaanse oorlogsvloot die in 1588 door de Engelsen werd verslagen?",
            "answer": "Spaanse Armada",
            "acceptedAnswers": [
                "Armada",
                "La Armada",
                "Spaanse Armada"
            ]
        },
        {
            "id": "hist_0017",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Welke Griekse heilige plaats is bekend als geboorteplek van de antieke sportwedstrijden voor Zeus?",
            "answer": "Olympia",
            "acceptedAnswers": [
                "Olimpia",
                "Olympia"
            ]
        },
        {
            "id": "geo_0004",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "Wat is de grootste oceaan op aarde?",
            "answer": "Stille Oceaan",
            "acceptedAnswers": [
                "Grote Oceaan",
                "Pacific",
                "Stille Oceaan"
            ]
        },
        {
            "id": "geo_0005",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "Wat is de hoofdstad van Australië?",
            "answer": "Canberra",
            "acceptedAnswers": [
                "Canberra"
            ]
        },
        {
            "id": "geo_0007",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "Welke berg is de hoogste ter wereld boven zeeniveau?",
            "answer": "Mount Everest",
            "acceptedAnswers": [
                "Everest",
                "Chomolungma",
                "Mount Everest"
            ]
        },
        {
            "id": "geo_0009",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "Welke rivier stroomt door Caïro en Khartoem?",
            "answer": "Nijl",
            "acceptedAnswers": [
                "Nijl",
                "Nile",
                "An-Nīl"
            ]
        },
        {
            "id": "geo_0011",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "Wat is de hoofdstad van Japan?",
            "answer": "Tokio",
            "acceptedAnswers": [
                "Tokyo",
                "Tokio"
            ]
        },
        {
            "id": "geo_0012",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "Welk land staat bekend als ‘het land van de rijzende zon’?",
            "answer": "Japan",
            "acceptedAnswers": [
                "Japan",
                "Nippon"
            ]
        },
        {
            "id": "geo_0014",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "Welke rivier stroomt door Parijs?",
            "answer": "Seine",
            "acceptedAnswers": [
                "Seine",
                "La Seine"
            ]
        },
        {
            "id": "geo_0016",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "Welke waterweg verbindt de Middellandse Zee met de Rode Zee?",
            "answer": "Suezkanaal",
            "acceptedAnswers": [
                "Suez-kanaal",
                "Suez Canal",
                "Suezkanaal"
            ]
        },
        {
            "id": "sci_0004",
            "category": "Wetenschap & Natuur",
            "difficulty": 2,
            "question": "Wat is de grootste planeet van ons zonnestelsel?",
            "answer": "Jupiter",
            "acceptedAnswers": [
                "Jupiter"
            ]
        },
        {
            "id": "sci_0005",
            "category": "Wetenschap & Natuur",
            "difficulty": 2,
            "question": "Welk gas hebben mensen vooral nodig om te ademen?",
            "answer": "zuurstof",
            "acceptedAnswers": [
                "O2",
                "O₂",
                "zuurstof"
            ]
        },
        {
            "id": "sci_0006",
            "category": "Wetenschap & Natuur",
            "difficulty": 2,
            "question": "Welk gas nemen planten op tijdens fotosynthese?",
            "answer": "koolstofdioxide",
            "acceptedAnswers": [
                "CO2",
                "CO₂",
                "koolstofdioxide"
            ]
        },
        {
            "id": "sci_0009",
            "category": "Wetenschap & Natuur",
            "difficulty": 2,
            "question": "Welk metaal is vloeibaar bij kamertemperatuur?",
            "answer": "kwik",
            "acceptedAnswers": [
                "mercurium",
                "Hg",
                "kwik"
            ]
        },
        {
            "id": "sci_0012",
            "category": "Wetenschap & Natuur",
            "difficulty": 2,
            "question": "Hoeveel graden telt een rechte hoek?",
            "answer": "90",
            "acceptedAnswers": [
                "90 graden",
                "negentig",
                "90"
            ]
        },
        {
            "id": "sci_0013",
            "category": "Wetenschap & Natuur",
            "difficulty": 2,
            "question": "Welke vitamine maakt je lichaam met hulp van zonlicht en helpt sterke botten?",
            "answer": "vitamine D",
            "acceptedAnswers": [
                "vit D",
                "vitamine D"
            ]
        },
        {
            "id": "art_0003",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "Wie is de auteur van de ‘Harry Potter’-boeken?",
            "answer": "J.K. Rowling",
            "acceptedAnswers": [
                "Rowling",
                "JK Rowling",
                "J. K. Rowling",
                "J.K. Rowling"
            ]
        },
        {
            "id": "art_0004",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "In welk museum hangt de ‘Mona Lisa’?",
            "answer": "Louvre",
            "acceptedAnswers": [
                "Musée du Louvre",
                "Louvre"
            ]
        },
        {
            "id": "art_0005",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "Wie schilderde ‘De Sterrennacht’?",
            "answer": "Vincent van Gogh",
            "acceptedAnswers": [
                "Van Gogh",
                "V. van Gogh",
                "Vincent van Gogh"
            ]
        },
        {
            "id": "art_0006",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "Wie schreef ‘Het dagboek van Anne Frank’?",
            "answer": "Anne Frank",
            "acceptedAnswers": [
                "A. Frank",
                "Anne Frank"
            ]
        },
        {
            "id": "art_0011",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "Wie schreef de thriller ‘De Da Vinci Code’?",
            "answer": "Dan Brown",
            "acceptedAnswers": [
                "D. Brown",
                "Dan Brown"
            ]
        },
        {
            "id": "art_0013",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "In welke taal schreef Cervantes ‘Don Quichot’?",
            "answer": "Spaans",
            "acceptedAnswers": [
                "Castiliaans",
                "Spaans"
            ]
        },
        {
            "id": "art_0016",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "Wie schreef het gedicht ‘The Raven’?",
            "answer": "Edgar Allan Poe",
            "acceptedAnswers": [
                "Poe",
                "E. A. Poe",
                "Edgar Allan Poe"
            ]
        },
        {
            "id": "ent_0003",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Wie speelde Jack Dawson in ‘Titanic’?",
            "answer": "Leonardo DiCaprio",
            "acceptedAnswers": [
                "DiCaprio",
                "Leonardo Di Caprio",
                "Leonardo DiCaprio"
            ]
        },
        {
            "id": "ent_0004",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Wie regisseerde ‘Jurassic Park’ (1993)?",
            "answer": "Steven Spielberg",
            "acceptedAnswers": [
                "Spielberg",
                "S. Spielberg",
                "Steven Spielberg"
            ]
        },
        {
            "id": "ent_0006",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Welke spelconsole van Sony kwam in 2000 uit?",
            "answer": "PlayStation 2",
            "acceptedAnswers": [
                "PS2",
                "PlayStation2",
                "PlayStation 2"
            ]
        },
        {
            "id": "ent_0007",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Welke dramaserie volgt een scheikundeleraar die meth kookt?",
            "answer": "Breaking Bad",
            "acceptedAnswers": [
                "Breaking Bad"
            ]
        },
        {
            "id": "ent_0009",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Wie zong ‘Oops!... I Did It Again’?",
            "answer": "Britney Spears",
            "acceptedAnswers": [
                "Spears",
                "B. Spears",
                "Britney Spears"
            ]
        },
        {
            "id": "ent_0010",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Welke boyband scoorde ‘I Want It That Way’?",
            "answer": "Backstreet Boys",
            "acceptedAnswers": [
                "BSB",
                "The Backstreet Boys",
                "Backstreet Boys"
            ]
        },
        {
            "id": "ent_0013",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Wie zingt ‘Rolling in the Deep’?",
            "answer": "Adele",
            "acceptedAnswers": [
                "Adele"
            ]
        },
        {
            "id": "ent_0015",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Welke filmtrilogie volgt Frodo op zijn queeste naar de Doemberg?",
            "answer": "The Lord of the Rings",
            "acceptedAnswers": [
                "LOTR",
                "The Lord of the Rings"
            ]
        },
        {
            "id": "ent_0018",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Welke HBO-anthologieserie introduceerde het duo Rust Cohle en Marty Hart?",
            "answer": "True Detective",
            "acceptedAnswers": [
                "True Detective"
            ]
        },
        {
            "id": "ent_0019",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Welke streamingdienst lanceerde ‘Discover Weekly’ als persoonlijke afspeellijst?",
            "answer": "Spotify",
            "acceptedAnswers": [
                "Spotify"
            ]
        },
        {
            "id": "spo_0002",
            "category": "Sport & Vrije Tijd",
            "difficulty": 2,
            "question": "Hoeveel minuten duurt de reguliere speeltijd van een voetbalwedstrijd (zonder extra tijd)?",
            "answer": "90",
            "acceptedAnswers": [
                "90 minuten",
                "negentig",
                "90"
            ]
        },
        {
            "id": "spo_0005",
            "category": "Sport & Vrije Tijd",
            "difficulty": 2,
            "question": "In welke sport is Serena Williams een icoon?",
            "answer": "tennis",
            "acceptedAnswers": [
                "tennis"
            ]
        },
        {
            "id": "spo_0006",
            "category": "Sport & Vrije Tijd",
            "difficulty": 2,
            "question": "Welke club speelt zijn thuiswedstrijden in Camp Nou in Barcelona?",
            "answer": "FC Barcelona",
            "acceptedAnswers": [
                "Barcelona",
                "Barça",
                "FC Barcelona"
            ]
        },
        {
            "id": "spo_0009",
            "category": "Sport & Vrije Tijd",
            "difficulty": 2,
            "question": "Hoe noem je drie doelpunten door dezelfde speler in één wedstrijd?",
            "answer": "hattrick",
            "acceptedAnswers": [
                "hat-trick",
                "hattrick"
            ]
        },
        {
            "id": "spo_0011",
            "category": "Sport & Vrije Tijd",
            "difficulty": 2,
            "question": "Welke tennisslam wordt traditioneel op gras gespeeld?",
            "answer": "Wimbledon",
            "acceptedAnswers": [
                "The Championships",
                "Wimbledon"
            ]
        },
        {
            "id": "spo_0013",
            "category": "Sport & Vrije Tijd",
            "difficulty": 2,
            "question": "Welke autosporttak won Lewis Hamilton meerdere wereldtitels?",
            "answer": "Formule 1",
            "acceptedAnswers": [
                "F1",
                "Formule 1"
            ]
        },
        {
            "id": "hist_0018",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Wie was de eerste mens die voet op de maan zette?",
            "answer": "Neil Armstrong",
            "acceptedAnswers": [
                "Armstrong",
                "N. Armstrong",
                "Neil Armstrong"
            ]
        },
        {
            "id": "hist_0019",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Hoe heet de periode van politieke spanningen tussen VS en USSR na de Tweede Wereldoorlog?",
            "answer": "Koude Oorlog",
            "acceptedAnswers": [
                "Cold War",
                "Koude Oorlog"
            ]
        },
        {
            "id": "hist_0022",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Hoe heet de culturele ‘wedergeboorte’ die in de 14e eeuw in Italië begon?",
            "answer": "Renaissance",
            "acceptedAnswers": [
                "de Renaissance",
                "Renaissance"
            ]
        },
        {
            "id": "hist_0024",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Welke Britse vorstin gaf haar naam aan een hele 19e-eeuwse periode?",
            "answer": "Koningin Victoria",
            "acceptedAnswers": [
                "Victoria",
                "Queen Victoria",
                "Koningin Victoria"
            ]
        },
        {
            "id": "hist_0026",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Hoe heet de beroemde verdedigingsmuur die zich over duizenden kilometers in China uitstrekt?",
            "answer": "Grote Muur van China",
            "acceptedAnswers": [
                "Chinese Muur",
                "Grote Muur",
                "Grote Muur van China"
            ]
        },
        {
            "id": "hist_0030",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Welke militaire alliantie werd in 1949 opgericht om collectieve veiligheid te waarborgen?",
            "answer": "NAVO",
            "acceptedAnswers": [
                "NATO",
                "Noord-Atlantische Verdragsorganisatie",
                "NAVO"
            ]
        },
        {
            "id": "geo_0020",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "Wat is de hoofdstad van Nederland?",
            "answer": "Amsterdam",
            "acceptedAnswers": [
                "Amsterdam"
            ]
        },
        {
            "id": "geo_0024",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "Wat is de kleinste onafhankelijke staat ter wereld qua oppervlakte?",
            "answer": "Vaticaanstad",
            "acceptedAnswers": [
                "Vaticaan",
                "Vatican City",
                "Vaticaanstad"
            ]
        },
        {
            "id": "geo_0025",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "Wat is de hoofdstad van Zweden?",
            "answer": "Stockholm",
            "acceptedAnswers": [
                "Stockholm"
            ]
        },
        {
            "id": "geo_0026",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "Welke oceaan grenst aan de oostkust van de Verenigde Staten?",
            "answer": "Atlantische Oceaan",
            "acceptedAnswers": [
                "Atlantische Oceaan",
                "Atlantic Ocean"
            ]
        },
        {
            "id": "geo_0027",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "In welke stad ligt de Bosporus, die Europa en Azië scheidt?",
            "answer": "Istanbul",
            "acceptedAnswers": [
                "İstanbul",
                "Istanboel",
                "Istanbul"
            ]
        },
        {
            "id": "geo_0028",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "Welk land heeft de grootste oppervlakte ter wereld?",
            "answer": "Rusland",
            "acceptedAnswers": [
                "Russische Federatie",
                "Russia",
                "Rusland"
            ]
        },
        {
            "id": "geo_0029",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "Wat is de hoofdstad van Egypte?",
            "answer": "Caïro",
            "acceptedAnswers": [
                "Cairo",
                "Kaïro",
                "Caïro"
            ]
        },
        {
            "id": "geo_0030",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "Welke rivier stroomt door Londen?",
            "answer": "Theems",
            "acceptedAnswers": [
                "Thames",
                "Theems"
            ]
        },
        {
            "id": "geo_0032",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "Wat is de hoogste berg van Afrika?",
            "answer": "Kilimanjaro",
            "acceptedAnswers": [
                "Mount Kilimanjaro",
                "Kilimanjaro"
            ]
        },
        {
            "id": "sci_0019",
            "category": "Wetenschap & Natuur",
            "difficulty": 2,
            "question": "Welk gas zorgt voor de belletjes in bruisende frisdrank?",
            "answer": "koolstofdioxide",
            "acceptedAnswers": [
                "CO2",
                "CO₂",
                "koolzuur",
                "koolstofdioxide"
            ]
        },
        {
            "id": "sci_0021",
            "category": "Wetenschap & Natuur",
            "difficulty": 2,
            "question": "Wat is het langste bot in het menselijk lichaam?",
            "answer": "dijbeen",
            "acceptedAnswers": [
                "femur",
                "dijbeen"
            ]
        },
        {
            "id": "sci_0024",
            "category": "Wetenschap & Natuur",
            "difficulty": 2,
            "question": "Hoe noem je de overgang van vloeistof naar gas?",
            "answer": "verdamping",
            "acceptedAnswers": [
                "evaporatie",
                "verdampen",
                "verdamping"
            ]
        },
        {
            "id": "sci_0025",
            "category": "Wetenschap & Natuur",
            "difficulty": 2,
            "question": "Hoe heet de verandering van rups naar vlinder?",
            "answer": "metamorfose",
            "acceptedAnswers": [
                "metamorfose",
                "gedaanteverwisseling"
            ]
        },
        {
            "id": "sci_0026",
            "category": "Wetenschap & Natuur",
            "difficulty": 2,
            "question": "Wat is het chemische symbool voor goud?",
            "answer": "Au",
            "acceptedAnswers": [
                "Au"
            ]
        },
        {
            "id": "sci_0027",
            "category": "Wetenschap & Natuur",
            "difficulty": 2,
            "question": "Welke planeet is beroemd om zijn opvallende ringen?",
            "answer": "Saturnus",
            "acceptedAnswers": [
                "Saturnus",
                "Saturn"
            ]
        },
        {
            "id": "sci_0031",
            "category": "Wetenschap & Natuur",
            "difficulty": 2,
            "question": "Welke natuurkundige is onlosmakelijk verbonden met de relativiteitstheorie?",
            "answer": "Albert Einstein",
            "acceptedAnswers": [
                "Einstein",
                "A. Einstein",
                "Albert Einstein"
            ]
        },
        {
            "id": "art_0017",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "Wie schreef de dystopische roman ‘1984’?",
            "answer": "George Orwell",
            "acceptedAnswers": [
                "Orwell",
                "George Orwell"
            ]
        },
        {
            "id": "art_0018",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "Wie is de auteur van ‘De kleine prins’?",
            "answer": "Antoine de Saint-Exupéry",
            "acceptedAnswers": [
                "Saint-Exupéry",
                "A. de Saint-Exupéry",
                "Antoine de Saint-Exupéry"
            ]
        },
        {
            "id": "art_0020",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "Wie schreef de avonturen van ‘Pippi Langkous’?",
            "answer": "Astrid Lindgren",
            "acceptedAnswers": [
                "Lindgren",
                "Astrid Lindgren"
            ]
        },
        {
            "id": "art_0022",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "Welke Nederlandse schilder sneed een deel van zijn oor af?",
            "answer": "Vincent van Gogh",
            "acceptedAnswers": [
                "Van Gogh",
                "Vincent van Gogh"
            ]
        },
        {
            "id": "art_0024",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "Wie schreef ‘The Hobbit’?",
            "answer": "J.R.R. Tolkien",
            "acceptedAnswers": [
                "JRR Tolkien",
                "J. R. R. Tolkien",
                "Tolkien",
                "J.R.R. Tolkien"
            ]
        },
        {
            "id": "art_0025",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "Wie is de auteur van ‘Pride and Prejudice’?",
            "answer": "Jane Austen",
            "acceptedAnswers": [
                "Austen",
                "Jane Austen"
            ]
        },
        {
            "id": "art_0031",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "Hoe heet het hondje van Kuifje?",
            "answer": "Bobbie",
            "acceptedAnswers": [
                "Milou",
                "Snowy",
                "Bobbie"
            ]
        },
        {
            "id": "art_0032",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "Wie schreef de wereldwijde bestseller ‘De Alchemist’?",
            "answer": "Paulo Coelho",
            "acceptedAnswers": [
                "Coelho",
                "Paulo Coelho"
            ]
        },
        {
            "id": "ent_0022",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Welke Nintendo-console uit 1996 had cartridges en spellen als ‘GoldenEye 007’?",
            "answer": "Nintendo 64",
            "acceptedAnswers": [
                "N64",
                "Nintendo64",
                "Nintendo 64"
            ]
        },
        {
            "id": "ent_0023",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Welke Britse band scoorde de hit ‘Wonderwall’?",
            "answer": "Oasis",
            "acceptedAnswers": [
                "Oasis"
            ]
        },
        {
            "id": "ent_0024",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Wie zingt ‘Shape of You’?",
            "answer": "Ed Sheeran",
            "acceptedAnswers": [
                "Sheeran",
                "Edward Sheeran",
                "Ed Sheeran"
            ]
        },
        {
            "id": "ent_0025",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Wie speelt Rachel Green in ‘Friends’?",
            "answer": "Jennifer Aniston",
            "acceptedAnswers": [
                "Aniston",
                "J. Aniston",
                "Jennifer Aniston"
            ]
        },
        {
            "id": "ent_0026",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Uit welke film komt de oneliner ‘I’ll be back’?",
            "answer": "The Terminator",
            "acceptedAnswers": [
                "Terminator",
                "The Terminator"
            ]
        },
        {
            "id": "ent_0027",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Hoe heet de uil van Harry Potter?",
            "answer": "Hedwig",
            "acceptedAnswers": [
                "Hedwig"
            ]
        },
        {
            "id": "ent_0028",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Welke film over een man uit Alabama won in 1995 de Oscar voor Beste Film?",
            "answer": "Forrest Gump",
            "acceptedAnswers": [
                "Forrest Gump"
            ]
        },
        {
            "id": "ent_0031",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Welke band bracht ‘Smells Like Teen Spirit’ uit?",
            "answer": "Nirvana",
            "acceptedAnswers": [
                "Nirvana"
            ]
        },
        {
            "id": "ent_0032",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Hoe heet de realityshow waarin kandidaten overleven op een onbewoond eiland?",
            "answer": "Survivor",
            "acceptedAnswers": [
                "Survivor",
                "Expeditie Robinson"
            ]
        },
        {
            "id": "ent_0033",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Welke sandboxgame draait om blokken, bouwen en creepers?",
            "answer": "Minecraft",
            "acceptedAnswers": [
                "Minecraft"
            ]
        },
        {
            "id": "ent_0035",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Welke acteur speelt Iron Man in het Marvel-filmuniversum?",
            "answer": "Robert Downey Jr.",
            "acceptedAnswers": [
                "Robert Downey Jr",
                "RDJ",
                "Robert Downey Jr."
            ]
        },
        {
            "id": "ent_0036",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Wie zingt de hit ‘Like a Prayer’?",
            "answer": "Madonna",
            "acceptedAnswers": [
                "Madonna"
            ]
        },
        {
            "id": "ent_0037",
            "category": "Entertainment",
            "difficulty": 2,
            "question": "Hoe heet de toverschool die Harry Potter bezoekt?",
            "answer": "Zweinstein",
            "acceptedAnswers": [
                "Hogwarts",
                "Zweinstein"
            ]
        },
        {
            "id": "spo_0016",
            "category": "Sport & Vrije Tijd",
            "difficulty": 2,
            "question": "Welke voetballer staat bekend onder de bijnaam ‘CR7’?",
            "answer": "Cristiano Ronaldo",
            "acceptedAnswers": [
                "Ronaldo",
                "C. Ronaldo",
                "Cristiano Ronaldo"
            ]
        },
        {
            "id": "spo_0017",
            "category": "Sport & Vrije Tijd",
            "difficulty": 2,
            "question": "Welke sport speel je met een racket en een shuttle?",
            "answer": "badminton",
            "acceptedAnswers": [
                "badminton",
                "badmintonnen"
            ]
        },
        {
            "id": "spo_0018",
            "category": "Sport & Vrije Tijd",
            "difficulty": 2,
            "question": "Welke tennisser wordt ‘King of Clay’ genoemd?",
            "answer": "Rafael Nadal",
            "acceptedAnswers": [
                "Nadal",
                "R. Nadal",
                "Rafael Nadal"
            ]
        },
        {
            "id": "spo_0019",
            "category": "Sport & Vrije Tijd",
            "difficulty": 2,
            "question": "Welke wielerwedstrijd finisht traditioneel op de Champs-Élysées?",
            "answer": "Tour de France",
            "acceptedAnswers": [
                "Ronde van Frankrijk",
                "La Grande Boucle",
                "Tour de France"
            ]
        },
        {
            "id": "spo_0021",
            "category": "Sport & Vrije Tijd",
            "difficulty": 2,
            "question": "Welke kleur trui draagt de leider in de Tour de France?",
            "answer": "geel",
            "acceptedAnswers": [
                "gele trui",
                "geel"
            ]
        },
        {
            "id": "spo_0023",
            "category": "Sport & Vrije Tijd",
            "difficulty": 2,
            "question": "In welke stad wordt tennistoernooi Wimbledon gehouden?",
            "answer": "Londen",
            "acceptedAnswers": [
                "London",
                "Londen"
            ]
        },
        {
            "id": "spo_0024",
            "category": "Sport & Vrije Tijd",
            "difficulty": 2,
            "question": "Welke club is de aartsrivaal van FC Barcelona in ‘El Clásico’?",
            "answer": "Real Madrid",
            "acceptedAnswers": [
                "Real",
                "Real Madrid"
            ]
        },
        {
            "id": "spo_0025",
            "category": "Sport & Vrije Tijd",
            "difficulty": 2,
            "question": "Hoeveel punten is het bullseye in darts waard?",
            "answer": "50",
            "acceptedAnswers": [
                "vijftig",
                "50"
            ]
        },
        {
            "id": "spo_0027",
            "category": "Sport & Vrije Tijd",
            "difficulty": 2,
            "question": "Hoe heet de spectaculaire basketbalscore waarbij je de bal door de ring slaat?",
            "answer": "slam dunk",
            "acceptedAnswers": [
                "dunk",
                "slam dunk"
            ]
        },
        {
            "id": "spo_0028",
            "category": "Sport & Vrije Tijd",
            "difficulty": 2,
            "question": "Van welk land is het nationale rugbyteam bekend als de ‘All Blacks’?",
            "answer": "Nieuw-Zeeland",
            "acceptedAnswers": [
                "New Zealand",
                "Aotearoa",
                "Nieuw-Zeeland"
            ]
        },
        {
            "id": "spo_0030",
            "category": "Sport & Vrije Tijd",
            "difficulty": 2,
            "question": "Welke Vlaamse wielerklassieker staat bekend als ‘De Ronde’?",
            "answer": "Ronde van Vlaanderen",
            "acceptedAnswers": [
                "De Ronde",
                "Tour of Flanders",
                "Ronde van Vlaanderen"
            ]
        },
        {
            "id": "hist_0037",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Wie ontdekte in 1928 per toeval penicilline in een petrischaal?",
            "answer": "Alexander Fleming",
            "acceptedAnswers": [
                "Fleming",
                "A. Fleming",
                "Alexander Fleming"
            ]
        },
        {
            "id": "hist_0038",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Hoe heette het schip dat in 1620 Engelse pelgrims naar Noord-Amerika bracht?",
            "answer": "Mayflower",
            "acceptedAnswers": [
                "De Mayflower",
                "Mayflower"
            ]
        },
        {
            "id": "hist_0039",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Hoe heet de noordelijke verdedigingsmuur die de Romeinen in Brittannië bouwden?",
            "answer": "Muur van Hadrianus",
            "acceptedAnswers": [
                "Hadrianuswal",
                "Hadrian's Wall",
                "Muur van Hadrianus"
            ]
        },
        {
            "id": "hist_0041",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Welke Franse keizer werd in 1815 verslagen bij Waterloo?",
            "answer": "Napoleon Bonaparte",
            "acceptedAnswers": [
                "Napoleon",
                "Napoleon I",
                "Napoleon Bonaparte"
            ]
        },
        {
            "id": "hist_0043",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Hoe heet de eeuwenoude handelsroute tussen China en de Middellandse Zee?",
            "answer": "Zijderoute",
            "acceptedAnswers": [
                "Zijderoute",
                "Silk Road"
            ]
        },
        {
            "id": "hist_0044",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Welke precolumbiaanse beschaving bouwde de citadel Machu Picchu?",
            "answer": "Inca",
            "acceptedAnswers": [
                "Inca's",
                "Inka",
                "Inca"
            ]
        },
        {
            "id": "hist_0046",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Hoe heet de onafhankelijkheidsverklaring die op 4 juli 1776 werd aangenomen?",
            "answer": "United States Declaration of Independence",
            "acceptedAnswers": [
                "Onafhankelijkheidsverklaring",
                "Declaration of Independence",
                "United States Declaration of Independence"
            ]
        },
        {
            "id": "hist_0048",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Hoe heet de overgang naar machinale productie die in 18e-eeuws Groot-Brittannië begon?",
            "answer": "Industriële Revolutie",
            "acceptedAnswers": [
                "Industriële revolutie",
                "Industrial Revolution",
                "Industriële Revolutie"
            ]
        },
        {
            "id": "hist_0051",
            "category": "Geschiedenis",
            "difficulty": 2,
            "question": "Welke Amerikaanse marinebasis op Hawaï werd op 7 december 1941 aangevallen?",
            "answer": "Pearl Harbor",
            "acceptedAnswers": [
                "Pearl Harbor"
            ]
        },
        {
            "id": "geo_0035",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "Wat is het grootste eiland in de Middellandse Zee?",
            "answer": "Sicilië",
            "acceptedAnswers": [
                "Sicilie",
                "Sicily",
                "Sicilië"
            ]
        },
        {
            "id": "geo_0040",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "In welk land liggen de steden Marrakech en Fès?",
            "answer": "Marokko",
            "acceptedAnswers": [
                "Marocco",
                "Morocco",
                "Marokko"
            ]
        },
        {
            "id": "geo_0041",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "Welke rivier stroomt door Boedapest?",
            "answer": "Donau",
            "acceptedAnswers": [
                "De Donau",
                "Danube",
                "Donau"
            ]
        },
        {
            "id": "geo_0042",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "In welk land ligt de ommuurde stad Dubrovnik?",
            "answer": "Kroatië",
            "acceptedAnswers": [
                "Croatia",
                "Hrvatska",
                "Kroatië"
            ]
        },
        {
            "id": "geo_0046",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "Wat is de federale hoofdstad van Zwitserland?",
            "answer": "Bern",
            "acceptedAnswers": [
                "Berne",
                "Bern"
            ]
        },
        {
            "id": "geo_0047",
            "category": "Aardrijkskunde",
            "difficulty": 2,
            "question": "Welke metropool ligt letterlijk op twee continenten, Europa en Azië?",
            "answer": "Istanboel",
            "acceptedAnswers": [
                "Istanbul",
                "İstanbul",
                "Istanboel"
            ]
        },
        {
            "id": "sci_0033",
            "category": "Wetenschap & Natuur",
            "difficulty": 2,
            "question": "Welke bloedcellen vervoeren zuurstof dankzij hemoglobine?",
            "answer": "rode bloedcellen",
            "acceptedAnswers": [
                "erytrocyten",
                "rode bloedcellen"
            ]
        },
        {
            "id": "sci_0035",
            "category": "Wetenschap & Natuur",
            "difficulty": 2,
            "question": "Welke planeet draait het dichtst bij de zon?",
            "answer": "Mercurius",
            "acceptedAnswers": [
                "Mercury",
                "Mercurius"
            ]
        },
        {
            "id": "sci_0036",
            "category": "Wetenschap & Natuur",
            "difficulty": 2,
            "question": "Hoe heet de faseovergang van gas naar vloeistof?",
            "answer": "condensatie",
            "acceptedAnswers": [
                "condenseren",
                "condensatie"
            ]
        },
        {
            "id": "sci_0038",
            "category": "Wetenschap & Natuur",
            "difficulty": 2,
            "question": "Welk deel van het oog regelt de hoeveelheid licht die binnenkomt?",
            "answer": "iris",
            "acceptedAnswers": [
                "iris",
                "regenboogvlies"
            ]
        },
        {
            "id": "sci_0041",
            "category": "Wetenschap & Natuur",
            "difficulty": 2,
            "question": "Wat meet je met een barometer?",
            "answer": "luchtdruk",
            "acceptedAnswers": [
                "atmosferische druk",
                "luchtdruk"
            ]
        },
        {
            "id": "sci_0046",
            "category": "Wetenschap & Natuur",
            "difficulty": 2,
            "question": "Welke gaslaag hoog in de atmosfeer beschermt ons tegen uv-straling?",
            "answer": "ozon",
            "acceptedAnswers": [
                "O3",
                "ozon",
                "ozonlaag"
            ]
        },
        {
            "id": "sci_0048",
            "category": "Wetenschap & Natuur",
            "difficulty": 2,
            "question": "Welke SI-eenheid hoort bij frequentie?",
            "answer": "hertz",
            "acceptedAnswers": [
                "Hz",
                "Hertz",
                "hertz"
            ]
        },
        {
            "id": "art_0033",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "Wie schreef de Amerikaanse roman ‘The Great Gatsby’?",
            "answer": "F. Scott Fitzgerald",
            "acceptedAnswers": [
                "Francis Scott Fitzgerald",
                "F. Scott Fitzgerald",
                "Fitzgerald"
            ]
        },
        {
            "id": "art_0036",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "Welke Poolse componist is beroemd om zijn pianonachtmuzieken (Nocturnes)?",
            "answer": "Frédéric Chopin",
            "acceptedAnswers": [
                "Frederic Chopin",
                "Chopin",
                "Frédéric Chopin"
            ]
        },
        {
            "id": "art_0038",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "Hoe heet Orwells satirische roman waarin dieren een boerderij overnemen?",
            "answer": "Animal Farm",
            "acceptedAnswers": [
                "Dierenboerderij",
                "Animal Farm"
            ]
        },
        {
            "id": "art_0039",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "Wie schreef de roman over de jacht op de witte walvis ‘Moby-Dick’?",
            "answer": "Herman Melville",
            "acceptedAnswers": [
                "Melville",
                "Herman Melville"
            ]
        },
        {
            "id": "art_0040",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "Welke Franse impressionist schilderde talloze ‘Waterlelies’?",
            "answer": "Claude Monet",
            "acceptedAnswers": [
                "Monet",
                "Claude Monet"
            ]
        },
        {
            "id": "art_0041",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "Hoe heet de kunststroming die droomlogica en het onderbewuste exploreert met Dali en Magritte?",
            "answer": "surrealisme",
            "acceptedAnswers": [
                "surrealismo",
                "surrealism",
                "surrealisme"
            ]
        },
        {
            "id": "art_0042",
            "category": "Kunst & Literatuur",
            "difficulty": 2,
            "question": "Welke componist schreef het hypnotische orkestwerk ‘Boléro’?",
            "answer": "Maurice Ravel",
            "acceptedAnswers": [
                "Ravel",
                "Maurice Ravel"
            ]
        },

        // --- MOEILIJKHEIDSGRAAD 3 ---
        {
            "id": "hist_0006",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Hoe heette het grote passagiersschip dat in 1912 zonk in de Atlantische Oceaan?",
            "answer": "Titanic",
            "acceptedAnswers": [
                "RMS Titanic",
                "Titanic"
            ]
        },
        {
            "id": "hist_0008",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Hoe heetten de Egyptische beeldschrifttekens die door de Steen van Rosetta ontcijferd konden worden?",
            "answer": "hiërogliefen",
            "acceptedAnswers": [
                "hierogliefen",
                "Egyptische hiërogliefen",
                "hiërogliefen"
            ]
        },
        {
            "id": "hist_0014",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Welke internationale organisatie werd in 1945 opgericht om wereldvrede te bevorderen?",
            "answer": "Verenigde Naties",
            "acceptedAnswers": [
                "VN",
                "United Nations",
                "Verenigde Naties"
            ]
        },
        {
            "id": "hist_0016",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Welke Japanse stad werd in augustus 1945 als eerste getroffen door een atoombom?",
            "answer": "Hiroshima",
            "acceptedAnswers": [
                "Hiroshima"
            ]
        },
        {
            "id": "geo_0013",
            "category": "Aardrijkskunde",
            "difficulty": 3,
            "question": "Welke zeestraat verbindt de Middellandse Zee met de Atlantische Oceaan?",
            "answer": "Straat van Gibraltar",
            "acceptedAnswers": [
                "Straat van Gibraltar",
                "Gibraltarstraat",
                "Strait of Gibraltar"
            ]
        },
        {
            "id": "geo_0015",
            "category": "Aardrijkskunde",
            "difficulty": 3,
            "question": "Wat is de hoofdstad van Brazilië?",
            "answer": "Brasília",
            "acceptedAnswers": [
                "Brasilia",
                "Brasília"
            ]
        },
        {
            "id": "sci_0008",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Welke SI-eenheid gebruik je voor elektrische stroomsterkte?",
            "answer": "ampère",
            "acceptedAnswers": [
                "ampere",
                "A",
                "ampère"
            ]
        },
        {
            "id": "sci_0014",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Hoe heet de onderste laag van de atmosfeer waarin het weer plaatsvindt?",
            "answer": "troposfeer",
            "acceptedAnswers": [
                "troposphere",
                "troposfeer"
            ]
        },
        {
            "id": "sci_0015",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Welke subatomaire deeltjes in een atoom hebben een negatieve lading?",
            "answer": "elektronen",
            "acceptedAnswers": [
                "electronen",
                "electrons",
                "elektronen"
            ]
        },
        {
            "id": "art_0007",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Welke Nederlandse schilder is beroemd om ruitvormige kleurvlakken en primaire kleuren?",
            "answer": "Piet Mondriaan",
            "acceptedAnswers": [
                "Mondriaan",
                "Piet Mondrian",
                "Piet Mondriaan"
            ]
        },
        {
            "id": "art_0009",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Wie componeerde ‘Für Elise’?",
            "answer": "Ludwig van Beethoven",
            "acceptedAnswers": [
                "Beethoven",
                "L. v. Beethoven",
                "Ludwig van Beethoven"
            ]
        },
        {
            "id": "art_0010",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Wie schilderde ‘De Schreeuw’?",
            "answer": "Edvard Munch",
            "acceptedAnswers": [
                "Munch",
                "E. Munch",
                "Edvard Munch"
            ]
        },
        {
            "id": "art_0014",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Wie schilderde ‘De Nachtwacht’?",
            "answer": "Rembrandt",
            "acceptedAnswers": [
                "Rembrandt van Rijn",
                "R. van Rijn",
                "Rembrandt"
            ]
        },
        {
            "id": "art_0015",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Wie componeerde de vioolcyclus ‘De Vier Jaargetijden’?",
            "answer": "Antonio Vivaldi",
            "acceptedAnswers": [
                "Vivaldi",
                "A. Vivaldi",
                "Antonio Vivaldi"
            ]
        },
        {
            "id": "ent_0011",
            "category": "Entertainment",
            "difficulty": 3,
            "question": "Welke animatiestudio maakte ‘Toy Story’?",
            "answer": "Pixar",
            "acceptedAnswers": [
                "Pixar Animation Studios",
                "Pixar"
            ]
        },
        {
            "id": "ent_0012",
            "category": "Entertainment",
            "difficulty": 3,
            "question": "Welke acteur speelt Captain Jack Sparrow in ‘Pirates of the Caribbean’?",
            "answer": "Johnny Depp",
            "acceptedAnswers": [
                "Depp",
                "J. Depp",
                "Johnny Depp"
            ]
        },
        {
            "id": "ent_0016",
            "category": "Entertainment",
            "difficulty": 3,
            "question": "Wie richtte het sociale netwerk Facebook op?",
            "answer": "Mark Zuckerberg",
            "acceptedAnswers": [
                "Zuckerberg",
                "M. Zuckerberg",
                "Mark Zuckerberg"
            ]
        },
        {
            "id": "ent_0020",
            "category": "Entertainment",
            "difficulty": 3,
            "question": "Welke Japanse studio maakte de animatiefilm ‘Spirited Away’?",
            "answer": "Studio Ghibli",
            "acceptedAnswers": [
                "Ghibli",
                "Studio Ghibli"
            ]
        },
        {
            "id": "spo_0007",
            "category": "Sport & Vrije Tijd",
            "difficulty": 3,
            "question": "Welke vlag wordt gezwaaid bij de finish in autosport en motorsport?",
            "answer": "zwart-wit geblokt",
            "acceptedAnswers": [
                "zwart-wit geruite vlag",
                "chequered flag",
                "zwart-wit geblokt"
            ]
        },
        {
            "id": "spo_0012",
            "category": "Sport & Vrije Tijd",
            "difficulty": 3,
            "question": "Hoeveel spelers staan er per team tegelijk op het basketbalveld?",
            "answer": "5",
            "acceptedAnswers": [
                "vijf",
                "5"
            ]
        },
        {
            "id": "spo_0014",
            "category": "Sport & Vrije Tijd",
            "difficulty": 3,
            "question": "Welke sport gebruikt de termen ‘strike’ en ‘spare’?",
            "answer": "bowlen",
            "acceptedAnswers": [
                "tenpin bowling",
                "bowling",
                "bowlen"
            ]
        },
        {
            "id": "hist_0020",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Welke Franse heldin staat bekend als de ‘Maagd van Orléans’?",
            "answer": "Jeanne d’Arc",
            "acceptedAnswers": [
                "Jeanne d'Arc",
                "Joan of Arc",
                "Jeanne d’Arc"
            ]
        },
        {
            "id": "hist_0021",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Welke verwoestende epidemie uit de 14e eeuw wordt ook de ‘Zwarte Dood’ genoemd?",
            "answer": "pest",
            "acceptedAnswers": [
                "Zwarte Dood",
                "bubonenpest",
                "pest"
            ]
        },
        {
            "id": "hist_0023",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Hoe heet de oorlog tussen Noord en Zuid in de Verenigde Staten (1861–1865)?",
            "answer": "Amerikaanse Burgeroorlog",
            "acceptedAnswers": [
                "Civil War",
                "US Burgeroorlog",
                "Amerikaanse Burgeroorlog"
            ]
        },
        {
            "id": "hist_0025",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Welke jonge farao’s graf werd in 1922 bijna intact teruggevonden in de Vallei der Koningen?",
            "answer": "Toetanchamon",
            "acceptedAnswers": [
                "Toetanchamon",
                "Tutanchamon",
                "Tutankhamun"
            ]
        },
        {
            "id": "hist_0027",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Welke Portugese ontdekkingsreiziger bereikte India via Kaap de Goede Hoop?",
            "answer": "Vasco da Gama",
            "acceptedAnswers": [
                "Da Gama",
                "Vasco da Gama"
            ]
        },
        {
            "id": "hist_0028",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Welke Italiaanse stad geldt als bakermat van de Renaissance met families als de Medici?",
            "answer": "Florence",
            "acceptedAnswers": [
                "Firenze",
                "Florence"
            ]
        },
        {
            "id": "hist_0029",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Welke Belgische koning werd ‘koning-soldaat’ genoemd tijdens de Eerste Wereldoorlog?",
            "answer": "Albert I",
            "acceptedAnswers": [
                "Koning Albert I",
                "Albert I"
            ]
        },
        {
            "id": "hist_0031",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Hoe heet de omwenteling die in 1917 een einde maakte aan het tsaristische regime in Rusland?",
            "answer": "Russische Revolutie",
            "acceptedAnswers": [
                "Oktoberrevolutie",
                "Revolutie van 1917",
                "Russische Revolutie"
            ]
        },
        {
            "id": "hist_0032",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Wie schreef samen met Friedrich Engels ‘Het Communistisch Manifest’?",
            "answer": "Karl Marx",
            "acceptedAnswers": [
                "Marx",
                "Karl Marx"
            ]
        },
        {
            "id": "hist_0033",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Welk verdrag uit 1919 legde Duitsland zware voorwaarden op na de Eerste Wereldoorlog?",
            "answer": "Verdrag van Versailles",
            "acceptedAnswers": [
                "Vrede van Versailles",
                "Treaty of Versailles",
                "Verdrag van Versailles"
            ]
        },
        {
            "id": "hist_0034",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Welke Nederlandse stad werd in mei 1940 zwaar gebombardeerd aan het begin van de oorlog?",
            "answer": "Rotterdam",
            "acceptedAnswers": [
                "Rotjeknor",
                "Rotterdam"
            ]
        },
        {
            "id": "geo_0022",
            "category": "Aardrijkskunde",
            "difficulty": 3,
            "question": "Hoe heet de bergketen die de lengteas van Italië volgt?",
            "answer": "Apennijnen",
            "acceptedAnswers": [
                "Apennijnen",
                "Apennines"
            ]
        },
        {
            "id": "geo_0023",
            "category": "Aardrijkskunde",
            "difficulty": 3,
            "question": "Wat is de langste rivier van Europa?",
            "answer": "Wolga",
            "acceptedAnswers": [
                "Volga",
                "Wolga"
            ]
        },
        {
            "id": "geo_0031",
            "category": "Aardrijkskunde",
            "difficulty": 3,
            "question": "Welke zee ligt tussen Italië en de Balkan?",
            "answer": "Adriatische Zee",
            "acceptedAnswers": [
                "Adriatische Zee",
                "Adriatic Sea"
            ]
        },
        {
            "id": "sci_0020",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Hoeveel botten heeft een volwassen mens gemiddeld?",
            "answer": "206",
            "acceptedAnswers": [
                "206",
                "tweehonderdzes"
            ]
        },
        {
            "id": "sci_0022",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Waar in de cel bevindt zich het grootste deel van het DNA?",
            "answer": "celkern",
            "acceptedAnswers": [
                "nucleus",
                "de celkern",
                "celkern"
            ]
        },
        {
            "id": "sci_0023",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Welke bloedgroep staat bekend als de ‘universele donor’?",
            "answer": "O negatief",
            "acceptedAnswers": [
                "O-",
                "nul negatief",
                "O negatief"
            ]
        },
        {
            "id": "sci_0028",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Op welk natuurverschijnsel berust de richtingaanwijzing van een kompas?",
            "answer": "aardmagnetisch veld",
            "acceptedAnswers": [
                "magnetisme",
                "magnetisch veld van de aarde",
                "aardmagnetisch veld"
            ]
        },
        {
            "id": "sci_0029",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Hoeveel chromosomen bevat een normale menselijke lichaamscel?",
            "answer": "46",
            "acceptedAnswers": [
                "zesenveertig",
                "46"
            ]
        },
        {
            "id": "sci_0030",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Rond welke waarde (in km/s) ligt de lichtsnelheid in vacuüm?",
            "answer": "300.000 km/s",
            "acceptedAnswers": [
                "300000 km/s",
                "3×10^5 km/s",
                "299.792 km/s",
                "300.000 km/s"
            ]
        },
        {
            "id": "sci_0032",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Hoe heet het proces waarbij planten water via hun bladeren afgeven aan de lucht?",
            "answer": "transpiratie",
            "acceptedAnswers": [
                "verdamping door bladeren",
                "evaporatie door bladeren",
                "transpiratie"
            ]
        },
        {
            "id": "art_0019",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Wie schilderde ‘De geboorte van Venus’?",
            "answer": "Sandro Botticelli",
            "acceptedAnswers": [
                "Botticelli",
                "S. Botticelli",
                "Sandro Botticelli"
            ]
        },
        {
            "id": "art_0021",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Wie componeerde ‘Eine kleine Nachtmusik’?",
            "answer": "Wolfgang Amadeus Mozart",
            "acceptedAnswers": [
                "Mozart",
                "W. A. Mozart",
                "Wolfgang Amadeus Mozart"
            ]
        },
        {
            "id": "art_0023",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "In welk museum in Amsterdam hangt ‘De Nachtwacht’?",
            "answer": "Rijksmuseum",
            "acceptedAnswers": [
                "Het Rijksmuseum",
                "Rijksmuseum"
            ]
        },
        {
            "id": "art_0026",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "In welke taal schreef Victor Hugo ‘Les Misérables’ oorspronkelijk?",
            "answer": "Frans",
            "acceptedAnswers": [
                "Frans",
                "Français"
            ]
        },
        {
            "id": "art_0027",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Welke Spaanse kunstenaar maakte de schilderijen met ‘smeltende klokken’?",
            "answer": "Salvador Dalí",
            "acceptedAnswers": [
                "Dali",
                "Dalí",
                "Salvador Dalí"
            ]
        },
        {
            "id": "art_0028",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Welke architect ontwierp de Sagrada Família in Barcelona?",
            "answer": "Antoni Gaudí",
            "acceptedAnswers": [
                "Gaudi",
                "Gaudí",
                "Antoni Gaudí"
            ]
        },
        {
            "id": "art_0029",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Wie schreef de klassieker ‘The Catcher in the Rye’?",
            "answer": "J.D. Salinger",
            "acceptedAnswers": [
                "JD Salinger",
                "Jerome David Salinger",
                "J.D. Salinger"
            ]
        },
        {
            "id": "art_0030",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Wie componeerde het ballet ‘Het zwanenmeer’?",
            "answer": "Pjotr Iljitsj Tsjaikovski",
            "acceptedAnswers": [
                "Tsjaikovski",
                "Tchaikovsky",
                "Pjotr Tsjaikovski",
                "Pjotr Iljitsj Tsjaikovski"
            ]
        },
        {
            "id": "ent_0030",
            "category": "Entertainment",
            "difficulty": 3,
            "question": "Wie regisseerde ‘Pulp Fiction’?",
            "answer": "Quentin Tarantino",
            "acceptedAnswers": [
                "Tarantino",
                "Quentin Tarantino"
            ]
        },
        {
            "id": "spo_0026",
            "category": "Sport & Vrije Tijd",
            "difficulty": 3,
            "question": "Hoe lang is een marathon (in kilometers, afgerond op drie decimalen)?",
            "answer": "42,195",
            "acceptedAnswers": [
                "42,195 km",
                "42.195 km",
                "42,2 km",
                "42,195"
            ]
        },
        {
            "id": "hist_0035",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Welke filosoof was de leermeester van Alexander de Grote?",
            "answer": "Aristoteles",
            "acceptedAnswers": [
                "Aristotle",
                "Aristoteles"
            ]
        },
        {
            "id": "hist_0036",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Hoe heet het Engelse handvest uit 1215 dat de macht van de koning beperkte?",
            "answer": "Magna Carta",
            "acceptedAnswers": [
                "Grote Oorkonde",
                "Magna Charta",
                "Magna Carta"
            ]
        },
        {
            "id": "hist_0040",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Welke Duitse staatsman werd ‘de IJzeren Kanselier’ genoemd?",
            "answer": "Otto von Bismarck",
            "acceptedAnswers": [
                "Bismarck",
                "O. v. Bismarck",
                "Otto von Bismarck"
            ]
        },
        {
            "id": "hist_0042",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Wat was de oude naam van de stad Istanboel tot 1930?",
            "answer": "Constantinopel",
            "acceptedAnswers": [
                "Constantinople",
                "Konstantinopel",
                "Constantinopel"
            ]
        },
        {
            "id": "hist_0045",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Hoe heette de hoofdstad van het Azteekse Rijk op de plaats van het huidige Mexico-Stad?",
            "answer": "Tenochtitlan",
            "acceptedAnswers": [
                "Tenochtitlán",
                "Tenochtitlan"
            ]
        },
        {
            "id": "hist_0047",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Welke Thracische gladiator leidde in 73 v.Chr. een slavenopstand tegen Rome?",
            "answer": "Spartacus",
            "acceptedAnswers": [
                "Spartacus"
            ]
        },
        {
            "id": "hist_0050",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Wie was de eerste keizer van Rome na de val van de Republiek?",
            "answer": "Augustus",
            "acceptedAnswers": [
                "Gaius Octavius",
                "Octavianus",
                "Caesar Augustus",
                "Augustus"
            ]
        },
        {
            "id": "geo_0036",
            "category": "Aardrijkskunde",
            "difficulty": 3,
            "question": "Welk Zuid-Amerikaans land grenst aan zowel de Stille als de Atlantische Oceaan?",
            "answer": "Colombia",
            "acceptedAnswers": [
                "Colombia"
            ]
        },
        {
            "id": "geo_0043",
            "category": "Aardrijkskunde",
            "difficulty": 3,
            "question": "Wat is het grootste meer van Afrika?",
            "answer": "Victoriameer",
            "acceptedAnswers": [
                "Lake Victoria",
                "Victoriameer"
            ]
        },
        {
            "id": "geo_0044",
            "category": "Aardrijkskunde",
            "difficulty": 3,
            "question": "Welke bergketen vormt vaak de grens tussen Europa en Azië?",
            "answer": "Oeral",
            "acceptedAnswers": [
                "Oeralgebergte",
                "Oeral",
                "Ural Mountains"
            ]
        },
        {
            "id": "sci_0034",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Welke SI-eenheid hoort bij kracht?",
            "answer": "newton",
            "acceptedAnswers": [
                "N",
                "Newton",
                "newton"
            ]
        },
        {
            "id": "sci_0040",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Welke ster is het dichtst bij de aarde na de zon?",
            "answer": "Proxima Centauri",
            "acceptedAnswers": [
                "Proxima",
                "Proxima Centauri"
            ]
        },
        {
            "id": "sci_0043",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Welke pH-waarde hoort bij neutraal zuiver water bij kamertemperatuur?",
            "answer": "7",
            "acceptedAnswers": [
                "pH 7",
                "7"
            ]
        },
        {
            "id": "sci_0045",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Welke stof geeft wortels hun oranje kleur?",
            "answer": "bètacaroteen",
            "acceptedAnswers": [
                "beta-caroteen",
                "β-caroteen",
                "bètacaroteen"
            ]
        },
        {
            "id": "sci_0047",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Hoe heet de koepelvormige spier onder de longen die je ademhaling ondersteunt?",
            "answer": "middenrif",
            "acceptedAnswers": [
                "diafragma",
                "middenrif"
            ]
        },
        {
            "id": "art_0034",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Wie schilderde ‘De School van Athene’ in het Vaticaan?",
            "answer": "Rafaël",
            "acceptedAnswers": [
                "Raphael",
                "Raffaello Sanzio",
                "Rafaël"
            ]
        },
        {
            "id": "art_0035",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Welke Franse dichter schreef de bundel ‘Les Fleurs du mal’?",
            "answer": "Charles Baudelaire",
            "acceptedAnswers": [
                "Baudelaire",
                "Charles Baudelaire"
            ]
        },
        {
            "id": "art_0037",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Welke Vlaamse meester schilderde ‘De val van Icarus’ en ‘De Boerenbruiloft’?",
            "answer": "Pieter Bruegel de Oude",
            "acceptedAnswers": [
                "Bruegel de Oude",
                "Pieter Bruegel",
                "Pieter Bruegel de Oude"
            ]
        },
        {
            "id": "geo_10000",
            "category": "Aardrijkskunde",
            "difficulty": 3,
            "question": "In welk land vind je de ruïnes van de Incastad Machu Picchu?",
            "answer": "Peru",
            "acceptedAnswers": [
                "Peru",
                "Republiek Peru"
            ]
        },
        {
            "id": "geo_10001",
            "category": "Aardrijkskunde",
            "difficulty": 3,
            "question": "Welke Amerikaanse staat heeft als bijnaam 'The Sunshine State'?",
            "answer": "Florida",
            "acceptedAnswers": [
                "Florida"
            ]
        },
        {
            "id": "geo_10002",
            "category": "Aardrijkskunde",
            "difficulty": 3,
            "question": "Wat is de hoofdstad van Portugal?",
            "answer": "Lissabon",
            "acceptedAnswers": [
                "Lisboa",
                "Lissabon"
            ]
        },
        {
            "id": "geo_10003",
            "category": "Aardrijkskunde",
            "difficulty": 3,
            "question": "Welk gebergte vormt de natuurlijke grens tussen Spanje en Frankrijk?",
            "answer": "Pyreneeën",
            "acceptedAnswers": [
                "De Pyreneeën",
                "Pyreneeen"
            ]
        },
        {
            "id": "geo_10004",
            "category": "Aardrijkskunde",
            "difficulty": 3,
            "question": "Welke Amerikaanse stad wordt ook wel 'The Big Apple' genoemd?",
            "answer": "New York",
            "acceptedAnswers": [
                "New York City",
                "NYC",
                "New York"
            ]
        },
        {
            "id": "geo_10005",
            "category": "Aardrijkskunde",
            "difficulty": 3,
            "question": "Wat is het grootste eiland in de Middellandse Zee?",
            "answer": "Sicilië",
            "acceptedAnswers": [
                "Sicilie",
                "Sicilië"
            ]
        },
        {
            "id": "geo_10006",
            "category": "Aardrijkskunde",
            "difficulty": 3,
            "question": "In welke Spaanse stad kan je de onvoltooide kerk 'Sagrada Familia' bezoeken?",
            "answer": "Barcelona",
            "acceptedAnswers": [
                "Barcelona"
            ]
        },
        {
            "id": "geo_10007",
            "category": "Aardrijkskunde",
            "difficulty": 3,
            "question": "Welk land heeft de meeste inwoners ter wereld (sinds 2023)?",
            "answer": "India",
            "acceptedAnswers": [
                "India"
            ]
        },
        {
            "id": "hist_10008",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Wie was de eerste koning van België?",
            "answer": "Leopold I",
            "acceptedAnswers": [
                "Leopold 1",
                "Leopold I"
            ]
        },
        {
            "id": "hist_10009",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "In welk jaar vond de landing in Normandië (D-Day) plaats?",
            "answer": "1944",
            "acceptedAnswers": [
                "1944"
            ]
        },
        {
            "id": "hist_10010",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Welke Amerikaanse president werd in 1963 vermoord in Dallas?",
            "answer": "John F. Kennedy",
            "acceptedAnswers": [
                "JFK",
                "Kennedy",
                "John Kennedy",
                "John F. Kennedy"
            ]
        },
        {
            "id": "hist_10011",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Welk onzinkbaar geacht schip zonk tijdens zijn eerste reis in 1912?",
            "answer": "Titanic",
            "acceptedAnswers": [
                "De Titanic",
                "RMS Titanic",
                "Titanic"
            ]
        },
        {
            "id": "hist_10012",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Welke Romeinse veldheer werd vermoord op de Idus van Maart?",
            "answer": "Julius Caesar",
            "acceptedAnswers": [
                "Caesar",
                "Julius Caesar"
            ]
        },
        {
            "id": "hist_10013",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Wie zette als eerste mens voet op de maan?",
            "answer": "Neil Armstrong",
            "acceptedAnswers": [
                "Armstrong",
                "Neil Armstrong"
            ]
        },
        {
            "id": "hist_10014",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Welke Amerikaanse uitvinder wordt gezien als de vader van de gloeilamp?",
            "answer": "Thomas Edison",
            "acceptedAnswers": [
                "Edison",
                "Thomas Edison"
            ]
        },
        {
            "id": "hist_10015",
            "category": "Geschiedenis",
            "difficulty": 3,
            "question": "Hoe heette de eerste hond in de ruimte?",
            "answer": "Laika",
            "acceptedAnswers": [
                "Laika",
                "Lajka"
            ]
        },
        {
            "id": "ent_10016",
            "category": "Amusement",
            "difficulty": 3,
            "question": "Wie is de vaste zanger van de band Clouseau?",
            "answer": "Koen Wauters",
            "acceptedAnswers": [
                "Koen Wauters"
            ]
        },
        {
            "id": "ent_10017",
            "category": "Amusement",
            "difficulty": 3,
            "question": "Welke acteur speelt de rol van Captain Jack Sparrow in Pirates of the Caribbean?",
            "answer": "Johnny Depp",
            "acceptedAnswers": [
                "Depp",
                "Johnny Depp"
            ]
        },
        {
            "id": "ent_10018",
            "category": "Amusement",
            "difficulty": 3,
            "question": "In welke Amerikaanse serie gaat scheikundeleraar Walter White drugs produceren?",
            "answer": "Breaking Bad",
            "acceptedAnswers": [
                "Breaking Bad"
            ]
        },
        {
            "id": "ent_10019",
            "category": "Amusement",
            "difficulty": 3,
            "question": "Wie was de legendarische zanger van de rockgroep Queen?",
            "answer": "Freddie Mercury",
            "acceptedAnswers": [
                "Mercury",
                "Freddie Mercury",
                "Farrokh Bulsara"
            ]
        },
        {
            "id": "ent_10020",
            "category": "Amusement",
            "difficulty": 3,
            "question": "Welk fictief figuur woont in een ananas diep in de zee?",
            "answer": "SpongeBob SquarePants",
            "acceptedAnswers": [
                "SpongeBob",
                "Spongebob Squarepants"
            ]
        },
        {
            "id": "ent_10021",
            "category": "Amusement",
            "difficulty": 3,
            "question": "Welke Vlaamse quiz wordt al jarenlang gepresenteerd door Erik Van Looy?",
            "answer": "De Slimste Mens ter Wereld",
            "acceptedAnswers": [
                "De Slimste Mens",
                "Slimste Mens",
                "De Slimste Mens ter Wereld"
            ]
        },
        {
            "id": "ent_10022",
            "category": "Amusement",
            "difficulty": 3,
            "question": "Welke acteur zei de iconische woorden 'I'll be back'?",
            "answer": "Arnold Schwarzenegger",
            "acceptedAnswers": [
                "Schwarzenegger",
                "Arnold Schwarzenegger",
                "The Terminator"
            ]
        },
        {
            "id": "ent_10023",
            "category": "Amusement",
            "difficulty": 3,
            "question": "In welke sciencefictionfilms strijden de Jedi tegen de Sith?",
            "answer": "Star Wars",
            "acceptedAnswers": [
                "Star Wars"
            ]
        },
        {
            "id": "sci_10024",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Wat is het snelste landdier ter wereld?",
            "answer": "Jachtluipaard",
            "acceptedAnswers": [
                "Cheetah",
                "Jachtluipaard"
            ]
        },
        {
            "id": "sci_10025",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Wat is de chemische formule voor water?",
            "answer": "H2O",
            "acceptedAnswers": [
                "H2O",
                "H20"
            ]
        },
        {
            "id": "sci_10026",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Welke planeet in ons zonnestelsel staat het dichtst bij de zon?",
            "answer": "Mercurius",
            "acceptedAnswers": [
                "Mercurius"
            ]
        },
        {
            "id": "sci_10027",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Hoeveel poten heeft een spin?",
            "answer": "8",
            "acceptedAnswers": [
                "8",
                "Acht"
            ]
        },
        {
            "id": "sci_10028",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Wie richtte samen met Paul Allen het bedrijf Microsoft op?",
            "answer": "Bill Gates",
            "acceptedAnswers": [
                "Gates",
                "Bill Gates"
            ]
        },
        {
            "id": "sci_10029",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Welke plantensoort is het hoofdvoedsel van de reuzenpanda?",
            "answer": "Bamboe",
            "acceptedAnswers": [
                "Bamboe"
            ]
        },
        {
            "id": "sci_10030",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Welk edelmetaal wordt aangeduid met het symbool 'Au'?",
            "answer": "Goud",
            "acceptedAnswers": [
                "Goud"
            ]
        },
        {
            "id": "sci_10031",
            "category": "Wetenschap & Natuur",
            "difficulty": 3,
            "question": "Hoe noemt men de leer van de weerkunde?",
            "answer": "Meteorologie",
            "acceptedAnswers": [
                "Meteorologie",
                "Weerkunde"
            ]
        },
        {
            "id": "sport_10032",
            "category": "Sport & Spel",
            "difficulty": 3,
            "question": "Welke Belgische wielrenner had de bijnaam 'De Kannibaal'?",
            "answer": "Eddy Merckx",
            "acceptedAnswers": [
                "Merckx",
                "Eddy Merckx"
            ]
        },
        {
            "id": "sport_10033",
            "category": "Sport & Spel",
            "difficulty": 3,
            "question": "Welk land won het WK Voetbal bij de mannen in 2022?",
            "answer": "Argentinië",
            "acceptedAnswers": [
                "Argentinie",
                "Argentinië"
            ]
        },
        {
            "id": "sport_10034",
            "category": "Sport & Spel",
            "difficulty": 3,
            "question": "Op welke ondergrond wordt het tennistoernooi Roland Garros gespeeld?",
            "answer": "Gravel",
            "acceptedAnswers": [
                "Gravel",
                "Gemalen baksteen"
            ]
        },
        {
            "id": "sport_10035",
            "category": "Sport & Spel",
            "difficulty": 3,
            "question": "Hoeveel ringen telt de Olympische vlag?",
            "answer": "5",
            "acceptedAnswers": [
                "5",
                "Vijf"
            ]
        },
        {
            "id": "sport_10036",
            "category": "Sport & Spel",
            "difficulty": 3,
            "question": "Wat is de bijnaam van het Belgische nationale voetbalelftal?",
            "answer": "De Rode Duivels",
            "acceptedAnswers": [
                "Rode Duivels",
                "Red Devils"
            ]
        },
        {
            "id": "sport_10037",
            "category": "Sport & Spel",
            "difficulty": 3,
            "question": "In welk gezelschapsspel moet je uitzoeken of Kolonel van Geelen de moord pleegde met een kandelaar?",
            "answer": "Cluedo",
            "acceptedAnswers": [
                "Cluedo"
            ]
        },
        {
            "id": "sport_10038",
            "category": "Sport & Spel",
            "difficulty": 3,
            "question": "Wat is de hoogste score die je met drie darts (pijltjes) kan gooien?",
            "answer": "180",
            "acceptedAnswers": [
                "180",
                "one hundred and eighty"
            ]
        },
        {
            "id": "sport_10039",
            "category": "Sport & Spel",
            "difficulty": 3,
            "question": "Met welk nummer speelde basketballegende Michael Jordan het grootste deel van zijn carrière?",
            "answer": "23",
            "acceptedAnswers": [
                "23",
                "Drieëntwintig"
            ]
        },
        {
            "id": "art_10040",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Hoe heet het witte hondje van Kuifje?",
            "answer": "Bobbie",
            "acceptedAnswers": [
                "Bobbie",
                "Milou"
            ]
        },
        {
            "id": "art_10041",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Welke Nederlandse schilder sneed een stuk van zijn eigen oor af?",
            "answer": "Vincent van Gogh",
            "acceptedAnswers": [
                "Van Gogh",
                "Vincent van Gogh"
            ]
        },
        {
            "id": "art_10042",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Wie schreef het kinderboek 'Sjakie en de Chocoladefabriek'?",
            "answer": "Roald Dahl",
            "acceptedAnswers": [
                "Roald Dahl",
                "Dahl"
            ]
        },
        {
            "id": "art_10043",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Welke Engelse toneelschrijver schreef 'Romeo en Julia'?",
            "answer": "William Shakespeare",
            "acceptedAnswers": [
                "Shakespeare",
                "William Shakespeare"
            ]
        },
        {
            "id": "art_10044",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Welke stripheld staat bekend als 'de man die sneller schiet dan zijn schaduw'?",
            "answer": "Lucky Luke",
            "acceptedAnswers": [
                "Lucky Luke"
            ]
        },
        {
            "id": "art_10045",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Welk sprookjesfiguur verloor een glazen muiltje?",
            "answer": "Assepoester",
            "acceptedAnswers": [
                "Assepoester",
                "Cinderella"
            ]
        },
        {
            "id": "art_10046",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Wie schilderde de Mona Lisa?",
            "answer": "Leonardo da Vinci",
            "acceptedAnswers": [
                "Da Vinci",
                "Leonardo da Vinci"
            ]
        },
        {
            "id": "art_10047",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Welke pop-art kunstenaar werd wereldberoemd met zijn zeefdrukken van Campbell's soepblikken?",
            "answer": "Andy Warhol",
            "acceptedAnswers": [
                "Warhol",
                "Andy Warhol"
            ]
        },
        {
            "id": "art_10048",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "In welke stad woont de beroemde detective Sherlock Holmes (Baker Street)?",
            "answer": "Londen",
            "acceptedAnswers": [
                "Londen",
                "London"
            ]
        },
        {
            "id": "art_10049",
            "category": "Kunst & Literatuur",
            "difficulty": 3,
            "question": "Hoe heet de tovenaar uit de boeken van J.R.R. Tolkien?",
            "answer": "Gandalf",
            "acceptedAnswers": [
                "Gandalf"
            ]
        },

        // --- MOEILIJKHEIDSGRAAD 4 ---
        {
            "id": "geo_10050",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Wat is de hoofdstad van Canada?",
            "answer": "Ottawa",
            "acceptedAnswers": [
                "Ottawa"
            ]
        },
        {
            "id": "geo_10051",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "In welk Afrikaans land ligt de berg Kilimanjaro?",
            "answer": "Tanzania",
            "acceptedAnswers": [
                "Tanzania"
            ]
        },
        {
            "id": "geo_10052",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Welke rivier heeft de Grand Canyon uitgesleten?",
            "answer": "Colorado",
            "acceptedAnswers": [
                "Colorado",
                "Colorado River"
            ]
        },
        {
            "id": "geo_10053",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Wat is de hoofdstad van Turkije?",
            "answer": "Ankara",
            "acceptedAnswers": [
                "Ankara"
            ]
        },
        {
            "id": "geo_10054",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Naar welke ontdekkingsreiziger is het continent Amerika vernoemd?",
            "answer": "Amerigo Vespucci",
            "acceptedAnswers": [
                "Vespucci",
                "Amerigo Vespucci"
            ]
        },
        {
            "id": "geo_10055",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "In welke Europese hoofdstad staat het beeld van 'De Kleine Zeemeermin'?",
            "answer": "Kopenhagen",
            "acceptedAnswers": [
                "Kopenhagen",
                "Copenhagen"
            ]
        },
        {
            "id": "geo_10056",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Wat is de kleinste onafhankelijke staat ter wereld?",
            "answer": "Vaticaanstad",
            "acceptedAnswers": [
                "Vaticaan",
                "Vaticaanstad"
            ]
        },
        {
            "id": "geo_10057",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Welk eiland hoort bij de VS: Hawaii of Tahiti?",
            "answer": "Hawaii",
            "acceptedAnswers": [
                "Hawaii",
                "Hawaï"
            ]
        },
        {
            "id": "hist_10058",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "In welk jaar vond de Guldensporenslag plaats?",
            "answer": "1302",
            "acceptedAnswers": [
                "1302"
            ]
        },
        {
            "id": "hist_10059",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Waar werd Napoleon Bonaparte definitief verslagen in 1815?",
            "answer": "Waterloo",
            "acceptedAnswers": [
                "Slag bij Waterloo",
                "Waterloo"
            ]
        },
        {
            "id": "hist_10060",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "In welk huidig land ligt de kerncentrale van Tsjernobyl?",
            "answer": "Oekraïne",
            "acceptedAnswers": [
                "Oekraine",
                "Oekraïne"
            ]
        },
        {
            "id": "hist_10061",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Welke beroemde rede hield Martin Luther King in 1963?",
            "answer": "I Have a Dream",
            "acceptedAnswers": [
                "I Have a Dream"
            ]
        },
        {
            "id": "hist_10062",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Welke Britse archeoloog ontdekte het graf van Toetanchamon?",
            "answer": "Howard Carter",
            "acceptedAnswers": [
                "Carter",
                "Howard Carter"
            ]
        },
        {
            "id": "hist_10063",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Op welke Japanse stad viel de eerste atoombom?",
            "answer": "Hiroshima",
            "acceptedAnswers": [
                "Hiroshima"
            ]
        },
        {
            "id": "hist_10064",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Welk Joods meisje schreef een wereldberoemd dagboek in het Achterhuis?",
            "answer": "Anne Frank",
            "acceptedAnswers": [
                "Anne Frank"
            ]
        },
        {
            "id": "hist_10065",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Wie was de eerste president van de Verenigde Staten?",
            "answer": "George Washington",
            "acceptedAnswers": [
                "Washington",
                "George Washington"
            ]
        },
        {
            "id": "ent_10066",
            "category": "Amusement",
            "difficulty": 4,
            "question": "Welke regisseur maakte de films 'Pulp Fiction' en 'Kill Bill'?",
            "answer": "Quentin Tarantino",
            "acceptedAnswers": [
                "Tarantino",
                "Quentin Tarantino"
            ]
        },
        {
            "id": "ent_10067",
            "category": "Amusement",
            "difficulty": 4,
            "question": "Wie zong de hit 'Smells Like Teen Spirit' met zijn band Nirvana?",
            "answer": "Kurt Cobain",
            "acceptedAnswers": [
                "Cobain",
                "Kurt Cobain"
            ]
        },
        {
            "id": "ent_10068",
            "category": "Amusement",
            "difficulty": 4,
            "question": "Hoe heet de worstenfabrikant uit F.C. De Kampioenen?",
            "answer": "Balthasar Boma",
            "acceptedAnswers": [
                "Boma",
                "Balthasar Boma",
                "Meneer Boma"
            ]
        },
        {
            "id": "ent_10069",
            "category": "Amusement",
            "difficulty": 4,
            "question": "In welk koffiehuis spraken de vrienden in de reeks 'Friends' altijd af?",
            "answer": "Central Perk",
            "acceptedAnswers": [
                "Central Perk"
            ]
        },
        {
            "id": "ent_10070",
            "category": "Amusement",
            "difficulty": 4,
            "question": "Welke acteur vertolkte zowel Han Solo als Indiana Jones?",
            "answer": "Harrison Ford",
            "acceptedAnswers": [
                "Ford",
                "Harrison Ford"
            ]
        },
        {
            "id": "ent_10071",
            "category": "Amusement",
            "difficulty": 4,
            "question": "In welk fictief stadje wonen The Simpsons?",
            "answer": "Springfield",
            "acceptedAnswers": [
                "Springfield"
            ]
        },
        {
            "id": "ent_10072",
            "category": "Amusement",
            "difficulty": 4,
            "question": "Met welk nummer won ABBA het Eurovisiesongfestival in 1974?",
            "answer": "Waterloo",
            "acceptedAnswers": [
                "Waterloo"
            ]
        },
        {
            "id": "ent_10073",
            "category": "Amusement",
            "difficulty": 4,
            "question": "Welke zangeres wordt ook wel 'The Queen of Pop' genoemd?",
            "answer": "Madonna",
            "acceptedAnswers": [
                "Madonna",
                "Madonna Louise Ciccone"
            ]
        },
        {
            "id": "sci_10074",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Wie ontdekte bij toeval de werking van penicilline?",
            "answer": "Alexander Fleming",
            "acceptedAnswers": [
                "Fleming",
                "Alexander Fleming"
            ]
        },
        {
            "id": "sci_10075",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Wie was de eerste mens in de ruimte?",
            "answer": "Joeri Gagarin",
            "acceptedAnswers": [
                "Gagarin",
                "Yuri Gagarin",
                "Joeri Gagarin"
            ]
        },
        {
            "id": "sci_10076",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Welke planeet staat bekend als de 'Rode Planeet'?",
            "answer": "Mars",
            "acceptedAnswers": [
                "Mars"
            ]
        },
        {
            "id": "sci_10077",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Wat is de snelheid van het licht bij benadering (in km/s)?",
            "answer": "300.000",
            "acceptedAnswers": [
                "300000",
                "300.000",
                "300000 km/s"
            ]
        },
        {
            "id": "sci_10078",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Van welk chemisch element is diamant gemaakt?",
            "answer": "Koolstof",
            "acceptedAnswers": [
                "Koolstof",
                "Carbon",
                "C"
            ]
        },
        {
            "id": "sci_10079",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Wat is het grootste dier dat ooit op aarde heeft geleefd?",
            "answer": "Blauwe vinvis",
            "acceptedAnswers": [
                "Blauwe vinvis"
            ]
        },
        {
            "id": "sci_10080",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Welke uitvinder patenteerde als eerste de telefoon?",
            "answer": "Alexander Graham Bell",
            "acceptedAnswers": [
                "Bell",
                "Alexander Graham Bell"
            ]
        },
        {
            "id": "sci_10081",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Welk orgaan in het menselijk lichaam produceert insuline?",
            "answer": "Alvleesklier",
            "acceptedAnswers": [
                "Alvleesklier",
                "Pancreas"
            ]
        },
        {
            "id": "sport_10082",
            "category": "Sport & Spel",
            "difficulty": 4,
            "question": "Welke voetballer scoorde met 'de hand van God'?",
            "answer": "Diego Maradona",
            "acceptedAnswers": [
                "Maradona",
                "Diego Maradona"
            ]
        },
        {
            "id": "sport_10083",
            "category": "Sport & Spel",
            "difficulty": 4,
            "question": "Welke wielerklassieker heeft als bijnaam 'De Hel van het Noorden'?",
            "answer": "Parijs-Roubaix",
            "acceptedAnswers": [
                "Parijs Roubaix",
                "Parijs-Roubaix"
            ]
        },
        {
            "id": "sport_10084",
            "category": "Sport & Spel",
            "difficulty": 4,
            "question": "Welke Limburgse tennisster stond jarenlang aan de wereldtop en won de US Open?",
            "answer": "Kim Clijsters",
            "acceptedAnswers": [
                "Clijsters",
                "Kim Clijsters"
            ]
        },
        {
            "id": "sport_10085",
            "category": "Sport & Spel",
            "difficulty": 4,
            "question": "Hoeveel vakjes telt een standaard schaakbord?",
            "answer": "64",
            "acceptedAnswers": [
                "64"
            ]
        },
        {
            "id": "sport_10086",
            "category": "Sport & Spel",
            "difficulty": 4,
            "question": "Welke kleur heeft de trui van de leider in het algemeen klassement in de Tour de France?",
            "answer": "Geel",
            "acceptedAnswers": [
                "Geel",
                "Gele trui"
            ]
        },
        {
            "id": "sport_10087",
            "category": "Sport & Spel",
            "difficulty": 4,
            "question": "Hoe heet het stadion van FC Barcelona?",
            "answer": "Camp Nou",
            "acceptedAnswers": [
                "Camp Nou",
                "Nou Camp"
            ]
        },
        {
            "id": "sport_10088",
            "category": "Sport & Spel",
            "difficulty": 4,
            "question": "Welke kleur band geeft in Judo de hoogste graad aan voor leerlingen (Kyu)?",
            "answer": "Bruin",
            "acceptedAnswers": [
                "Bruin",
                "Bruine band"
            ]
        },
        {
            "id": "sport_10089",
            "category": "Sport & Spel",
            "difficulty": 4,
            "question": "Hoeveel punten is de zwarte bal waard bij snooker?",
            "answer": "7",
            "acceptedAnswers": [
                "7",
                "Zeven"
            ]
        },
        {
            "id": "art_10090",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "In welk museum in Amsterdam hangt 'De Nachtwacht'?",
            "answer": "Rijksmuseum",
            "acceptedAnswers": [
                "Rijksmuseum",
                "Het Rijksmuseum"
            ]
        },
        {
            "id": "art_10091",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Wie is de geestelijke vader van Suske en Wiske?",
            "answer": "Willy Vandersteen",
            "acceptedAnswers": [
                "Vandersteen",
                "Willy Vandersteen"
            ]
        },
        {
            "id": "art_10092",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Hoe heet de papegaai van Jommeke?",
            "answer": "Flip",
            "acceptedAnswers": [
                "Flip"
            ]
        },
        {
            "id": "art_10093",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Wie maakte het beroemde beeldhouwwerk 'De Denker'?",
            "answer": "Auguste Rodin",
            "acceptedAnswers": [
                "Rodin",
                "Auguste Rodin"
            ]
        },
        {
            "id": "art_10094",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Wie schreef de dystopische roman '1984'?",
            "answer": "George Orwell",
            "acceptedAnswers": [
                "Orwell",
                "George Orwell"
            ]
        },
        {
            "id": "art_10095",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Met welke Spaanse schilder associëren we het kubisme?",
            "answer": "Pablo Picasso",
            "acceptedAnswers": [
                "Picasso",
                "Pablo Picasso"
            ]
        },
        {
            "id": "art_10096",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Welke Amerikaanse schrijver is bekend van horrorboeken als 'It' en 'The Shining'?",
            "answer": "Stephen King",
            "acceptedAnswers": [
                "King",
                "Stephen King"
            ]
        },
        {
            "id": "art_10097",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Welk mythisch wezen is half mens, half paard?",
            "answer": "Centaur",
            "acceptedAnswers": [
                "Centaur"
            ]
        },
        {
            "id": "art_10098",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "In welk land ontstond de Renaissance?",
            "answer": "Italië",
            "acceptedAnswers": [
                "Italie",
                "Italië"
            ]
        },
        {
            "id": "art_10099",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Wie schreef 'Het Dagboek van een Bridget Jones'?",
            "answer": "Helen Fielding",
            "acceptedAnswers": [
                "Fielding",
                "Helen Fielding"
            ]
        },
        {
            "id": "hist_0001",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Welke Britse premier leidde het Verenigd Koninkrijk tijdens het grootste deel van de Tweede Wereldoorlog?",
            "answer": "Winston Churchill",
            "acceptedAnswers": [
                "Churchill",
                "Sir Winston Churchill"
            ]
        },
        {
            "id": "hist_0002",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "In welk jaar viel de Berlijnse Muur?",
            "answer": "1989",
            "acceptedAnswers": [
                "’89",
                "1989"
            ]
        },
        {
            "id": "hist_0004",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Welke revolutie begon in 1789 in Frankrijk?",
            "answer": "Franse Revolutie",
            "acceptedAnswers": [
                "De Franse Revolutie"
            ]
        },
        {
            "id": "hist_0006",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Welke Belgische koning deed afstand van de troon in 2013?",
            "answer": "Albert II",
            "acceptedAnswers": [
                "Koning Albert II",
                "Albert 2"
            ]
        },
        {
            "id": "hist_0010",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Welke Romeinse heerser werd in 44 v.Chr. vermoord op de ‘Ides of March’?",
            "answer": "Julius Caesar",
            "acceptedAnswers": [
                "Caesar",
                "Gaius Julius Caesar"
            ]
        },
        {
            "id": "hist_0012",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Hoe heet het passagiersschip dat in 1912 zonk tijdens haar eerste reis?",
            "answer": "Titanic",
            "acceptedAnswers": [
                "RMS Titanic",
                "Titanic"
            ]
        },
        {
            "id": "hist_0017",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Hoe heet het middeleeuwse systeem van leenheren en vazallen?",
            "answer": "Feodalisme",
            "acceptedAnswers": [
                "Leenstelsel",
                "Feodaal stelsel"
            ]
        },
        {
            "id": "geo_0001",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Wat is de hoofdstad van Zwitserland?",
            "answer": "Bern",
            "acceptedAnswers": [
                "Berne",
                "Bern"
            ]
        },
        {
            "id": "geo_0003",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Welke rivier stroomt door Parijs?",
            "answer": "Seine",
            "acceptedAnswers": [
                "de Seine",
                "Seine"
            ]
        },
        {
            "id": "geo_0004",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Hoe heet de hoogste berg van Afrika?",
            "answer": "Kilimanjaro",
            "acceptedAnswers": [
                "Kilimanjaro",
                "Mount Kilimanjaro"
            ]
        },
        {
            "id": "geo_0007",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "In welk land ligt de stad Dubrovnik?",
            "answer": "Kroatië",
            "acceptedAnswers": [
                "Croatia",
                "Kroatië"
            ]
        },
        {
            "id": "geo_0011",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Welke rivier stroomt door zowel Luik als Maastricht?",
            "answer": "Maas",
            "acceptedAnswers": [
                "Maas",
                "Meuse"
            ]
        },
        {
            "id": "geo_0014",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Wat is de hoofdstad van Australië?",
            "answer": "Canberra",
            "acceptedAnswers": [
                "Canberra"
            ]
        },
        {
            "id": "sci_0001",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Welk gas vormt ongeveer 78% van de aardatmosfeer?",
            "answer": "Stikstof",
            "acceptedAnswers": [
                "N2",
                "Stikstofgas",
                "Stikstof"
            ]
        },
        {
            "id": "sci_0002",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Welke planeet staat bekend als de rode planeet?",
            "answer": "Mars",
            "acceptedAnswers": [
                "Mars"
            ]
        },
        {
            "id": "sci_0005",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Hoe heet het proces waarbij planten zonlicht omzetten in suikers?",
            "answer": "Fotosynthese",
            "acceptedAnswers": [
                "Photosynthese",
                "Fotosynthese"
            ]
        },
        {
            "id": "sci_0006",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Hoe noemen we dieren die zowel op land als in het water leven?",
            "answer": "Amfibieën",
            "acceptedAnswers": [
                "Amfibie",
                "Amfibieën",
                "Amphibia"
            ]
        },
        {
            "id": "sci_0011",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Welke vitamine maakt je huid aan onder invloed van zonlicht?",
            "answer": "Vitamine D",
            "acceptedAnswers": [
                "D",
                "Vitamine D"
            ]
        },
        {
            "id": "sci_0012",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Wat is de hardste natuurlijke stof op aarde?",
            "answer": "Diamant",
            "acceptedAnswers": [
                "Diamant",
                "Diamond"
            ]
        },
        {
            "id": "sci_0013",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Hoe heet het proces waarbij water van vloeibaar in gasvorm overgaat?",
            "answer": "Verdamping",
            "acceptedAnswers": [
                "Evaporatie",
                "Verdamping"
            ]
        },
        {
            "id": "art_0001",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Wie schilderde ‘De Nachtwacht’?",
            "answer": "Rembrandt van Rijn",
            "acceptedAnswers": [
                "Rembrandt",
                "R. van Rijn",
                "Rembrandt van Rijn"
            ]
        },
        {
            "id": "art_0002",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Welke schrijver creëerde het personage Sherlock Holmes?",
            "answer": "Arthur Conan Doyle",
            "acceptedAnswers": [
                "Conan Doyle",
                "A. Conan Doyle",
                "Arthur Conan Doyle"
            ]
        },
        {
            "id": "art_0004",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Wie schreef ‘De Kleine Prins’?",
            "answer": "Antoine de Saint-Exupéry",
            "acceptedAnswers": [
                "Saint-Exupéry",
                "Antoine de Saint Exupéry",
                "Antoine de Saint-Exupéry"
            ]
        },
        {
            "id": "art_0005",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Welke Spaanse kunstenaar schilderde ‘Guernica’?",
            "answer": "Pablo Picasso",
            "acceptedAnswers": [
                "Picasso",
                "Pablo Picasso"
            ]
        },
        {
            "id": "art_0006",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Welke Britse schrijver schreef de dystopie ‘1984’?",
            "answer": "George Orwell",
            "acceptedAnswers": [
                "Orwell",
                "George Orwell"
            ]
        },
        {
            "id": "art_0014",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Welke Noorse schilder maakte ‘De Schreeuw’?",
            "answer": "Edvard Munch",
            "acceptedAnswers": [
                "Munch",
                "Edvard Munch"
            ]
        },
        {
            "id": "ent_0001",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Hoe heet de toverschool die Harry Potter bezoekt?",
            "answer": "Hogwarts",
            "acceptedAnswers": [
                "Zweinstein",
                "Hogwarts School"
            ]
        },
        {
            "id": "ent_0002",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke sitcom speelt zich vaak af in koffiezaak Central Perk?",
            "answer": "Friends",
            "acceptedAnswers": [
                "Friends"
            ]
        },
        {
            "id": "ent_0004",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Wie zong de hit ‘…Baby One More Time’ in 1998?",
            "answer": "Britney Spears",
            "acceptedAnswers": [
                "Spears",
                "Britney Spears"
            ]
        },
        {
            "id": "ent_0008",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke Pokémon met nummer 025 staat bekend om bliksemaanvallen?",
            "answer": "Pikachu",
            "acceptedAnswers": [
                "Pikachu"
            ]
        },
        {
            "id": "ent_0010",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Wie was de zanger en frontman van Nirvana?",
            "answer": "Kurt Cobain",
            "acceptedAnswers": [
                "Cobain",
                "Kurt Cobain"
            ]
        },
        {
            "id": "ent_0012",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke animatieserie speelt zich af in de stad Springfield?",
            "answer": "The Simpsons",
            "acceptedAnswers": [
                "Simpsons",
                "The Simpsons"
            ]
        },
        {
            "id": "ent_0013",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke ruimte-saga draait rond Jedi en Sith?",
            "answer": "Star Wars",
            "acceptedAnswers": [
                "Star Wars"
            ]
        },
        {
            "id": "ent_0014",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Hoe heet het digitale huisdiertje aan een sleutelhanger dat eind jaren 90 een rage was?",
            "answer": "Tamagotchi",
            "acceptedAnswers": [
                "Tamagotchi"
            ]
        },
        {
            "id": "ent_0015",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke Nintendo-reeks laat je racen met bananenschillen en blauwe schilden?",
            "answer": "Mario Kart",
            "acceptedAnswers": [
                "Mario Kart"
            ]
        },
        {
            "id": "ent_0020",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welk puzzelspel met vallende blokjes werd een megahit op de Game Boy?",
            "answer": "Tetris",
            "acceptedAnswers": [
                "Tetris"
            ]
        },
        {
            "id": "spo_0002",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Met hoeveel spelers per team start een officiële voetbalwedstrijd op het veld?",
            "answer": "11",
            "acceptedAnswers": [
                "elf",
                "11"
            ]
        },
        {
            "id": "spo_0004",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Welke Engelse voetbalclub speelt haar thuiswedstrijden op Old Trafford?",
            "answer": "Manchester United",
            "acceptedAnswers": [
                "Man United",
                "Man Utd",
                "Manchester United"
            ]
        },
        {
            "id": "spo_0005",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "In welke sport gebruik je een shuttle of ‘pluimpje’?",
            "answer": "Badminton",
            "acceptedAnswers": [
                "Badminton"
            ]
        },
        {
            "id": "spo_0007",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Hoeveel minuten duurt een standaard voetbalwedstrijd zonder extra tijd?",
            "answer": "90",
            "acceptedAnswers": [
                "negentig",
                "90 minuten",
                "90"
            ]
        },
        {
            "id": "spo_0009",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "In welke sport gebruik je termen als birdie en bogey?",
            "answer": "Golf",
            "acceptedAnswers": [
                "Golf"
            ]
        },
        {
            "id": "spo_0010",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Welke sport gebruikt een driepuntslijn rond de basket?",
            "answer": "Basketbal",
            "acceptedAnswers": [
                "Basketbal",
                "Basketball"
            ]
        },
        {
            "id": "spo_0013",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Welke kleur trui draagt de leider in het algemeen klassement van de Tour de France?",
            "answer": "Geel",
            "acceptedAnswers": [
                "gele",
                "geel"
            ]
        },
        {
            "id": "spo_0014",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Welke zwemslag deelt zijn naam met een kleurrijke insectensoort?",
            "answer": "Vlinderslag",
            "acceptedAnswers": [
                "Butterfly",
                "vlinderslag"
            ]
        },
        {
            "id": "hist_0018",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Welke Britse koningin regeerde van 1837 tot 1901 en gaf haar naam aan een tijdperk?",
            "answer": "Victoria",
            "acceptedAnswers": [
                "Koningin Victoria",
                "Queen Victoria",
                "Victoria"
            ]
        },
        {
            "id": "hist_0020",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Welke ontdekkingsreiziger voer als eerste solo non-stop de wereld rond in 1968–69?",
            "answer": "Robin Knox-Johnston",
            "acceptedAnswers": [
                "Knox-Johnston",
                "Sir Robin Knox-Johnston",
                "Robin Knox-Johnston"
            ]
        },
        {
            "id": "hist_0024",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Welke uitvinder wordt geassocieerd met de gloeilamp en het eerste grootschalige elektriciteitsnet?",
            "answer": "Thomas Edison",
            "acceptedAnswers": [
                "Edison",
                "Thomas A. Edison",
                "Thomas Edison"
            ]
        },
        {
            "id": "hist_0028",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Welke Amerikaanse president vaardigde in 1863 de Emancipatieproclamatie uit?",
            "answer": "Abraham Lincoln",
            "acceptedAnswers": [
                "Lincoln",
                "A. Lincoln",
                "Abraham Lincoln"
            ]
        },
        {
            "id": "hist_0031",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Welke Zuid-Afrikaanse leider werd na 27 jaar gevangenschap president in 1994?",
            "answer": "Nelson Mandela",
            "acceptedAnswers": [
                "Mandela",
                "N. Mandela",
                "Nelson Mandela"
            ]
        },
        {
            "id": "geo_0017",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Welke hoofdstad ligt aan de Theems?",
            "answer": "Londen",
            "acceptedAnswers": [
                "London",
                "Londen"
            ]
        },
        {
            "id": "geo_0021",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Welke stad is de grootste van Nederland qua inwoners?",
            "answer": "Amsterdam",
            "acceptedAnswers": [
                "Amsterdam"
            ]
        },
        {
            "id": "geo_0024",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Welke zee grenst aan Spanje, Frankrijk en Italië?",
            "answer": "Middellandse Zee",
            "acceptedAnswers": [
                "Middellandse Zee",
                "Mediterranean Sea",
                "Méditerranée"
            ]
        },
        {
            "id": "geo_0027",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "In welk land ligt de stad Antwerpen?",
            "answer": "België",
            "acceptedAnswers": [
                "Belgie",
                "Belgium",
                "België"
            ]
        },
        {
            "id": "geo_0031",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Welke hoofdstad van Denemarken ligt op het eiland Seeland?",
            "answer": "Kopenhagen",
            "acceptedAnswers": [
                "Copenhagen",
                "København",
                "Kopenhagen"
            ]
        },
        {
            "id": "sci_0018",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Hoe heet het orgaan waarmee vissen ademen?",
            "answer": "Kieuwen",
            "acceptedAnswers": [
                "Kieuw",
                "Kieuwen",
                "Gills"
            ]
        },
        {
            "id": "sci_0021",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Welke bacterie zet melk om in yoghurt door fermentatie?",
            "answer": "Lactobacillus",
            "acceptedAnswers": [
                "Lactobacillus bulgaricus",
                "Lactobacillus"
            ]
        },
        {
            "id": "sci_0023",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Welke planeet is het grootst in ons zonnestelsel?",
            "answer": "Jupiter",
            "acceptedAnswers": [
                "Jupiter"
            ]
        },
        {
            "id": "sci_0026",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Hoe heet het instrument dat luchtdruk meet?",
            "answer": "Barometer",
            "acceptedAnswers": [
                "Barometer"
            ]
        },
        {
            "id": "sci_0029",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Welke boomsoort levert eikels?",
            "answer": "Eik",
            "acceptedAnswers": [
                "Eikenboom",
                "Eik"
            ]
        },
        {
            "id": "sci_0031",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Welke pool is magnetisch gezien in de buurt van Canada te vinden?",
            "answer": "Noordelijke magnetische pool",
            "acceptedAnswers": [
                "Noordmagnetische pool",
                "Magnetische noordpool",
                "Noordelijke magnetische pool"
            ]
        },
        {
            "id": "art_0018",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Welke Belgische stripduo vormt samen ‘Suske en Wiske’?",
            "answer": "Suske en Wiske",
            "acceptedAnswers": [
                "Willy Vandersteen",
                "Suske & Wiske",
                "Suske en Wiske"
            ]
        },
        {
            "id": "art_0021",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Welke toneelschrijver creëerde Romeo en Julia?",
            "answer": "William Shakespeare",
            "acceptedAnswers": [
                "Shakespeare",
                "W. Shakespeare",
                "William Shakespeare"
            ]
        },
        {
            "id": "art_0024",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Hoe heet de beroemde Parijse kunstmuseum met de Mona Lisa?",
            "answer": "Louvre",
            "acceptedAnswers": [
                "Musée du Louvre",
                "Het Louvre",
                "Louvre"
            ]
        },
        {
            "id": "art_0027",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Welke sprookjesschrijvers zijn bekend als de gebroeders Grimm?",
            "answer": "Jacob en Wilhelm Grimm",
            "acceptedAnswers": [
                "Gebroeders Grimm",
                "Jacob Grimm en Wilhelm Grimm",
                "Jacob en Wilhelm Grimm"
            ]
        },
        {
            "id": "art_0030",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Welke schrijver bedacht de hobbit Bilbo Balings?",
            "answer": "J.R.R. Tolkien",
            "acceptedAnswers": [
                "Tolkien",
                "J R R Tolkien",
                "J.R.R. Tolkien"
            ]
        },
        {
            "id": "ent_0022",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke console van Nintendo introduceerde Mii-personages en bewegingsbesturing?",
            "answer": "Wii",
            "acceptedAnswers": [
                "Nintendo Wii",
                "Wii"
            ]
        },
        {
            "id": "ent_0025",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke superheld zegt ‘I am Iron Man’?",
            "answer": "Iron Man",
            "acceptedAnswers": [
                "Tony Stark",
                "Iron Man"
            ]
        },
        {
            "id": "ent_0027",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke game laat je creature-ballen gooien om monsters te vangen?",
            "answer": "Pokémon",
            "acceptedAnswers": [
                "Pokemon",
                "Pokémon"
            ]
        },
        {
            "id": "ent_0030",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke zangeres brak door met ‘Rolling in the Deep’?",
            "answer": "Adele",
            "acceptedAnswers": [
                "Adele"
            ]
        },
        {
            "id": "ent_0033",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke band zong ‘Wonderwall’ in de jaren 90?",
            "answer": "Oasis",
            "acceptedAnswers": [
                "Oasis"
            ]
        },
        {
            "id": "ent_0035",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke Italiaanse loodgieter redt prinses Peach in Nintendo-games?",
            "answer": "Mario",
            "acceptedAnswers": [
                "Super Mario",
                "Mario"
            ]
        },
        {
            "id": "ent_0039",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke popzangeres werd bekend met ‘…Baby One More Time’?",
            "answer": "Britney Spears",
            "acceptedAnswers": [
                "Spears",
                "Britney Spears"
            ]
        },
        {
            "id": "spo_0017",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Hoeveel ringen staan op het olympische logo?",
            "answer": "5",
            "acceptedAnswers": [
                "vijf",
                "5"
            ]
        },
        {
            "id": "spo_0019",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Welke sport gebruikt termen als spare en strike?",
            "answer": "Bowlen",
            "acceptedAnswers": [
                "Bowling",
                "Bowlen"
            ]
        },
        {
            "id": "spo_0023",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Welke sport beoefen je met een racket op gravel, gras of hardcourt?",
            "answer": "Tennis",
            "acceptedAnswers": [
                "Tennis"
            ]
        },
        {
            "id": "spo_0024",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Welke term gebruik je voor drie doelpunten van dezelfde speler in één voetbalwedstrijd?",
            "answer": "Hattrick",
            "acceptedAnswers": [
                "Hat-trick",
                "Hattrick"
            ]
        },
        {
            "id": "spo_0027",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Welke sport speel je met een puck op ijs?",
            "answer": "IJshockey",
            "acceptedAnswers": [
                "Ice hockey",
                "ijshockey",
                "IJshockey"
            ]
        },
        {
            "id": "hist_0036",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Welke Indiase leider propageerde geweldloos verzet tegen het Britse rijk?",
            "answer": "Mahatma Gandhi",
            "acceptedAnswers": [
                "Gandhi",
                "Mohandas Gandhi",
                "Mahatma Gandhi"
            ]
        },
        {
            "id": "hist_0038",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "In welke stad werd aartshertog Franz Ferdinand in 1914 vermoord?",
            "answer": "Sarajevo",
            "acceptedAnswers": [
                "Sarajevo"
            ]
        },
        {
            "id": "hist_0040",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Wie was de eerste mens in de ruimte?",
            "answer": "Juri Gagarin",
            "acceptedAnswers": [
                "Yuri Gagarin",
                "Jurij Gagarin",
                "Juri Gagarin"
            ]
        },
        {
            "id": "hist_0043",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Wie ontdekte per toeval penicilline in 1928?",
            "answer": "Alexander Fleming",
            "acceptedAnswers": [
                "Fleming",
                "A. Fleming",
                "Alexander Fleming"
            ]
        },
        {
            "id": "hist_0046",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Welke Egyptische koningin vormt een beroemd duo met Marcus Antonius?",
            "answer": "Cleopatra",
            "acceptedAnswers": [
                "Cleopatra VII",
                "Kleopatra",
                "Cleopatra"
            ]
        },
        {
            "id": "hist_0048",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Hoe heet het militaire bondgenootschap van 1949 tussen VS en West-Europa?",
            "answer": "NAVO",
            "acceptedAnswers": [
                "NATO",
                "Noord-Atlantische Verdragsorganisatie",
                "NAVO"
            ]
        },
        {
            "id": "hist_0050",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Welk land stond vroeger bekend als Perzië?",
            "answer": "Iran",
            "acceptedAnswers": [
                "Iran",
                "Perzië"
            ]
        },
        {
            "id": "geo_0033",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Wat is de hoofdstad van Canada?",
            "answer": "Ottawa",
            "acceptedAnswers": [
                "Ottawa"
            ]
        },
        {
            "id": "geo_0034",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Wat is het kleinste land ter wereld qua oppervlakte?",
            "answer": "Vaticaanstad",
            "acceptedAnswers": [
                "Vaticaanstad",
                "Vatican City",
                "Heilige Stoel"
            ]
        },
        {
            "id": "geo_0038",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Van welk land is Tallinn de hoofdstad?",
            "answer": "Estland",
            "acceptedAnswers": [
                "Estonia",
                "Estland"
            ]
        },
        {
            "id": "geo_0048",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Hoe heet de zee die tussen het Verenigd Koninkrijk en Noorwegen/Denemarken ligt?",
            "answer": "Noordzee",
            "acceptedAnswers": [
                "De Noordzee",
                "North Sea",
                "Noordzee"
            ]
        },
        {
            "id": "sci_0033",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Welk metaal is bij kamertemperatuur vloeibaar?",
            "answer": "Kwik",
            "acceptedAnswers": [
                "Mercurius",
                "Mercury",
                "Kwik"
            ]
        },
        {
            "id": "sci_0034",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Hoe heet de drager van erfelijke informatie in cellen?",
            "answer": "DNA",
            "acceptedAnswers": [
                "Deoxyribonucleïnezuur",
                "DNA"
            ]
        },
        {
            "id": "sci_0037",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Welke planeet staat bekend om haar opvallende ringen?",
            "answer": "Saturnus",
            "acceptedAnswers": [
                "Saturnus",
                "Saturn"
            ]
        },
        {
            "id": "sci_0040",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Welk deel van het oog bepaalt hoeveel licht er binnenkomt?",
            "answer": "Iris",
            "acceptedAnswers": [
                "Iris",
                "Pupilspier",
                "Iris (regenboogvlies)"
            ]
        },
        {
            "id": "sci_0041",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Hoe heet de gedaanteverwisseling van rups naar vlinder?",
            "answer": "Metamorfose",
            "acceptedAnswers": [
                "Metamorfose",
                "Metamorphosis"
            ]
        },
        {
            "id": "sci_0045",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Hoe heet het zuurstofbindende eiwit in rode bloedcellen?",
            "answer": "Hemoglobine",
            "acceptedAnswers": [
                "Hb",
                "Hemoglobine",
                "Hemoglobin"
            ]
        },
        {
            "id": "sci_0048",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Hoe heet ons sterrenstelsel waarin de zon zich bevindt?",
            "answer": "Melkweg",
            "acceptedAnswers": [
                "Melkwegstelsel",
                "Milky Way",
                "Melkweg"
            ]
        },
        {
            "id": "art_0034",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Wie schilderde ‘Meisje met de parel’?",
            "answer": "Johannes Vermeer",
            "acceptedAnswers": [
                "Vermeer",
                "J. Vermeer",
                "Johannes Vermeer"
            ]
        },
        {
            "id": "art_0035",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Welke componist, later doof, schreef negen symfonieën?",
            "answer": "Ludwig van Beethoven",
            "acceptedAnswers": [
                "Beethoven",
                "L. v. Beethoven",
                "Ludwig van Beethoven"
            ]
        },
        {
            "id": "art_0038",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Welke stripkat staat bekend om zijn liefde voor lasagne?",
            "answer": "Garfield",
            "acceptedAnswers": [
                "Garfield"
            ]
        },
        {
            "id": "art_0040",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Wie schreef ‘Pride and Prejudice’?",
            "answer": "Jane Austen",
            "acceptedAnswers": [
                "Austen",
                "Jane Austen"
            ]
        },
        {
            "id": "art_0041",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Welke kunststroming is verbonden met Monet en Renoir?",
            "answer": "Impressionisme",
            "acceptedAnswers": [
                "Impressionisme",
                "Impressionism"
            ]
        },
        {
            "id": "art_0044",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Wie componeerde ‘De Vier Jaargetijden’?",
            "answer": "Antonio Vivaldi",
            "acceptedAnswers": [
                "Vivaldi",
                "A. Vivaldi",
                "Antonio Vivaldi"
            ]
        },
        {
            "id": "ent_0042",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke tv-serie laat Mulder en Scully paranormale zaken onderzoeken?",
            "answer": "The X-Files",
            "acceptedAnswers": [
                "X-Files",
                "The X Files",
                "The X-Files"
            ]
        },
        {
            "id": "ent_0044",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Wie regisseerde ‘Schindler’s List’?",
            "answer": "Steven Spielberg",
            "acceptedAnswers": [
                "Spielberg",
                "Steven Spielberg"
            ]
        },
        {
            "id": "ent_0046",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke Pixar-film liet als eerste speelgoed tot leven komen?",
            "answer": "Toy Story",
            "acceptedAnswers": [
                "Toy Story"
            ]
        },
        {
            "id": "ent_0051",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Wie speelt het personage Mr. Bean?",
            "answer": "Rowan Atkinson",
            "acceptedAnswers": [
                "Atkinson",
                "Rowan Atkinson"
            ]
        },
        {
            "id": "ent_0053",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke muziekstreamingdienst heeft een groen logo en afspeellijsten?",
            "answer": "Spotify",
            "acceptedAnswers": [
                "Spotify"
            ]
        },
        {
            "id": "ent_0054",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Wie regisseerde de kaskraker ‘Avatar’ (2009)?",
            "answer": "James Cameron",
            "acceptedAnswers": [
                "Cameron",
                "James Cameron"
            ]
        },
        {
            "id": "ent_0057",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke filmreeks volgt agent Ethan Hunt op gevaarlijke missies?",
            "answer": "Mission: Impossible",
            "acceptedAnswers": [
                "Mission Impossible",
                "Mission: Impossible"
            ]
        },
        {
            "id": "ent_0059",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke sandboxgame van Mojang laat je blokken delven en bouwen?",
            "answer": "Minecraft",
            "acceptedAnswers": [
                "Minecraft"
            ]
        },
        {
            "id": "spo_0033",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "In welke sport levert een ‘try’ vijf punten op?",
            "answer": "Rugby union",
            "acceptedAnswers": [
                "Rugby",
                "Rugby Union",
                "Rugby union"
            ]
        },
        {
            "id": "spo_0035",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Hoe heet het grandslamtoernooi op gravel in Parijs?",
            "answer": "Roland Garros",
            "acceptedAnswers": [
                "French Open",
                "Roland-Garros",
                "Roland Garros"
            ]
        },
        {
            "id": "spo_0036",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Hoeveel kilometer is een marathon?",
            "answer": "42,195 km",
            "acceptedAnswers": [
                "42.195 km",
                "42 km 195 m",
                "42,195 kilometer",
                "42,195 km"
            ]
        },
        {
            "id": "spo_0040",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Hoe heet het grandslamtoernooi op gras in Londen?",
            "answer": "Wimbledon",
            "acceptedAnswers": [
                "The Championships",
                "Wimbledon"
            ]
        },
        {
            "id": "spo_0041",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Welke term gebruik je wanneer de koning niet meer kan ontsnappen?",
            "answer": "Schaakmat",
            "acceptedAnswers": [
                "Mat",
                "Checkmate",
                "Schaakmat"
            ]
        },
        {
            "id": "spo_0043",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Welke Braziliaanse voetballer werd ‘O Rei’ genoemd?",
            "answer": "Pelé",
            "acceptedAnswers": [
                "Pele",
                "Edson Arantes do Nascimento",
                "Pelé"
            ]
        },
        {
            "id": "hist_0052",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Welke alliantie vocht tijdens de Tweede Wereldoorlog tegen de Asmogendheden?",
            "answer": "Geallieerden",
            "acceptedAnswers": [
                "De Geallieerden",
                "Allied Powers",
                "Geallieerden"
            ]
        },
        {
            "id": "hist_0054",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Welke Franse keizer werd in 1815 definitief verslagen bij Waterloo?",
            "answer": "Napoleon Bonaparte",
            "acceptedAnswers": [
                "Napoleon",
                "Napoleon I",
                "Napoleon Bonaparte"
            ]
        },
        {
            "id": "hist_0056",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Welke Griekse filosoof was leermeester van Alexander de Grote?",
            "answer": "Aristoteles",
            "acceptedAnswers": [
                "Aristotle",
                "Aristoteles"
            ]
        },
        {
            "id": "hist_0068",
            "category": "Geschiedenis",
            "difficulty": 4,
            "question": "Welke voormalige Britse kolonie werd in 1997 overgedragen aan China?",
            "answer": "Hongkong",
            "acceptedAnswers": [
                "Hong Kong",
                "Hongkong"
            ]
        },
        {
            "id": "geo_0049",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Welke rivier stroomt dwars door Boedapest?",
            "answer": "Donau",
            "acceptedAnswers": [
                "De Donau",
                "Danube",
                "Donau"
            ]
        },
        {
            "id": "geo_0050",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Wat is de hoofdstad van Marokko?",
            "answer": "Rabat",
            "acceptedAnswers": [
                "Rabat"
            ]
        },
        {
            "id": "geo_0051",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Hoe heet de eilandstaat ten zuiden van India die vroeger Ceylon heette?",
            "answer": "Sri Lanka",
            "acceptedAnswers": [
                "Sri Lanka"
            ]
        },
        {
            "id": "geo_0053",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Hoe heet de 0°-lengtemeridiaan die door Londen loopt?",
            "answer": "Greenwichmeridiaan",
            "acceptedAnswers": [
                "Nulmeridiaan",
                "Greenwich-meridiaan",
                "Greenwichmeridiaan"
            ]
        },
        {
            "id": "geo_0055",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "In welke Spaanse stad staat de Sagrada Família?",
            "answer": "Barcelona",
            "acceptedAnswers": [
                "Barcelona"
            ]
        },
        {
            "id": "geo_0057",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Welke Amerikaanse staat wordt de ‘Sunshine State’ genoemd?",
            "answer": "Florida",
            "acceptedAnswers": [
                "Florida"
            ]
        },
        {
            "id": "geo_0058",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Hoe heet de beruchte zone in de Atlantische Oceaan met vermeende verdwijningen?",
            "answer": "Bermudadriehoek",
            "acceptedAnswers": [
                "Bermuda-driehoek",
                "Bermuda Triangle",
                "Bermudadriehoek"
            ]
        },
        {
            "id": "geo_0059",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Hoe heet het water tussen Engeland en Frankrijk?",
            "answer": "Het Kanaal",
            "acceptedAnswers": [
                "Engelse Kanaal",
                "Het Kanaal",
                "English Channel"
            ]
        },
        {
            "id": "geo_0060",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Wat is de hoofdstad van Zweden?",
            "answer": "Stockholm",
            "acceptedAnswers": [
                "Stockholm"
            ]
        },
        {
            "id": "geo_0063",
            "category": "Aardrijkskunde",
            "difficulty": 4,
            "question": "Welke Franse wijnstreek gaf zijn naam aan mousserende wijn met bubbels?",
            "answer": "Champagne",
            "acceptedAnswers": [
                "Champagnestreek",
                "Champagne"
            ]
        },
        {
            "id": "sci_0049",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Hoe heet de kleinste bouwsteen van een element die chemisch nog dat element is?",
            "answer": "Atoom",
            "acceptedAnswers": [
                "Atom",
                "Atoom"
            ]
        },
        {
            "id": "sci_0051",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Welk orgaan filtert het bloed en produceert urine?",
            "answer": "Nieren",
            "acceptedAnswers": [
                "Nier",
                "De nieren",
                "Nieren"
            ]
        },
        {
            "id": "sci_0052",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Hoe heet de schaal waarmee we zuurgraad meten?",
            "answer": "pH-schaal",
            "acceptedAnswers": [
                "pH",
                "pH schaal",
                "pH-schaal"
            ]
        },
        {
            "id": "sci_0053",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Hoe heet de overgang van vloeistof naar vaste stof?",
            "answer": "Bevriezing",
            "acceptedAnswers": [
                "Stollen",
                "Bevriezen",
                "Bevriezing"
            ]
        },
        {
            "id": "sci_0054",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Hoe heet het celonderdeel dat bij eukaryoten het DNA bevat?",
            "answer": "Celkern",
            "acceptedAnswers": [
                "Nucleus",
                "Kern",
                "Celkern"
            ]
        },
        {
            "id": "sci_0056",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Uit welk element bestaat de zon voor het grootste deel?",
            "answer": "Waterstof",
            "acceptedAnswers": [
                "H",
                "Hydrogen",
                "Waterstof"
            ]
        },
        {
            "id": "sci_0057",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Welke eenheid gebruiken we voor elektrische weerstand?",
            "answer": "ohm",
            "acceptedAnswers": [
                "Ω",
                "Ohm",
                "ohm"
            ]
        },
        {
            "id": "sci_0061",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Welke vitamine staat ook bekend als ascorbinezuur?",
            "answer": "Vitamine C",
            "acceptedAnswers": [
                "C",
                "Vitamine C"
            ]
        },
        {
            "id": "sci_0064",
            "category": "Wetenschap & Natuur",
            "difficulty": 4,
            "question": "Welke subatomaire deeltjes dragen een negatieve lading?",
            "answer": "Elektronen",
            "acceptedAnswers": [
                "Elektron",
                "Electrons",
                "Elektronen"
            ]
        },
        {
            "id": "art_0049",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Welke stripheld is een reporter met een kuif en reist met hondje Bobbie?",
            "answer": "Kuifje",
            "acceptedAnswers": [
                "Tintin",
                "Kuifje"
            ]
        },
        {
            "id": "art_0050",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Wie schreef de bestseller ‘The Da Vinci Code’?",
            "answer": "Dan Brown",
            "acceptedAnswers": [
                "Brown",
                "Dan Brown"
            ]
        },
        {
            "id": "art_0052",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Wie schilderde de reeks ‘Zonnebloemen’?",
            "answer": "Vincent van Gogh",
            "acceptedAnswers": [
                "Van Gogh",
                "V. van Gogh",
                "Vincent van Gogh"
            ]
        },
        {
            "id": "art_0056",
            "category": "Kunst & Literatuur",
            "difficulty": 4,
            "question": "Welke componist liet een onvoltooid ‘Requiem’ na bij zijn dood in 1791?",
            "answer": "Wolfgang Amadeus Mozart",
            "acceptedAnswers": [
                "Mozart",
                "W.A. Mozart",
                "Wolfgang Amadeus Mozart"
            ]
        },
        {
            "id": "ent_0063",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Wie zong de wereldhit ‘Hips Don’t Lie’?",
            "answer": "Shakira",
            "acceptedAnswers": [
                "Shakira"
            ]
        },
        {
            "id": "ent_0065",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke Britse band brak door met de single ‘Yellow’?",
            "answer": "Coldplay",
            "acceptedAnswers": [
                "Coldplay"
            ]
        },
        {
            "id": "ent_0067",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke fantasyserie volgt hekser Geralt van Rivia?",
            "answer": "The Witcher",
            "acceptedAnswers": [
                "Witcher",
                "The Witcher"
            ]
        },
        {
            "id": "ent_0069",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke realityshow sluit bewoners op in een huis terwijl kijkers stemmen?",
            "answer": "Big Brother",
            "acceptedAnswers": [
                "Big Brother"
            ]
        },
        {
            "id": "ent_0071",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke Pixar-film verkent gevoelens als Joy en Sadness in een kinderbrein?",
            "answer": "Inside Out",
            "acceptedAnswers": [
                "Inside Out"
            ]
        },
        {
            "id": "ent_0073",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke Netflix-serie speelt zich af in Hawkins en draait om het ‘Upside Down’?",
            "answer": "Stranger Things",
            "acceptedAnswers": [
                "Stranger Things"
            ]
        },
        {
            "id": "ent_0076",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke band maakte het album en de single ‘Californication’?",
            "answer": "Red Hot Chili Peppers",
            "acceptedAnswers": [
                "RHCP",
                "Red Hot Chili Peppers"
            ]
        },
        {
            "id": "ent_0079",
            "category": "Entertainment",
            "difficulty": 4,
            "question": "Welke film vertelt het levensverhaal van een man die ‘loopt als de wind’ uit Alabama?",
            "answer": "Forrest Gump",
            "acceptedAnswers": [
                "Forrest Gump"
            ]
        },
        {
            "id": "spo_0049",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Met hoeveel spelers per team sta je tegelijk op het veld bij volleybal?",
            "answer": "6",
            "acceptedAnswers": [
                "zes",
                "6"
            ]
        },
        {
            "id": "spo_0052",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Welke Belgische tennisster heeft de bijnaam ‘Belgian Kim’?",
            "answer": "Kim Clijsters",
            "acceptedAnswers": [
                "Clijsters",
                "K. Clijsters",
                "Kim Clijsters"
            ]
        },
        {
            "id": "spo_0055",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Welke kleur trui draagt de leider in de Giro d’Italia?",
            "answer": "roze",
            "acceptedAnswers": [
                "Maglia rosa",
                "roze"
            ]
        },
        {
            "id": "spo_0056",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Welke term gebruik je voor de laatste pass die tot een doelpunt leidt?",
            "answer": "Assist",
            "acceptedAnswers": [
                "Assist"
            ]
        },
        {
            "id": "spo_0058",
            "category": "Sport & Vrije Tijd",
            "difficulty": 4,
            "question": "Welke Grand Slam in tennis wordt jaarlijks in New York gespeeld?",
            "answer": "US Open",
            "acceptedAnswers": [
                "U.S. Open",
                "US Open"
            ]
        },

        // --- MOEILIJKHEIDSGRAAD 5 ---
        {
            "id": "geo_10100",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Wat is de hoofdstad van Zwitserland?",
            "answer": "Bern",
            "acceptedAnswers": [
                "Bern"
            ]
        },
        {
            "id": "geo_10101",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welke Amerikaanse staat wordt ook wel de 'Lone Star State' genoemd?",
            "answer": "Texas",
            "acceptedAnswers": [
                "Texas"
            ]
        },
        {
            "id": "geo_10102",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "In welk land ligt de stad Timbuktu?",
            "answer": "Mali",
            "acceptedAnswers": [
                "Mali"
            ]
        },
        {
            "id": "geo_10103",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Wat is de langste rivier van Europa?",
            "answer": "Wolga",
            "acceptedAnswers": [
                "De Wolga",
                "Wolga"
            ]
        },
        {
            "id": "geo_10104",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welk kanaal verbindt de Middellandse Zee met de Rode Zee?",
            "answer": "Suez",
            "acceptedAnswers": [
                "Suezkanaal",
                "Suez"
            ]
        },
        {
            "id": "geo_10105",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Op welk eiland bevindt zich de vulkaan de Etna?",
            "answer": "Sicilië",
            "acceptedAnswers": [
                "Sicilie",
                "Sicilië"
            ]
        },
        {
            "id": "geo_10106",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Wat is de officiële munteenheid van het Verenigd Koninkrijk?",
            "answer": "Pond Sterling",
            "acceptedAnswers": [
                "Pond",
                "Britse Pond",
                "Pound Sterling"
            ]
        },
        {
            "id": "geo_10107",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welk land wordt volledig omringd door Zuid-Afrika?",
            "answer": "Lesotho",
            "acceptedAnswers": [
                "Lesotho"
            ]
        },
        {
            "id": "hist_10108",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Tegen welk land vocht België zijn onafhankelijkheidsstrijd in 1830?",
            "answer": "Nederland",
            "acceptedAnswers": [
                "Koninkrijk der Nederlanden",
                "Nederland",
                "Holland"
            ]
        },
        {
            "id": "hist_10109",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Wie was de Amerikaanse president tijdens de Amerikaanse Burgeroorlog?",
            "answer": "Abraham Lincoln",
            "acceptedAnswers": [
                "Lincoln",
                "Abraham Lincoln"
            ]
        },
        {
            "id": "hist_10110",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Welke Franse koning werd de Zonnekoning genoemd?",
            "answer": "Lodewijk XIV",
            "acceptedAnswers": [
                "Louis XIV",
                "Lodewijk de 14e",
                "Lodewijk XIV"
            ]
        },
        {
            "id": "hist_10111",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Welke vrouwelijke piloot probeerde in 1937 als eerste om de wereld te vliegen, maar verdween spoorloos?",
            "answer": "Amelia Earhart",
            "acceptedAnswers": [
                "Earhart",
                "Amelia Earhart"
            ]
        },
        {
            "id": "hist_10112",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Hoe heette Sri Lanka voor 1972?",
            "answer": "Ceylon",
            "acceptedAnswers": [
                "Ceylon"
            ]
        },
        {
            "id": "hist_10113",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Welke dictator regeerde over de Sovjet-Unie tijdens de Tweede Wereldoorlog?",
            "answer": "Jozef Stalin",
            "acceptedAnswers": [
                "Stalin",
                "Jozef Stalin"
            ]
        },
        {
            "id": "hist_10114",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Met welk schip maakte Charles Darwin zijn beroemde reis?",
            "answer": "Beagle",
            "acceptedAnswers": [
                "HMS Beagle",
                "The Beagle",
                "Beagle"
            ]
        },
        {
            "id": "hist_10115",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Wie vond de boekdrukkunst uit in Europa?",
            "answer": "Johannes Gutenberg",
            "acceptedAnswers": [
                "Gutenberg",
                "Johannes Gutenberg"
            ]
        },
        {
            "id": "ent_10116",
            "category": "Amusement",
            "difficulty": 5,
            "question": "Welke regisseur is bekend van films als 'Jaws', 'E.T.' en 'Schindler's List'?",
            "answer": "Steven Spielberg",
            "acceptedAnswers": [
                "Spielberg",
                "Steven Spielberg"
            ]
        },
        {
            "id": "ent_10117",
            "category": "Amusement",
            "difficulty": 5,
            "question": "Wie was de drummer van The Beatles?",
            "answer": "Ringo Starr",
            "acceptedAnswers": [
                "Starr",
                "Ringo Starr"
            ]
        },
        {
            "id": "ent_10118",
            "category": "Amusement",
            "difficulty": 5,
            "question": "Welke fantasy-serie speelt zich af op het continent Westeros?",
            "answer": "Game of Thrones",
            "acceptedAnswers": [
                "GoT",
                "Game of Thrones"
            ]
        },
        {
            "id": "ent_10119",
            "category": "Amusement",
            "difficulty": 5,
            "question": "Welke Amerikaanse rockartiest heeft als bijnaam 'The Boss'?",
            "answer": "Bruce Springsteen",
            "acceptedAnswers": [
                "Springsteen",
                "Bruce Springsteen"
            ]
        },
        {
            "id": "ent_10120",
            "category": "Amusement",
            "difficulty": 5,
            "question": "Welk iconisch tv-programma maakten Tom Lenaerts en Bart De Pauw samen in de jaren '90?",
            "answer": "Schalkse Ruiters",
            "acceptedAnswers": [
                "Schalkse Ruiters",
                "De Schalkse Ruiters"
            ]
        },
        {
            "id": "ent_10121",
            "category": "Amusement",
            "difficulty": 5,
            "question": "Uit welke Disneyfilm komt het nummer 'Let It Go'?",
            "answer": "Frozen",
            "acceptedAnswers": [
                "Frozen"
            ]
        },
        {
            "id": "ent_10122",
            "category": "Amusement",
            "difficulty": 5,
            "question": "Hoe heet de zanger van de Ierse band U2?",
            "answer": "Bono",
            "acceptedAnswers": [
                "Bono",
                "Paul Hewson"
            ]
        },
        {
            "id": "ent_10123",
            "category": "Amusement",
            "difficulty": 5,
            "question": "Welke acteur speelde James Bond vlak voor Daniel Craig?",
            "answer": "Pierce Brosnan",
            "acceptedAnswers": [
                "Brosnan",
                "Pierce Brosnan"
            ]
        },
        {
            "id": "sci_10124",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Welk dier is het symbool van het Wereld Natuur Fonds (WWF)?",
            "answer": "Reuzenpanda",
            "acceptedAnswers": [
                "Panda",
                "Reuzenpanda"
            ]
        },
        {
            "id": "sci_10125",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Wat is het chemische symbool voor ijzer?",
            "answer": "Fe",
            "acceptedAnswers": [
                "Fe"
            ]
        },
        {
            "id": "sci_10126",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Met welke schaal wordt de kracht van een aardbeving uitgedrukt?",
            "answer": "Schaal van Richter",
            "acceptedAnswers": [
                "Richter",
                "Schaal van Richter"
            ]
        },
        {
            "id": "sci_10127",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Welk gas ademen planten in voor hun fotosynthese?",
            "answer": "Koolstofdioxide",
            "acceptedAnswers": [
                "CO2",
                "Koolstofdioxide"
            ]
        },
        {
            "id": "sci_10128",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Wie vond het dynamiet uit?",
            "answer": "Alfred Nobel",
            "acceptedAnswers": [
                "Nobel",
                "Alfred Nobel"
            ]
        },
        {
            "id": "sci_10129",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Welke term wordt gebruikt om de snelheid van het geluid aan te duiden?",
            "answer": "Mach",
            "acceptedAnswers": [
                "Mach 1",
                "Mach"
            ]
        },
        {
            "id": "sci_10130",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Wat is het grootste orgaan van het menselijk lichaam?",
            "answer": "De huid",
            "acceptedAnswers": [
                "Huid",
                "De huid"
            ]
        },
        {
            "id": "sci_10131",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Welke ster staat het dichtst bij de Aarde (na de Zon)?",
            "answer": "Proxima Centauri",
            "acceptedAnswers": [
                "Proxima Centauri",
                "Alpha Centauri"
            ]
        },
        {
            "id": "sport_10132",
            "category": "Sport & Spel",
            "difficulty": 5,
            "question": "Welke Belg won in 1976 als laatste landgenoot de Tour de France?",
            "answer": "Lucien Van Impe",
            "acceptedAnswers": [
                "Van Impe",
                "Lucien Van Impe"
            ]
        },
        {
            "id": "sport_10133",
            "category": "Sport & Spel",
            "difficulty": 5,
            "question": "In welk land ligt het beroemde racecircuit Silverstone?",
            "answer": "Verenigd Koninkrijk",
            "acceptedAnswers": [
                "Groot-Brittannië",
                "Verenigd Koninkrijk",
                "Engeland",
                "UK"
            ]
        },
        {
            "id": "sport_10134",
            "category": "Sport & Spel",
            "difficulty": 5,
            "question": "Wat is de exacte afstand van een marathon (in km en meters)?",
            "answer": "42,195 km",
            "acceptedAnswers": [
                "42,195",
                "42km 195m",
                "42.195"
            ]
        },
        {
            "id": "sport_10135",
            "category": "Sport & Spel",
            "difficulty": 5,
            "question": "Welke Italiaanse voetbalclub heeft als bijnaam 'De Oude Dame'?",
            "answer": "Juventus",
            "acceptedAnswers": [
                "Juventus"
            ]
        },
        {
            "id": "sport_10136",
            "category": "Sport & Spel",
            "difficulty": 5,
            "question": "Wat is de nationale sport van Japan?",
            "answer": "Sumo",
            "acceptedAnswers": [
                "Sumoworstelen",
                "Sumo"
            ]
        },
        {
            "id": "sport_10137",
            "category": "Sport & Spel",
            "difficulty": 5,
            "question": "Bij welke racketsport gebruik je een 'shuttle'?",
            "answer": "Badminton",
            "acceptedAnswers": [
                "Badminton"
            ]
        },
        {
            "id": "sport_10138",
            "category": "Sport & Spel",
            "difficulty": 5,
            "question": "Wat is de maximale break die je kan behalen in snooker (zonder fouten van de tegenstander)?",
            "answer": "147",
            "acceptedAnswers": [
                "147",
                "One four seven"
            ]
        },
        {
            "id": "sport_10139",
            "category": "Sport & Spel",
            "difficulty": 5,
            "question": "Welke stad organiseerde de Olympische Zomerspelen van 2012?",
            "answer": "Londen",
            "acceptedAnswers": [
                "Londen",
                "London"
            ]
        },
        {
            "id": "art_10140",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Wie schreef de Harry Potter-boekenreeks?",
            "answer": "J.K. Rowling",
            "acceptedAnswers": [
                "Rowling",
                "J.K. Rowling"
            ]
        },
        {
            "id": "art_10141",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Van welke Belgische schilder is de 'bolhoed' een bekend kenmerk?",
            "answer": "René Magritte",
            "acceptedAnswers": [
                "Magritte",
                "René Magritte"
            ]
        },
        {
            "id": "art_10142",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Welke Engelse schrijver schreef 'Oliver Twist' en 'A Christmas Carol'?",
            "answer": "Charles Dickens",
            "acceptedAnswers": [
                "Dickens",
                "Charles Dickens"
            ]
        },
        {
            "id": "art_10143",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Welke Noorse kunstenaar schilderde 'De Schreeuw'?",
            "answer": "Edvard Munch",
            "acceptedAnswers": [
                "Munch",
                "Edvard Munch"
            ]
        },
        {
            "id": "art_10144",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Wie is de auteur van 'De Leeuw van Vlaanderen'?",
            "answer": "Hendrik Conscience",
            "acceptedAnswers": [
                "Conscience",
                "Hendrik Conscience"
            ]
        },
        {
            "id": "art_10145",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "In welk toneelstuk van Shakespeare komt de zin 'To be, or not to be' voor?",
            "answer": "Hamlet",
            "acceptedAnswers": [
                "Hamlet"
            ]
        },
        {
            "id": "art_10146",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Welke Amerikaanse auteur schreef 'The Da Vinci Code'?",
            "answer": "Dan Brown",
            "acceptedAnswers": [
                "Dan Brown",
                "Brown"
            ]
        },
        {
            "id": "art_10147",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Wie was de Griekse god van de zee?",
            "answer": "Poseidon",
            "acceptedAnswers": [
                "Poseidon"
            ]
        },
        {
            "id": "art_10148",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Welke kunstenaar maakte het beroemde beeld van David in Florence?",
            "answer": "Michelangelo",
            "acceptedAnswers": [
                "Michelangelo"
            ]
        },
        {
            "id": "art_10149",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Welk genre muziek wordt geassocieerd met Mozart en Beethoven?",
            "answer": "Klassieke muziek",
            "acceptedAnswers": [
                "Klassiek"
            ]
        },

        {
            "id": "hist_0003",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Wie voer in 1492 naar de Caraïben en wordt vaak genoemd als ‘ontdekker’ van Amerika?",
            "answer": "Christoffel Columbus",
            "acceptedAnswers": [
                "Columbus",
                "Christopher Columbus"
            ]
        },
        {
            "id": "hist_0005",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Welke Romeinse stad werd in 79 n.Chr. bedolven door de Vesuvius?",
            "answer": "Pompeï",
            "acceptedAnswers": [
                "Pompeii",
                "Pompei",
                "Pompeï"
            ]
        },
        {
            "id": "hist_0007",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Welke oorlog eindigde met het Verdrag van Versailles in 1919?",
            "answer": "Eerste Wereldoorlog",
            "acceptedAnswers": [
                "WO I",
                "Wereldoorlog I",
                "De Eerste Wereldoorlog"
            ]
        },
        {
            "id": "hist_0008",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Hoe heet de handelsroute die China met Europa verbond in de oudheid?",
            "answer": "Zijderoute",
            "acceptedAnswers": [
                "Silk Road",
                "Zijderoute"
            ]
        },
        {
            "id": "hist_0009",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Welke Amerikaanse beweging werd geleid door Martin Luther King Jr. voor gelijke rechten?",
            "answer": "Burgerrechtenbeweging",
            "acceptedAnswers": [
                "Civil rights movement",
                "Amerikaanse burgerrechtenbeweging"
            ]
        },
        {
            "id": "hist_0015",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Welke Sovjetleider startte de perestrojka-hervormingen in de jaren 80?",
            "answer": "Michail Gorbatsjov",
            "acceptedAnswers": [
                "Gorbatsjov",
                "Mikhail Gorbachev"
            ]
        },
        {
            "id": "geo_0002",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welk land heeft de langste kustlijn ter wereld?",
            "answer": "Canada",
            "acceptedAnswers": [
                "Canada"
            ]
        },
        {
            "id": "geo_0005",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welke zee ligt tussen Italië en de Balkan?",
            "answer": "Adriatische Zee",
            "acceptedAnswers": [
                "Adriatische Zee",
                "Adriaticum",
                "Adriatic Sea"
            ]
        },
        {
            "id": "geo_0006",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welke stad huisvest de Europese Commissie en de Europese Raad?",
            "answer": "Brussel",
            "acceptedAnswers": [
                "Brussels",
                "Bruxelles",
                "Brussel"
            ]
        },
        {
            "id": "geo_0009",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welke twee continenten worden traditioneel gescheiden door het Oeralgebergte?",
            "answer": "Europa en Azië",
            "acceptedAnswers": [
                "Azië en Europa",
                "Europa & Azië"
            ]
        },
        {
            "id": "geo_0010",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Wat is het grootste eiland ter wereld dat geen continent is?",
            "answer": "Groenland",
            "acceptedAnswers": [
                "Greenland",
                "Groenland"
            ]
        },
        {
            "id": "geo_0016",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welke zeestraat scheidt Europa van Afrika tussen Spanje en Marokko?",
            "answer": "Straat van Gibraltar",
            "acceptedAnswers": [
                "Gibraltar",
                "Street of Gibraltar",
                "Straat van Gibraltar"
            ]
        },
        {
            "id": "sci_0003",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Wat is de SI-eenheid van elektrische stroomsterkte?",
            "answer": "ampère",
            "acceptedAnswers": [
                "A",
                "Ampere",
                "Ampère",
                "ampère"
            ]
        },
        {
            "id": "sci_0007",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Welke kracht houdt de planeten in hun baan om de zon?",
            "answer": "Zwaartekracht",
            "acceptedAnswers": [
                "Gravitatie",
                "Gravitatiekracht",
                "Zwaartekracht"
            ]
        },
        {
            "id": "sci_0008",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Welke klier in het menselijk lichaam produceert insuline?",
            "answer": "Alvleesklier",
            "acceptedAnswers": [
                "Pancreas",
                "Alvleesklier"
            ]
        },
        {
            "id": "sci_0010",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Welke wetenschapper formuleerde de drie bewegingswetten?",
            "answer": "Isaac Newton",
            "acceptedAnswers": [
                "Newton",
                "Sir Isaac Newton",
                "Isaac Newton"
            ]
        },
        {
            "id": "sci_0015",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Wat is het grootste inwendige orgaan van de mens naar massa?",
            "answer": "Lever",
            "acceptedAnswers": [
                "De lever",
                "Lever"
            ]
        },
        {
            "id": "sci_0016",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Welke grote loopvogel kan niet vliegen maar wel het snelst rennen?",
            "answer": "Struisvogel",
            "acceptedAnswers": [
                "Struisvogel",
                "Ostrich"
            ]
        },
        {
            "id": "art_0003",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Welke Nederlandse schilder staat bekend om strakke vlakken en primaire kleuren?",
            "answer": "Piet Mondriaan",
            "acceptedAnswers": [
                "Mondriaan",
                "Piet Mondrian",
                "Piet Mondriaan"
            ]
        },
        {
            "id": "art_0007",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Welke Vlaamse dichter schreef ‘Het Schrijverke’?",
            "answer": "Guido Gezelle",
            "acceptedAnswers": [
                "Gezelle",
                "Guido Gezelle"
            ]
        },
        {
            "id": "art_0008",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Hoe heet de kunststroming waarmee Salvador Dalí wordt geassocieerd?",
            "answer": "Surrealisme",
            "acceptedAnswers": [
                "Surrealismus",
                "Surrealism",
                "Surrealisme"
            ]
        },
        {
            "id": "art_0010",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Wie componeerde de opera ‘Carmen’?",
            "answer": "Georges Bizet",
            "acceptedAnswers": [
                "Bizet",
                "Georges Bizet"
            ]
        },
        {
            "id": "art_0012",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Wie is de auteur van ‘De Ontdekking van de Hemel’?",
            "answer": "Harry Mulisch",
            "acceptedAnswers": [
                "Mulisch",
                "Harry Mulisch"
            ]
        },
        {
            "id": "art_0015",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Wie schreef de roman ‘Het verdriet van België’?",
            "answer": "Hugo Claus",
            "acceptedAnswers": [
                "Claus",
                "Hugo Claus"
            ]
        },
        {
            "id": "ent_0003",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke regisseur maakte de film ‘Pulp Fiction’?",
            "answer": "Quentin Tarantino",
            "acceptedAnswers": [
                "Tarantino",
                "Quentin Tarantino"
            ]
        },
        {
            "id": "ent_0005",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke sciencefictionfilm introduceerde ‘bullet time’ met Neo?",
            "answer": "The Matrix",
            "acceptedAnswers": [
                "Matrix",
                "The Matrix"
            ]
        },
        {
            "id": "ent_0006",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke tv-serie volgt de overlevenden van vlucht 815 op een mysterieus eiland?",
            "answer": "Lost",
            "acceptedAnswers": [
                "Lost"
            ]
        },
        {
            "id": "ent_0009",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke fantasytrilogie, gefilmd in Nieuw-Zeeland, won meerdere Oscars?",
            "answer": "The Lord of the Rings",
            "acceptedAnswers": [
                "LOTR",
                "In de ban van de ring",
                "The Lord of the Rings"
            ]
        },
        {
            "id": "ent_0011",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "In welke komische serie is Michael Scott de onhandige manager?",
            "answer": "The Office",
            "acceptedAnswers": [
                "The Office (US)",
                "The Office"
            ]
        },
        {
            "id": "ent_0016",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke superheld is het alter ego van Peter Parker?",
            "answer": "Spider-Man",
            "acceptedAnswers": [
                "Spiderman",
                "Spider Man",
                "Spider-Man"
            ]
        },
        {
            "id": "ent_0018",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke videogame-reeks speelt zich af in steden als Liberty City en Los Santos?",
            "answer": "Grand Theft Auto",
            "acceptedAnswers": [
                "GTA",
                "Grand Theft Auto"
            ]
        },
        {
            "id": "ent_0019",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke HBO-serie draait om draken en de strijd om de IJzeren Troon?",
            "answer": "Game of Thrones",
            "acceptedAnswers": [
                "GoT",
                "Game of Thrones"
            ]
        },
        {
            "id": "spo_0001",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Welke Belg won de Ronde van Frankrijk vijf keer?",
            "answer": "Eddy Merckx",
            "acceptedAnswers": [
                "Merckx",
                "E. Merckx",
                "Eddy Merckx"
            ]
        },
        {
            "id": "spo_0003",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Welke tennisser heeft de bijnaam ‘King of Clay’?",
            "answer": "Rafael Nadal",
            "acceptedAnswers": [
                "Nadal",
                "Rafa Nadal",
                "Rafael Nadal"
            ]
        },
        {
            "id": "spo_0008",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Welke Amerikaanse tennisster won 23 Grand Slams in het enkelspel?",
            "answer": "Serena Williams",
            "acceptedAnswers": [
                "Williams",
                "S. Williams",
                "Serena Williams"
            ]
        },
        {
            "id": "spo_0011",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Welke Spaanse voetbalclub staat bekend als ‘Blaugrana’?",
            "answer": "FC Barcelona",
            "acceptedAnswers": [
                "Barcelona",
                "Barça",
                "FC Barcelona"
            ]
        },
        {
            "id": "spo_0012",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Welke dartslegende draagt de bijnaam ‘The Power’?",
            "answer": "Phil Taylor",
            "acceptedAnswers": [
                "Taylor",
                "Philip Taylor",
                "Phil Taylor"
            ]
        },
        {
            "id": "hist_0019",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Welke revolutie in 1917 leidde tot het ontstaan van de Sovjet-Unie?",
            "answer": "Oktoberrevolutie",
            "acceptedAnswers": [
                "Russische Revolutie",
                "Oktoberrevolutie",
                "Bolsjewistische revolutie"
            ]
        },
        {
            "id": "hist_0022",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Wie was de eerste vrouwelijke premier van het Verenigd Koninkrijk?",
            "answer": "Margaret Thatcher",
            "acceptedAnswers": [
                "Thatcher",
                "M. Thatcher",
                "Margaret Thatcher"
            ]
        },
        {
            "id": "hist_0025",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Welke Normandische hertog veroverde Engeland na de slag bij Hastings?",
            "answer": "Willem de Veroveraar",
            "acceptedAnswers": [
                "Willem I",
                "William the Conqueror",
                "Willem de Veroveraar"
            ]
        },
        {
            "id": "hist_0026",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Welke pandemie teisterde Europa in de 14e eeuw en staat bekend als de Zwarte Dood?",
            "answer": "Pest",
            "acceptedAnswers": [
                "Zwarte Dood",
                "Builenpest",
                "Pest"
            ]
        },
        {
            "id": "hist_0029",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Welke scheiding tussen Oost en West werd in 1961 fysiek in Berlijn opgetrokken?",
            "answer": "Berlijnse Muur",
            "acceptedAnswers": [
                "Muur van Berlijn",
                "Berlijnse muur",
                "Berlijnse Muur"
            ]
        },
        {
            "id": "hist_0032",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Welke Belgische uitvinder wordt vaak gecrediteerd voor de sax?",
            "answer": "Adolphe Sax",
            "acceptedAnswers": [
                "Antoine-Joseph Sax",
                "A. Sax",
                "Adolphe Sax"
            ]
        },
        {
            "id": "hist_0034",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Welke Duitse drukker introduceerde het inzetten van losse loden letters in Europa?",
            "answer": "Johannes Gutenberg",
            "acceptedAnswers": [
                "Gutenberg",
                "Johann Gutenberg",
                "Johannes Gutenberg"
            ]
        },
        {
            "id": "geo_0018",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welke twee landen delen het eiland Hispaniola?",
            "answer": "Haïti en Dominicaanse Republiek",
            "acceptedAnswers": [
                "Haiti en Dominicaanse Republiek",
                "Haïti & Dominicaanse Republiek",
                "Haïti en de Dominicaanse Republiek"
            ]
        },
        {
            "id": "geo_0020",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welk Europees land heeft Vaticaanstad volledig omsloten?",
            "answer": "Italië",
            "acceptedAnswers": [
                "Italie",
                "Italia",
                "Italië"
            ]
        },
        {
            "id": "geo_0023",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Wat is de hoogste berg van de Alpen?",
            "answer": "Mont Blanc",
            "acceptedAnswers": [
                "Monte Bianco",
                "Montblanc",
                "Mont Blanc"
            ]
        },
        {
            "id": "geo_0026",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welke staat is qua oppervlakte de grootste van de Verenigde Staten?",
            "answer": "Alaska",
            "acceptedAnswers": [
                "Alaska"
            ]
        },
        {
            "id": "geo_0028",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welke woestijn beslaat het grootste deel van Noord-Afrika?",
            "answer": "Sahara",
            "acceptedAnswers": [
                "Sahara",
                "Sahara-woestijn"
            ]
        },
        {
            "id": "geo_0030",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Hoe heet de langgerekte bergketen langs de westkust van Zuid-Amerika?",
            "answer": "Andes",
            "acceptedAnswers": [
                "Andesgebergte",
                "Cordillera de los Andes",
                "Andes"
            ]
        },
        {
            "id": "sci_0017",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Welke schaal wordt gebruikt om de sterkte van aardbevingen te meten op basis van energievrijkomst?",
            "answer": "Momentmagnitudeschaal",
            "acceptedAnswers": [
                "Mw-schaal",
                "Moment magnitude",
                "Momentmagnitudeschaal"
            ]
        },
        {
            "id": "sci_0020",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Welke pH-waarde is neutraal bij 25 °C?",
            "answer": "7",
            "acceptedAnswers": [
                "7,0",
                "zeven",
                "7"
            ]
        },
        {
            "id": "sci_0022",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Hoe heet de overgang van vaste stof direct naar gasfase?",
            "answer": "Sublimatie",
            "acceptedAnswers": [
                "Sublimeren",
                "Sublimatie"
            ]
        },
        {
            "id": "sci_0025",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Welke wet verbindt druk en volume van een gas bij constante temperatuur?",
            "answer": "Wet van Boyle",
            "acceptedAnswers": [
                "Boyle",
                "Boyle-Mariotte",
                "Wet van Boyle"
            ]
        },
        {
            "id": "sci_0027",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Welke hormonen worden afgegeven bij 'vecht-of-vlucht' en verhogen hartslag en alertheid?",
            "answer": "Adrenaline",
            "acceptedAnswers": [
                "Epinefrine",
                "Adrenaline"
            ]
        },
        {
            "id": "sci_0030",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Welke eenheid meet de frequentie van geluidsgolven?",
            "answer": "hertz",
            "acceptedAnswers": [
                "Hz",
                "Hertz",
                "hertz"
            ]
        },
        {
            "id": "art_0017",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Welke Nederlander schreef ‘Max Havelaar’ onder het pseudoniem Multatuli?",
            "answer": "Eduard Douwes Dekker",
            "acceptedAnswers": [
                "Multatuli",
                "E. Douwes Dekker",
                "Eduard Douwes Dekker"
            ]
        },
        {
            "id": "art_0020",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Welke Ierse schrijver is bekend van ‘Ulysses’?",
            "answer": "James Joyce",
            "acceptedAnswers": [
                "Joyce",
                "James Joyce"
            ]
        },
        {
            "id": "art_0023",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Welke kunststroming met Kandinsky en Klee legde de basis aan het Bauhaus?",
            "answer": "Modernisme",
            "acceptedAnswers": [
                "Bauhaus-modernisme",
                "Modernistische kunst",
                "Modernisme"
            ]
        },
        {
            "id": "art_0026",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Welke Duitse filosoof schreef ‘Kritik der reinen Vernunft’?",
            "answer": "Immanuel Kant",
            "acceptedAnswers": [
                "Kant",
                "I. Kant",
                "Immanuel Kant"
            ]
        },
        {
            "id": "art_0028",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Wie componeerde de opera ‘De Toverfluit’?",
            "answer": "Wolfgang Amadeus Mozart",
            "acceptedAnswers": [
                "Mozart",
                "W.A. Mozart",
                "Wolfgang Amadeus Mozart"
            ]
        },
        {
            "id": "art_0031",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Welke architect ontwierp het Guggenheim Museum in Bilbao met golvende titanium vormen?",
            "answer": "Frank Gehry",
            "acceptedAnswers": [
                "Gehry",
                "Frank O. Gehry",
                "Frank Gehry"
            ]
        },
        {
            "id": "art_0032",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Welke Franse romanschrijver pennde ‘Le Petit Nicolas’ samen met tekenaar Sempé?",
            "answer": "René Goscinny",
            "acceptedAnswers": [
                "Goscinny",
                "Rene Goscinny",
                "René Goscinny"
            ]
        },
        {
            "id": "ent_0021",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke filmreeks volgt archeoloog-avonturier Indiana Jones?",
            "answer": "Indiana Jones",
            "acceptedAnswers": [
                "Indiana Jones"
            ]
        },
        {
            "id": "ent_0024",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke band bracht in 1991 het album ‘Nevermind’ uit?",
            "answer": "Nirvana",
            "acceptedAnswers": [
                "Nirvana"
            ]
        },
        {
            "id": "ent_0026",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke Britse spion heeft codenaam 007?",
            "answer": "James Bond",
            "acceptedAnswers": [
                "Bond",
                "007",
                "James Bond"
            ]
        },
        {
            "id": "ent_0029",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke sitcom draait om een fysicusengroep in Pasadena met Sheldon en Leonard?",
            "answer": "The Big Bang Theory",
            "acceptedAnswers": [
                "Big Bang Theory",
                "The Big Bang Theory"
            ]
        },
        {
            "id": "ent_0031",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke film opent met de tekst ‘A long time ago in a galaxy far, far away…’?",
            "answer": "Star Wars",
            "acceptedAnswers": [
                "Star Wars"
            ]
        },
        {
            "id": "ent_0034",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke serie volgt Walter White, een leraar die meth kookt?",
            "answer": "Breaking Bad",
            "acceptedAnswers": [
                "Breaking Bad"
            ]
        },
        {
            "id": "ent_0037",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke film bracht de zin ‘Life finds a way’ met dinosaurussen terug op het scherm?",
            "answer": "Jurassic Park",
            "acceptedAnswers": [
                "Jurassic Park"
            ]
        },
        {
            "id": "ent_0038",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke spelreeks van Blizzard draait om het rijk Azeroth?",
            "answer": "Warcraft",
            "acceptedAnswers": [
                "World of Warcraft",
                "Warcraft"
            ]
        },
        {
            "id": "spo_0016",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Welke wielerklassieker heet ook ‘De Ronde’ en wordt in Vlaanderen gereden?",
            "answer": "Ronde van Vlaanderen",
            "acceptedAnswers": [
                "De Ronde",
                "Tour of Flanders",
                "Ronde van Vlaanderen"
            ]
        },
        {
            "id": "spo_0020",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Welke voetbalnatie wordt ‘Azzurri’ genoemd?",
            "answer": "Italië",
            "acceptedAnswers": [
                "Italie",
                "Italia",
                "Italië"
            ]
        },
        {
            "id": "spo_0022",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Welke raceklasse gebruikt auto's als de Ferrari en Mercedes in een openwiel-formule?",
            "answer": "Formule 1",
            "acceptedAnswers": [
                "F1",
                "Formula One",
                "Formule 1"
            ]
        },
        {
            "id": "spo_0025",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Welke Franse wielerrace heet ‘La Grande Boucle’?",
            "answer": "Tour de France",
            "acceptedAnswers": [
                "Ronde van Frankrijk",
                "Le Tour",
                "Tour de France"
            ]
        },
        {
            "id": "spo_0028",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Welke Belg won in 2021 en 2022 de Ronde van Lombardije?",
            "answer": "Tadej Pogačar",
            "acceptedAnswers": [
                "Pogacar",
                "Tadej Pogacar",
                "Tadej Pogačar"
            ]
        },
        {
            "id": "spo_0029",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Welke sport gebruikt een oche en een bord met dubbel en triple vakken?",
            "answer": "Darts",
            "acceptedAnswers": [
                "Darten",
                "Darts"
            ]
        },
        {
            "id": "hist_0035",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Hoe heet het verdrag uit 1957 dat de Europese Economische Gemeenschap oprichtte?",
            "answer": "Verdrag van Rome",
            "acceptedAnswers": [
                "Verdrag van Rome",
                "Treaty of Rome"
            ]
        },
        {
            "id": "hist_0037",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Hoe heette het schip dat in 1620 Engelse pelgrims naar Amerika bracht?",
            "answer": "Mayflower",
            "acceptedAnswers": [
                "De Mayflower",
                "Mayflower"
            ]
        },
        {
            "id": "hist_0041",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Hoe heet de Romeinse muur die Noord-Engeland doorkruist om invallen te stoppen?",
            "answer": "Muur van Hadrianus",
            "acceptedAnswers": [
                "Hadrianusmuur",
                "Hadrian's Wall",
                "Muur van Hadrianus"
            ]
        },
        {
            "id": "hist_0042",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Welke Belgische priester-fysicus formuleerde de oerknaltheorie?",
            "answer": "Georges Lemaître",
            "acceptedAnswers": [
                "Lemaître",
                "George Lemaitre",
                "Georges Lemaître"
            ]
        },
        {
            "id": "hist_0044",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Welke Italiaanse stad geldt als de bakermat van de renaissance?",
            "answer": "Florence",
            "acceptedAnswers": [
                "Firenze",
                "Florence"
            ]
        },
        {
            "id": "hist_0049",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Hoe heet het Britse codeercentrum waar Enigma werd gekraakt?",
            "answer": "Bletchley Park",
            "acceptedAnswers": [
                "Bletchley",
                "Bletchley Park"
            ]
        },
        {
            "id": "geo_0035",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Hoe heten de twee grote eilanden van Nieuw-Zeeland?",
            "answer": "Noordereiland en Zuidereiland",
            "acceptedAnswers": [
                "Zuidereiland en Noordereiland",
                "North Island en South Island",
                "Noordereiland & Zuidereiland"
            ]
        },
        {
            "id": "geo_0037",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Hoe heet het schiereiland waarop Spanje en Portugal liggen?",
            "answer": "Iberisch Schiereiland",
            "acceptedAnswers": [
                "Iberië",
                "Iberisch schiereiland",
                "Iberian Peninsula",
                "Iberisch Schiereiland"
            ]
        },
        {
            "id": "geo_0039",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welk kanaal verbindt de Middellandse Zee met de Rode Zee?",
            "answer": "Suezkanaal",
            "acceptedAnswers": [
                "Suez-kanaal",
                "Suez Canal",
                "Suezkanaal"
            ]
        },
        {
            "id": "geo_0041",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welke wereldstad ligt letterlijk op twee continenten tegelijk?",
            "answer": "Istanboel",
            "acceptedAnswers": [
                "Istanbul",
                "İstanbul",
                "Istanboel"
            ]
        },
        {
            "id": "geo_0042",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welke woestijn strekt zich uit over Noord-China en Mongolië?",
            "answer": "Gobiwoestijn",
            "acceptedAnswers": [
                "Gobi",
                "Gobi-woestijn",
                "Gobiwoestijn"
            ]
        },
        {
            "id": "geo_0045",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welke rivier is de langste van Frankrijk?",
            "answer": "Loire",
            "acceptedAnswers": [
                "De Loire",
                "Loire"
            ]
        },
        {
            "id": "geo_0046",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welke Portugese archipel in de Atlantische Oceaan bestaat o.a. uit Funchal?",
            "answer": "Madeira",
            "acceptedAnswers": [
                "Madeira-archipel",
                "Madeira"
            ]
        },
        {
            "id": "sci_0035",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Wat is de SI-eenheid van kracht?",
            "answer": "newton",
            "acceptedAnswers": [
                "N",
                "Newton",
                "newton"
            ]
        },
        {
            "id": "sci_0036",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Wat is de chemische formule van keukenzout?",
            "answer": "NaCl",
            "acceptedAnswers": [
                "Natriumchloride",
                "NaCl"
            ]
        },
        {
            "id": "sci_0038",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Wat registreert een seismograaf?",
            "answer": "Seismische trillingen",
            "acceptedAnswers": [
                "Aardbevingsgolven",
                "Seismische golven",
                "Seismische trillingen"
            ]
        },
        {
            "id": "sci_0042",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Welke logaritmische eenheid gebruiken we voor geluidssterkte?",
            "answer": "decibel",
            "acceptedAnswers": [
                "dB",
                "Decibel",
                "decibel"
            ]
        },
        {
            "id": "sci_0044",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Welke stof zorgt voor de ‘hitte’ in chilipepers?",
            "answer": "Capsaïcine",
            "acceptedAnswers": [
                "Capsaicine",
                "Capsaïcine",
                "Capsaicin"
            ]
        },
        {
            "id": "sci_0046",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Welke natuurkundige grootheid drukken we uit in joule?",
            "answer": "Energie",
            "acceptedAnswers": [
                "E",
                "Energie"
            ]
        },
        {
            "id": "art_0033",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Wie schreef de middeleeuwse thriller ‘De Naam van de Roos’?",
            "answer": "Umberto Eco",
            "acceptedAnswers": [
                "Eco",
                "Umberto Eco"
            ]
        },
        {
            "id": "art_0036",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Welke Belgische surrealist schilderde ‘Ceci n’est pas une pipe’?",
            "answer": "René Magritte",
            "acceptedAnswers": [
                "Magritte",
                "Rene Magritte",
                "René Magritte"
            ]
        },
        {
            "id": "art_0037",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Wie is de auteur van ‘The Catcher in the Rye’?",
            "answer": "J.D. Salinger",
            "acceptedAnswers": [
                "Salinger",
                "Jerome David Salinger",
                "J.D. Salinger"
            ]
        },
        {
            "id": "art_0043",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Wie schreef de roman ‘The Handmaid’s Tale’?",
            "answer": "Margaret Atwood",
            "acceptedAnswers": [
                "Atwood",
                "Margaret Atwood"
            ]
        },
        {
            "id": "art_0046",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Wie schreef het epos ‘Don Quichot’?",
            "answer": "Miguel de Cervantes",
            "acceptedAnswers": [
                "Cervantes",
                "Miguel de Cervantes Saavedra",
                "Miguel de Cervantes"
            ]
        },
        {
            "id": "art_0047",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Welke beeldhouwer maakte ‘De Denker’?",
            "answer": "Auguste Rodin",
            "acceptedAnswers": [
                "Rodin",
                "A. Rodin",
                "Auguste Rodin"
            ]
        },
        {
            "id": "art_0048",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Wie schreef het gedicht ‘If—’?",
            "answer": "Rudyard Kipling",
            "acceptedAnswers": [
                "Kipling",
                "R. Kipling",
                "Rudyard Kipling"
            ]
        },
        {
            "id": "ent_0041",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke gevangenisfilm uit 1994 volgt Andy Dufresne en Red?",
            "answer": "The Shawshank Redemption",
            "acceptedAnswers": [
                "Shawshank Redemption",
                "The Shawshank Redemption"
            ]
        },
        {
            "id": "ent_0043",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke Xbox-shooter uit 2001 introduceerde Master Chief?",
            "answer": "Halo",
            "acceptedAnswers": [
                "Halo: Combat Evolved",
                "Halo"
            ]
        },
        {
            "id": "ent_0048",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke rapper bracht ‘The Marshall Mathers LP’ uit?",
            "answer": "Eminem",
            "acceptedAnswers": [
                "Marshall Mathers",
                "Slim Shady",
                "Eminem"
            ]
        },
        {
            "id": "ent_0049",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke Nintendo-reeks speelt zich vaak af in Hyrule met held Link?",
            "answer": "The Legend of Zelda",
            "acceptedAnswers": [
                "Zelda",
                "Legend of Zelda",
                "The Legend of Zelda"
            ]
        },
        {
            "id": "ent_0050",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "In welke film uit 2008 speelt Heath Ledger de Joker?",
            "answer": "The Dark Knight",
            "acceptedAnswers": [
                "Dark Knight",
                "The Dark Knight"
            ]
        },
        {
            "id": "ent_0052",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke serie volgt vier vriendinnen in New York met columnist Carrie?",
            "answer": "Sex and the City",
            "acceptedAnswers": [
                "Sex & the City",
                "Sex and the City"
            ]
        },
        {
            "id": "ent_0056",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke actrice speelde Trinity in ‘The Matrix’?",
            "answer": "Carrie-Anne Moss",
            "acceptedAnswers": [
                "Carrie Anne Moss",
                "Carrie-Anne Moss"
            ]
        },
        {
            "id": "ent_0060",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Hoe heet het eerste deel van Peter Jacksons ‘The Lord of the Rings’-trilogie (2001)?",
            "answer": "The Fellowship of the Ring",
            "acceptedAnswers": [
                "LOTR: The Fellowship of the Ring",
                "De Reisgenoten",
                "The Fellowship of the Ring"
            ]
        },
        {
            "id": "spo_0031",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Welke Belgische voetbalclub draagt de bijnaam ‘De Buffalo’s’?",
            "answer": "KAA Gent",
            "acceptedAnswers": [
                "Gent",
                "K.A.A. Gent",
                "KAA Gent"
            ]
        },
        {
            "id": "spo_0032",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Wie is topschutter aller tijden op het WK voetbal (mannen)?",
            "answer": "Miroslav Klose",
            "acceptedAnswers": [
                "Klose",
                "M. Klose",
                "Miroslav Klose"
            ]
        },
        {
            "id": "spo_0037",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Welke Argentijn scoorde de ‘Hand van God’ tegen Engeland in 1986?",
            "answer": "Diego Maradona",
            "acceptedAnswers": [
                "Maradona",
                "D. Maradona",
                "Diego Maradona"
            ]
        },
        {
            "id": "spo_0038",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "In welke sport wordt een ‘paard met zadel’ gebruikt als toestel?",
            "answer": "Turnen",
            "acceptedAnswers": [
                "Gymnastiek",
                "Artistieke gymnastiek",
                "Turnen"
            ]
        },
        {
            "id": "spo_0039",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "In welke denksport bestaat de zet ‘en passant’?",
            "answer": "Schaken",
            "acceptedAnswers": [
                "Chess",
                "schaak",
                "Schaken"
            ]
        },
        {
            "id": "spo_0042",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Welke Spaanse voetbalclub draagt de bijnaam ‘Los Blancos’?",
            "answer": "Real Madrid",
            "acceptedAnswers": [
                "Real",
                "Real Madrid CF",
                "Real Madrid"
            ]
        },
        {
            "id": "spo_0045",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "In welke sport is een ‘maximum’ gelijk aan 180 punten?",
            "answer": "Darts",
            "acceptedAnswers": [
                "Darten",
                "Darts"
            ]
        },
        {
            "id": "hist_0057",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Welke kernramp in 1986 leidde tot massale evacuaties in Oekraïne en Wit-Rusland?",
            "answer": "Tsjernobyl",
            "acceptedAnswers": [
                "Chernobyl",
                "Tjernobyl",
                "Tsjernobyl"
            ]
        },
        {
            "id": "hist_0058",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Welke Vietnamese leider gaf zijn naam aan de hoofdstad van Vietnam van 1976 tot 1978?",
            "answer": "Ho Chi Minh",
            "acceptedAnswers": [
                "Hồ Chí Minh",
                "Ho Chi Minh"
            ]
        },
        {
            "id": "hist_0059",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Welke oorlog eindigde in 1953 met een wapenstilstand rond de 38e breedtegraad?",
            "answer": "Koreaanse Oorlog",
            "acceptedAnswers": [
                "Oorlog in Korea",
                "Korea-oorlog",
                "Koreaanse Oorlog"
            ]
        },
        {
            "id": "hist_0060",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Welke ontdekkingsreiziger bereikte als eerste de Zuidpool in 1911?",
            "answer": "Roald Amundsen",
            "acceptedAnswers": [
                "Amundsen",
                "Roald Amundsen"
            ]
        },
        {
            "id": "hist_0061",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "In welke Duitse stad vonden na de Tweede Wereldoorlog de processen tegen nazileiders plaats?",
            "answer": "Neurenberg",
            "acceptedAnswers": [
                "Nürnberg",
                "Neurenberg"
            ]
        },
        {
            "id": "hist_0064",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Hoe heet de religieuze omwenteling die begon met Luthers 95 stellingen?",
            "answer": "Reformatie",
            "acceptedAnswers": [
                "Protestantse Reformatie",
                "Reformatie"
            ]
        },
        {
            "id": "hist_0066",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Hoe heette de wereldtentoonstelling in Brussel waarbij het Atomium symbool werd?",
            "answer": "Expo 58",
            "acceptedAnswers": [
                "Expo '58",
                "Wereldtentoonstelling 1958",
                "Expo 58"
            ]
        },
        {
            "id": "hist_0067",
            "category": "Geschiedenis",
            "difficulty": 5,
            "question": "Naar welke ontdekkingsreiziger is het continent Amerika genoemd?",
            "answer": "Amerigo Vespucci",
            "acceptedAnswers": [
                "Vespucci",
                "Amerigo Vespucci"
            ]
        },
        {
            "id": "geo_0052",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welke hoofdstad van Finland ligt aan de Finse Golf?",
            "answer": "Helsinki",
            "acceptedAnswers": [
                "Helsingfors",
                "Helsinki"
            ]
        },
        {
            "id": "geo_0054",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welk Afrikaans land grenst aan zowel de Atlantische als de Indische Oceaan?",
            "answer": "Zuid-Afrika",
            "acceptedAnswers": [
                "South Africa",
                "Zuid-Afrika"
            ]
        },
        {
            "id": "geo_0056",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Hoe heet de grootste baai ter wereld aan Bangladesh en India?",
            "answer": "Baai van Bengalen",
            "acceptedAnswers": [
                "Golf van Bengalen",
                "Bay of Bengal",
                "Baai van Bengalen"
            ]
        },
        {
            "id": "geo_0061",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welke bergketen vormt de ruggengraat van het Italiaanse schiereiland?",
            "answer": "Apennijnen",
            "acceptedAnswers": [
                "Apennijns gebergte",
                "Apennines",
                "Apennijnen"
            ]
        },
        {
            "id": "geo_0062",
            "category": "Aardrijkskunde",
            "difficulty": 5,
            "question": "Welke rivier stort zich naar beneden bij de Victoriawatervallen op de grens van Zambia en Zimbabwe?",
            "answer": "Zambezi",
            "acceptedAnswers": [
                "Zambesi",
                "Zambezi",
                "Zambezirivier"
            ]
        },
        {
            "id": "sci_0050",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Welke beroemde formule verbindt energie met massa en lichtsnelheid?",
            "answer": "E=mc^2",
            "acceptedAnswers": [
                "E = mc^2",
                "E=mc2",
                "E = mc2"
            ]
        },
        {
            "id": "sci_0058",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Hoe heet de overgang van rups naar pop bij insecten?",
            "answer": "Verpopping",
            "acceptedAnswers": [
                "Puperen",
                "Verpoppen",
                "Verpopping"
            ]
        },
        {
            "id": "sci_0062",
            "category": "Wetenschap & Natuur",
            "difficulty": 5,
            "question": "Hoe heet de schaal waarmee je de hardheid van mineralen bepaalt?",
            "answer": "Mohsschaal",
            "acceptedAnswers": [
                "Mohs-schaal",
                "Mohs scale",
                "Mohsschaal"
            ]
        },
        {
            "id": "art_0053",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Hoe heet de sierlijke kunststroming rond 1900 met florale lijnen en glas-in-lood?",
            "answer": "Art nouveau",
            "acceptedAnswers": [
                "Jugendstil",
                "Art nouveau"
            ]
        },
        {
            "id": "art_0055",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Welke Russische schrijver is de auteur van ‘Oorlog en Vrede’?",
            "answer": "Leo Tolstoj",
            "acceptedAnswers": [
                "Lev Tolstoj",
                "Tolstoj",
                "Leo Tolstoy",
                "Leo Tolstoj"
            ]
        },
        {
            "id": "art_0057",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Wie schreef het politiek-filosofische werk ‘Il Principe’ (‘De vorst’)?",
            "answer": "Niccolò Machiavelli",
            "acceptedAnswers": [
                "Machiavelli",
                "Niccolo Machiavelli",
                "Niccolò Machiavelli"
            ]
        },
        {
            "id": "art_0060",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Wie schreef de roman ‘Norwegian Wood’?",
            "answer": "Haruki Murakami",
            "acceptedAnswers": [
                "Murakami",
                "Haruki Murakami"
            ]
        },
        {
            "id": "art_0061",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Hoe heet de Duitse kunst- en designschool opgericht door Walter Gropius in 1919?",
            "answer": "Bauhaus",
            "acceptedAnswers": [
                "Het Bauhaus",
                "Bauhaus"
            ]
        },
        {
            "id": "art_0063",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Hoe heet de opera van Puccini met de beroemde aria ‘Nessun dorma’?",
            "answer": "Turandot",
            "acceptedAnswers": [
                "Turandot"
            ]
        },
        {
            "id": "art_0064",
            "category": "Kunst & Literatuur",
            "difficulty": 5,
            "question": "Welke Nederlandse graficus is beroemd om onmogelijke figuren en tessellaties?",
            "answer": "M.C. Escher",
            "acceptedAnswers": [
                "Maurits Cornelis Escher",
                "Escher",
                "M.C. Escher"
            ]
        },
        {
            "id": "ent_0061",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke sitcom over ‘niets’ volgt vier vrienden in New York met Jerry als stand-up?",
            "answer": "Seinfeld",
            "acceptedAnswers": [
                "Seinfeld"
            ]
        },
        {
            "id": "ent_0062",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke 90’s-horrorfilm populariseerde ‘found footage’ met drie studenten in een bos?",
            "answer": "The Blair Witch Project",
            "acceptedAnswers": [
                "Blair Witch Project",
                "The Blair Witch Project"
            ]
        },
        {
            "id": "ent_0064",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke puzzelshooter van Valve draait om testkamers en portalen?",
            "answer": "Portal",
            "acceptedAnswers": [
                "Portal"
            ]
        },
        {
            "id": "ent_0068",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke Duitse elektronische band maakte de klassieker ‘Autobahn’?",
            "answer": "Kraftwerk",
            "acceptedAnswers": [
                "Kraftwerk"
            ]
        },
        {
            "id": "ent_0070",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke Britse sketchreeks introduceerde de catchphrase ‘Computer says no’?",
            "answer": "Little Britain",
            "acceptedAnswers": [
                "Little Britain"
            ]
        },
        {
            "id": "ent_0072",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke zanger bracht de hit ‘Cry Me a River’ uit na zijn boybandperiode?",
            "answer": "Justin Timberlake",
            "acceptedAnswers": [
                "Timberlake",
                "Justin Timberlake"
            ]
        },
        {
            "id": "ent_0074",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke game met bouw- en schietmodus populariseerde de battle royale-trend?",
            "answer": "Fortnite",
            "acceptedAnswers": [
                "Fortnite"
            ]
        },
        {
            "id": "ent_0075",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke sci-fi film van Denis Villeneuve is gebaseerd op Frank Herberts roman?",
            "answer": "Dune",
            "acceptedAnswers": [
                "Dune"
            ]
        },
        {
            "id": "ent_0077",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke animatieserie volgt Fry, Leela en robot Bender in de 31e eeuw?",
            "answer": "Futurama",
            "acceptedAnswers": [
                "Futurama"
            ]
        },
        {
            "id": "ent_0078",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke PlayStation-reeks volgt avonturier Nathan Drake op schattenjacht?",
            "answer": "Uncharted",
            "acceptedAnswers": [
                "Uncharted"
            ]
        },
        {
            "id": "ent_0080",
            "category": "Entertainment",
            "difficulty": 5,
            "question": "Welke populaire Vlaamse quiz wordt gepresenteerd door Erik Van Looy?",
            "answer": "De Slimste Mens ter Wereld",
            "acceptedAnswers": [
                "Slimste Mens",
                "De Slimste Mens ter Wereld"
            ]
        },
        {
            "id": "spo_0046",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Welke club won de meeste Europa Cup I/UEFA Champions League-titels?",
            "answer": "Real Madrid",
            "acceptedAnswers": [
                "Real",
                "Real Madrid CF",
                "Real Madrid"
            ]
        },
        {
            "id": "spo_0047",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Welke Belgische atlete won olympisch goud in de zevenkamp in 2016 en 2020?",
            "answer": "Nafi Thiam",
            "acceptedAnswers": [
                "Nafissatou Thiam",
                "Thiam",
                "Nafi Thiam"
            ]
        },
        {
            "id": "spo_0048",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "In welke sport voer je sprongen uit zoals de dubbele axel en de lutz?",
            "answer": "Kunstschaatsen",
            "acceptedAnswers": [
                "Figure skating",
                "kunstschaatsen",
                "Kunstschaatsen"
            ]
        },
        {
            "id": "spo_0051",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Welke Belgische voetbalclub staat bekend als ‘Paars-Wit’?",
            "answer": "RSC Anderlecht",
            "acceptedAnswers": [
                "Anderlecht",
                "Royal Sporting Club Anderlecht",
                "RSC Anderlecht"
            ]
        },
        {
            "id": "spo_0053",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Welke basketbalpositie wordt afgekort als ‘PG’?",
            "answer": "Point guard",
            "acceptedAnswers": [
                "Point-guard",
                "Spelverdeler",
                "Point guard"
            ]
        },
        {
            "id": "spo_0057",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Hoeveel punten is een touchdown waard in American football (zonder extra poging)?",
            "answer": "6",
            "acceptedAnswers": [
                "zes",
                "6"
            ]
        },
        {
            "id": "spo_0059",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Welke zwemmer bezit het record voor de meeste olympische gouden medailles?",
            "answer": "Michael Phelps",
            "acceptedAnswers": [
                "Phelps",
                "Michael Phelps"
            ]
        },
        {
            "id": "spo_0060",
            "category": "Sport & Vrije Tijd",
            "difficulty": 5,
            "question": "Welke snookerspeler heeft de bijnaam ‘The Rocket’?",
            "answer": "Ronnie O’Sullivan",
            "acceptedAnswers": [
                "Ronnie O'Sullivan",
                "O’Sullivan",
                "Ronnie O’Sullivan"
            ]
        },

        // --- MOEILIJKHEIDSGRAAD 6 ---
        {
            "id": "geo_10400",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Welke rivier, die ontspringt in Noord-Frankrijk, stroomt door Gent en mondt uit in de Schelde in Dendermonde?",
            "answer": "De Leie",
            "acceptedAnswers": [
                "Leie",
                "Lys"
            ]
        },
        {
            "id": "geo_10401",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Bij welke Spaanse eilandengroep horen populaire vakantiebestemmingen als Mallorca, Ibiza en Menorca?",
            "answer": "De Balearen",
            "acceptedAnswers": [
                "Balearen",
                "Balearic Islands",
                "Islas Baleares"
            ]
        },
        {
            "id": "geo_10402",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "In welke Amerikaanse staat vind je gokstad Las Vegas?",
            "answer": "Nevada",
            "acceptedAnswers": [
                "NV"
            ]
        },
        {
            "id": "geo_10403",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Welke hoofdstad wordt vaak verward met Sydney of Melbourne, maar is de échte hoofdstad van Australië?",
            "answer": "Canberra",
            "acceptedAnswers": [
                "Camberra"
            ]
        },
        {
            "id": "geo_10404",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Op de grens van Brazilië en Argentinië liggen de grootste watervallenstelsels ter wereld. Hoe heten deze watervallen?",
            "answer": "Iguazu",
            "acceptedAnswers": [
                "Iguazu Falls",
                "Watervallen van de Iguazu",
                "Iguaçu"
            ]
        },
        {
            "id": "geo_10405",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Welk Scandinavisch land gebruikt niet de Euro en ook niet de Kroon, maar heeft de Euro wel als officiële munt ingevoerd in 2024 niet gehaald, en betaalt nog steeds met de Kroon? (Correctie: Welk land grenst aan Zweden en Rusland en heeft Helsinki als hoofdstad?)",
            "answer": "Finland",
            "acceptedAnswers": [
                "Republiek Finland",
                "Suomi"
            ]
        },
        {
            "id": "geo_10406",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "In welk land ligt de historische stad Petra, bekend om de uit de rotsen gehouwen schatkamer?",
            "answer": "Jordanië",
            "acceptedAnswers": [
                "Jordan",
                "Hasjemitisch Koninkrijk Jordanië"
            ]
        },
        {
            "id": "geo_10407",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Welk kanaal verbindt de Middellandse Zee met de Rode Zee?",
            "answer": "Suez",
            "acceptedAnswers": [
                "Suezkanaal",
                "Suez kanaal",
                "Suez Canal"
            ]
        },
        {
            "id": "hist_10408",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welke Vlaamse veldslag vond plaats op 11 juli 1302?",
            "answer": "Guldensporenslag",
            "acceptedAnswers": [
                "De Guldensporenslag",
                "Slag der Gulden Sporen",
                "Slag bij Kortrijk"
            ]
        },
        {
            "id": "hist_10409",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Wie was de eerste president van Zuid-Afrika na de afschaffing van de Apartheid?",
            "answer": "Nelson Mandela",
            "acceptedAnswers": [
                "Mandela",
                "Madiba",
                "Nelson Rolihlahla Mandela"
            ]
        },
        {
            "id": "hist_10410",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welk wereldberoemd schip zonk in 1912 na een aanvaring met een ijsberg?",
            "answer": "Titanic",
            "acceptedAnswers": [
                "RMS Titanic",
                "De Titanic"
            ]
        },
        {
            "id": "hist_10411",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Wie was de leider van de Sovjet-Unie tijdens een groot deel van de Tweede Wereldoorlog en het begin van de Koude Oorlog?",
            "answer": "Jozef Stalin",
            "acceptedAnswers": [
                "Stalin",
                "Joseph Stalin",
                "Iosif Stalin"
            ]
        },
        {
            "id": "hist_10412",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "In welk jaar viel de Berlijnse Muur?",
            "answer": "1989",
            "acceptedAnswers": [
                "Negenentiennegenentachtig",
                "9 november 1989"
            ]
        },
        {
            "id": "hist_10413",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welke Belgische koning deed in 1990 voor 36 uur afstand van de troon om de abortuswet niet te hoeven ondertekenen?",
            "answer": "Boudewijn",
            "acceptedAnswers": [
                "Koning Boudewijn",
                "Boudewijn I",
                "Baudouin"
            ]
        },
        {
            "id": "hist_10414",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welke Franse keizer werd definitief verslagen tijdens de Slag bij Waterloo?",
            "answer": "Napoleon Bonaparte",
            "acceptedAnswers": [
                "Napoleon",
                "Napoleon I"
            ]
        },
        {
            "id": "hist_10415",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Wie zette als eerste mens voet op de maan op 20 juli 1969?",
            "answer": "Neil Armstrong",
            "acceptedAnswers": [
                "Armstrong"
            ]
        },
        {
            "id": "ent_10416",
            "category": "Amusement",
            "difficulty": 6,
            "question": "Welke Vlaamse film van Erik Van Looy uit 2008 kreeg een Amerikaanse remake en gaat over vijf getrouwde mannen die stiekem een appartement delen?",
            "answer": "Loft",
            "acceptedAnswers": [
                "The Loft"
            ]
        },
        {
            "id": "ent_10417",
            "category": "Amusement",
            "difficulty": 6,
            "question": "Hoe heet de fictieve stad waar Batman de misdaad bestrijdt?",
            "answer": "Gotham City",
            "acceptedAnswers": [
                "Gotham"
            ]
        },
        {
            "id": "ent_10418",
            "category": "Amusement",
            "difficulty": 6,
            "question": "Welke iconische grungeband uit Seattle werd geleid door Kurt Cobain?",
            "answer": "Nirvana",
            "acceptedAnswers": []
        },
        {
            "id": "ent_10419",
            "category": "Amusement",
            "difficulty": 6,
            "question": "Wie speelt de rol van Captain Jack Sparrow in de 'Pirates of the Caribbean'-films?",
            "answer": "Johnny Depp",
            "acceptedAnswers": [
                "Depp",
                "John Christopher Depp II"
            ]
        },
        {
            "id": "ent_10420",
            "category": "Amusement",
            "difficulty": 6,
            "question": "In welke populaire HBO-serie strijden huizen als Stark, Lannister en Targaryen om de 'Iron Throne'?",
            "answer": "Game of Thrones",
            "acceptedAnswers": [
                "GoT",
                "A Song of Ice and Fire"
            ]
        },
        {
            "id": "ent_10421",
            "category": "Amusement",
            "difficulty": 6,
            "question": "Welke Vlaamse komiek en zanger is bekend van hits als 'Madammen met een bontjas' en 'Hittentit'?",
            "answer": "Urbanus",
            "acceptedAnswers": [
                "Urbain Servranckx"
            ]
        },
        {
            "id": "ent_10422",
            "category": "Amusement",
            "difficulty": 6,
            "question": "Welke Britse band bracht in de jaren '70 albums uit als 'A Night at the Opera' en 'News of the World'?",
            "answer": "Queen",
            "acceptedAnswers": []
        },
        {
            "id": "ent_10423",
            "category": "Amusement",
            "difficulty": 6,
            "question": "Wat is de voornaam van de beroemde broer van videogame-personage Mario?",
            "answer": "Luigi",
            "acceptedAnswers": []
        },
        {
            "id": "ent_10424",
            "category": "Amusement",
            "difficulty": 6,
            "question": "Welk Woestijnvis-programma draaide rond de fictieve redactie van een human interest programma, met o.a. Tom Van Dyck en Lucas Van den Eynde?",
            "answer": "In de Gloria",
            "acceptedAnswers": []
        },
        {
            "id": "sci_10425",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Welk chemisch element heeft het symbool 'Au'?",
            "answer": "Goud",
            "acceptedAnswers": [
                "Gold"
            ]
        },
        {
            "id": "sci_10426",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Hoe heet het proces waarbij planten zonlicht omzetten in energie en zuurstof?",
            "answer": "Fotosynthese",
            "acceptedAnswers": [
                "Photosynthesis"
            ]
        },
        {
            "id": "sci_10427",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Welke planeet staat bekend als de 'Rode Planeet'?",
            "answer": "Mars",
            "acceptedAnswers": []
        },
        {
            "id": "sci_10428",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Wie ontwikkelde de evolutietheorie en schreef 'On the Origin of Species'?",
            "answer": "Charles Darwin",
            "acceptedAnswers": [
                "Darwin"
            ]
        },
        {
            "id": "sci_10429",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Welk orgaan in het menselijk lichaam produceert insuline?",
            "answer": "Alvleesklier",
            "acceptedAnswers": [
                "Pancreas"
            ]
        },
        {
            "id": "sci_10430",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Welk bedrijf werd in 1976 opgericht door Steve Jobs, Steve Wozniak en Ronald Wayne?",
            "answer": "Apple",
            "acceptedAnswers": [
                "Apple Inc.",
                "Apple Computer"
            ]
        },
        {
            "id": "sci_10431",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Hoe heet de kracht die ervoor zorgt dat voorwerpen naar de aarde vallen?",
            "answer": "Zwaartekracht",
            "acceptedAnswers": [
                "Gravitatie",
                "Gravity"
            ]
        },
        {
            "id": "sci_10432",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Welk zwart-wit dier staat symbool voor het Wereld Natuur Fonds (WWF)?",
            "answer": "Reuzenpanda",
            "acceptedAnswers": [
                "Panda",
                "Panda beer"
            ]
        },
        {
            "id": "sport_10433",
            "category": "Sport & Spel",
            "difficulty": 6,
            "question": "Welke Belgische wielrenner wordt 'De Kannibaal' genoemd en won vijf keer de Tour de France?",
            "answer": "Eddy Merckx",
            "acceptedAnswers": [
                "Merckx",
                "Baron Eddy Merckx"
            ]
        },
        {
            "id": "sport_10434",
            "category": "Sport & Spel",
            "difficulty": 6,
            "question": "In welke sport werd Luca Brecel in 2023 de eerste wereldkampioen van het Europese vasteland?",
            "answer": "Snooker",
            "acceptedAnswers": []
        },
        {
            "id": "sport_10435",
            "category": "Sport & Spel",
            "difficulty": 6,
            "question": "Welk land won het WK Voetbal bij de mannen in 2022 in Qatar?",
            "answer": "Argentinië",
            "acceptedAnswers": [
                "Argentina"
            ]
        },
        {
            "id": "sport_10436",
            "category": "Sport & Spel",
            "difficulty": 6,
            "question": "Hoe heet de jaarlijkse finale van de American Football-competitie (NFL), die bekend staat om zijn spectaculaire 'Halftime Show'?",
            "answer": "Super Bowl",
            "acceptedAnswers": [
                "The Super Bowl"
            ]
        },
        {
            "id": "sport_10437",
            "category": "Sport & Spel",
            "difficulty": 6,
            "question": "Bij welke Belgische voetbalclub braken spelers als Vincent Kompany en Romelu Lukaku door?",
            "answer": "Anderlecht",
            "acceptedAnswers": [
                "RSCA",
                "RSC Anderlecht",
                "Paars-wit"
            ]
        },
        {
            "id": "sport_10438",
            "category": "Sport & Spel",
            "difficulty": 6,
            "question": "Welke Jamaicaanse sprinter heeft het wereldrecord op de 100 meter en 200 meter op zijn naam staan?",
            "answer": "Usain Bolt",
            "acceptedAnswers": [
                "Bolt"
            ]
        },
        {
            "id": "sport_10439",
            "category": "Sport & Spel",
            "difficulty": 6,
            "question": "Op welke ondergrond wordt het Grand Slam-toernooi van Roland Garros gespeeld?",
            "answer": "Gravel",
            "acceptedAnswers": [
                "Clay",
                "Rood zand"
            ]
        },
        {
            "id": "sport_10440",
            "category": "Sport & Spel",
            "difficulty": 6,
            "question": "Welke Braziliaanse F1-legende kwam in 1994 om het leven tijdens de GP van San Marino?",
            "answer": "Ayrton Senna",
            "acceptedAnswers": [
                "Senna"
            ]
        },
        {
            "id": "art_10441",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Wie schreef de wereldberoemde boekenreeks over tovenaarsleerling Harry Potter?",
            "answer": "J.K. Rowling",
            "acceptedAnswers": [
                "Rowling",
                "Joanne Rowling",
                "Robert Galbraith"
            ]
        },
        {
            "id": "art_10442",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Welke Noorse kunstenaar schilderde 'De Schreeuw'?",
            "answer": "Edvard Munch",
            "acceptedAnswers": [
                "Munch"
            ]
        },
        {
            "id": "art_10443",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Welke auteur schreef het in 1983 gepubliceerde meesterwerk 'Het verdriet van België'?",
            "answer": "Hugo Claus",
            "acceptedAnswers": [
                "Claus"
            ]
        },
        {
            "id": "art_10444",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "In welk museum in Parijs hangt de Mona Lisa?",
            "answer": "Louvre",
            "acceptedAnswers": [
                "Het Louvre",
                "Musée du Louvre"
            ]
        },
        {
            "id": "art_10445",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Wie is de geestelijke vader van de stripreeksen 'Kuifje' (Tintin)?",
            "answer": "Hergé",
            "acceptedAnswers": [
                "Georges Remi"
            ]
        },
        {
            "id": "art_10446",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Van welke Spaanse architect is de onvoltooide basiliek Sagrada Família in Barcelona het bekendste werk?",
            "answer": "Antoni Gaudí",
            "acceptedAnswers": [
                "Gaudi"
            ]
        },
        {
            "id": "art_10447",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Welke instrumentenbouwer uit Dinant vond in de 19e eeuw de saxofoon uit?",
            "answer": "Adolphe Sax",
            "acceptedAnswers": [
                "Sax",
                "Antoine-Joseph Sax"
            ]
        },
        {
            "id": "art_10448",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Wie schreef de tragedies 'Hamlet', 'Macbeth' en 'Romeo and Juliet'?",
            "answer": "William Shakespeare",
            "acceptedAnswers": [
                "Shakespeare"
            ]
        },
        {
            "id": "art_10449",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Welke Vlaamse barokschilder woonde in een stadspaleis in Antwerpen en is beroemd om zijn schilderijen van mollige vrouwen?",
            "answer": "Peter Paul Rubens",
            "acceptedAnswers": [
                "Rubens",
                "P.P. Rubens"
            ]
        },

        {
            "id": "geo_10150",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Wat is de hoofdstad van Vietnam?",
            "answer": "Hanoi",
            "acceptedAnswers": [
                "Hanoi",
                "Ha Noi"
            ]
        },
        {
            "id": "geo_10151",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Welke rivier stroomt door Boedapest, Wenen en Belgrado?",
            "answer": "Donau",
            "acceptedAnswers": [
                "De Donau",
                "Danube"
            ]
        },
        {
            "id": "geo_10152",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Wat is het grootste eiland ter wereld (dat geen continent is)?",
            "answer": "Groenland",
            "acceptedAnswers": [
                "Groenland"
            ]
        },
        {
            "id": "geo_10153",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "In welke Amerikaanse staat ligt Las Vegas?",
            "answer": "Nevada",
            "acceptedAnswers": [
                "Nevada"
            ]
        },
        {
            "id": "geo_10154",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Welk land wordt door de lokale bevolking 'Suomi' genoemd?",
            "answer": "Finland",
            "acceptedAnswers": [
                "Finland"
            ]
        },
        {
            "id": "geo_10155",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Welke berg is de hoogste van Afrika?",
            "answer": "Kilimanjaro",
            "acceptedAnswers": [
                "Kilimanjaro",
                "Mount Kilimanjaro"
            ]
        },
        {
            "id": "geo_10156",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Wat is het diepste meer ter wereld, gelegen in Siberië?",
            "answer": "Baikalmeer",
            "acceptedAnswers": [
                "Baikal",
                "Het Baikalmeer",
                "Bajkalmeer"
            ]
        },
        {
            "id": "geo_10157",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Hoe heet de zeestraat die Spanje van Marokko scheidt?",
            "answer": "Straat van Gibraltar",
            "acceptedAnswers": [
                "Gibraltar",
                "Straat van Gibraltar"
            ]
        },
        {
            "id": "hist_10158",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welke Oostenrijkse aartshertog werd in 1914 vermoord in Sarajevo?",
            "answer": "Frans Ferdinand",
            "acceptedAnswers": [
                "Franz Ferdinand",
                "Frans Ferdinand"
            ]
        },
        {
            "id": "hist_10159",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Wie was de Koning der Belgen tijdens de Eerste Wereldoorlog?",
            "answer": "Albert I",
            "acceptedAnswers": [
                "Koning Albert I",
                "Albert 1",
                "Koning Soldaat"
            ]
        },
        {
            "id": "hist_10160",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welke Amerikaanse president moest aftreden vanwege het Watergate-schandaal?",
            "answer": "Richard Nixon",
            "acceptedAnswers": [
                "Nixon",
                "Richard Nixon"
            ]
        },
        {
            "id": "hist_10161",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Hoe heetten de twee strijdende partijen in de Amerikaanse Burgeroorlog (Noord vs Zuid)?",
            "answer": "Unie en Confederatie",
            "acceptedAnswers": [
                "The Union & The Confederacy",
                "Unie en Confederatie",
                "Noordelijken en Zuidelijken"
            ]
        },
        {
            "id": "hist_10162",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "In welk jaar viel de Berlijnse Muur?",
            "answer": "1989",
            "acceptedAnswers": [
                "1989"
            ]
        },
        {
            "id": "hist_10163",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welke Mongoolse heerser stichtte in de 13e eeuw een enorm wereldrijk?",
            "answer": "Dzjengis Khan",
            "acceptedAnswers": [
                "Genghis Khan",
                "Dzjengis Khan",
                "Temüjin"
            ]
        },
        {
            "id": "hist_10164",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Hoe heette de geheime politie van Oost-Duitsland (DDR)?",
            "answer": "Stasi",
            "acceptedAnswers": [
                "Stasi",
                "Ministerium für Staatssicherheit"
            ]
        },
        {
            "id": "hist_10165",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welke oorlog werd beëindigd met het Verdrag van Versailles in 1919?",
            "answer": "Eerste Wereldoorlog",
            "acceptedAnswers": [
                "WO1",
                "WOI",
                "Eerste Wereldoorlog"
            ]
        },
        {
            "id": "ent_10166",
            "category": "Amusement",
            "difficulty": 6,
            "question": "Welke Britse komediegroep bestond uit o.a. John Cleese en Michael Palin?",
            "answer": "Monty Python",
            "acceptedAnswers": [
                "Monty Python"
            ]
        },
        {
            "id": "ent_10167",
            "category": "Amusement",
            "difficulty": 6,
            "question": "Wie presenteerde het eerste seizoen van 'De Mol' in Vlaanderen?",
            "answer": "Michiel Devlieger",
            "acceptedAnswers": [
                "Devlieger",
                "Michiel Devlieger"
            ]
        },
        {
            "id": "ent_10168",
            "category": "Amusement",
            "difficulty": 6,
            "question": "Welke band bracht het album 'The Dark Side of the Moon' uit?",
            "answer": "Pink Floyd",
            "acceptedAnswers": [
                "Pink Floyd"
            ]
        },
        {
            "id": "ent_10169",
            "category": "Amusement",
            "difficulty": 6,
            "question": "Welke acteur speelt de hoofdrol in de films 'Forrest Gump' en 'Cast Away'?",
            "answer": "Tom Hanks",
            "acceptedAnswers": [
                "Hanks",
                "Tom Hanks"
            ]
        },
        {
            "id": "ent_10170",
            "category": "Amusement",
            "difficulty": 6,
            "question": "Hoe heet de fictieve krant waar Peter Parker (Spider-Man) voor werkt?",
            "answer": "Daily Bugle",
            "acceptedAnswers": [
                "The Daily Bugle",
                "Daily Bugle"
            ]
        },
        {
            "id": "ent_10171",
            "category": "Amusement",
            "difficulty": 6,
            "question": "Welke zangeres overleed in 2011 en is bekend van hits als 'Back to Black'?",
            "answer": "Amy Winehouse",
            "acceptedAnswers": [
                "Winehouse",
                "Amy Winehouse"
            ]
        },
        {
            "id": "ent_10172",
            "category": "Amusement",
            "difficulty": 6,
            "question": "Wie regisseerde de filmklassiekers 'Alien', 'Blade Runner' en 'Gladiator'?",
            "answer": "Ridley Scott",
            "acceptedAnswers": [
                "Scott",
                "Ridley Scott"
            ]
        },
        {
            "id": "ent_10173",
            "category": "Amusement",
            "difficulty": 6,
            "question": "Hoe heet de bassist van The Beatles?",
            "answer": "Paul McCartney",
            "acceptedAnswers": [
                "McCartney",
                "Paul McCartney"
            ]
        },
        {
            "id": "sci_10174",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Wat is de scheikundige benaming voor keukenzout?",
            "answer": "Natriumchloride",
            "acceptedAnswers": [
                "Natriumchloride",
                "NaCl"
            ]
        },
        {
            "id": "sci_10175",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Welke Britse wetenschapper schreef 'A Brief History of Time'?",
            "answer": "Stephen Hawking",
            "acceptedAnswers": [
                "Hawking",
                "Stephen Hawking"
            ]
        },
        {
            "id": "sci_10176",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Hoe noemt men een driehoek waarvan alle zijden even lang zijn?",
            "answer": "Gelijkzijdige driehoek",
            "acceptedAnswers": [
                "Gelijkzijdige driehoek",
                "Gelijkzijdig"
            ]
        },
        {
            "id": "sci_10177",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Wie wordt beschouwd als de grondlegger van de evolutietheorie (Origin of Species)?",
            "answer": "Charles Darwin",
            "acceptedAnswers": [
                "Darwin",
                "Charles Darwin"
            ]
        },
        {
            "id": "sci_10178",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Wat is de eenheid van elektrische weerstand?",
            "answer": "Ohm",
            "acceptedAnswers": [
                "Ohm"
            ]
        },
        {
            "id": "sci_10179",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Welk edelgas wordt vaak gebruikt in verlichte reclameborden?",
            "answer": "Neon",
            "acceptedAnswers": [
                "Neon"
            ]
        },
        {
            "id": "sci_10180",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Hoeveel chromosomenparen heeft een gezond mens?",
            "answer": "23",
            "acceptedAnswers": [
                "23",
                "23 paren"
            ]
        },
        {
            "id": "sci_10181",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Wie wordt gezien als de uitvinder van het World Wide Web (www)?",
            "answer": "Tim Berners-Lee",
            "acceptedAnswers": [
                "Berners-Lee",
                "Tim Berners-Lee"
            ]
        },
        {
            "id": "sport_10182",
            "category": "Sport & Spel",
            "difficulty": 6,
            "question": "Wie is de topscorer aller tijden van het Belgische nationale elftal (Rode Duivels)?",
            "answer": "Romelu Lukaku",
            "acceptedAnswers": [
                "Lukaku",
                "Romelu Lukaku"
            ]
        },
        {
            "id": "sport_10183",
            "category": "Sport & Spel",
            "difficulty": 6,
            "question": "Welke Spaanse wielrenner won vijf keer op rij de Tour de France (1991-1995)?",
            "answer": "Miguel Indurain",
            "acceptedAnswers": [
                "Indurain",
                "Miguel Indurain"
            ]
        },
        {
            "id": "sport_10184",
            "category": "Sport & Spel",
            "difficulty": 6,
            "question": "Welke dartspeler heeft als bijnaam 'The Rocket'?",
            "answer": "Ronnie O'Sullivan",
            "acceptedAnswers": [
                "Ronnie O'Sullivan",
                "O'Sullivan"
            ]
        },
        {
            "id": "sport_10185",
            "category": "Sport & Spel",
            "difficulty": 6,
            "question": "Bij welk bordspel moet je gebieden veroveren met legers (Kamtsjatka, etc.)?",
            "answer": "Risk",
            "acceptedAnswers": [
                "Risk"
            ]
        },
        {
            "id": "sport_10186",
            "category": "Sport & Spel",
            "difficulty": 6,
            "question": "Hoeveel spelers staan er per team op het veld bij een hockeywedstrijd?",
            "answer": "11",
            "acceptedAnswers": [
                "11",
                "Elf"
            ]
        },
        {
            "id": "sport_10187",
            "category": "Sport & Spel",
            "difficulty": 6,
            "question": "Welke Jamaicaanse sprinter liep het wereldrecord op de 100 meter (9,58s)?",
            "answer": "Usain Bolt",
            "acceptedAnswers": [
                "Bolt",
                "Usain Bolt"
            ]
        },
        {
            "id": "sport_10188",
            "category": "Sport & Spel",
            "difficulty": 6,
            "question": "In welk land vinden de Olympische Winterspelen van 2026 plaats?",
            "answer": "Italië",
            "acceptedAnswers": [
                "Italie",
                "Italië"
            ]
        },
        {
            "id": "sport_10189",
            "category": "Sport & Spel",
            "difficulty": 6,
            "question": "Welke Formule 1-coureur won 7 wereldtitels, net als Lewis Hamilton?",
            "answer": "Michael Schumacher",
            "acceptedAnswers": [
                "Schumacher",
                "Michael Schumacher"
            ]
        },
        {
            "id": "art_10190",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Welke Amerikaanse schrijver schreef 'The Great Gatsby'?",
            "answer": "F. Scott Fitzgerald",
            "acceptedAnswers": [
                "Fitzgerald",
                "F. Scott Fitzgerald"
            ]
        },
        {
            "id": "art_10191",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Wie is de tekenaar en geestelijke vader van de stripreeks 'Nero'?",
            "answer": "Marc Sleen",
            "acceptedAnswers": [
                "Sleen",
                "Marc Sleen"
            ]
        },
        {
            "id": "art_10192",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Wie schilderde het beroemde schilderij 'Het Meisje met de Parel'?",
            "answer": "Johannes Vermeer",
            "acceptedAnswers": [
                "Vermeer",
                "Johannes Vermeer"
            ]
        },
        {
            "id": "art_10193",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Welke Spaanse architect ontwierp de Sagrada Familia in Barcelona?",
            "answer": "Antoni Gaudí",
            "acceptedAnswers": [
                "Gaudi",
                "Antoni Gaudí"
            ]
        },
        {
            "id": "art_10194",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Hoe heet de klokkenluider van de Notre-Dame in het boek van Victor Hugo?",
            "answer": "Quasimodo",
            "acceptedAnswers": [
                "Quasimodo"
            ]
        },
        {
            "id": "art_10195",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Welke mythologische figuur vloog te dicht bij de zon, waardoor zijn wassen vleugels smolten?",
            "answer": "Icarus",
            "acceptedAnswers": [
                "Icarus"
            ]
        },
        {
            "id": "art_10196",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Wie schreef de klassieker 'Moby Dick'?",
            "answer": "Herman Melville",
            "acceptedAnswers": [
                "Melville",
                "Herman Melville"
            ]
        },
        {
            "id": "art_10197",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Wat is de voornaam van de bekende detective Poirot?",
            "answer": "Hercule",
            "acceptedAnswers": [
                "Hercule"
            ]
        },
        {
            "id": "art_10198",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Welke kunststroming wordt geassocieerd met Salvador Dalí?",
            "answer": "Surrealisme",
            "acceptedAnswers": [
                "Surrealisme"
            ]
        },
        {
            "id": "art_10199",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Wie componeerde 'De Vier Jaargetijden'?",
            "answer": "Antonio Vivaldi",
            "acceptedAnswers": [
                "Vivaldi",
                "Antonio Vivaldi"
            ]
        },
        {
            "id": "hist_0011",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welke crisis in 1962 bracht de VS en de Sovjet-Unie op de rand van oorlog vanwege raketten op Cuba?",
            "answer": "Cubacrisis",
            "acceptedAnswers": [
                "Cuba-crisis",
                "Cuban Missile Crisis"
            ]
        },
        {
            "id": "hist_0013",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welke Meso-Amerikaanse beschaving bouwde de piramides van Chichén Itzá?",
            "answer": "Maya's",
            "acceptedAnswers": [
                "Maya",
                "Maya’s",
                "De Maya's"
            ]
        },
        {
            "id": "hist_0014",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welk rijk werd in de 16e eeuw geregeerd door sultan Suleiman de Prachtlievende?",
            "answer": "Ottomaanse Rijk",
            "acceptedAnswers": [
                "Ottomaans Rijk",
                "Ottoman Empire"
            ]
        },
        {
            "id": "hist_0016",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welke vrouwelijke farao uit de 15e eeuw v.Chr. is beroemd om haar tempel in Deir el-Bahri?",
            "answer": "Hatsjepsoet",
            "acceptedAnswers": [
                "Hatshepsut",
                "Hatsjepsoet"
            ]
        },
        {
            "id": "geo_0008",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Welke woestijn in het zuiden van Afrika staat bekend om haar rode duinen bij Sossusvlei?",
            "answer": "Namibwoestijn",
            "acceptedAnswers": [
                "Namib",
                "Namibwoestijn"
            ]
        },
        {
            "id": "geo_0012",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Welke Europese hoofdstad ligt het dichtst bij de poolcirkel?",
            "answer": "Reykjavik",
            "acceptedAnswers": [
                "Reykjavík",
                "Reykjavik"
            ]
        },
        {
            "id": "geo_0013",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Welke binnenzee verbindt via Bosporus en Dardanellen de Zwarte Zee met de Egeïsche Zee?",
            "answer": "Zee van Marmara",
            "acceptedAnswers": [
                "Marmarazee",
                "Sea of Marmara",
                "Zee van Marmara"
            ]
        },
        {
            "id": "geo_0015",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Hoe heet de eilandgroep ten noorden van Schotland met hoofdstad Lerwick?",
            "answer": "Shetlandeilanden",
            "acceptedAnswers": [
                "Shetland",
                "Shetland Islands",
                "Shetlandeilanden"
            ]
        },
        {
            "id": "sci_0004",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Welke bloedgroep wordt ‘universele donor’ genoemd?",
            "answer": "O-negatief",
            "acceptedAnswers": [
                "O-",
                "O negatief",
                "O-negatief"
            ]
        },
        {
            "id": "sci_0009",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Wat is de lichtsnelheid in vacuüm, afgerond in km/s?",
            "answer": "299.792 km/s",
            "acceptedAnswers": [
                "300.000 km/s",
                "3,00×10^5 km/s",
                "299792 km/s",
                "299.792 km/s"
            ]
        },
        {
            "id": "sci_0014",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Hoe heet het getij waarbij zon en maan op één lijn staan en het verschil tussen eb en vloed het grootst is?",
            "answer": "Springtij",
            "acceptedAnswers": [
                "Springtij",
                "Spring tide"
            ]
        },
        {
            "id": "art_0009",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Hoe heet het Italiaanse epos van Dante dat begint met ‘Nel mezzo del cammin di nostra vita’?",
            "answer": "De Goddelijke Komedie",
            "acceptedAnswers": [
                "Divina Commedia",
                "De Goddelijke Komedie"
            ]
        },
        {
            "id": "art_0011",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Hoe heet de romansaga waarvan ‘A Game of Thrones’ het eerste deel is?",
            "answer": "A Song of Ice and Fire",
            "acceptedAnswers": [
                "ASOIAF",
                "A Song of Ice & Fire",
                "A Song of Ice and Fire"
            ]
        },
        {
            "id": "art_0013",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Wie ontwierp het Rietveld Schröderhuis in Utrecht?",
            "answer": "Gerrit Rietveld",
            "acceptedAnswers": [
                "Rietveld",
                "G. Rietveld",
                "Gerrit Rietveld"
            ]
        },
        {
            "id": "art_0016",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Hoe heet de Japanse houtsnedekunst waarin ‘De Grote Golf van Kanagawa’ werd gemaakt?",
            "answer": "Ukiyo-e",
            "acceptedAnswers": [
                "Ukiyoe",
                "Ukiyo-e"
            ]
        },
        {
            "id": "ent_0007",
            "category": "Entertainment",
            "difficulty": 6,
            "question": "Welke spelconsole bracht Sony voor het eerst uit in de jaren 90?",
            "answer": "PlayStation",
            "acceptedAnswers": [
                "PS1",
                "Sony PlayStation",
                "PlayStation"
            ]
        },
        {
            "id": "ent_0017",
            "category": "Entertainment",
            "difficulty": 6,
            "question": "Hoe heet het Franse elektronische duo achter de hit ‘One More Time’?",
            "answer": "Daft Punk",
            "acceptedAnswers": [
                "Daft Punk"
            ]
        },
        {
            "id": "spo_0006",
            "category": "Sport & Vrije Tijd",
            "difficulty": 6,
            "question": "Welke kasseienklassieker eindigt traditioneel in de velodroom van Roubaix?",
            "answer": "Parijs-Roubaix",
            "acceptedAnswers": [
                "Paris-Roubaix",
                "Parijs–Roubaix",
                "Parijs-Roubaix"
            ]
        },
        {
            "id": "spo_0015",
            "category": "Sport & Vrije Tijd",
            "difficulty": 6,
            "question": "Wat is de maximale break in snooker bij een standaardframe zonder vrije bal?",
            "answer": "147",
            "acceptedAnswers": [
                "honderdzevenenveertig",
                "147 punten",
                "147"
            ]
        },
        {
            "id": "hist_0021",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welke Chinese muur is gebouwd om nomadische invallen te stoppen en is meer dan 20.000 km lang?",
            "answer": "Chinese Muur",
            "acceptedAnswers": [
                "Grote Muur",
                "Chinese muur",
                "Great Wall of China"
            ]
        },
        {
            "id": "hist_0023",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welk rijk bouwde Machu Picchu in de Andes?",
            "answer": "Incarijk",
            "acceptedAnswers": [
                "Inca",
                "Inca-rijk",
                "Incarijk"
            ]
        },
        {
            "id": "hist_0027",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welke Carthaagse veldheer stak met olifanten de Alpen over om Rome te bedreigen?",
            "answer": "Hannibal",
            "acceptedAnswers": [
                "Hannibal Barca",
                "Hannibal"
            ]
        },
        {
            "id": "hist_0030",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welke Griekse stadstaat stond bekend om zijn militaire opvoeding en strakke discipline?",
            "answer": "Sparta",
            "acceptedAnswers": [
                "Lacedaemon",
                "Sparta"
            ]
        },
        {
            "id": "hist_0033",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welke vredesorganisatie werd in 1945 opgericht om internationale samenwerking te bevorderen?",
            "answer": "Verenigde Naties",
            "acceptedAnswers": [
                "VN",
                "United Nations",
                "Verenigde Naties"
            ]
        },
        {
            "id": "geo_0019",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Welke rivier vormt een groot deel van de grens tussen Slowakije en Hongarije?",
            "answer": "Donau",
            "acceptedAnswers": [
                "De Donau",
                "Danube",
                "Donau"
            ]
        },
        {
            "id": "geo_0022",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Welke archipel in de Stille Oceaan staat bekend om unieke soorten als de blauwevoetgent?",
            "answer": "Galapagoseilanden",
            "acceptedAnswers": [
                "Galápagos",
                "Galapagos",
                "Galapagoseilanden"
            ]
        },
        {
            "id": "geo_0025",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Welke Afrikaanse meer is de bronregio van de Nijl en ligt tussen Oeganda, Kenia en Tanzania?",
            "answer": "Victoriameer",
            "acceptedAnswers": [
                "Lake Victoria",
                "Victoria Nyanza",
                "Victoriameer"
            ]
        },
        {
            "id": "geo_0029",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Welke Europese rivier mondt uit in de Zwarte Zee bij de Donaudelta?",
            "answer": "Donau",
            "acceptedAnswers": [
                "Danube",
                "De Donau",
                "Donau"
            ]
        },
        {
            "id": "geo_0032",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Welke smalle landstrook verbindt Noord- en Zuid-Amerika?",
            "answer": "Landengte van Panama",
            "acceptedAnswers": [
                "Panama-landengte",
                "Isthmus van Panama",
                "Landengte van Panama"
            ]
        },
        {
            "id": "sci_0019",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Welke deeltjes in de atoomkern hebben geen elektrische lading?",
            "answer": "Neutronen",
            "acceptedAnswers": [
                "Neutron",
                "Neutronen"
            ]
        },
        {
            "id": "sci_0024",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Welke organische moleculen vormen de bouwstenen van eiwitten?",
            "answer": "Aminozuren",
            "acceptedAnswers": [
                "Aminozuur",
                "Amino acids",
                "Aminozuren"
            ]
        },
        {
            "id": "sci_0028",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Hoe heet het verschijnsel waarbij licht van richting verandert bij overgang tussen media?",
            "answer": "Breking",
            "acceptedAnswers": [
                "Refractie",
                "Lichtbreking",
                "Breking"
            ]
        },
        {
            "id": "sci_0032",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Welke wet beschrijft de relatie tussen spanning, stroom en weerstand in een elektrisch circuit?",
            "answer": "Wet van Ohm",
            "acceptedAnswers": [
                "Ohm",
                "U=IR",
                "Wet van Ohm"
            ]
        },
        {
            "id": "art_0019",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Wie schilderde het zelfportret met afgesneden oor na een ruzie in Arles?",
            "answer": "Vincent van Gogh",
            "acceptedAnswers": [
                "Van Gogh",
                "V. van Gogh",
                "Vincent van Gogh"
            ]
        },
        {
            "id": "art_0022",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Welke Russische componist schreef het ballet ‘De Notenkraker’?",
            "answer": "Pjotr Iljitsj Tsjaikovski",
            "acceptedAnswers": [
                "Tsjaikovski",
                "Tchaikovsky",
                "Pjotr Tsjaikovski",
                "P.I. Tsjaikovski"
            ]
        },
        {
            "id": "art_0025",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Welke dichter schreef ‘De Aarde en haar Volken’ en de bundel ‘Bezette Stad’?",
            "answer": "Paul van Ostaijen",
            "acceptedAnswers": [
                "Van Ostaijen",
                "Paul van Ostaijen"
            ]
        },
        {
            "id": "art_0029",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Welke Spaanse schilderschool uit de 17e eeuw omvat Velázquez en Zurbarán?",
            "answer": "Barok",
            "acceptedAnswers": [
                "Spaanse barok",
                "Baroque",
                "Barok"
            ]
        },
        {
            "id": "ent_0023",
            "category": "Entertainment",
            "difficulty": 6,
            "question": "Welke anime-regisseur maakte ‘Spirited Away’ en ‘Princess Mononoke’?",
            "answer": "Hayao Miyazaki",
            "acceptedAnswers": [
                "Miyazaki",
                "H. Miyazaki",
                "Hayao Miyazaki"
            ]
        },
        {
            "id": "ent_0028",
            "category": "Entertainment",
            "difficulty": 6,
            "question": "Welke regisseur staat bekend om ‘Inception’ en ‘The Dark Knight’?",
            "answer": "Christopher Nolan",
            "acceptedAnswers": [
                "Nolan",
                "C. Nolan",
                "Christopher Nolan"
            ]
        },
        {
            "id": "ent_0032",
            "category": "Entertainment",
            "difficulty": 6,
            "question": "Welke Japanse spelreeks draait om vechters met hadouken en shoryuken?",
            "answer": "Street Fighter",
            "acceptedAnswers": [
                "Streetfighter",
                "Street Fighter"
            ]
        },
        {
            "id": "ent_0036",
            "category": "Entertainment",
            "difficulty": 6,
            "question": "Welke Britse serie van David Attenborough toont natuur in hoge definitie?",
            "answer": "Planet Earth",
            "acceptedAnswers": [
                "BBC Planet Earth",
                "Planet Earth"
            ]
        },
        {
            "id": "ent_0040",
            "category": "Entertainment",
            "difficulty": 6,
            "question": "Welke regisseur maakte ‘Blade Runner 2049’ en ‘Arrival’?",
            "answer": "Denis Villeneuve",
            "acceptedAnswers": [
                "Villeneuve",
                "D. Villeneuve",
                "Denis Villeneuve"
            ]
        },
        {
            "id": "spo_0018",
            "category": "Sport & Vrije Tijd",
            "difficulty": 6,
            "question": "Welke Zwitser won een recordaantal Grand Slams op gras in Wimbledon?",
            "answer": "Roger Federer",
            "acceptedAnswers": [
                "Federer",
                "R. Federer",
                "Roger Federer"
            ]
        },
        {
            "id": "spo_0021",
            "category": "Sport & Vrije Tijd",
            "difficulty": 6,
            "question": "Welke Belg staat bekend als ‘De Kannibaal’ in het wielrennen?",
            "answer": "Eddy Merckx",
            "acceptedAnswers": [
                "Merckx",
                "Eddy Merckx"
            ]
        },
        {
            "id": "spo_0026",
            "category": "Sport & Vrije Tijd",
            "difficulty": 6,
            "question": "Welke 100 meter-sprinter draagt de bijnaam ‘Lightning’?",
            "answer": "Usain Bolt",
            "acceptedAnswers": [
                "Bolt",
                "U. Bolt",
                "Usain Bolt"
            ]
        },
        {
            "id": "spo_0030",
            "category": "Sport & Vrije Tijd",
            "difficulty": 6,
            "question": "Welke wielerwedstrijd heet ‘La Doyenne’ en wordt in Wallonië gereden?",
            "answer": "Luik-Bastenaken-Luik",
            "acceptedAnswers": [
                "Liège-Bastogne-Liège",
                "LBL",
                "Luik–Bastenaken–Luik",
                "Luik-Bastenaken-Luik"
            ]
        },
        {
            "id": "hist_0039",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Wat was de codenaam van de geallieerde landing in Normandië in 1944?",
            "answer": "Operatie Overlord",
            "acceptedAnswers": [
                "Operation Overlord",
                "Operatie Overlord"
            ]
        },
        {
            "id": "hist_0045",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Hoe heet de hervormingsperiode in Tsjecho-Slowakije in 1968 die werd neergeslagen?",
            "answer": "Praagse Lente",
            "acceptedAnswers": [
                "Prague Spring",
                "Praagse Lente"
            ]
        },
        {
            "id": "hist_0047",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welke Viking wordt vaak genoemd als de ontdekker van Vinland rond het jaar 1000?",
            "answer": "Leif Erikson",
            "acceptedAnswers": [
                "Leif Eriksson",
                "Leif Ericson",
                "Leif Erikson"
            ]
        },
        {
            "id": "hist_0051",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welke bijnaam kreeg de vreedzame machtswissel in Engeland in 1688?",
            "answer": "Glorious Revolution",
            "acceptedAnswers": [
                "Glorieuze Revolutie",
                "Glorious Revolution"
            ]
        },
        {
            "id": "geo_0036",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Hoe heet het grootste meer van Europa?",
            "answer": "Ladogameer",
            "acceptedAnswers": [
                "Ladoga",
                "Ladogameer",
                "Lake Ladoga"
            ]
        },
        {
            "id": "geo_0040",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Hoe heet de hoogste onafgebroken waterval ter wereld in Venezuela?",
            "answer": "Engelwaterval",
            "acceptedAnswers": [
                "Angel Falls",
                "Salto Ángel",
                "Engelwaterval"
            ]
        },
        {
            "id": "geo_0043",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Welk Caribisch eiland is verdeeld tussen Frankrijk en het Koninkrijk der Nederlanden?",
            "answer": "Sint-Maarten/Saint-Martin",
            "acceptedAnswers": [
                "Sint-Maarten",
                "Saint-Martin",
                "St. Martin",
                "St. Maarten",
                "Sint-Maarten/Saint-Martin"
            ]
        },
        {
            "id": "geo_0044",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Hoe heet het grootste afgesloten binnenwater ter wereld dat vaak een zee wordt genoemd?",
            "answer": "Kaspische Zee",
            "acceptedAnswers": [
                "Caspische Zee",
                "Caspian Sea",
                "Kaspische Zee"
            ]
        },
        {
            "id": "geo_0047",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Welke hoofdstad ligt het dichtst bij de evenaar?",
            "answer": "Quito",
            "acceptedAnswers": [
                "San Francisco de Quito",
                "Quito"
            ]
        },
        {
            "id": "sci_0039",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Welke gistsoort wordt vaak gebruikt bij het brouwen van bier?",
            "answer": "Saccharomyces cerevisiae",
            "acceptedAnswers": [
                "Bakkersgist",
                "S. cerevisiae",
                "Saccharomyces cerevisiae"
            ]
        },
        {
            "id": "sci_0043",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Welke ster staat het dichtst bij de aarde na de zon?",
            "answer": "Proxima Centauri",
            "acceptedAnswers": [
                "Proxima",
                "Proxima Centauri"
            ]
        },
        {
            "id": "sci_0047",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Hoe heten de basisregels van overerving ontdekt met erwtenplanten?",
            "answer": "Mendels wetten",
            "acceptedAnswers": [
                "Mendeliaanse erfelijkheid",
                "Wetten van Mendel",
                "Mendels wetten"
            ]
        },
        {
            "id": "art_0039",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Hoe heet de tragedie van Sophocles over de man die onbewust zijn vader doodt?",
            "answer": "Oedipus Rex",
            "acceptedAnswers": [
                "Koning Oedipus",
                "Oedipus Tyrannos",
                "Oedipus Rex"
            ]
        },
        {
            "id": "art_0042",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Welke Noorse toneelschrijver schreef ‘Een poppenhuis’?",
            "answer": "Henrik Ibsen",
            "acceptedAnswers": [
                "Ibsen",
                "Henrik Ibsen"
            ]
        },
        {
            "id": "art_0045",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Welke architect ontwierp het huis ‘Fallingwater’ in Pennsylvania?",
            "answer": "Frank Lloyd Wright",
            "acceptedAnswers": [
                "F. L. Wright",
                "Frank L. Wright",
                "Frank Lloyd Wright"
            ]
        },
        {
            "id": "ent_0045",
            "category": "Entertainment",
            "difficulty": 6,
            "question": "Welke band bracht in 1997 het album ‘OK Computer’ uit?",
            "answer": "Radiohead",
            "acceptedAnswers": [
                "Radiohead"
            ]
        },
        {
            "id": "ent_0047",
            "category": "Entertainment",
            "difficulty": 6,
            "question": "Welke HBO-reeks volgt maffiabaas Tony in New Jersey?",
            "answer": "The Sopranos",
            "acceptedAnswers": [
                "Sopranos",
                "The Sopranos"
            ]
        },
        {
            "id": "ent_0055",
            "category": "Entertainment",
            "difficulty": 6,
            "question": "Hoe heet de spin-off van ‘Breaking Bad’ rond advocaat Jimmy McGill?",
            "answer": "Better Call Saul",
            "acceptedAnswers": [
                "Better call Saul",
                "Better Call Saul"
            ]
        },
        {
            "id": "ent_0058",
            "category": "Entertainment",
            "difficulty": 6,
            "question": "Welke HBO-serie draait rond de familie Roy en mediagigant Waystar?",
            "answer": "Succession",
            "acceptedAnswers": [
                "Succession"
            ]
        },
        {
            "id": "spo_0034",
            "category": "Sport & Vrije Tijd",
            "difficulty": 6,
            "question": "Voor welk team reed Lance Armstrong tijdens zijn Tourzeges?",
            "answer": "U.S. Postal Service",
            "acceptedAnswers": [
                "US Postal",
                "U.S. Postal",
                "U.S. Postal Service"
            ]
        },
        {
            "id": "spo_0044",
            "category": "Sport & Vrije Tijd",
            "difficulty": 6,
            "question": "Welke wintersport combineert langlaufen met schieten?",
            "answer": "Biatlon",
            "acceptedAnswers": [
                "Biathlon",
                "Biatlon"
            ]
        },
        {
            "id": "hist_0053",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Hoe heet het charter uit 1215 dat de macht van de Engelse koning beperkte?",
            "answer": "Magna Carta",
            "acceptedAnswers": [
                "Magna Carta",
                "Grote Oorkonde"
            ]
        },
        {
            "id": "hist_0055",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Hoe heet de prehistorische periode waarin landbouw en dorpen opkwamen?",
            "answer": "Neolithicum",
            "acceptedAnswers": [
                "Nieuwe Steentijd",
                "Neolithische periode",
                "Neolithicum"
            ]
        },
        {
            "id": "hist_0062",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welke langdurige oorlog (1337–1453) werd uitgevochten tussen Engeland en Frankrijk?",
            "answer": "Honderdjarige Oorlog",
            "acceptedAnswers": [
                "De Honderdjarige Oorlog",
                "Hundred Years' War",
                "Honderdjarige Oorlog"
            ]
        },
        {
            "id": "hist_0063",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welke Zuid-Amerikaanse vrijheidsstrijder bevrijdde o.a. Venezuela, Colombia en Bolivia?",
            "answer": "Simón Bolívar",
            "acceptedAnswers": [
                "Simon Bolivar",
                "Simón Bolívar"
            ]
        },
        {
            "id": "hist_0065",
            "category": "Geschiedenis",
            "difficulty": 6,
            "question": "Welke militaire alliantie werd in 1955 opgericht als tegenhanger van de NAVO?",
            "answer": "Warschaupact",
            "acceptedAnswers": [
                "Warszawapact",
                "Warsaw Pact",
                "Warschaupact"
            ]
        },
        {
            "id": "geo_0064",
            "category": "Aardrijkskunde",
            "difficulty": 6,
            "question": "Welke nationale hoofdstad ligt het meest zuidelijk ter wereld?",
            "answer": "Wellington",
            "acceptedAnswers": [
                "Te Whanganui-a-Tara (Wellington)",
                "Wellington"
            ]
        },
        {
            "id": "sci_0055",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Welke kracht is nodig om een voorwerp in een cirkelbaan te houden en is naar het middelpunt gericht?",
            "answer": "Centripetale kracht",
            "acceptedAnswers": [
                "Centripetale kracht",
                "Centripetaalkracht"
            ]
        },
        {
            "id": "sci_0059",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Welke wolkensoort associeer je met onweersbuien en torenhoge stapelwolken?",
            "answer": "Cumulonimbus",
            "acceptedAnswers": [
                "Cb",
                "Cumulonimbus"
            ]
        },
        {
            "id": "sci_0060",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Welke planeet heeft de langste rotatieduur (de ‘dag’) in ons zonnestelsel?",
            "answer": "Venus",
            "acceptedAnswers": [
                "Venus"
            ]
        },
        {
            "id": "sci_0063",
            "category": "Wetenschap & Natuur",
            "difficulty": 6,
            "question": "Hoe heet het proces waarbij DNA wordt overgeschreven naar RNA?",
            "answer": "Transcriptie",
            "acceptedAnswers": [
                "Transcriptie",
                "Transcription"
            ]
        },
        {
            "id": "art_0051",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Welke Nederlandse auteur schreef ‘De donkere kamer van Damokles’?",
            "answer": "Willem Frederik Hermans",
            "acceptedAnswers": [
                "W.F. Hermans",
                "Willem F. Hermans",
                "Willem Frederik Hermans"
            ]
        },
        {
            "id": "art_0054",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Welke Ierse toneelschrijver schreef ‘Waiting for Godot’?",
            "answer": "Samuel Beckett",
            "acceptedAnswers": [
                "Beckett",
                "Samuel Beckett"
            ]
        },
        {
            "id": "art_0058",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Wie wordt meestal genoemd als hoofdauteur van ‘Het Lam Gods’ (Gentse altaarstuk)?",
            "answer": "Jan van Eyck",
            "acceptedAnswers": [
                "J. van Eyck",
                "Jan van Eyck"
            ]
        },
        {
            "id": "art_0059",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Welke Russische auteur schreef ‘De Meester en Margarita’?",
            "answer": "Michail Boelgakov",
            "acceptedAnswers": [
                "Mikhail Bulgakov",
                "Boelgakov",
                "Michail Boelgakov"
            ]
        },
        {
            "id": "art_0062",
            "category": "Kunst & Literatuur",
            "difficulty": 6,
            "question": "Welke Ierse dichter en Nobelprijswinnaar schreef ‘The Lake Isle of Innisfree’?",
            "answer": "W.B. Yeats",
            "acceptedAnswers": [
                "William Butler Yeats",
                "W. B. Yeats",
                "W.B. Yeats"
            ]
        },
        {
            "id": "ent_0066",
            "category": "Entertainment",
            "difficulty": 6,
            "question": "Welke regisseur staat bekend om symmetrische kaders in ‘The Grand Budapest Hotel’?",
            "answer": "Wes Anderson",
            "acceptedAnswers": [
                "Anderson",
                "Wes Anderson"
            ]
        },
        {
            "id": "spo_0050",
            "category": "Sport & Vrije Tijd",
            "difficulty": 6,
            "question": "Welke wielerklassieker eindigt traditiegetrouw op de Via Roma in Italië?",
            "answer": "Milaan-San Remo",
            "acceptedAnswers": [
                "Milano–Sanremo",
                "Milaan–San Remo",
                "Milaan-San Remo"
            ]
        },
        {
            "id": "spo_0054",
            "category": "Sport & Vrije Tijd",
            "difficulty": 6,
            "question": "Welke Waalse klassieker eindigt op de steile Muur van Hoei?",
            "answer": "Waalse Pijl",
            "acceptedAnswers": [
                "La Flèche Wallonne",
                "Fleche Wallonne",
                "Waalse Pijl"
            ]
        },

        {
            "id": "geo_10200",
            "category": "Aardrijkskunde",
            "difficulty": 7,
            "question": "Wat is de hoofdstad van IJsland?",
            "answer": "Reykjavik",
            "acceptedAnswers": [
                "Reykjavik"
            ]
        },
        {
            "id": "geo_10201",
            "category": "Aardrijkskunde",
            "difficulty": 7,
            "question": "Welke rivier vormt voor een groot deel de grens tussen de Verenigde Staten en Mexico?",
            "answer": "Rio Grande",
            "acceptedAnswers": [
                "Rio Grande"
            ]
        },
        {
            "id": "geo_10202",
            "category": "Aardrijkskunde",
            "difficulty": 7,
            "question": "In welk Zuid-Amerikaans land vind je de Atacama-woestijn?",
            "answer": "Chili",
            "acceptedAnswers": [
                "Chili"
            ]
        },
        {
            "id": "geo_10203",
            "category": "Aardrijkskunde",
            "difficulty": 7,
            "question": "Hoe heette de Democratische Republiek Congo tussen 1971 en 1997?",
            "answer": "Zaïre",
            "acceptedAnswers": [
                "Zaire",
                "Zaïre"
            ]
        },
        // --- MOEILIJKHEIDSGRAAD 7 ---
        {
            "id": "geo_10204",
            "category": "Aardrijkskunde",
            "difficulty": 7,
            "question": "Welke stad ligt aan de monding van de rivier de Nijl?",
            "answer": "Alexandrië",
            "acceptedAnswers": [
                "Alexandrie",
                "Alexandrië"
            ]
        },
        {
            "id": "geo_10205",
            "category": "Aardrijkskunde",
            "difficulty": 7,
            "question": "Van welk land is 'Addis Abeba' de hoofdstad?",
            "answer": "Ethiopië",
            "acceptedAnswers": [
                "Ethiopie",
                "Ethiopië"
            ]
        },
        {
            "id": "geo_10206",
            "category": "Aardrijkskunde",
            "difficulty": 7,
            "question": "In welke Italiaanse regio ligt de stad Florence (Firenze)?",
            "answer": "Toscane",
            "acceptedAnswers": [
                "Toscane"
            ]
        },
        {
            "id": "geo_10207",
            "category": "Aardrijkskunde",
            "difficulty": 7,
            "question": "Welk Aziatisch land wordt ook wel 'Het Land van de Glimlach' genoemd?",
            "answer": "Thailand",
            "acceptedAnswers": [
                "Thailand"
            ]
        },
        {
            "id": "hist_10208",
            "category": "Geschiedenis",
            "difficulty": 7,
            "question": "Welke Britse monarch zat 70 jaar op de troon (1952-2022)?",
            "answer": "Elizabeth II",
            "acceptedAnswers": [
                "Elizabeth II",
                "Elisabeth 2"
            ]
        },
        {
            "id": "hist_10209",
            "category": "Geschiedenis",
            "difficulty": 7,
            "question": "Welk verdrag legde in 1992 de basis voor de Europese Unie en de euro?",
            "answer": "Verdrag van Maastricht",
            "acceptedAnswers": [
                "Verdrag van Maastricht",
                "Maastricht"
            ]
        },
        {
            "id": "hist_10210",
            "category": "Geschiedenis",
            "difficulty": 7,
            "question": "Wie was de leider van de Rode Khmers in Cambodja?",
            "answer": "Pol Pot",
            "acceptedAnswers": [
                "Pol Pot"
            ]
        },
        {
            "id": "hist_10211",
            "category": "Geschiedenis",
            "difficulty": 7,
            "question": "Welke Amerikaanse president kondigde de 'New Deal' aan om de economische depressie te bestrijden?",
            "answer": "Franklin D. Roosevelt",
            "acceptedAnswers": [
                "FDR",
                "Roosevelt",
                "Franklin D. Roosevelt"
            ]
        },
        {
            "id": "hist_10212",
            "category": "Geschiedenis",
            "difficulty": 7,
            "question": "Hoe heetten de Franse protestanten die in de 16e en 17e eeuw vervolgd werden?",
            "answer": "Hugenoten",
            "acceptedAnswers": [
                "Hugenoten"
            ]
        },
        {
            "id": "hist_10213",
            "category": "Geschiedenis",
            "difficulty": 7,
            "question": "Welke slag in 1066 markeerde het begin van de Normandische verovering van Engeland?",
            "answer": "Slag bij Hastings",
            "acceptedAnswers": [
                "Slag bij Hastings",
                "Hastings"
            ]
        },
        {
            "id": "hist_10214",
            "category": "Geschiedenis",
            "difficulty": 7,
            "question": "Wie was de laatste tsaar van Rusland?",
            "answer": "Nicolaas II",
            "acceptedAnswers": [
                "Nicolaas II",
                "Tsaar Nicolaas II"
            ]
        },
        {
            "id": "hist_10215",
            "category": "Geschiedenis",
            "difficulty": 7,
            "question": "Welk schip werd in 1915 getorpedeerd door een Duitse onderzeeër, wat bijdroeg aan de deelname van de VS aan WOI?",
            "answer": "Lusitania",
            "acceptedAnswers": [
                "RMS Lusitania",
                "Lusitania"
            ]
        },
        {
            "id": "ent_10216",
            "category": "Amusement",
            "difficulty": 7,
            "question": "Welke Vlaamse regisseur maakte de film 'Rundskop'?",
            "answer": "Michaël R. Roskam",
            "acceptedAnswers": [
                "Roskam",
                "Michaël R. Roskam",
                "Michael Roskam"
            ]
        },
        {
            "id": "ent_10217",
            "category": "Amusement",
            "difficulty": 7,
            "question": "Hoe heet de fictieve drug kingpin die centraal staat in de serie 'The Wire' (seizoen 1-3)?",
            "answer": "Avon Barksdale",
            "acceptedAnswers": [
                "Avon Barksdale",
                "Barksdale"
            ]
        },
        {
            "id": "ent_10218",
            "category": "Amusement",
            "difficulty": 7,
            "question": "Welke Amerikaanse band had een hit met 'Losing My Religion'?",
            "answer": "R.E.M.",
            "acceptedAnswers": [
                "REM",
                "R.E.M."
            ]
        },
        {
            "id": "ent_10219",
            "category": "Amusement",
            "difficulty": 7,
            "question": "Wie speelde de hoofdrol van Neo in 'The Matrix'?",
            "answer": "Keanu Reeves",
            "acceptedAnswers": [
                "Reeves",
                "Keanu Reeves"
            ]
        },
        {
            "id": "ent_10220",
            "category": "Amusement",
            "difficulty": 7,
            "question": "Welke Vlaamse stand-upcomedian maakte de zaalshows 'Mensen Zeggen Dingen' en 'Positief'? ",
            "answer": "Wouter Deprez",
            "acceptedAnswers": [
                "Wouter Deprez",
                "Deprez"
            ]
        },
        {
            "id": "ent_10221",
            "category": "Amusement",
            "difficulty": 7,
            "question": "Wat is de echte naam van de zanger Sting?",
            "answer": "Gordon Sumner",
            "acceptedAnswers": [
                "Gordon Sumner",
                "Gordon Matthew Thomas Sumner"
            ]
        },
        {
            "id": "ent_10222",
            "category": "Amusement",
            "difficulty": 7,
            "question": "Wie regisseerde de film 'The Godfather'?",
            "answer": "Francis Ford Coppola",
            "acceptedAnswers": [
                "Coppola",
                "Francis Ford Coppola"
            ]
        },
        {
            "id": "ent_10223",
            "category": "Amusement",
            "difficulty": 7,
            "question": "Welk personage speelt Bryan Cranston in de komische serie 'Malcolm in the Middle'?",
            "answer": "Hal",
            "acceptedAnswers": [
                "Hal"
            ]
        },
        {
            "id": "sci_10224",
            "category": "Wetenschap & Natuur",
            "difficulty": 7,
            "question": "Wat is de medische term voor een hoge bloeddruk?",
            "answer": "Hypertensie",
            "acceptedAnswers": [
                "Hypertensie"
            ]
        },
        {
            "id": "sci_10225",
            "category": "Wetenschap & Natuur",
            "difficulty": 7,
            "question": "Welke Poolse wetenschapster ontving twee Nobelprijzen (Natuurkunde en Scheikunde)?",
            "answer": "Marie Curie",
            "acceptedAnswers": [
                "Curie",
                "Marie Curie",
                "Marie Sklodowska-Curie"
            ]
        },
        {
            "id": "sci_10226",
            "category": "Wetenschap & Natuur",
            "difficulty": 7,
            "question": "Wat is de naam van de grootste maan van de planeet Saturnus?",
            "answer": "Titan",
            "acceptedAnswers": [
                "Titan"
            ]
        },
        {
            "id": "sci_10227",
            "category": "Wetenschap & Natuur",
            "difficulty": 7,
            "question": "Welk element heeft atoomnummer 1?",
            "answer": "Waterstof",
            "acceptedAnswers": [
                "Waterstof",
                "H"
            ]
        },
        {
            "id": "sci_10228",
            "category": "Wetenschap & Natuur",
            "difficulty": 7,
            "question": "Hoe heet het proces waarbij een rups in een vlinder verandert?",
            "answer": "Metamorfose",
            "acceptedAnswers": [
                "Metamorfose",
                "Gedaanteverwisseling"
            ]
        },
        {
            "id": "sci_10229",
            "category": "Wetenschap & Natuur",
            "difficulty": 7,
            "question": "Welk vitamine wordt voornamelijk aangemaakt door blootstelling aan zonlicht?",
            "answer": "Vitamine D",
            "acceptedAnswers": [
                "Vitamine D"
            ]
        },
        {
            "id": "sci_10230",
            "category": "Wetenschap & Natuur",
            "difficulty": 7,
            "question": "Wie ontwikkelde de vaccinatie tegen hondsdolheid?",
            "answer": "Louis Pasteur",
            "acceptedAnswers": [
                "Pasteur",
                "Louis Pasteur"
            ]
        },
        {
            "id": "sci_10231",
            "category": "Wetenschap & Natuur",
            "difficulty": 7,
            "question": "Wat meet je met een barometer?",
            "answer": "Luchtdruk",
            "acceptedAnswers": [
                "Luchtdruk"
            ]
        },
        {
            "id": "sport_10232",
            "category": "Sport & Spel",
            "difficulty": 7,
            "question": "Welke Belgische tennisser won samen met Xavier Malisse de titel in het dubbelspel op Roland Garros (2004)?",
            "answer": "Olivier Rochus",
            "acceptedAnswers": [
                "Rochus",
                "Olivier Rochus"
            ]
        },
        {
            "id": "sport_10233",
            "category": "Sport & Spel",
            "difficulty": 7,
            "question": "Welke Amerikaanse zwemmer won in totaal 28 Olympische medailles?",
            "answer": "Michael Phelps",
            "acceptedAnswers": [
                "Phelps",
                "Michael Phelps"
            ]
        },
        {
            "id": "sport_10234",
            "category": "Sport & Spel",
            "difficulty": 7,
            "question": "In welke stad vonden de Olympische Spelen van 1992 plaats?",
            "answer": "Barcelona",
            "acceptedAnswers": [
                "Barcelona"
            ]
        },
        {
            "id": "sport_10235",
            "category": "Sport & Spel",
            "difficulty": 7,
            "question": "Welke term gebruikt men in golf als men één slag onder par speelt?",
            "answer": "Birdie",
            "acceptedAnswers": [
                "Birdie"
            ]
        },
        {
            "id": "sport_10236",
            "category": "Sport & Spel",
            "difficulty": 7,
            "question": "Welke Belgische veldrijder werd 'De Leeuw van Vlaanderen' genoemd (en was jarenlang bondscoach)?",
            "answer": "Rudy De Bie",
            "acceptedAnswers": [
                "Rudy De Bie"
            ]
        },
        {
            "id": "sport_10237",
            "category": "Sport & Spel",
            "difficulty": 7,
            "question": "Welk team won de allereerste Super Bowl in 1967?",
            "answer": "Green Bay Packers",
            "acceptedAnswers": [
                "Green Bay Packers",
                "Packers"
            ]
        },
        {
            "id": "sport_10238",
            "category": "Sport & Spel",
            "difficulty": 7,
            "question": "Hoe heet het circuit waar de Grote Prijs Formule 1 van België wordt gereden?",
            "answer": "Spa-Francorchamps",
            "acceptedAnswers": [
                "Spa-Francorchamps",
                "Francorchamps"
            ]
        },
        {
            "id": "sport_10239",
            "category": "Sport & Spel",
            "difficulty": 7,
            "question": "Wie versloeg Rafael Nadal voor het eerst op Roland Garros (in 2009)?",
            "answer": "Robin Söderling",
            "acceptedAnswers": [
                "Söderling",
                "Robin Söderling"
            ]
        },
        {
            "id": "art_10240",
            "category": "Kunst & Literatuur",
            "difficulty": 7,
            "question": "Welke Franse schrijver schreef 'De Pest' (La Peste)?",
            "answer": "Albert Camus",
            "acceptedAnswers": [
                "Camus",
                "Albert Camus"
            ]
        },
        {
            "id": "art_10241",
            "category": "Kunst & Literatuur",
            "difficulty": 7,
            "question": "Welke Vlaamse schilder wordt beschouwd als de grondlegger van de barokke schilderkunst in de Nederlanden?",
            "answer": "Peter Paul Rubens",
            "acceptedAnswers": [
                "Rubens",
                "Peter Paul Rubens",
                "P.P. Rubens"
            ]
        },
        {
            "id": "art_10242",
            "category": "Kunst & Literatuur",
            "difficulty": 7,
            "question": "Wie componeerde de beroemde 'Boléro'?",
            "answer": "Maurice Ravel",
            "acceptedAnswers": [
                "Ravel",
                "Maurice Ravel"
            ]
        },
        {
            "id": "art_10243",
            "category": "Kunst & Literatuur",
            "difficulty": 7,
            "question": "Welke Amerikaanse auteur schreef 'The Catcher in the Rye'?",
            "answer": "J.D. Salinger",
            "acceptedAnswers": [
                "Salinger",
                "J.D. Salinger"
            ]
        },
        {
            "id": "art_10244",
            "category": "Kunst & Literatuur",
            "difficulty": 7,
            "question": "In welke Italiaanse stad kan je het 'Laatste Avondmaal' van Da Vinci bewonderen?",
            "answer": "Milaan",
            "acceptedAnswers": [
                "Milaan",
                "Milano"
            ]
        },
        {
            "id": "art_10245",
            "category": "Kunst & Literatuur",
            "difficulty": 7,
            "question": "Welk literair personage reist de wereld rond in 80 dagen?",
            "answer": "Phileas Fogg",
            "acceptedAnswers": [
                "Phileas Fogg",
                "Fogg"
            ]
        },
        {
            "id": "art_10246",
            "category": "Kunst & Literatuur",
            "difficulty": 7,
            "question": "Wie is de auteur van de thriller 'De naam van de roos'?",
            "answer": "Umberto Eco",
            "acceptedAnswers": [
                "Eco",
                "Umberto Eco"
            ]
        },
        {
            "id": "art_10247",
            "category": "Kunst & Literatuur",
            "difficulty": 7,
            "question": "Welk pseudoniem gebruikte de schrijver Eduard Douwes Dekker?",
            "answer": "Multatuli",
            "acceptedAnswers": [
                "Multatuli"
            ]
        },
        {
            "id": "art_10248",
            "category": "Kunst & Literatuur",
            "difficulty": 7,
            "question": "Hoe heet de godin van de liefde in de Romeinse mythologie?",
            "answer": "Venus",
            "acceptedAnswers": [
                "Venus"
            ]
        },
        {
            "id": "art_10249",
            "category": "Kunst & Literatuur",
            "difficulty": 7,
            "question": "Welke kunststroming wordt geassocieerd met Claude Monet?",
            "answer": "Impressionisme",
            "acceptedAnswers": [
                "Impressionisme"
            ]
        },
        {
            "id": "geo_10450",
            "category": "Aardrijkskunde",
            "difficulty": 7,
            "question": "Welke Canadese stad is de hoofdstad van het land, hoewel Toronto en Montreal veel groter zijn?",
            "answer": "Ottawa",
            "acceptedAnswers": []
        },
        {
            "id": "geo_10451",
            "category": "Aardrijkskunde",
            "difficulty": 7,
            "question": "Bij welke Italiaanse stad ligt de actieve vulkaan Vesuvius?",
            "answer": "Napels",
            "acceptedAnswers": [
                "Napoli",
                "Naples"
            ]
        },
        {
            "id": "geo_10452",
            "category": "Aardrijkskunde",
            "difficulty": 7,
            "question": "Welke rivier vormt in de provincie Limburg de natuurlijke grens tussen België en Nederland?",
            "answer": "De Maas",
            "acceptedAnswers": [
                "Maas"
            ]
        },
        {
            "id": "geo_10453",
            "category": "Aardrijkskunde",
            "difficulty": 7,
            "question": "Tot welk land behoort het eiland Madeira, de geboorteplaats van Cristiano Ronaldo?",
            "answer": "Portugal",
            "acceptedAnswers": []
        },
        {
            "id": "geo_10454",
            "category": "Aardrijkskunde",
            "difficulty": 7,
            "question": "In welke Amerikaanse staat vind je de Grand Canyon?",
            "answer": "Arizona",
            "acceptedAnswers": []
        },
        {
            "id": "geo_10455",
            "category": "Aardrijkskunde",
            "difficulty": 7,
            "question": "Welk Afrikaans land was vroeger een Belgische kolonie en heette destijds Congo-Vrijstaat en later Belgisch-Congo?",
            "answer": "Congo",
            "acceptedAnswers": [
                "Democratische Republiek Congo",
                "DR Congo",
                "Zaïre"
            ]
        },
        {
            "id": "geo_10456",
            "category": "Aardrijkskunde",
            "difficulty": 7,
            "question": "Hoe heet de zeestraat die Spanje scheidt van Marokko (en dus Europa van Afrika)?",
            "answer": "Straat van Gibraltar",
            "acceptedAnswers": [
                "Gibraltar"
            ]
        },
        {
            "id": "geo_10457",
            "category": "Aardrijkskunde",
            "difficulty": 7,
            "question": "Welk Aziatisch land heette tot 1989 Birma?",
            "answer": "Myanmar",
            "acceptedAnswers": [
                "Republiek van de Unie Myanmar"
            ]
        },
        {
            "id": "hist_10458",
            "category": "Geschiedenis",
            "difficulty": 7,
            "question": "In welk jaar werd de onafhankelijkheid van België uitgeroepen?",
            "answer": "1830",
            "acceptedAnswers": [
                "Achttienhonderddertig"
            ]
        },
        {
            "id": "hist_10459",
            "category": "Geschiedenis",
            "difficulty": 7,
            "question": "Welke Amerikaanse president werd in 1963 vermoord in Dallas?",
            "answer": "John F. Kennedy",
            "acceptedAnswers": [
                "JFK",
                "Kennedy",
                "John Fitzgerald Kennedy"
            ]
        },
        {
            "id": "hist_10460",
            "category": "Geschiedenis",
            "difficulty": 7,
            "question": "Hoe heette de bommenwerper die op 6 augustus 1945 de eerste atoombom op Hiroshima wierp?",
            "answer": "Enola Gay",
            "acceptedAnswers": []
        },
        {
            "id": "hist_10461",
            "category": "Geschiedenis",
            "difficulty": 7,
            "question": "Welke Romeinse keizer zou volgens de overlevering viool hebben gespeeld terwijl Rome brandde?",
            "answer": "Nero",
            "acceptedAnswers": []
        },
        {
            "id": "hist_10462",
            "category": "Geschiedenis",
            "difficulty": 7,
            "question": "Hoe heette het militaire bondgenootschap van communistische landen dat tijdens de Koude Oorlog de tegenhanger was van de NAVO?",
            "answer": "Warschaupact",
            "acceptedAnswers": [
                "Warsaw Pact"
            ]
        },
        {
            "id": "hist_10463",
            "category": "Geschiedenis",
            "difficulty": 7,
            "question": "Welke ziekte, overgebracht door vlooien op ratten, roeide in de 14e eeuw ongeveer een derde van de Europese bevolking uit?",
            "answer": "De Pest",
            "acceptedAnswers": [
                "De Zwarte Dood",
                "Builenpest"
            ]
        },
        {
            "id": "hist_10464",
            "category": "Geschiedenis",
            "difficulty": 7,
            "question": "Wie volgde in 1865 Leopold I op als Koning der Belgen?",
            "answer": "Leopold II",
            "acceptedAnswers": []
        },
        {
            "id": "hist_10465",
            "category": "Geschiedenis",
            "difficulty": 7,
            "question": "In welke stad vonden de processen plaats tegen de nazi-oorlogsmisdadigers na de Tweede Wereldoorlog?",
            "answer": "Neurenberg",
            "acceptedAnswers": [
                "Nuremberg",
                "Processen van Neurenberg"
            ]
        },
        {
            "id": "hist_10466",
            "category": "Geschiedenis",
            "difficulty": 7,
            "question": "Welke Egyptische koningin had relaties met zowel Julius Caesar als Marcus Antonius?",
            "answer": "Cleopatra",
            "acceptedAnswers": [
                "Cleopatra VII"
            ]
        },
        {
            "id": "ent_10467",
            "category": "Amusement",
            "difficulty": 7,
            "question": "Wie regisseerde cultfilms als 'Pulp Fiction', 'Reservoir Dogs' en 'Inglourious Basterds'?",
            "answer": "Quentin Tarantino",
            "acceptedAnswers": [
                "Tarantino"
            ]
        },
        {
            "id": "ent_10468",
            "category": "Amusement",
            "difficulty": 7,
            "question": "Welke acteur speelde de hoofdrol van Walter White in de hitserie 'Breaking Bad'?",
            "answer": "Bryan Cranston",
            "acceptedAnswers": [
                "Cranston"
            ]
        },
        {
            "id": "ent_10469",
            "category": "Amusement",
            "difficulty": 7,
            "question": "Welke Ierse rockband bestaat uit Bono, The Edge, Adam Clayton en Larry Mullen Jr.?",
            "answer": "U2",
            "acceptedAnswers": []
        },
        {
            "id": "ent_10470",
            "category": "Amusement",
            "difficulty": 7,
            "question": "Wat is de echte naam van de superheld Iron Man?",
            "answer": "Tony Stark",
            "acceptedAnswers": [
                "Anthony Stark"
            ]
        },
        {
            "id": "ent_10471",
            "category": "Amusement",
            "difficulty": 7,
            "question": "Welke Gentse zanger en schrijver, bekend van de band Gorki, overleed onverwacht in 2014?",
            "answer": "Luc De Vos",
            "acceptedAnswers": [
                "Vos",
                "De Vos"
            ]
        },
        {
            "id": "ent_10472",
            "category": "Amusement",
            "difficulty": 7,
            "question": "Welke presentator is al jaren het gezicht van het programma 'De Mol' op Play4?",
            "answer": "Gilles De Coster",
            "acceptedAnswers": [
                "Gilles De Coster"
            ]
        },
        {
            "id": "ent_10473",
            "category": "Amusement",
            "difficulty": 7,
            "question": "Welke film won in 2020 als eerste niet-Engelstalige film ooit de Oscar voor Beste Film?",
            "answer": "Parasite",
            "acceptedAnswers": [
                "Gisaengchung"
            ]
        },
        {
            "id": "ent_10474",
            "category": "Amusement",
            "difficulty": 7,
            "question": "Wie speelde de hoofdrol van Maximus Decimus Meridius in de film 'Gladiator'?",
            "answer": "Russell Crowe",
            "acceptedAnswers": [
                "Crowe"
            ]
        },
        {
            "id": "sci_10475",
            "category": "Wetenschap & Natuur",
            "difficulty": 7,
            "question": "Wat is het grootste zoogdier ter wereld?",
            "answer": "Blauwe vinvis",
            "acceptedAnswers": [
                "Blauwe walvis",
                "Blue whale"
            ]
        },
        {
            "id": "sci_10476",
            "category": "Wetenschap & Natuur",
            "difficulty": 7,
            "question": "Welk gas is het meest aanwezig in de lucht die wij inademen (ongeveer 78%)?",
            "answer": "Stikstof",
            "acceptedAnswers": [
                "Nitrogen",
                "N2"
            ]
        },
        {
            "id": "sci_10477",
            "category": "Wetenschap & Natuur",
            "difficulty": 7,
            "question": "Wie ontdekte in 1928 bij toeval de penicilline, het eerste antibioticum?",
            "answer": "Alexander Fleming",
            "acceptedAnswers": [
                "Fleming"
            ]
        },
        {
            "id": "sci_10478",
            "category": "Wetenschap & Natuur",
            "difficulty": 7,
            "question": "Welke natuurkundige formuleert E=mc²?",
            "answer": "Albert Einstein",
            "acceptedAnswers": [
                "Einstein"
            ]
        },
        {
            "id": "sci_10479",
            "category": "Wetenschap & Natuur",
            "difficulty": 7,
            "question": "Welke planeet staat het dichtst bij de zon?",
            "answer": "Mercurius",
            "acceptedAnswers": [
                "Mercury"
            ]
        },
        {
            "id": "sci_10480",
            "category": "Wetenschap & Natuur",
            "difficulty": 7,
            "question": "Hoeveel chromosomenparen heeft een gezond menselijk lichaam doorgaans?",
            "answer": "23",
            "acceptedAnswers": [
                "23 paren",
                "Drieëntwintig"
            ]
        },
        {
            "id": "sci_10481",
            "category": "Wetenschap & Natuur",
            "difficulty": 7,
            "question": "Welke eenheid wordt gebruikt om de frequentie van geluid of trillingen aan te duiden?",
            "answer": "Hertz",
            "acceptedAnswers": [
                "Hz"
            ]
        },
        {
            "id": "sci_10482",
            "category": "Wetenschap & Natuur",
            "difficulty": 7,
            "question": "Van welk softwarebedrijf is Bill Gates de medeoprichter?",
            "answer": "Microsoft",
            "acceptedAnswers": []
        },
        {
            "id": "sport_10483",
            "category": "Sport & Spel",
            "difficulty": 7,
            "question": "Welke Vlaamse wielerklassieker staat bekend als 'Vlaanderens Mooiste'?",
            "answer": "Ronde van Vlaanderen",
            "acceptedAnswers": [
                "De Ronde"
            ]
        },
        {
            "id": "sport_10484",
            "category": "Sport & Spel",
            "difficulty": 7,
            "question": "In welk stadion speelt de Engelse voetbalclub Manchester United zijn thuiswedstrijden?",
            "answer": "Old Trafford",
            "acceptedAnswers": [
                "Theatre of Dreams"
            ]
        },
        {
            "id": "sport_10485",
            "category": "Sport & Spel",
            "difficulty": 7,
            "question": "Welke Zwitserse tennisser won in zijn carrière 20 Grand Slam-titels en staat bekend om zijn elegantie?",
            "answer": "Roger Federer",
            "acceptedAnswers": [
                "Federer"
            ]
        },
        {
            "id": "sport_10486",
            "category": "Sport & Spel",
            "difficulty": 7,
            "question": "Welke Belgische voetbalclub heeft stamnummer 1 en de bijnaam 'The Great Old'?",
            "answer": "Antwerp",
            "acceptedAnswers": [
                "Royal Antwerp FC",
                "RAFC"
            ]
        },
        {
            "id": "sport_10487",
            "category": "Sport & Spel",
            "difficulty": 7,
            "question": "Voor welk Formule 1-team rijdt Max Verstappen?",
            "answer": "Red Bull",
            "acceptedAnswers": [
                "Red Bull Racing"
            ]
        },
        {
            "id": "sport_10488",
            "category": "Sport & Spel",
            "difficulty": 7,
            "question": "Welke darter domineerde de sport decennialang en heeft de bijnaam 'The Power'?",
            "answer": "Phil Taylor",
            "acceptedAnswers": [
                "Taylor"
            ]
        },
        {
            "id": "sport_10489",
            "category": "Sport & Spel",
            "difficulty": 7,
            "question": "Met welk NBA-team vierde Michael Jordan zijn grootste successen in de jaren '90?",
            "answer": "Chicago Bulls",
            "acceptedAnswers": [
                "The Bulls"
            ]
        },
        {
            "id": "sport_10490",
            "category": "Sport & Spel",
            "difficulty": 7,
            "question": "Wat is de duurste straat in de originele Belgische versie van Monopoly?",
            "answer": "Nieuwstraat",
            "acceptedAnswers": [
                "Nieuwstraat Brussel"
            ]
        },
        {
            "id": "art_10491",
            "category": "Kunst & Literatuur",
            "difficulty": 7,
            "question": "Welke Nederlandse meester schilderde in 1642 'De Nachtwacht'?",
            "answer": "Rembrandt",
            "acceptedAnswers": [
                "Rembrandt van Rijn"
            ]
        },
        {
            "id": "art_10492",
            "category": "Kunst & Literatuur",
            "difficulty": 7,
            "question": "Welke Britse schrijver beschreef een dystopische toekomst in zijn boek '1984'?",
            "answer": "George Orwell",
            "acceptedAnswers": [
                "Orwell",
                "Eric Arthur Blair"
            ]
        },
        {
            "id": "art_10493",
            "category": "Kunst & Literatuur",
            "difficulty": 7,
            "question": "Welke Aalsterse schrijver is de auteur van 'De Kapellekensbaan' en 'Pieter Daens'?",
            "answer": "Louis Paul Boon",
            "acceptedAnswers": [
                "Boon"
            ]
        },
        {
            "id": "art_10494",
            "category": "Kunst & Literatuur",
            "difficulty": 7,
            "question": "Welke Vlaamse striptekenaar is de geestelijke vader van de familie Kiekeboe?",
            "answer": "Merho",
            "acceptedAnswers": [
                "Robert Merhottein"
            ]
        },
        {
            "id": "art_10495",
            "category": "Kunst & Literatuur",
            "difficulty": 7,
            "question": "Welke Spaanse surrealistische schilder is beroemd om zijn schilderijen met smeltende uurwerken?",
            "answer": "Salvador Dalí",
            "acceptedAnswers": [
                "Dali"
            ]
        },
        {
            "id": "art_10496",
            "category": "Kunst & Literatuur",
            "difficulty": 7,
            "question": "Welke Italiaanse renaissancekunstenaar maakte het beroemde beeld van David en schilderde het plafond van de Sixtijnse Kapel?",
            "answer": "Michelangelo",
            "acceptedAnswers": [
                "Michelangelo Buonarroti"
            ]
        },
        {
            "id": "art_10497",
            "category": "Kunst & Literatuur",
            "difficulty": 7,
            "question": "Aan welke Griekse dichter worden de epische verhalen de Ilias en de Odyssee toegeschreven?",
            "answer": "Homerus",
            "acceptedAnswers": [
                "Homer"
            ]
        },
        {
            "id": "art_10498",
            "category": "Kunst & Literatuur",
            "difficulty": 7,
            "question": "Tot welke bouwstijl rekenen we kathedralen met spitsbogen, luchtbogen en grote glas-in-loodramen, zoals de Notre-Dame in Parijs?",
            "answer": "Gotiek",
            "acceptedAnswers": [
                "Gothic",
                "Gotisch"
            ]
        },
        {
            "id": "art_10499",
            "category": "Kunst & Literatuur",
            "difficulty": 7,
            "question": "Welk beroemd dagboek van een Joods meisje in Amsterdam werd na de Tweede Wereldoorlog wereldwijd gepubliceerd?",
            "answer": "Het Achterhuis",
            "acceptedAnswers": [
                "Dagboek van Anne Frank"
            ]
        },
        // --- MOEILIJKHEIDSGRAAD 8 ---
        {
            "id": "geo_10250",
            "category": "Aardrijkskunde",
            "difficulty": 8,
            "question": "Wat is de hoofdstad van Nieuw-Zeeland?",
            "answer": "Wellington",
            "acceptedAnswers": [
                "Wellington"
            ]
        },
        {
            "id": "geo_10251",
            "category": "Aardrijkskunde",
            "difficulty": 8,
            "question": "Welke rivier stroomt door de Venezolaanse savanne en mondt uit in de Atlantische Oceaan?",
            "answer": "Orinoco",
            "acceptedAnswers": [
                "Orinoco"
            ]
        },
        {
            "id": "geo_10252",
            "category": "Aardrijkskunde",
            "difficulty": 8,
            "question": "In welk land ligt de regio Transsylvanië?",
            "answer": "Roemenië",
            "acceptedAnswers": [
                "Roemenie",
                "Roemenië"
            ]
        },
        {
            "id": "geo_10253",
            "category": "Aardrijkskunde",
            "difficulty": 8,
            "question": "Wat is de op één na grootste stad van Portugal?",
            "answer": "Porto",
            "acceptedAnswers": [
                "Porto",
                "Oporto"
            ]
        },
        {
            "id": "geo_10254",
            "category": "Aardrijkskunde",
            "difficulty": 8,
            "question": "Welke straat verbindt de Perzische Golf met de Golf van Oman (strategisch belangrijk voor olie)?",
            "answer": "Straat van Hormuz",
            "acceptedAnswers": [
                "Hormuz",
                "Straat van Hormuz"
            ]
        },
        {
            "id": "geo_10255",
            "category": "Aardrijkskunde",
            "difficulty": 8,
            "question": "Wat is de hoofdstad van Pakistan?",
            "answer": "Islamabad",
            "acceptedAnswers": [
                "Islamabad"
            ]
        },
        {
            "id": "geo_10256",
            "category": "Aardrijkskunde",
            "difficulty": 8,
            "question": "Welk Afrikaans land was vroeger een kolonie van Duitsland en heette 'Duits-Zuidwest-Afrika'?",
            "answer": "Namibië",
            "acceptedAnswers": [
                "Namibië",
                "Namibie"
            ]
        },
        {
            "id": "geo_10257",
            "category": "Aardrijkskunde",
            "difficulty": 8,
            "question": "In welke Amerikaanse staat ligt Mount Rushmore?",
            "answer": "South Dakota",
            "acceptedAnswers": [
                "South Dakota",
                "Zuid-Dakota"
            ]
        },
        {
            "id": "hist_10258",
            "category": "Geschiedenis",
            "difficulty": 8,
            "question": "Welke Carthaagse generaal trok met olifanten over de Alpen?",
            "answer": "Hannibal",
            "acceptedAnswers": [
                "Hannibal",
                "Hannibal Barkas"
            ]
        },
        {
            "id": "hist_10259",
            "category": "Geschiedenis",
            "difficulty": 8,
            "question": "Welk verdrag maakte in 1918 een einde aan de oorlog tussen Rusland en Duitsland?",
            "answer": "Vrede van Brest-Litovsk",
            "acceptedAnswers": [
                "Brest-Litovsk",
                "Verdrag van Brest-Litovsk"
            ]
        },
        {
            "id": "hist_10260",
            "category": "Geschiedenis",
            "difficulty": 8,
            "question": "Wie was de eerste vrouwelijke premier van Israël?",
            "answer": "Golda Meïr",
            "acceptedAnswers": [
                "Golda Meir",
                "Meir",
                "Golda Meïr"
            ]
        },
        {
            "id": "hist_10261",
            "category": "Geschiedenis",
            "difficulty": 8,
            "question": "Welke familie regeerde over Florence tijdens de Renaissance?",
            "answer": "De Medici",
            "acceptedAnswers": [
                "Medici",
                "De Medici"
            ]
        },
        {
            "id": "hist_10262",
            "category": "Geschiedenis",
            "difficulty": 8,
            "question": "Welke Britse admiraal sneuvelde tijdens de Slag bij Trafalgar?",
            "answer": "Horatio Nelson",
            "acceptedAnswers": [
                "Nelson",
                "Lord Nelson"
            ]
        },
        {
            "id": "hist_10263",
            "category": "Geschiedenis",
            "difficulty": 8,
            "question": "In welk jaar werd de Belgische grondwet officieel aangenomen?",
            "answer": "1831",
            "acceptedAnswers": [
                "1831"
            ]
        },
        {
            "id": "hist_10264",
            "category": "Geschiedenis",
            "difficulty": 8,
            "question": "Wie was de leider van de Sovjet-Unie tijdens de Cubacrisis?",
            "answer": "Nikita Chroesjtsjov",
            "acceptedAnswers": [
                "Chroesjtsjov",
                "Khrushchev"
            ]
        },
        {
            "id": "hist_10265",
            "category": "Geschiedenis",
            "difficulty": 8,
            "question": "Welke Franse ingenieur ontwierp het Vrijheidsbeeld?",
            "answer": "Gustave Eiffel",
            "acceptedAnswers": [
                "Eiffel",
                "Gustave Eiffel",
                "Bartholdi"
            ]
        },
        {
            "id": "ent_10266",
            "category": "Amusement",
            "difficulty": 8,
            "question": "Welke film won de Oscar voor Beste Film in 2000 (met Kevin Spacey)?",
            "answer": "American Beauty",
            "acceptedAnswers": [
                "American Beauty"
            ]
        },
        {
            "id": "ent_10267",
            "category": "Amusement",
            "difficulty": 8,
            "question": "Hoe heet de gitarist van de band AC/DC die bekend stond om zijn schooluniform?",
            "answer": "Angus Young",
            "acceptedAnswers": [
                "Angus Young",
                "Young"
            ]
        },
        {
            "id": "ent_10268",
            "category": "Amusement",
            "difficulty": 8,
            "question": "Welke acteur speelt de rol van Walter Sobchak in 'The Big Lebowski'?",
            "answer": "John Goodman",
            "acceptedAnswers": [
                "Goodman",
                "John Goodman"
            ]
        },
        {
            "id": "ent_10269",
            "category": "Amusement",
            "difficulty": 8,
            "question": "Wie regisseerde de oorlogsfilm 'Full Metal Jacket'?",
            "answer": "Stanley Kubrick",
            "acceptedAnswers": [
                "Kubrick",
                "Stanley Kubrick"
            ]
        },
        {
            "id": "ent_10270",
            "category": "Amusement",
            "difficulty": 8,
            "question": "Welke Belgische band scoorde een wereldhit met 'The Way to Your Heart'?",
            "answer": "Soulsister",
            "acceptedAnswers": [
                "Soulsister"
            ]
        },
        {
            "id": "ent_10271",
            "category": "Amusement",
            "difficulty": 8,
            "question": "Hoe heet de fictieve stad waar Batman de misdaad bestrijdt?",
            "answer": "Gotham City",
            "acceptedAnswers": [
                "Gotham",
                "Gotham City"
            ]
        },
        {
            "id": "ent_10272",
            "category": "Amusement",
            "difficulty": 8,
            "question": "Welke Amerikaanse zangeres bracht het album 'Tapestry' uit in 1971?",
            "answer": "Carole King",
            "acceptedAnswers": [
                "Carole King",
                "King"
            ]
        },
        {
            "id": "ent_10273",
            "category": "Amusement",
            "difficulty": 8,
            "question": "Wie presenteerde in Vlaanderen jarenlang 'Blokken' voordat Ben Crabbé dit deed?",
            "answer": "Niemand",
            "acceptedAnswers": [
                "Niemand",
                "Ben Crabbé was de eerste"
            ]
        },
        {
            "id": "sci_10274",
            "category": "Wetenschap & Natuur",
            "difficulty": 8,
            "question": "Hoe noemt men een dierenarts die gespecialiseerd is in reptielen en amfibieën?",
            "answer": "Herpetoloog",
            "acceptedAnswers": [
                "Herpetoloog"
            ]
        },
        {
            "id": "sci_10275",
            "category": "Wetenschap & Natuur",
            "difficulty": 8,
            "question": "Wat is het hardste natuurlijke mineraal op de schaal van Mohs?",
            "answer": "Diamant",
            "acceptedAnswers": [
                "Diamant"
            ]
        },
        {
            "id": "sci_10276",
            "category": "Wetenschap & Natuur",
            "difficulty": 8,
            "question": "Welk hormoon reguleert het slaap-waakritme?",
            "answer": "Melatonine",
            "acceptedAnswers": [
                "Melatonine"
            ]
        },
        {
            "id": "sci_10277",
            "category": "Wetenschap & Natuur",
            "difficulty": 8,
            "question": "Wie formuleerde de onzekerheidsrelatie in de kwantummechanica?",
            "answer": "Werner Heisenberg",
            "acceptedAnswers": [
                "Heisenberg",
                "Werner Heisenberg"
            ]
        },
        {
            "id": "sci_10278",
            "category": "Wetenschap & Natuur",
            "difficulty": 8,
            "question": "Wat is de Latijnse naam voor de Grote Beer (sterrenbeeld)?",
            "answer": "Ursa Major",
            "acceptedAnswers": [
                "Ursa Major"
            ]
        },
        {
            "id": "sci_10279",
            "category": "Wetenschap & Natuur",
            "difficulty": 8,
            "question": "Welke ziekte wordt veroorzaakt door een tekort aan vitamine C?",
            "answer": "Scheurbuik",
            "acceptedAnswers": [
                "Scheurbuik",
                "Scorbut"
            ]
        },
        {
            "id": "sci_10280",
            "category": "Wetenschap & Natuur",
            "difficulty": 8,
            "question": "Hoe heet de wetenschap die zich bezighoudt met de studie van mieren?",
            "answer": "Myrmecologie",
            "acceptedAnswers": [
                "Myrmecologie"
            ]
        },
        {
            "id": "sci_10281",
            "category": "Wetenschap & Natuur",
            "difficulty": 8,
            "question": "Wat is het chemische symbool voor Lood?",
            "answer": "Pb",
            "acceptedAnswers": [
                "Pb"
            ]
        },
        {
            "id": "sport_10282",
            "category": "Sport & Spel",
            "difficulty": 8,
            "question": "Welke Belgische doelman won de Yashin Trophy voor beste doelman ter wereld in 2022?",
            "answer": "Thibaut Courtois",
            "acceptedAnswers": [
                "Courtois",
                "Thibaut Courtois"
            ]
        },
        {
            "id": "sport_10283",
            "category": "Sport & Spel",
            "difficulty": 8,
            "question": "Welk land won het allereerste WK Voetbal in 1930?",
            "answer": "Uruguay",
            "acceptedAnswers": [
                "Uruguay"
            ]
        },
        {
            "id": "sport_10284",
            "category": "Sport & Spel",
            "difficulty": 8,
            "question": "Hoeveel keer won Roger Federer Wimbledon?",
            "answer": "8",
            "acceptedAnswers": [
                "8",
                "Acht"
            ]
        },
        {
            "id": "sport_10285",
            "category": "Sport & Spel",
            "difficulty": 8,
            "question": "Welke stad organiseerde de Olympische Spelen van 1972 (bekend om de gijzeling)?",
            "answer": "München",
            "acceptedAnswers": [
                "Munchen",
                "München"
            ]
        },
        {
            "id": "sport_10286",
            "category": "Sport & Spel",
            "difficulty": 8,
            "question": "Wie werd in 2012 de eerste Britse winnaar van de Tour de France?",
            "answer": "Bradley Wiggins",
            "acceptedAnswers": [
                "Wiggins",
                "Bradley Wiggins",
                "Sir Bradley Wiggins"
            ]
        },
        {
            "id": "sport_10287",
            "category": "Sport & Spel",
            "difficulty": 8,
            "question": "Welke schaakgrootmeester werd wereldkampioen in 1972 na een match tegen Boris Spassky?",
            "answer": "Bobby Fischer",
            "acceptedAnswers": [
                "Fischer",
                "Bobby Fischer"
            ]
        },
        {
            "id": "sport_10288",
            "category": "Sport & Spel",
            "difficulty": 8,
            "question": "Bij welke Amerikaanse basketbalclub speelde Kobe Bryant zijn hele carrière?",
            "answer": "Los Angeles Lakers",
            "acceptedAnswers": [
                "LA Lakers",
                "Lakers",
                "Los Angeles Lakers"
            ]
        },
        {
            "id": "sport_10289",
            "category": "Sport & Spel",
            "difficulty": 8,
            "question": "Wie is de enige Belgische renner die alle vijf de wielermonumenten minstens één keer won?",
            "answer": "Eddy Merckx",
            "acceptedAnswers": [
                "Merckx",
                "Rik Van Looy",
                "Roger De Vlaeminck"
            ]
            // Correctie: Er zijn er 3 (Merckx, Van Looy, De Vlaeminck). 
            // Vraagstelling aanpassen voor uniekheid: "Wie won er 3 in 1969?" -> Merckx.
            // Beter: Vraag naar de bijnaam 'Monsieur Paris-Roubaix'.
        },
        // HERZIENING VRAAG 10289
        {
            "id": "sport_10289",
            "category": "Sport & Spel",
            "difficulty": 8,
            "question": "Welke Belgische wielrenner kreeg de bijnaam 'Monsieur Paris-Roubaix' omdat hij de koers 4 keer won?",
            "answer": "Roger De Vlaeminck",
            "acceptedAnswers": [
                "De Vlaeminck",
                "Roger De Vlaeminck"
            ]
        },
        {
            "id": "art_10290",
            "category": "Kunst & Literatuur",
            "difficulty": 8,
            "question": "Welke filosoof schreef 'Critique of Pure Reason' (Kritiek van de zuivere rede)?",
            "answer": "Immanuel Kant",
            "acceptedAnswers": [
                "Kant",
                "Immanuel Kant"
            ]
        },
        {
            "id": "art_10291",
            "category": "Kunst & Literatuur",
            "difficulty": 8,
            "question": "In welk museum hangt de Guernica van Picasso?",
            "answer": "Reina Sofia",
            "acceptedAnswers": [
                "Museo Reina Sofia",
                "Reina Sofia"
            ]
        },
        {
            "id": "art_10292",
            "category": "Kunst & Literatuur",
            "difficulty": 8,
            "question": "Welke componist schreef de opera 'Die Zauberflöte'?",
            "answer": "Wolfgang Amadeus Mozart",
            "acceptedAnswers": [
                "Mozart",
                "Wolfgang Amadeus Mozart"
            ]
        },
        {
            "id": "art_10293",
            "category": "Kunst & Literatuur",
            "difficulty": 8,
            "question": "Wie schreef de roman 'Brave New World'?",
            "answer": "Aldous Huxley",
            "acceptedAnswers": [
                "Huxley",
                "Aldous Huxley"
            ]
        },
        {
            "id": "art_10294",
            "category": "Kunst & Literatuur",
            "difficulty": 8,
            "question": "Welke Russische schrijver schreef 'Oorlog en Vrede'?",
            "answer": "Leo Tolstoj",
            "acceptedAnswers": [
                "Tolstoj",
                "Tolstoy",
                "Leo Tolstoj"
            ]
        },
        {
            "id": "art_10295",
            "category": "Kunst & Literatuur",
            "difficulty": 8,
            "question": "Hoe heet de stijlperiode in de kunst (ca. 1730-1760) die volgt op de barok en gekenmerkt wordt door elegantie en lichte kleuren?",
            "answer": "Rococo",
            "acceptedAnswers": [
                "Rococo"
            ]
        },
        {
            "id": "art_10296",
            "category": "Kunst & Literatuur",
            "difficulty": 8,
            "question": "Welke dichter schreef de 'Divina Commedia'?",
            "answer": "Dante Alighieri",
            "acceptedAnswers": [
                "Dante",
                "Dante Alighieri"
            ]
        },
        {
            "id": "art_10297",
            "category": "Kunst & Literatuur",
            "difficulty": 8,
            "question": "Welke Vlaamse auteur schreef 'Het verdriet van België'?",
            "answer": "Hugo Claus",
            "acceptedAnswers": [
                "Claus",
                "Hugo Claus"
            ]
        },
        {
            "id": "art_10298",
            "category": "Kunst & Literatuur",
            "difficulty": 8,
            "question": "Welke Romeinse god komt overeen met de Griekse god Hermes?",
            "answer": "Mercurius",
            "acceptedAnswers": [
                "Mercurius"
            ]
        },
        {
            "id": "art_10299",
            "category": "Kunst & Literatuur",
            "difficulty": 8,
            "question": "Welke Amerikaanse schrijver pleegde zelfmoord in 1961 en schreef 'For Whom the Bell Tolls'?",
            "answer": "Ernest Hemingway",
            "acceptedAnswers": [
                "Hemingway",
                "Ernest Hemingway"
            ]
        },

        // --- MOEILIJKHEIDSGRAAD 9 ---
        {
            "id": "geo_10300",
            "category": "Aardrijkskunde",
            "difficulty": 9,
            "question": "Wat is de hoofdstad van Bhutan?",
            "answer": "Thimphu",
            "acceptedAnswers": [
                "Thimphu"
            ]
        },
        {
            "id": "geo_10301",
            "category": "Aardrijkskunde",
            "difficulty": 9,
            "question": "In welk land ligt de regio Galicië (met bedevaartsoord Santiago)?",
            "answer": "Spanje",
            "acceptedAnswers": [
                "Spanje"
            ]
        },
        {
            "id": "geo_10302",
            "category": "Aardrijkskunde",
            "difficulty": 9,
            "question": "Welke rivier vormt de grens tussen Laos en Thailand?",
            "answer": "Mekong",
            "acceptedAnswers": [
                "Mekong"
            ]
        },
        {
            "id": "geo_10303",
            "category": "Aardrijkskunde",
            "difficulty": 9,
            "question": "Welk land heette tot 1989 Birma?",
            "answer": "Myanmar",
            "acceptedAnswers": [
                "Myanmar"
            ]
        },
        {
            "id": "geo_10304",
            "category": "Aardrijkskunde",
            "difficulty": 9,
            "question": "Wat is het diepste punt van de oceaan, gelegen in de Grote Oceaan?",
            "answer": "Marianentrog",
            "acceptedAnswers": [
                "Marianentrog",
                "Challenger Deep"
            ]
        },
        {
            "id": "geo_10305",
            "category": "Aardrijkskunde",
            "difficulty": 9,
            "question": "Tot welk land behoren de Azoren?",
            "answer": "Portugal",
            "acceptedAnswers": [
                "Portugal"
            ]
        },
        {
            "id": "geo_10306",
            "category": "Aardrijkskunde",
            "difficulty": 9,
            "question": "Welke woestijn bedekt een groot deel van Botswana?",
            "answer": "Kalahari",
            "acceptedAnswers": [
                "Kalahari",
                "Kalahari woestijn"
            ]
        },
        {
            "id": "geo_10307",
            "category": "Aardrijkskunde",
            "difficulty": 9,
            "question": "Wat is de enige staat in de VS die begint met de letter 'P'?",
            "answer": "Pennsylvania",
            "acceptedAnswers": [
                "Pennsylvania"
            ]
        },
        {
            "id": "hist_10308",
            "category": "Geschiedenis",
            "difficulty": 9,
            "question": "In welk jaar viel het West-Romeinse Rijk (afzetting laatste keizer)?",
            "answer": "476",
            "acceptedAnswers": [
                "476",
                "476 n.Chr."
            ]
        },
        {
            "id": "hist_10309",
            "category": "Geschiedenis",
            "difficulty": 9,
            "question": "Wie was de eerste bondskanselier van West-Duitsland na WOII?",
            "answer": "Konrad Adenauer",
            "acceptedAnswers": [
                "Adenauer",
                "Konrad Adenauer"
            ]
        },
        {
            "id": "hist_10310",
            "category": "Geschiedenis",
            "difficulty": 9,
            "question": "Welke veldslag maakte in 52 v.Chr. een einde aan de Gallische onafhankelijkheid?",
            "answer": "Beleg van Alesia",
            "acceptedAnswers": [
                "Alesia",
                "Slag bij Alesia"
            ]
        },
        {
            "id": "hist_10311",
            "category": "Geschiedenis",
            "difficulty": 9,
            "question": "Wie was de moordenaar van Robert F. Kennedy in 1968?",
            "answer": "Sirhan Sirhan",
            "acceptedAnswers": [
                "Sirhan Sirhan"
            ]
        },
        {
            "id": "hist_10312",
            "category": "Geschiedenis",
            "difficulty": 9,
            "question": "Tussen welke twee landen werd de 'Honderdjarige Oorlog' uitgevochten?",
            "answer": "Engeland en Frankrijk",
            "acceptedAnswers": [
                "Engeland en Frankrijk",
                "Frankrijk en Engeland"
            ]
        },
        {
            "id": "hist_10313",
            "category": "Geschiedenis",
            "difficulty": 9,
            "question": "Welk incident in 1618 was de directe aanleiding voor de Dertigjarige Oorlog?",
            "answer": "Tweede Praagse Defenestratie",
            "acceptedAnswers": [
                "Praagse Defenestratie",
                "De Defenestratie van Praag"
            ]
        },
        {
            "id": "hist_10314",
            "category": "Geschiedenis",
            "difficulty": 9,
            "question": "Hoe heette de operatie waarmee Hitler Rusland binnenviel in 1941?",
            "answer": "Operatie Barbarossa",
            "acceptedAnswers": [
                "Barbarossa",
                "Operatie Barbarossa"
            ]
        },
        {
            "id": "hist_10315",
            "category": "Geschiedenis",
            "difficulty": 9,
            "question": "Welke Belgische politicus ondertekende als eerste voorzitter van de Europese Raad het Verdrag van Lissabon?",
            "answer": "Herman Van Rompuy",
            "acceptedAnswers": [
                "Van Rompuy",
                "Herman Van Rompuy"
            ]
        },
        {
            "id": "ent_10316",
            "category": "Amusement",
            "difficulty": 9,
            "question": "Welke film won in 2020 als eerste niet-Engelstalige film de Oscar voor Beste Film?",
            "answer": "Parasite",
            "acceptedAnswers": [
                "Parasite"
            ]
        },
        {
            "id": "ent_10317",
            "category": "Amusement",
            "difficulty": 9,
            "question": "Wie componeerde de soundtrack voor 'The Good, the Bad and the Ugly'?",
            "answer": "Ennio Morricone",
            "acceptedAnswers": [
                "Morricone",
                "Ennio Morricone"
            ]
        },
        {
            "id": "ent_10318",
            "category": "Amusement",
            "difficulty": 9,
            "question": "Welk personage in 'Friends' heeft als middelste naam 'Muriel'?",
            "answer": "Chandler Bing",
            "acceptedAnswers": [
                "Chandler",
                "Chandler Bing"
            ]
        },
        {
            "id": "ent_10319",
            "category": "Amusement",
            "difficulty": 9,
            "question": "Welke Amerikaanse regisseur maakte 'The Grand Budapest Hotel'?",
            "answer": "Wes Anderson",
            "acceptedAnswers": [
                "Wes Anderson",
                "Anderson"
            ]
        },
        {
            "id": "ent_10320",
            "category": "Amusement",
            "difficulty": 9,
            "question": "Wie is de originele zanger van de band Joy Division (die zich verhing in 1980)?",
            "answer": "Ian Curtis",
            "acceptedAnswers": [
                "Curtis",
                "Ian Curtis"
            ]
        },
        {
            "id": "ent_10321",
            "category": "Amusement",
            "difficulty": 9,
            "question": "Wat is de naam van de barman in 'The Simpsons'?",
            "answer": "Moe Szyslak",
            "acceptedAnswers": [
                "Moe",
                "Moe Szyslak"
            ]
        },
        {
            "id": "ent_10322",
            "category": "Amusement",
            "difficulty": 9,
            "question": "Welke acteur won een Oscar voor zijn rol als 'The Joker' in 'The Dark Knight' (postuum)?",
            "answer": "Heath Ledger",
            "acceptedAnswers": [
                "Ledger",
                "Heath Ledger"
            ]
        },
        {
            "id": "ent_10323",
            "category": "Amusement",
            "difficulty": 9,
            "question": "Uit welk land komt de zangeres Björk?",
            "answer": "IJsland",
            "acceptedAnswers": [
                "IJsland"
            ]
        },
        {
            "id": "sci_10324",
            "category": "Wetenschap & Natuur",
            "difficulty": 9,
            "question": "Wat is de naam van de constante die het getal 6,022 x 10^23 voorstelt?",
            "answer": "Constante van Avogadro",
            "acceptedAnswers": [
                "Avogadro",
                "Getal van Avogadro"
            ]
        },
        {
            "id": "sci_10325",
            "category": "Wetenschap & Natuur",
            "difficulty": 9,
            "question": "Welk element heeft het atoomnummer 74 en wordt gebruikt in gloeidraden?",
            "answer": "Wolfraam",
            "acceptedAnswers": [
                "Wolfraam",
                "Tungsten"
            ]
        },
        {
            "id": "sci_10326",
            "category": "Wetenschap & Natuur",
            "difficulty": 9,
            "question": "Hoe heet de hypothetische 'oerknal' van een enorm continent dat 300 miljoen jaar geleden bestond?",
            "answer": "Pangea",
            "acceptedAnswers": [
                "Pangea"
            ]
        },
        {
            "id": "sci_10327",
            "category": "Wetenschap & Natuur",
            "difficulty": 9,
            "question": "Wat is de wetenschappelijke naam voor de ziekte van Pfeiffer?",
            "answer": "Mononucleosis",
            "acceptedAnswers": [
                "Mononucleosis",
                "Klierkoorts"
            ]
        },
        {
            "id": "sci_10328",
            "category": "Wetenschap & Natuur",
            "difficulty": 9,
            "question": "Welk subatomair deeltje heeft geen elektrische lading?",
            "answer": "Neutron",
            "acceptedAnswers": [
                "Neutron"
            ]
        },
        {
            "id": "sci_10329",
            "category": "Wetenschap & Natuur",
            "difficulty": 9,
            "question": "Wat is de naam van de eerste hond gekloond uit een volwassen cel?",
            "answer": "Dolly",
            "acceptedAnswers": [
                "Dolly",
                "Dolly het schaap"
            ]
            // Correctie: Dolly was een schaap. De vraag moet zijn: 'Wat is de naam van het eerste zoogdier...'
        },
        // HERZIENING VRAAG 10329
        {
            "id": "sci_10329",
            "category": "Wetenschap & Natuur",
            "difficulty": 9,
            "question": "Hoe heette het schaap dat in 1996 als eerste zoogdier werd gekloond?",
            "answer": "Dolly",
            "acceptedAnswers": [
                "Dolly"
            ]
        },
        {
            "id": "sci_10330",
            "category": "Wetenschap & Natuur",
            "difficulty": 9,
            "question": "Wie stelde de drie wetten van de beweging op (Philosophiæ Naturalis Principia Mathematica)?",
            "answer": "Isaac Newton",
            "acceptedAnswers": [
                "Newton",
                "Isaac Newton"
            ]
        },
        {
            "id": "sci_10331",
            "category": "Wetenschap & Natuur",
            "difficulty": 9,
            "question": "Welk edelgas heeft atoomnummer 2?",
            "answer": "Helium",
            "acceptedAnswers": [
                "Helium"
            ]
        },
        {
            "id": "sport_10332",
            "category": "Sport & Spel",
            "difficulty": 9,
            "question": "Welk land won het EK Voetbal in 2004 (tot grote verrassing van iedereen)?",
            "answer": "Griekenland",
            "acceptedAnswers": [
                "Griekenland"
            ]
        },
        {
            "id": "sport_10333",
            "category": "Sport & Spel",
            "difficulty": 9,
            "question": "Wie won in 1996 de laatste Belgische gouden medaille op de Olympische Spelen in Judo?",
            "answer": "Ulla Werbrouck",
            "acceptedAnswers": [
                "Werbrouck",
                "Ulla Werbrouck"
            ]
        },
        {
            "id": "sport_10334",
            "category": "Sport & Spel",
            "difficulty": 9,
            "question": "Hoeveel rode ballen liggen er op een snookertafel bij aanvang?",
            "answer": "15",
            "acceptedAnswers": [
                "15",
                "Vijftien"
            ]
        },
        {
            "id": "sport_10335",
            "category": "Sport & Spel",
            "difficulty": 9,
            "question": "Welke renner overleed tragisch tijdens de Tour de France van 1995 op de afdaling van de Portet d'Aspet?",
            "answer": "Fabio Casartelli",
            "acceptedAnswers": [
                "Casartelli",
                "Fabio Casartelli"
            ]
        },
        {
            "id": "sport_10336",
            "category": "Sport & Spel",
            "difficulty": 9,
            "question": "Welke Belgische atletiekclub organiseert jaarlijks de Memorial Van Damme?",
            "answer": "Excelsior",
            "acceptedAnswers": [
                "Excelsior",
                "Brussels Excelsior"
            ]
        },
        {
            "id": "sport_10337",
            "category": "Sport & Spel",
            "difficulty": 9,
            "question": "Wie is de enige bokser die ooit wereldkampioen zwaargewicht werd en ongeslagen met pensioen ging (49-0)?",
            "answer": "Rocky Marciano",
            "acceptedAnswers": [
                "Marciano",
                "Rocky Marciano"
            ]
        },
        {
            "id": "sport_10338",
            "category": "Sport & Spel",
            "difficulty": 9,
            "question": "Welke Finse coureur won de F1 wereldtitel in 1998 en 1999?",
            "answer": "Mika Häkkinen",
            "acceptedAnswers": [
                "Hakkinen",
                "Häkkinen",
                "Mika Hakkinen"
            ]
        },
        {
            "id": "sport_10339",
            "category": "Sport & Spel",
            "difficulty": 9,
            "question": "Welk land won de Davis Cup tennis in 2022 (voor het eerst)?",
            "answer": "Canada",
            "acceptedAnswers": [
                "Canada"
            ]
        },
        {
            "id": "art_10340",
            "category": "Kunst & Literatuur",
            "difficulty": 9,
            "question": "Welke Nederlandse schilder is bekend om zijn geometrische abstracte werken in rood, geel en blauw (De Stijl)?",
            "answer": "Piet Mondriaan",
            "acceptedAnswers": [
                "Mondriaan",
                "Piet Mondriaan"
            ]
        },
        {
            "id": "art_10341",
            "category": "Kunst & Literatuur",
            "difficulty": 9,
            "question": "Wie schreef het boek 'Ulysses'?",
            "answer": "James Joyce",
            "acceptedAnswers": [
                "Joyce",
                "James Joyce"
            ]
        },
        {
            "id": "art_10342",
            "category": "Kunst & Literatuur",
            "difficulty": 9,
            "question": "In welk museum in Madrid vind je 'Las Meninas' van Velázquez?",
            "answer": "Prado",
            "acceptedAnswers": [
                "Prado",
                "Museo del Prado"
            ]
        },
        {
            "id": "art_10343",
            "category": "Kunst & Literatuur",
            "difficulty": 9,
            "question": "Wie componeerde de 'Matthäus-Passion'?",
            "answer": "Johann Sebastian Bach",
            "acceptedAnswers": [
                "Bach",
                "J.S. Bach"
            ]
        },
        {
            "id": "art_10344",
            "category": "Kunst & Literatuur",
            "difficulty": 9,
            "question": "Welke Franse beeldhouwer maakte het Vrijheidsbeeld (niet de ingenieur)?",
            "answer": "Frédéric Auguste Bartholdi",
            "acceptedAnswers": [
                "Bartholdi"
            ]
        },
        {
            "id": "art_10345",
            "category": "Kunst & Literatuur",
            "difficulty": 9,
            "question": "Hoe heet de muze van de geschiedenis in de Griekse mythologie?",
            "answer": "Clio",
            "acceptedAnswers": [
                "Clio",
                "Klio"
            ]
        },
        {
            "id": "art_10346",
            "category": "Kunst & Literatuur",
            "difficulty": 9,
            "question": "Welke Nobelprijswinnaar schreef 'Honderd jaar eenzaamheid'?",
            "answer": "Gabriel García Márquez",
            "acceptedAnswers": [
                "Marquez",
                "Gabriel García Márquez"
            ]
        },
        {
            "id": "art_10347",
            "category": "Kunst & Literatuur",
            "difficulty": 9,
            "question": "Wie ontwierp de koepel van de Sint-Pietersbasiliek in Vaticaanstad?",
            "answer": "Michelangelo",
            "acceptedAnswers": [
                "Michelangelo"
            ]
        },
        {
            "id": "art_10348",
            "category": "Kunst & Literatuur",
            "difficulty": 9,
            "question": "Welk personage in 'De Toverberg' van Thomas Mann verblijft in een sanatorium?",
            "answer": "Hans Castorp",
            "acceptedAnswers": [
                "Hans Castorp",
                "Castorp"
            ]
        },
        {
            "id": "art_10349",
            "category": "Kunst & Literatuur",
            "difficulty": 9,
            "question": "Welke Amerikaanse architect ontwierp het Guggenheim Museum in New York?",
            "answer": "Frank Lloyd Wright",
            "acceptedAnswers": [
                "Wright",
                "Frank Lloyd Wright"
            ]
        },

        // --- MOEILIJKHEIDSGRAAD 10 ---
        {
            "id": "geo_10350",
            "category": "Aardrijkskunde",
            "difficulty": 10,
            "question": "Wat is de hoofdstad van Liechtenstein?",
            "answer": "Vaduz",
            "acceptedAnswers": [
                "Vaduz"
            ]
        },
        {
            "id": "geo_10351",
            "category": "Aardrijkskunde",
            "difficulty": 10,
            "question": "Welke eilandengroep wordt in het Spaans 'Islas Malvinas' genoemd?",
            "answer": "Falklandeilanden",
            "acceptedAnswers": [
                "Falklandeilanden",
                "Falklands"
            ]
        },
        {
            "id": "geo_10352",
            "category": "Aardrijkskunde",
            "difficulty": 10,
            "question": "In welk land ligt de regio Transnistrië, die zich onafhankelijk waant maar niet erkend wordt?",
            "answer": "Moldavië",
            "acceptedAnswers": [
                "Moldavie",
                "Moldavië"
            ]
        },
        {
            "id": "geo_10353",
            "category": "Aardrijkskunde",
            "difficulty": 10,
            "question": "Welke rivier is de langste van Azië?",
            "answer": "Yangtze",
            "acceptedAnswers": [
                "Yangtze",
                "Blauwe Rivier"
            ]
        },
        {
            "id": "geo_10354",
            "category": "Aardrijkskunde",
            "difficulty": 10,
            "question": "Wat is de naam van de hoofdstad van Burkina Faso?",
            "answer": "Ouagadougou",
            "acceptedAnswers": [
                "Ouagadougou"
            ]
        },
        {
            "id": "geo_10355",
            "category": "Aardrijkskunde",
            "difficulty": 10,
            "question": "Welk meer in Centraal-Azië is sinds de jaren '60 voor 90% opgedroogd?",
            "answer": "Aralmeer",
            "acceptedAnswers": [
                "Aralmeer"
            ]
        },
        {
            "id": "geo_10356",
            "category": "Aardrijkskunde",
            "difficulty": 10,
            "question": "Wat is de enige Zuid-Amerikaanse hoofdstad die aan de Caraïbische kust ligt? (Correctie: Caracas ligt er vlakbij, maar Georgetown ligt aan de Atlantische. Vraag: Hoofdstad van Guyana?)",
            "answer": "Georgetown",
            "acceptedAnswers": [
                "Georgetown"
            ]
        },
        {
            "id": "geo_10357",
            "category": "Aardrijkskunde",
            "difficulty": 10,
            "question": "Welk land heeft de meeste tijdzones (inclusief overzeese gebieden)?",
            "answer": "Frankrijk",
            "acceptedAnswers": [
                "Frankrijk"
            ]
        },
        {
            "id": "hist_10358",
            "category": "Geschiedenis",
            "difficulty": 10,
            "question": "Wie was de enige Britse premier die ooit vermoord werd (in 1812)?",
            "answer": "Spencer Perceval",
            "acceptedAnswers": [
                "Spencer Perceval",
                "Perceval"
            ]
        },
        {
            "id": "hist_10359",
            "category": "Geschiedenis",
            "difficulty": 10,
            "question": "Welk verdrag verdeelde in 1494 de wereld buiten Europa tussen Spanje en Portugal?",
            "answer": "Verdrag van Tordesillas",
            "acceptedAnswers": [
                "Tordesillas",
                "Verdrag van Tordesillas"
            ]
        },
        {
            "id": "hist_10360",
            "category": "Geschiedenis",
            "difficulty": 10,
            "question": "Op welke datum (dag en maand) eindigde Wapenstilstand van WOI?",
            "answer": "11 november",
            "acceptedAnswers": [
                "11 november",
                "11/11"
            ]
        },
        {
            "id": "hist_10361",
            "category": "Geschiedenis",
            "difficulty": 10,
            "question": "Welke Engelse koning ondertekende de Magna Carta in 1215?",
            "answer": "Jan zonder Land",
            "acceptedAnswers": [
                "John",
                "Jan zonder Land",
                "King John"
            ]
        },
        {
            "id": "hist_10362",
            "category": "Geschiedenis",
            "difficulty": 10,
            "question": "Hoe heette de operatie om Osama Bin Laden uit te schakelen in 2011?",
            "answer": "Operation Neptune Spear",
            "acceptedAnswers": [
                "Neptune Spear",
                "Operation Neptune Spear"
            ]
        },
        {
            "id": "hist_10363",
            "category": "Geschiedenis",
            "difficulty": 10,
            "question": "Welke Romeinse keizer bouwde een muur in het noorden van Engeland?",
            "answer": "Hadrianus",
            "acceptedAnswers": [
                "Hadrianus",
                "Hadrian"
            ]
        },
        {
            "id": "hist_10364",
            "category": "Geschiedenis",
            "difficulty": 10,
            "question": "Wie was de eerste secretaris-generaal van de NAVO? (Tip: een Belg)",
            "answer": "Paul-Henri Spaak",
            "acceptedAnswers": [
                "Spaak",
                "Paul-Henri Spaak"
            ]
        },
        {
            "id": "hist_10365",
            "category": "Geschiedenis",
            "difficulty": 10,
            "question": "Welke dynastie regeerde over China van 1368 tot 1644 (bekend om de vazen)?",
            "answer": "Ming",
            "acceptedAnswers": [
                "Ming-dynastie",
                "Ming"
            ]
        },
        {
            "id": "ent_10366",
            "category": "Amusement",
            "difficulty": 10,
            "question": "Wie won als enige acteur drie Oscars voor 'Beste Mannelijke Hoofdrol'?",
            "answer": "Daniel Day-Lewis",
            "acceptedAnswers": [
                "Daniel Day-Lewis",
                "Day-Lewis"
            ]
        },
        {
            "id": "ent_10367",
            "category": "Amusement",
            "difficulty": 10,
            "question": "Hoe heet de drummer van The Rolling Stones die in 2021 overleed?",
            "answer": "Charlie Watts",
            "acceptedAnswers": [
                "Watts",
                "Charlie Watts"
            ]
        },
        {
            "id": "ent_10368",
            "category": "Amusement",
            "difficulty": 10,
            "question": "Welke film won de allereerste Oscar voor Beste Film in 1929?",
            "answer": "Wings",
            "acceptedAnswers": [
                "Wings"
            ]
        },
        {
            "id": "ent_10369",
            "category": "Amusement",
            "difficulty": 10,
            "question": "Wat is de artiestennaam van de elektronische muzikant Richard D. James?",
            "answer": "Aphex Twin",
            "acceptedAnswers": [
                "Aphex Twin"
            ]
        },
        {
            "id": "ent_10370",
            "category": "Amusement",
            "difficulty": 10,
            "question": "Welke Belgische film van Felix Van Groeningen werd genomineerd voor een Oscar in 2014?",
            "answer": "The Broken Circle Breakdown",
            "acceptedAnswers": [
                "The Broken Circle Breakdown",
                "Broken Circle Breakdown"
            ]
        },
        {
            "id": "ent_10371",
            "category": "Amusement",
            "difficulty": 10,
            "question": "Hoe heet het fictieve metaal waaruit het schild van Captain America is gemaakt?",
            "answer": "Vibranium",
            "acceptedAnswers": [
                "Vibranium"
            ]
        },
        {
            "id": "ent_10372",
            "category": "Amusement",
            "difficulty": 10,
            "question": "Welke regisseur maakte de 'Three Colours'-trilogie (Bleu, Blanc, Rouge)?",
            "answer": "Krzysztof Kieslowski",
            "acceptedAnswers": [
                "Kieslowski",
                "Krzysztof Kieslowski"
            ]
        },
        {
            "id": "ent_10373",
            "category": "Amusement",
            "difficulty": 10,
            "question": "Welke zangeres zong het nummer 'GoldenEye' voor de gelijknamige James Bondfilm?",
            "answer": "Tina Turner",
            "acceptedAnswers": [
                "Tina Turner",
                "Turner"
            ]
        },
        {
            "id": "sci_10374",
            "category": "Wetenschap & Natuur",
            "difficulty": 10,
            "question": "Welke wolksoort wordt ook wel 'schapenwolk' genoemd en duidt op onstabiel weer?",
            "answer": "Altocumulus",
            "acceptedAnswers": [
                "Altocumulus"
            ]
        },
        {
            "id": "sci_10375",
            "category": "Wetenschap & Natuur",
            "difficulty": 10,
            "question": "Hoeveel paar ribben heeft een mens normaal gesproken?",
            "answer": "12",
            "acceptedAnswers": [
                "12",
                "12 paar"
            ]
        },
        {
            "id": "sci_10376",
            "category": "Wetenschap & Natuur",
            "difficulty": 10,
            "question": "Wie won als enige persoon twee ongedeelde Nobelprijzen (Scheikunde en Vrede)?",
            "answer": "Linus Pauling",
            "acceptedAnswers": [
                "Pauling",
                "Linus Pauling"
            ]
        },
        {
            "id": "sci_10377",
            "category": "Wetenschap & Natuur",
            "difficulty": 10,
            "question": "Wat is de wetenschappelijke naam voor het staartbeentje?",
            "answer": "Coccyx",
            "acceptedAnswers": [
                "Coccyx",
                "Os coccygis"
            ]
        },
        {
            "id": "sci_10378",
            "category": "Wetenschap & Natuur",
            "difficulty": 10,
            "question": "Welke planeet in ons zonnestelsel heeft de meeste manen (sinds 2023 meer dan 140)?",
            "answer": "Saturnus",
            "acceptedAnswers": [
                "Saturnus"
            ]
        },
        {
            "id": "sci_10379",
            "category": "Wetenschap & Natuur",
            "difficulty": 10,
            "question": "Welk element werd in 1868 ontdekt in het spectrum van de zon voordat het op aarde werd gevonden?",
            "answer": "Helium",
            "acceptedAnswers": [
                "Helium"
            ]
        },
        {
            "id": "sci_10380",
            "category": "Wetenschap & Natuur",
            "difficulty": 10,
            "question": "Hoe heet het deel van de wiskunde dat zich bezighoudt met de eigenschappen van gehele getallen?",
            "answer": "Getaltheorie",
            "acceptedAnswers": [
                "Getaltheorie"
            ]
        },
        {
            "id": "sci_10381",
            "category": "Wetenschap & Natuur",
            "difficulty": 10,
            "question": "Wat is de helderste ster aan de nachtelijke hemel?",
            "answer": "Sirius",
            "acceptedAnswers": [
                "Sirius"
            ]
        },
        {
            "id": "sport_10382",
            "category": "Sport & Spel",
            "difficulty": 10,
            "question": "Welk land organiseerde het WK Voetbal in 1962?",
            "answer": "Chili",
            "acceptedAnswers": [
                "Chili"
            ]
        },
        {
            "id": "sport_10383",
            "category": "Sport & Spel",
            "difficulty": 10,
            "question": "Wie is de enige wielrenner die de drie Grote Rondes in hetzelfde jaar reed én uitreed (en er één won, Vuelta 2023)?",
            "answer": "Sepp Kuss",
            "acceptedAnswers": [
                "Sepp Kuss",
                "Kuss"
            ]
        },
        {
            "id": "sport_10384",
            "category": "Sport & Spel",
            "difficulty": 10,
            "question": "Hoe heet de trofee die wordt uitgereikt aan de winnaar van de NHL (ijshockey)?",
            "answer": "Stanley Cup",
            "acceptedAnswers": [
                "Stanley Cup"
            ]
        },
        {
            "id": "sport_10385",
            "category": "Sport & Spel",
            "difficulty": 10,
            "question": "Welke Belgische tennister bereikte in 2013 de halve finale van Wimbledon?",
            "answer": "Kirsten Flipkens",
            "acceptedAnswers": [
                "Flipkens",
                "Kirsten Flipkens"
            ]
        },
        {
            "id": "sport_10386",
            "category": "Sport & Spel",
            "difficulty": 10,
            "question": "Wat is de maximale score in een spelletje Pac-Man (de 'Kill Screen')?",
            "answer": "3.333.360",
            "acceptedAnswers": [
                "3.333.360",
                "3333360"
            ]
        },
        {
            "id": "sport_10387",
            "category": "Sport & Spel",
            "difficulty": 10,
            "question": "Welke stad organiseerde de Olympische Winterspelen in 1994 (slechts 2 jaar na de vorige)?",
            "answer": "Lillehammer",
            "acceptedAnswers": [
                "Lillehammer"
            ]
        },
        {
            "id": "sport_10388",
            "category": "Sport & Spel",
            "difficulty": 10,
            "question": "Welke darter won 5 keer het WK (BDO/WDF) maar stapte nooit over naar de PDC?",
            "answer": "Eric Bristow",
            "acceptedAnswers": [
                "Bristow",
                "Eric Bristow"
            ]
        },
        {
            "id": "sport_10389",
            "category": "Sport & Spel",
            "difficulty": 10,
            "question": "Welke Belgische club speelde de finale van de Europacup II in 1982 (en verloor van Barcelona)?",
            "answer": "Standard Luik",
            "acceptedAnswers": [
                "Standard",
                "Standard Luik"
            ]
        },
        {
            "id": "art_10390",
            "category": "Kunst & Literatuur",
            "difficulty": 10,
            "question": "Welke Hongaarse componist is bekend om zijn 'Rapsodieën'?",
            "answer": "Franz Liszt",
            "acceptedAnswers": [
                "Liszt",
                "Franz Liszt"
            ]
        },
        {
            "id": "art_10391",
            "category": "Kunst & Literatuur",
            "difficulty": 10,
            "question": "Wie schreef 'In Search of Lost Time' (A la recherche du temps perdu)?",
            "answer": "Marcel Proust",
            "acceptedAnswers": [
                "Proust",
                "Marcel Proust"
            ]
        },
        {
            "id": "art_10392",
            "category": "Kunst & Literatuur",
            "difficulty": 10,
            "question": "Welke architect ontwierp het Centre Pompidou in Parijs (samen met Richard Rogers)?",
            "answer": "Renzo Piano",
            "acceptedAnswers": [
                "Renzo Piano",
                "Piano"
            ]
        },
        {
            "id": "art_10393",
            "category": "Kunst & Literatuur",
            "difficulty": 10,
            "question": "Wat is de voornaam van de vrouw van Odysseus die 20 jaar op hem wachtte?",
            "answer": "Penelope",
            "acceptedAnswers": [
                "Penelope"
            ]
        },
        {
            "id": "art_10394",
            "category": "Kunst & Literatuur",
            "difficulty": 10,
            "question": "Welke Russische schrijver schreef 'De Broeders Karamazov'?",
            "answer": "Fjodor Dostojevski",
            "acceptedAnswers": [
                "Dostojevski",
                "Dostoevsky"
            ]
        },
        {
            "id": "art_10395",
            "category": "Kunst & Literatuur",
            "difficulty": 10,
            "question": "Wie schilderde 'De Tuin der Lusten'?",
            "answer": "Jheronimus Bosch",
            "acceptedAnswers": [
                "Bosch",
                "Jheronimus Bosch",
                "Jeroen Bosch"
            ]
        },
        {
            "id": "art_10396",
            "category": "Kunst & Literatuur",
            "difficulty": 10,
            "question": "Hoe heet de stroming in de literatuur waarvan Jack Kerouac en Allen Ginsberg de leiders waren?",
            "answer": "Beat Generation",
            "acceptedAnswers": [
                "Beat Generation",
                "Beatniks"
            ]
        },
        {
            "id": "art_10397",
            "category": "Kunst & Literatuur",
            "difficulty": 10,
            "question": "Welk muziekinstrument bespeelde jazzlegende John Coltrane voornamelijk?",
            "answer": "Saxofoon",
            "acceptedAnswers": [
                "Saxofoon",
                "Sax"
            ]
        },
        {
            "id": "art_10398",
            "category": "Kunst & Literatuur",
            "difficulty": 10,
            "question": "Wie schreef het toneelstuk 'Wachten op Godot'?",
            "answer": "Samuel Beckett",
            "acceptedAnswers": [
                "Beckett",
                "Samuel Beckett"
            ]
        },
        {
            "id": "art_10399",
            "category": "Kunst & Literatuur",
            "difficulty": 10,
            "question": "Welke Amerikaanse kunstenares is bekend om haar enorme schilderijen van bloemen en woestijnlandschappen?",
            "answer": "Georgia O'Keeffe",
            "acceptedAnswers": [
                "O'Keeffe",
                "Georgia O'Keeffe"
            ]
        }
    ]
};
