let headerSpan = document.getElementById("header_span");
let body = document.querySelector("body");
let scrollObjects = document.getElementsByClassName("hidden");
let projectsBtns = document.getElementById("projects_select").querySelectorAll("button");
let projectsPages = document.querySelector(".projects").querySelectorAll("ul");

window.onload = async () => {
    /*window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });*/

    headerAnim(headerSpan);
    checkForScroll();
}

// Show objects appearing on screen
body.onscroll = () => {
    checkForScroll();
};

// Remove scroll-anim class from objects
document.addEventListener('animationend', (e) => {
    e.target.classList.remove("scroll-anim")
})

// Select project page
projectsSelect = (obj) => {
    projectsBtns.forEach((e) => {
        e.classList.remove("active");
    })

    projectsPages.forEach((e) => {
        e.style.display = "none";
    })

    obj.classList.toggle("active");

    projectsPages[Array.from(projectsBtns).indexOf(obj)].style.display = "flex";
}


// Show objects if scrolled
checkForScroll = async () => {
    if (!scrollObjects[0]) return;

    await sleep(150)
    for (let i = 0; i < scrollObjects.length; i++) {
        if (checkViewport(scrollObjects[i])) {
            scrollObjects[i].classList.add("scroll-anim");
            scrollObjects[i].classList.remove("hidden");
        }
    }
}

// Checks if specified element is positioned in viewport
checkViewport = (obj) => {
    let borders = obj.getBoundingClientRect();

    return (
        borders.top >= 0 &&
        borders.left >= 0 &&
        borders.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        borders.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


// Function to wait for X milliseconds
sleep = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}