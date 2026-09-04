document.addEventListener('DOMContentLoaded', () => {
  const agencyContainer = document.getElementById('agency-container');

  if (typeof agenciesData !== 'undefined' && agencyContainer) {
    agencyContainer.innerHTML = agenciesData.map(agency => `
      <div class="bus-card" style="padding: 1.5rem; text-align: center;">
        <h3 style="margin-bottom: 0.5rem; color: var(--text-dark);">${agency.name}</h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">📍 ${agency.location}</p>
        <p style="font-size: 0.9rem; font-weight: 600; color: #d97706; margin-bottom: 1.25rem;">★ ${agency.rating} (${agency.reviews} reviews)</p>
        <a href="buses.html?agency=${agency.id}" class="btn-primary btn-block">View Buses</a>
      </div>
    `).join('');
  }
});
