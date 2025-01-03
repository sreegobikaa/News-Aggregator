// DOM element selectors
let topNews = document.querySelector('#topNews .newsBox');
let sportsNews = document.querySelector('#sportsNews .newsBox');
let businessNews = document.querySelector('#businessNews .newsBox');
let techNews = document.querySelector('#techNews .newsBox');
let worldNews = document.querySelector('#worldNews .newsBox');
let politicsNews = document.querySelector('#politicsNews .newsBox');
let entertainmentNews = document.querySelector('#entertainmentNews .newsBox');

let header = document.querySelector('.header');
let toggleMenu = document.querySelector('.bar');
let menu = document.querySelector('nav ul');

// Toggle menu functionality
const toggle = (e) => {
    toggleMenu.classList.toggle('active');
    menu.classList.toggle('activeMenu');
};
toggleMenu.addEventListener('click', toggle);

// Sticky header on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// API Key and fetch function
const apiKey = "pub_58694eab11608dadc69bf191a97e62f9b532f"; // Replace with your actual API key

const fetchData = async (category) => {
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=pk&category=${category}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

// Fetch Top News
const add_topNews = (data) => {
    let html = '';
    data.forEach((newsItem) => {
        let title = newsItem.title.length < 100 ? newsItem.title : newsItem.title.slice(0, 100) + '...';
        html += `<div class="newsCard">
                    <div class="img">
                        <img src="${newsItem.image_url || 'default-image.jpg'}" alt="top news image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href="${newsItem.link}" target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    topNews.innerHTML = html;
};
fetchData('top').then(add_topNews);

// Fetch World News
const add_worldNews = (data) => {
    let html = '';
    data.forEach((newsItem) => {
        let title = newsItem.title.length < 100 ? newsItem.title : newsItem.title.slice(0, 100) + '...';
        html += `<div class="newsCard">
                    <div class="img">
                        <img src="${newsItem.image_url || 'default-image.jpg'}" alt="world news image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href="${newsItem.link}" target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    worldNews.innerHTML = html;
};
fetchData('world').then(add_worldNews);

// Fetch Politics News
const add_politicsNews = (data) => {
    let html = '';
    data.forEach((newsItem) => {
        let title = newsItem.title.length < 100 ? newsItem.title : newsItem.title.slice(0, 100) + '...';
        html += `<div class="newsCard">
                    <div class="img">
                        <img src="${newsItem.image_url || 'default-image.jpg'}" alt="politics news image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href="${newsItem.link}" target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    politicsNews.innerHTML = html;
};
fetchData('politics').then(add_politicsNews);

// Fetch Entertainment News
const add_entertainmentNews = (data) => {
    let html = '';
    data.forEach((newsItem) => {
        let title = newsItem.title.length < 100 ? newsItem.title : newsItem.title.slice(0, 100) + '...';
        html += `<div class="newsCard">
                    <div class="img">
                        <img src="${newsItem.image_url || 'default-image.jpg'}" alt="entertainment news image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href="${newsItem.link}" target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    entertainmentNews.innerHTML = html;
};
fetchData('entertainment').then(add_entertainmentNews);

// Adding sports news
const add_sportsNews = (data) => {
    let html = '';
    data.forEach((newsItem) => {
        let title = newsItem.title.length < 100 ? newsItem.title : newsItem.title.slice(0, 100) + '...';
        html += `<div class="newsCard">
                    <div class="img">
                        <img src="${newsItem.image_url || 'default-image.jpg'}" alt="sports news image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href="${newsItem.link}" target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    sportsNews.innerHTML = html;
};
fetchData('sports').then(add_sportsNews);

// Adding business news
const add_businessNews = (data) => {
    let html = '';
    data.forEach((newsItem) => {
        let title = newsItem.title.length < 100 ? newsItem.title : newsItem.title.slice(0, 100) + '...';
        html += `<div class="newsCard">
                    <div class="img">
                        <img src="${newsItem.image_url || 'default-image.jpg'}" alt="business news image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href="${newsItem.link}" target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    businessNews.innerHTML = html;
};
fetchData('business').then(add_businessNews);

// Adding tech news
const add_techNews = (data) => {
    let html = '';
    data.forEach((newsItem) => {
        let title = newsItem.title.length < 100 ? newsItem.title : newsItem.title.slice(0, 100) + '...';
        html += `<div class="newsCard">
                    <div class="img">
                        <img src="${newsItem.image_url || 'default-image.jpg'}" alt="tech news image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href="${newsItem.link}" target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    techNews.innerHTML = html;
};
fetchData('technology').then(add_techNews);

// Newsletter subscription
let subscribeButton = document.querySelector('.newsletter button');
let emailInput = document.querySelector('.newsletter input[type="email"]');

subscribeButton.addEventListener('click', () => {
    let email = emailInput.value;
    if (email && validateEmail(email)) {
        alert('Thank you for subscribing!');
        emailInput.value = ''; // Clear input field after submission
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
