document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const busId = urlParams.get('id') || 'bus-1';

  const currentBus = (typeof busesData !== 'undefined') 
    ? (busesData.find(b => b.id === busId) || busesData[0]) 
    : { id: 'bus-1', name: 'Scania Touring VIP', agencyName: 'General Express', price: 15000 };

  const titleHeader = document.getElementById('bus-title-header');
  const subtitle = document.getElementById('bus-agency-subtitle');
  const ticketPrice = document.getElementById('ticket-price');

  if (titleHeader) titleHeader.innerText = currentBus.name;
  if (subtitle) subtitle.innerText = `Operated by ${currentBus.agencyName}`;
  if (ticketPrice) ticketPrice.innerText = `${currentBus.price.toLocaleString()} FCFA`;

  const seatGrid = document.getElementById('seat-grid-container');
  const bookedSeats = [3, 7, 14, 21, 28];
  let selectedSeat = null;

  if (seatGrid) {
    seatGrid.innerHTML = '';
    for (let i = 1; i <= 36; i++) {
      const isBooked = bookedSeats.includes(i);
      const isFirstClass = i <= 8;
      const seat = document.createElement('div');

      seat.className = `seat ${isBooked ? 'booked' : isFirstClass ? 'first-class' : 'economy-class'}`;
      seat.innerText = i;

      if (!isBooked) {
        seat.addEventListener('click', () => {
          document.querySelectorAll('.seat').forEach(s => s.classList.remove('selected'));
          seat.classList.add('selected');
          selectedSeat = i;

          const seatNoElem = document.getElementById('selected-seat-no');
          const tierElem = document.getElementById('selected-seat-tier');
          const payBtn = document.getElementById('open-pay-btn');

          if (seatNoElem) seatNoElem.innerText = `Seat #${i}`;
          if (tierElem) tierElem.innerText = isFirstClass ? 'First Class' : 'Economy Class';
          if (payBtn) payBtn.disabled = false;
        });
      }

      seatGrid.appendChild(seat);
    }
  }

  const modal = document.getElementById('payment-modal');
  const openPayBtn = document.getElementById('open-pay-btn');
  const closePayBtn = document.getElementById('close-modal-btn');
  const confirmPayBtn = document.getElementById('confirm-pay-btn');
  const payOptions = document.querySelectorAll('.pay-option');

  if (openPayBtn && modal) {
    openPayBtn.addEventListener('click', () => modal.classList.add('active'));
  }

  if (closePayBtn && modal) {
    closePayBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  payOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      payOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });

  if (confirmPayBtn) {
    confirmPayBtn.addEventListener('click', () => {
      const phoneInput = document.getElementById('pay-phone');
      const phone = phoneInput ? phoneInput.value.trim() : '';

      if (!phone) {
        alert('Please enter your Mobile Money phone number.');
        return;
      }

      alert(`Payment prompt sent to ${phone}.\nSeat #${selectedSeat} successfully reserved for ${currentBus.name}!`);
      if (modal) modal.classList.remove('active');
      window.location.href = 'home.html';
    });
  }
});
