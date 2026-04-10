const CONFIG = {
  email: "Marco-weiss83@web.de",
  whatsapp: "4915253692878"
};

const translations = {
  de: {
    brand: "Costa Care Alicante",
    brandSub: "Präsenz, Kontrolle und Werterhalt vor Ort",
    navServices: "Leistungen",
    navCalc: "Rechner",
    navPricing: "Preislogik",
    navWhy: "Warum wir",
    navContact: "Kontakt",

    eyebrow: "Verlässliche Objektbetreuung an der Costa Blanca",
    heroTitle: "Ihr vertrauenswürdiger Ansprechpartner vor Ort – mit klarer Kontrolle, strukturierter Dokumentation und schneller Reaktion.",
    heroText: "Costa Care Alicante richtet sich an Eigentümer, die nicht dauerhaft vor Ort sind und ihre Immobilie nicht dem Zufall überlassen wollen. Im Mittelpunkt stehen regelmäßige Objektkontrollen, Foto- und Statusberichte, Sichtprüfung von Außenbereichen, Koordination im Bedarfsfall und eine verlässliche Präsenz vor Ort.",
    launchNote: "Aufbauphase: Die Betreuung wird aktuell strukturiert vorbereitet. Bereits jetzt können Anfragen gestellt, zukünftige Betreuung geplant und sinnvolle Leistungsmodelle abgestimmt werden.",
    heroBtnPrimary: "Service grob kalkulieren",
    heroBtnSecondary: "Leistungen ansehen",
    stat1Value: "3-sprachig",
    stat1Label: "Deutsch, Englisch, Spanisch",
    stat2Value: "Premium",
    stat2Label: "Klare Leistungen statt Billigservice",
    stat3Value: "Transparent",
    stat3Label: "Nachvollziehbare Preislogik mit Einzelpositionen",

    aboutTitle: "Warum diese Betreuung anders ist",
    aboutText: "Nicht austauschbare Standardbetreuung, sondern ein ruhiger, verlässlicher Vor-Ort-Service für Eigentümer, die Kontrolle, Sicherheit und klare Rückmeldung erwarten. Dahinter stehen handwerkliches Verständnis, belastbare Organisation und ein professioneller Umgang mit Verantwortung.",
    aboutBox1Title: "Präsenz mit geschultem Blick",
    aboutBox1Text: "Handwerkliche Ausbildung und praktisches Verständnis helfen dabei, sichtbare Auffälligkeiten, beginnende Schäden und Zustandsveränderungen frühzeitig zu erkennen. Es geht nicht um technische Eingriffe, sondern um saubere Sichtprüfung, Einordnung und klare Rückmeldung.",
    aboutBox2Title: "Vertrauenswürdigkeit und Diskretion",
    aboutBox2Text: "Acht Jahre Berufserfahrung im diplomatischen Dienst stehen für Diskretion, klare Kommunikation, Verbindlichkeit und einen professionellen Umgang mit sensiblen Situationen. Gerade bei leerstehenden oder hochwertigen Immobilien ist das ein echter Vertrauensfaktor.",
    aboutBox3Title: "Koordination mit Struktur statt Improvisation",
    aboutBox3Text: "Als geprüfter Logistikmeister (IHK) bringe ich die Fähigkeit mit, Abläufe sauber zu planen, Prioritäten zu setzen und Maßnahmen nachvollziehbar umzusetzen. Wenn externe Dienstleister nötig sind, wird nicht nur weitergeleitet, sondern vor Ort mitgedacht, nachgefasst und transparent berichtet.",

    servicesTitle: "Unsere Leistungen",
    servicesText: "Der Schwerpunkt liegt auf Kontrolle, Dokumentation und verlässlicher Präsenz vor Ort. Zusatzleistungen ergänzen diesen Kern sinnvoll – ohne daraus einen unscharfen Allround-Service zu machen.",
    inspectionTitle: "Objektkontrolle & Präsenz vor Ort",
    inspectionText: "Regelmäßige Sichtprüfung innen und außen, Lüften, Zustandskontrolle und klare Rückmeldung für Eigentümer, die nicht dauerhaft vor Ort sind.",
    outsideTitle: "Pool- und Außenbereich Sichtkontrolle",
    outsideText: "Sichtprüfung von Pool, Garten und Außenflächen, damit ungepflegte Zustände oder auffällige Veränderungen nicht unbemerkt bleiben.",
    coordinationTitle: "Koordination & Eigentümer-Support",
    coordinationText: "Wenn externe Dienstleister oder Rückfragen vor Ort nötig werden, erfolgt die Abstimmung strukturiert, nachvollziehbar und mit klarer Rückmeldung.",
    extrasTitle: "Zusatzleistungen im passenden Rahmen",
    extrasText: "Welcome-Pakete, Einkaufsservice, Schlüsselservice, Asset-Checks und priorisierte Reaktion ergänzen die Betreuung dort, wo sie für Eigentümer wirklich sinnvoll sind.",

    calcTitle: "Service-Rechner",
    calcText: "Die Kalkulation bildet Objektgröße, Vertragsmodell, Besuchsfrequenz und Zusatzleistungen in einer nachvollziehbaren Premium-Logik ab. Einmalige Einsätze liegen bewusst höher als laufende Betreuung.",
    fieldPropertyType: "Objektkategorie",
    fieldPropertyTypeHelp: "Apartment typischerweise bis ca. 110 m². Villa ab höherer Fläche, mehr Außenbereich oder größerer Objektkomplexität.",
    fieldContractModel: "Vertragsmodell",
    fieldContractModelHelp: "Längere Laufzeiten erhalten die attraktivsten Konditionen. Kündigungsfrist bei Vertragsmodellen: 14 Tage vor Laufzeitende.",
    fieldFrequency: "Besuchsfrequenz",
    fieldFrequencyHelpOneTime: "Beim einmaligen Einsatz bleibt es bei einem einzelnen Termin ohne laufende Betreuung.",
    fieldFrequencyHelpRecurring: "Für laufende Betreuung wählst du hier, wie oft das Objekt im Monat betreut werden soll.",
    fieldLivingSize: "Wohnfläche (m²)",
    fieldApartmentOutdoor: "Außenbereich Apartment",
    fieldApartmentOutdoorHelp: "Für Apartments wird der Außenbereich nicht über Grundstücksfläche, sondern über den tatsächlichen Außenbezug bewertet.",
    fieldPlotSize: "Grundstück / Außenfläche (m²)",
    fieldPlotHelp: "Für Villen wird die Außenfläche über nachvollziehbare Stufen bewertet, nicht über symbolische Kleinstbeträge.",
    fieldPoolSize: "Poolgröße (m²)",
    fieldPoolHelp: "Nur Sichtkontrolle und Dokumentation. Keine Reinigung, keine Wasserpflege, keine technischen Eingriffe.",
    fieldYachtSize: "Yacht-Länge",
    fieldYachtLocation: "Liegeort der Yacht",
    fieldYachtLocationHelp: "Yacht-Checks außerhalb des regulären Einsatzgebiets werden individuell abgestimmt und nicht automatisch kalkuliert.",
    fieldServices: "Leistungen auswählen",

    typeApartment: "Apartment",
    typeVilla: "Villa",

    contractOneTime: "Einmaliger Einsatz",
    contractMonthlyFlex: "Monatlich kündbare Betreuung",
    contractThreeMonths: "3-Monats-Betreuung",
    contractSixMonths: "6-Monats-Betreuung",
    contractTwelveMonths: "12-Monats-Betreuung",

    frequencyOneVisit: "1 Besuch",
    frequencyMonthly: "1 Besuch pro Monat",
    frequencyWeekly: "4 Besuche pro Monat",

    apartmentOutdoorNone: "Kein Außenbereich",
    apartmentOutdoorSmall: "Balkon / kleine Terrasse",
    apartmentOutdoorLarge: "Große Terrasse / Dachterrasse",

    yachtNone: "Kein Yacht-Check",
    yachtUpTo10: "Bis 10 m",
    yachtTenTo15: "10,1 bis 15 m",
    yachtFifteenTo20: "15,1 bis 20 m",
    yachtOver20: "Über 20 m – auf Anfrage",

    yachtLocationInside: "Im Raum Alicante / Costa Blanca",
    yachtLocationOutside: "Außerhalb des regulären Einsatzgebiets",

    serviceInspection: "Objektkontrolle innen/außen",
    serviceInspectionSub: "Sichtprüfung, Lüften, Zustandscheck vor Ort",
    serviceReport: "Foto- und Statusbericht",
    serviceReportSub: "Dokumentierte Rückmeldung mit Fotos und kurzer Einordnung",
    serviceKeys: "Schlüsselservice",
    serviceKeysSub: "Verwahrung, abgestimmte Übergabe oder Empfang",
    serviceVentilation: "Lüften / Kurzcheck",
    serviceVentilationSub: "Zwischenbesuch ohne vollständige Kontrolle",
    serviceArrival: "Vorbereitung vor Ankunft",
    serviceArrivalSub: "Lüften, Sichtprüfung, einfacher vorbereiteter Zustand",
    serviceWelcomeBasic: "Welcome-Paket Basis",
    serviceWelcomeBasicSub: "Einfache Grundversorgung für eine angenehme Ankunft",
    serviceWelcomeComfort: "Welcome-Paket Komfort",
    serviceWelcomeComfortSub: "Erweiterte Ankunftsvorbereitung mit zusätzlicher Erstversorgung",
    serviceShopping: "Einkaufsservice nach Liste",
    serviceShoppingSub: "Servicepauschale plus Warenkosten nach Beleg",
    serviceEmergency: "Notfall-Erreichbarkeit & priorisierte Reaktion",
    serviceEmergencySub: "Erweiterte Erreichbarkeit für Bestandskunden bei dringenden Vorfällen",
    serviceAuto: "Auto-Check",
    serviceAutoSub: "Sichtprüfung, Batterieanzeige, Reifen und kurzer Bericht",
    serviceYacht: "Yacht-Check",
    serviceYachtSub: "Nur für Yachten im Raum Alicante / Costa Blanca und im vereinbarten Einsatzgebiet.",

    detailWelcomeBasicTitle: "Welcome-Paket Basis – enthalten",
    detailWelcomeBasic1: "Trinkwasser bei Ankunft",
    detailWelcomeBasic2: "Toilettenpapier-Grundausstattung",
    detailWelcomeBasic3: "Handseife und Spülmittel",
    detailWelcomeBasic4: "Müllbeutel / kleine Basisversorgung",
    detailWelcomeBasic5: "Kurzer Sichtcheck vor Ankunft",
    detailWelcomeBasicNote: "Warenkosten kommen zusätzlich nach Beleg hinzu, sofern Einkäufe erforderlich sind.",

    detailWelcomeComfortTitle: "Welcome-Paket Komfort – enthalten",
    detailWelcomeComfort1: "Alles aus dem Basis-Paket",
    detailWelcomeComfort2: "Kaffee oder Tee",
    detailWelcomeComfort3: "Milch",
    detailWelcomeComfort4: "Brot / Toast oder ähnliche Grundversorgung",
    detailWelcomeComfort5: "Einfacher, ordentlicher erster Eindruck bei Ankunft",
    detailWelcomeComfortNote: "Warenkosten kommen zusätzlich nach Beleg hinzu.",

    detailShoppingTitle: "Einkaufsservice – wichtig zu wissen",
    detailShopping1: "Einkauf nach individueller Kundenliste",
    detailShopping2: "Besorgung vor Ankunft",
    detailShopping3: "Bereitstellung in der Immobilie",
    detailShopping4: "Servicepauschale nur für Organisation, Fahrt und Abwicklung",
    detailShoppingNote: "Warenkosten werden immer zusätzlich nach Beleg berechnet.",

    detailEmergencyTitle: "Notfall-Erreichbarkeit & priorisierte Reaktion",
    detailEmergency1: "Bevorzugte Erreichbarkeit auch außerhalb üblicher Zeiten",
    detailEmergency2: "Priorisierte Rückmeldung bei dringenden Vorfällen",
    detailEmergency3: "Erste Einschätzung und Koordination im Notfall",
    detailEmergency4: "Schnelle Organisation eines Vor-Ort-Checks im vereinbarten Einsatzgebiet",
    detailEmergencyNote: "Die Pauschale sichert Erreichbarkeit und priorisierte Reaktion. Einsätze vor Ort werden separat berechnet.",

    detailContractTitle: "Vertragsmodelle – kurz erklärt",
    detailContract1: "Einmaliger Einsatz: einzelner Termin ohne laufende Betreuung",
    detailContract2: "Monatlich kündbare Betreuung: laufender Service mit kurzer Bindung",
    detailContract3: "3-, 6- oder 12-Monats-Betreuung: feste Laufzeit mit attraktiveren Konditionen",
    detailContract4: "Automatische Verlängerung immer in derselben Laufzeit, wenn nicht 14 Tage vor Laufzeitende gekündigt wird",
    detailContractNote: "Längere Laufzeiten wirken nur auf die Kernbetreuung, nicht auf Zusatzleistungen oder Warenkosten.",

    detailPoolTitle: "Pool-Sichtkontrolle – klar abgegrenzt",
    detailPool1: "Sichtprüfung von Wasserstand und sichtbarer Wasserqualität",
    detailPool2: "Sichtprüfung von Beckenrand und allgemeinem Eindruck",
    detailPool3: "Foto-Dokumentation bei Auffälligkeiten",
    detailPool4: "Kurze Rückmeldung an den Eigentümer",
    detailPoolNote: "Keine Reinigung, keine Wasserpflege, keine technische Wartung und keine Wiederherstellung bei stark verschmutztem Zustand.",

    detailYachtTitle: "Yacht-Check – klar abgegrenzt",
    detailYacht1: "Sichtprüfung von Zustand, Leinen und äußerem Eindruck",
    detailYacht2: "Kontrolle sichtbarer Wasserstände",
    detailYacht3: "Batterieanzeige prüfen, soweit sichtbar",
    detailYacht4: "Fotos und kurzer Bericht",
    detailYachtNote: "Keine Fahrten, kein Motorstart, keine Reparaturen, keine technischen Eingriffe.",

    summaryTitle: "Ihre individuelle Kalkulation",
    summaryText: "Alle gewählten Positionen werden einzeln aufgeführt. Der Rechner bildet bewusst eine Premium-Struktur ab und nicht die Logik eines Billigservices.",
    investmentLabelSingle: "Ihre Service-Investition",
    investmentLabelMonthly: "Ihre monatliche Service-Investition",
    pricingNote: "Hinweis: Einmalige Einsätze liegen preislich höher, da Planung, Anfahrt und Einsatz nicht über ein laufendes Betreuungsverhältnis verteilt werden können. Regelmäßige Betreuung bietet eine wirtschaftlichere Struktur pro Besuch und zugleich mehr Kontinuität und Sicherheit.",

    summaryBase: "Basis Kernbetreuung",
    summaryApartmentOutdoor: "Außenbereich Apartment",
    summaryPlot: "Grundstücks- / Außenflächen-Zuschlag",
    summaryPool: "Pool-Sichtkontrolle",
    summaryReport: "Foto- und Statusbericht",
    summaryKeys: "Schlüsselservice",
    summaryVentilation: "Lüften / Kurzcheck",
    summaryArrival: "Vorbereitung vor Ankunft",
    summaryWelcomeBasic: "Welcome-Paket Basis",
    summaryWelcomeComfort: "Welcome-Paket Komfort",
    summaryShopping: "Einkaufsservice",
    summaryEmergency: "Notfall-Erreichbarkeit",
    summaryAuto: "Auto-Check",
    summaryYacht: "Yacht-Check",

    logicTitle: "Warum diese Preislogik sinnvoller ist",
    logicText: "Statt Billigpaketen oder unklaren Sammelpreisen bildet diese Seite eine nachvollziehbare Premium-Logik ab: Objektgröße, Vertragsmodell, Besuchsfrequenz, Dokumentation und Zusatzleistungen werden sauber berücksichtigt.",
    logicBox1Title: "1. Einmalige Einsätze sind bewusst teurer",
    logicBox1Text: "Einzeleinsätze bedeuten volle Anfahrt, volle Organisation und keine Planbarkeit. Deshalb liegen sie immer über dem Preis pro Besuch einer laufenden Betreuung.",
    logicBox2Title: "2. Längere Laufzeiten verbessern die Konditionen",
    logicBox2Text: "Monatlich kündbare Betreuung bietet Einstieg ohne lange Bindung. 3-, 6- und 12-Monats-Modelle schaffen mehr Planungssicherheit und erhalten deshalb bessere Konditionen auf die Kernbetreuung.",
    logicBox3Title: "3. Premium-Leistung braucht klare Marge",
    logicBox3Text: "Dokumentation, Koordination, Erreichbarkeit, Welcome-Leistungen und Asset-Checks sind echte Wertfaktoren. Sie müssen deshalb sichtbar und sauber bepreist sein.",

    contactTitle: "Direkt anfragen",
    contactText: "Die Anfrage wird mit den wichtigsten Eckdaten aus dem Rechner vorbereitet, damit keine halbleeren oder unklaren Anfragen entstehen.",
    contactNameLabel: "Name",
    contactEmailLabel: "E-Mail",
    contactPhoneLabel: "Telefon / WhatsApp",
    contactLocationLabel: "Ort der Immobilie",
    contactMessageLabel: "Zusätzliche Nachricht",
    emailBtn: "📧 Anfrage per E-Mail",
    whatsappBtn: "💬 Anfrage per WhatsApp",

    footerText: "Costa Care Alicante – strukturierte Betreuung für Zweitwohnsitze, Ferienimmobilien und Eigentümer mit Qualitätsanspruch.",

    placeholderName: "Ihr Name",
    placeholderEmail: "ihre@email.de",
    placeholderPhone: "+49 ...",
    placeholderLocation: "z. B. Alicante, Torrevieja",
    placeholderMessage: "Kurze Zusatzinfos zur Immobilie oder zum Bedarf",

    requestSubject: "Neue Anfrage Costa Care Alicante",
    requestHeadline: "Neue Anfrage über die Website",
    requestEstimated: "Kalkulierte Service-Investition",
    requestPropertyType: "Objektkategorie",
    requestContractModel: "Vertragsmodell",
    requestFrequency: "Besuchsfrequenz",
    requestApartmentOutdoor: "Außenbereich Apartment",
    requestPlot: "Grundstück / Außenfläche",
    requestPool: "Poolgröße",
    requestYacht: "Yacht",
    requestYachtLocation: "Liegeort Yacht",
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
    heroText: "Costa Care Alicante is designed for owners who are not permanently on site and do not want to leave their property to chance. The focus is on regular property checks, photo and status reports, visual inspection of outside areas, coordination when needed and a reliable local presence.",
    launchNote: "Development phase: The service is currently being structured and prepared. Inquiries can already be submitted, future support can be planned and suitable service models can be discussed.",
    heroBtnPrimary: "Estimate service",
    heroBtnSecondary: "View services",
    stat1Value: "3 languages",
    stat1Label: "German, English, Spanish",
    stat2Value: "Premium",
    stat2Label: "Clear services instead of bargain service",
    stat3Value: "Transparent",
    stat3Label: "Traceable pricing with line items",

    aboutTitle: "Why this service is different",
    aboutText: "Not generic property support, but a calm and reliable on-site service for owners who expect control, security and clear feedback. It is backed by craft understanding, strong organization and a professional approach to responsibility.",
    aboutBox1Title: "Presence with a trained eye",
    aboutBox1Text: "Craft training and practical understanding help identify visible issues, early-stage damage and changes in condition. This is not about technical intervention, but about clean visual inspection, sound assessment and clear feedback.",
    aboutBox2Title: "Trustworthiness and discretion",
    aboutBox2Text: "Eight years of professional experience in diplomatic service stand for discretion, clear communication, dependability and a professional way of handling sensitive situations. Especially for vacant or high-value properties, this is a real trust factor.",
    aboutBox3Title: "Coordination with structure instead of improvisation",
    aboutBox3Text: "As a certified logistics master (CCI) – Bachelor Professional of Logistics – I bring the ability to plan processes clearly, set priorities and implement measures in a traceable way. When external providers are needed, tasks are not merely passed on but followed up locally with transparent reporting.",

    servicesTitle: "Our services",
    servicesText: "The focus is on oversight, reporting and reliable local presence. Additional services complement this core sensibly without turning it into a vague all-round service.",
    inspectionTitle: "Property checks & local presence",
    inspectionText: "Regular visual checks inside and outside, airing, condition review and clear feedback for owners who are not permanently on site.",
    outsideTitle: "Pool and outdoor visual checks",
    outsideText: "Visual review of pool, garden and outside areas so neglected conditions or visible changes do not go unnoticed.",
    coordinationTitle: "Coordination & owner support",
    coordinationText: "When external service providers or local follow-up are needed, coordination is handled in a structured and transparent way with clear feedback.",
    extrasTitle: "Additional services within clear limits",
    extrasText: "Welcome packages, shopping service, key service, asset checks and prioritized reaction complement the support where they are genuinely useful for owners.",

    calcTitle: "Service calculator",
    calcText: "The calculation reflects property size, contract model, visit frequency and selected extras in a traceable premium structure. One-off visits are intentionally priced higher than ongoing care.",
    fieldPropertyType: "Property category",
    fieldPropertyTypeHelp: "Apartment typically up to around 110 m². Villa from larger living area, more outdoor space or higher overall property complexity.",
    fieldContractModel: "Contract model",
    fieldContractModelHelp: "Longer terms receive the best conditions. Notice period for contract models: 14 days before the end of the term.",
    fieldFrequency: "Visit frequency",
    fieldFrequencyHelpOneTime: "For a one-off visit, this remains a single appointment without ongoing support.",
    fieldFrequencyHelpRecurring: "For ongoing support, select how often the property should be checked per month.",
    fieldLivingSize: "Living area (m²)",
    fieldApartmentOutdoor: "Apartment outdoor area",
    fieldApartmentOutdoorHelp: "For apartments, the outdoor area is valued by actual usable outdoor space, not by plot size.",
    fieldPlotSize: "Plot / outdoor area (m²)",
    fieldPlotHelp: "For villas, outdoor area is valued in clear steps instead of symbolic micro-surcharges.",
    fieldPoolSize: "Pool size (m²)",
    fieldPoolHelp: "Visual inspection and documentation only. No cleaning, no water treatment, no technical intervention.",
    fieldYachtSize: "Yacht length",
    fieldYachtLocation: "Yacht berth location",
    fieldYachtLocationHelp: "Yacht checks outside the regular service area are arranged individually and are not calculated automatically.",
    fieldServices: "Select services",

    typeApartment: "Apartment",
    typeVilla: "Villa",

    contractOneTime: "One-off visit",
    contractMonthlyFlex: "Monthly cancellable support",
    contractThreeMonths: "3-month support",
    contractSixMonths: "6-month support",
    contractTwelveMonths: "12-month support",

    frequencyOneVisit: "1 visit",
    frequencyMonthly: "1 visit per month",
    frequencyWeekly: "4 visits per month",

    apartmentOutdoorNone: "No outdoor area",
    apartmentOutdoorSmall: "Balcony / small terrace",
    apartmentOutdoorLarge: "Large terrace / roof terrace",

    yachtNone: "No yacht check",
    yachtUpTo10: "Up to 10 m",
    yachtTenTo15: "10.1 to 15 m",
    yachtFifteenTo20: "15.1 to 20 m",
    yachtOver20: "Over 20 m – on request",

    yachtLocationInside: "Within Alicante / Costa Blanca area",
    yachtLocationOutside: "Outside regular service area",

    serviceInspection: "Property check inside/outside",
    serviceInspectionSub: "Visual inspection, airing, on-site condition check",
    serviceReport: "Photo and status report",
    serviceReportSub: "Documented feedback with photos and short assessment",
    serviceKeys: "Key service",
    serviceKeysSub: "Storage, agreed handover or reception",
    serviceVentilation: "Airing / quick check",
    serviceVentilationSub: "Intermediate visit without full inspection",
    serviceArrival: "Preparation before arrival",
    serviceArrivalSub: "Airing, visual check, simple prepared condition",
    serviceWelcomeBasic: "Welcome package basic",
    serviceWelcomeBasicSub: "Simple essentials for a smooth arrival",
    serviceWelcomeComfort: "Welcome package comfort",
    serviceWelcomeComfortSub: "Extended arrival preparation with additional first supplies",
    serviceShopping: "Shopping service by list",
    serviceShoppingSub: "Service fee plus goods charged by receipt",
    serviceEmergency: "Emergency availability & prioritized reaction",
    serviceEmergencySub: "Extended availability for existing clients in urgent situations",
    serviceAuto: "Car check",
    serviceAutoSub: "Visual check, battery status, tyres and short report",
    serviceYacht: "Yacht check",
    serviceYachtSub: "Only for yachts within Alicante / Costa Blanca and the agreed service area.",

    detailWelcomeBasicTitle: "Welcome package basic – includes",
    detailWelcomeBasic1: "Drinking water on arrival",
    detailWelcomeBasic2: "Basic toilet paper supply",
    detailWelcomeBasic3: "Hand soap and dishwashing liquid",
    detailWelcomeBasic4: "Bin bags / small essential supplies",
    detailWelcomeBasic5: "Short visual check before arrival",
    detailWelcomeBasicNote: "Goods are charged separately by receipt if shopping is required.",

    detailWelcomeComfortTitle: "Welcome package comfort – includes",
    detailWelcomeComfort1: "Everything from the basic package",
    detailWelcomeComfort2: "Coffee or tea",
    detailWelcomeComfort3: "Milk",
    detailWelcomeComfort4: "Bread / toast or similar arrival essentials",
    detailWelcomeComfort5: "Simple, tidy first impression on arrival",
    detailWelcomeComfortNote: "Goods are charged separately by receipt.",

    detailShoppingTitle: "Shopping service – important to know",
    detailShopping1: "Shopping based on the client’s list",
    detailShopping2: "Purchase before arrival",
    detailShopping3: "Placement inside the property",
    detailShopping4: "Service fee covers organization, travel and handling only",
    detailShoppingNote: "Goods are always charged separately by receipt.",

    detailEmergencyTitle: "Emergency availability & prioritized reaction",
    detailEmergency1: "Preferred availability outside normal hours",
    detailEmergency2: "Prioritized response in urgent situations",
    detailEmergency3: "Initial assessment and coordination in emergencies",
    detailEmergency4: "Fast organization of an on-site check within the agreed service area",
    detailEmergencyNote: "The fee covers availability and prioritized response. On-site visits are charged separately.",

    detailContractTitle: "Contract models – brief explanation",
    detailContract1: "One-off visit: single appointment without ongoing support",
    detailContract2: "Monthly cancellable support: ongoing service with short commitment",
    detailContract3: "3-, 6- or 12-month support: fixed term with better conditions",
    detailContract4: "Automatic renewal always by the same term if not cancelled 14 days before the end of the term",
    detailContractNote: "Longer terms apply only to core support, not to additional services or goods.",

    detailPoolTitle: "Pool visual check – clearly limited",
    detailPool1: "Visual check of water level and visible water quality",
    detailPool2: "Visual check of pool edge and general impression",
    detailPool3: "Photo documentation in case of issues",
    detailPool4: "Short feedback to the owner",
    detailPoolNote: "No cleaning, no water treatment, no technical maintenance and no restoration in case of heavily dirty condition.",

    detailYachtTitle: "Yacht check – clearly limited",
    detailYacht1: "Visual inspection of general condition, lines and exterior impression",
    detailYacht2: "Check visible water levels",
    detailYacht3: "Check battery display where visible",
    detailYacht4: "Photos and short report",
    detailYachtNote: "No trips, no engine start, no repairs, no technical intervention.",

    summaryTitle: "Your individual calculation",
    summaryText: "All selected items are listed separately. The calculator is intentionally built around a premium structure, not the logic of a bargain service.",
    investmentLabelSingle: "Your service investment",
    investmentLabelMonthly: "Your monthly service investment",
    pricingNote: "Note: One-off visits are priced higher because planning, travel and service cannot be spread across an ongoing support relationship. Regular care provides a better structure per visit while also increasing continuity and security.",

    summaryBase: "Base core support",
    summaryApartmentOutdoor: "Apartment outdoor area",
    summaryPlot: "Plot / outdoor area surcharge",
    summaryPool: "Pool visual check",
    summaryReport: "Photo and status report",
    summaryKeys: "Key service",
    summaryVentilation: "Airing / quick check",
    summaryArrival: "Preparation before arrival",
    summaryWelcomeBasic: "Welcome package basic",
    summaryWelcomeComfort: "Welcome package comfort",
    summaryShopping: "Shopping service",
    summaryEmergency: "Emergency availability",
    summaryAuto: "Car check",
    summaryYacht: "Yacht check",

    logicTitle: "Why this pricing logic makes more sense",
    logicText: "Instead of bargain packages or vague combined prices, this site reflects a traceable premium logic: property size, contract model, visit frequency, documentation and additional services are all priced clearly.",
    logicBox1Title: "1. One-off visits are intentionally higher",
    logicBox1Text: "One-off visits mean full travel, full organization and no planning certainty. That is why they are always above the per-visit price of ongoing support.",
    logicBox2Title: "2. Longer terms improve conditions",
    logicBox2Text: "Monthly cancellable support allows an easier start. 3-, 6- and 12-month models create more planning certainty and therefore receive better conditions on core support.",
    logicBox3Title: "3. Premium service needs clear margin",
    logicBox3Text: "Reporting, coordination, availability, welcome services and asset checks create real value. They must therefore be visibly and properly priced.",

    contactTitle: "Request directly",
    contactText: "The request is prepared with the key information from the calculator so that no unclear or half-empty inquiries are created.",
    contactNameLabel: "Name",
    contactEmailLabel: "Email",
    contactPhoneLabel: "Phone / WhatsApp",
    contactLocationLabel: "Property location",
    contactMessageLabel: "Additional message",
    emailBtn: "📧 Send email request",
    whatsappBtn: "💬 Send WhatsApp request",

    footerText: "Costa Care Alicante – structured support for second homes, holiday properties and owners with high standards.",

    placeholderName: "Your name",
    placeholderEmail: "your@email.com",
    placeholderPhone: "+44 ...",
    placeholderLocation: "e.g. Alicante, Torrevieja",
    placeholderMessage: "Short additional information about the property or your needs",

    requestSubject: "New Costa Care Alicante request",
    requestHeadline: "New request from the website",
    requestEstimated: "Calculated service investment",
    requestPropertyType: "Property category",
    requestContractModel: "Contract model",
    requestFrequency: "Visit frequency",
    requestApartmentOutdoor: "Apartment outdoor area",
    requestPlot: "Plot / outdoor area",
    requestPool: "Pool size",
    requestYacht: "Yacht",
    requestYachtLocation: "Yacht berth location",
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
    heroText: "Costa Care Alicante está dirigido a propietarios que no están de forma permanente en el lugar y no quieren dejar su inmueble al azar. El enfoque está en controles periódicos, informes con fotos y estado, revisión visual de zonas exteriores, coordinación cuando sea necesaria y una presencia fiable sobre el terreno.",
    launchNote: "Fase de preparación: el servicio se está estructurando actualmente. Ya es posible enviar consultas, planificar una futura atención y definir modelos de servicio adecuados.",
    heroBtnPrimary: "Calcular servicio",
    heroBtnSecondary: "Ver servicios",
    stat1Value: "3 idiomas",
    stat1Label: "Alemán, inglés, español",
    stat2Value: "Premium",
    stat2Label: "Servicios claros en lugar de servicio barato",
    stat3Value: "Transparente",
    stat3Label: "Lógica de precios clara con partidas individuales",

    aboutTitle: "Por qué este servicio es diferente",
    aboutText: "No se trata de una asistencia genérica, sino de un servicio tranquilo y fiable sobre el terreno para propietarios que esperan control, seguridad e información clara. Detrás hay comprensión técnica, organización sólida y un manejo profesional de la responsabilidad.",
    aboutBox1Title: "Presencia con ojo entrenado",
    aboutBox1Text: "La formación técnica y la experiencia práctica ayudan a detectar anomalías visibles, daños iniciales y cambios en el estado del inmueble. No se trata de intervenir técnicamente, sino de hacer una revisión visual limpia, valorar la situación y dar una respuesta clara.",
    aboutBox2Title: "Confianza y discreción",
    aboutBox2Text: "Ocho años de experiencia profesional en el servicio diplomático representan discreción, comunicación clara, fiabilidad y un tratamiento profesional de situaciones sensibles. Especialmente en inmuebles vacíos o de alto valor, esto es un verdadero factor de confianza.",
    aboutBox3Title: "Coordinación con estructura, no improvisación",
    aboutBox3Text: "Como maestro logístico titulado (CCI) – Bachelor Professional of Logistics – aporto la capacidad de planificar procesos con claridad, fijar prioridades y aplicar medidas de forma trazable. Cuando se necesitan proveedores externos, no solo se transmite la tarea, sino que se sigue in situ y se informa con transparencia.",

    servicesTitle: "Nuestros servicios",
    servicesText: "El enfoque está en el control, la documentación y una presencia fiable sobre el terreno. Los servicios adicionales complementan este núcleo de forma útil sin convertirlo en un servicio difuso de todo en uno.",
    inspectionTitle: "Control del inmueble y presencia local",
    inspectionText: "Revisión visual periódica interior y exterior, ventilación, control del estado y respuesta clara para propietarios que no están de forma permanente en el lugar.",
    outsideTitle: "Control visual de piscina y exteriores",
    outsideText: "Revisión visual de piscina, jardín y zonas exteriores para que estados descuidados o cambios visibles no pasen desapercibidos.",
    coordinationTitle: "Coordinación y soporte al propietario",
    coordinationText: "Cuando se necesitan proveedores externos o seguimiento local, la coordinación se realiza de forma estructurada y transparente, con información clara.",
    extrasTitle: "Servicios adicionales dentro de límites claros",
    extrasText: "Paquetes de bienvenida, servicio de compra, servicio de llaves, controles de activos y reacción prioritaria complementan la atención cuando realmente son útiles para el propietario.",

    calcTitle: "Calculadora de servicio",
    calcText: "La calculación refleja tamaño del inmueble, modelo contractual, frecuencia de visitas y extras seleccionados dentro de una estructura premium comprensible. Las visitas puntuales tienen un precio intencionadamente más alto que la atención continua.",
    fieldPropertyType: "Categoría del inmueble",
    fieldPropertyTypeHelp: "Apartamento normalmente hasta aprox. 110 m². Villa a partir de mayor superficie, más zona exterior o mayor complejidad del inmueble.",
    fieldContractModel: "Modelo contractual",
    fieldContractModelHelp: "Las duraciones más largas reciben las mejores condiciones. Plazo de cancelación en modelos contractuales: 14 días antes del fin del plazo.",
    fieldFrequency: "Frecuencia de visitas",
    fieldFrequencyHelpOneTime: "En la visita puntual se trata de una sola cita sin atención continua.",
    fieldFrequencyHelpRecurring: "Para la atención continua, seleccione aquí con qué frecuencia debe revisarse el inmueble al mes.",
    fieldLivingSize: "Superficie habitable (m²)",
    fieldApartmentOutdoor: "Exterior del apartamento",
    fieldApartmentOutdoorHelp: "En apartamentos, el exterior se valora por el uso real de balcón o terraza, no por parcela.",
    fieldPlotSize: "Parcela / exterior (m²)",
    fieldPlotHelp: "En villas, la superficie exterior se valora por tramos claros y no por recargos mínimos simbólicos.",
    fieldPoolSize: "Tamaño de piscina (m²)",
    fieldPoolHelp: "Solo revisión visual y documentación. Sin limpieza, sin tratamiento del agua y sin intervenciones técnicas.",
    fieldYachtSize: "Longitud del yate",
    fieldYachtLocation: "Ubicación de amarre del yate",
    fieldYachtLocationHelp: "Los controles de yates fuera del área regular de servicio se gestionan individualmente y no se calculan automáticamente.",
    fieldServices: "Seleccionar servicios",

    typeApartment: "Apartamento",
    typeVilla: "Villa",

    contractOneTime: "Visita puntual",
    contractMonthlyFlex: "Atención cancelable mensualmente",
    contractThreeMonths: "Atención de 3 meses",
    contractSixMonths: "Atención de 6 meses",
    contractTwelveMonths: "Atención de 12 meses",

    frequencyOneVisit: "1 visita",
    frequencyMonthly: "1 visita al mes",
    frequencyWeekly: "4 visitas al mes",

    apartmentOutdoorNone: "Sin exterior",
    apartmentOutdoorSmall: "Balcón / terraza pequeña",
    apartmentOutdoorLarge: "Gran terraza / azotea",

    yachtNone: "Sin control de yate",
    yachtUpTo10: "Hasta 10 m",
    yachtTenTo15: "10,1 a 15 m",
    yachtFifteenTo20: "15,1 a 20 m",
    yachtOver20: "Más de 20 m – bajo consulta",

    yachtLocationInside: "Dentro de Alicante / Costa Blanca",
    yachtLocationOutside: "Fuera del área regular de servicio",

    serviceInspection: "Control del inmueble interior/exterior",
    serviceInspectionSub: "Revisión visual, ventilación y control del estado",
    serviceReport: "Informe con fotos y estado",
    serviceReportSub: "Respuesta documentada con fotos y breve valoración",
    serviceKeys: "Servicio de llaves",
    serviceKeysSub: "Custodia, entrega acordada o recepción",
    serviceVentilation: "Ventilación / revisión rápida",
    serviceVentilationSub: "Visita intermedia sin control completo",
    serviceArrival: "Preparación antes de la llegada",
    serviceArrivalSub: "Ventilación, revisión visual y estado básico preparado",
    serviceWelcomeBasic: "Paquete de bienvenida básico",
    serviceWelcomeBasicSub: "Suministros sencillos para una llegada agradable",
    serviceWelcomeComfort: "Paquete de bienvenida confort",
    serviceWelcomeComfortSub: "Preparación ampliada de llegada con suministro inicial adicional",
    serviceShopping: "Servicio de compra según lista",
    serviceShoppingSub: "Tarifa de servicio más compra según ticket",
    serviceEmergency: "Disponibilidad de emergencia y reacción prioritaria",
    serviceEmergencySub: "Disponibilidad ampliada para clientes existentes en situaciones urgentes",
    serviceAuto: "Control de coche",
    serviceAutoSub: "Revisión visual, batería, neumáticos e informe corto",
    serviceYacht: "Control de yate",
    serviceYachtSub: "Solo para yates dentro de Alicante / Costa Blanca y del área de servicio acordada.",

    detailWelcomeBasicTitle: "Paquete de bienvenida básico – incluye",
    detailWelcomeBasic1: "Agua potable a la llegada",
    detailWelcomeBasic2: "Suministro básico de papel higiénico",
    detailWelcomeBasic3: "Jabón de manos y lavavajillas",
    detailWelcomeBasic4: "Bolsas de basura / pequeños suministros básicos",
    detailWelcomeBasic5: "Breve revisión visual antes de la llegada",
    detailWelcomeBasicNote: "Los productos se cobran aparte según ticket si es necesaria una compra.",

    detailWelcomeComfortTitle: "Paquete de bienvenida confort – incluye",
    detailWelcomeComfort1: "Todo lo incluido en el paquete básico",
    detailWelcomeComfort2: "Café o té",
    detailWelcomeComfort3: "Leche",
    detailWelcomeComfort4: "Pan / tostadas u otros productos básicos de llegada",
    detailWelcomeComfort5: "Primera impresión sencilla y ordenada al llegar",
    detailWelcomeComfortNote: "Los productos se cobran aparte según ticket.",

    detailShoppingTitle: "Servicio de compra – importante saberlo",
    detailShopping1: "Compra según la lista individual del cliente",
    detailShopping2: "Compra antes de la llegada",
    detailShopping3: "Colocación dentro del inmueble",
    detailShopping4: "La tarifa de servicio cubre solo organización, desplazamiento y gestión",
    detailShoppingNote: "Los productos siempre se cobran aparte según ticket.",

    detailEmergencyTitle: "Disponibilidad de emergencia y reacción prioritaria",
    detailEmergency1: "Disponibilidad preferente fuera del horario habitual",
    detailEmergency2: "Respuesta prioritaria en situaciones urgentes",
    detailEmergency3: "Primera valoración y coordinación en caso de emergencia",
    detailEmergency4: "Organización rápida de un control presencial dentro del área acordada",
    detailEmergencyNote: "La tarifa cubre disponibilidad y reacción prioritaria. Las visitas presenciales se cobran aparte.",

    detailContractTitle: "Modelos contractuales – explicación breve",
    detailContract1: "Visita puntual: cita única sin atención continua",
    detailContract2: "Atención cancelable mensualmente: servicio continuo con compromiso corto",
    detailContract3: "Atención de 3, 6 o 12 meses: plazo fijo con mejores condiciones",
    detailContract4: "La renovación automática siempre se realiza por el mismo plazo si no se cancela 14 días antes del fin del plazo",
    detailContractNote: "Las duraciones más largas solo afectan a la atención principal, no a servicios adicionales ni productos.",

    detailPoolTitle: "Control visual de piscina – claramente delimitado",
    detailPool1: "Revisión visual del nivel del agua y de la calidad visible",
    detailPool2: "Revisión visual del borde y del estado general",
    detailPool3: "Documentación fotográfica en caso de incidencias",
    detailPool4: "Breve respuesta al propietario",
    detailPoolNote: "Sin limpieza, sin tratamiento del agua, sin mantenimiento técnico y sin recuperación en caso de fuerte suciedad.",

    detailYachtTitle: "Control de yate – claramente delimitado",
    detailYacht1: "Revisión visual del estado general, cabos y aspecto exterior",
    detailYacht2: "Control de niveles de agua visibles",
    detailYacht3: "Comprobación de la batería si es visible",
    detailYacht4: "Fotos e informe corto",
    detailYachtNote: "Sin desplazamientos, sin arranque de motor, sin reparaciones y sin intervenciones técnicas.",

    summaryTitle: "Su cálculo individual",
    summaryText: "Todas las posiciones seleccionadas se muestran por separado. La calculadora está diseñada deliberadamente como una estructura premium y no como la lógica de un servicio barato.",
    investmentLabelSingle: "Su inversión en servicio",
    investmentLabelMonthly: "Su inversión mensual en servicio",
    pricingNote: "Nota: las visitas puntuales tienen un precio más alto porque la planificación, el desplazamiento y el servicio no pueden repartirse en una relación continua. La atención regular ofrece una mejor estructura por visita y al mismo tiempo más continuidad y seguridad.",

    summaryBase: "Base atención principal",
    summaryApartmentOutdoor: "Exterior del apartamento",
    summaryPlot: "Recargo parcela / exterior",
    summaryPool: "Control visual de piscina",
    summaryReport: "Informe con fotos y estado",
    summaryKeys: "Servicio de llaves",
    summaryVentilation: "Ventilación / revisión rápida",
    summaryArrival: "Preparación antes de la llegada",
    summaryWelcomeBasic: "Paquete básico",
    summaryWelcomeComfort: "Paquete confort",
    summaryShopping: "Servicio de compra",
    summaryEmergency: "Disponibilidad de emergencia",
    summaryAuto: "Control de coche",
    summaryYacht: "Control de yate",

    logicTitle: "Por qué esta lógica de precios tiene más sentido",
    logicText: "En lugar de paquetes baratos o precios combinados poco claros, esta página refleja una lógica premium comprensible: tamaño del inmueble, modelo contractual, frecuencia de visitas, documentación y servicios adicionales se valoran claramente.",
    logicBox1Title: "1. Las visitas puntuales son intencionadamente más caras",
    logicBox1Text: "Las visitas puntuales implican desplazamiento completo, organización completa y ninguna planificación segura. Por eso siempre están por encima del precio por visita de la atención continua.",
    logicBox2Title: "2. Las duraciones más largas mejoran las condiciones",
    logicBox2Text: "La atención cancelable mensualmente facilita la entrada. Los modelos de 3, 6 y 12 meses aportan más seguridad de planificación y por eso reciben mejores condiciones en la atención principal.",
    logicBox3Title: "3. El servicio premium necesita margen claro",
    logicBox3Text: "La documentación, la coordinación, la disponibilidad, los servicios de bienvenida y los controles de activos generan valor real. Por eso deben tener un precio visible y correcto.",

    contactTitle: "Solicitar directamente",
    contactText: "La solicitud se prepara con la información clave de la calculadora para evitar consultas poco claras o incompletas.",
    contactNameLabel: "Nombre",
    contactEmailLabel: "Correo electrónico",
    contactPhoneLabel: "Teléfono / WhatsApp",
    contactLocationLabel: "Ubicación del inmueble",
    contactMessageLabel: "Mensaje adicional",
    emailBtn: "📧 Enviar solicitud por correo",
    whatsappBtn: "💬 Enviar solicitud por WhatsApp",

    footerText: "Costa Care Alicante – atención estructurada para segundas residencias, viviendas vacacionales y propietarios con altos estándares.",

    placeholderName: "Su nombre",
    placeholderEmail: "su@email.com",
    placeholderPhone: "+34 ...",
    placeholderLocation: "p. ej. Alicante, Torrevieja",
    placeholderMessage: "Información adicional breve sobre el inmueble o la necesidad",

    requestSubject: "Nueva solicitud Costa Care Alicante",
    requestHeadline: "Nueva solicitud desde la web",
    requestEstimated: "Inversión de servicio calculada",
    requestPropertyType: "Categoría del inmueble",
    requestContractModel: "Modelo contractual",
    requestFrequency: "Frecuencia de visitas",
    requestApartmentOutdoor: "Exterior del apartamento",
    requestPlot: "Parcela / exterior",
    requestPool: "Tamaño de piscina",
    requestYacht: "Yate",
    requestYachtLocation: "Ubicación del yate",
    requestServices: "Servicios",
    requestMessage: "Mensaje",
    requestPhone: "Teléfono / WhatsApp",
    requestEmail: "Correo electrónico",
    requestLocation: "Ubicación del inmueble"
  }
};

const formEls = {
  propertyType: document.getElementById("propertyType"),
  contractModel: document.getElementById("contractModel"),
  serviceFrequency: document.getElementById("serviceFrequency"),
  livingSize: document.getElementById("livingSize"),
  apartmentOutdoor: document.getElementById("apartmentOutdoor"),
  plotSize: document.getElementById("plotSize"),
  poolSize: document.getElementById("poolSize"),
  yachtSize: document.getElementById("yachtSize"),
  yachtLocation: document.getElementById("yachtLocation"),

  checkInspection: document.getElementById("checkInspection"),
  checkReport: document.getElementById("checkReport"),
  checkKeys: document.getElementById("checkKeys"),
  checkVentilation: document.getElementById("checkVentilation"),
  checkArrival: document.getElementById("checkArrival"),
  checkWelcomeBasic: document.getElementById("checkWelcomeBasic"),
  checkWelcomeComfort: document.getElementById("checkWelcomeComfort"),
  checkShopping: document.getElementById("checkShopping"),
  checkEmergency: document.getElementById("checkEmergency"),
  checkAuto: document.getElementById("checkAuto"),
  checkYacht: document.getElementById("checkYacht"),

  contactName: document.getElementById("contactName"),
  contactEmail: document.getElementById("contactEmail"),
  contactPhone: document.getElementById("contactPhone"),
  contactLocation: document.getElementById("contactLocation"),
  contactMessage: document.getElementById("contactMessage"),

  summaryList: document.getElementById("summaryList"),
  grandTotal: document.getElementById("grandTotal"),
  summaryLabel: document.getElementById("summaryLabel"),
  emailButton: document.getElementById("emailButton"),
  whatsappButton: document.getElementById("whatsappButton")
};

const uiEls = {
  frequencyHelp: document.getElementById("frequencyHelp"),
  apartmentOutdoorWrap: document.getElementById("apartmentOutdoorWrap"),
  villaPlotWrap: document.getElementById("villaPlotWrap"),
  yachtSizeWrap: document.getElementById("yachtSizeWrap"),
  yachtLocationWrap: document.getElementById("yachtLocationWrap")
};

const langButtons = Array.from(document.querySelectorAll(".lang-btn"));
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

function getBaseCorePrice(propertyType, contractModel, frequency) {
  const pricing = {
    apartment: {
      oneTime: { oneVisit: 149 },
      monthlyFlex: { monthly: 139, weekly: 476 },
      threeMonths: { monthly: 129, weekly: 456 },
      sixMonths: { monthly: 119, weekly: 436 },
      twelveMonths: { monthly: 109, weekly: 416 }
    },
    villa: {
      oneTime: { oneVisit: 219 },
      monthlyFlex: { monthly: 199, weekly: 716 },
      threeMonths: { monthly: 189, weekly: 676 },
      sixMonths: { monthly: 179, weekly: 636 },
      twelveMonths: { monthly: 169, weekly: 596 }
    }
  };

  return pricing[propertyType]?.[contractModel]?.[frequency] ?? 0;
}

function getApartmentOutdoorPrice(outdoor) {
  if (outdoor === "small") return 10;
  if (outdoor === "large") return 25;
  return 0;
}

function getPlotPrice(plotSize) {
  if (plotSize <= 300) return 0;
  if (plotSize <= 600) return 25;
  if (plotSize <= 1000) return 45;
  return 75;
}

function getPoolPrice(poolSize) {
  if (poolSize <= 0) return 0;
  if (poolSize <= 15) return 20;
  if (poolSize <= 30) return 30;
  return 40;
}

function getYachtPrice(sizeValue) {
  switch (sizeValue) {
    case "upTo10":
      return 119;
    case "tenTo15":
      return 169;
    case "fifteenTo20":
      return 249;
    case "over20":
      return 0;
    default:
      return 0;
  }
}

function getYachtLabel(sizeValue) {
  switch (sizeValue) {
    case "upTo10":
      return `${t("summaryYacht")} (${t("yachtUpTo10")})`;
    case "tenTo15":
      return `${t("summaryYacht")} (${t("yachtTenTo15")})`;
    case "fifteenTo20":
      return `${t("summaryYacht")} (${t("yachtFifteenTo20")})`;
    case "over20":
      return `${t("summaryYacht")} (${t("yachtOver20")})`;
    default:
      return t("summaryYacht");
  }
}

function selectedServices() {
  const items = [];
  if (formEls.checkInspection.checked) items.push(t("serviceInspection"));
  if (formEls.checkReport.checked) items.push(t("serviceReport"));
  if (formEls.checkKeys.checked) items.push(t("serviceKeys"));
  if (formEls.checkVentilation.checked) items.push(t("serviceVentilation"));
  if (formEls.checkArrival.checked) items.push(t("serviceArrival"));
  if (formEls.checkWelcomeBasic.checked) items.push(t("serviceWelcomeBasic"));
  if (formEls.checkWelcomeComfort.checked) items.push(t("serviceWelcomeComfort"));
  if (formEls.checkShopping.checked) items.push(t("serviceShopping"));
  if (formEls.checkEmergency.checked) items.push(t("serviceEmergency"));
  if (formEls.checkAuto.checked) items.push(t("serviceAuto"));
  if (formEls.checkYacht.checked && formEls.yachtSize.value !== "none") items.push(getYachtLabel(formEls.yachtSize.value));
  return items;
}

function syncContractAndFrequency() {
  const contractModel = formEls.contractModel.value;

  if (contractModel === "oneTime") {
    formEls.serviceFrequency.value = "oneVisit";
    formEls.serviceFrequency.disabled = true;
    uiEls.frequencyHelp.textContent = t("fieldFrequencyHelpOneTime");
  } else {
    if (formEls.serviceFrequency.value === "oneVisit") {
      formEls.serviceFrequency.value = "monthly";
    }
    formEls.serviceFrequency.disabled = false;
    uiEls.frequencyHelp.textContent = t("fieldFrequencyHelpRecurring");
  }
}

function syncPropertyFields() {
  const isApartment = formEls.propertyType.value === "apartment";
  uiEls.apartmentOutdoorWrap.classList.toggle("hidden", !isApartment);
  uiEls.villaPlotWrap.classList.toggle("hidden", isApartment);
}

function syncYachtFields() {
  const showYachtFields = formEls.checkYacht.checked;
  uiEls.yachtSizeWrap.classList.toggle("hidden", !showYachtFields);
  uiEls.yachtLocationWrap.classList.toggle("hidden", !showYachtFields);

  if (!showYachtFields) {
    formEls.yachtSize.value = "none";
    formEls.yachtLocation.value = "inside";
  }
}

function applyLanguage() {
  document.documentElement.lang = currentLang;

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = translations[currentLang][key];
    if (typeof value === "string") node.textContent = value;
  });

  formEls.propertyType.options[0].text = t("typeApartment");
  formEls.propertyType.options[1].text = t("typeVilla");

  formEls.contractModel.options[0].text = t("contractOneTime");
  formEls.contractModel.options[1].text = t("contractMonthlyFlex");
  formEls.contractModel.options[2].text = t("contractThreeMonths");
  formEls.contractModel.options[3].text = t("contractSixMonths");
  formEls.contractModel.options[4].text = t("contractTwelveMonths");

  formEls.serviceFrequency.options[0].text = t("frequencyOneVisit");
  formEls.serviceFrequency.options[1].text = t("frequencyMonthly");
  formEls.serviceFrequency.options[2].text = t("frequencyWeekly");

  formEls.apartmentOutdoor.options[0].text = t("apartmentOutdoorNone");
  formEls.apartmentOutdoor.options[1].text = t("apartmentOutdoorSmall");
  formEls.apartmentOutdoor.options[2].text = t("apartmentOutdoorLarge");

  formEls.yachtSize.options[0].text = t("yachtNone");
  formEls.yachtSize.options[1].text = t("yachtUpTo10");
  formEls.yachtSize.options[2].text = t("yachtTenTo15");
  formEls.yachtSize.options[3].text = t("yachtFifteenTo20");
  formEls.yachtSize.options[4].text = t("yachtOver20");

  formEls.yachtLocation.options[0].text = t("yachtLocationInside");
  formEls.yachtLocation.options[1].text = t("yachtLocationOutside");

  formEls.contactName.placeholder = t("placeholderName");
  formEls.contactEmail.placeholder = t("placeholderEmail");
  formEls.contactPhone.placeholder = t("placeholderPhone");
  formEls.contactLocation.placeholder = t("placeholderLocation");
  formEls.contactMessage.placeholder = t("placeholderMessage");

  formEls.emailButton.textContent = t("emailBtn");
  formEls.whatsappButton.textContent = t("whatsappBtn");

  syncContractAndFrequency();
  syncPropertyFields();
  syncYachtFields();
  calculatePricing();
}

function calculatePricing() {
  const propertyType = formEls.propertyType.value;
  const contractModel = formEls.contractModel.value;
  const frequency = formEls.serviceFrequency.value;
  const apartmentOutdoor = formEls.apartmentOutdoor.value;
  const plotSize = Math.max(0, Number(formEls.plotSize.value) || 0);
  const poolSize = Math.max(0, Number(formEls.poolSize.value) || 0);
  const yachtSize = formEls.yachtSize.value;
  const yachtLocation = formEls.yachtLocation.value;

  const lines = [];
  const baseCore = getBaseCorePrice(propertyType, contractModel, frequency);
  lines.push([t("summaryBase"), baseCore]);

  if (propertyType === "apartment") {
    const outdoorPrice = getApartmentOutdoorPrice(apartmentOutdoor);
    if (outdoorPrice > 0) {
      lines.push([t("summaryApartmentOutdoor"), outdoorPrice]);
    }
  } else {
    const plotPrice = getPlotPrice(plotSize);
    if (plotPrice > 0) {
      lines.push([t("summaryPlot"), plotPrice]);
    }
  }

  const poolPrice = getPoolPrice(poolSize);
  if (poolPrice > 0) {
    lines.push([t("summaryPool"), poolPrice]);
  }

  if (formEls.checkReport.checked) lines.push([t("summaryReport"), 10]);
  if (formEls.checkKeys.checked) lines.push([t("summaryKeys"), 29]);
  if (formEls.checkVentilation.checked) lines.push([t("summaryVentilation"), 29]);
  if (formEls.checkArrival.checked) lines.push([t("summaryArrival"), 49]);
  if (formEls.checkWelcomeBasic.checked) lines.push([t("summaryWelcomeBasic"), 35]);
  if (formEls.checkWelcomeComfort.checked) lines.push([t("summaryWelcomeComfort"), 65]);
  if (formEls.checkShopping.checked) lines.push([t("summaryShopping"), 49]);
  if (formEls.checkEmergency.checked) lines.push([t("summaryEmergency"), 39]);
  if (formEls.checkAuto.checked) lines.push([t("summaryAuto"), 59]);

  if (formEls.checkYacht.checked) {
    if (yachtLocation === "outside") {
      lines.push([`${t("summaryYacht")} (${t("yachtLocationOutside")})`, 0]);
    } else if (yachtSize === "over20") {
      lines.push([getYachtLabel(yachtSize), 0]);
    } else if (yachtSize !== "none") {
      lines.push([getYachtLabel(yachtSize), getYachtPrice(yachtSize)]);
    }
  }

  const total = lines.reduce((sum, [, price]) => sum + price, 0);

  formEls.summaryList.innerHTML = lines.map(([label, price]) => {
    const formatted =
      price === 0 && label.toLowerCase().includes("yacht")
        ? "auf Anfrage"
        : formatEuro(price);

    return `
      <div class="summary-row">
        <span>${label}</span>
        <span>${formatted}</span>
      </div>
    `;
  }).join("");

  formEls.grandTotal.textContent = formatEuro(Math.max(0, total));
  formEls.summaryLabel.textContent = contractModel === "oneTime" ? t("investmentLabelSingle") : t("investmentLabelMonthly");

  updateContactLinks(Math.max(0, total));
}

function updateContactLinks(total) {
  const propertyType = formEls.propertyType.selectedOptions[0].text;
  const contractModel = formEls.contractModel.selectedOptions[0].text;
  const frequency = formEls.serviceFrequency.selectedOptions[0].text;
  const apartmentOutdoor = formEls.apartmentOutdoor.selectedOptions[0].text;
  const yachtValue = formEls.checkYacht.checked ? (formEls.yachtSize.selectedOptions[0]?.text || "-") : "-";
  const yachtLocation = formEls.checkYacht.checked ? (formEls.yachtLocation.selectedOptions[0]?.text || "-") : "-";
  const services = selectedServices().join(", ") || "-";

  const body = `${t("requestHeadline")}\n\n`
    + `Name: ${formEls.contactName.value.trim() || "-"}\n`
    + `${t("requestEmail")}: ${formEls.contactEmail.value.trim() || "-"}\n`
    + `${t("requestPhone")}: ${formEls.contactPhone.value.trim() || "-"}\n`
    + `${t("requestLocation")}: ${formEls.contactLocation.value.trim() || "-"}\n`
    + `${t("requestPropertyType")}: ${propertyType}\n`
    + `${t("requestContractModel")}: ${contractModel}\n`
    + `${t("requestFrequency")}: ${frequency}\n`
    + `${t("requestApartmentOutdoor")}: ${formEls.propertyType.value === "apartment" ? apartmentOutdoor : "-"}\n`
    + `${t("requestPlot")}: ${formEls.propertyType.value === "villa" ? `${formEls.plotSize.value || "-"} m²` : "-"}\n`
    + `${t("requestPool")}: ${formEls.poolSize.value || "-"} m²\n`
    + `${t("requestYacht")}: ${yachtValue}\n`
    + `${t("requestYachtLocation")}: ${yachtLocation}\n`
    + `${t("requestServices")}: ${services}\n`
    + `${t("requestEstimated")}: ${formatEuro(total)}\n`
    + `${t("requestMessage")}: ${formEls.contactMessage.value.trim() || "-"}\n`;

  const subject = encodeURIComponent(t("requestSubject"));
  const encodedBody = encodeURIComponent(body);

  formEls.emailButton.href = `mailto:${CONFIG.email}?subject=${subject}&body=${encodedBody}`;
  formEls.whatsappButton.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodedBody}`;
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.dataset.lang;
    applyLanguage();
  });
});

formEls.contractModel.addEventListener("change", () => {
  syncContractAndFrequency();
  calculatePricing();
});

formEls.propertyType.addEventListener("change", () => {
  syncPropertyFields();
  calculatePricing();
});

formEls.checkYacht.addEventListener("change", () => {
  syncYachtFields();
  calculatePricing();
});

Object.values(formEls).forEach((el) => {
  if (!el || typeof el.addEventListener !== "function") return;
  if (el === formEls.contractModel || el === formEls.propertyType || el === formEls.checkYacht) return;
  el.addEventListener("input", calculatePricing);
  el.addEventListener("change", calculatePricing);
});

applyLanguage();
