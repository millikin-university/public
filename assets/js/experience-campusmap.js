//MAP OVERLAY DATA
//---------------------------------------------
// Create the Object Prototype that will contain our Points
function MapLocationData(type, label, loc_x, loc_y, id) {
  this.type = type;
  this.label = label;
  this.loc_x = loc_x;
  this.loc_y = loc_y;
  this.id = id;
}

// Load the Data
const mapLocationEntries = [
  new MapLocationData('safety', 'S', '1980', '520', 'mu--loc-s3'),
  new MapLocationData('emergency', 'emergency', '780', '140', 'mu--loc-e4'),
  new MapLocationData('emergency', 'emergency', '2140', '0', 'mu--loc-e5'),
  new MapLocationData('emergency', 'emergency', '2160', '80', 'mu--loc-e6'),
  new MapLocationData('emergency', 'emergency', '2200', '180', 'mu--loc-e7'),
  new MapLocationData('emergency', 'emergency', '340', '680', 'mu--loc-e8'),
  new MapLocationData('emergency', 'emergency', '360', '860', 'mu--loc-e9'),
  new MapLocationData('emergency', 'emergency', '940', '820', 'mu--loc-e10'),
  new MapLocationData('emergency', 'emergency', '1640', '1120', 'mu--loc-e11'),
  new MapLocationData('emergency', 'emergency', '2240', '920', 'mu--loc-e12'),
  new MapLocationData('emergency', 'emergency', '2260', '1400', 'mu--loc-e13'),
  new MapLocationData('number', '1', '640', '740', 'mu--loc-n14'),
  new MapLocationData('number', '2', '840', '1300', 'mu--loc-n15'),
  new MapLocationData('number', '3', '1260', '640', 'mu--loc-n16'),
  new MapLocationData('number', '4', '1540', '180', 'mu--loc-n17'),
  new MapLocationData('number', '5', '640', '600', 'mu--loc-n18'),
  new MapLocationData('number', '6', '2260', '300', 'mu--loc-n19'),
  new MapLocationData('number', '7', '1120', '600', 'mu--loc-n20'),
  new MapLocationData('number', '8', '820', '860', 'mu--loc-n21'),
  new MapLocationData('number', '9', '1580', '660', 'mu--loc-n22'),
  new MapLocationData('number', '10', '2980', '840', 'mu--loc-n23'),
  new MapLocationData('number', '11', '1620', '440', 'mu--loc-n24'),
  new MapLocationData('number', '12', '920', '640', 'mu--loc-n25'),
  new MapLocationData('number', '13', '1220', '1300', 'mu--loc-n26'),
  new MapLocationData('number', '14', '2040', '880', 'mu--loc-n27'),
  new MapLocationData('number', '16', '2380', '960', 'mu--loc-n28'),
  new MapLocationData('number', '17', '1700', '1540', 'mu--loc-n29'),
  new MapLocationData('number', '18', '940', '200', 'mu--loc-n30'),
  new MapLocationData('number', '19', '1700', '40', 'mu--loc-n31'),
  new MapLocationData('number', '20', '2560', '1640', 'mu--loc-n32'),
  new MapLocationData('number', '22', '1940', '160', 'mu--loc-n33'),
  new MapLocationData('number', '23', '1020', '400', 'mu--loc-n34'),
  new MapLocationData('number', '24', '3260', '780', 'mu--loc-n35'),
  new MapLocationData('number', '25', '1480', '340', 'mu--loc-n36'),
  new MapLocationData('number', '29', '80', '640', 'mu--loc-n37'),
  new MapLocationData('number', '31', '1920', '420', 'mu--loc-n38'),
  new MapLocationData('number', '32', '2180', '560', 'mu--loc-n39'),
  new MapLocationData('number', '36', '260', '820', 'mu--loc-n40'),
  new MapLocationData('number', '40', '2020', '1060', 'mu--loc-n41'),
  new MapLocationData('number', '41', '2200', '1000', 'mu--loc-n42'),
  new MapLocationData('number', '42', '180', '740', 'mu--loc-n43'),
  new MapLocationData('number', '43', '2200', '840', 'mu--loc-n44'),
  new MapLocationData('number', '44', '1680', '1000', 'mu--loc-n45'),
  new MapLocationData('number', '46', '1860', '940', 'mu--loc-n46'),
  new MapLocationData('number', '47', '2900', '1000', 'mu--loc-n47'),
  new MapLocationData('lot', 'M1', '1800', '120', 'mu--loc-l48'),
  new MapLocationData('lot', 'M2', '2220', '80', 'mu--loc-l49'),
  new MapLocationData('lot', 'M3', '2340', '160', 'mu--loc-l50'),
  new MapLocationData('lot', 'M4', '2060', '140', 'mu--loc-l51'),
  new MapLocationData('lot', 'M5', '3420', '740', 'mu--loc-l52'),
  new MapLocationData('lot', 'M6', '1740', '340', 'mu--loc-l53'),
  new MapLocationData('lot', 'M7', '380', '580', 'mu--loc-l54'),
  new MapLocationData('lot', 'M8', '1180', '880', 'mu--loc-l55'),
  new MapLocationData('lot', 'M9', '1500', '1180', 'mu--loc-l56'),
  new MapLocationData('lot', 'M10', '2360', '1280', 'mu--loc-l57'),
  new MapLocationData('lot', 'M11', '360', '960', 'mu--loc-l58'),
];

//LEGEND ENTRY DATA
//---------------------------------------------
// Create the Object Prototype that will contain our Points
function MapLegendData(group, legend, label, sublabel) {
  this.group = group;
  this.legend = legend;
  this.label = label;
  this.sublabel = sublabel;
}

// Load the Data
const mapLegendEntries = [
  new MapLegendData('acad', '12', 'University Commons & Staley Library', 'Student Success Center'),
  new MapLegendData('acad', '9', 'Shilling Hall', 'Student Financial Services, IT Help Desk, Mailroom'),
  new MapLegendData('acad', '7', 'Pilling Chapel', ''),
  new MapLegendData('acad', '8', 'Perkinson Music Center', ''),
  new MapLegendData('acad', '13', 'Millikin Health Clinic', ''),
  new MapLegendData('acad', '5', 'Leighty-Tabor Science Center', ''),
  new MapLegendData('acad', '10', 'Health Sciences Center West', ''),
  new MapLegendData('acad', '24', 'Health Sciences Center', ''),
  new MapLegendData('acad', '4', 'Griswold Physical Education Center', ''),
  new MapLegendData('acad', '3', 'Gorin Hall', 'Admission Office, Registrar, Marketing'),
  new MapLegendData('acad', '6', 'Dolson Hall', 'Office of Residence Life'),
  new MapLegendData('acad', '11', 'Center for Theatre & Dance', ''),
  new MapLegendData('acad', '32', 'Blackburn Hall', 'Textbook Pickup'),
  new MapLegendData('acad', '2', 'Alumni/Development Center', ''),
  new MapLegendData('acad', '1', 'ADM-Scovill Hall', 'Tabor School of Business, Center for Entrepreneurship, SCORE'),
  new MapLegendData('arts', '24', 'Pipe Dreams Studio Theatre', ''),
  new MapLegendData('arts', '7', 'Pilling Chapel', ''),
  new MapLegendData('arts', '8', 'Perkinson Music Center', 'Kaeuper Hall'),
  new MapLegendData('arts', '40', 'Percussion House', ''),
  new MapLegendData('arts', '23', 'Kirkland Fine Arts Center', ''),
  new MapLegendData('arts', '11', 'Center for Theatre & Dance', 'Virigina Rogers Theater'),
  new MapLegendData('arts', '22', '3D Arts & Theatre Center', ''),
  new MapLegendData('athletics', '19', 'Workman Family Softball Field', ''),
  new MapLegendData('athletics', '20', 'Workman Family Baseball Field', ''),
  new MapLegendData('athletics', '25', 'Rathje Athletic Center', ''),
  new MapLegendData('athletics', '4', 'Griswold Physical Education Center', ''),
  new MapLegendData('athletics', '18', 'Frank M. Lindsay Track & Field', ''),
  new MapLegendData('athletics', '17', 'Decatur Indoor Sports Center', '(DISC)'),
  new MapLegendData('athletics', '16', 'Bartlett Tennis Courts', ''),
  new MapLegendData('athletics', '14', 'Athletic Department', ''),
  new MapLegendData('dining', '9', 'Einstein Bros. Bagels', 'Shilling Hall (North Entrance)'),
  new MapLegendData('dining', '10', 'Domino’s, University Dogs', ''),
  new MapLegendData('dining', '12', 'Dining Hall, Common Grounds', 'University Commons'),
  new MapLegendData('emergency', 'emergency', 'Emergency', ''),
  new MapLegendData('housing', '46', 'Weck Hall', ''),
  new MapLegendData('housing', '47', 'The Woods at Millikin', ''),
  new MapLegendData('housing', '44', 'Tau Kappa Epsilon', ''),
  new MapLegendData('housing', '43', 'Sigma Alpha Epsilon', ''),
  new MapLegendData('housing', '42', 'Pi Beta Phi', ''),
  new MapLegendData('housing', '41', 'New Hall 4', ''),
  new MapLegendData('housing', '36', 'Huss House', ''),
  new MapLegendData('housing', '6', 'Dolson Hall', ''),
  new MapLegendData('housing', '32', 'Blackburn Hall', ''),
  new MapLegendData('housing', '31', 'Aston Hall', ''),
  new MapLegendData('housing', '29', 'Alpha Chi Omega', ''),
  new MapLegendData('lot', 'M11', 'Lot M11', ''),
  new MapLegendData('lot', 'M10', 'Lot M10', ''),
  new MapLegendData('lot', 'M9', 'Lot M9', ''),
  new MapLegendData('lot', 'M8', 'Lot M8', ''),
  new MapLegendData('lot', 'M7', 'Lot M7', ''),
  new MapLegendData('lot', 'M6', 'Lot M6', ''),
  new MapLegendData('lot', 'M5', 'Lot M5', ''),
  new MapLegendData('lot', 'M4', 'Lot M4', ''),
  new MapLegendData('lot', 'M3', 'Lot M3', ''),
  new MapLegendData('lot', 'M2', 'Lot M2', ''),
  new MapLegendData('lot', 'M1', 'Lot M1', ''),
  new MapLegendData('safety', 'S', 'Public Safety', 'Walker Hall'),
];

// MAPS
//---------------------------------------------
//Use a Map to define our classes for the DIV that contains the label
const labelClassMap = new Map([
  ['safety', 'map--label map--label-safety'],
  ['emergency', 'map--label map--label-emergency'],
  ['lot', 'map--label map--label-lot'],
  ['lot-wide', 'map--label map--label-lot map--label-lot-wide'],
  ['number', 'map--label map--label-number'],
  ['acad', 'map--label map--label-number'],
  ['arts', 'map--label map--label-number'],
  ['athletics', 'map--label map--label-number'],
  ['dining', 'map--label map--label-number'],
  ['housing', 'map--label map--label-number'],
]);

//Use a Map to define our objects that are the groups of Legend Enties
const legendsMap = new Map([
  ['acad', document.getElementById('acad-legends')],
  ['athletics', document.getElementById('athletics-legends')],
  ['arts', document.getElementById('arts-legends')],
  ['dining', document.getElementById('dining-legends')],
  ['housing', document.getElementById('housing-legends')],
  ['safety', document.getElementById('safety-legends')],
  ['emergency', document.getElementById('safety-legends')],
  ['lot', document.getElementById('lot-legends')],
]);

// Display Values of the Group Names
const groupsMap = new Map([
  ['acad', 'Academic / Administration'],
  ['arts', 'Fine & Performing Arts'],
  ['athletics', 'Athletics'],
  ['dining', 'Dining'],
  ['housing', 'Housing'],
  ['safety', 'Safety & Emergency'],
  ['emergency', 'Safety & Emergency'],
  ['lot', 'Parking Lots'],
]);

//GLOBAL CONSTANTS
//---------------------------------------------
//Get elements we'll need to interact with from the DOM
const mapContainer = document.getElementById('map--container');

// Handle Helper Box Overlay
const mapHelper = document.getElementById('map--helper');

//Get dimensions we'll be using to place the Overlays on the map
//Should rarely change, this is the width of the actual image used to locate points on it in our data
//If you ever change the map enough you need to measure new points, you'll likely need to change this
const mapBaseWidth = 3600;
const mapBaseHeight = 1800;

//FUNCTIONS
//---------------------------------------------
// METHODS
// These get placed on the objects containing our Data
// Makes it a lot Easier/Cleaner to get the resulting HTML

// For Labels
// Location Style gives the position to place each label
MapLocationData.prototype.getLocStyle = function () {
  return `left: calc( ${this.loc_x} / ${mapBaseWidth} * 100%); top: calc( ${this.loc_y} / ${mapBaseHeight} * 100% )`;
};

//Creates labels, pass a location style to actually overlay it on the map, otherwise it's for display somewhere else.
MapLocationData.prototype.getLabelHTML = function (locStyle = '') {
  // Lots need to be a bit wider if they are two digit lots.
  const divClass = this.type === 'lot' && this.label.length >= 3 ? labelClassMap.get('lot-wide') : labelClassMap.get(this.type);
  // Emergency labels use the Material Icons
  const spanClass = this.type === 'emergency' ? 'material-symbols-outlined' : '';

  // Build the HTML we want to put on the page, yes could be done in the command, doing here to make easier to follow
  // Lots have a slightly different content because they have two rows
  const labelContent =
    this.type === 'lot'
      ? `
        <div>lot</div>
        <div>${this.label}</div>`
      : `
        <span class="${spanClass}">${this.label}</span>
      `;
  const labelHTML = `<div id="${this.id}" class="map--clickable-label ${divClass}" style="${locStyle}" onclick="loadHelper('${this.label}','${this.id}')">${labelContent}</div>`;
  return labelHTML;
};

// For Legends
MapLegendData.prototype.getLabelHTML = function () {
  const divClass = this.group === 'lot' && this.legend.length >= 3 ? labelClassMap.get('lot-wide') : labelClassMap.get(this.group);
  const sublabelHTML = this.sublabel && this.sublabel != '' ? `<div class="map--label-sublabel">${this.sublabel}</div>` : '';
  // Emergency labels use the Material Icons
  const spanClass = this.legend === 'emergency' ? 'material-symbols-outlined' : '';

  // Build the HTML we want to put on the page, yes could be done in the command, doing here to make easier to follow
  // Lots have a slightly different content because they have two rows
  const labelContent =
    this.group === 'lot'
      ? `
        <div>lot</div>
        <div>${this.legend}</div>`
      : `
        <span class="${spanClass}">${this.legend}</span>
      `;
  const labelHTML = `
      <div class="${divClass}">${labelContent}</div>
      <div class="map--label-value">
        ${this.label}
        ${sublabelHTML}
      </div>`;
  return labelHTML;
};

MapLegendData.prototype.getHelperHTML = function () {
  const divClass = this.group === 'lot' && this.legend.length >= 3 ? labelClassMap.get('lot-wide') : labelClassMap.get(this.group);
  const sublabelHTML = this.sublabel && this.sublabel != '' ? `<div class="map--helper-sublabel">${this.sublabel}</div>` : '';
  // Emergency labels use the Material Icons
  const spanClass = this.legend === 'emergency' ? 'material-symbols-outlined' : '';

  // Build the HTML we want to put on the page, yes could be done in the command, doing here to make easier to follow
  // Lots have a slightly different content because they have two rows
  const labelContent =
    this.group === 'lot'
      ? `
        <div>lot</div>
        <div>${this.legend}</div>`
      : `
        <span class="${spanClass}">${this.legend}</span>
      `;
  const labelHTML = `
    <div class="map--helper-section">
      <div class="${divClass}">
        ${labelContent}
      </div>
      <div class="map--helper-description">
        <div class="map--helper-group">${groupsMap.get(this.group)}</div>
        <div class="map--helper-label">${this.label}</div>
        ${sublabelHTML}
      </div>
    </div>
    `;

  return labelHTML;
};

// Clears the Helper Box and any clicked elements
function clearHelper() {
  const clicked = document.getElementsByClassName('map--clickable-clicked');
  for (const element of clicked) {
    element.classList.remove('map--clickable-clicked');
  }
  mapHelper.innerHTML = '';
  mapHelper.classList = 'mu--modal-closed';
}

// Loads the Helper Box with content
function loadHelper(label, id) {
  clearHelper();
  const legendData = mapLegendEntries.filter((value) => value.legend == label); //get the whole array, can be more than one

  let blockHTML = '';
  for (const entry of legendData) {
    blockHTML += entry.getHelperHTML();
  }

  mapHelper.innerHTML = blockHTML;
  mapHelper.classList = 'mu--modal-open';

  const trigger = document.getElementById(id);
  trigger.classList.add('map--clickable-clicked');
}
// RENDERS
//---------------------------------------------
document.getElementById('map--image').addEventListener('click', clearHelper);
mapHelper.addEventListener('click', clearHelper);

// INTERACTIONS
//---------------------------------------------
// Give the map a way to clear the Helper Box when clicked
// Done on the Map itself so other clicks don't propogate to it.

// EXTERNAL METHODS
// Designed to be called by the page after load
// Loads all the Labels on the Map
function loadMapLabels() {
  for (const label of mapLocationEntries) {
    mapContainer.insertAdjacentHTML('afterbegin', label.getLabelHTML(label.getLocStyle()));
  }
}

// Loads all the Entries in the Legend
function loadLegends() {
  for (const entry of mapLegendEntries) {
    legendsMap.get(entry.group).insertAdjacentHTML('afterBegin', entry.getLabelHTML());
  }
}
