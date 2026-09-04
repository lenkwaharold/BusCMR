document.addEventListener('DOMContentLoaded', () => {
  const busContainer = document.getElementById('bus-container');
  const agencySelect = document.getElementById('agency-filter-select');
  const routeSelect = document.getElementById('route-filter-select');
  const sortSelect = document.getElementById('sort-select');
  const pageTitle = document.getElementById('buses-page-title');

  const routeImageMap = {
    'yd-dl': 'images/routes/yaounde-douala.jpg',
    'dl-bm': 'images/routes/douala-bamenda.jpg',
    'yd-bf': 'images/routes/yaounde-bafoussam.jpg',
    'dl-kb': 'images/routes/douala-kribi.jpg'
  };

  if (typeof agenciesData !== 'undefined' && agencySelect) {
    agenciesData.forEach(ag => {
      const option = document.createElement('option');
      option.value = ag.id;
      option.textContent = ag.name;
      agencySelect.appendChild(option);
    });
  }

  const urlParams = new URLSearchParams(window.location.search);
  const selectedAgencyParam = urlParams.get('agency');
  const selectedRouteParam = urlParams.get('route');

  if (selectedAgencyParam && agencySelect) {
    agencySelect.value = selectedAgencyParam;
    const ag = agenciesData.find(a => a.id === selectedAgencyParam);
    if (ag && pageTitle) pageTitle.innerText = `Available Buses - ${ag.name}`;
  }

  if (selectedRouteParam && routeSelect) {
    routeSelect.value = selectedRouteParam;
  }

  function renderBuses() {
    if (typeof busesData === 'undefined' || !busContainer) return;

    const selectedAgency = agencySelect ? agencySelect.value : 'ALL';
    const selectedRoute = routeSelect ? routeSelect.value : 'ALL';
    const selectedSort = sortSelect ? sortSelect.value : 'popular';

    let filtered = [...busesData];

    if (selectedAgency !== 'ALL') {
      filtered = filtered.filter(b => b.agencyId === selectedAgency);
    }

    if (selectedRoute !== 'ALL') {
      filtered = filtered.filter(b => b.routeKey === selectedRoute);
    }

    if (selectedSort === 'low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'high') {
      filtered.sort((a, b) => b.price - a.price);
    }

    if (filtered.length === 0) {
      busContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align:center; padding:2rem; color:var(--text-muted);">No buses available matching your criteria.</p>';
      return;
    }

    busContainer.innerHTML = filtered.map(bus => {
      const imageSrc = routeImageMap[bus.routeKey] || 'images/routes/yaounde-douala.jpg';

      return `
        <div class="bus-card">
          <div class="bus-image-placeholder">
            <span class="bus-type-badge ${bus.class ? bus.class.toLowerCase() : ''}">${bus.class}</span>
            <img src="${imageSrc}" alt="${bus.name}" class="bus-cover-img">
          </div>
          <div class="bus-details">
            <div>
              <small style="color:var(--primary); font-weight:600;">${bus.agencyName}</small>
              <h3>${bus.name}</h3>
              <div class="bus-amenities">
                <span>💺 ${bus.seats} Seats</span>
                <span>❄️ AC</span>
                <span>📶 Wi-Fi</span>
                <span>🔌 Charging Port</span>
              </div>
            </div>
            <p style="font-size:0.8rem; color:var(--text-muted);">Express highway service equipped with reclining seats and air conditioning.</p>
          </div>
          <div class="bus-price-col">
            <small>Ticket Price</small>
            <h3 style="color:var(--primary);">${bus.price.toLocaleString()} FCFA</h3>
            <button onclick="viewBusDetails('${bus.id}')" class="btn-primary" style="margin-top:0.75rem; width:100%;">Select Seats</button>
          </div>
        </div>
      `;
    }).join('');

    document.querySelectorAll('.bus-cover-img').forEach(img => {
      img.addEventListener('error', () => {
        img.src = 'https://via.placeholder.com/400x250?text=Bus+Route';
      });
    });
  }

  window.viewBusDetails = (busId) => {
    window.location.href = `bus-details.html?id=${busId}`;
  };

  if (agencySelect) agencySelect.addEventListener('change', renderBuses);
  if (routeSelect) routeSelect.addEventListener('change', renderBuses);
  if (sortSelect) sortSelect.addEventListener('change', renderBuses);

  renderBuses();
});
