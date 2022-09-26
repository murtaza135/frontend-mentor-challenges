const maxBarValue = data.reduce((a, b) => Math.max(a, b.amount), data[0].amount);
const barChart = document.getElementById('bar-chart');
const barSections = Array.from(barChart.children);

// Set bar values and heights
document.addEventListener('DOMContentLoaded', () => {
  barSections.forEach((barSection, index) => {
    const bar = barSection.querySelector('.bar');
    bar.dataset.value = data[index].amount;
    bar.style.height = `${(data[index].amount / maxBarValue) * 150}px`;
  });
});

// add/remove the 'active' class on all bars as required
// based upon which one the user clicked
barChart.addEventListener('click', (event) => {
  if (event.target.classList.contains('bar')) {
    barSections.forEach((barSection) => {
      barSection.querySelector('.bar').classList.remove('active');
      event.target.classList.add('active');
    });
  }
});