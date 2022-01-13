const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

// quick links window animation


navLinks[0].style.opacity = '0';

let navOpenCount = 0;
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    if (navOpenCount % 2 == 0) { 
        let objectCount = 0;
        for (let i of navLinks) {
            let delay = 800 + objectCount * 200;

            setTimeout(() => {
                i.style.transform = 'translateX(0)';
                i.style.opacity = '1';
            }, delay)
            objectCount += 1;
        }
    } else {
        let objectCount = 0;
        for (let i of navLinks) {
            if (objectCount % 2) {
                i.style.transform = 'translateX(-100%)';
            } else {
                i.style.transform = 'translateX(100%)';
            }
            i.style.opacity = '0';
            objectCount += 1;
        }
    }
    console.log(navOpenCount);
    navOpenCount += 1;
})



// Intro animation

const introBars = document.querySelectorAll('.intro__text');
const introParts = document.querySelectorAll('.intro__part');
const intro = document.querySelector('.intro');
const statistics = document.querySelector('.section__statistics');


window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;
    let vh = window.innerHeight;
    let vw = window.innerWidth;
    let rate = scrolled / vh;

    let count = 0;
    for (let i of introBars) {
        if (count % 2 === 0) {
            i.style.transform = `translateX(${100*rate}vw)`;
            count += 1;
        } else {
            i.style.transform = `translateX(${-100*rate}vw)`;
            count += 1;
        }
    }

    if (rate > .5) {
        introParts[0].style.transform = `translateY(${-50 * (rate - .5)}vh)`;
        introParts[1].style.transform = `translateY(${50 * (rate - .5)}vh)`;
    } else {
        introParts[0].style.transform = `translateY( 0vh)`;
        introParts[1].style.transform = `translateY( 0vh)`;
    }

    if (rate > .60) {
        intro.style.opacity = `${1 - 1.75 * (rate - .60)}`;
    } else {
        intro.style.opacity = '1';
    }

    // scrole down text

    // statistics section appearance

    if (rate > 1.2) {
        statistics.style.opacity = '1';
        statistics.style.zIndex = '100';
    } else {
        statistics.style.opacity = '0';
    }

})

// working with fetch

fetch('https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UC-4zDbwRwcpxzQ0xN27aSmQ&key=AIzaSyBON-BmmukGYkb58Ebh8UFcC0tb8Mp0Qf8&HTTP/1.1')
    .then(res => res.json())
    .then(data => {
        let views = data.items[0].statistics.viewCount
        let subscribers = data.items[0].statistics.subscriberCount

        const youtubeSubs = document.querySelector('.youtube__subscribers');
        youtubeSubs.append(subscribers);
        const youtubeViews = document.querySelector('.youtube__views');
        youtubeViews.append(views);
    })

const token = "IGQVJVWjRjSmE4aTAzMV9jcGN0TG9vYzE5ZA3p0OFpnRk1lUk1mVHRJUUJ4MmVqRk9fRlY2dFE3WkVMS0U1bXptQjBSQnNYak5kdEZAwakYwVFhNMDNyeUZATM0tGM25wSGF3OEktOXVBd0dRajZAaQjhHegZDZD"
fetch(`https://graph.instagram.com/me/media?fields=id,caption&access_token=${token}`)
    .then(res => res.json())
    .then(data => console.log(data))

fetch(`https://graph.instagram.com/me?fields=id,username&access_token=${token}`)
    .then(res => res.json())
    .then(data => console.log(data))


    //access token = IGQVJVWjRjSmE4aTAzMV9jcGN0TG9vYzE5ZA3p0OFpnRk1lUk1mVHRJUUJ4MmVqRk9fRlY2dFE3WkVMS0U1bXptQjBSQnNYak5kdEZAwakYwVFhNMDNyeUZATM0tGM25wSGF3OEktOXVBd0dRajZAaQjhHegZDZD

// Working with DOM manipulation and adding content into html using jabascript



// double sided queue for slider animation

const slider = document.querySelectorAll('.statistics');
const arrowUp = document.querySelector('.content-up');
const arrowDown = document.querySelector('.content-down');
const statisticsBackground = document.querySelector('.section__statistics');
const platformLogo = document.querySelectorAll('.platform-logo')

let current = 0;
for (let i in slider) {
    console.log(i);
}


arrowUp.addEventListener('click', () =>{
    slider[current].style.opacity = '0';
    slider[current].style.zIndex = '0';
    platformLogo[current].style.opacity = '0';
    platformLogo[current].style.zIndex = '0';
    current = current - 1;
    if (current < 0) {current = 2};
    slider[current].style.opacity = '1';
    slider[current].style.zIndex = '1';
    platformLogo[current].style.opacity = '1';
    platformLogo[current].style.zIndex = '1';

    statisticsBackgroundColor(slider, current);
})

arrowDown.addEventListener('click', () =>{
    slider[current].style.opacity = '0';
    slider[current].style.zIndex = '0';
    platformLogo[current].style.opacity = '0';
    platformLogo[current].style.zIndex = '0';
    current = current + 1;
    if (current > 2) {current = 0};
    slider[current].style.opacity = '1';
    slider[current].style.zIndex = '1';
    platformLogo[current].style.opacity = '1';
    platformLogo[current].style.zIndex = '1';

    statisticsBackgroundColor(slider, current);
})

const originalColor = document.querySelector('.background');
function statisticsBackgroundColor(object, currentIndex) {
    if (object[currentIndex].classList.contains('statistics__youtube')) {
        statisticsBackground.style.background = '#FF000090';
    }
    if (object[currentIndex].classList.contains('statistics__instagram')) {
        statisticsBackground.style.background = 'radial-gradient(circle at 100% 15%, #fdf497 0%, #fd5949 45%,#d6249f 60%,#285AEB 90%)';
    }
    if (object[currentIndex].classList.contains('statistics__tiktok')) {
        statisticsBackground.style.background = 'black';
    }
}


