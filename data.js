const medicalFacilities = [
  {
    name: "Clicks Walmer",
    type: "pharmacy",
    address: "6th Ave, Walmer, Port Elizabeth",
    coordinates: { latitude: -33.9700, longitude: 25.5800 },
    operatingHours: "Mon-Fri: 8 AM - 6 PM, Sat: 8 AM - 1 PM",
    is24Hour: false,
  },
  {
    name: "Dis-Chem Summerstrand",
    type: "pharmacy",
    address: "Marine Dr, Summerstrand, Port Elizabeth",
    coordinates: { latitude: -33.9900, longitude: 25.6500 },
    operatingHours: "Mon-Fri: 9 AM - 7 PM, Sat: 9 AM - 5 PM",
    is24Hour: false,
  },
  {
    name: "Netcare Greenacres Hospital",
    type: "hospital",
    address: "Cape Rd, Greenacres, Port Elizabeth",
    coordinates: { latitude: -33.9500, longitude: 25.5700 },
    operatingHours: "24 Hours",
    is24Hour: true,
  },
  {
    name: "Link Pharmacy Newton Park",
    type: "pharmacy",
    address: "Newton St, Newton Park, Port Elizabeth",
    coordinates: { latitude: -33.9400, longitude: 25.5600 },
    operatingHours: "Mon-Fri: 8 AM - 8 PM, Sat: 8 AM - 6 PM",
    is24Hour: false,
  },
  {
    name: "Mill Park Pharmacy",
    type: "pharmacy",
    address: "4th Ave, Mill Park, Port Elizabeth",
    coordinates: { latitude: -33.9550, longitude: 25.6000 },
    operatingHours: "Mon-Fri: 8 AM - 6 PM, Sat: 8 AM - 1 PM",
    is24Hour: false,
  },
];

const deliveryZones = [
  {
    name: "Walmer",
    deliveryFee: 25,
    estimatedTime: "30-45 minutes",
  },
  {
    name: "Summerstrand",
    deliveryFee: 30,
    estimatedTime: "45-60 minutes",
  },
  {
    name: "Mill Park",
    deliveryFee: 20,
    estimatedTime: "20-30 minutes",
  },
  {
    name: "Newton Park",
    deliveryFee: 22,
    estimatedTime: "25-35 minutes",
  },
  {
    name: "Greenacres",
    deliveryFee: 18,
    estimatedTime: "15-25 minutes",
  },
];

function getNearbyFacilities(userCoordinates) {
  // This function will calculate distances and sort facilities
  return medicalFacilities;
}

function checkDeliveryZone(address) {
  // This function will validate the address and return delivery information
  return deliveryZones[0];
}
