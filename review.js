    // JavaScript to handle review form submission
    document.addEventListener('DOMContentLoaded', function () {
      const reviews = {
        h2r: [],
        panigale: [],
        s1000rr: [],
        aprilia: [],
        honda: [],
      };

      // Handle review form submissions for H2R
      document.getElementById('h2r-review-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const rating = document.getElementById('h2r-rating').value;
        const comment = document.getElementById('h2r-comment').value;
        reviews.h2r.push({ rating, comment });
        updateReviewsDisplay('h2r');
      });

      // Handle review form submissions for Panigale
      document.getElementById('panigale-review-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const rating = document.getElementById('panigale-rating').value;
        const comment = document.getElementById('panigale-comment').value;
        reviews.panigale.push({ rating, comment });
        updateReviewsDisplay('panigale');
      });

      // Handle review form submissions for S1000RR
      document.getElementById('s1000rr-review-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const rating = document.getElementById('s1000rr-rating').value;
        const comment = document.getElementById('s1000rr-comment').value;
        reviews.s1000rr.push({ rating, comment });
        updateReviewsDisplay('s1000rr');
      });

      // Handle review form submissions for Aprilia
      document.getElementById('aprilia-review-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const rating = document.getElementById('aprilia-rating').value;
        const comment = document.getElementById('aprilia-comment').value;
        reviews.aprilia.push({ rating, comment });
        updateReviewsDisplay('aprilia');
      });

      // Handle review form submissions for Honda
      document.getElementById('honda-review-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const rating = document.getElementById('honda-rating').value;
        const comment = document.getElementById('honda-comment').value;
        reviews.honda.push({ rating, comment });
        updateReviewsDisplay('honda');
      });

      // Update the review display on the page
      function updateReviewsDisplay(bikeName) {
        const reviewsContainer = document.getElementById(`${bikeName}-reviews`);
        reviewsContainer.innerHTML = '';

        reviews[bikeName].forEach(function (review) {
          const reviewDiv = document.createElement('div');
          reviewDiv.classList.add('review-item');
          // Dynamically generate stars based on the rating
            const starRating = generateStarRating(review.rating);
  
            reviewDiv.innerHTML = `
                <p><strong>Rating:</strong> ${review.rating} ${starRating}</p>
                <p><strong>Comment:</strong> ${review.comment}</p>
            `;
            reviewsContainer.appendChild(reviewDiv);
        });
      }
    });
    // Function to generate the star rating dynamically
    function generateStarRating(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '★'; // Filled star
            } else {
                stars += '☆'; // Empty star
            }
        }
        return stars;
     }