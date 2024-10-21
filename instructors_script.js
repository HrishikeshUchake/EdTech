// Fetch instructor data from the JSON file
fetch('instructor.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('instructor-container');

        // Create HTML content based on JSON data
        const instructorHTML = `
            <div class="text-center">
                <div class="row align-items-center">
                    <div class="col-md-4 mb-3">
                        <img src="${data.photo}" class="rounded-circle img-fluid uplift" alt="Instructor Photo">
                    </div>
                    <div class="col-md-8">
                        <h1 class="display-4 font-weight-bold uplift">${data.name}</h1>
                        <p class="lead mt-3">${data.bio}</p>
                        <a href="${data.contactLink}" class="btn btn-custom">
                            <i class="fas fa-envelope"></i> Get in Touch
                        </a>
                        <a href="${data.linkedinLink}" target="_blank" class="btn btn-custom">
                            <i class="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        `;

        // Insert content into the container
        container.innerHTML = instructorHTML;
    })
    .catch(error => console.error('Error loading instructor data:', error));
 