// Optional JavaScript for additional controls or interactivity
// For now, this code allows you to control the image transitions or add a pause on hover

document.querySelector('.banner-container').addEventListener('mouseenter', function () {
    document.querySelector('.banner-images').style.animationPlayState = 'paused';
});

document.querySelector('.banner-container').addEventListener('mouseleave', function () {
    document.querySelector('.banner-images').style.animationPlayState = 'running';
});
