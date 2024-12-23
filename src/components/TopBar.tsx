import { FC } from "react";
import { Link } from "react-router-dom";
import fbIcon from "../assets/icons/2021_Facebook_icon.svg.webp";
import igIcon from "../assets/icons/Instagram_logo_2016.svg.webp";
import liIcon from "../assets/icons/LinkedIn_icon.svg.png";
import thrIcon from "../assets/icons/Threads_(app)_logo.svg.png";

const TopBar: FC = () => {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo container with fixed width */}
          <div className="w-[200px]">
            <Link to="/" className="flex items-center">
              <img
                src="/logos/KMM_blue_horizontal.png"
                alt="Club Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Navigation links container - centered */}
          <nav className="absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-sky-600 hover:text-gray-900 px-3 py-2 text-sm font-medium hover:scale-105 transition-transform"
                >
                  Domů
                </Link>
              </li>
              <li>
                <Link
                  to="/onas"
                  className="text-sky-600 hover:text-gray-900 px-3 py-2 text-sm font-medium hover:scale-105 transition-transform"
                >
                  O nás
                </Link>
              </li>
              <li>
                <Link
                  to="/partneri"
                  className="text-sky-600 hover:text-gray-900 px-3 py-2 text-sm font-medium hover:scale-105 transition-transform"
                >
                  Partneři
                </Link>
              </li>
              <li>
                <Link
                  to="/kontakt"
                  className="text-sky-600 hover:text-gray-900 px-3 py-2 text-sm font-medium hover:scale-105 transition-transform"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social icons with fixed width to match logo */}
          <div className="w-[200px] flex justify-end space-x-4">
            <a
              href="https://www.facebook.com/klubmladychmanazeru/"
              className="text-gray-700 hover:text-gray-900"
            >
              <img src={fbIcon} alt="Facebook" className="h-6 w-6" />
            </a>
            <a
              href="https://www.threads.net/@kmm_vse"
              className="text-gray-700 hover:text-gray-900"
            >
              <img src={thrIcon} alt="Threads" className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/kmm_vse"
              className="text-gray-700 hover:text-gray-900"
            >
              <img src={igIcon} alt="Instagram" className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/28562319"
              className="text-gray-700 hover:text-gray-900"
            >
              <img src={liIcon} alt="LinkedIn" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
