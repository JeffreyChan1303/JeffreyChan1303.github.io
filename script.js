// java script code, use camel case

const creatorWebsiteLink = document.querySelector('.creator-website__link');
const animations = document.querySelectorAll('.animation');

for (let i = 0; i < animations.length; i++) {
    let e = animations[i];
    e.style.opacity = '0';
}

for (let i = 0; i < animations.length; i++) {
        let e = animations[i];
        e.style.animation = '2s ease-out '+ (i*100) +'ms 1 intro-animation';
}

for (let i = 0; i < animations.length; i++) {
    let e = animations[i];
    e.style.opacity = '1';
}

// for (let i = 0; i < animations.length; i++) {
//     let r = animations[i];
//     r.style.opacity = '1';
// }




creatorWebsiteLink.addEventListener('click', () => {
    document.body.classList.add('creator-website--opened')
});