const divArray = Array.from(document.getElementsByClassName("accordion-item"));
divArray[0].classList.remove("ativo");

divArray.forEach((div, i) => {
   div.addEventListener("click", () => {
       divArray.forEach((div, index) => {
              if(i === index) return;
              div.classList.remove("ativo");
       });
       div.classList.toggle("ativo");
    })
});