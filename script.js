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

// prallax for intro

const vh = window.innerHeight;

window.addEventListener('scroll', () => {
    const target = document.querySelector('.intro');
    var scrolled = window.pageYOffset;
    var rate = scrolled / vh;

    target.style.transform = `translate3d( 0vw, ${-10*rate}vh, `+10*rate+`vw) scale3d( ${1 - .5*rate}, ${1 - .5*rate}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew( ${-5 * rate}deg, 0deg)`;
    target.style.opacity = 1 - rate + '';


    if ( rate >= 0.25){
        target.style.filter = `blur(${6*rate - 1.25}px)`;
    } else {
        target.style.filter = `blur(0px)`;
    }

})

// hamburger 

const navToggle = document.querySelector('.nav-toggle');
const hamburgerBarOne = document.querySelector('.hamberger__bar--one');
const hamburgerBarTwo = document.querySelector('.hamberger__bar--two'); // delete these if not needed
const header = document.querySelector('header')
navToggle.addEventListener('click', () => {
    header.classList.toggle('hamberger-open');
})



//animation for sections 

window.addEventListener('scroll', () => {
    const education = document.querySelector('.education');
    const games = document.querySelector('.games');
    const creatorWebsite = document.querySelector('.creator-website');

    var scrolled = window.pageYOffset;

    let contentPositionEducation = (education.getBoundingClientRect().top + education.getBoundingClientRect().bottom) / 2; // do top + bottom / 2 to get the midpoint of the content or make a div only around the text so it works out.
    let contentPositionGames = (games.getBoundingClientRect().top + games.getBoundingClientRect().bottom) / 2;
    let contentPositionCreatorWebsite = (creatorWebsite.getBoundingClientRect().top + creatorWebsite.getBoundingClientRect().bottom) / 2;

    var rate = 5 * (scrolled - contentPositionEducation) / vh;

    if (contentPositionEducation + vh/2 > vh) {
        var rateEducation = (scrolled - contentPositionEducation + vh/2)/vh;
        education.style.transfrom = "translate3d( 0vw, 0vh, 0vw) scale3d( 1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew( 0deg, 0deg)";
        education.style.opacity = 3*rateEducation + "";
        education.style.filter = 'blur('+ (2.5 - 5*rateEducation) +'px)';
        
    }
    else { 
        var rateEducation = (scrolled - contentPositionEducation - 3*vh/2) / vh;
        education.style.opacity = 1 - 3 * rateEducation + "";
        if (rateEducation > 0) {
            education.style.filter = 'blur('+ 5*rateEducation +'px)';
        }
    }

    if (contentPositionGames + vh/2 > vh + education.clientHeight) {
        var rateGames = (scrolled - contentPositionGames + vh/2)/vh;
        games.style.transfrom = "translate3d( 0vw, 0vh, 0vw) scale3d( 1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew( 0deg, 0deg)";
        games.style.opacity = 3*rateGames + "";
        games.style.filter = 'blur('+ (2.5 - 5*rateGames) +'px)';
        
    }
    else { 
        var rateGames = (scrolled - contentPositionGames - 2*vh) / vh;
        games.style.opacity = 1 - 3 * rateGames + "";
        if (rateGames > 0) {
            games.style.filter = 'blur('+ 5*rateGames +'px)';
        }
    }

    if (contentPositionCreatorWebsite < vh + vh/2) {
        var rateCreatorWebsite = ((contentPositionCreatorWebsite - vh) / vh);

        creatorWebsite.style.transfrom = "translate3d( 0vw, 0vh, 0vw) scale3d( 1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew( 0deg, 0deg)";
        creatorWebsite.style.opacity = .5 -3.5*rateCreatorWebsite + "";
        creatorWebsite.style.filter = 'blur('+ (1.25 + 5*rateCreatorWebsite) +'px)';
        

    }
});

