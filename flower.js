
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Hope you get better^').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

setTimeout(function () {
  document.getElementById("goBack").style.display = "block";
}, 10000);