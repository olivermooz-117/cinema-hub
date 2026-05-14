// Import React - this is always needed to create React components
// We don't need to import useState or useEffect because this is a simple display component
import React from 'react';
// Import the CSS file for styling this component
import './EventCard.css';

// This is a functional component called EventCard
// It receives "props" (short for properties) from its parent component
// We're using object destructuring to extract specific props we need
// - event: contains all the movie/show information
// - onSelect: a function that runs when user clicks the card (optional)
const EventCard = ({ event, onSelect }) => {
  
  // This function handles when a user clicks on the card
  const handleCardClick = () => {
    // Check if onSelect function was provided in props
    // The && operator means: if onSelect exists, then call it
    if (onSelect) {
      // Call the onSelect function and pass the event data to it
      onSelect(event);
    }
  };

  // This function handles when user clicks the "Book Now" button
  const handleBookClick = (e) => {
    // Stop the click from also triggering the card click
    // This prevents both the button click AND card click from firing
    e.stopPropagation();
    
    // Show an alert when user tries to book
    // In a real app, this would open a booking form or add to cart
    alert(`Booking ticket for: ${event.title}`);
  };

  // The component must return JSX (JavaScript XML)
  // This is what will be displayed on the screen
  return (
    // The main container div for one event card
    // className is React's way of adding CSS classes
    // onClick runs the handleCardClick function when user clicks anywhere on the card
    <div className="event-card" onClick={handleCardClick}>
    
      {/* Movie/Show poster image */}
      {/* src: the image URL from the event data */}
      {/* alt: text shown if image fails to load, also good for accessibility */}
    <img 
        src={event.image} 
        alt={`${event.title} poster`}
        className="event-image"
    />
    
      {/* Container for all text information about the event */}
    <div className="event-details">
        
        {/* Movie/Show title - h3 means heading level 3 */}
        <h3>{event.title}</h3>
        
        {/* Date and time information */}
        {/* The 📅 and ⏰ are emojis for visual appeal */}
        <p className="event-date-time">
            📅 {event.date} | ⏰ {event.time}
        </p>
        
        {/* Venue/location information */}
        <p className="event-venue">
            📍 {event.venue}
        </p>
        
        {/* Ticket price information */}
        <p className="event-price">
            💰 {event.price}
        </p>
        
        {/* Available seats count */}
        <p className="event-seats">
            🎫 Available Seats: {event.availableSeats}
        </p>
        
        {/* Short description of the movie/show (optional) */}
        {/* The && means: if event.description exists, then display this paragraph */}
        {event.description && (
        <p className="event-description">
            {event.description}
        </p>
        )}
        
        {/* Book Now button */}
        {/* onClick runs handleBookClick when clicked */}
        {/* stopPropagation is handled inside the function to prevent card click */}
        <button className="book-btn" onClick={handleBookClick}>
            🎬 Book Now
        </button>
        
    </div>
    </div>
);
};

// Export the component so it can be used in other files
// This allows other components to import and use EventCard
export default EventCard;