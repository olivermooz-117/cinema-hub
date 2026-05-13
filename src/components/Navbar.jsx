// NAVBAR COMPONENT
// This component appears at the TOP of every page in the website
// It contains the logo, navigation links, and search/user icons

// Import Link from React Router for navigation between pages
// Link is like <a> tag but it doesn't refresh the page (faster!)
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

// Import icons from react-icons library (you installed this earlier)
// FaFilm = movie clapper board icon
// FaSearch = magnifying glass icon
// FaUser = person/user icon
import { FaFilm, FaSearch, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    // MAIN NAVBAR CONTAINER
    //bg-cinema-black-pure = pure black background (from theme)
    // border-b = bottom border line
    // border-cinema-purple-primary/20 = purple border with 20% opacity (very subtle)
    // sticky top-0 = navbar stays at top even when scrolling down
    // z-50 = high z-index so navbar stays above everything else
    <nav className="bg-cinema-black-pure border-b border-cinema-purple-primary/20 sticky top-0 z-50">
      
      {/* INNER CONTAINER - Centers and limits width */}
      {/* container-cinema = max width container with auto margins (defined in index.css) */}
      <div className="container-cinema">
        
        {/* FLEX CONTAINER - Arranges items horizontally */}
        {/* flex = display as flexbox */}
        {/* justify-between = pushes items to left and right ends */}
        {/* items-center = vertically centers items */}
        {/* h-16 = fixed height (16 units = 4rem/64px) */}
        <div className="flex justify-between items-center h-16">
          
          {/* ========== LEFT SECTION: LOGO ========== */}
          {/* Link component - when clicked, goes to home page ("/") */}
          {/* to="/" = navigate to home page */}
          {/* group = allows child elements to react when parent is hovered */}
            <Link to="/" className="flex items-center space-x-2 group">
            
            {/* Film/Clapperboard Icon */}
            {/* w-8 h-8 = width and height (8 units = 2rem/32px) */}
            {/* text-cinema-purple-primary = bright purple color */}
            {/* group-hover:text-cinema-purple-light = changes to lighter purple when parent (group) is hovered */}
            {/* transition = smooth color change animation */}
            <FaFilm className="w-8 h-8 text-cinema-purple-primary group-hover:text-cinema-purple-light transition" />
            
            {/* Brand Name Text */}
            {/* text-xl = extra large text size (20px) */}
            {/* font-heading = uses Poppins font (defined in index.css) */}
            {/* font-bold = bold weight */}
            {/* bg-gradient-to-r = gradient from left to right */}
            {/* from-cinema-purple-primary to-cinema-purple-light = purple to light purple gradient */}
            {/* bg-clip-text = gradient only applies to text */}
            {/* text-transparent = makes normal text color transparent so gradient shows through */}
            <span className="text-xl font-heading font-bold bg-gradient-to-r from-cinema-purple-primary to-cinema-purple-light bg-clip-text text-transparent">
                Cinema Hub
            </span>
            
        </Link>
        
          {/* ========== MIDDLE SECTION: NAVIGATION LINKS ========== */}
          {/* hidden = hides on mobile screens */}
          {/* md:flex = shows as flex on medium screens and up (tablets/desktops) */}
          {/* space-x-8 = horizontal spacing between links (2rem/32px) */}
            <div className="hidden md:flex space-x-8">
            
            {/* Home Link */}
            {/* to="/" = goes to home page */}
            {/* text-cinema-white-off = off-white color */}
            {/* hover:text-cinema-purple-primary = turns purple when mouse hovers */}
            {/* transition = smooth color change */}
            <Link to="/" className="text-cinema-white-off hover:text-cinema-purple-primary transition">
                Home
            </Link>
            
            {/* Movies Link */}
            {/* to="/movies" = goes to movies listing page */}
            <Link to="/movies" className="text-cinema-white-off hover:text-cinema-purple-primary transition">
              Movies
            </Link>
            
            {/* Dashboard Link */}
            {/* to="/dashboard" = goes to user dashboard page */}
            <Link to="/dashboard" className="text-cinema-white-off hover:text-cinema-purple-primary transition">
              Dashboard
            </Link>
            
          </div>
          
          {/* ========== RIGHT SECTION: ICONS ========== */}
          {/* flex = display as flexbox */}
          {/* items-center = vertically centers icons */}
          {/* space-x-4 = horizontal spacing between icons (1rem/16px) */}
          <div className="flex items-center space-x-4">
            
            {/* Search Icon */}
            {/* w-5 h-5 = width and height (5 units = 1.25rem/20px) */}
            {/* cursor-pointer = changes mouse to hand cursor on hover */}
            {/* hover:text-cinema-purple-primary = turns purple on hover */}
            {/* Note: In the future, Person 2 can make this open a search bar */}
            <FaSearch className="w-5 h-5 text-cinema-white-muted hover:text-cinema-purple-primary cursor-pointer transition" />
            
            {/* User Profile Icon */}
            {/* hover:text-cinema-purple-primary = turns purple on hover */}
            {/* Note: In the future, Person 5 can make this open a user menu */}
            <FaUser className="w-5 h-5 text-cinema-white-muted hover:text-cinema-purple-primary cursor-pointer transition" />
            
        </div>
        
        </div> {/* END OF FLEX CONTAINER */}
        
      </div> {/* END OF INNER CONTAINER */}
      
    </nav>
  );
};

// Export the component so it can be used in App.jsx
export default Navbar;