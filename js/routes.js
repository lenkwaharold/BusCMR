document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('route-search');
  const regionSelect = document.getElementById('region-filter');
  const routeStrips = document.querySelectorAll('.route-strip');
  const routeImages = document.querySelectorAll('.route-strip-img, .route-card-img');

  routeImages.forEach(img => {
    img.addEventListener('error', () => {
      img.src = 'https://via.placeholder.com/400x250?text=Bus+Route+Image';
    });
  });

  function filterRoutes() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selectedRegion = regionSelect ? regionSelect.value.toLowerCase() : '';

    routeStrips.forEach(strip => {
      const originText = strip.querySelector('.origin strong')?.innerText.toLowerCase() || '';
      const destText = strip.querySelector('.destination strong')?.innerText.toLowerCase() || '';
      const fullText = `${originText} ${destText}`;

      const matchesSearch = fullText.includes(searchTerm);
      const matchesRegion = selectedRegion === '' || fullText.includes(selectedRegion);

      if (matchesSearch && matchesRegion) {
        strip.style.display = 'grid';
      } else {
        strip.style.display = 'none';
      }
    });
  }

  if (searchInput) searchInput.addEventListener('input', filterRoutes);
  if (regionSelect) regionSelect.addEventListener('change', filterRoutes);
});
