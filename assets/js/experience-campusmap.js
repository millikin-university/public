const mapBaseWidth = 3600;
const mapBaseHeight = 1800;

const mapOverlaysPublicSafety = [{ loc_x: '1980', loc_y: '520' }];

const mapOverlayEmergency = [
  { loc_x: '780', loc_y: '140' },
  { loc_x: '2140', loc_y: '0' },
  { loc_x: '2160', loc_y: '80' },
  { loc_x: '2200', loc_y: '180' },
  { loc_x: '340', loc_y: '680' },
  { loc_x: '360', loc_y: '860' },
  { loc_x: '580', loc_y: '1340' },
  { loc_x: '940', loc_y: '820' },
  { loc_x: '1640', loc_y: '1120' },
  { loc_x: '2240', loc_y: '920' },
  { loc_x: '2260', loc_y: '1400' },
];

const mapOverlayNumbers = [
  { legend: '1', loc_x: '640', loc_y: '740' },
  { legend: '2', loc_x: '840', loc_y: '1300' },
  { legend: '3', loc_x: '1260', loc_y: '640' },
  { legend: '4', loc_x: '1540', loc_y: '180' },
  { legend: '5', loc_x: '640', loc_y: '600' },
  { legend: '6', loc_x: '2260', loc_y: '300' },
  { legend: '7', loc_x: '1120', loc_y: '600' },
  { legend: '8', loc_x: '820', loc_y: '860' },
  { legend: '9', loc_x: '1580', loc_y: '660' },
  { legend: '10', loc_x: '3000', loc_y: '940' },
  { legend: '11', loc_x: '1620', loc_y: '440' },
  { legend: '12', loc_x: '920', loc_y: '640' },
  { legend: '13', loc_x: '1220', loc_y: '1300' },
  { legend: '14', loc_x: '2040', loc_y: '880' },
  { legend: '16', loc_x: '2380', loc_y: '960' },
  { legend: '17', loc_x: '1700', loc_y: '1540' },
  { legend: '18', loc_x: '940', loc_y: '200' },
  { legend: '19', loc_x: '1700', loc_y: '40' },
  { legend: '20', loc_x: '2560', loc_y: '1720' },
  { legend: '22', loc_x: '1940', loc_y: '160' },
  { legend: '23', loc_x: '1020', loc_y: '400' },
  { legend: '24', loc_x: '3260', loc_y: '780' },
  { legend: '25', loc_x: '1480', loc_y: '340' },
  { legend: '29', loc_x: '80', loc_y: '640' },
  { legend: '31', loc_x: '1920', loc_y: '420' },
  { legend: '32', loc_x: '2180', loc_y: '560' },
  { legend: '36', loc_x: '260', loc_y: '820' },
  { legend: '40', loc_x: '2020', loc_y: '1060' },
  { legend: '41', loc_x: '2200', loc_y: '1000' },
  { legend: '42', loc_x: '180', loc_y: '740' },
  { legend: '43', loc_x: '2200', loc_y: '840' },
  { legend: '44', loc_x: '1680', loc_y: '1000' },
  { legend: '45', loc_x: '2060', loc_y: '480' },
  { legend: '46', loc_x: '1860', loc_y: '940' },
  { legend: '47', loc_x: '3280', loc_y: '1100' },
];

const mapOverlayLots = [
  { legend: 'M1', loc_x: '1800', loc_y: '120' },
  { legend: 'M2', loc_x: '2220', loc_y: '80' },
  { legend: 'M3', loc_x: '2340', loc_y: '160' },
  { legend: 'M4', loc_x: '2060', loc_y: '140' },
  { legend: 'M5', loc_x: '3500', loc_y: '780' },
  { legend: 'M6', loc_x: '1740', loc_y: '340' },
  { legend: 'M7', loc_x: '380', loc_y: '580' },
  { legend: 'M8', loc_x: '1160', loc_y: '880' },
  { legend: 'M9', loc_x: '1500', loc_y: '1180' },
  { legend: 'M10', loc_x: '2360', loc_y: '1280' },
  { legend: 'M11', loc_x: '360', loc_y: '960' },
  { legend: 'M12', loc_x: '380', loc_y: '1460' },
];

const mapLegendEntriesAcad = [
  {
    legend: '12',
    group: 'acad',
    label: 'University Commons & Staley Library',
    sublabel: 'Student Success Center',
  },
  {
    legend: '9',
    group: 'acad',
    label: 'Shilling Hall',
    sublabel: 'Student Financial Services, Help Desk',
  },
  {
    legend: '7',
    group: 'acad',
    label: 'Pilling Chapel',
    sublabel: '',
  },
  {
    legend: '8',
    group: 'acad',
    label: 'Perkinson Music Center',
    sublabel: '',
  },
  {
    legend: '13',
    group: 'acad',
    label: 'Millikin Health Clinic',
    sublabel: '',
  },
  {
    legend: '5',
    group: 'acad',
    label: 'Leighty-Tabor Science Center',
    sublabel: '',
  },
  {
    legend: '10',
    group: 'acad',
    label: 'Health Sciences Center West',
    sublabel: '',
  },
  {
    legend: '24',
    group: 'acad',
    label: 'Health Sciences Center',
    sublabel: '',
  },
  {
    legend: '4',
    group: 'acad',
    label: 'Griswold Physical Education Center',
    sublabel: '',
  },
  {
    legend: '3',
    group: 'acad',
    label: 'Gorin Hall',
    sublabel: 'Admission Office, Registrar, Marketing',
  },
  {
    legend: '6',
    group: 'acad',
    label: 'Dolson Hall',
    sublabel: 'Office of Residence Life',
  },
  {
    legend: '11',
    group: 'acad',
    label: 'Center for Theatre & Dance',
    sublabel: '',
  },
  {
    legend: '2',
    group: 'acad',
    label: 'Alumni/Development Center',
    sublabel: '',
  },
  {
    legend: '1',
    group: 'acad',
    label: 'ADM-Scovill Hall',
    sublabel: 'Tabor School of Business, Center for Entrepreneurship, SCORE',
  },
];
const mapLegendEntriesAthletics = [
  {
    legend: '19',
    group: 'athletics',
    label: 'Workman Family Softball Field',
    sublabel: '',
  },
  {
    legend: '20',
    group: 'athletics',
    label: 'Workman Family Baseball Field',
    sublabel: '',
  },
  {
    legend: '25',
    group: 'athletics',
    label: 'Rathje Athletic Center',
    sublabel: 'Coming soon!',
  },
  {
    legend: '4',
    group: 'athletics',
    label: 'Griswold Physical Education Center',
    sublabel: '',
  },
  {
    legend: '18',
    group: 'athletics',
    label: 'Frank M. Lindsay Track & Field',
    sublabel: '',
  },
  {
    legend: '17',
    group: 'athletics',
    label: 'Decatur Indoor Sports Center',
    sublabel: '(DISC)',
  },
  {
    legend: '16',
    group: 'athletics',
    label: 'Bartlett Tennis Courts',
    sublabel: '',
  },
  {
    legend: '14',
    group: 'athletics',
    label: 'Athletic Department',
    sublabel: '',
  },
];
const mapLegendEntriesArts = [
  {
    legend: '24',
    group: 'arts',
    label: 'Pipe Dreams Studio Theatre',
    sublabel: '',
  },
  {
    legend: '7',
    group: 'arts',
    label: 'Pilling Chapel',
    sublabel: '',
  },
  {
    legend: '8',
    group: 'arts',
    label: 'Perkinson Music Center',
    sublabel: '',
  },
  {
    legend: '40',
    group: 'arts',
    label: 'Percussion House',
    sublabel: '',
  },
  {
    legend: '23',
    group: 'arts',
    label: 'Kirkland Fine Arts Center',
    sublabel: '',
  },
  {
    legend: '11',
    group: 'arts',
    label: 'Center for Theatre & Dance',
    sublabel: '',
  },
  {
    legend: '22',
    group: 'arts',
    label: '3D Arts & Theatre Center',
    sublabel: '',
  },
];
const mapLegendEntriesDining = [
  {
    legend: '9',
    group: 'dining',
    label: 'Einstein Bros. Bagels',
    sublabel: 'Shilling Hall (North Entrance)',
  },
  {
    legend: '10',
    group: 'dining',
    label: 'Domino’s, University Dogs',
    sublabel: '',
  },
  {
    legend: '12',
    group: 'dining',
    label: 'Dining Hall, Common Grounds',
    sublabel: 'University Commons',
  },
];
const mapLegendEntriesHousing = [
  {
    legend: '46',
    group: 'housing',
    label: 'Weck Hall',
    sublabel: '',
  },
  {
    legend: '45',
    group: 'housing',
    label: 'Walker Hall',
    sublabel: '',
  },
  {
    legend: '47',
    group: 'housing',
    label: 'The Woods at Millikin',
    sublabel: '',
  },
  {
    legend: '44',
    group: 'housing',
    label: 'Tau Kappa Epsilon',
    sublabel: '',
  },
  {
    legend: '43',
    group: 'housing',
    label: 'Sigma Alpha Epsilon',
    sublabel: '',
  },
  {
    legend: '42',
    group: 'housing',
    label: 'Pi Beta Phi',
    sublabel: '',
  },
  {
    legend: '41',
    group: 'housing',
    label: 'New Hall 4',
    sublabel: '',
  },
  {
    legend: '36',
    group: 'housing',
    label: 'Huss House',
    sublabel: '',
  },
  {
    legend: '6',
    group: 'housing',
    label: 'Dolson Hall',
    sublabel: '',
  },
  {
    legend: '32',
    group: 'housing',
    label: 'Blackburn Hall',
    sublabel: '',
  },
  {
    legend: '31',
    group: 'housing',
    label: 'Aston Hall',
    sublabel: '',
  },
  {
    legend: '29',
    group: 'housing',
    label: 'Alpha Chi Omega',
    sublabel: '',
  },
];

const mapContainer = document.getElementById('map--container');

function loadLabels() {
  //Load Public Safety Labels
  for (const label of mapOverlaysPublicSafety) {
    mapContainer.insertAdjacentHTML(
      'afterBegin',
      `
            <div class="map--legend-number map--overlay" style="background-color: #ff0000; left: calc( ${label.loc_x} / ${mapBaseWidth} * 100%); top: calc( ${label.loc_y} / ${mapBaseHeight} * 100% );">
              <span>S</span>
            </div>
            `
    );
  }

  //Load Emergency Labels
  for (const label of mapOverlayEmergency) {
    mapContainer.insertAdjacentHTML(
      'afterBegin',
      `
            <div class="map--legend-number map--legend-number-emergency map--overlay" style="left: calc( ${label.loc_x} / ${mapBaseWidth} * 100%); top: calc( ${label.loc_y} / ${mapBaseHeight} * 100% );">
              <span class="material-symbols-outlined">emergency</span>
            </div>
            `
    );
  }

  //Load Number Labels
  for (const label of mapOverlayNumbers) {
    mapContainer.insertAdjacentHTML(
      'afterBegin',
      `
            <div class="map--legend-number map--overlay map--overlay-number" style="left: calc( ${label.loc_x} / ${mapBaseWidth} * 100%); top: calc( ${label.loc_y} / ${mapBaseHeight} * 100% );">
              <span>${label.legend}</span>
            </div>
            `
    );
  }

  //Load Lot Labels
  for (const label of mapOverlayLots) {
    let labelStyle = 'map--legend-lot';
    if (label.legend.length >= 3) {
      labelStyle += '  map--legend-lot-wide';
    }
    mapContainer.insertAdjacentHTML(
      'afterBegin',
      `
            <div class="${labelStyle}" style="left: calc( ${label.loc_x} / ${mapBaseWidth} * 100%); top: calc( ${label.loc_y} / ${mapBaseHeight} * 100% );">
              <div>lot</div>
              <div>${label.legend}</div>
            </div>
            `
    );
  }
}

const acadLegends = document.getElementById('acad-legends');
const athleticsLegends = document.getElementById('athletics-legends');
const artsLegends = document.getElementById('arts-legends');
const diningLegends = document.getElementById('dining-legends');
const housingLegends = document.getElementById('housing-legends');

function loadLegend(sourceArray, targetElement) {
  for (const legend of sourceArray) {
    const sublabel = legend.sublabel && legend.sublabel != '' ? `<div class="map--legend-sublabel">${legend.sublabel}</div>` : '';

    targetElement.insertAdjacentHTML(
      'afterBegin',
      `
            <div class="map--legend-number"><span>${legend.legend}</span></div>
            <div class="map--legend-label">${legend.label}
            ${sublabel}</div>`
    );
  }
}

function loadLegends() {
  loadLegend(mapLegendEntriesAcad, acadLegends);
  loadLegend(mapLegendEntriesArts, artsLegends);
  loadLegend(mapLegendEntriesAthletics, athleticsLegends);
  loadLegend(mapLegendEntriesDining, diningLegends);
  loadLegend(mapLegendEntriesHousing, housingLegends);
}
