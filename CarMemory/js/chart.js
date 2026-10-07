let chartInstance = null;

export function renderExpenseChart(data) {
  const ctx = document.getElementById('expenseChartCanvas');
  if (!ctx) return;

  // Prepare data (last 6 services for the chart)
  const recentServices = data.services.slice(0, 6).reverse();
  const labels = recentServices.map(s => s.type.slice(0, 10));
  const costs = recentServices.map(s => s.cost);

  if (chartInstance) {
    chartInstance.destroy();
  }

  // Chart.js requires it to be loaded via script tag in index.html
  if (window.Chart) {
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Cost',
          data: costs,
          backgroundColor: '#3b82f6',
          borderRadius: 4,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: '#1e293b' },
            ticks: { color: '#94a3b8' }
          },
          x: {
            grid: { display: false },
            ticks: { color: '#94a3b8' }
          }
        }
      }
    });
  }
}
