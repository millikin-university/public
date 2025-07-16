//MAP OVERLAY DATA
//---------------------------------------------
const mapOverlays = [
  { type: 'safety', label: 'S', loc_x: '1980', loc_y: '520' },
  { type: 'emergency', label: 'emergency', loc_x: '780', loc_y: '140' },
  { type: 'emergency', label: 'emergency', loc_x: '2140', loc_y: '0' },
  { type: 'emergency', label: 'emergency', loc_x: '2160', loc_y: '80' },
  { type: 'emergency', label: 'emergency', loc_x: '2200', loc_y: '180' },
  { type: 'emergency', label: 'emergency', loc_x: '340', loc_y: '680' },
  { type: 'emergency', label: 'emergency', loc_x: '360', loc_y: '860' },
  { type: 'emergency', label: 'emergency', loc_x: '580', loc_y: '1340' },
  { type: 'emergency', label: 'emergency', loc_x: '940', loc_y: '820' },
  { type: 'emergency', label: 'emergency', loc_x: '1640', loc_y: '1120' },
  { type: 'emergency', label: 'emergency', loc_x: '2240', loc_y: '920' },
  { type: 'emergency', label: 'emergency', loc_x: '2260', loc_y: '1400' },
  { type: 'number', label: '1', loc_x: '640', loc_y: '740' },
  { type: 'number', label: '2', loc_x: '840', loc_y: '1300' },
  { type: 'number', label: '3', loc_x: '1260', loc_y: '640' },
  { type: 'number', label: '4', loc_x: '1540', loc_y: '180' },
  { type: 'number', label: '5', loc_x: '640', loc_y: '600' },
  { type: 'number', label: '6', loc_x: '2260', loc_y: '300' },
  { type: 'number', label: '7', loc_x: '1120', loc_y: '600' },
  { type: 'number', label: '8', loc_x: '820', loc_y: '860' },
  { type: 'number', label: '9', loc_x: '1580', loc_y: '660' },
  { type: 'number', label: '10', loc_x: '3000', loc_y: '940' },
  { type: 'number', label: '11', loc_x: '1620', loc_y: '440' },
  { type: 'number', label: '12', loc_x: '920', loc_y: '640' },
  { type: 'number', label: '13', loc_x: '1220', loc_y: '1300' },
  { type: 'number', label: '14', loc_x: '2040', loc_y: '880' },
  { type: 'number', label: '16', loc_x: '2380', loc_y: '960' },
  { type: 'number', label: '17', loc_x: '1700', loc_y: '1540' },
  { type: 'number', label: '18', loc_x: '940', loc_y: '200' },
  { type: 'number', label: '19', loc_x: '1700', loc_y: '40' },
  { type: 'number', label: '20', loc_x: '2560', loc_y: '1640' },
  { type: 'number', label: '22', loc_x: '1940', loc_y: '160' },
  { type: 'number', label: '23', loc_x: '1020', loc_y: '400' },
  { type: 'number', label: '24', loc_x: '3260', loc_y: '780' },
  { type: 'number', label: '25', loc_x: '1480', loc_y: '340' },
  { type: 'number', label: '29', loc_x: '80', loc_y: '640' },
  { type: 'number', label: '31', loc_x: '1920', loc_y: '420' },
  { type: 'number', label: '32', loc_x: '2180', loc_y: '560' },
  { type: 'number', label: '36', loc_x: '260', loc_y: '820' },
  { type: 'number', label: '40', loc_x: '2020', loc_y: '1060' },
  { type: 'number', label: '41', loc_x: '2200', loc_y: '1000' },
  { type: 'number', label: '42', loc_x: '180', loc_y: '740' },
  { type: 'number', label: '43', loc_x: '2200', loc_y: '840' },
  { type: 'number', label: '44', loc_x: '1680', loc_y: '1000' },
  { type: 'number', label: '45', loc_x: '2060', loc_y: '480' },
  { type: 'number', label: '46', loc_x: '1860', loc_y: '940' },
  { type: 'number', label: '47', loc_x: '3280', loc_y: '1100' },
  { type: 'lot', label: 'M1', loc_x: '1800', loc_y: '120' },
  { type: 'lot', label: 'M2', loc_x: '2220', loc_y: '80' },
  { type: 'lot', label: 'M3', loc_x: '2340', loc_y: '160' },
  { type: 'lot', label: 'M4', loc_x: '2060', loc_y: '140' },
  { type: 'lot', label: 'M5', loc_x: '3480', loc_y: '780' },
  { type: 'lot', label: 'M6', loc_x: '1740', loc_y: '340' },
  { type: 'lot', label: 'M7', loc_x: '380', loc_y: '580' },
  { type: 'lot', label: 'M8', loc_x: '1180', loc_y: '880' },
  { type: 'lot', label: 'M9', loc_x: '1500', loc_y: '1180' },
  { type: 'lot', label: 'M10', loc_x: '2360', loc_y: '1280' },
  { type: 'lot', label: 'M11', loc_x: '360', loc_y: '960' },
  { type: 'lot', label: 'M12', loc_x: '380', loc_y: '1460' },
];

//LEGEND ENTRY DATA
//---------------------------------------------
const mapLegendEntries = [
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

//FUNCTIONS
//---------------------------------------------
function loadLabels() {
  //Get elements we'll need to interact with from the DOM
  const mapContainer = document.getElementById('map--container');

  //Get dimensions we'll be using to place the Overlays on the map
  const mapBaseWidth = 3600;
  const mapBaseHeight = 1800;

  //Use a Map to define our classes for the DIV that contains the label
  const labelClassMap = new Map([
    ['safety', 'map--label map--label-safety'],
    ['emergency', 'map--label map--label-emergency'],
    ['lot', 'map--label map--label-lot'],
    ['lot-wide', 'map--label map--label-lot map--label-lot-wide'],
    ['number', 'map--label map--label-number'],
  ]);

  for (const label of mapOverlays) {
    const divClass = label.type === 'lot' && label.label.length >= 3 ? labelClassMap.get('lot-wide') : labelClassMap.get(label.type);
    const spanClass = label.type === 'emergency' ? 'material-symbols-outlined' : '';
    // Build the HTML we want to put on the page, yes could be done in the command, doing here to make easier to follow
    const labelContent =
      label.type === 'lot'
        ? `
        <div>lot</div>
        <div>${label.label}</div>
      `
        : `
        <span class="${spanClass}">${label.label}</span>
      `;
    const labelHtml = `
      <div class="${divClass}" style="left: calc( ${label.loc_x} / ${mapBaseWidth} * 100%); top: calc( ${label.loc_y} / ${mapBaseHeight} * 100% );">
        ${labelContent}  
      </div>`;

    //Load the HTML to the Page
    mapContainer.insertAdjacentHTML('afterbegin', labelHtml);
  }
}

function loadLegends() {
  //These are the "buckets" each of the legend entries can go into
  //We need a way to convert the data from the json object to the actual element on the page, so we'll use a Map to let us do that
  const legendsMap = new Map([
    ['acad', document.getElementById('acad-legends')],
    ['athletics', document.getElementById('athletics-legends')],
    ['arts', document.getElementById('arts-legends')],
    ['dining', document.getElementById('dining-legends')],
    ['housing', document.getElementById('housing-legends')],
  ]);
  for (const entry of mapLegendEntries) {
    const sublabel = entry.sublabel && entry.sublabel != '' ? `<div class="map--label-sublabel">${entry.sublabel}</div>` : '';

    legendsMap.get(entry.group).insertAdjacentHTML(
      'afterBegin',
      `
            <div class="map--label map--label-number"><span>${entry.legend}</span></div>
            <div class="map--label-value">${entry.label}
            ${sublabel}</div>`
    );
  }
}
