import { renderExpenseChart } from './chart.js';
import { saveData } from './data.js';

export function money(value) {
  return `$${Number(value || 0).toLocaleString("en-US")}`;
}

export function dateUA(value) {
  if (!value) return "—";
  const [y, m, d] = value.split("-");
  return `${d}.${m}.${y}`;
}

export function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 3000);
}

export function openDialog(id) {
  const dialog = document.getElementById(id);
  if (dialog) dialog.showModal();
}

export function closeAllDialogs() {
  document.querySelectorAll("dialog").forEach(d => {
    if (d.open) d.close();
  });
}

// XSS Safe Element Creator
function createElement(tag, classes = [], attributes = {}, textContent = null) {
  const el = document.createElement(tag);
  if (classes.length) el.classList.add(...classes);
  for (const [key, value] of Object.entries(attributes)) {
    el.setAttribute(key, value);
  }
  if (textContent) el.textContent = textContent;
  return el;
}

export function renderCars(data, selectCarCallback) {
  const list = document.getElementById("carList");
  list.innerHTML = ""; // Clear existing

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

export function updateSelectedCarUI(car) {
  document.getElementById("selectedCarName").textContent = car.name;
  document.getElementById("carVisual").src = car.image;
  
  const vehiclePageName = document.getElementById("vehiclePageName");
  if(vehiclePageName) vehiclePageName.textContent = car.name;
  
  const vehiclePageImage = document.getElementById("vehiclePageImage");
  if(vehiclePageImage) vehiclePageImage.src = car.image;
}

export function renderServices(data, deleteServiceCallback) {
  const tbody1 = document.getElementById("serviceTable");
  const tbody2 = document.getElementById("serviceTableFull");
  
  if (tbody1) tbody1.innerHTML = "";
  if (tbody2) tbody2.innerHTML = "";
  
  data.services.forEach(s => {
    const displayType = s.type === "Other" && s.customService ? s.customService : s.type;
    const tr = createElement('tr', [], { 'data-search': `${s.type} ${displayType} ${s.provider}`.toLowerCase() });
    
    tr.appendChild(createElement('td', [], {}, s.date));
    
    const tdType = createElement('td');
    tdType.appendChild(createElement('strong', [], {}, displayType));
    tr.appendChild(tdType);
    
    tr.appendChild(createElement('td', [], {}, s.provider));
    tr.appendChild(createElement('td', [], {}, money(s.cost)));
    
    const tdAction = createElement('td');
    const deleteBtn = createElement('button', ['delete-btn'], { title: 'Delete' }, '✕');
    deleteBtn.addEventListener('click', () => deleteServiceCallback(s.id));
    tdAction.appendChild(deleteBtn);
    
    tr.appendChild(tdAction);
    
    if (tbody1) tbody1.appendChild(tr.cloneNode(true));
    if (tbody2) tbody2.appendChild(tr);
  });

  const countEl = document.getElementById("serviceCount");
  if(countEl) countEl.textContent = 12 + data.services.length;

  renderExpenses(data);
  
  // Re-attach listeners for cloned nodes in tbody1
  if (tbody1) {
    const deleteBtns = tbody1.querySelectorAll('.delete-btn');
    deleteBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => deleteServiceCallback(data.services[index].id));
    });
  }
}

export function renderExpenses(data) {
  const total = data.services.reduce((sum, s) => sum + Number(s.cost), 0);
  const avg = data.services.length ? Math.round(total / data.services.length) : 0;
  
  const elTotal = document.getElementById("totalExpenses");
  if(elTotal) elTotal.textContent = money(total);
  
  const elAvg = document.getElementById("averageExpense");
  if(elAvg) elAvg.textContent = money(avg);
  
  renderExpenseChart(data);
}
