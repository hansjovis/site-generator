function updateTime(element) {
    const currentTime = new Date();
    
    element.textContent = currentTime.toLocaleTimeString();
    element.setAttribute("datetime", currentTime.toISOString());
}

const element = document.getElementById("now");

updateTime(element);
window.setInterval(() => updateTime(element), 1000);