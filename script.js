// animation for the intro

const animations = document.querySelectorAll('.animation');

for (let i = 0; i < animations.length; i++) {
        let e = animations[i];
        e.style.animation = '2s ease-out '+ (i*100) +'ms 1 intro-animation';
}

// prallax for intro

const vh = window.innerHeight;
const target = document.querySelector('.intro');

window.addEventListener('scroll', () => {
    let scrolled = window.pageYOffset;
    let rate = scrolled / vh;

    target.style.transform = `translate3d( 0vw, ${-10*rate}vh, `+10*rate+`vw) scale3d( ${1 - .5*rate}, ${1 - .5*rate}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew( ${-5 * rate}deg, 0deg)`;
    target.style.opacity = 1 - rate + '';


    if ( rate >= 0.25){
        target.style.filter = `blur(${6*rate - 1.25}px)`;
    } else {
        target.style.filter = `blur(0px)`;
    }

})


//animation for sections 

const education = document.querySelector('.education');
const games = document.querySelector('.games');
const creatorWebsite = document.querySelector('.creator-website');
const img = document.getElementsByTagName('img');


window.addEventListener('scroll', () => {
    let educationTopPosition = education.getBoundingClientRect().top / vh - 1; //position of the top of the element relative to the bottom of the window!!
    let educationBottomPosition = education.getBoundingClientRect().bottom / vh; // after there is only 15vh in sight of the ovject, begin transition 
    let gamesTopPosition = games.getBoundingClientRect().top / vh - 1;
    let gamesBottomPosition = games.getBoundingClientRect().bottom / vh;
    let creatorWebsiteTopPosition = creatorWebsite.getBoundingClientRect().top / vh - 1;
    let creatorWebsiteBottomPosition = creatorWebsite.getBoundingClientRect().bottom / vh;

    // console.log( educationTopPosition , educationBottomPosition);


    // education section

    if (educationTopPosition < 0 && educationTopPosition > -.25) {
        let rateEducation = -5 * educationTopPosition - .2;
        education.style.opacity = `${rateEducation}`;
    } else if (educationBottomPosition > 0 && educationBottomPosition < .25) {
        let rateEducation = 5 * educationBottomPosition - .2;
        education.style.opacity =   `${rateEducation}`;
    } else {
        education.style.opacity = '1'
    }

    img[0].style.transform = `translateY(${0}vh) skew(${educationTopPosition * 7}deg, ${educationTopPosition * 7}deg)`;


    // games section

    if (gamesTopPosition < 0 && gamesTopPosition > -.25) {
        let rateGames = -5 * gamesTopPosition - .2;
        games.style.opacity = `${rateGames}`;
    } else if (gamesBottomPosition > 0 && gamesBottomPosition < .25) {
        let rateGames = 5 * gamesBottomPosition - .2;
        games.style.opacity =   `${rateGames}`;
    } else {
        games.style.opacity = '1'
    }


    // creator website section

    if (creatorWebsiteTopPosition < 0 && creatorWebsiteTopPosition > -.25) {
        let rateCreatorWebsite = -5 * creatorWebsiteTopPosition - .2;
        creatorWebsite.style.opacity = `${rateCreatorWebsite}`;
    } else if (creatorWebsiteBottomPosition > 0 && creatorWebsiteBottomPosition < .25) {
        let rateCreatorWebsite = 5 * creatorWebsiteBottomPosition - .2;
        creatorWebsite.style.opacity =   `${rateCreatorWebsite}`;
    } else {
        creatorWebsite.style.opacity = '1'
    }

})


