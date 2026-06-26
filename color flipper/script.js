

function setColor(name) {
    console.log("Clicked:", name);
    document.body.style.background = name;
}

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const color = `rgb(${red}, ${green}, ${blue})`;
    console.log(color);

    document.body.style.background = color;
}