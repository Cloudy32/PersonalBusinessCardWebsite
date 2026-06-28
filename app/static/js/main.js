const translations = {
  ru: {
    brand: "Название сайта",
    introText:
      "Привет, ты попал на мой личный сайт-визитку. Тут ты сможешь ознакомиться со мной, моими услугами, проектами и надеюсь тебе понравиться.",
    aboutTitle: "Обо мне",
    aboutText:
      "Тут в дальнейшем будет описание обо мне. Этот блок можно сделать длинным: он занимает почти весь экран и спокойно уходит ниже первого фото.",
    photoOne: "Мое фото",
    photoTwo: "Мое фото №2",
    servicesKicker: "Что можно заказать",
    servicesTitle: "Услуги",
    serviceOneTitle: "Frontend разработка",
    serviceOneText: "Адаптивные страницы, чистая верстка и аккуратная структура интерфейса.",
    serviceTwoTitle: "UI доработка",
    serviceTwoText: "Обновление визуального стиля, сеток, карточек и мобильных состояний.",
    serviceThreeTitle: "Лендинг",
    serviceThreeText: "Одностраничный сайт под услугу, продукт или личную визитку.",
    projectsKicker: "Мои работы",
    projectsTitle: "Проекты",
    projectOneTitle: "Название проекта",
    projectOneText: "Короткое описание результата, роли и ценности проекта.",
    projectTwoTitle: "Сервисная страница",
    projectTwoText: "Карточки услуг, понятная структура и спокойный визуальный ритм.",
    projectThreeTitle: "Портфолио",
    projectThreeText: "Личный сайт с описанием, услугами и подборкой работ.",
    projectLink: "Ссылка",
  },
  en: {
    brand: "Site name",
    introText:
      "Hi, you are on my personal business card website. Here you can learn about me, my services, projects, and I hope you will enjoy it.",
    aboutTitle: "About me",
    aboutText:
      "There will be a description about me here later. This block can be long: it takes almost the whole screen and continues below the first photo.",
    photoOne: "My photo",
    photoTwo: "My photo #2",
    servicesKicker: "What you can order",
    servicesTitle: "Services",
    serviceOneTitle: "Frontend development",
    serviceOneText: "Responsive pages, clean markup and a careful interface structure.",
    serviceTwoTitle: "UI polish",
    serviceTwoText: "Visual style updates, grids, cards and mobile states.",
    serviceThreeTitle: "Landing page",
    serviceThreeText: "A one-page site for a service, product or personal card.",
    projectsKicker: "My work",
    projectsTitle: "Projects",
    projectOneTitle: "Project name",
    projectOneText: "A short description of the result, role and project value.",
    projectTwoTitle: "Service page",
    projectTwoText: "Service cards, clear structure and calm visual rhythm.",
    projectThreeTitle: "Portfolio",
    projectThreeText: "A personal website with description, services and selected work.",
    projectLink: "Link",
  },
};

const langButtons = document.querySelectorAll(".lang-button");
const translatableElements = document.querySelectorAll("[data-i18n]");

function setLanguage(language) {
  document.documentElement.lang = language;

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[language][key];
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage("ru");
