const fs = require('fs');

const width = 800;
const height = 400;
const margin = { top: 40, right: 40, bottom: 60, left: 60 };
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

const fMin = 10;
const fMax = 2000000;
const numPoints = 300;

function log10(x) { return Math.log10(x); }

const pointsDM = [];
const pointsCM = [];

for (let i = 0; i <= numPoints; i++) {
    const f = Math.pow(10, log10(fMin) + i / numPoints * (log10(fMax) - log10(fMin)));
    
    // DM Simulation
    let dm = 0;
    if (f < 3000) {
        dm = 0;
    } else if (f < 10600) {
        // interpolate up to +1.7 at 10600
        const ratio = (log10(f) - log10(3000)) / (log10(10600) - log10(3000));
        dm = 1.7 * ratio;
    } else {
        // -40dB/dec after 10600? Not exactly. Let's interpolate points from the table
        if (f < 50000) {
            dm = 1.7 + (log10(f) - log10(10600)) / (log10(50000) - log10(10600)) * (-10.0 - 1.7);
        } else if (f < 100000) {
            dm = -10.0 + (log10(f) - log10(50000)) / (log10(100000) - log10(50000)) * (-16.6 - -10.0);
        } else if (f < 150000) {
            dm = -16.6 + (log10(f) - log10(100000)) / (log10(150000) - log10(100000)) * (-20.6 - -16.6);
        } else if (f < 300000) {
            dm = -20.6 + (log10(f) - log10(150000)) / (log10(300000) - log10(150000)) * (-29.2 - -20.6);
        } else {
            // roughly -30dB per decade?
            dm = -29.2 + -30 * (log10(f) - log10(300000));
        }
    }
    
    // CM Simulation
    let cm = 0;
    if (f < 6000) {
        cm = 0;
    } else if (f < 22000) {
        const ratio = (log10(f) - log10(6000)) / (log10(22000) - log10(6000));
        cm = 8.4 * ratio;
    } else if (f < 50000) {
        cm = 8.4 + (log10(f) - log10(22000)) / (log10(50000) - log10(22000)) * (-9.2 - 8.4);
    } else if (f < 100000) {
        cm = -9.2 + (log10(f) - log10(50000)) / (log10(100000) - log10(50000)) * (-22.9 - -9.2);
    } else if (f < 150000) {
        cm = -22.9 + (log10(f) - log10(100000)) / (log10(150000) - log10(100000)) * (-30.5 - -22.9);
    } else if (f < 300000) {
        cm = -30.5 + (log10(f) - log10(150000)) / (log10(300000) - log10(150000)) * (-41.5 - -30.5);
    } else {
        cm = -41.5 + (log10(f) - log10(300000)) / (log10(2000000) - log10(300000)) * (-42.7 - -41.5);
    }
    
    // Smooth out sharp points with a simple bezier in path generation, or just use many points
    // For realism, let's add a tiny curve/smooth using sin if we wanted, but interpolation is fine enough.
    pointsDM.push({ f, mag: Math.max(-70, dm) });
    pointsCM.push({ f, mag: Math.max(-70, cm) });
}

const xMin = log10(fMin);
const xMax = log10(fMax);
const yMin = -70;
const yMax = 20;

function mapX(f) {
    return margin.left + ((log10(f) - xMin) / (xMax - xMin)) * innerWidth;
}
function mapY(mag) {
    return margin.top + innerHeight - ((mag - yMin) / (yMax - yMin)) * innerHeight;
}

function createPath(points) {
    let path = `M ${mapX(points[0].f)} ${mapY(points[0].mag)}`;
    for (let i = 1; i < points.length; i++) {
        path += ` L ${mapX(points[i].f)} ${mapY(points[i].mag)}`;
    }
    return path;
}

let pathDataDM = createPath(pointsDM);
let pathDataCM = createPath(pointsCM);

let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" style="background-color: #0a0f1c; font-family: sans-serif; border-radius: 8px;">`;
svg += `<rect width="${width}" height="${height}" fill="#0a0f1c" />`;

// CISPR shaded region (150kHz to 2MHz)
const cisprX1 = mapX(150000);
const cisprX2 = mapX(2000000);
svg += `<rect x="${cisprX1}" y="${margin.top}" width="${cisprX2 - cisprX1}" height="${innerHeight}" fill="#f97316" fill-opacity="0.1" />`;

// Grid
for (let mag = -60; mag <= 20; mag += 20) {
    const y = mapY(mag);
    svg += `<line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" stroke="#1f2937" stroke-width="1" />`;
    svg += `<text x="${margin.left - 10}" y="${y + 4}" font-size="12" text-anchor="end" fill="#9ca3af">${mag}dB</text>`;
}

for (let p = 1; p <= 6; p++) {
    const f = Math.pow(10, p);
    const x = mapX(f);
    svg += `<line x1="${x}" y1="${margin.top}" x2="${x}" y2="${height - margin.bottom}" stroke="#1f2937" stroke-width="1" />`;
    
    let label = f.toString();
    if (f === 10) label = "10Hz";
    if (f === 100) label = "100Hz";
    if (f === 1000) label = "1KHz";
    if (f === 10000) label = "10KHz";
    if (f === 100000) label = "100KHz";
    if (f === 1000000) label = "1MHz";
    svg += `<text x="${x}" y="${height - margin.bottom + 20}" font-size="12" text-anchor="middle" fill="#9ca3af">${label}</text>`;
}

svg += `<path d="${pathDataDM}" fill="none" stroke="#22c55e" stroke-width="2" />`; // Green DM
svg += `<path d="${pathDataCM}" fill="none" stroke="#3b82f6" stroke-width="2" />`; // Blue CM

// Legend & Explanation
svg += `<rect x="${margin.left + 20}" y="${height - margin.bottom - 70}" width="160" height="60" fill="#111827" stroke="#374151" rx="4" />`;
svg += `<line x1="${margin.left + 30}" y1="${height - margin.bottom - 55}" x2="${margin.left + 60}" y2="${height - margin.bottom - 55}" stroke="#22c55e" stroke-width="3" />`;
svg += `<text x="${margin.left + 70}" y="${height - margin.bottom - 51}" font-size="12" fill="#d1d5db">DM Final</text>`;
svg += `<line x1="${margin.left + 30}" y1="${height - margin.bottom - 35}" x2="${margin.left + 60}" y2="${height - margin.bottom - 35}" stroke="#3b82f6" stroke-width="3" />`;
svg += `<text x="${margin.left + 70}" y="${height - margin.bottom - 31}" font-size="12" fill="#d1d5db">CM Final</text>`;

svg += `<text x="${width/2}" y="${margin.top - 15}" font-size="16" font-weight="bold" text-anchor="middle" fill="#f3f4f6">Final Assembled Filter — DM and CM Transfer Functions</text>`;
svg += `<text x="${width/2}" y="${height - 15}" font-size="12" text-anchor="middle" fill="#9ca3af">Flat passbands to ~5 kHz, damped resonances, and strong attenuation across CISPR band (shaded).</text>`;

svg += `</svg>`;

fs.writeFileSync('public/emi_filter_final_plot.svg', svg);
console.log('Plot generated.');
