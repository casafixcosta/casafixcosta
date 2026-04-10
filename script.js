const CONFIG = {
  email: "Marco-weiss83@web.de",
  whatsapp: "4915253692878"
};

const translations = {
  de: {
    brand: "Costa Care Alicante",
    brandSub: "Präsenz, Kontrolle und Werterhalt vor Ort",
    navServices: "Leistungen",
    navCalc: "Preisrechner",
    navPricing: "Preislogik",
    navWhy: "Warum wir",
    navContact: "Kontakt",

    eyebrow: "Verlässliche Objektbetreuung an der Costa Blanca",
    heroTitle: "Ihr vertrauenswürdiger Ansprechpartner vor Ort – mit klarer Kontrolle, strukturierter Dokumentation und schneller Reaktion.",
    heroText: "Costa Care Alicante richtet sich an Eigentümer, die nicht dauerhaft vor Ort sind und ihre Immobilie nicht dem Zufall überlassen wollen. Im Mittelpunkt stehen regelmäßige Objektkontrollen, Foto- und Statusberichte, Sichtprüfung von Außenbereichen, Koordination im Bedarfsfall und eine verlässliche Präsenz vor Ort – nicht klassische Hausmeisterarbeiten oder technische Wartung.",
    launchNote: "Aufbauphase: Die Betreuung wird aktuell strukturiert vorbereitet. Bereits jetzt können Anfragen gestellt, zukünftige Betreuung geplant und sinnvolle Leistungsmodelle abgestimmt werden.",
    heroBtnPrimary: "Service grob kalkulieren",
    heroBtnSecondary: "Leistungen ansehen",
    stat1Value: "3-sprachig",
    stat1Label: "Deutsch, Englisch, Spanisch",
    stat2Value: "Strukturiert",
    stat2Label: "Klare Leistungen statt offener Serviceversprechen",
    stat3Value: "Transparent",
    stat3Label: "Gesamtpreis inkl. Einzelpositionen",

    aboutTitle: "Warum diese Betreuung anders ist",
    aboutText: "Nicht austauschbare Standardbetreuung, sondern ein ruhiger, verlässlicher Vor-Ort-Service für Eigentümer, die Kontrolle, Sicherheit und klare Rückmeldung erwarten. Dahinter stehen handwerkliches Verständnis, belastbare Organisation und ein professioneller Umgang mit Verantwortung.",
    aboutBox1Title: "Präsenz mit geschultem Blick",
    aboutBox1Text: "Handwerkliche Ausbildung und praktisches Verständnis helfen dabei, sichtbare Auffälligkeiten, beginnende Schäden und Zustandsveränderungen frühzeitig zu erkennen. Es geht nicht um technische Eingriffe, sondern um saubere Sichtprüfung, Einordnung und klare Rückmeldung, bevor aus kleinen Problemen teure Folgeschäden werden.",
    aboutBox2Title: "Vertrauenswürdigkeit und Diskretion",
    aboutBox2Text: "Acht Jahre Berufserfahrung im diplomatischen Dienst stehen für Diskretion, klare Kommunikation, Verbindlichkeit und einen professionellen Umgang mit sensiblen Situationen. Gerade bei leerstehenden oder hochwertigen Immobilien ist das ein echter Vertrauensfaktor.",
    aboutBox3Title: "Koordination mit Struktur statt Improvisation",
    aboutBox3Text: "Als geprüfter Logistikmeister (IHK) bringe ich die Fähigkeit mit, Abläufe sauber zu planen, Prioritäten zu setzen und Maßnahmen nachvollziehbar umzusetzen. Wenn externe Dienstleister nötig sind, wird nicht nur weitergeleitet, sondern vor Ort mitgedacht, nachgefasst und transparent berichtet.",

    riskTitle: "Was ohne laufende Betreuung schnell passiert",
    riskText: "Viele Probleme beginnen klein. Kritisch oder teuer werden sie oft erst dann, wenn über Wochen oder Monate niemand hinsieht, niemand dokumentiert und niemand vor Ort sichtbar Verantwortung übernimmt.",
    riskBox1Title: "Feuchtigkeit, Standschäden und ungeklärte Mängel",
    riskBox1Text: "Geschlossene Immobilien entwickeln schneller Gerüche, Feuchtigkeit oder unbemerkte Wasserschäden. Je später reagiert wird, desto höher werden Aufwand und Kosten. Ohne laufende Kontrolle bleibt oft sogar unklar, wann ein Problem überhaupt begonnen hat.",
    riskBox2Title: "Ungepflegte Außenbereiche senden das falsche Signal",
    riskBox2Text: "Ein sichtbar gepflegtes Objekt wirkt betreut, bewohnt und unter Beobachtung. Vernachlässigte Außenflächen, stehende Verschmutzungen oder ein ungepflegter Pool signalisieren dagegen schnell Abwesenheit. Genau das möchten viele Eigentümer vermeiden.",
    riskBox3Title: "Im Ernstfall fehlt vor Ort die Übersicht",
    riskBox3Text: "Wenn Eigentümer nicht vor Ort sind, fehlt oft ein verlässlicher Ansprechpartner. Genau dann entstehen Verzögerungen, Missverständnisse und unnötige Mehrkosten. Laufende Betreuung bedeutet deshalb nicht nur Kontrolle, sondern vor allem Präsenz, Übersicht und schnelle Reaktion.",

    trustTitle: "So sieht eine professionelle Rückmeldung aus",
    trustText: "Keine diffuse Aussage wie „alles okay“. Eigentümer bekommen eine knappe, klare und nachvollziehbare Rückmeldung zum Objektzustand.",
    trustBullet1: "Kontrolltermin durchgeführt und Immobilie innen sowie außen geprüft",
    trustBullet2: "Fotos oder kurzes Video vom aktuellen Zustand",
    trustBullet3: "Hinweis auf sichtbare Auffälligkeiten, Priorität und empfohlene nächste Schritte",
    trustBullet4: "Rückmeldung nach erledigter Koordination mit externen Dienstleistern",

    entryPriceTitle: "Orientierung für den Einstieg",
    entryPriceText: "Wer eine verlässliche Betreuung sucht, sollte von Anfang an einen realistischen Preisrahmen sehen. Das wirkt seriöser als unklare Kontaktformulare ohne Einordnung.",
    entryPriceLabel1: "Laufende Betreuung",
    entryPriceValue1: "ab 100 € / Monat",
    entryPriceLabel2: "Objektkontrolle vor Ort",
    entryPriceValue2: "ab 45 € / Einsatz",
    entryPriceLabel3: "Zusatzleistungen",
    entryPriceValue3: "nach Umfang und Aufwand",

    servicesTitle: "Unsere Leistungen",
    servicesText: "Der Schwerpunkt liegt auf Kontrolle, Dokumentation und verlässlicher Präsenz vor Ort. Zusatzleistungen ergänzen diesen Kern sinnvoll – ohne die Rolle als klassischer Reparatur- oder Wartungsdienst zu übernehmen.",

    inspectionTitle: "Objektkontrolle & Präsenz vor Ort",
    inspectionText: "Regelmäßige Sichtprüfung innen und außen, Lüften, Zustandskontrolle und klare Rückmeldung für Eigentümer, die nicht dauerhaft vor Ort sind.",
    inspectionDetail1: "Sichtprüfung zugänglicher Innen- und Außenbereiche",
    inspectionDetail2: "Lüften der Immobilie und allgemeiner Zustandscheck",
    inspectionDetail3: "Foto- und Statusrückmeldung bei Bedarf",
    inspectionDetail4: "Früherkennung sichtbarer Auffälligkeiten ohne technische Diagnose",

    outsideTitle: "Pool- und Außenbereich Sichtkontrolle",
    outsideText: "Sichtprüfung von Pool, Garten und Außenflächen, damit ungepflegte Zustände oder auffällige Veränderungen nicht unbemerkt bleiben.",
    outsideDetail1: "Sichtkontrolle von Poolzustand und sichtbarer Wasserlinie",
    outsideDetail2: "Überblick über Garten, Terrasse und Außenwirkung",
    outsideDetail3: "Hinweis auf sichtbare Verschmutzungen oder Auffälligkeiten",
    outsideDetail4: "Keine technische Wartung, keine Reparatur und keine Poolinstandsetzung",

    coordinationTitle: "Koordination & Eigentümer-Support",
    coordinationText: "Wenn externe Dienstleister oder Rückfragen vor Ort nötig werden, erfolgt die Abstimmung strukturiert, nachvollziehbar und mit klarer Rückmeldung.",
    coordinationDetail1: "Ansprechpartner vor Ort für Eigentümer und externe Dienstleister",
    coordinationDetail2: "Nachkontrolle und Rückmeldung nach abgestimmten Maßnahmen",
    coordinationDetail3: "Vorbereitung vor Ankunft von Eigentümern oder Gästen",
    coordinationDetail4: "Klare Kommunikation statt unübersichtlicher Weiterleitung",

    extrasTitle: "Zusatzleistungen im passenden Rahmen",
    extrasText: "Welcome-Pakete, Einkaufsservice, Schlüsselservice und priorisierte Notfall-Reaktion ergänzen die Betreuung dort, wo sie für Eigentümer wirklich sinnvoll sind.",
    extrasDetail1: "Welcome-Paket Basis oder Komfort",
    extrasDetail2: "Einkaufsservice nach Liste, Warenkosten separat",
    extrasDetail3: "Schlüsselservice und abgestimmte Übergaben",
    extrasDetail4: "Notfall-Reaktion im vereinbarten Rahmen für Bestandskunden",

    detailsBtnOpen: "Details anzeigen",
    detailsBtnClose: "Details ausblenden",

    calcTitle: "Preisrechner",
    calcText: "Der Rechner fasst die gewählten Leistungen in einem nachvollziehbaren Gesamtpreis zusammen. Grundlage sind Objektgröße, Außenfläche, Pool, Frequenz und Zusatzaufwand – nicht künstliche Billigpakete.",
    fieldPropertyType: "Immobilienart",
    fieldFrequency: "Betreuungsrhythmus",
    fieldLivingSize: "Wohnfläche (m²)",
    fieldPlotSize: "Grundstück / Außenfläche (m²)",
    fieldPoolSize: "Poolgröße (m²)",
    fieldServices: "Leistungen wählen",

    typeApartment: "Apartment",
    typeVilla: "Villa / Haus",
    freqOneTime: "Einzeltermin / einmaliger Einsatz",
    freqMonthly: "Regelmäßige Betreuung: 1 Besuch pro Monat",
    freqTwiceMonthly: "Regelmäßige Betreuung: 2 Besuche pro Monat",

    serviceInspection: "Objektkontrolle innen/außen",
    serviceInspectionSub: "Sichtprüfung, Lüften, kurze Rückmeldung",
    serviceOutside: "Pool- und Außenbereich Sichtkontrolle",
    serviceOutsideSub: "Pool, Garten und Außenwirkung im Überblick",
    serviceArrival: "Vorbereitung vor Ankunft",
    serviceArrivalSub: "Lüften, Sichtprüfung, einfacher Vorbereitungszustand",
    extraReport: "Foto- und Statusbericht",
    extraReportSub: "Mehr Dokumentation für Eigentümer",
    extraKeys: "Schlüsselservice",
    extraKeysSub: "Verwahrung, Übergabe oder Empfang im vereinbarten Rahmen",
    extraVentilation: "Lüften / Kurzcheck",
    extraVentilationSub: "Zwischenbesuch ohne vollständige Objektkontrolle",
    extraWelcomeBasic: "Welcome-Paket Basis",
    extraWelcomeBasicSub: "Basisversorgung, Servicepauschale, Waren extra",
    extraWelcomeComfort: "Welcome-Paket Komfort",
    extraWelcomeComfortSub: "Erweiterte Ankunftsversorgung, Servicepauschale, Waren extra",
    extraShopping: "Einkaufsservice nach Liste",
    extraShoppingSub: "Servicepauschale plus Warenkosten nach Beleg",
    extraEmergency: "Notfall-Erreichbarkeit & Reaktion",
    extraEmergencySub: "Priorisierte Reaktion für Bestandskunden im vereinbarten Rahmen",

    summaryTitle: "Preisübersicht",
    summaryText: "Hier werden alle gewählten Positionen einzeln aufgeführt und unten als Gesamtpreis zusammengefasst.",
    grandTotalLabel: "Gesamtpreis",
    pricingNote: "Hinweis: Der Rechner ist eine belastbare Orientierung, kein blindes Billigangebot. Reparaturen, technische Wartung, Fahrten, Motorstarts, Diagnosen und Sonderfälle sind nicht automatisch enthalten. Welcome-Pakete und Einkaufsservice enthalten Servicepauschalen; Warenkosten kommen zusätzlich nach Beleg hinzu.",

    summaryBase: "Grundpreis Objekt",
    summaryInspection: "Objektkontrolle",
    summaryOutside: "Pool- und Außenbereich Sichtkontrolle",
    summaryArrival: "Vorbereitung vor Ankunft",
    summaryReport: "Foto- und Statusbericht",
    summaryKeys: "Schlüsselservice",
    summaryVentilation: "Lüften / Kurzcheck",
    summaryWelcomeBasic: "Welcome-Paket Basis",
    summaryWelcomeComfort: "Welcome-Paket Komfort",
    summaryShopping: "Einkaufsservice",
    summaryEmergency: "Notfall-Erreichbarkeit",

    contactTitle: "Direkt anfragen",
    contactText: "Die Anfrage wird mit den wichtigsten Eckdaten aus dem Rechner vorbereitet. So entstehen keine unklaren oder halbleeren Anfragen.",
    contactNameLabel: "Name",
    contactEmailLabel: "E-Mail",
    contactPhoneLabel: "Telefon / WhatsApp",
    contactLocationLabel: "Ort der Immobilie",
    contactMessageLabel: "Zusätzliche Nachricht",
    emailBtn: "📧 Anfrage per E-Mail",
    whatsappBtn: "💬 Anfrage per WhatsApp",

    logicTitle: "Warum diese Preislogik sinnvoller ist",
    logicText: "Standardpakete sehen im Marketing oft gut aus, greifen in der Praxis aber zu kurz. Diese Seite nutzt daher eine nachvollziehbare Logik aus Grundpreis, Größenfaktor, Außenaufwand und Zusatzleistungen.",
    logicBox1Title: "1. Grundpreis pro Objekt",
    logicBox1Text: "Jeder Einsatz beginnt mit einem wirtschaftlich sinnvollen Basissatz. Damit werden Anfahrt, Organisation und Mindestaufwand sauber abgedeckt.",
    logicBox2Title: "2. Größe und Außenflächen zählen real",
    logicBox2Text: "Mehr Wohnfläche, mehr Außenbereich und ein größerer Pool bedeuten mehr Zeit und mehr Aufmerksamkeit. Genau deshalb steigt der Preis mit dem tatsächlichen Umfang.",
    logicBox3Title: "3. Dokumentation und Reaktion sind Wertfaktoren",
    logicBox3Text: "Foto- und Statusberichte, Schlüsselservice, Ankunftsvorbereitung oder priorisierte Notfall-Reaktion erzeugen echten Mehrwert. Diese Leistungen müssen deshalb sichtbar im Preis berücksichtigt werden.",

    footerText: "Costa Care Alicante – strukturierte Betreuung für Zweitwohnsitze, Ferienimmobilien und Eigentümer mit Qualitätsanspruch.",

    requestSubject: "Neue Anfrage Costa Care Alicante",
    requestHeadline: "Neue Anfrage über die Website",
    requestEstimated: "Geschätzter Preis",
    placeholderName: "Ihr Name",
    placeholderEmail: "ihre@email.de",
    placeholderPhone: "+49 ...",
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
    brandSub: "Presence, oversight and value preservation on site",
    navServices: "Services",
    navCalc: "Calculator",
    navPricing: "Pricing logic",
    navWhy: "Why us",
    navContact: "Contact",

    eyebrow: "Reliable property oversight on the Costa Blanca",
    heroTitle: "Your trusted local contact – with clear inspections, structured reporting and fast reaction.",
    heroText: "Costa Care Alicante is designed for owners who are not permanently on site and do not want to leave their property to chance. The focus is on regular property checks, photo and status reports, visual inspection of outside areas, coordination when needed and a reliable local presence – not classic handyman work or technical maintenance.",
    launchNote: "Development phase: The service is currently being structured and prepared. Inquiries can already be submitted, future support can be planned and suitable service models can be discussed.",
    heroBtnPrimary: "Estimate service",
    heroBtnSecondary: "View services",
    stat1Value: "3 languages",
    stat1Label: "German, English, Spanish",
    stat2Value: "Structured",
    stat2Label: "Clear services instead of vague promises",
    stat3Value: "Transparent",
    stat3Label: "Total price with line items",

    aboutTitle: "Why this service is different",
    aboutText: "Not generic property support, but a calm and reliable on-site service for owners who expect control, security and clear feedback. It is backed by craft understanding, strong organization and a professional approach to responsibility.",
    aboutBox1Title: "Presence with a trained eye",
    aboutBox1Text: "Craft training and practical understanding help identify visible issues, early-stage damage and changes in condition at an early stage. This is not about technical intervention, but about clean visual inspection, realistic assessment and clear feedback before small issues turn into expensive damage.",
    aboutBox2Title: "Trustworthiness and discretion",
    aboutBox2Text: "Eight years of professional experience in diplomatic service stand for discretion, clear communication, dependability and a professional way of handling sensitive situations. Especially for vacant or high-value properties, this is a real trust factor.",
    aboutBox3Title: "Coordination with structure instead of improvisation",
    aboutBox3Text: "As a certified logistics master (CCI) – Bachelor Professional of Logistics – I bring the ability to plan processes clearly, set priorities and implement measures in a traceable way. When external providers are needed, tasks are not merely passed on but followed up locally with transparent reporting.",

    riskTitle: "What happens quickly without ongoing care",
    riskText: "Many problems start small. They often become critical or expensive only when no one checks, documents or visibly takes responsibility on site for weeks or months.",
    riskBox1Title: "Moisture, standing damage and unresolved defects",
    riskBox1Text: "Closed properties develop odors, moisture or unnoticed water damage more quickly. The later the reaction, the higher the effort and cost. Without ongoing checks, it often remains unclear when a problem actually started.",
    riskBox2Title: "Neglected outdoor areas send the wrong signal",
    riskBox2Text: "A visibly cared-for property looks monitored, used and under observation. Neglected outside areas, standing dirt or an unkept pool quickly signal absence instead. That is exactly what many owners want to avoid.",
    riskBox3Title: "In serious situations, local oversight is missing",
    riskBox3Text: "When owners are not on site, there is often no reliable local contact. That is when delays, misunderstandings and unnecessary extra costs arise. Ongoing support therefore means not just checking, but also presence, overview and quick reaction.",

    trustTitle: "What professional reporting looks like",
    trustText: "No vague message such as “everything is fine.” Owners receive a short, clear and traceable update on the property condition.",
    trustBullet1: "Inspection completed and property checked inside and outside",
    trustBullet2: "Photos or a short video of the current condition",
    trustBullet3: "Note on visible issues, priority and recommended next steps",
    trustBullet4: "Update after coordination with external service providers",

    entryPriceTitle: "Entry-level guidance",
    entryPriceText: "Anyone looking for reliable care should see a realistic price range from the start. That appears more credible than vague contact forms without context.",
    entryPriceLabel1: "Ongoing care",
    entryPriceValue1: "from €100 / month",
    entryPriceLabel2: "On-site property check",
    entryPriceValue2: "from €45 / visit",
    entryPriceLabel3: "Additional services",
    entryPriceValue3: "depending on scope and effort",

    servicesTitle: "Our services",
    servicesText: "The focus is on oversight, reporting and reliable local presence. Additional services complement this core in a sensible way – without turning the role into a classic repair or maintenance service.",

    inspectionTitle: "Property checks & local presence",
    inspectionText: "Regular visual checks inside and outside, airing, condition review and clear feedback for owners who are not permanently on site.",
    inspectionDetail1: "Visual inspection of accessible inside and outside areas",
    inspectionDetail2: "Airing of the property and general condition check",
    inspectionDetail3: "Photo and status feedback when needed",
    inspectionDetail4: "Early detection of visible issues without technical diagnosis",

    outsideTitle: "Pool and outdoor visual checks",
    outsideText: "Visual review of pool, garden and outside areas so neglected conditions or visible changes do not go unnoticed.",
    outsideDetail1: "Visual check of pool condition and visible water line",
    outsideDetail2: "Overview of garden, terrace and general outside appearance",
    outsideDetail3: "Notice of visible dirt or irregularities",
    outsideDetail4: "No technical maintenance, no repairs and no pool servicing",

    coordinationTitle: "Coordination & owner support",
    coordinationText: "When external service providers or local follow-up are needed, coordination is handled in a structured and transparent way with clear feedback.",
    coordinationDetail1: "Local contact point for owners and external providers",
    coordinationDetail2: "Follow-up check and reporting after agreed measures",
    coordinationDetail3: "Preparation before arrival of owners or guests",
    coordinationDetail4: "Clear communication instead of fragmented forwarding",

    extrasTitle: "Additional services within clear limits",
    extrasText: "Welcome packages, shopping service, key service and prioritized emergency reaction complement the support where they are genuinely useful for owners.",
    extrasDetail1: "Welcome package basic or comfort",
    extrasDetail2: "Shopping service by list, goods charged separately",
    extrasDetail3: "Key service and agreed handovers",
    extrasDetail4: "Emergency reaction within the agreed scope for existing clients",

    detailsBtnOpen: "Show details",
    detailsBtnClose: "Hide details",

    calcTitle: "Price calculator",
    calcText: "The calculator combines the selected services into a traceable total price. It is based on property size, outdoor area, pool, frequency and extra effort – not on artificial bargain packages.",
    fieldPropertyType: "Property type",
    fieldFrequency: "Service rhythm",
    fieldLivingSize: "Living area (m²)",
    fieldPlotSize: "Plot / outdoor area (m²)",
    fieldPoolSize: "Pool size (m²)",
    fieldServices: "Choose services",

    typeApartment: "Apartment",
    typeVilla: "Villa / house",
    freqOneTime: "Single appointment / one-time visit",
    freqMonthly: "Regular support: 1 visit per month",
    freqTwiceMonthly: "Regular support: 2 visits per month",

    serviceInspection: "Property check inside/outside",
    serviceInspectionSub: "Visual inspection, airing, short feedback",
    serviceOutside: "Pool and outdoor visual check",
    serviceOutsideSub: "Pool, garden and outside appearance at a glance",
    serviceArrival: "Preparation before arrival",
    serviceArrivalSub: "Airing, visual check, simple ready condition",
    extraReport: "Photo and status report",
    extraReportSub: "More documentation for owners",
    extraKeys: "Key service",
    extraKeysSub: "Storage, handover or reception within agreed scope",
    extraVentilation: "Airing / quick check",
    extraVentilationSub: "Intermediate visit without full property check",
    extraWelcomeBasic: "Welcome package basic",
    extraWelcomeBasicSub: "Basic supplies, service fee, goods extra",
    extraWelcomeComfort: "Welcome package comfort",
    extraWelcomeComfortSub: "Extended arrival supplies, service fee, goods extra",
    extraShopping: "Shopping service by list",
    extraShoppingSub: "Service fee plus goods by receipt",
    extraEmergency: "Emergency availability & reaction",
    extraEmergencySub: "Prioritized response for existing clients within agreed scope",

    summaryTitle: "Price overview",
    summaryText: "All selected items are listed individually and summarized below as a total price.",
    grandTotalLabel: "Total price",
    pricingNote: "Note: The calculator is a solid guideline, not a blind bargain offer. Repairs, technical maintenance, driving, engine starts, diagnostics and special cases are not automatically included. Welcome packages and shopping service include service fees; goods are charged separately by receipt.",

    summaryBase: "Base property fee",
    summaryInspection: "Property check",
    summaryOutside: "Pool and outdoor visual check",
    summaryArrival: "Preparation before arrival",
    summaryReport: "Photo and status report",
    summaryKeys: "Key service",
    summaryVentilation: "Airing / quick check",
    summaryWelcomeBasic: "Welcome package basic",
    summaryWelcomeComfort: "Welcome package comfort",
    summaryShopping: "Shopping service",
    summaryEmergency: "Emergency availability",

    contactTitle: "Request directly",
    contactText: "The request is prepared with the key data from the calculator. That avoids unclear or half-empty inquiries.",
    contactNameLabel: "Name",
    contactEmailLabel: "Email",
    contactPhoneLabel: "Phone / WhatsApp",
    contactLocationLabel: "Property location",
    contactMessageLabel: "Additional message",
    emailBtn: "📧 Send email request",
    whatsappBtn: "💬 Send WhatsApp request",

    logicTitle: "Why this pricing logic makes more sense",
    logicText: "Standard packages may look attractive in marketing, but they often miss reality. This page therefore uses a clear logic based on base fee, size factor, outdoor effort and additional services.",
    logicBox1Title: "1. Base fee per property",
    logicBox1Text: "Every visit starts with an economically sensible base rate. This covers travel, organization and minimum effort properly.",
    logicBox2Title: "2. Size and outside areas matter in reality",
    logicBox2Text: "More living area, more outdoor space and a larger pool mean more time and more attention. That is why the price rises with the actual scope.",
    logicBox3Title: "3. Reporting and reaction are value factors",
    logicBox3Text: "Photo and status reports, key service, arrival preparation or prioritized emergency reaction create real value. These services must therefore be visible in the price.",

    footerText: "Costa Care Alicante – structured support for second homes, holiday properties and owners with high standards.",

    requestSubject: "New Costa Care Alicante request",
    requestHeadline: "New request from the website",
    requestEstimated: "Estimated price",
    placeholderName: "Your name",
    placeholderEmail: "your@email.com",
    placeholderPhone: "+44 ...",
    placeholderLocation: "e.g. Alicante, Torrevieja",
    placeholderMessage: "Short additional information about the property or your needs",
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
    brandSub: "Presencia, control y conservación del valor sobre el terreno",
    navServices: "Servicios",
    navCalc: "Calculadora",
    navPricing: "Lógica de precios",
    navWhy: "Por qué nosotros",
    navContact: "Contacto",

    eyebrow: "Supervisión fiable de propiedades en la Costa Blanca",
    heroTitle: "Su persona de confianza sobre el terreno, con control claro, documentación estructurada y reacción rápida.",
    heroText: "Costa Care Alicante está dirigido a propietarios que no están de forma permanente en el lugar y no quieren dejar su inmueble al azar. El enfoque está en controles periódicos, informes con fotos y estado, revisión visual de zonas exteriores, coordinación cuando sea necesaria y una presencia fiable sobre el terreno, no en trabajos clásicos de mantenimiento técnico o reparaciones.",
    launchNote: "Fase de preparación: el servicio se está estructurando actualmente. Ya es posible enviar consultas, planificar una futura atención y definir modelos de servicio adecuados.",
    heroBtnPrimary: "Calcular servicio",
    heroBtnSecondary: "Ver servicios",
    stat1Value: "3 idiomas",
    stat1Label: "Alemán, inglés, español",
    stat2Value: "Estructurado",
    stat2Label: "Servicios claros en lugar de promesas abiertas",
    stat3Value: "Transparente",
    stat3Label: "Precio total con partidas individuales",

    aboutTitle: "Por qué este servicio es diferente",
    aboutText: "No se trata de una asistencia genérica, sino de un servicio tranquilo y fiable sobre el terreno para propietarios que esperan control, seguridad e información clara. Detrás hay comprensión técnica, organización sólida y un manejo profesional de la responsabilidad.",
    aboutBox1Title: "Presencia con ojo entrenado",
    aboutBox1Text: "La formación técnica y la experiencia práctica ayudan a detectar con antelación anomalías visibles, daños iniciales y cambios en el estado del inmueble. No se trata de intervenir técnicamente, sino de hacer una revisión visual limpia, valorar la situación y dar una respuesta clara antes de que pequeños problemas se conviertan en daños costosos.",
    aboutBox2Title: "Confianza y discreción",
    aboutBox2Text: "Ocho años de experiencia profesional en el servicio diplomático representan discreción, comunicación clara, fiabilidad y un tratamiento profesional de situaciones sensibles. Especialmente en inmuebles vacíos o de alto valor, esto es un verdadero factor de confianza.",
    aboutBox3Title: "Coordinación con estructura, no improvisación",
    aboutBox3Text: "Como maestro logístico titulado (CCI) – Bachelor Professional of Logistics – aporto la capacidad de planificar procesos con claridad, fijar prioridades y aplicar medidas de forma trazable. Cuando se necesitan proveedores externos, no solo se transmite la tarea, sino que se sigue in situ y se informa con transparencia.",

    riskTitle: "Qué ocurre rápidamente sin un seguimiento continuo",
    riskText: "Muchos problemas empiezan siendo pequeños. A menudo se vuelven críticos o caros cuando durante semanas o meses nadie revisa, nadie documenta y nadie asume una responsabilidad visible sobre el terreno.",
    riskBox1Title: "Humedad, daños por falta de uso y defectos sin aclarar",
    riskBox1Text: "Los inmuebles cerrados desarrollan antes olores, humedad o daños por agua no detectados. Cuanto más tarde se reacciona, mayor es el esfuerzo y el coste. Sin control continuo, a menudo ni siquiera queda claro cuándo empezó realmente el problema.",
    riskBox2Title: "Las zonas exteriores descuidadas envían la señal equivocada",
    riskBox2Text: "Un inmueble visiblemente cuidado parece atendido, ocupado y vigilado. En cambio, unas zonas exteriores descuidadas, suciedad acumulada o una piscina sin cuidar señalan ausencia con rapidez. Eso es exactamente lo que muchos propietarios quieren evitar.",
    riskBox3Title: "En situaciones serias falta visión local",
    riskBox3Text: "Cuando los propietarios no están en el lugar, a menudo falta una persona de contacto fiable. Ahí es cuando surgen retrasos, malentendidos y costes innecesarios. Por eso la atención continua no significa solo revisar, sino también presencia, visión global y reacción rápida.",

    trustTitle: "Así es un informe profesional",
    trustText: "Nada de mensajes vagos como “todo bien”. El propietario recibe una respuesta breve, clara y verificable sobre el estado del inmueble.",
    trustBullet1: "Control realizado y revisión del inmueble por dentro y por fuera",
    trustBullet2: "Fotos o vídeo corto del estado actual",
    trustBullet3: "Aviso sobre incidencias visibles, prioridad y siguientes pasos recomendados",
    trustBullet4: "Respuesta tras coordinar con proveedores externos",

    entryPriceTitle: "Orientación inicial",
    entryPriceText: "Quien busca una atención fiable debería ver desde el principio un marco de precios realista. Eso transmite más seriedad que formularios poco claros sin contexto.",
    entryPriceLabel1: "Atención continua",
    entryPriceValue1: "desde 100 € / mes",
    entryPriceLabel2: "Control presencial",
    entryPriceValue2: "desde 45 € / visita",
    entryPriceLabel3: "Servicios adicionales",
    entryPriceValue3: "según alcance y esfuerzo",

    servicesTitle: "Nuestros servicios",
    servicesText: "El enfoque está en el control, la documentación y una presencia fiable sobre el terreno. Los servicios adicionales complementan este núcleo de forma útil, sin convertir la actividad en un servicio clásico de reparación o mantenimiento.",

    inspectionTitle: "Control del inmueble y presencia local",
    inspectionText: "Revisión visual periódica interior y exterior, ventilación, control del estado y respuesta clara para propietarios que no están de forma permanente en el lugar.",
    inspectionDetail1: "Revisión visual de las zonas interiores y exteriores accesibles",
    inspectionDetail2: "Ventilación del inmueble y control general del estado",
    inspectionDetail3: "Respuesta con fotos y estado cuando sea necesario",
    inspectionDetail4: "Detección temprana de incidencias visibles sin diagnóstico técnico",

    outsideTitle: "Control visual de piscina y exteriores",
    outsideText: "Revisión visual de piscina, jardín y zonas exteriores para que estados descuidados o cambios visibles no pasen desapercibidos.",
    outsideDetail1: "Control visual del estado de la piscina y del nivel visible del agua",
    outsideDetail2: "Visión general de jardín, terraza e imagen exterior",
    outsideDetail3: "Aviso sobre suciedad visible o irregularidades",
    outsideDetail4: "Sin mantenimiento técnico, sin reparaciones y sin servicio técnico de piscina",

    coordinationTitle: "Coordinación y soporte al propietario",
    coordinationText: "Cuando se necesitan proveedores externos o seguimiento local, la coordinación se realiza de forma estructurada y transparente, con información clara.",
    coordinationDetail1: "Persona de contacto local para propietarios y proveedores externos",
    coordinationDetail2: "Control posterior e informe tras las medidas acordadas",
    coordinationDetail3: "Preparación antes de la llegada de propietarios o huéspedes",
    coordinationDetail4: "Comunicación clara en lugar de una gestión confusa",

    extrasTitle: "Servicios adicionales dentro de límites claros",
    extrasText: "Paquetes de bienvenida, servicio de compra, servicio de llaves y reacción prioritaria en emergencias complementan la atención cuando realmente son útiles para el propietario.",
    extrasDetail1: "Paquete de bienvenida básico o confort",
    extrasDetail2: "Servicio de compra según lista, productos cobrados aparte",
    extrasDetail3: "Servicio de llaves y entregas acordadas",
    extrasDetail4: "Reacción en emergencias dentro del marco acordado para clientes existentes",

    detailsBtnOpen: "Ver detalles",
    detailsBtnClose: "Ocultar detalles",

    calcTitle: "Calculadora de precio",
    calcText: "La calculadora reúne los servicios elegidos en un precio total comprensible. Se basa en el tamaño del inmueble, la superficie exterior, la piscina, la frecuencia y el esfuerzo adicional, no en paquetes artificialmente baratos.",
    fieldPropertyType: "Tipo de inmueble",
    fieldFrequency: "Ritmo del servicio",
    fieldLivingSize: "Superficie habitable (m²)",
    fieldPlotSize: "Parcela / exterior (m²)",
    fieldPoolSize: "Tamaño de piscina (m²)",
    fieldServices: "Elegir servicios",

    typeApartment: "Apartamento",
    typeVilla: "Villa / casa",
    freqOneTime: "Cita puntual / visita única",
    freqMonthly: "Atención regular: 1 visita al mes",
    freqTwiceMonthly: "Atención regular: 2 visitas al mes",

    serviceInspection: "Control del inmueble interior/exterior",
    serviceInspectionSub: "Revisión visual, ventilación, respuesta breve",
    serviceOutside: "Control visual de piscina y exteriores",
    serviceOutsideSub: "Piscina, jardín e imagen exterior de un vistazo",
    serviceArrival: "Preparación antes de la llegada",
    serviceArrivalSub: "Ventilación, revisión visual y estado básico preparado",
    extraReport: "Informe con fotos y estado",
    extraReportSub: "Más documentación para el propietario",
    extraKeys: "Servicio de llaves",
    extraKeysSub: "Custodia, entrega o recepción dentro del marco acordado",
    extraVentilation: "Ventilación / revisión rápida",
    extraVentilationSub: "Visita intermedia sin control completo del inmueble",
    extraWelcomeBasic: "Paquete de bienvenida básico",
    extraWelcomeBasicSub: "Suministros básicos, tarifa de servicio, productos aparte",
    extraWelcomeComfort: "Paquete de bienvenida confort",
    extraWelcomeComfortSub: "Suministros ampliados de llegada, tarifa de servicio, productos aparte",
    extraShopping: "Servicio de compra según lista",
    extraShoppingSub: "Tarifa de servicio más productos según ticket",
    extraEmergency: "Disponibilidad y reacción de emergencia",
    extraEmergencySub: "Respuesta prioritaria para clientes existentes dentro del marco acordado",

    summaryTitle: "Resumen del precio",
    summaryText: "Aquí se muestran todas las posiciones elegidas por separado y después como precio total.",
    grandTotalLabel: "Precio total",
    pricingNote: "Nota: la calculadora es una orientación sólida, no una oferta ciega y barata. Reparaciones, mantenimiento técnico, desplazamientos, arranques de motor, diagnósticos y casos especiales no están incluidos automáticamente. Los paquetes de bienvenida y el servicio de compra incluyen tarifa de servicio; los productos se cobran aparte según ticket.",

    summaryBase: "Tarifa base del inmueble",
    summaryInspection: "Control del inmueble",
    summaryOutside: "Control visual de piscina y exteriores",
    summaryArrival: "Preparación antes de la llegada",
    summaryReport: "Informe con fotos y estado",
    summaryKeys: "Servicio de llaves",
    summaryVentilation: "Ventilación / revisión rápida",
    summaryWelcomeBasic: "Paquete básico",
    summaryWelcomeComfort: "Paquete confort",
    summaryShopping: "Servicio de compra",
    summaryEmergency: "Disponibilidad de emergencia",

    contactTitle: "Solicitar directamente",
    contactText: "La solicitud se prepara con los datos clave de la calculadora. Así se evitan consultas poco claras o incompletas.",
    contactNameLabel: "Nombre",
    contactEmailLabel: "Correo electrónico",
    contactPhoneLabel: "Teléfono / WhatsApp",
    contactLocationLabel: "Ubicación del inmueble",
    contactMessageLabel: "Mensaje adicional",
    emailBtn: "📧 Enviar solicitud por correo",
    whatsappBtn: "💬 Enviar solicitud por WhatsApp",

    logicTitle: "Por qué esta lógica de precios tiene más sentido",
    logicText: "Los paquetes estándar pueden parecer atractivos en marketing, pero a menudo no reflejan la realidad. Por eso esta página usa una lógica clara basada en tarifa base, tamaño, esfuerzo exterior y servicios adicionales.",
    logicBox1Title: "1. Tarifa base por inmueble",
    logicBox1Text: "Cada visita comienza con una tarifa base económicamente razonable. Así se cubren correctamente desplazamiento, organización y esfuerzo mínimo.",
    logicBox2Title: "2. El tamaño y las zonas exteriores cuentan de verdad",
    logicBox2Text: "Más superficie habitable, más zona exterior y una piscina mayor significan más tiempo y más atención. Por eso el precio sube con el alcance real.",
    logicBox3Title: "3. La documentación y la reacción aportan valor",
    logicBox3Text: "Los informes con fotos y estado, el servicio de llaves, la preparación antes de la llegada o la reacción prioritaria en emergencias generan un valor real. Por eso estos servicios deben verse reflejados en el precio.",

    footerText: "Costa Care Alicante – atención estructurada para segundas residencias, viviendas vacacionales y propietarios con altos estándares.",

    requestSubject: "Nueva solicitud Costa Care Alicante",
    requestHeadline: "Nueva solicitud desde la web",
    requestEstimated: "Precio estimado",
    placeholderName: "Su nombre",
    placeholderEmail: "su@email.com",
    placeholderPhone: "+34 ...",
    placeholderLocation: "p. ej. Alicante, Torrevieja",
    placeholderMessage: "Información adicional breve sobre el inmueble o la necesidad",
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
  checkOutside: document.getElementById("checkOutside"),
  checkArrival: document.getElementById("checkArrival"),
  checkReport: document.getElementById("checkReport"),
  checkKeys: document.getElementById("checkKeys"),
  checkVentilation: document.getElementById("checkVentilation"),
  checkWelcomeBasic: document.getElementById("checkWelcomeBasic"),
  checkWelcomeComfort: document.getElementById("checkWelcomeComfort"),
  checkShopping: document.getElementById("checkShopping"),
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
  if (value === "twiceMonthly") return 1.8;
  if (value === "monthly") return 1;
  return 1.15;
}

function applyLanguage() {
  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });

  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = translations[currentLang][key];
    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  formEls.propertyType.options[0].text = t("typeApartment");
  formEls.propertyType.options[1].text = t("typeVilla");
  formEls.serviceFrequency.options[0].text = t("freqOneTime");
  formEls.serviceFrequency.options[1].text = t("freqMonthly");
  formEls.serviceFrequency.options[2].text = t("freqTwiceMonthly");

  formEls.contactName.placeholder = t("placeholderName");
  formEls.contactEmail.placeholder = t("placeholderEmail");
  formEls.contactPhone.placeholder = t("placeholderPhone");
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
  if (formEls.checkOutside.checked) items.push(t("summaryOutside"));
  if (formEls.checkArrival.checked) items.push(t("summaryArrival"));
  if (formEls.checkReport.checked) items.push(t("summaryReport"));
  if (formEls.checkKeys.checked) items.push(t("summaryKeys"));
  if (formEls.checkVentilation.checked) items.push(t("summaryVentilation"));
  if (formEls.checkWelcomeBasic.checked) items.push(t("summaryWelcomeBasic"));
  if (formEls.checkWelcomeComfort.checked) items.push(t("summaryWelcomeComfort"));
  if (formEls.checkShopping.checked) items.push(t("summaryShopping"));
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

  const baseProperty = propertyType === "villa" ? 56 : 42;
  const livingExtra = Math.min(45, Math.ceil(livingSize * 0.25));
  const plotExtra = plotSize > 300 ? Math.min(20, Math.ceil((plotSize - 300) * 0.02)) : 0;

  const lines = [[t("summaryBase"), baseProperty + livingExtra + plotExtra]];

  if (formEls.checkInspection.checked) {
    lines.push([t("summaryInspection"), Math.ceil(45 * frequencyFactor)]);
  }

  if (formEls.checkOutside.checked) {
    let outsideBase = 0;
    if (poolSize > 0) {
      outsideBase += Math.min(35, Math.max(15, Math.ceil(15 + poolSize * 0.5)));
    }
    if (plotSize > 0) {
      outsideBase += Math.max(10, Math.ceil(plotSize * 0.01));
    }
    lines.push([t("summaryOutside"), Math.ceil(outsideBase * frequencyFactor)]);
  }

  if (formEls.checkArrival.checked) {
    lines.push([t("summaryArrival"), 35]);
  }

  if (formEls.checkReport.checked) {
    lines.push([t("summaryReport"), 10]);
  }

  if (formEls.checkKeys.checked) {
    lines.push([t("summaryKeys"), 18]);
  }

  if (formEls.checkVentilation.checked) {
    lines.push([t("summaryVentilation"), 15]);
  }

  if (formEls.checkWelcomeBasic.checked) {
    lines.push([t("summaryWelcomeBasic"), 25]);
  }

  if (formEls.checkWelcomeComfort.checked) {
    lines.push([t("summaryWelcomeComfort"), 45]);
  }

  if (formEls.checkShopping.checked) {
    lines.push([t("summaryShopping"), 35]);
  }

  if (formEls.checkEmergency.checked) {
    lines.push([t("summaryEmergency"), 25]);
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
