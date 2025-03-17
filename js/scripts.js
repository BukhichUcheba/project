// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Инициализация AOS
AOS.init({
  duration: 1000,
  once: true
});

// Валидация формы
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Пожалуйста, заполните все поля.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Пожалуйста, введите корректный email.');
    return;
  }

  alert('Форма успешно отправлена!');
  this.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Динамическая загрузка контента
document.addEventListener('DOMContentLoaded', function () {
  fetch('data/editors.json')
    .then(response => response.json())
    .then(data => {
      const editorsContainer = document.getElementById('editorsContainer');
      data.forEach(editor => {
        const editorHTML = `
          <div class="column col-4" data-aos="fade-up">
            <img src="${editor.image}" alt="${editor.name}" class="img-responsive">
            <p class="text-center"><a href="${editor.link}" target="_blank">${editor.name}</a></p>
          </div>
        `;
        editorsContainer.innerHTML += editorHTML;
      });
    })
    .catch(error => console.error('Ошибка загрузки данных:', error));
});