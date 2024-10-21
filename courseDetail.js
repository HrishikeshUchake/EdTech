// Function to get URL parameters
function getQueryParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to render course details
function fetchCourseDetails() {
    const courseId = getQueryParameter('courseId');
    
    fetch('./courses.json') // Load course data from JSON file
        .then(response => response.json())
        .then(data => {
            const course = data.courses.find(course => course.id == courseId);
            
            if (course) {
                // Update the course details in the DOM
                document.querySelector('.course-title').innerText = course.courseName;
                document.querySelector('.course-image').src = course.image;
                document.getElementById('description').innerText = course.description;
                document.getElementById('duration').innerText = course.duration;
                document.getElementById('level').innerText = course.level;
                document.getElementById('instructor').innerText = `${course.instructor.name}, ${course.instructor.experience}, Rating: ${course.instructor.rating}`;
                
                // Populate topics covered
                let topicsCoveredList = document.getElementById('topicsCovered');
                course.topicsCovered.forEach(topic => {
                    let li = document.createElement('li');
                    li.innerText = topic;
                    topicsCoveredList.appendChild(li);
                });

                // Pricing and Discount
                document.getElementById('price').innerText = `${course.pricing.currency} ${course.pricing.amount}`;
                document.getElementById('discount').innerText = course.pricing.discount;

                // Certification
                document.getElementById('certification').innerText = course.certification ? 'Yes' : 'No';

                // Enrollment Link
                document.getElementById('enrollLink').href = course.enrollmentLink;

                // Populate reviews
                let reviewsContainer = document.getElementById('reviews');
                course.reviews.forEach(review => {
                    let reviewDiv = document.createElement('div');
                    reviewDiv.classList.add('review-container');
                    reviewDiv.innerHTML = `
                        <p class="reviewer-name">${review.reviewer} - Rating: ${review.rating}</p>
                        <p class="reviewer-comment">"${review.comment}"</p>
                    `;
                    reviewsContainer.appendChild(reviewDiv);
                });
            } else {
                document.querySelector('.course-details').innerHTML = '<p>Course not found.</p>';
            }
        })
        .catch(err => console.error('Error fetching course details:', err));
}

// Call fetchCourseDetails when the page loads
document.addEventListener('DOMContentLoaded', fetchCourseDetails);
