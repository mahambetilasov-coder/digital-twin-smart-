let lampOn = true;
let temp = 24;
let hum = 45;

function toggleLamp() {
    lampOn = !lampOn;
    const lamp = document.getElementById("lamp");
    lamp.classList.toggle("off");
}

setInterval(() => {
    temp += (Math.random() - 0.5) * 0.5;
    hum += (Math.random() - 0.5) * 0.5;

    document.getElementById("temp").innerText = temp.toFixed(1);
    document.getElementById("hum").innerText = hum.toFixed(1);
}, 1000);
