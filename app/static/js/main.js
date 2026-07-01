const translations = {
  ru: {
    brand: "Название сайта",
    introText:
      "Привет, ты попал на мой личный сайт-визитку. Тут ты сможешь ознакомиться со мной, моими услугами, проектами и надеюсь тебе понравиться.",
    aboutTitle: "Обо мне",
    aboutIntro: "Привет! Меня зовут Рома 👋",
    aboutOrigin:
      "Я родился на севере России, в ХМАО — Ханты-Мансийском автономном округе. Сейчас мне 23 года, и я живу в более тёплой части России — в городе Брянск.",
    aboutDeveloperPath:
      "Уже 3,5 года я развиваюсь как Python Backend Developer. Сейчас я двигаюсь дальше не только как человек, который пишет код, а как личностный разработчик: создаю свои проекты, развиваю портфолио, делюсь опытом и выстраиваю вокруг себя профессиональный путь.",
    aboutStart:
      "Мой путь в IT начался не сразу с разработки. Около 5 лет назад я работал в небольшой брянской компании и занимался заполнением Google Таблиц. В какой-то момент мне захотелось упростить рутинную работу и избавиться от постоянного ручного труда. Именно тогда я впервые заинтересовался автоматизацией и постепенно пришёл к программированию.",
    aboutMeaning:
      "Со временем я понял, что разработка — это не просто “писать строчки кода” или нажимать кнопки. Для меня это возможность создавать полезные инструменты, упрощать жизнь людям и строить новые цифровые решения вокруг себя 🚀",
    aboutStackIntro:
      "За это время я успел поработать с разными задачами и технологиями. Изначально мой стек был довольно простым: Python, ООП и Pandas. Сейчас мой основной стек выглядит так:",
    aboutStack:
      "Python 3.12+, FastAPI, SQL, SQLAlchemy, Alembic, Redis, RabbitMQ, Celery, Git, CI/CD, а также библиотеки и фреймворки под конкретные задачи.",
    aboutFrontend: "Также я немного развиваюсь во frontend-разработке — этот сайт является одним из примеров такого опыта.",
    aboutSearch:
      "Сейчас я активно ищу работу на позицию Middle Python Backend Developer и открыт к интересным предложениям. Мои контакты для связи указаны выше 📩",
    aboutOutro: "Ниже вы можете ознакомиться с моими проектами, портфолио и списком услуг, которые я предоставляю.",
    photoOne: "Мое фото",
    photoTwo: "Мое фото №2",
    servicesKicker: "Что можно заказать",
    servicesTitle: "Услуги",
    serviceOneTitle: "Разработка Telegram-ботов",
    serviceOneText:
      "Создаю Telegram-ботов под разные задачи: от простых чат-ботов с меню до сервисов с базой данных, заявками, рассылками и бизнес-логикой.",
    serviceOneOptionOneTitle: "Простой чат-бот",
    serviceOneOptionOnePrice: "от 1 000 ₽ до 3 000 ₽",
    serviceOneOptionOneText:
      "Меню, ответы на частые вопросы, простая навигация, приветственные сообщения, кнопки и базовая логика общения.",
    serviceOneOptionTwoTitle: "Бот с ИИ-ассистентом",
    serviceOneOptionTwoPrice: "от 10 000 ₽ до 15 000 ₽",
    serviceOneOptionTwoText:
      "Бот с подключением ИИ для ответов на вопросы, консультаций, обработки текстовых запросов и роли виртуального помощника.",
    serviceOneOptionThreeTitle: "Сервис-бот",
    serviceOneOptionThreePrice: "от 15 000 ₽ до 25 000 ₽",
    serviceOneOptionThreeText:
      "База данных, анкеты, заявки, фильтры, пользовательские сценарии, уведомления, рассылки и интеграции.",
    serviceOneOptionFourTitle: "Telegram-бот под ключ",
    serviceOneOptionFourPrice: "договорная, минимум от 10 000 ₽",
    serviceOneOptionFourText:
      "Полная разработка под идею: обсуждение задачи, проектирование логики, реализация, настройка и подготовка к использованию.",
    serviceTwoTitle: "Разработка API сервисов и приложений",
    serviceTwoText:
      "Разрабатываю backend-сервисы, API и web-приложения на Python под задачи бизнеса, стартапов и внутренних процессов.",
    serviceTwoOptionOneTitle: "Простое API-приложение",
    serviceTwoOptionOnePrice: "от 5 000 ₽ до 15 000 ₽",
    serviceTwoOptionOneText:
      "Базовые endpoints, обработка запросов, простая логика, подключение к базе данных или обмен данными между сервисами.",
    serviceTwoOptionTwoTitle: "API с базой данных и бизнес-логикой",
    serviceTwoOptionTwoPrice: "от 15 000 ₽ до 30 000 ₽",
    serviceTwoOptionTwoText:
      "Хранение данных, структурированная архитектура, CRUD, валидация, миграции и логика для дальнейшего развития проекта.",
    serviceTwoOptionThreeTitle: "Интеграция со сторонними сервисами",
    serviceTwoOptionThreePrice: "от 10 000 ₽ до 25 000 ₽",
    serviceTwoOptionThreeText:
      "Подключение внешних API, платежей, Telegram, CRM, Google Sheets, OpenAI/ИИ-сервисов, парсеров и уведомлений.",
    serviceTwoOptionFourTitle: "Backend-приложение под ключ",
    serviceTwoOptionFourPrice: "договорная, минимум от 25 000 ₽",
    serviceTwoOptionFourText:
      "Архитектура, API, база данных, бизнес-логика, Docker, миграции, интеграции и подготовка приложения к запуску.",
    serviceTwoNote: "Цена зависит от сложности проекта, количества функций, интеграций, сроков и требований к реализации.",
    serviceThreeTitle: "Разработка лендингов и web-платформ",
    serviceThreeText:
      "Создаю современные лендинги и web-платформы для презентации услуг, сбора заявок, запуска продукта, личного бренда или проверки идеи через MVP.",
    serviceThreeOptionOneTitle: "Простой лендинг",
    serviceThreeOptionOnePrice: "от 3 000 ₽ до 10 000 ₽",
    serviceThreeOptionOneText:
      "Одностраничный сайт для услуги, продукта или личного бренда: главный экран, описание, преимущества, контакты и кнопки связи.",
    serviceThreeOptionTwoTitle: "Лендинг с формами и интеграциями",
    serviceThreeOptionTwoPrice: "от 10 000 ₽ до 30 000 ₽",
    serviceThreeOptionTwoText:
      "Форма заявки, отправка в Telegram, интеграции с Google Sheets, CRM или email, мобильная адаптация, базовая SEO-структура и подготовка к запуску.",
    serviceThreeOptionThreeTitle: "Web-платформа / MVP",
    serviceThreeOptionThreePrice: "от 30 000 ₽",
    serviceThreeOptionThreeText:
      "Каталог, личный кабинет, сервис заявок, мини CRM или MVP: backend на Python/FastAPI, база данных, авторизация, админка, API, Docker и интеграции.",
    serviceThreeOptionFourTitle: "Сайт или платформа под ключ",
    serviceThreeOptionFourPrice: "договорная",
    serviceThreeOptionFourText:
      "Полная разработка проекта: от обсуждения идеи и структуры до реализации, настройки, запуска и подготовки к развитию.",
    projectsKicker: "Мои работы",
    projectsTitle: "Проекты",
    projectOneTitle: "Looking For Restaurants (LFRest)",
    projectOneStatus: "В разработке",
    projectOneText:
      "Сервис для поиска ресторанов по предпочтениям пользователя с ИИ-ассистентом. Архитектура разделена на слои API, бота, сервисов и базы данных, поэтому это заготовка под продукт, который можно расширять до каталога, рекомендаций, бронирований или рекламной платформы для заведений.",
    projectTwoTitle: "News Bot",
    projectTwoText:
      "Telegram-бот для автоматической подборки новостей по интересам пользователя. Он собирает материалы из RSS-источников, сохраняет их в базу данных и может развиваться в персональные дайджесты, AI-саммаризацию, автопостинг и подписочную модель для медиа или тематических сообществ.",
    projectThreeTitle: "Linkcuts",
    projectThreeText:
      "Простой сервис для сокращения длинных ссылок: он делает URL удобными для соцсетей, рекламы, презентаций и рассылок. Проект подходит как основа для аналога Bitly со статистикой переходов, QR-кодами, кастомными ссылками, аналитикой кампаний и тарифами.",
    projectFourTitle: "My Neighbor",
    projectFourText:
      "Telegram-бот для поиска сожителей и людей для совместной аренды жилья. Он закрывает понятную бытовую задачу и может вырасти в платформу с анкетами, фильтрами по городу, бюджету, привычкам, району и предпочтениям для студентов и молодых специалистов.",
    projectLink: "Открыть проект",
  },
  en: {
    brand: "Site name",
    introText:
      "Hi, you are on my personal business card website. Here you can learn about me, my services, projects, and I hope you will enjoy it.",
    aboutTitle: "About me",
    aboutIntro: "Hi! My name is Roma 👋",
    aboutOrigin:
      "I was born in northern Russia, in Khanty-Mansi Autonomous Okrug. I am 23 now, and I live in a warmer part of Russia — Bryansk.",
    aboutDeveloperPath:
      "For 3.5 years I have been growing as a Python Backend Developer. Now I am moving further not only as someone who writes code, but as an individual developer: building my own projects, growing a portfolio, sharing experience and shaping a professional path around my work.",
    aboutStart:
      "My path into IT did not start directly with development. About 5 years ago I worked at a small Bryansk company and filled Google Sheets. At some point I wanted to simplify routine work and get rid of repetitive manual tasks. That was when I first became interested in automation and gradually came to programming.",
    aboutMeaning:
      "Over time I realized that development is not just writing lines of code or pressing buttons. For me, it is a way to create useful tools, make people's lives easier and build new digital solutions around real needs 🚀",
    aboutStackIntro:
      "During this time I have worked with different tasks and technologies. My first stack was simple: Python, OOP and Pandas. Now my main stack looks like this:",
    aboutStack:
      "Python 3.12+, FastAPI, SQL, SQLAlchemy, Alembic, Redis, RabbitMQ, Celery, Git, CI/CD, plus libraries and frameworks for specific tasks.",
    aboutFrontend: "I am also slowly developing in frontend — this website is one example of that experience.",
    aboutSearch:
      "Right now I am actively looking for a Middle Python Backend Developer position and I am open to interesting offers. My contact links are above 📩",
    aboutOutro: "Below you can explore my projects, portfolio and the list of services I provide.",
    photoOne: "My photo",
    photoTwo: "My photo #2",
    servicesKicker: "What you can order",
    servicesTitle: "Services",
    serviceOneTitle: "Telegram bot development",
    serviceOneText:
      "I build Telegram bots for different tasks: from simple menu bots to services with databases, requests, broadcasts and business logic.",
    serviceOneOptionOneTitle: "Simple chatbot",
    serviceOneOptionOnePrice: "from 1,000 ₽ to 3,000 ₽",
    serviceOneOptionOneText:
      "Menus, FAQ answers, simple navigation, welcome messages, buttons and basic interaction logic.",
    serviceOneOptionTwoTitle: "Bot with an AI assistant",
    serviceOneOptionTwoPrice: "from 10,000 ₽ to 15,000 ₽",
    serviceOneOptionTwoText:
      "AI-powered answers, consultations, text request processing and a virtual assistant role for a business or personal project.",
    serviceOneOptionThreeTitle: "Service bot",
    serviceOneOptionThreePrice: "from 15,000 ₽ to 25,000 ₽",
    serviceOneOptionThreeText:
      "Database, forms, requests, filters, user scenarios, notifications, broadcasts, saved data and external integrations.",
    serviceOneOptionFourTitle: "Turnkey Telegram bot",
    serviceOneOptionFourPrice: "custom, minimum from 10,000 ₽",
    serviceOneOptionFourText:
      "Full development around your idea: task discussion, logic design, implementation, setup and preparation for use.",
    serviceTwoTitle: "API services and applications",
    serviceTwoText:
      "I develop Python backend services, APIs and web applications for business tasks, startups and internal workflows.",
    serviceTwoOptionOneTitle: "Simple API application",
    serviceTwoOptionOnePrice: "from 5,000 ₽ to 15,000 ₽",
    serviceTwoOptionOneText:
      "Basic endpoints, request handling, simple logic, database connection or data exchange between services.",
    serviceTwoOptionTwoTitle: "API with database and business logic",
    serviceTwoOptionTwoPrice: "from 15,000 ₽ to 30,000 ₽",
    serviceTwoOptionTwoText:
      "Data storage, structured architecture, CRUD operations, validation, migrations and logic ready for growth.",
    serviceTwoOptionThreeTitle: "Third-party service integrations",
    serviceTwoOptionThreePrice: "from 10,000 ₽ to 25,000 ₽",
    serviceTwoOptionThreeText:
      "External APIs, payments, Telegram, CRM, Google Sheets, OpenAI/AI services, parsers and notifications.",
    serviceTwoOptionFourTitle: "Turnkey backend application",
    serviceTwoOptionFourPrice: "custom, minimum from 25,000 ₽",
    serviceTwoOptionFourText:
      "Architecture, API, database, business logic, Docker, migrations, integrations and preparation for launch.",
    serviceTwoNote: "The final price depends on complexity, features, integrations, timing and implementation requirements.",
    serviceThreeTitle: "Landing pages and web platforms",
    serviceThreeText:
      "I create modern landing pages and web platforms for presenting services, collecting leads, launching products, personal brands or MVP testing.",
    serviceThreeOptionOneTitle: "Simple landing page",
    serviceThreeOptionOnePrice: "from 3,000 ₽ to 10,000 ₽",
    serviceThreeOptionOneText:
      "A one-page site for a service, product or personal brand: hero section, description, benefits, contacts and contact buttons.",
    serviceThreeOptionTwoTitle: "Landing page with forms and integrations",
    serviceThreeOptionTwoPrice: "from 10,000 ₽ to 30,000 ₽",
    serviceThreeOptionTwoText:
      "Lead form, Telegram notifications, Google Sheets, CRM or email integrations, mobile adaptation, basic SEO structure and launch prep.",
    serviceThreeOptionThreeTitle: "Web platform / MVP",
    serviceThreeOptionThreePrice: "from 30,000 ₽",
    serviceThreeOptionThreeText:
      "Catalog, account area, request service, mini CRM or startup MVP: Python/FastAPI backend, database, auth, admin area, API, Docker and integrations.",
    serviceThreeOptionFourTitle: "Turnkey site or platform",
    serviceThreeOptionFourPrice: "custom",
    serviceThreeOptionFourText:
      "Full project development: from idea and structure discussion to implementation, setup, launch and preparation for future growth.",
    projectsKicker: "My work",
    projectsTitle: "Projects",
    projectOneTitle: "Looking For Restaurants (LFRest)",
    projectOneStatus: "In development",
    projectOneText:
      "A service for finding restaurants by user preferences with an AI assistant. The project is split into API, bot, service and database layers, so it can grow into a real catalog, recommendation system, booking flow or ad platform for venues.",
    projectTwoTitle: "News Bot",
    projectTwoText:
      "A Telegram bot that collects news by user interests from RSS sources and stores them in a database. It can evolve into personal digests, AI summaries, channel autoposting and paid thematic subscriptions for media or niche communities.",
    projectThreeTitle: "Linkcuts",
    projectThreeText:
      "A simple URL shortener that turns long links into clean ones for social media, ads, presentations and newsletters. It is a practical base for a Bitly-like product with click stats, QR codes, custom links, campaign analytics and paid plans.",
    projectFourTitle: "My Neighbor",
    projectFourText:
      "A Telegram bot for finding roommates and people for shared housing. It solves a clear everyday problem and can grow into a renter platform with profiles, city, budget, habit, district and preference filters.",
    projectLink: "Open project",
  },
};

const header = document.querySelector(".site-header");
const introInner = document.querySelector(".intro-inner");
const introTitle = document.querySelector(".intro-title");
const introText = document.querySelector(".intro-text");
const emailTrigger = document.querySelector(".email-trigger");
const langButtons = document.querySelectorAll(".lang-button");
const translatableElements = document.querySelectorAll("[data-i18n]");
const revealElements = document.querySelectorAll(".reveal-from-left, .reveal-from-right");

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

  replayIntroAnimation();
}

function updateHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

function updateIntroScrollState() {
  const fadeDistance = Math.max(window.innerHeight * 0.48, 260);
  const progress = Math.min(window.scrollY / fadeDistance, 1);
  const opacity = Math.max(1 - progress * 1.25, 0);
  const offset = `${progress * -42}px`;

  introInner.style.setProperty("--intro-opacity", opacity.toFixed(3));
  introInner.style.setProperty("--intro-offset", offset);
}

function replayIntroAnimation() {
  [introTitle, introText].forEach((element) => {
    element.classList.remove("is-replaying");
    element.classList.add("replay-float");
  });

  requestAnimationFrame(() => {
    [introTitle, introText].forEach((element) => {
      element.classList.add("is-replaying");
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.22 }
);

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

emailTrigger.addEventListener("click", async () => {
  emailTrigger.classList.toggle("is-open");

  try {
    await navigator.clipboard.writeText(emailTrigger.dataset.email);
  } catch {
    // Clipboard can be unavailable when the page is opened directly from a file.
  }
});

document.addEventListener("click", (event) => {
  if (!emailTrigger.contains(event.target)) {
    emailTrigger.classList.remove("is-open");
  }
});

revealElements.forEach((element) => revealObserver.observe(element));
window.addEventListener(
  "scroll",
  () => {
    updateHeaderState();
    updateIntroScrollState();
  },
  { passive: true }
);
window.addEventListener("resize", updateIntroScrollState);

setLanguage("ru");
updateHeaderState();
updateIntroScrollState();






