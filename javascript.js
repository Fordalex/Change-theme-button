// Assigning variables to the elements
let themeButton = document.getElementById('themeButton');
let body = document.querySelector('body');

// Event listener for the theme button
themeButton.addEventListener('click', function () {
    if (localStorage.getItem('theme') === 'dark-theme'){
        setTheme('light-theme');
    } else {
        setTheme('dark-theme');
    }
});

// Function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

 // Immediately invoked function to set the theme on initial load
 (function () {
    if (localStorage.getItem('theme') === 'dark-theme') {
        setTheme('dark-theme');
    } else {
        setTheme('light-theme');
    }
 })();