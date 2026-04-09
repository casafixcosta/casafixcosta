const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const byId = (id) => document.getElementById(id);

let currentLang = 'de';

const i18n = {
  de: {
    lineInspection: 'Objektkontrolle',
    linePool: 'Poolservice',
    lineGarden: 'Gartenpflege',
    lineArrival: 'Vorbereitung vor Ankunft',
    noServices: 'Noch keine Leistungen gewählt'
  },
  en: {
    lineInspection: 'Property check',
    linePool: 'Pool service',
    lineGarden: 'Garden care',
    lineArrival: 'Pre-arrival preparation',
    noServices: 'No services selected yet'
  },
  es: {
    lineInspection: 'Control del inmueble',
    linePool: 'Servicio de piscina',
    lineGarden: 'Mantenimiento de jardín',
    lineArrival: 'Preparación antes de la llegada',
    noServices: 'Aún no hay servicios seleccionados'
  }
};

const PRICE_RULES = {
  inspection: {
    base: 45,
    livingFactor: 0.12,
    plotFactor: 0.01,
    min: 45
  },
  pool: {
    base: 35,
    sizeFactor: 1.6,
    min: 55
  },
  garden: {
    base: 35,
    plotFactor: 0.07,
    min: 55
  },
  arrival: {
    base: 55,
    livingFactor: 0.12,
    min: 55
  },
  monthlyMinimum: 140,
  weeklyMinimum: 180,
  oneTimeMinimum: 55,
  propertyFactorApartment: 1.0,
  propertyFactorHouse: 1.12,
  frequencyFactor: {
    weekly: 0.9,
    monthly: 1.0,
    oneTime: 1.15
  }
};

function euro(value) {
  return new Intl.NumberFormat(
    currentLang === 'de' ? 'de-DE' : currentLang === 'es' ? 'es-ES' : 'en-GB',
    {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }
  ).format(value);
}

function safeRound(value) {
  return Math.round(value);
}

function getPropertyFactor() {
  return byId('propertyType').value === 'house'
    ? PRICE_RULES.propertyFactorHouse
    : PRICE_RULES.propertyFactorApartment;
}

function getFrequencyFactor() {
  const frequency = byId('serviceFrequency').value;
  return PRICE_RULES.frequencyFactor[frequency] || 1;
}

function getGlobalMinimum() {
  const frequency = byId('serviceFrequency').value;
  if (frequency === 'weekly') return PRICE_RULES.weeklyMinimum;
  if (frequency === 'monthly') return PRICE_RULES.monthlyMinimum;
  return PRICE_RULES.oneTimeMinimum;
}

function calculatePrices() {
  const propertyFactor = getPropertyFactor();
  const frequencyFactor = getFrequencyFactor();
  const livingSize = Math.max(0, Number(byId('livingSize').value) || 0);
  const plotSize = Math.max(0, Number(byId('plotSize').value) || 0);
  const poolSize = Math.max(0, Number(byId('poolSize').value) || 0);
  const lines = [];

  if (byId('checkInspection').checked) {
    let inspection = (
      PRICE_RULES.inspection.base +
      livingSize * PRICE_RULES.inspection.livingFactor +
      plotSize * PRICE_RULES.inspection.plotFactor
    ) * propertyFactor * frequencyFactor;

    inspection = Math.max(inspection, PRICE_RULES.inspection.min);
    inspection = safeRound(inspection);
    lines.push({ label: i18n[currentLang].lineInspection, value: inspection });
  }

  if (byId('checkPool').checked && poolSize > 0) {
    let pool = (
      PRICE_RULES.pool.base +
      poolSize * PRICE_RULES.pool.sizeFactor
    ) * propertyFactor * frequencyFactor;

    pool = Math.max(pool, PRICE_RULES.pool.min);
    pool = safeRound(pool);
    lines.push({ label: i18n[currentLang].linePool, value: pool });
  }

  if (byId('checkGarden').checked && plotSize > 0) {
    let garden = (
      PRICE_RULES.garden.base +
      plotSize * PRICE_RULES.garden.plotFactor
    ) * propertyFactor * frequencyFactor;

    garden = Math.max(garden, PRICE_RULES.garden.min);
    garden = safeRound(garden);
    lines.push({ label: i18n[currentLang].lineGarden, value: garden });
  }

  if (byId('checkArrival').checked) {
    let arrival = (
      PRICE_RULES.arrival.base +
      livingSize * PRICE_RULES.arrival.livingFactor
    ) * propertyFactor * 1.06;

    arrival = Math.max(arrival, PRICE_RULES.arrival.min);
    arrival = safeRound(arrival);
    lines.push({ label: i18n[currentLang].lineArrival, value: arrival });
  }

  const subtotal = lines.reduce((sum, item) => sum + item.value, 0);
  const globalMinimum = getGlobalMinimum();
  const total = Math.max(subtotal, globalMinimum);

  return { lines, subtotal, total, globalMinimum };
}

function renderSummary() {
  const summary = byId('summaryList');
  const subtotalField = byId('subtotalValue');
  const totalField = byId('grandTotal');
  if (!summary || !subtotalField || !totalField) return;

  const { lines, subtotal, total } = calculatePrices();
  summary.innerHTML = '';

  if (!lines.length) {
    const empty = document.createElement('div');
    empty.className = 'summary-empty';
    empty.textContent = i18n[currentLang].noServices;
    summary.appendChild(empty);
    subtotalField.textContent = euro(0);
    totalField.textContent = euro(0);
    return;
  }

  lines.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'summary-row';
    row.innerHTML = `<span>${item.label}</span><span>${euro(item.value)}</span>`;
    summary.appendChild(row);
  });

  if (total > subtotal) {
    const minimumRow = document.createElement('div');
    minimumRow.className = 'summary-row';
    minimumRow.innerHTML = `<span>Mindestpreis</span><span>${euro(total - subtotal)}</span>`;
    summary.appendChild(minimumRow);
  }

  subtotalField.textContent = euro(subtotal);
  totalField.textContent = euro(total);
}

function detectLanguage() {
  const activeLang = document.querySelector('.lang-btn.active');
  if (activeLang?.dataset?.lang) {
    currentLang = activeLang.dataset.lang;
  }
}

function bindLanguageButtons() {
  $$('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang || 'de';
      setTimeout(renderSummary, 0);
    });
  });
}

[
  'propertyType',
  'serviceFrequency',
  'livingSize',
  'plotSize',
  'poolSize',
  'checkInspection',
  'checkPool',
  'checkGarden',
  'checkArrival'
].forEach((id) => {
  const el = byId(id);
  if (el) {
    el.addEventListener('input', renderSummary);
    el.addEventListener('change', renderSummary);
  }
});

detectLanguage();
bindLanguageButtons();
renderSummary();
