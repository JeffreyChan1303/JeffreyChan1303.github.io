// animation for the intro

const animations = document.querySelectorAll('.animation');

for (let i = 0; i < animations.length; i++) {
        let e = animations[i];
        e.style.animation = '2s ease-out '+ (i*100) +'ms 1 intro-animation';
}



// prallax for intro

const vh = window.innerHeight;
const target = document.querySelector('.intro');
const header = document.getElementsByTagName('header');

window.addEventListener('scroll', () => {
    let scrolled = window.pageYOffset;
    let rate = scrolled / vh;

    target.style.transform = `translate3d( 0vw, ${-20 * rate}vh, `+10*rate+`vw) scale3d( ${1 - rate / 20}, ${1 - rate / 20}, 1)`;


    if ( rate >= 0.25){
        target.style.opacity = `${1 - 2.2 * (rate - .25)}`;
        target.style.filter = `blur(${10 * (rate - .35)}px)`;
        target.style.zIndex = '-1';
    
    } else {
        target.style.opacity = `1`;
        target.style.filter = `blur(0px)`;
        target.style.zIndex = '1';
    }

    // header animation

    if (rate >= .65) {
        header[0].style.opacity = '1';
        header[0].style.zIndex = '100';
        header[0].style.transform = 'translateY(0)';
    } else {
        header[0].style.opacity = '0';
        header[0].style.zIndex = '-1';
        header[0].style.transform = 'translateY(-50px)';
    }

})


//animation for sections 

const education = document.querySelector('.education');
const trackMyProjects = document.querySelector('.track-my-projects');
const ignVideoPlayer = document.querySelector('.ign-video-player');
const creatorWebsite = document.querySelector('.creator-website');
const img = document.querySelectorAll('.img-parallax');
const sectionTitle = document.querySelectorAll('.section__title');
const sectionSubtitle = document.querySelectorAll('.section__subtitle');


window.addEventListener('scroll', () => {
    let educationTopPosition = education.getBoundingClientRect().top / vh - 1; //position of the top of the element relative to the bottom of the window!!
    let educationBottomPosition = education.getBoundingClientRect().bottom / vh; // after there is only 15vh in sight of the ovject, begin transition 
    let trackMyProjectsTopPosition = trackMyProjects.getBoundingClientRect().top / vh - 1;
    let trackMyProjectsBottomPosition = trackMyProjects.getBoundingClientRect().bottom / vh;
    let ignVideoPlayerTopPosition = ignVideoPlayer.getBoundingClientRect().top / vh - 1;
    let ignVideoPlayerBottomPosition = ignVideoPlayer.getBoundingClientRect().bottom / vh;
    let creatorWebsiteTopPosition = creatorWebsite.getBoundingClientRect().top / vh - 1;
    let creatorWebsiteBottomPosition = creatorWebsite.getBoundingClientRect().bottom / vh;

    // education section

    console.log(creatorWebsiteTopPosition)
    infoAnimation(education, educationTopPosition, educationBottomPosition);
    sectionTitle[0].style.transform = `translateY(${6 * educationTopPosition + 5}vh)`;
    sectionSubtitle[0].style.transform = `translateY(${6 * educationTopPosition + 5}vh)`;

    // trackMyProjects section

    infoAnimation(trackMyProjects, trackMyProjectsTopPosition, trackMyProjectsBottomPosition);
    sectionTitle[1].style.transform = `translateY(${6 * educationTopPosition + 5}vh)`;
    sectionSubtitle[1].style.transform = `translateY(${6 * educationTopPosition + 5}vh)`;

    // ign video player section

    infoAnimation(ignVideoPlayer, ignVideoPlayerTopPosition, ignVideoPlayerBottomPosition);
    sectionTitle[2].style.transform = `translateY(${6 * educationTopPosition + 5}vh)`;
    sectionSubtitle[2].style.transform = `translateY(${6 * educationTopPosition + 5}vh)`;

    // creator website section

    infoAnimation(creatorWebsite, creatorWebsiteTopPosition, creatorWebsiteBottomPosition);
    sectionTitle[3].style.transform = `translateY(${6 * educationTopPosition + 5}vh)`;
    sectionSubtitle[3].style.transform = `translateY(${6 * educationTopPosition + 5}vh)`;

})

function infoAnimation(element, topPosition, bottomPosition) {
    if (topPosition < 0 && topPosition > -.25) {
        element.style.opacity = `${-5 * topPosition - .2}`;
        element.style.filter = `blur(${3 - (-topPosition * 12)}px)`;
    } else if (bottomPosition > 0 && bottomPosition < .25) {
        element.style.opacity =   `${5 * bottomPosition - .2}`;
        element.style.filter = `blur(${3 - (bottomPosition * 12)}px)`
    } else {
        element.style.opacity = '1';
        element.style.filter = 'blur(0px)';
    }
}


