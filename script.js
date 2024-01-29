
const name = "Dana SH";
let i = 0;
const interval = setInterval(() => {
  document.body.innerHTML += name[i];
  i++;
  if (i === name.length) clearInterval(interval);
}, 1000);
