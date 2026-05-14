// FOOTER COMPONENT
// This component appears at the bottom of EVERY page in the website
// It shows copyright info, quick links, and social media icons

// We DON'T need to import Link from react-router here because we're not navigating
// between pages - just showing static content

const Footer = () => {
  // Get the current year automatically

    const currentYear = new Date().getFullYear();

return (
    // MAIN FOOTER CONTAINER
    // bg-cinema-black-pure = pure black background (from our theme)
    // border-t = top border with purple color at 20% opacity (very subtle)
    // py-8 = padding top and bottom (8 units = 2rem/32px)
    // mt-auto = margin top auto - this pushes footer to bottom of page
    //          (works with flex layout in App.jsx)
    <footer className="bg-cinema-black-pure border-t border-cinema-purple-primary/20 py-8 mt-auto">
    
      {/* INNER CONTAINER - Centers everything */}
      {/* container-cinema = max-width container with auto margins (defined in index.css) */}
    <div className="container-cinema">
        
        {/* GRID LAYOUT - Arranges content in columns */}
        {/* grid = display as grid */}
        {/* grid-cols-1 = 1 column on mobile phones */}
        {/* md:grid-cols-3 = 3 columns on medium screens and up (tablets/desktops) */}
        {/* gap-8 = gap between columns (8 units = 2rem/32px) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
          {/* ========== COLUMN 1: BRAND INFORMATION ========== */}
        <div>
            {/* Brand name - large purple text */}
            {/* text-xl = extra large text size */}
            {/* font-heading = uses Poppins font */}
            {/* font-bold = bold weight */}
            {/* text-cinema-purple-primary = bright purple color */}
            {/* mb-4 = margin bottom (4 units = 1rem/16px) */}
            <h3 className="text-xl font-heading font-bold text-cinema-purple-primary mb-4">
              Cinema Hub
            </h3>
            
            {/* Brand description */}
            {/* text-sm = small text size */}
            {/* text-cinema-white-muted = off-white/gray color */}
            {/* <br /> = line break (adds new line) */}
            <p className="text-cinema-white-muted text-sm">
              Your premier destination for <br />
              the ultimate movie experience.
            </p>
          </div>
          
          {/* ========== COLUMN 2: QUICK LINKS ========== */}
          <div>
            {/* Section title */}
            {/* text-lg = large text size */}
            {/* font-semibold = semi-bold weight (600 instead of 700) */}
            {/* text-cinema-white-pure = pure white */}
            {/* mb-4 = margin bottom */}
            <h4 className="text-lg font-semibold text-cinema-white-pure mb-4">
              Quick Links
            </h4>
            
            {/* Unordered list of links */}
            {/* space-y-2 = vertical spacing between list items (0.5rem/8px) */}
            <ul className="space-y-2 text-sm">
              
              {/* Each list item is a clickable link */}
              {/* Using regular <a> tags because these are external/same-page links */}
              {/* Not using react-router Link because these aren't page navigation links */}
              <li>
                <a href="#" className="text-cinema-white-muted hover:text-cinema-purple-primary transition">
                  About Us
                </a>
              </li>
            
                <li>
                <a href="#" className="text-cinema-white-muted hover:text-cinema-purple-primary transition">
                    Contact
                </a>
                </li>
                
                <li>
                <a href="#" className="text-cinema-white-muted hover:text-cinema-purple-primary transition">
                    Privacy Policy
                </a>
                </li>

                <li>
                <a href="#" className="text-cinema-white-muted hover:text-cinema-purple-primary transition">
                    Terms of Service
                </a>
                </li>
                    
            </ul>
        </div>
        
          {/* ========== COLUMN 3: SOCIAL MEDIA ========== */}
        <div>
            {/* Section title */}
            <h4 className="text-lg font-semibold text-cinema-white-pure mb-4">
                Follow Us
            </h4>
            
            {/* Social media description */}
            <p className="text-cinema-white-muted text-sm mb-2">
                Stay updated with latest movies
            </p>
            
            {/* Social media icons container */}
            {/* flex = display as flexbox */}
            {/* space-x-3 = horizontal spacing between icons (0.75rem/12px) */}
            <div className="flex space-x-3">
            
              {/* Simple emoji icons for now - Person 2 can replace with actual icons */}
              {/* All icons have hover effect to turn purple */}
                <span className="text-cinema-white-muted hover:text-cinema-purple-primary cursor-pointer transition">
                📘 Facebook
                </span>
            <span className="text-cinema-white-muted hover:text-cinema-purple-primary cursor-pointer transition">
                📷 Instagram
            </span>
            <span className="text-cinema-white-muted hover:text-cinema-purple-primary cursor-pointer transition">
                🐦 Twitter
            </span>
            
            {/* BETTER OPTION: Use react-icons library (already installed)
            Import at top of file:
            import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
            
            Then replace emojis with:
            <FaFacebook className="text-cinema-white-muted hover:text-cinema-purple-primary cursor-pointer transition" />
            <FaInstagram className="text-cinema-white-muted hover:text-cinema-purple-primary cursor-pointer transition" />
            <FaTwitter className="text-cinema-white-muted hover:text-cinema-purple-primary cursor-pointer transition" />
              */}
            
            </div>
            </div>
        
        </div> {/* END OF GRID */}
        
        {/* ========== COPYRIGHT SECTION ========== */}
        {/* pt-8 = padding top (8 units) */}
        {/* mt-4 = margin top (4 units) */}
        {/* border-t = top border with purple at 10% opacity */}
        {/* text-center = center align text */}
        <div className="text-center text-cinema-white-muted text-sm pt-8 mt-4 border-t border-cinema-purple-primary/10">
          {/* © symbol + dynamic current year + brand name */}
          {/* Current year updates automatically - no need to change manually */}
            © {currentYear} Cinema Hub. All rights reserved.
        </div>
        
      </div> {/* END OF INNER CONTAINER */}
    
    </footer>
);
};

// Export the component so it can be used in App.jsx
export default Footer;