document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.search-form');
  const departureSelect = document.getElementById('departure');
  const destinationSelect = document.getElementById('destination');
  const travelDateInput = document.getElementById('travel-date');
  const routeImages = document.querySelectorAll('.route-card-img');

  if (travelDateInput) {
    const today = new Date().toISOString().split('T')[0];
    travelDateInput.min = today;
    travelDateInput.value = today;
  }

  if (departureSelect && destinationSelect) {
    departureSelect.addEventListener('change', () => {
      if (departureSelect.value === destinationSelect.value && departureSelect.value !== '') {
        alert('Departure and Destination cities cannot be the same.');
        destinationSelect.value = '';
      }
    });

    destinationSelect.addEventListener('change', () => {
      if (destinationSelect.value === departureSelect.value && destinationSelect.value !== '') {
        alert('Destination and Departure cities cannot be the same.');
        departureSelect.value = '';
      }
    });
  }

  routeImages.forEach(img => {
    img.addEventListener('error', () => {
      img.src = 'https://via.placeholder.com/400x250?text=Bus+Route';
    });
  });

  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      const dep = departureSelect ? departureSelect.value : '';
      const dest = destinationSelect ? destinationSelect.value : '';

      if (!dep || !dest) {
        e.preventDefault();
        alert('Please select both departure and destination locations.');
      }
    });
  }
});
