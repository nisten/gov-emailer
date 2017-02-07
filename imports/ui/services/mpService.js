import angular from 'angular';

const name = 'mpService';

class MPService {
  constructor() {
    this.mps = [{
      "firstName": "Ziad",
      "lastName": "Aboultaif",
      "constituency": "Edmonton Manning",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Ziad.Aboultaif@parl.gc.ca"
    }, {
      "firstName": "Dan",
      "lastName": "Albas",
      "constituency": "Central Okanagan-Similkameen-Nicola",
      "province": "British Columbia",
      "party": "Conservative",
      "email": "Dan.Albas@parl.gc.ca"
    }, {
      "firstName": "Harold",
      "lastName": "Albrecht",
      "constituency": "Kitchener-Conestoga",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Harold.Albrecht@parl.gc.ca"
    }, {
      "firstName": "John",
      "lastName": "Aldag",
      "constituency": "Cloverdale-Langley City",
      "province": "British Columbia",
      "party": "Liberal",
      "email": "John.Aldag@parl.gc.ca"
    }, {
      "firstName": "Omar",
      "lastName": "Alghabra",
      "constituency": "Mississauga Centre",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Omar.Alghabra@parl.gc.ca"
    }, {
      "firstName": "Leona",
      "lastName": "Alleslev",
      "constituency": "Aurora-Oak Ridges-Richmond Hill",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Leona.Alleslev@parl.gc.ca"
    }, {
      "firstName": "Dean",
      "lastName": "Allison",
      "constituency": "Niagara West",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Dean.Allison@parl.gc.ca"
    }, {
      "firstName": "Rona",
      "lastName": "Ambrose",
      "constituency": "Sturgeon River-Parkland",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Rona.Ambrose@parl.gc.ca"
    }, {
      "firstName": "William",
      "lastName": "Amos",
      "constituency": "Pontiac",
      "province": "Quebec",
      "party": "Liberal",
      "email": "William.Amos@parl.gc.ca"
    }, {
      "firstName": "Gary",
      "lastName": "Anandasangaree",
      "constituency": "Scarborough-Rouge Park",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Gary.Anandasangaree@parl.gc.ca"
    }, {
      "firstName": "David",
      "lastName": "Anderson",
      "constituency": "Cypress Hills-Grasslands",
      "province": "Saskatchewan",
      "party": "Conservative",
      "email": "David.Anderson@parl.gc.ca"
    }, {
      "firstName": "Charlie",
      "lastName": "Angus",
      "constituency": "Timmins-James Bay",
      "province": "Ontario",
      "party": "NDP",
      "email": "Charlie.Angus@parl.gc.ca"
    }, {
      "firstName": "Mel",
      "lastName": "Arnold",
      "constituency": "North Okanagan-Shuswap",
      "province": "British Columbia",
      "party": "Conservative",
      "email": "Mel.Arnold@parl.gc.ca"
    }, {
      "firstName": "Ren\u00e9",
      "lastName": "Arseneault",
      "constituency": "Madawaska-Restigouche",
      "province": "New Brunswick",
      "party": "Liberal",
      "email": "Ren\u00e9.Arseneault@parl.gc.ca"
    }, {
      "firstName": "Chandra",
      "lastName": "Arya",
      "constituency": "Nepean",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Chandra.Arya@parl.gc.ca"
    }, {
      "firstName": "Niki",
      "lastName": "Ashton",
      "constituency": "Churchill-Keewatinook Aski",
      "province": "Manitoba",
      "party": "NDP",
      "email": "Niki.Ashton@parl.gc.ca"
    }, {
      "firstName": "Robert",
      "lastName": "Aubin",
      "constituency": "Trois-Rivi\u00e8res",
      "province": "Quebec",
      "party": "NDP",
      "email": "Robert.Aubin@parl.gc.ca"
    }, {
      "firstName": "Ramez",
      "lastName": "Ayoub",
      "constituency": "Th\u00e9r\u00e8se-De Blainville",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Ramez.Ayoub@parl.gc.ca"
    }, {
      "firstName": "Vance",
      "lastName": "Badawey",
      "constituency": "Niagara Centre",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Vance.Badawey@parl.gc.ca"
    }, {
      "firstName": "Larry",
      "lastName": "Bagnell",
      "constituency": "Yukon",
      "province": "Yukon",
      "party": "Liberal",
      "email": "Larry.Bagnell@parl.gc.ca"
    }, {
      "firstName": "Navdeep",
      "lastName": "Bains",
      "constituency": "Mississauga-Malton",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Navdeep.Bains@parl.gc.ca"
    }, {
      "firstName": "John",
      "lastName": "Barlow",
      "constituency": "Foothills",
      "province": "Alberta",
      "party": "Conservative",
      "email": "John.Barlow@parl.gc.ca"
    }, {
      "firstName": "Xavier",
      "lastName": "Barsalou-Duval",
      "constituency": "Pierre-Boucher-Les Patriotes-Verch\u00e8res",
      "province": "Quebec",
      "party": "Bloc Qu\u00e9b\u00e9cois",
      "email": "Xavier.Barsalou-Duval@parl.gc.ca"
    }, {
      "firstName": "Frank",
      "lastName": "Baylis",
      "constituency": "Pierrefonds-Dollard",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Frank.Baylis@parl.gc.ca"
    }, {
      "firstName": "Mario",
      "lastName": "Beaulieu",
      "constituency": "La Pointe-de-l'\u00cele",
      "province": "Quebec",
      "party": "Bloc Qu\u00e9b\u00e9cois",
      "email": "Mario.Beaulieu@parl.gc.ca"
    }, {
      "firstName": "Terry",
      "lastName": "Beech",
      "constituency": "Burnaby North-Seymour",
      "province": "British Columbia",
      "party": "Liberal",
      "email": "Terry.Beech@parl.gc.ca"
    }, {
      "firstName": "Carolyn",
      "lastName": "Bennett",
      "constituency": "Toronto-St. Paul's",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Carolyn.Bennett@parl.gc.ca"
    }, {
      "firstName": "Sheri",
      "lastName": "Benson",
      "constituency": "Saskatoon West",
      "province": "Saskatchewan",
      "party": "NDP",
      "email": "Sheri.Benson@parl.gc.ca"
    }, {
      "firstName": "Candice",
      "lastName": "Bergen",
      "constituency": "Portage-Lisgar",
      "province": "Manitoba",
      "party": "Conservative",
      "email": "Candice.Bergen@parl.gc.ca"
    }, {
      "firstName": "Maxime",
      "lastName": "Bernier",
      "constituency": "Beauce",
      "province": "Quebec",
      "party": "Conservative",
      "email": "Maxime.Bernier@parl.gc.ca"
    }, {
      "firstName": "Luc",
      "lastName": "Berthold",
      "constituency": "M\u00e9gantic-L'\u00c9rable",
      "province": "Quebec",
      "party": "Conservative",
      "email": "Luc.Berthold@parl.gc.ca"
    }, {
      "firstName": "James",
      "lastName": "Bezan",
      "constituency": "Selkirk-Interlake-Eastman",
      "province": "Manitoba",
      "party": "Conservative",
      "email": "James.Bezan@parl.gc.ca"
    }, {
      "firstName": "Marie-Claude",
      "lastName": "Bibeau",
      "constituency": "Compton-Stanstead",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Marie-Claude.Bibeau@parl.gc.ca"
    }, {
      "firstName": "Chris",
      "lastName": "Bittle",
      "constituency": "St. Catharines",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Chris.Bittle@parl.gc.ca"
    }, {
      "firstName": "Daniel",
      "lastName": "Blaikie",
      "constituency": "Elmwood-Transcona",
      "province": "Manitoba",
      "party": "NDP",
      "email": "Daniel.Blaikie@parl.gc.ca"
    }, {
      "firstName": "Bill",
      "lastName": "Blair",
      "constituency": "Scarborough Southwest",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Bill.Blair@parl.gc.ca"
    }, {
      "firstName": "Rachel",
      "lastName": "Blaney",
      "constituency": "North Island-Powell River",
      "province": "British Columbia",
      "party": "NDP",
      "email": "Rachel.Blaney@parl.gc.ca"
    }, {
      "firstName": "Steven",
      "lastName": "Blaney",
      "constituency": "Bellechasse-Les Etchemins-L\u00e9vis",
      "province": "Quebec",
      "party": "Conservative",
      "email": "Steven.Blaney@parl.gc.ca"
    }, {
      "firstName": "Kelly",
      "lastName": "Block",
      "constituency": "Carlton Trail-Eagle Creek",
      "province": "Saskatchewan",
      "party": "Conservative",
      "email": "Kelly.Block@parl.gc.ca"
    }, {
      "firstName": "Randy",
      "lastName": "Boissonnault",
      "constituency": "Edmonton Centre",
      "province": "Alberta",
      "party": "Liberal",
      "email": "Randy.Boissonnault@parl.gc.ca"
    }, {
      "firstName": "Mike",
      "lastName": "Bossio",
      "constituency": "Hastings-Lennox and Addington",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Mike.Bossio@parl.gc.ca"
    }, {
      "firstName": "Sylvie",
      "lastName": "Boucher",
      "constituency": "Beauport-C\u00f4te-de-Beaupr\u00e9-\u00cele d'Orl\u00e9ans-Charlevoix",
      "province": "Quebec",
      "party": "Conservative",
      "email": "Sylvie.Boucher@parl.gc.ca"
    }, {
      "firstName": "Michel",
      "lastName": "Boudrias",
      "constituency": "Terrebonne",
      "province": "Quebec",
      "party": "Bloc Qu\u00e9b\u00e9cois",
      "email": "Michel.Boudrias@parl.gc.ca"
    }, {
      "firstName": "Alexandre",
      "lastName": "Boulerice",
      "constituency": "Rosemont-La Petite-Patrie",
      "province": "Quebec",
      "party": "NDP",
      "email": "Alexandre.Boulerice@parl.gc.ca"
    }, {
      "firstName": "Marjolaine",
      "lastName": "Boutin-Sweet",
      "constituency": "Hochelaga",
      "province": "Quebec",
      "party": "NDP",
      "email": "Marjolaine.Boutin-Sweet@parl.gc.ca"
    }, {
      "firstName": "John",
      "lastName": "Brassard",
      "constituency": "Barrie-Innisfil",
      "province": "Ontario",
      "party": "Conservative",
      "email": "John.Brassard@parl.gc.ca"
    }, {
      "firstName": "Bob",
      "lastName": "Bratina",
      "constituency": "Hamilton East-Stoney Creek",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Bob.Bratina@parl.gc.ca"
    }, {
      "firstName": "Pierre",
      "lastName": "Breton",
      "constituency": "Shefford",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Pierre.Breton@parl.gc.ca"
    }, {
      "firstName": "Scott",
      "lastName": "Brison",
      "constituency": "Kings-Hants",
      "province": "Nova Scotia",
      "party": "Liberal",
      "email": "Scott.Brison@parl.gc.ca"
    }, {
      "firstName": "Ruth Ellen",
      "lastName": "Brosseau",
      "constituency": "Berthier-Maskinong\u00e9",
      "province": "Quebec",
      "party": "NDP",
      "email": "Ruth Ellen.Brosseau@parl.gc.ca"
    }, {
      "firstName": "Gordon",
      "lastName": "Brown",
      "constituency": "Leeds-Grenville-Thousand Islands and Rideau Lakes",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Gordon.Brown@parl.gc.ca"
    }, {
      "firstName": "Celina",
      "lastName": "Caesar-Chavannes",
      "constituency": "Whitby",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Celina.Caesar-Chavannes@parl.gc.ca"
    }, {
      "firstName": "Blaine",
      "lastName": "Calkins",
      "constituency": "Red Deer-Lacombe",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Blaine.Calkins@parl.gc.ca"
    }, {
      "firstName": "Richard",
      "lastName": "Cannings",
      "constituency": "South Okanagan-West Kootenay",
      "province": "British Columbia",
      "party": "NDP",
      "email": "Richard.Cannings@parl.gc.ca"
    }, {
      "firstName": "Guy",
      "lastName": "Caron",
      "constituency": "Rimouski-Neigette-T\u00e9miscouata-Les Basques",
      "province": "Quebec",
      "party": "NDP",
      "email": "Guy.Caron@parl.gc.ca"
    }, {
      "firstName": "Jim",
      "lastName": "Carr",
      "constituency": "Winnipeg South Centre",
      "province": "Manitoba",
      "party": "Liberal",
      "email": "Jim.Carr@parl.gc.ca"
    }, {
      "firstName": "Colin",
      "lastName": "Carrie",
      "constituency": "Oshawa",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Colin.Carrie@parl.gc.ca"
    }, {
      "firstName": "Bill",
      "lastName": "Casey",
      "constituency": "Cumberland-Colchester",
      "province": "Nova Scotia",
      "party": "Liberal",
      "email": "Bill.Casey@parl.gc.ca"
    }, {
      "firstName": "Sean",
      "lastName": "Casey",
      "constituency": "Charlottetown",
      "province": "Prince Edward Island",
      "party": "Liberal",
      "email": "Sean.Casey@parl.gc.ca"
    }, {
      "firstName": "Bardish",
      "lastName": "Chagger",
      "constituency": "Waterloo",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Bardish.Chagger@parl.gc.ca"
    }, {
      "firstName": "Fran\u00e7ois-Philippe",
      "lastName": "Champagne",
      "constituency": "Saint-Maurice-Champlain",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Fran\u00e7ois-Philippe.Champagne@parl.gc.ca"
    }, {
      "firstName": "Arnold",
      "lastName": "Chan",
      "constituency": "Scarborough-Agincourt",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Arnold.Chan@parl.gc.ca"
    }, {
      "firstName": "Shaun",
      "lastName": "Chen",
      "constituency": "Scarborough North",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Shaun.Chen@parl.gc.ca"
    }, {
      "firstName": "Michael",
      "lastName": "Chong",
      "constituency": "Wellington-Halton Hills",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Michael.Chong@parl.gc.ca"
    }, {
      "firstName": "Fran\u00e7ois",
      "lastName": "Choquette",
      "constituency": "Drummond",
      "province": "Quebec",
      "party": "NDP",
      "email": "Fran\u00e7ois.Choquette@parl.gc.ca"
    }, {
      "firstName": "David",
      "lastName": "Christopherson",
      "constituency": "Hamilton Centre",
      "province": "Ontario",
      "party": "NDP",
      "email": "David.Christopherson@parl.gc.ca"
    }, {
      "firstName": "Alupa",
      "lastName": "Clarke",
      "constituency": "Beauport-Limoilou",
      "province": "Quebec",
      "party": "Conservative",
      "email": "Alupa.Clarke@parl.gc.ca"
    }, {
      "firstName": "Tony",
      "lastName": "Clement",
      "constituency": "Parry Sound-Muskoka",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Tony.Clement@parl.gc.ca"
    }, {
      "firstName": "Michael",
      "lastName": "Cooper",
      "constituency": "St. Albert-Edmonton",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Michael.Cooper@parl.gc.ca"
    }, {
      "firstName": "Serge",
      "lastName": "Cormier",
      "constituency": "Acadie-Bathurst",
      "province": "New Brunswick",
      "party": "Liberal",
      "email": "Serge.Cormier@parl.gc.ca"
    }, {
      "firstName": "Nathan",
      "lastName": "Cullen",
      "constituency": "Skeena-Bulkley Valley",
      "province": "British Columbia",
      "party": "NDP",
      "email": "Nathan.Cullen@parl.gc.ca"
    }, {
      "firstName": "Rodger",
      "lastName": "Cuzner",
      "constituency": "Cape Breton-Canso",
      "province": "Nova Scotia",
      "party": "Liberal",
      "email": "Rodger.Cuzner@parl.gc.ca"
    }, {
      "firstName": "Julie",
      "lastName": "Dabrusin",
      "constituency": "Toronto-Danforth",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Julie.Dabrusin@parl.gc.ca"
    }, {
      "firstName": "Pam",
      "lastName": "Damoff",
      "constituency": "Oakville North-Burlington",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Pam.Damoff@parl.gc.ca"
    }, {
      "firstName": "Don",
      "lastName": "Davies",
      "constituency": "Vancouver Kingsway",
      "province": "British Columbia",
      "party": "NDP",
      "email": "Don.Davies@parl.gc.ca"
    }, {
      "firstName": "Matt",
      "lastName": "DeCourcey",
      "constituency": "Fredericton",
      "province": "New Brunswick",
      "party": "Liberal",
      "email": "Matt.DeCourcey@parl.gc.ca"
    }, {
      "firstName": "G\u00e9rard",
      "lastName": "Deltell",
      "constituency": "Louis-Saint-Laurent",
      "province": "Quebec",
      "party": "Conservative",
      "email": "G\u00e9rard.Deltell@parl.gc.ca"
    }, {
      "firstName": "Sukh",
      "lastName": "Dhaliwal",
      "constituency": "Surrey-Newton",
      "province": "British Columbia",
      "party": "Liberal",
      "email": "Sukh.Dhaliwal@parl.gc.ca"
    }, {
      "firstName": "Anju",
      "lastName": "Dhillon",
      "constituency": "Dorval-Lachine-LaSalle",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Anju.Dhillon@parl.gc.ca"
    }, {
      "firstName": "Nicola",
      "lastName": "Di Iorio",
      "constituency": "Saint-L\u00e9onard-Saint-Michel",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Nicola.Di Iorio@parl.gc.ca"
    }, {
      "firstName": "Kerry",
      "lastName": "Diotte",
      "constituency": "Edmonton Griesbach",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Kerry.Diotte@parl.gc.ca"
    }, {
      "firstName": "Todd",
      "lastName": "Doherty",
      "constituency": "Cariboo-Prince George",
      "province": "British Columbia",
      "party": "Conservative",
      "email": "Todd.Doherty@parl.gc.ca"
    }, {
      "firstName": "Fin",
      "lastName": "Donnelly",
      "constituency": "Port Moody-Coquitlam",
      "province": "British Columbia",
      "party": "NDP",
      "email": "Fin.Donnelly@parl.gc.ca"
    }, {
      "firstName": "Earl",
      "lastName": "Dreeshen",
      "constituency": "Red Deer-Mountain View",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Earl.Dreeshen@parl.gc.ca"
    }, {
      "firstName": "Francis",
      "lastName": "Drouin",
      "constituency": "Glengarry-Prescott-Russell",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Francis.Drouin@parl.gc.ca"
    }, {
      "firstName": "Matthew",
      "lastName": "Dub\u00e9",
      "constituency": "Beloeil-Chambly",
      "province": "Quebec",
      "party": "NDP",
      "email": "Matthew.Dub\u00e9@parl.gc.ca"
    }, {
      "firstName": "Emmanuel",
      "lastName": "Dubourg",
      "constituency": "Bourassa",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Emmanuel.Dubourg@parl.gc.ca"
    }, {
      "firstName": "Jean-Yves",
      "lastName": "Duclos",
      "constituency": "Qu\u00e9bec",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Jean-Yves.Duclos@parl.gc.ca"
    }, {
      "firstName": "Terry",
      "lastName": "Duguid",
      "constituency": "Winnipeg South",
      "province": "Manitoba",
      "party": "Liberal",
      "email": "Terry.Duguid@parl.gc.ca"
    }, {
      "firstName": "Kirsty",
      "lastName": "Duncan",
      "constituency": "Etobicoke North",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Kirsty.Duncan@parl.gc.ca"
    }, {
      "firstName": "Linda",
      "lastName": "Duncan",
      "constituency": "Edmonton Strathcona",
      "province": "Alberta",
      "party": "NDP",
      "email": "Linda.Duncan@parl.gc.ca"
    }, {
      "firstName": "Pierre-Luc",
      "lastName": "Dusseault",
      "constituency": "Sherbrooke",
      "province": "Quebec",
      "party": "NDP",
      "email": "Pierre-Luc.Dusseault@parl.gc.ca"
    }, {
      "firstName": "Scott",
      "lastName": "Duvall",
      "constituency": "Hamilton Mountain",
      "province": "Ontario",
      "party": "NDP",
      "email": "Scott.Duvall@parl.gc.ca"
    }, {
      "firstName": "Julie",
      "lastName": "Dzerowicz",
      "constituency": "Davenport",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Julie.Dzerowicz@parl.gc.ca"
    }, {
      "firstName": "Wayne",
      "lastName": "Easter",
      "constituency": "Malpeque",
      "province": "Prince Edward Island",
      "party": "Liberal",
      "email": "Wayne.Easter@parl.gc.ca"
    }, {
      "firstName": "Jim",
      "lastName": "Eglinski",
      "constituency": "Yellowhead",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Jim.Eglinski@parl.gc.ca"
    }, {
      "firstName": "Ali",
      "lastName": "Ehsassi",
      "constituency": "Willowdale",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Ali.Ehsassi@parl.gc.ca"
    }, {
      "firstName": "Fay\u00e7al",
      "lastName": "El-Khoury",
      "constituency": "Laval-Les \u00celes",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Fay\u00e7al.El-Khoury@parl.gc.ca"
    }, {
      "firstName": "Neil",
      "lastName": "Ellis",
      "constituency": "Bay of Quinte",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Neil.Ellis@parl.gc.ca"
    }, {
      "firstName": "Nathaniel",
      "lastName": "Erskine-Smith",
      "constituency": "Beaches-East York",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Nathaniel.Erskine-Smith@parl.gc.ca"
    }, {
      "firstName": "Mark",
      "lastName": "Eyking",
      "constituency": "Sydney-Victoria",
      "province": "Nova Scotia",
      "party": "Liberal",
      "email": "Mark.Eyking@parl.gc.ca"
    }, {
      "firstName": "Doug",
      "lastName": "Eyolfson",
      "constituency": "Charleswood-St. James-Assiniboia-Headingley",
      "province": "Manitoba",
      "party": "Liberal",
      "email": "Doug.Eyolfson@parl.gc.ca"
    }, {
      "firstName": "Ted",
      "lastName": "Falk",
      "constituency": "Provencher",
      "province": "Manitoba",
      "party": "Conservative",
      "email": "Ted.Falk@parl.gc.ca"
    }, {
      "firstName": "Ed",
      "lastName": "Fast",
      "constituency": "Abbotsford",
      "province": "British Columbia",
      "party": "Conservative",
      "email": "Ed.Fast@parl.gc.ca"
    }, {
      "firstName": "Greg",
      "lastName": "Fergus",
      "constituency": "Hull-Aylmer",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Greg.Fergus@parl.gc.ca"
    }, {
      "firstName": "Andy",
      "lastName": "Fillmore",
      "constituency": "Halifax",
      "province": "Nova Scotia",
      "party": "Liberal",
      "email": "Andy.Fillmore@parl.gc.ca"
    }, {
      "firstName": "Diane",
      "lastName": "Finley",
      "constituency": "Haldimand-Norfolk",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Diane.Finley@parl.gc.ca"
    }, {
      "firstName": "Pat",
      "lastName": "Finnigan",
      "constituency": "Miramichi-Grand Lake",
      "province": "New Brunswick",
      "party": "Liberal",
      "email": "Pat.Finnigan@parl.gc.ca"
    }, {
      "firstName": "Darren",
      "lastName": "Fisher",
      "constituency": "Dartmouth-Cole Harbour",
      "province": "Nova Scotia",
      "party": "Liberal",
      "email": "Darren.Fisher@parl.gc.ca"
    }, {
      "firstName": "Peter",
      "lastName": "Fonseca",
      "constituency": "Mississauga East-Cooksville",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Peter.Fonseca@parl.gc.ca"
    }, {
      "firstName": "Judy",
      "lastName": "Foote",
      "constituency": "Bonavista-Burin-Trinity",
      "province": "Newfoundland and Labrador",
      "party": "Liberal",
      "email": "Judy.Foote@parl.gc.ca"
    }, {
      "firstName": "Rh\u00e9al",
      "lastName": "Fortin",
      "constituency": "Rivi\u00e8re-du-Nord",
      "province": "Quebec",
      "party": "Bloc Qu\u00e9b\u00e9cois",
      "email": "Rh\u00e9al.Fortin@parl.gc.ca"
    }, {
      "firstName": "Peter",
      "lastName": "Fragiskatos",
      "constituency": "London North Centre",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Peter.Fragiskatos@parl.gc.ca"
    }, {
      "firstName": "Colin",
      "lastName": "Fraser",
      "constituency": "West Nova",
      "province": "Nova Scotia",
      "party": "Liberal",
      "email": "Colin.Fraser@parl.gc.ca"
    }, {
      "firstName": "Sean",
      "lastName": "Fraser",
      "constituency": "Central Nova",
      "province": "Nova Scotia",
      "party": "Liberal",
      "email": "Sean.Fraser@parl.gc.ca"
    }, {
      "firstName": "Chrystia",
      "lastName": "Freeland",
      "constituency": "University-Rosedale",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Chrystia.Freeland@parl.gc.ca"
    }, {
      "firstName": "Hedy",
      "lastName": "Fry",
      "constituency": "Vancouver Centre",
      "province": "British Columbia",
      "party": "Liberal",
      "email": "Hedy.Fry@parl.gc.ca"
    }, {
      "firstName": "Stephen",
      "lastName": "Fuhr",
      "constituency": "Kelowna-Lake Country",
      "province": "British Columbia",
      "party": "Liberal",
      "email": "Stephen.Fuhr@parl.gc.ca"
    }, {
      "firstName": "Cheryl",
      "lastName": "Gallant",
      "constituency": "Renfrew-Nipissing-Pembroke",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Cheryl.Gallant@parl.gc.ca"
    }, {
      "firstName": "Marc",
      "lastName": "Garneau",
      "constituency": "Notre-Dame-de-Gr\u00e2ce-Westmount",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Marc.Garneau@parl.gc.ca"
    }, {
      "firstName": "Randall",
      "lastName": "Garrison",
      "constituency": "Esquimalt-Saanich-Sooke",
      "province": "British Columbia",
      "party": "NDP",
      "email": "Randall.Garrison@parl.gc.ca"
    }, {
      "firstName": "Bernard",
      "lastName": "G\u00e9n\u00e9reux",
      "constituency": "Montmagny-L'Islet-Kamouraska-Rivi\u00e8re-du-Loup",
      "province": "Quebec",
      "party": "Conservative",
      "email": "Bernard.G\u00e9n\u00e9reux@parl.gc.ca"
    }, {
      "firstName": "Garnett",
      "lastName": "Genuis",
      "constituency": "Sherwood Park-Fort Saskatchewan",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Garnett.Genuis@parl.gc.ca"
    }, {
      "firstName": "Mark",
      "lastName": "Gerretsen",
      "constituency": "Kingston and the Islands",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Mark.Gerretsen@parl.gc.ca"
    }, {
      "firstName": "Maril\u00e8ne",
      "lastName": "Gill",
      "constituency": "Manicouagan",
      "province": "Quebec",
      "party": "Bloc Qu\u00e9b\u00e9cois",
      "email": "Maril\u00e8ne.Gill@parl.gc.ca"
    }, {
      "firstName": "Marilyn",
      "lastName": "Gladu",
      "constituency": "Sarnia-Lambton",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Marilyn.Gladu@parl.gc.ca"
    }, {
      "firstName": "Jo\u00ebl",
      "lastName": "Godin",
      "constituency": "Portneuf-Jacques-Cartier",
      "province": "Quebec",
      "party": "Conservative",
      "email": "Jo\u00ebl.Godin@parl.gc.ca"
    }, {
      "firstName": "Pam",
      "lastName": "Goldsmith-Jones",
      "constituency": "West Vancouver-Sunshine Coast-Sea to Sky Country",
      "province": "British Columbia",
      "party": "Liberal",
      "email": "Pam.Goldsmith-Jones@parl.gc.ca"
    }, {
      "firstName": "Ralph",
      "lastName": "Goodale",
      "constituency": "Regina-Wascana",
      "province": "Saskatchewan",
      "party": "Liberal",
      "email": "Ralph.Goodale@parl.gc.ca"
    }, {
      "firstName": "Karina",
      "lastName": "Gould",
      "constituency": "Burlington",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Karina.Gould@parl.gc.ca"
    }, {
      "firstName": "Jacques",
      "lastName": "Gourde",
      "constituency": "L\u00e9vis-Lotbini\u00e8re",
      "province": "Quebec",
      "party": "Conservative",
      "email": "Jacques.Gourde@parl.gc.ca"
    }, {
      "firstName": "David de Burgh",
      "lastName": "Graham",
      "constituency": "Laurentides-Labelle",
      "province": "Quebec",
      "party": "Liberal",
      "email": "David de Burgh.Graham@parl.gc.ca"
    }, {
      "firstName": "Raj",
      "lastName": "Grewal",
      "constituency": "Brampton East",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Raj.Grewal@parl.gc.ca"
    }, {
      "firstName": "Patty",
      "lastName": "Hajdu",
      "constituency": "Thunder Bay-Superior North",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Patty.Hajdu@parl.gc.ca"
    }, {
      "firstName": "Cheryl",
      "lastName": "Hardcastle",
      "constituency": "Windsor-Tecumseh",
      "province": "Ontario",
      "party": "NDP",
      "email": "Cheryl.Hardcastle@parl.gc.ca"
    }, {
      "firstName": "Rachael",
      "lastName": "Harder",
      "constituency": "Lethbridge",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Rachael.Harder@parl.gc.ca"
    }, {
      "firstName": "Ken",
      "lastName": "Hardie",
      "constituency": "Fleetwood-Port Kells",
      "province": "British Columbia",
      "party": "Liberal",
      "email": "Ken.Hardie@parl.gc.ca"
    }, {
      "firstName": "T.J.",
      "lastName": "Harvey",
      "constituency": "Tobique-Mactaquac",
      "province": "New Brunswick",
      "party": "Liberal",
      "email": "T.J..Harvey@parl.gc.ca"
    }, {
      "firstName": "Kent",
      "lastName": "Hehr",
      "constituency": "Calgary Centre",
      "province": "Alberta",
      "party": "Liberal",
      "email": "Kent.Hehr@parl.gc.ca"
    }, {
      "firstName": "Randy",
      "lastName": "Hoback",
      "constituency": "Prince Albert",
      "province": "Saskatchewan",
      "party": "Conservative",
      "email": "Randy.Hoback@parl.gc.ca"
    }, {
      "firstName": "Mark",
      "lastName": "Holland",
      "constituency": "Ajax",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Mark.Holland@parl.gc.ca"
    }, {
      "firstName": "Anthony",
      "lastName": "Housefather",
      "constituency": "Mount Royal",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Anthony.Housefather@parl.gc.ca"
    }, {
      "firstName": "Carol",
      "lastName": "Hughes",
      "constituency": "Algoma-Manitoulin-Kapuskasing",
      "province": "Ontario",
      "party": "NDP",
      "email": "Carol.Hughes@parl.gc.ca"
    }, {
      "firstName": "Ahmed",
      "lastName": "Hussen",
      "constituency": "York South-Weston",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Ahmed.Hussen@parl.gc.ca"
    }, {
      "firstName": "Gudie",
      "lastName": "Hutchings",
      "constituency": "Long Range Mountains",
      "province": "Newfoundland and Labrador",
      "party": "Liberal",
      "email": "Gudie.Hutchings@parl.gc.ca"
    }, {
      "firstName": "Angelo",
      "lastName": "Iacono",
      "constituency": "Alfred-Pellan",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Angelo.Iacono@parl.gc.ca"
    }, {
      "firstName": "Matt",
      "lastName": "Jeneroux",
      "constituency": "Edmonton Riverbend",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Matt.Jeneroux@parl.gc.ca"
    }, {
      "firstName": "Gord",
      "lastName": "Johns",
      "constituency": "Courtenay-Alberni",
      "province": "British Columbia",
      "party": "NDP",
      "email": "Gord.Johns@parl.gc.ca"
    }, {
      "firstName": "Georgina",
      "lastName": "Jolibois",
      "constituency": "Desneth\u00e9-Missinippi-Churchill River",
      "province": "Saskatchewan",
      "party": "NDP",
      "email": "Georgina.Jolibois@parl.gc.ca"
    }, {
      "firstName": "M\u00e9lanie",
      "lastName": "Joly",
      "constituency": "Ahuntsic-Cartierville",
      "province": "Quebec",
      "party": "Liberal",
      "email": "M\u00e9lanie.Joly@parl.gc.ca"
    }, {
      "firstName": "Yvonne",
      "lastName": "Jones",
      "constituency": "Labrador",
      "province": "Newfoundland and Labrador",
      "party": "Liberal",
      "email": "Yvonne.Jones@parl.gc.ca"
    }, {
      "firstName": "Bernadette",
      "lastName": "Jordan",
      "constituency": "South Shore-St. Margarets",
      "province": "Nova Scotia",
      "party": "Liberal",
      "email": "Bernadette.Jordan@parl.gc.ca"
    }, {
      "firstName": "Majid",
      "lastName": "Jowhari",
      "constituency": "Richmond Hill",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Majid.Jowhari@parl.gc.ca"
    }, {
      "firstName": "Peter",
      "lastName": "Julian",
      "constituency": "New Westminster-Burnaby",
      "province": "British Columbia",
      "party": "NDP",
      "email": "Peter.Julian@parl.gc.ca"
    }, {
      "firstName": "Darshan Singh",
      "lastName": "Kang",
      "constituency": "Calgary Skyview",
      "province": "Alberta",
      "party": "Liberal",
      "email": "Darshan Singh.Kang@parl.gc.ca"
    }, {
      "firstName": "Pat",
      "lastName": "Kelly",
      "constituency": "Calgary Rocky Ridge",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Pat.Kelly@parl.gc.ca"
    }, {
      "firstName": "Peter",
      "lastName": "Kent",
      "constituency": "Thornhill",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Peter.Kent@parl.gc.ca"
    }, {
      "firstName": "Iqra",
      "lastName": "Khalid",
      "constituency": "Mississauga-Erin Mills",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Iqra.Khalid@parl.gc.ca"
    }, {
      "firstName": "Kamal",
      "lastName": "Khera",
      "constituency": "Brampton West",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Kamal.Khera@parl.gc.ca"
    }, {
      "firstName": "Robert",
      "lastName": "Kitchen",
      "constituency": "Souris-Moose Mountain",
      "province": "Saskatchewan",
      "party": "Conservative",
      "email": "Robert.Kitchen@parl.gc.ca"
    }, {
      "firstName": "Tom",
      "lastName": "Kmiec",
      "constituency": "Calgary Shepard",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Tom.Kmiec@parl.gc.ca"
    }, {
      "firstName": "Jenny",
      "lastName": "Kwan",
      "constituency": "Vancouver East",
      "province": "British Columbia",
      "party": "NDP",
      "email": "Jenny.Kwan@parl.gc.ca"
    }, {
      "firstName": "Mike",
      "lastName": "Lake",
      "constituency": "Edmonton-Wetaskiwin",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Mike.Lake@parl.gc.ca"
    }, {
      "firstName": "David",
      "lastName": "Lametti",
      "constituency": "LaSalle-\u00c9mard-Verdun",
      "province": "Quebec",
      "party": "Liberal",
      "email": "David.Lametti@parl.gc.ca"
    }, {
      "firstName": "Kevin",
      "lastName": "Lamoureux",
      "constituency": "Winnipeg North",
      "province": "Manitoba",
      "party": "Liberal",
      "email": "Kevin.Lamoureux@parl.gc.ca"
    }, {
      "firstName": "Linda",
      "lastName": "Lapointe",
      "constituency": "Rivi\u00e8re-des-Mille-\u00celes",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Linda.Lapointe@parl.gc.ca"
    }, {
      "firstName": "Guy",
      "lastName": "Lauzon",
      "constituency": "Stormont-Dundas-South Glengarry",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Guy.Lauzon@parl.gc.ca"
    }, {
      "firstName": "St\u00e9phane",
      "lastName": "Lauzon",
      "constituency": "Argenteuil-La Petite-Nation",
      "province": "Quebec",
      "party": "Liberal",
      "email": "St\u00e9phane.Lauzon@parl.gc.ca"
    }, {
      "firstName": "H\u00e9l\u00e8ne",
      "lastName": "Laverdi\u00e8re",
      "constituency": "Laurier-Sainte-Marie",
      "province": "Quebec",
      "party": "NDP",
      "email": "H\u00e9l\u00e8ne.Laverdi\u00e8re@parl.gc.ca"
    }, {
      "firstName": "Denis",
      "lastName": "Lebel",
      "constituency": "Lac-Saint-Jean",
      "province": "Quebec",
      "party": "Conservative",
      "email": "Denis.Lebel@parl.gc.ca"
    }, {
      "firstName": "Dominic",
      "lastName": "LeBlanc",
      "constituency": "Beaus\u00e9jour",
      "province": "New Brunswick",
      "party": "Liberal",
      "email": "Dominic.LeBlanc@parl.gc.ca"
    }, {
      "firstName": "Diane",
      "lastName": "Lebouthillier",
      "constituency": "Gasp\u00e9sie-Les \u00celes-de-la-Madeleine",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Diane.Lebouthillier@parl.gc.ca"
    }, {
      "firstName": "Paul",
      "lastName": "Lefebvre",
      "constituency": "Sudbury",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Paul.Lefebvre@parl.gc.ca"
    }, {
      "firstName": "K. Kellie",
      "lastName": "Leitch",
      "constituency": "Simcoe-Grey",
      "province": "Ontario",
      "party": "Conservative",
      "email": "K. Kellie.Leitch@parl.gc.ca"
    }, {
      "firstName": "Denis",
      "lastName": "Lemieux",
      "constituency": "Chicoutimi-Le Fjord",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Denis.Lemieux@parl.gc.ca"
    }, {
      "firstName": "Andrew",
      "lastName": "Leslie",
      "constituency": "Orl\u00e9ans",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Andrew.Leslie@parl.gc.ca"
    }, {
      "firstName": "Michael",
      "lastName": "Levitt",
      "constituency": "York Centre",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Michael.Levitt@parl.gc.ca"
    }, {
      "firstName": "Ron",
      "lastName": "Liepert",
      "constituency": "Calgary Signal Hill",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Ron.Liepert@parl.gc.ca"
    }, {
      "firstName": "Jo\u00ebl",
      "lastName": "Lightbound",
      "constituency": "Louis-H\u00e9bert",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Jo\u00ebl.Lightbound@parl.gc.ca"
    }, {
      "firstName": "Ben",
      "lastName": "Lobb",
      "constituency": "Huron-Bruce",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Ben.Lobb@parl.gc.ca"
    }, {
      "firstName": "Alaina",
      "lastName": "Lockhart",
      "constituency": "Fundy Royal",
      "province": "New Brunswick",
      "party": "Liberal",
      "email": "Alaina.Lockhart@parl.gc.ca"
    }, {
      "firstName": "Wayne",
      "lastName": "Long",
      "constituency": "Saint John-Rothesay",
      "province": "New Brunswick",
      "party": "Liberal",
      "email": "Wayne.Long@parl.gc.ca"
    }, {
      "firstName": "Lloyd",
      "lastName": "Longfield",
      "constituency": "Guelph",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Lloyd.Longfield@parl.gc.ca"
    }, {
      "firstName": "Karen",
      "lastName": "Ludwig",
      "constituency": "New Brunswick Southwest",
      "province": "New Brunswick",
      "party": "Liberal",
      "email": "Karen.Ludwig@parl.gc.ca"
    }, {
      "firstName": "Tom",
      "lastName": "Lukiwski",
      "constituency": "Moose Jaw-Lake Centre-Lanigan",
      "province": "Saskatchewan",
      "party": "Conservative",
      "email": "Tom.Lukiwski@parl.gc.ca"
    }, {
      "firstName": "Lawrence",
      "lastName": "MacAulay",
      "constituency": "Cardigan",
      "province": "Prince Edward Island",
      "party": "Liberal",
      "email": "Lawrence.MacAulay@parl.gc.ca"
    }, {
      "firstName": "Alistair",
      "lastName": "MacGregor",
      "constituency": "Cowichan-Malahat-Langford",
      "province": "British Columbia",
      "party": "NDP",
      "email": "Alistair.MacGregor@parl.gc.ca"
    }, {
      "firstName": "Dave",
      "lastName": "MacKenzie",
      "constituency": "Oxford",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Dave.MacKenzie@parl.gc.ca"
    }, {
      "firstName": "Steven",
      "lastName": "MacKinnon",
      "constituency": "Gatineau",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Steven.MacKinnon@parl.gc.ca"
    }, {
      "firstName": "Larry",
      "lastName": "Maguire",
      "constituency": "Brandon-Souris",
      "province": "Manitoba",
      "party": "Conservative",
      "email": "Larry.Maguire@parl.gc.ca"
    }, {
      "firstName": "Sheila",
      "lastName": "Malcolmson",
      "constituency": "Nanaimo-Ladysmith",
      "province": "British Columbia",
      "party": "NDP",
      "email": "Sheila.Malcolmson@parl.gc.ca"
    }, {
      "firstName": "James",
      "lastName": "Maloney",
      "constituency": "Etobicoke-Lakeshore",
      "province": "Ontario",
      "party": "Liberal",
      "email": "James.Maloney@parl.gc.ca"
    }, {
      "firstName": "Simon",
      "lastName": "Marcil",
      "constituency": "Mirabel",
      "province": "Quebec",
      "party": "Bloc Qu\u00e9b\u00e9cois",
      "email": "Simon.Marcil@parl.gc.ca"
    }, {
      "firstName": "Brian",
      "lastName": "Masse",
      "constituency": "Windsor West",
      "province": "Ontario",
      "party": "NDP",
      "email": "Brian.Masse@parl.gc.ca"
    }, {
      "firstName": "R\u00e9mi",
      "lastName": "Mass\u00e9",
      "constituency": "Avignon-La Mitis-Matane-Matap\u00e9dia",
      "province": "Quebec",
      "party": "Liberal",
      "email": "R\u00e9mi.Mass\u00e9@parl.gc.ca"
    }, {
      "firstName": "Irene",
      "lastName": "Mathyssen",
      "constituency": "London-Fanshawe",
      "province": "Ontario",
      "party": "NDP",
      "email": "Irene.Mathyssen@parl.gc.ca"
    }, {
      "firstName": "Bryan",
      "lastName": "May",
      "constituency": "Cambridge",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Bryan.May@parl.gc.ca"
    }, {
      "firstName": "Elizabeth",
      "lastName": "May",
      "constituency": "Saanich-Gulf Islands",
      "province": "British Columbia",
      "party": "Green",
      "email": "Elizabeth.May@parl.gc.ca"
    }, {
      "firstName": "Kelly",
      "lastName": "McCauley",
      "constituency": "Edmonton West",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Kelly.McCauley@parl.gc.ca"
    }, {
      "firstName": "Phil",
      "lastName": "McColeman",
      "constituency": "Brantford-Brant",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Phil.McColeman@parl.gc.ca"
    }, {
      "firstName": "Karen",
      "lastName": "McCrimmon",
      "constituency": "Kanata-Carleton",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Karen.McCrimmon@parl.gc.ca"
    }, {
      "firstName": "Ken",
      "lastName": "McDonald",
      "constituency": "Avalon",
      "province": "Newfoundland and Labrador",
      "party": "Liberal",
      "email": "Ken.McDonald@parl.gc.ca"
    }, {
      "firstName": "David",
      "lastName": "McGuinty",
      "constituency": "Ottawa South",
      "province": "Ontario",
      "party": "Liberal",
      "email": "David.McGuinty@parl.gc.ca"
    }, {
      "firstName": "John",
      "lastName": "McKay",
      "constituency": "Scarborough-Guildwood",
      "province": "Ontario",
      "party": "Liberal",
      "email": "John.McKay@parl.gc.ca"
    }, {
      "firstName": "Catherine",
      "lastName": "McKenna",
      "constituency": "Ottawa Centre",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Catherine.McKenna@parl.gc.ca"
    }, {
      "firstName": "Ron",
      "lastName": "McKinnon",
      "constituency": "Coquitlam-Port Coquitlam",
      "province": "British Columbia",
      "party": "Liberal",
      "email": "Ron.McKinnon@parl.gc.ca"
    }, {
      "firstName": "Cathy",
      "lastName": "McLeod",
      "constituency": "Kamloops-Thompson-Cariboo",
      "province": "British Columbia",
      "party": "Conservative",
      "email": "Cathy.McLeod@parl.gc.ca"
    }, {
      "firstName": "Michael",
      "lastName": "McLeod",
      "constituency": "Northwest Territories",
      "province": "Northwest Territories",
      "party": "Liberal",
      "email": "Michael.McLeod@parl.gc.ca"
    }, {
      "firstName": "Alexandra",
      "lastName": "Mend\u00e8s",
      "constituency": "Brossard-Saint-Lambert",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Alexandra.Mend\u00e8s@parl.gc.ca"
    }, {
      "firstName": "Marco",
      "lastName": "Mendicino",
      "constituency": "Eglinton-Lawrence",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Marco.Mendicino@parl.gc.ca"
    }, {
      "firstName": "MaryAnn",
      "lastName": "Mihychuk",
      "constituency": "Kildonan-St. Paul",
      "province": "Manitoba",
      "party": "Liberal",
      "email": "MaryAnn.Mihychuk@parl.gc.ca"
    }, {
      "firstName": "Larry",
      "lastName": "Miller",
      "constituency": "Bruce-Grey-Owen Sound",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Larry.Miller@parl.gc.ca"
    }, {
      "firstName": "Marc",
      "lastName": "Miller",
      "constituency": "Ville-Marie-Le Sud-Ouest-\u00cele-des-Soeurs",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Marc.Miller@parl.gc.ca"
    }, {
      "firstName": "Maryam",
      "lastName": "Monsef",
      "constituency": "Peterborough-Kawartha",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Maryam.Monsef@parl.gc.ca"
    }, {
      "firstName": "Christine",
      "lastName": "Moore",
      "constituency": "Abitibi-T\u00e9miscamingue",
      "province": "Quebec",
      "party": "NDP",
      "email": "Christine.Moore@parl.gc.ca"
    }, {
      "firstName": "Bill",
      "lastName": "Morneau",
      "constituency": "Toronto Centre",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Bill.Morneau@parl.gc.ca"
    }, {
      "firstName": "Robert",
      "lastName": "Morrissey",
      "constituency": "Egmont",
      "province": "Prince Edward Island",
      "party": "Liberal",
      "email": "Robert.Morrissey@parl.gc.ca"
    }, {
      "firstName": "Glen",
      "lastName": "Motz",
      "constituency": "Medicine Hat-Cardston-Warner",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Glen.Motz@parl.gc.ca"
    }, {
      "firstName": "Thomas",
      "lastName": "Mulcair",
      "constituency": "Outremont",
      "province": "Quebec",
      "party": "NDP",
      "email": "Thomas.Mulcair@parl.gc.ca"
    }, {
      "firstName": "Joyce",
      "lastName": "Murray",
      "constituency": "Vancouver Quadra",
      "province": "British Columbia",
      "party": "Liberal",
      "email": "Joyce.Murray@parl.gc.ca"
    }, {
      "firstName": "Pierre",
      "lastName": "Nantel",
      "constituency": "Longueuil-Saint-Hubert",
      "province": "Quebec",
      "party": "NDP",
      "email": "Pierre.Nantel@parl.gc.ca"
    }, {
      "firstName": "Eva",
      "lastName": "Nassif",
      "constituency": "Vimy",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Eva.Nassif@parl.gc.ca"
    }, {
      "firstName": "John",
      "lastName": "Nater",
      "constituency": "Perth-Wellington",
      "province": "Ontario",
      "party": "Conservative",
      "email": "John.Nater@parl.gc.ca"
    }, {
      "firstName": "Robert",
      "lastName": "Nault",
      "constituency": "Kenora",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Robert.Nault@parl.gc.ca"
    }, {
      "firstName": "Rob",
      "lastName": "Nicholson",
      "constituency": "Niagara Falls",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Rob.Nicholson@parl.gc.ca"
    }, {
      "firstName": "Alexander",
      "lastName": "Nuttall",
      "constituency": "Barrie-Springwater-Oro-Medonte",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Alexander.Nuttall@parl.gc.ca"
    }, {
      "firstName": "Deepak",
      "lastName": "Obhrai",
      "constituency": "Calgary Forest Lawn",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Deepak.Obhrai@parl.gc.ca"
    }, {
      "firstName": "Jennifer",
      "lastName": "O'Connell",
      "constituency": "Pickering-Uxbridge",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Jennifer.O'Connell@parl.gc.ca"
    }, {
      "firstName": "Robert",
      "lastName": "Oliphant",
      "constituency": "Don Valley West",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Robert.Oliphant@parl.gc.ca"
    }, {
      "firstName": "John",
      "lastName": "Oliver",
      "constituency": "Oakville",
      "province": "Ontario",
      "party": "Liberal",
      "email": "John.Oliver@parl.gc.ca"
    }, {
      "firstName": "Seamus",
      "lastName": "O'Regan",
      "constituency": "St. John's South-Mount Pearl",
      "province": "Newfoundland and Labrador",
      "party": "Liberal",
      "email": "Seamus.O'Regan@parl.gc.ca"
    }, {
      "firstName": "Erin",
      "lastName": "O'Toole",
      "constituency": "Durham",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Erin.O'Toole@parl.gc.ca"
    }, {
      "firstName": "Robert-Falcon",
      "lastName": "Ouellette",
      "constituency": "Winnipeg Centre",
      "province": "Manitoba",
      "party": "Liberal",
      "email": "Robert-Falcon.Ouellette@parl.gc.ca"
    }, {
      "firstName": "Denis",
      "lastName": "Paradis",
      "constituency": "Brome-Missisquoi",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Denis.Paradis@parl.gc.ca"
    }, {
      "firstName": "Pierre",
      "lastName": "Paul-Hus",
      "constituency": "Charlesbourg-Haute-Saint-Charles",
      "province": "Quebec",
      "party": "Conservative",
      "email": "Pierre.Paul-Hus@parl.gc.ca"
    }, {
      "firstName": "Monique",
      "lastName": "Pauz\u00e9",
      "constituency": "Repentigny",
      "province": "Quebec",
      "party": "Bloc Qu\u00e9b\u00e9cois",
      "email": "Monique.Pauz\u00e9@parl.gc.ca"
    }, {
      "firstName": "Joe",
      "lastName": "Peschisolido",
      "constituency": "Steveston-Richmond East",
      "province": "British Columbia",
      "party": "Liberal",
      "email": "Joe.Peschisolido@parl.gc.ca"
    }, {
      "firstName": "Kyle",
      "lastName": "Peterson",
      "constituency": "Newmarket-Aurora",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Kyle.Peterson@parl.gc.ca"
    }, {
      "firstName": "Ginette",
      "lastName": "Petitpas Taylor",
      "constituency": "Moncton-Riverview-Dieppe",
      "province": "New Brunswick",
      "party": "Liberal",
      "email": "Ginette.Petitpas Taylor@parl.gc.ca"
    }, {
      "firstName": "Jane",
      "lastName": "Philpott",
      "constituency": "Markham-Stouffville",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Jane.Philpott@parl.gc.ca"
    }, {
      "firstName": "Michel",
      "lastName": "Picard",
      "constituency": "Montarville",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Michel.Picard@parl.gc.ca"
    }, {
      "firstName": "Louis",
      "lastName": "Plamondon",
      "constituency": "B\u00e9cancour-Nicolet-Saurel",
      "province": "Quebec",
      "party": "Bloc Qu\u00e9b\u00e9cois",
      "email": "Louis.Plamondon@parl.gc.ca"
    }, {
      "firstName": "Pierre",
      "lastName": "Poilievre",
      "constituency": "Carleton",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Pierre.Poilievre@parl.gc.ca"
    }, {
      "firstName": "Jean-Claude",
      "lastName": "Poissant",
      "constituency": "La Prairie",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Jean-Claude.Poissant@parl.gc.ca"
    }, {
      "firstName": "Anne Minh-Thu",
      "lastName": "Quach",
      "constituency": "Salaberry-Suro\u00eet",
      "province": "Quebec",
      "party": "NDP",
      "email": "Anne Minh-Thu.Quach@parl.gc.ca"
    }, {
      "firstName": "Carla",
      "lastName": "Qualtrough",
      "constituency": "Delta",
      "province": "British Columbia",
      "party": "Liberal",
      "email": "Carla.Qualtrough@parl.gc.ca"
    }, {
      "firstName": "Lisa",
      "lastName": "Raitt",
      "constituency": "Milton",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Lisa.Raitt@parl.gc.ca"
    }, {
      "firstName": "Tracey",
      "lastName": "Ramsey",
      "constituency": "Essex",
      "province": "Ontario",
      "party": "NDP",
      "email": "Tracey.Ramsey@parl.gc.ca"
    }, {
      "firstName": "Murray",
      "lastName": "Rankin",
      "constituency": "Victoria",
      "province": "British Columbia",
      "party": "NDP",
      "email": "Murray.Rankin@parl.gc.ca"
    }, {
      "firstName": "Yasmin",
      "lastName": "Ratansi",
      "constituency": "Don Valley East",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Yasmin.Ratansi@parl.gc.ca"
    }, {
      "firstName": "Alain",
      "lastName": "Rayes",
      "constituency": "Richmond-Arthabaska",
      "province": "Quebec",
      "party": "Conservative",
      "email": "Alain.Rayes@parl.gc.ca"
    }, {
      "firstName": "Geoff",
      "lastName": "Regan",
      "constituency": "Halifax West",
      "province": "Nova Scotia",
      "party": "Liberal",
      "email": "Geoff.Regan@parl.gc.ca"
    }, {
      "firstName": "Scott",
      "lastName": "Reid",
      "constituency": "Lanark-Frontenac-Kingston",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Scott.Reid@parl.gc.ca"
    }, {
      "firstName": "Michelle",
      "lastName": "Rempel",
      "constituency": "Calgary Nose Hill",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Michelle.Rempel@parl.gc.ca"
    }, {
      "firstName": "Blake",
      "lastName": "Richards",
      "constituency": "Banff-Airdrie",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Blake.Richards@parl.gc.ca"
    }, {
      "firstName": "Jean",
      "lastName": "Rioux",
      "constituency": "Saint-Jean",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Jean.Rioux@parl.gc.ca"
    }, {
      "firstName": "Gerry",
      "lastName": "Ritz",
      "constituency": "Battlefords-Lloydminster",
      "province": "Saskatchewan",
      "party": "Conservative",
      "email": "Gerry.Ritz@parl.gc.ca"
    }, {
      "firstName": "Yves",
      "lastName": "Robillard",
      "constituency": "Marc-Aur\u00e8le-Fortin",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Yves.Robillard@parl.gc.ca"
    }, {
      "firstName": "Pablo",
      "lastName": "Rodriguez",
      "constituency": "Honor\u00e9-Mercier",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Pablo.Rodriguez@parl.gc.ca"
    }, {
      "firstName": "Sherry",
      "lastName": "Romanado",
      "constituency": "Longueuil-Charles-LeMoyne",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Sherry.Romanado@parl.gc.ca"
    }, {
      "firstName": "Anthony",
      "lastName": "Rota",
      "constituency": "Nipissing-Timiskaming",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Anthony.Rota@parl.gc.ca"
    }, {
      "firstName": "Kim",
      "lastName": "Rudd",
      "constituency": "Northumberland-Peterborough South",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Kim.Rudd@parl.gc.ca"
    }, {
      "firstName": "Dan",
      "lastName": "Ruimy",
      "constituency": "Pitt Meadows-Maple Ridge",
      "province": "British Columbia",
      "party": "Liberal",
      "email": "Dan.Ruimy@parl.gc.ca"
    }, {
      "firstName": "Don",
      "lastName": "Rusnak",
      "constituency": "Thunder Bay-Rainy River",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Don.Rusnak@parl.gc.ca"
    }, {
      "firstName": "Romeo",
      "lastName": "Saganash",
      "constituency": "Abitibi-Baie-James-Nunavik-Eeyou",
      "province": "Quebec",
      "party": "NDP",
      "email": "Romeo.Saganash@parl.gc.ca"
    }, {
      "firstName": "Ruby",
      "lastName": "Sahota",
      "constituency": "Brampton North",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Ruby.Sahota@parl.gc.ca"
    }, {
      "firstName": "Raj",
      "lastName": "Saini",
      "constituency": "Kitchener Centre",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Raj.Saini@parl.gc.ca"
    }, {
      "firstName": "Harjit S.",
      "lastName": "Sajjan",
      "constituency": "Vancouver South",
      "province": "British Columbia",
      "party": "Liberal",
      "email": "Harjit S..Sajjan@parl.gc.ca"
    }, {
      "firstName": "Darrell",
      "lastName": "Samson",
      "constituency": "Sackville-Preston-Chezzetcook",
      "province": "Nova Scotia",
      "party": "Liberal",
      "email": "Darrell.Samson@parl.gc.ca"
    }, {
      "firstName": "Ramesh",
      "lastName": "Sangha",
      "constituency": "Brampton Centre",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Ramesh.Sangha@parl.gc.ca"
    }, {
      "firstName": "Brigitte",
      "lastName": "Sansoucy",
      "constituency": "Saint-Hyacinthe-Bagot",
      "province": "Quebec",
      "party": "NDP",
      "email": "Brigitte.Sansoucy@parl.gc.ca"
    }, {
      "firstName": "Randeep",
      "lastName": "Sarai",
      "constituency": "Surrey Centre",
      "province": "British Columbia",
      "party": "Liberal",
      "email": "Randeep.Sarai@parl.gc.ca"
    }, {
      "firstName": "Bob",
      "lastName": "Saroya",
      "constituency": "Markham-Unionville",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Bob.Saroya@parl.gc.ca"
    }, {
      "firstName": "Francis",
      "lastName": "Scarpaleggia",
      "constituency": "Lac-Saint-Louis",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Francis.Scarpaleggia@parl.gc.ca"
    }, {
      "firstName": "Andrew",
      "lastName": "Scheer",
      "constituency": "Regina-Qu'Appelle",
      "province": "Saskatchewan",
      "party": "Conservative",
      "email": "Andrew.Scheer@parl.gc.ca"
    }, {
      "firstName": "Peter",
      "lastName": "Schiefke",
      "constituency": "Vaudreuil-Soulanges",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Peter.Schiefke@parl.gc.ca"
    }, {
      "firstName": "Jamie",
      "lastName": "Schmale",
      "constituency": "Haliburton-Kawartha Lakes-Brock",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Jamie.Schmale@parl.gc.ca"
    }, {
      "firstName": "Deborah",
      "lastName": "Schulte",
      "constituency": "King-Vaughan",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Deborah.Schulte@parl.gc.ca"
    }, {
      "firstName": "Marc",
      "lastName": "Serr\u00e9",
      "constituency": "Nickel Belt",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Marc.Serr\u00e9@parl.gc.ca"
    }, {
      "firstName": "Judy A.",
      "lastName": "Sgro",
      "constituency": "Humber River-Black Creek",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Judy A..Sgro@parl.gc.ca"
    }, {
      "firstName": "Brenda",
      "lastName": "Shanahan",
      "constituency": "Ch\u00e2teauguay-Lacolle",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Brenda.Shanahan@parl.gc.ca"
    }, {
      "firstName": "Terry",
      "lastName": "Sheehan",
      "constituency": "Sault Ste. Marie",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Terry.Sheehan@parl.gc.ca"
    }, {
      "firstName": "Martin",
      "lastName": "Shields",
      "constituency": "Bow River",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Martin.Shields@parl.gc.ca"
    }, {
      "firstName": "Bev",
      "lastName": "Shipley",
      "constituency": "Lambton-Kent-Middlesex",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Bev.Shipley@parl.gc.ca"
    }, {
      "firstName": "Jati",
      "lastName": "Sidhu",
      "constituency": "Mission-Matsqui-Fraser Canyon",
      "province": "British Columbia",
      "party": "Liberal",
      "email": "Jati.Sidhu@parl.gc.ca"
    }, {
      "firstName": "Sonia",
      "lastName": "Sidhu",
      "constituency": "Brampton South",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Sonia.Sidhu@parl.gc.ca"
    }, {
      "firstName": "Gagan",
      "lastName": "Sikand",
      "constituency": "Mississauga-Streetsville",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Gagan.Sikand@parl.gc.ca"
    }, {
      "firstName": "Scott",
      "lastName": "Simms",
      "constituency": "Coast of Bays-Central-Notre Dame",
      "province": "Newfoundland and Labrador",
      "party": "Liberal",
      "email": "Scott.Simms@parl.gc.ca"
    }, {
      "firstName": "Amarjeet",
      "lastName": "Sohi",
      "constituency": "Edmonton Mill Woods",
      "province": "Alberta",
      "party": "Liberal",
      "email": "Amarjeet.Sohi@parl.gc.ca"
    }, {
      "firstName": "Robert",
      "lastName": "Sopuck",
      "constituency": "Dauphin-Swan River-Neepawa",
      "province": "Manitoba",
      "party": "Conservative",
      "email": "Robert.Sopuck@parl.gc.ca"
    }, {
      "firstName": "Francesco",
      "lastName": "Sorbara",
      "constituency": "Vaughan-Woodbridge",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Francesco.Sorbara@parl.gc.ca"
    }, {
      "firstName": "Kevin",
      "lastName": "Sorenson",
      "constituency": "Battle River-Crowfoot",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Kevin.Sorenson@parl.gc.ca"
    }, {
      "firstName": "Sven",
      "lastName": "Spengemann",
      "constituency": "Mississauga-Lakeshore",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Sven.Spengemann@parl.gc.ca"
    }, {
      "firstName": "Bruce",
      "lastName": "Stanton",
      "constituency": "Simcoe North",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Bruce.Stanton@parl.gc.ca"
    }, {
      "firstName": "Gabriel",
      "lastName": "Ste-Marie",
      "constituency": "Joliette",
      "province": "Quebec",
      "party": "Bloc Qu\u00e9b\u00e9cois",
      "email": "Gabriel.Ste-Marie@parl.gc.ca"
    }, {
      "firstName": "Wayne",
      "lastName": "Stetski",
      "constituency": "Kootenay-Columbia",
      "province": "British Columbia",
      "party": "NDP",
      "email": "Wayne.Stetski@parl.gc.ca"
    }, {
      "firstName": "Kennedy",
      "lastName": "Stewart",
      "constituency": "Burnaby South",
      "province": "British Columbia",
      "party": "NDP",
      "email": "Kennedy.Stewart@parl.gc.ca"
    }, {
      "firstName": "Mark",
      "lastName": "Strahl",
      "constituency": "Chilliwack-Hope",
      "province": "British Columbia",
      "party": "Conservative",
      "email": "Mark.Strahl@parl.gc.ca"
    }, {
      "firstName": "Shannon",
      "lastName": "Stubbs",
      "constituency": "Lakeland",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Shannon.Stubbs@parl.gc.ca"
    }, {
      "firstName": "David",
      "lastName": "Sweet",
      "constituency": "Flamborough-Glanbrook",
      "province": "Ontario",
      "party": "Conservative",
      "email": "David.Sweet@parl.gc.ca"
    }, {
      "firstName": "Marwan",
      "lastName": "Tabbara",
      "constituency": "Kitchener South-Hespeler",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Marwan.Tabbara@parl.gc.ca"
    }, {
      "firstName": "Geng",
      "lastName": "Tan",
      "constituency": "Don Valley North",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Geng.Tan@parl.gc.ca"
    }, {
      "firstName": "Filomena",
      "lastName": "Tassi",
      "constituency": "Hamilton West-Ancaster-Dundas",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Filomena.Tassi@parl.gc.ca"
    }, {
      "firstName": "Luc",
      "lastName": "Th\u00e9riault",
      "constituency": "Montcalm",
      "province": "Quebec",
      "party": "Bloc Qu\u00e9b\u00e9cois",
      "email": "Luc.Th\u00e9riault@parl.gc.ca"
    }, {
      "firstName": "David",
      "lastName": "Tilson",
      "constituency": "Dufferin-Caledon",
      "province": "Ontario",
      "party": "Conservative",
      "email": "David.Tilson@parl.gc.ca"
    }, {
      "firstName": "Hunter",
      "lastName": "Tootoo",
      "constituency": "Nunavut",
      "province": "Nunavut",
      "party": "Independent",
      "email": "Hunter.Tootoo@parl.gc.ca"
    }, {
      "firstName": "Brad",
      "lastName": "Trost",
      "constituency": "Saskatoon-University",
      "province": "Saskatchewan",
      "party": "Conservative",
      "email": "Brad.Trost@parl.gc.ca"
    }, {
      "firstName": "Justin",
      "lastName": "Trudeau",
      "constituency": "Papineau",
      "province": "Quebec",
      "party": "Liberal",
      "email": "Justin.Trudeau@parl.gc.ca"
    }, {
      "firstName": "Karine",
      "lastName": "Trudel",
      "constituency": "Jonqui\u00e8re",
      "province": "Quebec",
      "party": "NDP",
      "email": "Karine.Trudel@parl.gc.ca"
    }, {
      "firstName": "Dave",
      "lastName": "Van Kesteren",
      "constituency": "Chatham-Kent-Leamington",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Dave.Van Kesteren@parl.gc.ca"
    }, {
      "firstName": "Peter",
      "lastName": "Van Loan",
      "constituency": "York-Simcoe",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Peter.Van Loan@parl.gc.ca"
    }, {
      "firstName": "Dan",
      "lastName": "Vandal",
      "constituency": "Saint Boniface-Saint Vital",
      "province": "Manitoba",
      "party": "Liberal",
      "email": "Dan.Vandal@parl.gc.ca"
    }, {
      "firstName": "Anita",
      "lastName": "Vandenbeld",
      "constituency": "Ottawa West-Nepean",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Anita.Vandenbeld@parl.gc.ca"
    }, {
      "firstName": "Adam",
      "lastName": "Vaughan",
      "constituency": "Spadina-Fort York",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Adam.Vaughan@parl.gc.ca"
    }, {
      "firstName": "Karen",
      "lastName": "Vecchio",
      "constituency": "Elgin-Middlesex-London",
      "province": "Ontario",
      "party": "Conservative",
      "email": "Karen.Vecchio@parl.gc.ca"
    }, {
      "firstName": "Arnold",
      "lastName": "Viersen",
      "constituency": "Peace River-Westlock",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Arnold.Viersen@parl.gc.ca"
    }, {
      "firstName": "Arif",
      "lastName": "Virani",
      "constituency": "Parkdale-High Park",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Arif.Virani@parl.gc.ca"
    }, {
      "firstName": "Cathay",
      "lastName": "Wagantall",
      "constituency": "Yorkton-Melville",
      "province": "Saskatchewan",
      "party": "Conservative",
      "email": "Cathay.Wagantall@parl.gc.ca"
    }, {
      "firstName": "Mark",
      "lastName": "Warawa",
      "constituency": "Langley-Aldergrove",
      "province": "British Columbia",
      "party": "Conservative",
      "email": "Mark.Warawa@parl.gc.ca"
    }, {
      "firstName": "Chris",
      "lastName": "Warkentin",
      "constituency": "Grande Prairie-Mackenzie",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Chris.Warkentin@parl.gc.ca"
    }, {
      "firstName": "Dianne L.",
      "lastName": "Watts",
      "constituency": "South Surrey-White Rock",
      "province": "British Columbia",
      "party": "Conservative",
      "email": "Dianne L..Watts@parl.gc.ca"
    }, {
      "firstName": "Kevin",
      "lastName": "Waugh",
      "constituency": "Saskatoon-Grasswood",
      "province": "Saskatchewan",
      "party": "Conservative",
      "email": "Kevin.Waugh@parl.gc.ca"
    }, {
      "firstName": "Len",
      "lastName": "Webber",
      "constituency": "Calgary Confederation",
      "province": "Alberta",
      "party": "Conservative",
      "email": "Len.Webber@parl.gc.ca"
    }, {
      "firstName": "Erin",
      "lastName": "Weir",
      "constituency": "Regina-Lewvan",
      "province": "Saskatchewan",
      "party": "NDP",
      "email": "Erin.Weir@parl.gc.ca"
    }, {
      "firstName": "Nick",
      "lastName": "Whalen",
      "constituency": "St. John's East",
      "province": "Newfoundland and Labrador",
      "party": "Liberal",
      "email": "Nick.Whalen@parl.gc.ca"
    }, {
      "firstName": "Jonathan",
      "lastName": "Wilkinson",
      "constituency": "North Vancouver",
      "province": "British Columbia",
      "party": "Liberal",
      "email": "Jonathan.Wilkinson@parl.gc.ca"
    }, {
      "firstName": "Jody",
      "lastName": "Wilson-Raybould",
      "constituency": "Vancouver Granville",
      "province": "British Columbia",
      "party": "Liberal",
      "email": "Jody.Wilson-Raybould@parl.gc.ca"
    }, {
      "firstName": "Alice",
      "lastName": "Wong",
      "constituency": "Richmond Centre",
      "province": "British Columbia",
      "party": "Conservative",
      "email": "Alice.Wong@parl.gc.ca"
    }, {
      "firstName": "Borys",
      "lastName": "Wrzesnewskyj",
      "constituency": "Etobicoke Centre",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Borys.Wrzesnewskyj@parl.gc.ca"
    }, {
      "firstName": "Kate",
      "lastName": "Young",
      "constituency": "London West",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Kate.Young@parl.gc.ca"
    }, {
      "firstName": "David",
      "lastName": "Yurdiga",
      "constituency": "Fort McMurray-Cold Lake",
      "province": "Alberta",
      "party": "Conservative",
      "email": "David.Yurdiga@parl.gc.ca"
    }, {
      "firstName": "Salma",
      "lastName": "Zahid",
      "constituency": "Scarborough Centre",
      "province": "Ontario",
      "party": "Liberal",
      "email": "Salma.Zahid@parl.gc.ca"
    }, {
      "firstName": "Bob",
      "lastName": "Zimmer",
      "constituency": "Prince George-Peace River-Northern Rockies",
      "province": "British Columbia",
      "party": "Conservative",
      "email": "Bob.Zimmer@parl.gc.ca"
    }];

  }
}

// create a module
export default angular.module(name, [])
  .service(name, MPService);
