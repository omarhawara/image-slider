// const nextEl = document.querySelector(".next");

// const prevEl = document.querySelector(".prev");

// const imgsEl = document.querySelectorAll("img");

// const imageContainerEl = document.querySelector(".image-container");

// let currentImg = 1;

// let timeout;

// nextEl.addEventListener("click", () => {
//   currentImg++;
//   clearTimeout(timeout);
//   updateImg();
// });

// prevEl.addEventListener("click", () => {
//   currentImg--;
//   clearTimeout(timeout);
//   updateImg();
// });

// updateImg();

// function updateImg() {
//   if (currentImg > imgsEl.length) {
//     currentImg = 1;
//   } else if (currentImg < 1) {
//     currentImg = imgsEl.length;
//   }
//   imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
//   timeout = setTimeout(() => {
//     currentImg++;
//     updateImg();
//   }, 3000);
// }

const nextEl = document.querySelector(".next"); //Button .next

const prevEl = document.querySelector(".prev"); //Button .prev

const imgsEl = document.querySelectorAll("img");  // elements of all images in content

const imageContainerEl = document.querySelector(".image-container");  // the father of content this images 

let currentImg = 1;

let timeout;

nextEl.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
})
prevEl.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
})
updateImg();
function updateImg() {
    if (currentImg > imgsEl.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imgsEl.length;
    }
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
    timeout = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 3000);
}