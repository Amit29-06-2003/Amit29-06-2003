const imageContainerEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", newImageLoad);

function newImageLoad() {
for (let index = 0; index < 6; index++) {
    
    const newimage = document.createElement("img");

    newimage.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 2000)}`;

    imageContainerEl.appendChild(newimage);
}
}