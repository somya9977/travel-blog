document.addEventListener('DOMContentLoaded', () => {
    // Fetch the local JSON data
    fetch('data/data.json')
        .then(response => response.json())
        .then(data => {
            const postsContainer = document.getElementById('travel-posts');
            
            // Loop through each post in the JSON data
            data.destinations.forEach(destination => {
                const postElement = document.createElement('article');
                postElement.classList.add('post');

                // Insert the post content into the article element
                postElement.innerHTML = `
                    <img src="${destination.image}" alt="${destination.name}">
                    <h2>${destination.name}</h2>
                    <p><small>${destination.date}</small></p>
                    <p>${destination.description}</p>
                `;

                // Append the post element to the travel posts container
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('a.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust offset to account for sticky navbar if needed
                behavior: 'smooth'
            });
        });
    });
});
