var map = L.map('map').setView([-33.9608, 25.6022], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

medicalFacilities.forEach(facility => {
    L.marker([facility.coordinates.latitude, facility.coordinates.longitude]).addTo(map)
        .bindPopup(`<b>${facility.name}</b><br>${facility.address}`);
});

function handlePaymentSubmit() {
  const paymentMethod = document.querySelector('input[name="payment_method"]:checked');
  if (paymentMethod) {
    if (paymentMethod.value === 'payshap') {
      // Implement PayShap payment logic
      alert('PayShap payment selected');
    } else if (paymentMethod.value === 'eft') {
      // Implement EFT payment logic
      alert('EFT payment selected');
    }
  } else {
    alert('Please select a payment method');
  }
}
