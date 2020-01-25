const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelector('[role="tab"]');
const panels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
