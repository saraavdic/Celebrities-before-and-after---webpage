function slideChangeShowText(imageId, newSrc, textId) {
    const image = document.getElementById(imageId);
    const text = document.getElementById(textId);
    image.classList.add('slide-left');
    setTimeout(() => {
        image.src = newSrc;
        text.classList.add('show'); // pokaži tekst
    }, 500); // vrijeme
}

function resetChangeHideText(imageId, originalSrc, textId) {
    const image = document.getElementById(imageId);
    const text = document.getElementById(textId);
    image.classList.remove('slide-left');
    setTimeout(() => {
        image.src = originalSrc;
        text.classList.remove('show'); // sakrij tekst
    }, 500); // vrijeme
}