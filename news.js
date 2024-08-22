let slideIndex = 0;
showSlides();

// Function to change slides
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Move to the next slide
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} // Loop back to the first slide
    
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000); // 3000 milliseconds = 3 seconds
}


const apiKey = 'e22853db9a6648c98e2e68c03125eb2d'; // Replace with your actual API key
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'ok') {
            displayNews(data.articles);
        } else {
            console.error('Error fetching news:', data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; // Clear any existing content

    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';

        newsItem.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description || 'No description available.'}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;

        newsContainer.appendChild(newsItem);
    });
}

// Fetch and display news when the page loads
window.onload = () => {
    fetchNews();
};
async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); // Add this line to check the response

        if (data.status === 'ok') {
            displayNews(data.articles);
        } else {
            console.error('Error fetching news:', data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
const mockArticles = [
    {
        title: "Mock News Title 1",
       //description: "This is a mock description for news article 1.",
        url: "https://example.com/mock-article-1"
    },
    {
        title: "Mock News Title 2",
        //description: "This is a mock description for news article 2.",
        url: "https://example.com/mock-article-2"
    }
];

displayNews(mockArticles);


