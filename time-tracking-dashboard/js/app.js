// Constants
const LOCAL_STORAGE_KEY = 'timeframe';

const previousTimeText = {
  daily: 'Yesterday',
  weekly: 'Last Week',
  monthly: 'Last Month'
};

// DOM Elements
const timeframeButtons = {
  daily: document.getElementById('btn-daily'),
  weekly: document.getElementById('btn-weekly'),
  monthly: document.getElementById('btn-monthly'),
};

const timeInfoElements = {
  work: document.getElementById('work-time-info'),
  play: document.getElementById('play-time-info'),
  study: document.getElementById('study-time-info'),
  exercise: document.getElementById('exercise-time-info'),
  social: document.getElementById('social-time-info'),
  selfCare: document.getElementById('self-care-time-info'),
};

// Helper Functions
const generateTimeValue = (originalValue) => {
  if (typeof originalValue !== 'number' || originalValue < 0) {
    throw new Error('Please provide a valid number');
  }

  return originalValue === 1 ? '1hr' : `${originalValue}hrs`;
};

const updateTimeInfo = (timeframe) => {
  Object.keys(timeInfoElements).forEach((title) => {
    timeInfoElements[title].querySelector('.time-tracking-current').textContent
      = generateTimeValue(info[title][timeframe].current);

    timeInfoElements[title].querySelector('.time-tracking-previous').textContent
      = `${previousTimeText[timeframe]} - ${generateTimeValue(info[title][timeframe].previous)}`;
  });
};

const updateActiveTimeframeButton = (timeframe) => {
  Object.values(timeframeButtons).forEach((button) => {
    button.classList.remove('active');
  });

  timeframeButtons[timeframe].classList.add('active');
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  const currentTimeframe = localStorage.getItem(LOCAL_STORAGE_KEY) || 'daily';
  updateTimeInfo(currentTimeframe);
  updateActiveTimeframeButton(currentTimeframe);
});

timeframeButtons.daily.addEventListener("click", () => {
  updateTimeInfo('daily');
  updateActiveTimeframeButton('daily');
  localStorage.setItem(LOCAL_STORAGE_KEY, 'daily');
});

timeframeButtons.weekly.addEventListener("click", () => {
  updateTimeInfo('weekly');
  updateActiveTimeframeButton('weekly');
  localStorage.setItem(LOCAL_STORAGE_KEY, 'weekly');
});

timeframeButtons.monthly.addEventListener("click", () => {
  updateTimeInfo('monthly');
  updateActiveTimeframeButton('monthly');
  localStorage.setItem(LOCAL_STORAGE_KEY, 'monthly');
});
