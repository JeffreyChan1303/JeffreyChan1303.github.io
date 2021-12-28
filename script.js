// java script code, use camel case

const creatorWebsiteLink = document.querySelector('.creator-website__link');
const animations = document.querySelectorAll('.animation');

// animation for the intro



for (let i = 0; i < animations.length; i++) {
        let e = animations[i];
        e.style.animation = '2s ease-out '+ (i*100) +'ms 1 intro-animation';
}


// for (let i = 0; i < animations.length; i++) {
//     let r = animations[i];
//     r.style.opacity = '1';
// }


creatorWebsiteLink.addEventListener('click', () => {
    document.body.classList.add('creator-website--opened')
});

// scroll animation 

window.addEventListener('scroll', () => {
    let effect = document.querySelector('.intro');
    let content = document.querySelector('.education');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if (contentPosition < screenPosition) {
        effect.style.animation = 'scroll-out 2s ease-in-out 0ms 1 forwards';
    }
    else {
        effect.style.animation = 'scroll-in 2s ease-in-out 0ms 1 forwards';

    }
});
