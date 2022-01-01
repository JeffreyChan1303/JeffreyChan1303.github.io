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

// window.addEventListener('scroll', () => {
//     let effect = document.querySelector('.intro');
//     let content = document.querySelector('.education');
//     let contentPosition = content.getBoundingClientRect().top;
//     let screenPosition = window.innerHeight;
//     if (contentPosition < screenPosition) {
//         effect.style.animation = 'scroll-out 1s ease-in-out 0ms 1 forwards';
//     }
//     else {
//         effect.style.animation = 'scroll-in 1s ease-in-out 0ms 1 forwards';

//     }
// });

// prallax for intro

const vh = window.innerHeight;

window.addEventListener('scroll', () => {
    const target = document.querySelector('.intro');
    var scrolled = window.pageYOffset;
    var rate = scrolled / vh;

    target.style.transform = "translate3d( 0vw, "+rate+"vh, "+-rate+"vw) scale3d( 1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew("+ 0 + 5 * rate +"deg, 0deg)";
    target.style.opacity = 1 - rate + "";

})

//parallax for sections 

window.addEventListener('scroll', () => {
    const education = document.querySelector('.education');
    const games = document.querySelector('.games');
    const creatorWebsite = document.querySelector('.creator-website');

    var scrolled = window.pageYOffset;

    let contentPositionEducation = education.getBoundingClientRect().top;
    let contentPositionGames = games.getBoundingClientRect().top;
    let contentPositionCreatorWebsite = creatorWebsite.getBoundingClientRect().top;

    console.log(vh);
    var rate = 5 * (scrolled - contentPositionEducation) / vh;

    if (contentPositionEducation + vh/2 > vh) {
        var rate = (scrolled - contentPositionEducation + vh/2)/vh;
        education.style.transfrom = "translate3d( 0vw, 0vh, 0vw) scale3d( 1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew( 0deg, 0deg)";
        education.style.opacity = 3*rate + "";
        
    }
    else { // finish the second part where u go below the content for the item to dissapear or fade out.

    }

    if (contentPositionGames < vh) {

    }

    if (contentPositionCreatorWebsite < vh) {

    }
    console.log(contentPositionEducation);
});