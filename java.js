var slides = document.querySelectorAll('.slide');

let curr = 0

console.log(slides)

slides.forEach((s,index) => {
    if (index === curr) {
        s.style.display = "block"
    }else {
        s.style.display = "none"

    }
})