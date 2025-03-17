document.addEventListener("DOMContentLoaded", function () {
    // Загружаем меню
    fetch("menu.html")
      .then((response) => response.text())
      .then((data) => {
        // Вставляем меню в начало body
        document.body.insertAdjacentHTML("afterbegin", data);
  
        // Добавляем активный класс для текущей страницы
        const currentPage = window.location.pathname.split("/").pop();
        const links = document.querySelectorAll(".navbar-section .btn-link");
  
        links.forEach((link) => {
          if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
          }
        });
      })
      .catch((error) => console.error("Ошибка загрузки меню:", error));
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Загружаем меню
    fetch("menu.html")
      .then((response) => response.text())
      .then((data) => {
        // Вставляем меню в начало body
        document.body.insertAdjacentHTML("afterbegin", data);
  
        // Добавляем активный класс для текущей страницы
        const currentPage = window.location.pathname.split("/").pop();
        const links = document.querySelectorAll(".navbar-section .btn-link");
  
        links.forEach((link) => {
          if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
          }
        });
      })
      .catch((error) => console.error("Ошибка загрузки меню:", error));
  });