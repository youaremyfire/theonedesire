function handleKeyPress(ev) {
    const player = document.querySelector("#player")
    if (ev.code === "Space") {
        player.setAttribute("cx", 100 *Math.random())
        player.setAttribute("cy", 100 * Math.random())
    } else if (ev.code === "r") {
        player.setAttribute("fill", "red")
    } else if (ev.key === "g") {
        
    }
}


window.onkeydown = handleKeyPress