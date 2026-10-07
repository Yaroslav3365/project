(function() {
  // --- i18n ---
  const i18n = {
    en: {
      nav_dashboard: "Dashboard", nav_servicing: "Servicing", nav_reminders: "Reminders",
      nav_account: "Account", nav_support: "Support", nav_settings: "Settings",
      search_placeholder: "Search providers, cars...", btn_book_service: "Book service",
      your_vehicle: "Your vehicle selection", general_info: "General information",
      last_service: "Last service date", total_services: "Total Services",
      upcoming_maintenance: "Upcoming maintenance", maintenance_desc: "Replacing the old engine oil and filter helps to keep the engine running smoothly and extend its lifespan.",
      estimated_cost: "Estimated cost", provider: "Provider", due_date: "Due date",
      service_history: "Service history", add_service: "Add a Service",
      date: "Date", service_type: "Service Type", cost: "Cost", cost_label: "Cost ($)", action: "Action",
      health_indicators: "Health indicators", spark_plug: "Spark plug", spark_plug_desc: "Sparkplug wear: 75% life",
      brake_condition: "Brake condition", brake_desc: "Front Break pads: 70% life",
      expenses_chart: "Expenses & Chart", total_spent: "Total spent", average_expense: "Average expense",
      service_expenses: "Service Expenses", opt_oil: "Oil change", opt_tire: "Tire Rotation",
      opt_brake: "Brake Inspection", opt_diag: "Diagnostics", opt_other: "Other",
      cancel: "Cancel", save: "Save", language: "Language",
      toast_selected: "Selected:", toast_deleted: "Record deleted.", toast_added: "Service added.",
      delete_title: "Delete", confirm_delete: "Are you sure you want to delete this record?",
      custom_service: "What exactly was repaired / replaced", theme: "Theme", theme_dark: "Dark", theme_light: "Light",
      auth_title: "Sign in to your garage", auth_desc: "Enter your details to open your car dashboard.",
      auth_name: "Name", auth_email: "Email", auth_submit: "Sign in", test_account: "Use test account",
      auth_password: "Password", register_account: "Register", auth_invalid: "Account not found or password is incorrect.",
      auth_registered: "Account registered. You are signed in.", auth_exists: "This email is already registered.",
      signed_in_as: "Signed in as", logout: "Log out"
    },
    uk: {
      nav_dashboard: "Дашборд", nav_servicing: "Обслуговування", nav_reminders: "Нагадування",
      nav_account: "Акаунт", nav_support: "Підтримка", nav_settings: "Налаштування",
      search_placeholder: "Пошук сервісів, авто...", btn_book_service: "Забронювати",
      your_vehicle: "Ваш автомобіль", general_info: "Загальна інформація",
      last_service: "Останній сервіс", total_services: "Всього сервісів",
      upcoming_maintenance: "Майбутнє обслуговування", maintenance_desc: "Своєчасна заміна масла та фільтра допомагає підтримувати двигун у гарному стані.",
      estimated_cost: "Орієнтовна вартість", provider: "Сервіс/СТО", due_date: "Дата",
      service_history: "Історія обслуговування", add_service: "Додати запис",
      date: "Дата", service_type: "Тип сервісу", cost: "Вартість", cost_label: "Вартість (₴)", action: "Дія",
      health_indicators: "Стан автомобіля", spark_plug: "Свічки", spark_plug_desc: "Ресурс свічок: 75%",
      brake_condition: "Гальма", brake_desc: "Передні колодки: 70%",
      expenses_chart: "Витрати та Графік", total_spent: "Витрачено всього", average_expense: "Середня витрата",
      service_expenses: "Витрати на сервіс", opt_oil: "Заміна масла", opt_tire: "Заміна шин",
      opt_brake: "Перевірка гальм", opt_diag: "Діагностика", opt_other: "Інше",
      cancel: "Скасувати", save: "Зберегти", language: "Мова",
      toast_selected: "Обрано:", toast_deleted: "Запис видалено.", toast_added: "Сервіс додано.",
      delete_title: "Видалити", confirm_delete: "Ви впевнені, що хочете видалити цей запис?",
      custom_service: "Що саме ремонтували / замінили", theme: "Тема", theme_dark: "Темна", theme_light: "Світла",
      auth_title: "Увійдіть у свій гараж", auth_desc: "Введіть дані, щоб відкрити dashboard автомобіля.",
      auth_name: "Ім'я", auth_email: "Email", auth_submit: "Увійти", test_account: "Увійти як тестовий користувач",
      auth_password: "Пароль", register_account: "Зареєструватися", auth_invalid: "Акаунт не знайдено або пароль неправильний.",
      auth_registered: "Акаунт зареєстровано. Ви увійшли.", auth_exists: "Цей email вже зареєстровано.",
      signed_in_as: "Ви увійшли як", logout: "Вийти"
    },
    de: {
      nav_dashboard: "Dashboard", nav_servicing: "Wartung", nav_reminders: "Erinnerungen",
      nav_account: "Konto", nav_support: "Support", nav_settings: "Einstellungen",
      search_placeholder: "Anbieter, Autos suchen...", btn_book_service: "Termin buchen",
      your_vehicle: "Ihre Fahrzeugauswahl", general_info: "Allgemeine Informationen",
      last_service: "Letzter Service", total_services: "Alle Services",
      upcoming_maintenance: "Anstehende Wartung", maintenance_desc: "Der regelmäßige Öl- und Filterwechsel hält den Motor am Laufen und verlängert die Lebensdauer.",
      estimated_cost: "Geschätzte Kosten", provider: "Anbieter", due_date: "Fälligkeitsdatum",
      service_history: "Serviceverlauf", add_service: "Service hinzufügen",
      date: "Datum", service_type: "Service-Typ", cost: "Kosten", cost_label: "Kosten (€)", action: "Aktion",
      health_indicators: "Gesundheitsindikatoren", spark_plug: "Zündkerze", spark_plug_desc: "Zündkerzenverschleiß: 75%",
      brake_condition: "Bremszustand", brake_desc: "Vordere Bremsbeläge: 70%",
      expenses_chart: "Ausgaben & Diagramm", total_spent: "Gesamtausgaben", average_expense: "Durchschnitt",
      service_expenses: "Serviceausgaben", opt_oil: "Ölwechsel", opt_tire: "Reifenwechsel",
      opt_brake: "Bremsprüfung", opt_diag: "Diagnose", opt_other: "Andere",
      cancel: "Abbrechen", save: "Speichern", language: "Sprache",
      toast_selected: "Ausgewählt:", toast_deleted: "Datensatz gelöscht.", toast_added: "Service hinzugefügt.",
      delete_title: "Löschen", confirm_delete: "Möchten Sie diesen Datensatz wirklich löschen?",
      custom_service: "Was genau wurde repariert / ersetzt", theme: "Theme", theme_dark: "Dunkel", theme_light: "Hell",
      auth_title: "In Ihre Garage einloggen", auth_desc: "Geben Sie Ihre Daten ein, um das Dashboard zu öffnen.",
      auth_name: "Name", auth_email: "E-Mail", auth_submit: "Einloggen", test_account: "Testkonto verwenden",
      auth_password: "Passwort", register_account: "Registrieren", auth_invalid: "Konto nicht gefunden oder Passwort ist falsch.",
      auth_registered: "Konto registriert. Sie sind angemeldet.", auth_exists: "Diese E-Mail ist bereits registriert.",
      signed_in_as: "Angemeldet als", logout: "Abmelden"
    }
  };

  let currentLang = localStorage.getItem('carmemory-lang') || 'en';
  let currentTheme = localStorage.getItem('carmemory-theme') || 'dark';

  function t(key) {
    return i18n[currentLang][key] || key;
  }

  function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[currentLang][key]) {
        el.textContent = i18n[currentLang][key];
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (i18n[currentLang][key]) {
        el.setAttribute('placeholder', i18n[currentLang][key]);
      }
    });
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) languageSelect.value = currentLang;

    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) themeSelect.value = currentTheme;

    // Update hardcoded upcoming cost with correct currency
    const upcomingCostEl = document.getElementById("upcomingCostText");
    if (upcomingCostEl) upcomingCostEl.textContent = money(70);
  }

  // --- data.js ---
  const STORAGE_KEY = "carmemory-data-v2";
  const ACCOUNTS_KEY = "carmemory-accounts";
  const TEST_ACCOUNT = { name: "Test User", email: "test@carmemory.local", password: "test1234" };

  const imagePool = [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Volvo%20XC90%20front-1.JPG",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Renault-Clio.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Chery%20Arrizo%205.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Seat%20Ibiza%201.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Skoda%20Enyaq.jpg"
  ];

  const defaultData = {
    services: [
      {id:1, date:"10.08.2024", type:"opt_oil", provider:"Autocare service", cost:70},
      {id:2, date:"15.07.2024", type:"opt_tire", provider:"Quick Tires", cost:45},
      {id:3, date:"20.06.2024", type:"opt_brake", provider:"BrakeMasters", cost:60},
      {id:4, date:"12.05.2024", type:"opt_diag", provider:"Autocare service", cost:90}
    ],
    cars: [
      {id:1, name:"Volvo XC90", year:2022, mileage:84320, vin:"YV1XXXXXX123456", image:imagePool[0]},
      {id:2, name:"Renault Clio", year:2021, mileage:52100, vin:"VF1XXXXXX987654", image:imagePool[1]},
      {id:3, name:"Chery Arrizo 5", year:2020, mileage:60400, vin:"LVVXXXXXX445566", image:imagePool[2]},
      {id:4, name:"Seat Ibiza", year:2023, mileage:30200, vin:"VSSXXXXXX778899", image:imagePool[3]},
      {id:5, name:"Skoda Enyaq iV", year:2022, mileage:41800, vin:"TMBXXXXXX112233", image:imagePool[4]}
    ],
    selectedCarId: 1
  };

  function loadData() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? {...cloneData(defaultData), ...JSON.parse(saved)} : cloneData(defaultData);
    } catch {
      return cloneData(defaultData);
    }
  }

  function cloneData(data) {
    return JSON.parse(JSON.stringify(data));
  }

  function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function applyTheme(theme) {
    currentTheme = theme === 'light' ? 'light' : 'dark';
    document.body.classList.toggle('light-theme', currentTheme === 'light');
    localStorage.setItem('carmemory-theme', currentTheme);
  }

  function initAuth() {
    const user = localStorage.getItem('carmemory-user');
    if (user) {
      try {
        const savedUser = JSON.parse(user);
        if (isKnownAccount(savedUser.email)) {
          document.body.classList.remove('auth-locked');
          updateAccountUI(savedUser);
        } else {
          localStorage.removeItem('carmemory-user');
        }
      } catch {
        localStorage.removeItem('carmemory-user');
        document.body.classList.add('auth-locked');
      }
    }

    const authForm = document.getElementById('authForm');
    if (!authForm) return;

    authForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('authName').value.trim();
      const email = document.getElementById('authEmail').value.trim();
      const password = document.getElementById('authPassword').value;
      const account = findAccount(email);

      if (!account || account.password !== password) {
        showAuthError(t('auth_invalid'));
        return;
      }

      signIn({ name: account.name || name, email: account.email });
    });

    const registerButton = document.getElementById('registerButton');
    registerButton?.addEventListener('click', () => {
      const name = document.getElementById('authName').value.trim();
      const email = document.getElementById('authEmail').value.trim();
      const password = document.getElementById('authPassword').value;

      if (!authForm.reportValidity()) return;
      if (findAccount(email)) {
        showAuthError(t('auth_exists'));
        return;
      }

      const accounts = getAccounts();
      const account = { name: name || normalizeEmail(email).split('@')[0], email: normalizeEmail(email), password };
      accounts.push(account);
      saveAccounts(accounts);
      showAuthError(t('auth_registered'));
      signIn({ name: account.name, email: account.email });
    });

    const testAccountButton = document.getElementById('testAccountButton');
    testAccountButton?.addEventListener('click', () => {
      signIn({ name: TEST_ACCOUNT.name, email: TEST_ACCOUNT.email });
    });
  }

  function getAccounts() {
    try {
      const accounts = JSON.parse(localStorage.getItem(ACCOUNTS_KEY)) || [];
      return Array.isArray(accounts) ? accounts : [];
    } catch {
      return [];
    }
  }

  function saveAccounts(accounts) {
    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
  }

  function normalizeEmail(email) {
    return email.trim().toLowerCase();
  }

  function findAccount(email) {
    const normalizedEmail = normalizeEmail(email);
    if (normalizedEmail === TEST_ACCOUNT.email) return TEST_ACCOUNT;
    return getAccounts().find(account => account.email === normalizedEmail);
  }

  function isKnownAccount(email) {
    return Boolean(findAccount(email));
  }

  function showAuthError(message) {
    const authError = document.getElementById('authError');
    if (authError) authError.textContent = message;
  }

  function signIn(user) {
    localStorage.setItem('carmemory-user', JSON.stringify(user));
    updateAccountUI(user);
    document.body.classList.remove('auth-locked');
  }

  function updateAccountUI(user) {
    const nameEl = document.getElementById('accountUserName');
    const emailEl = document.getElementById('accountUserEmail');
    if (nameEl) nameEl.textContent = user.name;
    if (emailEl) emailEl.textContent = user.email;
  }

  // --- chart.js ---
  let chartInstance = null;

  function renderExpenseChart(data) {
    const ctx = document.getElementById('expenseChartCanvas');
    if (!ctx) return;

    const recentServices = data.services.slice(0, 6).reverse();
    const labels = recentServices.map(s => t(s.type).slice(0, 15));
    const costs = recentServices.map(s => s.cost);

    if (chartInstance) {
      chartInstance.destroy();
    }

    if (window.Chart) {
      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: t('cost'),
            data: costs,
            backgroundColor: '#3b82f6',
            borderRadius: 4,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, grid: { color: '#1e293b' }, ticks: { color: '#94a3b8' } },
            x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
          }
        }
      });
    }
  }

  // --- router.js ---
  function initRouter() {
    const handleHashChange = () => {
      const hash = window.location.hash || '#dashboard';
      
      document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
      });
      
      const targetSection = document.querySelector(hash);
      if (targetSection) {
        targetSection.classList.add('active');
      } else {
        document.querySelector('#dashboard')?.classList.add('active');
      }

      document.querySelectorAll('.nav-item[href]').forEach(nav => {
        nav.classList.remove('active');
        if (nav.getAttribute('href') === hash) {
          nav.classList.add('active');
        }
      });
    };

    window.addEventListener('hashchange', handleHashChange);
    
    if (!window.location.hash) {
      window.location.hash = '#dashboard';
    } else {
      handleHashChange();
    }
  }

  // --- ui.js ---
  const exchangeRates = {
    'en': 1,      // USD
    'uk': 41.5,   // UAH
    'de': 0.9     // EUR
  };

  function money(value) {
    const rate = exchangeRates[currentLang] || 1;
    const converted = value * rate;

    if (currentLang === 'uk') {
      return `₴${Number(converted).toLocaleString("uk-UA", { maximumFractionDigits: 0 })}`;
    } else if (currentLang === 'de') {
      return `€${Number(converted).toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else {
      return `$${Number(converted).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
  }

  function dateUA(value) {
    if (!value) return "—";
    const [y, m, d] = value.split("-");
    return `${d}.${m}.${y}`;
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 3000);
  }

  function openDialog(id) {
    const dialog = document.getElementById(id);
    if (dialog) dialog.showModal();
  }

  function closeAllDialogs() {
    document.querySelectorAll("dialog").forEach(d => {
      if (d.open) d.close();
    });
  }

  function createElement(tag, classes = [], attributes = {}, textContent = null) {
    const el = document.createElement(tag);
    if (classes.length) el.classList.add(...classes);
    for (const [key, value] of Object.entries(attributes)) {
      el.setAttribute(key, value);
    }
    if (textContent) el.textContent = textContent;
    return el;
  }

  function renderCars(data, selectCarCallback) {
    const list = document.getElementById("carList");
    list.innerHTML = ""; 

    data.cars.forEach(car => {
      const btn = createElement('button', ['car-mini'], { 'data-car-id': car.id });
      if (car.id === data.selectedCarId) btn.classList.add('selected');
      
      const img = createElement('img', [], { src: car.image, alt: car.name });
      const span = createElement('span', [], {}, car.name);
      
      btn.appendChild(img);
      btn.appendChild(span);
      
      btn.addEventListener("click", () => selectCarCallback(car.id));
      list.appendChild(btn);
    });
  }

  function updateSelectedCarUI(car) {
    const elName = document.getElementById("selectedCarName");
    if(elName) elName.textContent = car.name;
    const elVis = document.getElementById("carVisual");
    if(elVis) elVis.src = car.image;
  }

  function renderServices(data, deleteServiceCallback) {
    const tbody1 = document.getElementById("serviceTable");
    const tbody2 = document.getElementById("serviceTableFull");
    
    if (tbody1) tbody1.innerHTML = "";
    if (tbody2) tbody2.innerHTML = "";
    
    data.services.forEach(s => {
      // Map legacy values if needed
      let displayType = s.type === 'opt_other' && s.customService ? s.customService : t(s.type) || s.type;
      if (displayType.startsWith('opt_')) displayType = t(s.type);

      const tr = createElement('tr', [], { 'data-search': `${displayType} ${s.provider}`.toLowerCase() });
      
      tr.appendChild(createElement('td', [], {}, s.date));
      
      const tdType = createElement('td');
      tdType.appendChild(createElement('strong', [], {}, displayType));
      tr.appendChild(tdType);
      
      tr.appendChild(createElement('td', [], {}, s.provider));
      tr.appendChild(createElement('td', [], {}, money(s.cost)));
      
      const tdAction = createElement('td');
      const deleteBtn = createElement('button', ['delete-btn'], { title: t('delete_title') }, '✕');
      deleteBtn.addEventListener('click', () => deleteServiceCallback(s.id));
      tdAction.appendChild(deleteBtn);
      
      tr.appendChild(tdAction);
      
      if (tbody1) tbody1.appendChild(tr.cloneNode(true));
      if (tbody2) tbody2.appendChild(tr);
    });

    const countEl = document.getElementById("serviceCount");
    if(countEl) countEl.textContent = 12 + data.services.length;

    renderExpenses(data);
    
    if (tbody1) {
      const deleteBtns = tbody1.querySelectorAll('.delete-btn');
      deleteBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => deleteServiceCallback(data.services[index].id));
      });
    }

    applySearchFilter();
  }

  function applySearchFilter() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    const query = searchInput.value.trim().toLowerCase();
    document.querySelectorAll('#serviceTable tr, #serviceTableFull tr').forEach(row => {
      row.hidden = Boolean(query) && !row.dataset.search.includes(query);
    });
  }

  function renderExpenses(data) {
    const total = data.services.reduce((sum, s) => sum + Number(s.cost), 0);
    const avg = data.services.length ? Math.round(total / data.services.length) : 0;
    
    const elTotal = document.getElementById("totalExpenses");
    if(elTotal) elTotal.textContent = money(total);
    
    const elAvg = document.getElementById("averageExpense");
    if(elAvg) elAvg.textContent = money(avg);
    
    renderExpenseChart(data);
  }

  // --- main.js ---
  let appData = loadData();

  function handleSelectCar(id) {
    const car = appData.cars.find(c => c.id === id);
    if (!car) return;
    appData.selectedCarId = id;
    saveData(appData);
    renderCars(appData, handleSelectCar);
    updateSelectedCarUI(car);
  }

  function handleDeleteService(id) {
    if (!confirm(t('confirm_delete'))) return;
    appData.services = appData.services.filter(s => s.id !== id);
    saveData(appData);
    renderServices(appData, handleDeleteService);
    showToast(t('toast_deleted'));
  }

  function setupEventListeners() {
    document.querySelectorAll('[data-open]').forEach(btn => {
      btn.addEventListener("click", () => openDialog(btn.dataset.open));
    });

    document.querySelectorAll('[data-close]').forEach(el => {
      el.addEventListener("click", closeAllDialogs);
    });

    const serviceForm = document.getElementById("serviceForm");
    const serviceType = document.getElementById("serviceType");
    const customServiceWrap = document.getElementById("customServiceWrap");
    const customService = document.getElementById("customService");

    function updateCustomServiceField() {
      const isOther = serviceType?.selectedOptions[0]?.getAttribute('data-i18n') === 'opt_other';
      customServiceWrap?.classList.toggle('is-hidden', !isOther);
      if (customService) {
        customService.required = isOther;
        if (!isOther) customService.value = '';
      }
    }

    serviceType?.addEventListener('change', updateCustomServiceField);
    updateCustomServiceField();

    if (serviceForm) {
      serviceForm.addEventListener("submit", e => {
        e.preventDefault();
        
        const typeSelect = document.getElementById("serviceType");
        const selectedOption = typeSelect.options[typeSelect.selectedIndex];
        const typeKey = selectedOption.getAttribute('data-i18n') || typeSelect.value;
        
        const provider = document.getElementById("provider").value.trim();
        const costInput = Number(document.getElementById("cost").value);
        const rate = exchangeRates[currentLang] || 1;
        const costInUSD = costInput / rate;
        const date = document.getElementById("serviceDate").value;

        appData.services.unshift({
          id: Date.now(),
          date: dateUA(date),
          type: typeKey,
          customService: typeKey === 'opt_other' ? customService.value.trim() : '',
          provider,
          cost: costInUSD
        });

        saveData(appData);
        renderServices(appData, handleDeleteService);
        e.target.reset();
        updateCustomServiceField();
        closeAllDialogs();
        showToast(t('toast_added'));
      });
    }

    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
      languageSelect.addEventListener('change', (e) => {
        currentLang = e.target.value;
        localStorage.setItem('carmemory-lang', currentLang);
        translatePage();
        renderServices(appData, handleDeleteService); // Re-render to update dynamic translations
      });
    }

    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) {
      themeSelect.addEventListener('change', e => applyTheme(e.target.value));
    }

    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
      logoutButton.addEventListener('click', () => {
        localStorage.removeItem('carmemory-user');
        document.body.classList.add('auth-locked');
        closeAllDialogs();
      });
    }

    document.querySelectorAll('[data-section-link]').forEach(btn => {
      btn.addEventListener('click', () => {
        window.location.hash = btn.dataset.sectionLink;
      });
    });

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', applySearchFilter);
    }
  }

  function init() {
    applyTheme(currentTheme);
    initAuth();
    initRouter();
    translatePage();
    
    if (appData.cars.length > 0) {
      renderCars(appData, handleSelectCar);
      updateSelectedCarUI(appData.cars.find(c => c.id === appData.selectedCarId) || appData.cars[0]);
    }
    
    renderServices(appData, handleDeleteService);
    setupEventListeners();

    const now = new Date();
    const dateEl = document.getElementById("todayDate");
    if(dateEl) {
      dateEl.textContent = now.toLocaleDateString(currentLang === 'uk' ? "uk-UA" : (currentLang === 'de' ? "de-DE" : "en-US"), { day: "numeric", month: "short", year: "numeric" });
    }
  }

  init();

})();
