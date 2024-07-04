document.addEventListener("DOMContentLoaded", function() {
const config = {
    baseURL: window.location.hostname === 'localhost' ? '' : '/Swedding'
};

document.querySelectorAll('.background').forEach(el => {
        const background = el.getAttribute('data-background');
        el.style.backgroundImage = `url(${config.baseURL}${background})`;
    });
});