import React, { useEffect, useState } from 'react';

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const apiKey = 'YOUR_API_KEY_GOES_HERE';
    const placeId = 'YOUR_PLACE_ID_GOES_HERE'; // Replace with your Google My Business Place ID

    fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.result && data.result.reviews) {
          setReviews(data.result.reviews);
        }
      })
      .catch((error) => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <div>
      <h2>Google Reviews</h2>
      {reviews.map((review) => (
        <div key={review.time}>
          <h3>{review.author_name}</h3>
          <p>{review.text}</p>
          <p>Rating: {review.rating}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default GoogleReviews;
