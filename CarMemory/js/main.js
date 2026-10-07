import { loadData, saveData, imagePool } from './data.js';
import { initRouter } from './router.js';
import { 
  renderCars, 
  updateSelectedCarUI, 
  renderServices, 
  renderExpenses,
  openDialog,
  closeAllDialogs,
  showToast,
  dateUA
} from './ui.js';

let appData = loadData();

function handleSelectCar(id) {
  const car = appData.cars.find(c => c.id === id);
  if (!car) return;
  appData.selectedCarId = id;
  saveData(appData);
  renderCars(appData, handleSelectCar);
  updateSelectedCarUI(car);
  showToast(`Selected: ${car.name}`);
}

function handleDeleteService(id) {
  if (!confirm("Are you sure you want to delete this record?")) return;
  appData.services = appData.services.filter(s => s.id !== id);
  saveData(appData);
  renderServices(appData, handleDeleteService);
  showToast("Record deleted.");
}

function setupEventListeners() {
  // Dialog openers
  document.querySelectorAll('[data-open]').forEach(btn => {
    btn.addEventListener("click", () => openDialog(btn.dataset.open));
  });

  // Dialog closers
  document.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener("click", closeAllDialogs);
  });

  // Service form
  const serviceForm = document.getElementById("serviceForm");
  if (serviceForm) {
    serviceForm.addEventListener("submit", e => {
      e.preventDefault();
      const type = document.getElementById("serviceType").value;
      const provider = document.getElementById("provider").value.trim();
      const cost = Number(document.getElementById("cost").value);
      const date = document.getElementById("serviceDate").value;

      appData.services.unshift({
        id: Date.now(),
        date: dateUA(date),
        type,
        provider,
        cost
      });

      saveData(appData);
      renderServices(appData, handleDeleteService);
      e.target.reset();
      closeAllDialogs();
      showToast("Service added.");
    });
  }
}

function init() {
  initRouter();
  
  if (appData.cars.length > 0) {
    renderCars(appData, handleSelectCar);
    updateSelectedCarUI(appData.cars.find(c => c.id === appData.selectedCarId) || appData.cars[0]);
  }
  
  renderServices(appData, handleDeleteService);
  setupEventListeners();

  const now = new Date();
  const dateEl = document.getElementById("todayDate");
  if(dateEl) {
    dateEl.textContent = now.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
  }
}

// Start app
init();
