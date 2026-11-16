// 1. Открытие конверта
const openBtn = document.getElementById('openBtn');
const envelopeScreen = document.getElementById('envelopeScreen');
const mainCard = document.getElementById('mainCard');

openBtn.addEventListener('click', () => {
    envelopeScreen.classList.add('hidden');
    mainCard.classList.remove('hidden');
});

// 2. Живой таймер
const targetDate = new Date('August 24, 2027 15:00:00').getTime();

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) return;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateTimer, 1000);
updateTimer();

// 3. Отправка подтверждения в WhatsApp невесте
const rsvpBtn = document.getElementById('rsvpBtn');
const guestNameInput = document.getElementById('guestName');

// Номер телефона невесты (без плюса, начиная с 7)
const bridePhone = '79659649411';

rsvpBtn.addEventListener('click', () => {
    const name = guestNameInput.value.trim();

    if (!name) {
        guestNameInput.style.borderColor = '#c95b5b';
        guestNameInput.placeholder = 'Сначала впиши своё имя :)';
        return;
    }

    const messageText = `Амина, привет! Это ${name}. Я обязательно приду на твои проводы! ✨`;
    const whatsappUrl = `whatsapp://send?phone=${bridePhone}&text=${encodeURIComponent(messageText)}`;
    
    window.open(whatsappUrl, '_blank');
});
