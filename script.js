const CONFIG = {
  email: "deine@email.de",
  whatsapp: "34123456789"
};

const translations = {
  de: {
    brand: "Costa Care Alicante",
    brandSub: "Betreuung, Kontrolle und Werterhalt",
    navServices: "Leistungen",
    navCalc: "Preisrechner",
    navPricing: "Preislogik",
    navWhy: "Warum wir",
    navContact: "Kontakt",
    eyebrow: "Zuverlässige Immobilienbetreuung an der Costa Blanca",
    heroTitle: "Verlässliche Immobilienbetreuung mit Struktur, Erfahrung und klarer Verantwortung vor Ort.",
    heroText: "Handwerkliche Ausbildung, Qualifikation als geprüfter Logistikmeister (IHK) und Erfahrung aus dem diplomatischen Dienst sorgen für eine Betreuung, die nicht nur durchgeführt, sondern strukturiert geplant und zuverlässig umgesetzt wird. Für Eigentümer, die ihre Immobilie nicht dem Zufall überlassen wollen.",
    heroBtnPrimary: "Preis grob berechnen",
    heroBtnSecondary: "Leistungen ansehen",
    stat1Value: "3-sprachig",
    stat1Label: "Deutsch, Englisch, Spanisch",
    stat2Value: "Dynamisch",
    stat2Label: "Preis nach Größe und Aufwand",
    stat3Value: "Transparent",
    stat3Label: "Gesamtpreis inkl. Einzelpositionen",

    aboutTitle: "Warum diese Betreuung anders ist",
    aboutText: "Nicht austauschbare Standardbetreuung, sondern ein ruhiger, verlässlicher Vor-Ort-Service für Eigentümer, die ihre Immobilie nicht dem Zufall überlassen wollen. Dahinter stehen handwerkliches Verständnis, belastbare Organisation und ein professioneller Umgang mit sensiblen Situationen.",
    aboutBox1Title: "Handwerkliches Know-how und strukturierte Planung",
    aboutBox1Text: "Durch die handwerkliche Ausbildung werden kleine Schäden, beginnende Mängel und technische Auffälligkeiten früher erkannt und realistischer eingeordnet. Ergänzt wird das durch die Qualifikation als geprüfter Logistikmeister (IHK), wodurch Abläufe, Einsätze und Ressourcen strukturiert geplant und zuverlässig umgesetzt werden können. Das reduziert Folgekosten, verhindert unnötige Einsätze und sorgt dafür, dass Probleme nicht zu spät sichtbar werden.",
    aboutBox2Title: "Vertrauenswürdigkeit und Verlässlichkeit",
    aboutBox2Text: "Acht Jahre Berufserfahrung im diplomatischen Dienst stehen für Diskretion, saubere Kommunikation, Verbindlichkeit und einen professionellen Umgang mit Verantwortung. Gerade bei leerstehenden oder sensiblen Immobilien ist das kein Nebenthema, sondern ein echter Vertrauensfaktor.",
    aboutBox3Title: "Koordination mit klarem Blick",
    aboutBox3Text: "Wenn externe Firmen nötig sind, erfolgt die Abstimmung direkt vor Ort – inklusive Nachkontrolle und transparenter Rückmeldung. Das heißt: nicht nur weiterleiten, sondern mitdenken, prüfen und Eigentümer mit klaren Informationen absichern.",

    riskTitle: "Was ohne laufende Betreuung schnell passiert",
    riskText: "Viele Probleme beginnen klein. Teuer oder heikel werden sie oft erst dann, wenn über Wochen oder Monate niemand hinsieht, niemand dokumentiert und niemand vor Ort sichtbar Verantwortung übernimmt.",
    riskBox1Title: "Feuchtigkeit, Standschäden und ungeklärte Mängel",
    riskBox1Text: "Geschlossene Immobilien entwickeln schneller Gerüche, Feuchtigkeit oder unbemerkte Wasserschäden. Je später reagiert wird, desto teurer wird es. Ohne laufende Kontrolle bleibt außerdem oft unklar, wann ein Problem überhaupt begonnen hat.",
    riskBox2Title: "Ungepflegte Außenbereiche senden das falsche Signal",
    riskBox2Text: "Ein sichtbar gepflegtes Grundstück wirkt betreut, bewohnt und unter Beobachtung. Ein vernachlässigter Garten, ungepflegte Terrassen oder ein schmutziger Pool signalisieren dagegen schnell Abwesenheit. Gerade in Spanien ist das für viele Eigentümer ein sensibles Thema, weil ungepflegte Objekte eher Aufmerksamkeit von ungebetenen Dritten auf sich ziehen können.",
    riskBox3Title: "Im Ernstfall fehlt vor Ort die Kontrolle",
    riskBox3Text: "Wenn Eigentümer nicht vor Ort sind, fehlt oft ein verlässlicher Ansprechpartner. Genau dann entstehen Verzögerungen, Missverständnisse und unnötige Mehrkosten. Laufende Betreuung bedeutet deshalb nicht nur Pflege, sondern vor allem Präsenz, Übersicht und schnelle Reaktion, bevor Situationen aus dem Ruder laufen.",

    trustTitle: "So sieht eine professionelle Rückmeldung aus",
    trustText: "Keine diffuse Aussage wie „alles okay“. Eigentümer bekommen eine knappe, klare und nachvollziehbare Rückmeldung zum Objektzustand.",
    trustBullet1: "Kontrolltermin durchgeführt und Immobilie innen sowie außen geprüft",
    trustBullet2: "Fotos oder kurzes Video vom aktuellen Zustand",
    trustBullet3: "Hinweis auf Auffälligkeiten, Priorität und empfohlene nächste Schritte",
    trustBullet4: "Rückmeldung nach erledigter Koordination mit externen Dienstleistern",

    entryPriceTitle: "Orientierung für den Einstieg",
    entryPriceText: "Für Eigentümer, die eine ruhige und verlässliche Betreuung suchen, sollte der Einstiegspreis sichtbar sein. Das wirkt seriöser als ein Kontaktformular ohne Rahmen.",
    entryPriceLabel1: "Laufende Betreuung",
    entryPriceValue1: "ab 120 € / Monat",
    entryPriceLabel2: "Objektkontrolle vor Ort",
    entryPriceValue2: "ab 35 € / Einsatz",
    entryPriceLabel3: "Individuelle Zusatzleistungen",
    entryPriceValue3: "nach Größe und Aufwand",

    servicesTitle: "Unsere Leistungen",
    servicesText: "Die Bilder wurden so gewählt, dass sie zur tatsächlichen Leistung passen. Poolservice zeigt einen Pool, Gartenpflege zeigt Gartenflächen, nicht irgendein hübsches Zufallsbild.",
    poolTitle: "Poolservice",
    poolText: "Koordination oder Durchführung der regelmäßigen Poolpflege für klare Wasserqualität, saubere Beckenränder und einen gepflegten Gesamteindruck.",
    poolDetail1: "Sichtkontrolle des Wasserspiegels und der Wasserqualität",
    poolDetail2: "Prüfung von Skimmer, Pumpe und Filterlaufzeit",
    poolDetail3: "Entfernung grober Verschmutzungen an Oberfläche und Rand",
    poolDetail4: "Koordination externer Pooltechnik bei Störungen",
    gardenTitle: "Gartenpflege",
    gardenText: "Pflege von Rasen, Terrassen, Hecken und Außenflächen – abgestimmt auf Grundstücksgröße, Vegetation und tatsächlichen Pflegeaufwand.",
    gardenDetail1: "Rasen mähen und einfache Nachpflege",
    gardenDetail2: "Laub, trockene Pflanzenteile und leichte Verschmutzungen entfernen",
    gardenDetail3: "Terrassen und Zugänge besenrein halten",
    gardenDetail4: "Hinweis auf erhöhten Aufwand bei großem Grundstück oder starker Bepflanzung",
    arrivalTitle: "Vorbereitung vor Ankunft",
    arrivalText: "Die Immobilie wird vor Eintreffen vorbereitet, damit Gäste oder Eigentümer nicht in ein abgestandenes oder ungepflegtes Objekt kommen.",
    arrivalDetail1: "Lüften und kurze Sichtkontrolle der Räume",
    arrivalDetail2: "Besenreiner Grundzustand bei leichter Verschmutzung",
    arrivalDetail3: "Terrasse prüfen, grob säubern und Möbel stellen",
    arrivalDetail4: "Kleine vorbereitende Handgriffe für einen gepflegten ersten Eindruck",
    detailsBtnOpen: "Details anzeigen",
    detailsBtnClose: "Details ausblenden",

    calcTitle: "Preisrechner",
    calcText: "Der Rechner fasst alle Positionen im Gesamtpreis zusammen. Er ist bewusst wirtschaftlich gedacht: Größe, Aufwand und Frequenz treiben den Preis, nicht nur hübsche Paketnamen.",
    fieldPropertyType: "Immobilienart",
    fieldFrequency: "Betreuungsrhythmus",
    fieldLivingSize: "Wohnfläche (m²)",
    fieldPlotSize: "Grundstück / Außenfläche (m²)",
    fieldPoolSize: "Poolgröße (m²)",
    fieldServices: "Leistungen wählen",
    typeApartment: "Apartment",
    typeHouse: "Haus / Villa",
    freqOneTime: "Einzeltermin / einmaliger Einsatz",
    freqMonthly: "Regelmäßige Betreuung: 1 Besuch pro Monat",
    freqWeekly: "Regelmäßige Betreuung: 1 Besuch pro Woche",

    serviceInspection: "Objektkontrolle",
    serviceInspectionSub: "Sichtprüfung innen/außen, Lüften, kurze Meldung",
    servicePool: "Poolservice",
    servicePoolSub: "Preis steigt mit Poolgröße und Frequenz",
    serviceGarden: "Gartenpflege",
    serviceGardenSub: "Preis steigt mit Außenfläche",
    serviceArrival: "Vorbereitung vor Ankunft",
    serviceArrivalSub: "Einrichtung, Lüften, besenreiner Startzustand",
    extraReport: "Foto- und Statusbericht",
    extraReportSub: "Mehr Dokumentation für Eigentümer",
    extraKeys: "Schlüsselservice",
    extraKeysSub: "Übergabe, Empfang oder Schlüssellogistik",
    extraVentilation: "Lüften / Kurzcheck",
    extraVentilationSub: "Kurzer Zwischenbesuch ohne Vollservice",
    extraSupplies: "Grundbedarf auffüllen",
    extraSuppliesSub: "Kleine Verbrauchsmaterialien oder Vorbereitung",
    extraEmergency: "Notfall-Erreichbarkeit & Soforteinsatz",
    extraEmergencySub: "Priorisierte Reaktion bei Sturm, Schäden oder akuten Situationen",

    summaryTitle: "Preisübersicht",
    summaryText: "Hier werden alle gewählten Positionen einzeln aufgeführt und unten als Gesamtpreis zusammengefasst.",
    grandTotalLabel: "Gesamtpreis",
    pricingNote: "Hinweis: Der Rechner ist eine belastbare Orientierung, kein blindes Billigangebot. Sonderfälle, Reparaturen, Notfalleinsätze und intensive Reinigung sind nicht automatisch enthalten.",
    summaryBase: "Grundpreis Objekt",
    summaryInspection: "Objektkontrolle",
    summaryPool: "Poolservice",
    summaryGarden: "Gartenpflege",
    summaryArrival: "Vorbereitung vor Ankunft",
    summaryReport: "Foto- und Statusbericht",
    summaryKeys: "Schlüsselservice",
    summaryVentilation: "Lüften / Kurzcheck",
    summarySupplies: "Grundbedarf auffüllen",
    summaryEmergency: "Notfall-Erreichbarkeit",

    contactTitle: "Direkt anfragen",
    contactText: "Die Anfrage wird mit den wichtigsten Eckdaten aus dem Rechner vorbereitet. Dadurch bekommst du keine halbleeren Anfragen.",
    contactNameLabel: "Name",
    contactEmailLabel: "E-Mail",
    contactPhoneLabel: "Telefon / WhatsApp",
    contactLocationLabel: "Ort der Immobilie",
    contactMessageLabel: "Zusätzliche Nachricht",
    emailBtn: "📧 Anfrage per E-Mail",
    whatsappBtn: "💬 Anfrage per WhatsApp",

    logicTitle: "Warum diese Preislogik sinnvoller ist",
    logicText: "Fixe Fantasiepakete sehen im Marketing nett aus, sind aber betriebswirtschaftlich oft schlecht. Diese Seite nutzt daher eine nachvollziehbare Mischlogik aus Grundpreis, Größenfaktor und Aufwandsfaktor.",
    logicBox1Title: "1. Grundpreis",
    logicBox1Text: "Jede Leistung startet mit einem wirtschaftlich sinnvollen Basissatz. Damit werden Anfahrt, Organisation und Mindestaufwand nicht verschenkt.",
    logicBox2Title: "2. Größe treibt Aufwand",
    logicBox2Text: "Mehr Wohnfläche, mehr Außenfläche oder ein größerer Pool bedeuten real mehr Zeit. Genau deshalb steigt der Preis nicht pauschal, sondern mit dem tatsächlichen Umfang.",
    logicBox3Title: "3. Frequenz und Erschwernis",
    logicBox3Text: "Wöchentliche Betreuung, schwer zugängige Objekte oder höherer Koordinationsaufwand müssen im Preis sichtbar sein. Sonst ist das Modell irgendwann unprofitabel.",

    footerText: "Costa Care Alicante – strukturierte Betreuung für Ferienimmobilien, Zweitwohnsitze und Vermietungsobjekte.",

    requestSubject: "Neue Anfrage Immobilienbetreuung Alicante",
    requestHeadline: "Neue Anfrage über die Website",
    requestEstimated: "Geschätzter Preis",
    placeholderName: "Ihr Name",
    placeholderEmail: "ihre@email.de",
    placeholderLocation: "z. B. Alicante, Torrevieja",
    placeholderMessage: "Kurze Zusatzinfos zur Immobilie oder zum Bedarf",
    requestPropertyType: "Objektart",
    requestFrequency: "Betreuung",
    requestLiving: "Wohnfläche",
    requestPlot: "Außenfläche",
    requestPool: "Poolgröße",
    requestServices: "Leistungen",
    requestMessage: "Nachricht",
    requestPhone: "Telefon / WhatsApp",
    requestEmail: "E-Mail",
    requestLocation: "Ort der Immobilie"
  },

  en: {
    brand: "Costa Care Alicante",
    brandSub: "Care, inspections and value preservation",
    navServices: "Services",
    navCalc: "Price calculator",
    navPricing: "Pricing logic",
    navWhy: "Why us",
    navContact: "Contact",
    eyebrow: "Reliable property care on the Costa Blanca",
    heroTitle: "Reliable property care with structure, experience and clear responsibility on site.",
    heroText: "Craft training, qualification as a certified logistics master (CCI) – Bachelor Professional of Logistics – and experience from diplomatic service create a level of property care that is not just carried out, but structured, planned and implemented reliably. For owners who do not want to leave their property to chance.",
    heroBtnPrimary: "Estimate price",
    heroBtnSecondary: "View services",
    stat1Value: "3 languages",
    stat1Label: "German, English, Spanish",
    stat2Value: "Dynamic",
    stat2Label: "Price based on size and workload",
    stat3Value: "Transparent",
    stat3Label: "Total price with line items",

    aboutTitle: "Why this care service is different",
    aboutText: "Not generic property support, but a calm and reliable on-site service for owners who do not want to leave their property to chance. It is built on craft expertise, strong organization and a professional approach to sensitive situations.",
    aboutBox1Title: "Craft expertise and structured planning",
    aboutBox1Text: "Craft training helps identify small damage, emerging defects and technical issues earlier and assess them more realistically. This is reinforced by the qualification as a certified logistics master (CCI) – Bachelor Professional of Logistics –, which supports structured planning of processes, assignments and resources. That reduces follow-up costs, avoids unnecessary call-outs and ensures that problems are not noticed too late.",
    aboutBox2Title: "Trustworthiness and reliability",
    aboutBox2Text: "Eight years of experience in diplomatic service stand for discretion, clear communication, dependability and a professional approach to responsibility. Especially with vacant or sensitive properties, that is not a side note but a real trust factor.",
    aboutBox3Title: "Coordination with a clear eye",
    aboutBox3Text: "When external companies are needed, coordination happens directly on site, including follow-up checks and transparent reporting. That means not just forwarding tasks, but thinking ahead, checking results and giving owners solid information.",

    riskTitle: "What happens quickly without ongoing care",
    riskText: "Many problems start small. They often become expensive or sensitive when no one checks, documents or shows visible local responsibility for weeks or months.",
    riskBox1Title: "Moisture, standing damage and unresolved defects",
    riskBox1Text: "Closed properties develop odors, moisture or unnoticed water damage more quickly. The later the reaction, the higher the cost. Without ongoing checks, it often also becomes unclear when a problem actually started.",
    riskBox2Title: "Neglected outdoor areas send the wrong signal",
    riskBox2Text: "A visibly well-kept property looks monitored, used and cared for. A neglected garden, untidy terraces or a dirty pool quickly signal absence instead. In Spain this is a sensitive issue for many owners, because neglected properties can attract unwanted attention more easily.",
    riskBox3Title: "In serious situations, no local control is in place",
    riskBox3Text: "When owners are not on site, there is often no reliable local contact. That creates delays, misunderstandings and avoidable extra costs. Ongoing care therefore means not only maintenance, but also presence, oversight and quick reaction before situations escalate.",

    trustTitle: "What professional reporting looks like",
    trustText: "No vague statement like “everything is fine.” Owners receive a short, clear and traceable update on the property condition.",
    trustBullet1: "Inspection completed and property checked inside and outside",
    trustBullet2: "Photos or a short video of the current condition",
    trustBullet3: "Notes on issues, urgency and recommended next steps",
    trustBullet4: "Update after coordination with external service providers",

    entryPriceTitle: "Visible entry-level guidance",
    entryPriceText: "Owners looking for calm and reliable care should immediately see an entry price. That appears more credible than a contact form without context.",
    entryPriceLabel1: "Ongoing care",
    entryPriceValue1: "from €120 / month",
    entryPriceLabel2: "On-site inspection",
    entryPriceValue2: "from €35 / visit",
    entryPriceLabel3: "Additional services",
    entryPriceValue3: "based on size and workload",

    servicesTitle: "Our services",
    servicesText: "The images are chosen to match the real service. Pool service shows a pool, garden care shows outdoor areas, not random decorative stock photos.",
    poolTitle: "Pool service",
    poolText: "Coordination or execution of regular pool care for clear water, clean edges and a well-maintained overall appearance.",
    poolDetail1: "Visual check of water level and water quality",
    poolDetail2: "Check skimmer, pump and filter runtime",
    poolDetail3: "Remove coarse debris from surface and edges",
    poolDetail4: "Coordinate external pool technicians if needed",
    gardenTitle: "Garden care",
    gardenText: "Care for lawn, terraces, hedges and outside areas based on plot size, vegetation and actual workload.",
    gardenDetail1: "Mow lawn and basic follow-up care",
    gardenDetail2: "Remove leaves, dry plant matter and light debris",
    gardenDetail3: "Keep terraces and access areas swept and tidy",
    gardenDetail4: "Flag higher effort for large plots or dense planting",
    arrivalTitle: "Preparation before arrival",
    arrivalText: "The property is prepared before arrival so guests or owners do not enter a stale or neglected space.",
    arrivalDetail1: "Ventilate and perform a quick visual room check",
    arrivalDetail2: "Basic swept condition for light dirt",
    arrivalDetail3: "Check terrace, clean roughly and place furniture",
    arrivalDetail4: "Small prep tasks for a well-kept first impression",
    detailsBtnOpen: "Show details",
    detailsBtnClose: "Hide details",

    calcTitle: "Price calculator",
    calcText: "The calculator combines all selected positions into one total price. It is designed around real economics: size, effort and frequency drive pricing, not just package names.",
    fieldPropertyType: "Property type",
    fieldFrequency: "Service rhythm",
    fieldLivingSize: "Living area (m²)",
    fieldPlotSize: "Plot / outdoor area (m²)",
    fieldPoolSize: "Pool size (m²)",
    fieldServices: "Choose services",
    typeApartment: "Apartment",
    typeHouse: "House / villa",
    freqOneTime: "Single appointment / one-time service",
    freqMonthly: "Regular care: 1 visit per month",
    freqWeekly: "Regular care: 1 visit per week",

    serviceInspection: "Property inspection",
    serviceInspectionSub: "Visual check inside/outside, airing, short update",
    servicePool: "Pool service",
    servicePoolSub: "Price increases with pool size and frequency",
    serviceGarden: "Garden care",
    serviceGardenSub: "Price increases with outdoor area",
    serviceArrival: "Preparation before arrival",
    serviceArrivalSub: "Setup, airing, tidy starting condition",
    extraReport: "Photo and status report",
    extraReportSub: "More documentation for owners",
    extraKeys: "Key service",
    extraKeysSub: "Handover, reception or key logistics",
    extraVentilation: "Airing / quick check",
    extraVentilationSub: "Short intermediate visit without full service",
    extraSupplies: "Refill basic supplies",
    extraSuppliesSub: "Small consumables or arrival prep",
    extraEmergency: "Emergency availability & urgent call-out",
    extraEmergencySub: "Prioritized response in storms, damage or acute situations",

    summaryTitle: "Price overview",
    summaryText: "All selected items are listed individually and summarized below as a total price.",
    grandTotalLabel: "Total price",
    pricingNote: "Note: The calculator is a solid guideline, not a blind bargain offer. Special cases, repairs, emergency visits and intensive cleaning are not included automatically.",
    summaryBase: "Base property fee",
    summaryInspection: "Property inspection",
    summaryPool: "Pool service",
    summaryGarden: "Garden care",
    summaryArrival: "Preparation before arrival",
    summaryReport: "Photo and status report",
    summaryKeys: "Key service",
    summaryVentilation: "Airing / quick check",
    summarySupplies: "Refill basic supplies",
    summaryEmergency: "Emergency availability",

    contactTitle: "Request directly",
    contactText: "The request is prefilled with the key calculator details so you do not receive half-empty inquiries.",
    contactNameLabel: "Name",
    contactEmailLabel: "Email",
    contactPhoneLabel: "Phone / WhatsApp",
    contactLocationLabel: "Property location",
    contactMessageLabel: "Additional message",
    emailBtn: "📧 Send email request",
    whatsappBtn: "💬 Send WhatsApp request",

    logicTitle: "Why this pricing logic makes more sense",
    logicText: "Fixed fantasy packages may look good in marketing, but they are often weak economically. This page therefore uses a mixed logic based on base fee, size factor and effort factor.",
    logicBox1Title: "1. Base fee",
    logicBox1Text: "Every service starts with a sensible base rate so travel, coordination and minimum workload are not given away for free.",
    logicBox2Title: "2. Size drives effort",
    logicBox2Text: "More living area, more outside area or a larger pool means more real time. That is why the price rises with actual scope rather than a flat guess.",
    logicBox3Title: "3. Frequency and complexity",
    logicBox3Text: "Weekly care, hard-to-access properties or higher coordination effort must be visible in the price. Otherwise the model becomes unprofitable.",

    footerText: "Costa Care Alicante – structured care for holiday homes, second residences and rental properties.",

    requestSubject: "New Property Care Alicante Request",
    requestHeadline: "New request from the website",
    requestEstimated: "Estimated price",
    placeholderName: "Your name",
    placeholderEmail: "your@email.com",
    placeholderLocation: "e.g. Alicante, Torrevieja",
    placeholderMessage: "Short extra information about the property or your needs",
    requestPropertyType: "Property type",
    requestFrequency: "Service",
    requestLiving: "Living area",
    requestPlot: "Outdoor area",
    requestPool: "Pool size",
    requestServices: "Services",
    requestMessage: "Message",
    requestPhone: "Phone / WhatsApp",
    requestEmail: "Email",
    requestLocation: "Property location"
  },

  es: {
    brand: "Costa Care Alicante",
    brandSub: "Supervisión, control y conservación del valor",
    navServices: "Servicios",
    navCalc: "Calculadora",
    navPricing: "Lógica de precios",
    navWhy: "Por qué nosotros",
    navContact: "Contacto",
    eyebrow: "Gestión fiable de propiedades en la Costa Blanca",
    heroTitle: "Gestión de propiedades fiable con estructura, experiencia y responsabilidad clara sobre el terreno.",
    heroText: "La formación técnica, la cualificación como maestro logístico titulado (CCI) – Bachelor Professional of Logistics – y la experiencia en el servicio diplomático permiten una gestión que no solo se realiza, sino que se planifica con estructura y se ejecuta con fiabilidad. Para propietarios que no quieren dejar su inmueble al azar.",
    heroBtnPrimary: "Calcular precio",
    heroBtnSecondary: "Ver servicios",
    stat1Value: "3 idiomas",
    stat1Label: "Alemán, inglés, español",
    stat2Value: "Dinámico",
    stat2Label: "Precio según tamaño y esfuerzo",
    stat3Value: "Transparente",
    stat3Label: "Precio total con partidas individuales",

    aboutTitle: "Por qué este servicio es diferente",
    aboutText: "No es una asistencia genérica, sino un servicio tranquilo y fiable para propietarios que no quieren dejar su inmueble al azar. Detrás hay conocimiento técnico, organización sólida y un manejo profesional de situaciones sensibles.",
    aboutBox1Title: "Conocimiento técnico y planificación estructurada",
    aboutBox1Text: "La formación técnica permite detectar antes pequeños daños, defectos incipientes y anomalías técnicas, y valorarlos de forma más realista. Esto se refuerza con la cualificación como maestro logístico titulado (CCI) – Bachelor Professional of Logistics –, que aporta planificación estructurada de procesos, intervenciones y recursos. Así se reducen costes posteriores, se evitan desplazamientos innecesarios y se evita que los problemas se detecten demasiado tarde.",
    aboutBox2Title: "Confianza y fiabilidad",
    aboutBox2Text: "Ocho años de experiencia en el servicio diplomático representan discreción, comunicación clara, compromiso y un trato profesional con la responsabilidad. Especialmente en inmuebles vacíos o sensibles, eso no es un detalle secundario, sino un verdadero factor de confianza.",
    aboutBox3Title: "Coordinación con criterio claro",
    aboutBox3Text: "Cuando hacen falta empresas externas, la coordinación se realiza directamente in situ, con control posterior e información transparente. Eso significa no solo trasladar encargos, sino pensar, comprobar y proteger al propietario con información clara.",

    riskTitle: "Qué pasa rápido sin un seguimiento continuo",
    riskText: "Muchos problemas empiezan siendo pequeños. A menudo se vuelven caros o delicados cuando durante semanas o meses nadie revisa, documenta ni muestra una presencia visible sobre el terreno.",
    riskBox1Title: "Humedad, daños por inactividad y defectos sin aclarar",
    riskBox1Text: "Las propiedades cerradas desarrollan antes olores, humedad o daños por agua no detectados. Cuanto más tarde se reacciona, más caro resulta. Sin control continuo además suele quedar poco claro cuándo empezó realmente un problema.",
    riskBox2Title: "Las zonas exteriores descuidadas envían la señal equivocada",
    riskBox2Text: "Una propiedad visiblemente cuidada parece atendida, utilizada y vigilada. En cambio, un jardín descuidado, terrazas sin mantener o una piscina sucia señalan ausencia con rapidez. En España esto es un tema sensible para muchos propietarios, porque los inmuebles descuidados pueden atraer con más facilidad atención no deseada.",
    riskBox3Title: "En casos serios falta control local",
    riskBox3Text: "Cuando los propietarios no están en el lugar, a menudo falta un contacto fiable. Ahí aparecen retrasos, malentendidos y costes evitables. Por eso la atención continua no significa solo mantenimiento, sino también presencia, visión global y reacción rápida antes de que una situación se complique.",

    trustTitle: "Así es un informe profesional",
    trustText: "Nada de mensajes vagos como “todo bien”. El propietario recibe una respuesta breve, clara y verificable sobre el estado del inmueble.",
    trustBullet1: "Control realizado y revisión del inmueble por dentro y por fuera",
    trustBullet2: "Fotos o vídeo corto del estado actual",
    trustBullet3: "Aviso sobre incidencias, prioridad y siguientes pasos recomendados",
    trustBullet4: "Respuesta tras coordinar con proveedores externos",

    entryPriceTitle: "Orientación visible para empezar",
    entryPriceText: "Los propietarios que buscan un servicio tranquilo y fiable deberían ver un precio inicial. Eso transmite más seriedad que un formulario sin contexto.",
    entryPriceLabel1: "Atención continua",
    entryPriceValue1: "desde 120 € / mes",
    entryPriceLabel2: "Control presencial",
    entryPriceValue2: "desde 35 € / visita",
    entryPriceLabel3: "Servicios adicionales",
    entryPriceValue3: "según tamaño y esfuerzo",

    servicesTitle: "Nuestros servicios",
    servicesText: "Las imágenes se eligieron para que coincidan con el servicio real. El servicio de piscina muestra una piscina, el jardín muestra zonas exteriores, no fotos decorativas al azar.",
    poolTitle: "Servicio de piscina",
    poolText: "Coordinación o ejecución del mantenimiento periódico de la piscina para agua clara, bordes limpios y una imagen cuidada.",
    poolDetail1: "Control visual del nivel y la calidad del agua",
    poolDetail2: "Revisión de skimmer, bomba y tiempo de filtrado",
    poolDetail3: "Retirada de suciedad gruesa de superficie y bordes",
    poolDetail4: "Coordinación de técnicos externos si hay incidencias",
    gardenTitle: "Cuidado del jardín",
    gardenText: "Mantenimiento de césped, terrazas, setos y exteriores según el tamaño del terreno, la vegetación y el esfuerzo real.",
    gardenDetail1: "Corte de césped y mantenimiento básico",
    gardenDetail2: "Retirada de hojas, restos secos y suciedad ligera",
    gardenDetail3: "Mantener terrazas y accesos barridos y ordenados",
    gardenDetail4: "Aviso de mayor esfuerzo en parcelas grandes o muy plantadas",
    arrivalTitle: "Preparación antes de la llegada",
    arrivalText: "La propiedad se prepara antes de la llegada para que propietarios o huéspedes no entren en un inmueble cargado o descuidado.",
    arrivalDetail1: "Ventilar y hacer una revisión visual rápida",
    arrivalDetail2: "Estado barrido básico con suciedad ligera",
    arrivalDetail3: "Revisar terraza, limpiar superficialmente y colocar mobiliario",
    arrivalDetail4: "Pequeñas tareas previas para una buena primera impresión",
    detailsBtnOpen: "Ver detalles",
    detailsBtnClose: "Ocultar detalles",

    calcTitle: "Calculadora de precio",
    calcText: "La calculadora reúne todas las posiciones en un precio total. Está planteada con lógica económica real: tamaño, esfuerzo y frecuencia influyen, no solo nombres de paquetes.",
    fieldPropertyType: "Tipo de inmueble",
    fieldFrequency: "Ritmo del servicio",
    fieldLivingSize: "Superficie habitable (m²)",
    fieldPlotSize: "Parcela / exterior (m²)",
    fieldPoolSize: "Tamaño de piscina (m²)",
    fieldServices: "Elegir servicios",
    typeApartment: "Apartamento",
    typeHouse: "Casa / villa",
    freqOneTime: "Cita puntual / servicio único",
    freqMonthly: "Servicio regular: 1 visita al mes",
    freqWeekly: "Servicio regular: 1 visita por semana",

    serviceInspection: "Inspección del inmueble",
    serviceInspectionSub: "Revisión visual interior/exterior, ventilación y aviso breve",
    servicePool: "Servicio de piscina",
    servicePoolSub: "El precio sube con el tamaño de la piscina y la frecuencia",
    serviceGarden: "Cuidado del jardín",
    serviceGardenSub: "El precio sube con la superficie exterior",
    serviceArrival: "Preparación antes de la llegada",
    serviceArrivalSub: "Puesta a punto, ventilación y estado básico ordenado",
    extraReport: "Informe con fotos y estado",
    extraReportSub: "Más documentación para el propietario",
    extraKeys: "Servicio de llaves",
    extraKeysSub: "Entrega, recepción o logística de llaves",
    extraVentilation: "Ventilación / revisión rápida",
    extraVentilationSub: "Visita breve sin servicio completo",
    extraSupplies: "Reponer básicos",
    extraSuppliesSub: "Pequeños consumibles o preparación de llegada",
    extraEmergency: "Disponibilidad de emergencia e intervención urgente",
    extraEmergencySub: "Reacción prioritaria ante tormentas, daños o situaciones agudas",

    summaryTitle: "Resumen de precio",
    summaryText: "Aquí se muestran todas las posiciones elegidas por separado y después como precio total.",
    grandTotalLabel: "Precio total",
    pricingNote: "Nota: la calculadora es una orientación sólida, no una oferta ciega y barata. Casos especiales, reparaciones, urgencias y limpiezas intensivas no están incluidos automáticamente.",
    summaryBase: "Tarifa base del inmueble",
    summaryInspection: "Inspección del inmueble",
    summaryPool: "Servicio de piscina",
    summaryGarden: "Cuidado del jardín",
    summaryArrival: "Preparación antes de la llegada",
    summaryReport: "Informe con fotos y estado",
    summaryKeys: "Servicio de llaves",
    summaryVentilation: "Ventilación / revisión rápida",
    summarySupplies: "Reponer básicos",
    summaryEmergency: "Disponibilidad de emergencia",

    contactTitle: "Solicitar directamente",
    contactText: "La solicitud se rellena con los datos clave de la calculadora. Así no recibes consultas medio vacías.",
    contactNameLabel: "Nombre",
    contactEmailLabel: "Correo electrónico",
    contactPhoneLabel: "Teléfono / WhatsApp",
    contactLocationLabel: "Ubicación del inmueble",
    contactMessageLabel: "Mensaje adicional",
    emailBtn: "📧 Enviar solicitud por correo",
    whatsappBtn: "💬 Enviar solicitud por WhatsApp",

    logicTitle: "Por qué esta lógica de precios tiene más sentido",
    logicText: "Los paquetes fijos inventados pueden quedar bien en marketing, pero a nivel económico suelen ser malos. Por eso esta página usa una lógica mixta basada en tarifa base, tamaño y esfuerzo.",
    logicBox1Title: "1. Tarifa base",
    logicBox1Text: "Cada servicio parte de una base económicamente razonable. Así no se regalan desplazamiento, organización y esfuerzo mínimo.",
    logicBox2Title: "2. El tamaño aumenta el trabajo",
    logicBox2Text: "Más superficie habitable, más exterior o una piscina mayor significan más tiempo real. Por eso el precio sube con el alcance real y no con una cifra plana.",
    logicBox3Title: "3. Frecuencia y complejidad",
    logicBox3Text: "La atención semanal, los inmuebles de acceso difícil o una coordinación más intensa deben verse en el precio. Si no, el modelo deja de ser rentable.",

    footerText: "Costa Care Alicante – atención estructurada para viviendas vacacionales, segundas residencias y propiedades de alquiler.",

    requestSubject: "Nueva solicitud Gestión de Propiedades Alicante",
    requestHeadline: "Nueva solicitud desde la web",
    requestEstimated: "Precio estimado",
    placeholderName: "Su nombre",
    placeholderEmail: "su@email.com",
    placeholderLocation: "p. ej. Alicante, Torrevieja",
    placeholderMessage: "Información adicional breve sobre la propiedad o la necesidad",
    requestPropertyType: "Tipo de inmueble",
    requestFrequency: "Servicio",
    requestLiving: "Superficie habitable",
    requestPlot: "Superficie exterior",
    requestPool: "Tamaño de piscina",
    requestServices: "Servicios",
    requestMessage: "Mensaje",
    requestPhone: "Teléfono / WhatsApp",
    requestEmail: "Correo electrónico",
    requestLocation: "Ubicación del inmueble"
  }
};

const formEls = {
  propertyType: document.getElementById("propertyType"),
  serviceFrequency: document.getElementById("serviceFrequency"),
  livingSize: document.getElementById("livingSize"),
  plotSize: document.getElementById("plotSize"),
  poolSize: document.getElementById("poolSize"),
  checkInspection: document.getElementById("checkInspection"),
  checkPool: document.getElementById("checkPool"),
  checkGarden: document.getElementById("checkGarden"),
  checkArrival: document.getElementById("checkArrival"),
  checkReport: document.getElementById("checkReport"),
  checkKeys: document.getElementById("checkKeys"),
  checkVentilation: document.getElementById("checkVentilation"),
  checkSupplies: document.getElementById("checkSupplies"),
  checkEmergency: document.getElementById("checkEmergency"),
  contactName: document.getElementById("contactName"),
  contactEmail: document.getElementById("contactEmail"),
  contactPhone: document.getElementById("contactPhone"),
  contactLocation: document.getElementById("contactLocation"),
  contactMessage: document.getElementById("contactMessage"),
  summaryList: document.getElementById("summaryList"),
  grandTotal: document.getElementById("grandTotal"),
  emailButton: document.getElementById("emailButton"),
  whatsappButton: document.getElementById("whatsappButton")
};

const langButtons = Array.from(document.querySelectorAll(".lang-btn"));
const detailButtons = Array.from(document.querySelectorAll(".detail-toggle"));

let currentLang = "de";

function t(key) {
  return translations[currentLang][key] ?? key;
}

function formatEuro(value) {
  const locale = currentLang === "de" ? "de-DE" : currentLang === "en" ? "en-GB" : "es-ES";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0
  }).format(value);
}

function getFrequencyFactor(value) {
  if (value === "weekly") return 3.4;
  if (value === "monthly") return 1;
  return 1.25;
}

function applyLanguage() {
  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = translations[currentLang][key];
    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  formEls.propertyType.options[0].text = t("typeApartment");
  formEls.propertyType.options[1].text = t("typeHouse");
  formEls.serviceFrequency.options[0].text = t("freqOneTime");
  formEls.serviceFrequency.options[1].text = t("freqMonthly");
  formEls.serviceFrequency.options[2].text = t("freqWeekly");

  formEls.contactName.placeholder = t("placeholderName");
  formEls.contactEmail.placeholder = t("placeholderEmail");
  formEls.contactLocation.placeholder = t("placeholderLocation");
  formEls.contactMessage.placeholder = t("placeholderMessage");

  formEls.emailButton.textContent = t("emailBtn");
  formEls.whatsappButton.textContent = t("whatsappBtn");

  detailButtons.forEach((button) => {
    const target = document.getElementById(button.dataset.target);
    button.textContent = target.classList.contains("open") ? t("detailsBtnClose") : t("detailsBtnOpen");
  });

  calculatePricing();
}

function selectedServices() {
  const items = [];
  if (formEls.checkInspection.checked) items.push(t("summaryInspection"));
  if (formEls.checkPool.checked) items.push(t("summaryPool"));
  if (formEls.checkGarden.checked) items.push(t("summaryGarden"));
  if (formEls.checkArrival.checked) items.push(t("summaryArrival"));
  if (formEls.checkReport.checked) items.push(t("summaryReport"));
  if (formEls.checkKeys.checked) items.push(t("summaryKeys"));
  if (formEls.checkVentilation.checked) items.push(t("summaryVentilation"));
  if (formEls.checkSupplies.checked) items.push(t("summarySupplies"));
  if (formEls.checkEmergency.checked) items.push(t("summaryEmergency"));
  return items;
}

function calculatePricing() {
  const propertyType = formEls.propertyType.value;
  const serviceFrequency = formEls.serviceFrequency.value;
  const livingSize = Math.max(0, Number(formEls.livingSize.value) || 0);
  const plotSize = Math.max(0, Number(formEls.plotSize.value) || 0);
  const poolSize = Math.max(0, Number(formEls.poolSize.value) || 0);
  const frequencyFactor = getFrequencyFactor(serviceFrequency);

  const baseProperty = propertyType === "house" ? 58 : 42;
  const livingFactor = Math.ceil(livingSize * 0.12);

  const lines = [[t("summaryBase"), baseProperty + livingFactor]];

  if (formEls.checkInspection.checked) {
    lines.push([t("summaryInspection"), Math.ceil((22 + livingSize * 0.06) * frequencyFactor)]);
  }
  if (formEls.checkPool.checked && poolSize > 0) {
    lines.push([t("summaryPool"), Math.ceil((18 + poolSize * 0.85) * frequencyFactor)]);
  }
  if (formEls.checkGarden.checked && plotSize > 0) {
    lines.push([t("summaryGarden"), Math.ceil((16 + plotSize * 0.07) * frequencyFactor)]);
  }
  if (formEls.checkArrival.checked) {
    lines.push([t("summaryArrival"), Math.ceil(28 * (serviceFrequency === "weekly" ? 1.15 : 1))]);
  }
  if (formEls.checkReport.checked) {
    lines.push([t("summaryReport"), Math.ceil(14 * frequencyFactor)]);
  }
  if (formEls.checkKeys.checked) {
    lines.push([t("summaryKeys"), Math.ceil(18 * (serviceFrequency === "weekly" ? 1.2 : 1))]);
  }
  if (formEls.checkVentilation.checked) {
    lines.push([t("summaryVentilation"), Math.ceil((12 + livingSize * 0.03) * frequencyFactor)]);
  }
  if (formEls.checkSupplies.checked) {
    lines.push([t("summarySupplies"), Math.ceil(10 * (serviceFrequency === "weekly" ? 1.3 : 1))]);
  }
  if (formEls.checkEmergency.checked) {
    lines.push([t("summaryEmergency"), Math.ceil(15 * (serviceFrequency === "weekly" ? 1.4 : 1))]);
  }

  const total = Math.ceil(lines.reduce((sum, [, price]) => sum + price, 0));

  formEls.summaryList.innerHTML = lines.map(([label, price]) => `
    <div class="summary-row">
      <span>${label}</span>
      <span>${formatEuro(price)}</span>
    </div>
  `).join("");

  formEls.grandTotal.textContent = formatEuro(total);

  updateContactLinks(total);
}

function updateContactLinks(total) {
  const services = selectedServices().join(", ") || "-";

  const body = `${t("requestHeadline")}\n\n`
    + `Name: ${formEls.contactName.value.trim() || "-"}\n`
    + `${t("requestEmail")}: ${formEls.contactEmail.value.trim() || "-"}\n`
    + `${t("requestPhone")}: ${formEls.contactPhone.value.trim() || "-"}\n`
    + `${t("requestLocation")}: ${formEls.contactLocation.value.trim() || "-"}\n`
    + `${t("requestPropertyType")}: ${formEls.propertyType.selectedOptions[0].text}\n`
    + `${t("requestFrequency")}: ${formEls.serviceFrequency.selectedOptions[0].text}\n`
    + `${t("requestLiving")}: ${formEls.livingSize.value || "-"} m²\n`
    + `${t("requestPlot")}: ${formEls.plotSize.value || "-"} m²\n`
    + `${t("requestPool")}: ${formEls.poolSize.value || "-"} m²\n`
    + `${t("requestServices")}: ${services}\n`
    + `${t("requestEstimated")}: ${formatEuro(total)}\n`
    + `${t("requestMessage")}: ${formEls.contactMessage.value.trim() || "-"}\n`;

  const subject = encodeURIComponent(t("requestSubject"));
  const encodedBody = encodeURIComponent(body);

  formEls.emailButton.href = `mailto:${CONFIG.email}?subject=${subject}&body=${encodedBody}`;
  formEls.whatsappButton.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodedBody}`;
}

detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.target);
    target.classList.toggle("open");
    button.textContent = target.classList.contains("open") ? t("detailsBtnClose") : t("detailsBtnOpen");
  });
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.dataset.lang;
    applyLanguage();
  });
});

Object.values(formEls).forEach((el) => {
  if (!el || typeof el.addEventListener !== "function") return;
  el.addEventListener("input", calculatePricing);
  el.addEventListener("change", calculatePricing);
});

applyLanguage();
