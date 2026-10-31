function revealGift() {
  const message = document.getElementById('giftMessage');
  message.classList.add('show');
  message.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
