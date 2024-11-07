const arrayOfP = document.getElementsByTagName("p");

arrayOfP[0].classList.add("solid-border", "black-background-padding-20");
arrayOfP[1].classList.add("black-background-padding-20", "big-red-text");
arrayOfP[2].classList.add("solid-border", "big-red-text");

arrayOfP[0].classList.remove("solid-border", "black-background-padding-20");
arrayOfP[1].className = "solid-border big-red-text";
arrayOfP[2].className = "black-background-padding-20 big-red-text";