function attachGradientEvents() {
    let gradientEl = document.getElementById('gradient');
    gradientEl.addEventListener('mousemove', onMouse);

    function onMouse(event) {
        document.getElementById('result').textContent = `${Math.floor(event.offsetX / gradientEl.clientWidth * 100)}%`;
    }
}