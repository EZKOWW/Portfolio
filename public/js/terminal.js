let navBar = document.querySelector("nav");
let headerSwitch = document.getElementById("header_switch");
let title = document.querySelector("h2");
let citation = document.querySelector("cite");
let sections = document.querySelectorAll("section");
let footer = document.querySelector("footer");

const tilde = '<span style="color: blue;">~</span>';
const usr = '<span style="color: lightgreen;">eloik@rousseau</span>:' + tilde + '$';
let baseTop = `${usr} whoami`;
let baseBottom = `<br>${usr} je suis un développeur `;
let total = "";
const words = ["C#", "Unity", "NodeJS", "Front-end", "Back-end"];

headerAnim = async (obj) => {
    await sleep(250);
    let foundInvalid = false;

    // First line
    for (let i = 0; i < baseTop.length; i++) {
        // Skip sleep for characters used as DOM elements
        total += baseTop[i];
        obj.innerHTML = total + "_";
        if (baseTop[i] == "<" || baseTop[i] == ">") {
            foundInvalid = !foundInvalid;
        }
        if (foundInvalid) {
            continue;
        }

        await sleep(10);
    }
    await cursorFlash(obj);

    showElements();

    // Second line
    for (let i = 0; i < baseBottom.length; i++) {
        // Skip sleep for characters used as DOM elements
        total += baseBottom[i];
        obj.innerHTML = total + "_";
        if (baseBottom[i] == "<" || baseBottom[i] == ">") {
            foundInvalid = !foundInvalid;
        }
        if (foundInvalid) {
            continue;
        }

        await sleep(10);
    }

    // Words animation
    while (true) {
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            for (let j = 0; j < word.length; j++) {
                total += word[j];
                obj.innerHTML = total + "_";
                await sleep(50);
            }
            await cursorFlash(obj);
            let temp = ""; temp += total;
            for (let j = temp.length - 1; j > temp.length - word.length - 1; j--) {
                total = total.slice(0, -1);
                obj.innerHTML = total + "_";
                await sleep(50);
            }
        }
    }
}

// Shows html dom object after animations
showElements = async () => {
    await sleep(2000)
    navBar.classList.toggle("active");
    await sleep(250)
    citation.classList.toggle("active");
    await sleep(250)
    title.classList.toggle("active");
    await sleep(250)
    headerSwitch.classList.toggle("active");
    await sleep(250)

    sections.forEach(e => {
        e.style.display = "flex";
    })

    footer.style.display = "flex";
}

cursorFlash = async (obj, infinite) => {
    return new Promise(async (resolve, reject) => {
        for (let i = 0; i < (infinite ? Infinity : 2); i++) {
            obj.innerHTML = total.slice(0, total.length);
            await sleep(250);
            obj.innerHTML += "_";
            await sleep(250);
        }
        resolve();
    })
}

sleep = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}