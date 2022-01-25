const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// navigation window animation

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

    // statistics section appearance

    if (rate > 1.2) {
        statistics.style.opacity = '1';
        statistics.style.zIndex = '100';
    } else {
        statistics.style.opacity = '0';
    }

})

// Youtube and Instagram APIs

const youtubeToken = 'AIzaSyBON-BmmukGYkb58Ebh8UFcC0tb8Mp0Qf8';
const youtubeId = 'UC-4zDbwRwcpxzQ0xN27aSmQ';

const youtubeVideoLink = document.querySelectorAll('.youtube-video--link');
const youtubeThumbnail = document.querySelectorAll('.youtube-thumbnail');

fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeId}&key=${youtubeToken}&HTTP/1.1`)
    .then(res => res.json())
    .then(data => {
        let views = data.items[0].statistics.viewCount;
        let subscribers = data.items[0].statistics.subscriberCount;

        const youtubeSubs = document.querySelector('.youtube__subscribers');
        youtubeSubs.append(subscribers);
        const youtubeViews = document.querySelector('.youtube__views');
        youtubeViews.append(views);
    })

fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&id=${youtubeId}&key=${youtubeToken}`)
    .then(res => res.json())
    .then(data => {
        const uploadPlaylistId = data.items[0].contentDetails.relatedPlaylists.uploads;

        fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${uploadPlaylistId}&key=${youtubeToken}`)
            .then(res => res.json())
            .then(data => {
                const videoOne = data.items[0].snippet;
                const videoTwo = data.items[1].snippet;
                const videoOneUrl = `https://www.youtube.com/watch?v=${videoOne.resourceId.videoId}`
                const videoTwoUrl = `https://www.youtube.com/watch?v=${videoTwo.resourceId.videoId}`

                const videoOneThumbnail = videoOne.thumbnails.high.url;
                const videoTwoThumbnail = videoTwo.thumbnails.high.url;

                console.log(data.items[0].snippet);

                youtubeVideoLink[0].href = videoOneUrl;
                youtubeThumbnail[0].src = videoOneThumbnail;
                youtubeVideoLink[1].href = videoTwoUrl;
                youtubeThumbnail[1].src = videoTwoThumbnail;
            })
    })



// Whilte I was setting up the Instagram Basic Display API, I found that the instagram api only worked if I used the Instagram Graph Api which needs specific permissions from the user that I didn't need to permit.
// Therefore, I didn't want to use the instagram api because of the hassle and the sucurity risks it would cause for the client with the use of thier access token in the script file.

/*  Instagram Api
const instagramToken = "IGQVJVWjRjSmE4aTAzMVasdfjcGN0TG9vYzE5ZA3p0OFpnRk1lUk1mVHRJUUJ4MmVqRk9fRlY2dFE3WkVMS0U1bXptQjBSQnNYak5kdEZasdfakYwVFhNMDNyeUZATM0tGM25wEktOXVBd0dRajZAaQjhHegZDZD"
const instagramId = '409124919402';

fetch(`https://graph.instagram.com/me/media?fields=id,caption,media-type,permalink,thumbnail_url,username,media&access_token=${instagramToken}`)
    .then(res => res.json())
    .then(data => console.log(data))

fetch(`https://graph.instagram.com/me/insights?fields=impressions,reach,follower-count&access_token=${instagramToken}`)
    .then(res => res.json())
    .then(data => console.log(data))
*/

// Content change buttons

const slider = document.querySelectorAll('.statistics');
const arrowUp = document.querySelector('.content-up');
const arrowDown = document.querySelector('.content-down');
const statisticsBackground = document.querySelector('.section__statistics');
const platformLogo = document.querySelectorAll('.platform-logo');

let currentPlatform = 0;

arrowUp.addEventListener('click', () =>{
    hide(slider[currentPlatform]);
    hide(platformLogo[currentPlatform])
    currentPlatform = currentPlatform - 1;
    if (currentPlatform < 0) {currentPlatform = 2};
    show(slider[currentPlatform]);
    show(platformLogo[currentPlatform]);

    statisticsBackgroundColor(slider, currentPlatform);
})

arrowDown.addEventListener('click', () =>{
    hide(slider[currentPlatform]);
    hide(platformLogo[currentPlatform]);
    currentPlatform = currentPlatform + 1;
    if (currentPlatform > 2) {currentPlatform = 0};
    show(slider[currentPlatform]);
    show(platformLogo[currentPlatform]);

    statisticsBackgroundColor(slider, currentPlatform);
})

const originalColor = document.querySelector('.background');

function statisticsBackgroundColor(object, currentIndex) {
    if (object[currentIndex].classList.contains('statistics__youtube')) {
        statisticsBackground.style.background = 'rgb(170, 30, 30)';
    }
    if (object[currentIndex].classList.contains('statistics__instagram')) {
        statisticsBackground.style.background = 'rgb(105,90,170)';
    }
    if (object[currentIndex].classList.contains('statistics__tiktok')) {
        statisticsBackground.style.background = 'rgb(30,30,45)';
    }
}

function hide(object) {
    object.style.opacity = '0';
    object.style.zIndex = '0';
}

function show(object) {
    object.style.opacity = '1';
    object.style.zIndex = '2';
}

// instagram carousel section

const instagramCarousel = document.querySelectorAll('.instagram-img');
let instagramCarouselArr = Array.from(instagramCarousel);


setInterval(() => {
    instagramCarouselArr = shiftRight(instagramCarouselArr);
    carouselStyle(instagramCarouselArr[0], 'translateX(-70px) scale(.8)', '.4', '0', 'blur(2px)');
    carouselStyle(instagramCarouselArr[1], 'translateX(-35px) scale(.9)', '.6', '1', 'blur(1px)');
    carouselStyle(instagramCarouselArr[2], 'translateX(0px) scale(1)', '1', '2', 'blur(0px)');
    carouselStyle(instagramCarouselArr[3], 'translateX(35px) scale(.9)', '.6', '1', 'blur(1px)');
    carouselStyle(instagramCarouselArr[4], 'translateX(70px) scale(.8)', '.4', '0', 'blur(2px)');
}, 5000)

function carouselStyle(object, transform, opacity, zIndex, filter) {
    object.style.transform = transform;
    object.style.opacity = opacity;
    object.style.zIndex = zIndex;
    object.style.filter = filter;
}

function shiftRight(arr) {
    let temp = arr.pop();
    arr.unshift(temp);
    return arr;
}

