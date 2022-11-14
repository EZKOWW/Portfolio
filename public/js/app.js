let headerSpan = document.getElementById("header_span");

window.onload = async () => {
    // Start animation
    headerAnim(headerSpan);
}

// Wait for ms
sleep = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}