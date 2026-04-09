const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const byId = (id) => document.getElementById(id);

let currentLang = 'de';

const BASE_PRICES = {
  inspectionBase: 28,
  inspectionLivingFactor: 0.18,
  inspectionPlotFactor: 0.03,

  poolBase: 24,
  poolFactor: 1.9,

  gardenBase: 25,
  gardenFactor: 0.11,

  arrivalBase: 34,
  arrivalFactor: 0.14
};

function euro(value) {
  return new Intl.NumberFormat(currentLang === 'de' ? 'de-DE' : currentLang === 'es' ? 'es-ES' : 'en-GB', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(value);
}

function calculatePrices() {
  const propertyType = byId('propertyType').value;
  const frequency = byId('serviceFrequency').value;

  const livingSize = Math.max(0, Number(byId('livingSize').value) || 0);
  const plotSize = Math.max(0, Number(byId('plotSize').value) || 0);
  const poolSize = Math.max(0, Number(byId('poolSize').value) || 0);

  const propertyFactor = propertyType === 'house' ? 1.12 : 1;
  const frequencyFactor = frequency === 'weekly' ? 0.82 : frequency === 'monthly' ? 1 : 1.18;

  const lines = [];

  if (byId('checkInspection').checked) {
    const price = Math.round(
      (BASE_PRICES.inspectionBase +
        livingSize * BASE_PRICES.inspectionLivingFactor +
        plotSize * BASE_PRICES.inspectionPlotFactor) *
      propertyFactor *
      frequencyFactor
    );

    lines.push({ label: "Objektkontrolle", value: price });
  }

  if (byId('checkPool').checked && poolSize > 0) {
    const price = Math.round(
      (BASE_PRICES.poolBase + poolSize * BASE_PRICES.poolFactor) *
      propertyFactor *
      frequencyFactor
    );

    lines.push({ label: "Poolservice", value: price });
  }

  if (byId('checkGarden').checked && plotSize > 0) {
    const price = Math.round(
      (BASE_PRICES.gardenBase + plotSize * BASE_PRICES.gardenFactor) *
      propertyFactor *
      frequencyFactor
    );

    lines.push({ label: "Gartenpflege", value: price });
  }

  if (byId('checkArrival').checked) {
    const price = Math.round(
      (BASE_PRICES.arrivalBase + livingSize * BASE_PRICES.arrivalFactor) *
      propertyFactor *
      1.06
    );

    lines.push({ label: "Vorbereitung vor Ankunft", value: price });
  }

  const subtotal = lines.reduce((sum, item) => sum + item.value, 0);
  const total = subtotal;

  return { lines, subtotal, total };
}

function renderSummary() {
  const { lines, subtotal, total } = calculatePrices();
  const summary = byId('summaryList');

  summary.innerHTML = '';

  if (!lines.length) {
    summary.innerHTML = `<div style="color:#777;">Keine Leistungen gewählt</div>`;
    return;
  }

  lines.forEach(item => {
    const row = document.createElement('div');
    row.className = 'summary-row';
    row.innerHTML = `<span>${item.label}</span><span>${euro(item.value)}</span>`;
    summary.appendChild(row);
  });

  byId('subtotalValue').textContent = euro(subtotal);
  byId('grandTotal').textContent = euro(total);
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
].forEach(id => {
  byId(id).addEventListener('input', renderSummary);
});

renderSummary();
