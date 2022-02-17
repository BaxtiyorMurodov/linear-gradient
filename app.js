
let btn = document.querySelector("button");

let colors = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e','f']
function randomcolor() {
    let color = "#";
    for (let i = 0; i < 6; i++){
       let random = Math.floor(Math.random() * colors.length)
       color += colors[random]
    }
    return color
}
btn.addEventListener('click', () => {
    let answer1 = randomcolor();
    let answer2 = randomcolor();
    document.body.style.background = `linear-gradient(120deg, ${answer1}, ${answer2})`;
    
})