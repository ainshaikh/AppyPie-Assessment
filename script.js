// Get references to HTML elements
const appGrid = document.querySelectorAll('.app');
const selectedAppsSection = document.querySelector('.app-clear-bar');
const clearAllButton = document.getElementById('clear-all');

// Initialize an array to store selected apps
const selectedApps = [];

// Function to handle app selection
function selectApp(event) {
    const appDiv = event.currentTarget;
    const appName = appDiv.querySelector('.app-label').textContent;

    // Check if the app is already selected
    if (!selectedApps.includes(appName)) {
        // Add the app to the selectedApps array
        selectedApps.push(appName);

        // Create a new div to display the selected app
        const selectedAppDiv = document.createElement('div');
        selectedAppDiv.classList.add('cross-app');
        selectedAppDiv.innerHTML = `<label>x&nbsp;&nbsp;&nbsp;&nbsp;${appName}</label>`;
        selectedAppsSection.appendChild(selectedAppDiv);

        // Show the "Clear All" button
        clearAllButton.style.display = 'block';
    }
}

// Add click event listeners to app icons
appGrid.forEach(appDiv => {
    appDiv.addEventListener('click', selectApp);
});

// Function to clear all selected apps
function clearAll() {
    // Remove all selected apps from the array and the DOM
    selectedApps.length = 0;
    selectedAppsSection.innerHTML = '';

    // Hide the "Clear All" button
    clearAllButton.style.display = 'none';
}

// Add click event listener to the "Clear All" button
clearAllButton.addEventListener('click', clearAll);
