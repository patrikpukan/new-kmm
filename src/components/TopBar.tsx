import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

// Import your icons
import fbIcon from "../assets/icons/2021_Facebook_icon.svg.webp";
import igIcon from "../assets/icons/Instagram_logo_2016.svg.webp";
import liIcon from "../assets/icons/LinkedIn_icon.svg.png";
import thrIcon from "../assets/icons/Threads_(app)_logo.svg.png";

const TopBar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo container with increased size */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/logos/KMM_blue_horizontal.png"
                alt="Club Logo"
                className="h-12 w-auto" // Increased from h-8
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-sky-600 hover:text-sky-700 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-sky-600 hover:text-gray-900 px-3 py-2 text-base font-medium hover:scale-105 transition-transform"
                >
                  Domů
                </Link>
              </li>
              <li>
                <Link
                  to="/onas"
                  className="text-sky-600 hover:text-gray-900 px-3 py-2 text-base font-medium hover:scale-105 transition-transform"
                >
                  O nás
                </Link>
              </li>
              <li>
                <Link
                  to="/partneri"
                  className="text-sky-600 hover:text-gray-900 px-3 py-2 text-base font-medium hover:scale-105 transition-transform"
                >
                  Partneři
                </Link>
              </li>
              <li>
                <Link
                  to="/kontakt"
                  className="text-sky-600 hover:text-gray-900 px-3 py-2 text-base font-medium hover:scale-105 transition-transform"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social icons - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.facebook.com/klubmladychmanazeru/"
              className="text-gray-700 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fbIcon} alt="Facebook" className="h-6 w-6" />
            </a>
            <a
              href="https://www.threads.net/@kmm_vse"
              className="text-gray-700 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={thrIcon} alt="Threads" className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/kmm_vse"
              className="text-gray-700 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={igIcon} alt="Instagram" className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/28562319"
              className="text-gray-700 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={liIcon} alt="LinkedIn" className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block text-sky-600 hover:text-gray-900 px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Domů
              </Link>
              <Link
                to="/onas"
                className="block text-sky-600 hover:text-gray-900 px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                O nás
              </Link>
              <Link
                to="/partneri"
                className="block text-sky-600 hover:text-gray-900 px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Partneři
              </Link>
              <Link
                to="/kontakt"
                className="block text-sky-600 hover:text-gray-900 px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
              {/* Mobile social icons */}
              <div className="flex space-x-4 px-3 py-2">
                <a
                  href="https://www.facebook.com/klubmladychmanazeru/"
                  className="text-gray-700 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={fbIcon} alt="Facebook" className="h-6 w-6" />
                </a>
                <a
                  href="https://www.threads.net/@kmm_vse"
                  className="text-gray-700 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={thrIcon} alt="Threads" className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/kmm_vse"
                  className="text-gray-700 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={igIcon} alt="Instagram" className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/28562319"
                  className="text-gray-700 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={liIcon} alt="LinkedIn" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
