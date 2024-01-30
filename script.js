const title = document.getElementById("title")
let i = 0;
const n = "Dana SH"
console.log(title)
const interval = setInterval(() => {
  title.textContent += n[i];
  
  i++;
  if (i === n.length) clearInterval(interval);
}, 500);
