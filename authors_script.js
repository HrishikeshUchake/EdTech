// Fetch author data from the JSON file
fetch('authors_data.json')
    .then(response => response.json())
    .then(data => {
        const authorsContainer = document.getElementById('authors-container');
        let authorsHTML = '<div class="text-center w-100"><h1 class="mb-5">Meet the Authors</h1><div class="card-deck">';

        data.forEach(author => {
            authorsHTML += `
                <div class="card card-hover" style="width: 18rem;">
                    <img src="${author.photo}" class="card-img-top" alt="${author.name} Photo">
                    <div class="card-body">
                        <h5 class="card-title">${author.name}</h5>
                        <p class="card-text">${author.bio}</p>
                        <p class="card-text"><strong>Email:</strong> <a href="mailto:${author.email}">${author.email}</a></p>
                        <a href="${author.linkedin}" class="btn btn-primary">
                            <i class="fab fa-linkedin"></i> LinkedIn
                        </a>
                        <a href="${author.github}" class="btn btn-secondary">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                </div>
            `;
        });

        authorsHTML += '</div></div>';
        authorsContainer.innerHTML = authorsHTML;
    })
    .catch(error => console.error('Error loading authors data:', error));
