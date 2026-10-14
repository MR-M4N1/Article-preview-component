const shareIcon = document.querySelector('.shareIconContainer');

const popupSquare = document.querySelector(".popupSquare");

const mainContent = document.querySelector(".mainContent");

const sharebox = document.querySelector('.shareBox');

const userbox = document.querySelector('.userBox');

const shareContainer = document.querySelector('.shareContainer');

const path = document.querySelector('.path');

let i = 0;

const mediaQueryPhone = window.matchMedia(
    "(max-width: 800px)"
);


const mediaQueryLaptop = window.matchMedia(
    "(min-width: 801px)"
);

shareIcon.addEventListener("click", () =>{
    if(mediaQueryLaptop.matches){
            if (i % 2 === 0) {
        shareIcon.style.cursor = "pointer";
        popupSquare.style.display = "block";
        sharebox.style.display = "flex";
        i++;
        console.log(i);
        return i;
    } else {
        shareIcon.style.cursor = "pointer";
        popupSquare.style.display = "none";
        sharebox.style.display = "none";
        i++;
        console.log(i);
        return i;
    }
    }
    if(mediaQueryPhone.matches){
        userbox.style.display = "none";
        sharebox.style.display = "flex";
        shareContainer.style.backgroundColor = "var(--Very-Dark-Grayish-Blue)";
        shareIcon.style.backgroundColor = "var(--Grayish-Blue)";
        path.style.fill = "white";
        shareContainer.style.transition = "all 1s";

    }
});

shareIcon.addEventListener("mouseenter", () => {
    if (mediaQueryLaptop.matches && i % 2 === 0) {
        popupSquare.style.display = "block";
        sharebox.style.display = "flex";
    }
});

shareIcon.addEventListener("mouseleave", () => {
    if (mediaQueryLaptop.matches && i % 2 === 0) {
        popupSquare.style.display = "none";
        sharebox.style.display = "none";
    }
});



