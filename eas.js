const container = document.querySelector(".container");

for (let i = 1; i < 257; i++) {
    const div = document.createElement('div');
    container.appendChild(div);

    div.addEventListener("mouseover", () => {
        setColor(div);
    });
};

const setColor = (div) => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    div.style.backgroundColor = "#" + randomColor;
};