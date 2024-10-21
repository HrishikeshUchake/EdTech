function fetchData() {
    console.log("Begin fetch");
    fetch('./courses.json')
    .then(function (response) {
        return response.json(); // Parse the JSON data
    })
    .then(function (data) {
        appendData(data); // Call function to display data on the webpage
    })
    .catch(function (err) {
        console.log('error: ' + err); // Log any errors
    });
    console.log("End fetch");
}

function appendData(data) {
    let mainContainer = document.getElementById("myData1");
    
    // Check if the data contains a "courses" array
    if (data.courses && Array.isArray(data.courses)) {
        data.courses.forEach(function(course) {
            let div = document.createElement("div");
            div.classList.add("col-sm-6", "col-md-4", "col-lg-3");
            
            // Create the HTML content for each course card
            div.innerHTML = `
            <div class="card mb-4 course-card" style="width: 100%;" data-course-id="${course.id}">
                <img src="${course.image}" class="card-img-top" alt="Course logo" width="100" />
                <div class="card-body">
                    <h5 class="card-title">${course.courseName}</h5>
                    <p class="card-text">
                        <strong>Description:</strong> ${course.description} <br>
                        <strong>Duration:</strong> ${course.duration} <br>
                        <strong>Level:</strong> ${course.level} <br>
                    </p>
                </div>
            </div>
            `;
            
            // Add click event to the card to navigate to the course details page
            div.querySelector('.course-card').addEventListener('click', function() {
                window.location.href = `courseDetail.html?courseId=${course.id}`; // Navigate to details page with courseId
            });

            // Append the card to the container
            mainContainer.appendChild(div);
        });
    } else {
        console.log('The data format is incorrect or "courses" is missing.');
    }
}

fetchData(); // Call fetchData when the page loads
