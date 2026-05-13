// Import necessary modules from React Router for navigation
import { Link } from 'react-router-dom';
// Import icons from react-icons (install first: npm install react-icons)
import { FaFilm, FaSearch, FaUser } from 'react-icons/fa';

// Navbar component - appears on every page at the top
const Navbar = () => {
    return (
    // Main navigation container
    // bg-cinema-black-pure = pure black background
    // border-b = bottom border with purple color at 20% opacity
    // sticky top-0 = stays at top when scrolling
    // z-50 = ensures navbar stays above other content
    <nav className="bg-cinema-black-pure border-b border-cinema-purple-primary/20 sticky top-0 z-50">
      <div className="container-cinema"> {/* Centered container with max width */}
        <div className="flex justify-between items-center h-16"> {/* Flexbox for horizontal layout */}

          {/* Logo Section - Left side */}
            <Link to="/" className="flex items-center space-x-2 group">
            {/* Film icon - changes color on hover using group-hover */}
            <FaFilm className="w-8 h-8 text-cinema-purple-primary group-hover:text-cinema-purple-light transition" />
            {/* Brand name with purple gradient text */}
            <span className="text-xl font-heading font-bold bg-gradient-to-r from-cinema-purple-primary to-cinema-purple-light bg-clip-text text-transparent">
                Cinema Hub
            </span>
        </Link>

          {/* Navigation Links - Middle section */}
          {/* Hidden on mobile, visible on medium screens and up (md:flex) */}
        <div className="hidden md:flex space-x-8">
            {/* Home link - hover turns purple */}
            <Link to="/" className="text-cinema-white-off hover:text-cinema-purple-primary transition">
                Home
            </Link>
            {/* Movies link */}
            <Link to="/movies" className="text-cinema-white-off hover:text-cinema-purple-primary transition">
                Movies
            </Link>
            {/* Dashboard link */}
            <Link to="/dashboard" className="text-cinema-white-off hover:text-cinema-purple-primary transition">
            Dashboard
            </Link>
        </div>

          {/* Right side icons - Search and User Profile */}
        <div className="flex items-center space-x-4">
            {/* Search icon - cursor-pointer makes it clickable */}
            <FaSearch className="w-5 h-5 text-cinema-white-muted hover:text-cinema-purple-primary cursor-pointer transition" />
            {/* User profile icon */}
            <FaUser className="w-5 h-5 text-cinema-white-muted hover:text-cinema-purple-primary cursor-pointer transition" />
        </div>
        
        </div>
    </div>
    </nav>
);
};

export default Navbar; // Make this component available to other files