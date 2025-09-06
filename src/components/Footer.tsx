import { FC } from "react";
import fbIcon from "../assets/icons/2021_Facebook_icon.svg.webp";
import igIcon from "../assets/icons/Instagram_logo_2016.svg.webp";
import liIcon from "../assets/icons/LinkedIn_icon.svg.png";
import thrIcon from "../assets/icons/Threads_(app)_logo.svg.png";
import linkTreeIcon from "../assets/icons/linktree-logo-icon.svg";

const Footer: FC = () => {
  return (
    <footer className="bg-white shadow-md mt-4">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          {/* Billing Information */}
          <div className="space-y-1">
            <h3 className="font-primary font-semibold text-sky-600">
              Fakturační údaje
            </h3>
            <p className="text-gray-600 leading-snug">
              Klub mladých manažerů, z.s.
              <br />
              nám. W. Churchilla 1938/4
              <br />
              130 67 Praha 3 - Žižkov
              <br />
              IČ: 193 132 50
            </p>
          </div>

          {/* Club Management */}
          <div className="space-y-1">
            <h3 className="font-primary font-semibold text-sky-600 text-center">
              Vedení klubu
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
              <div>
                <p className="text-gray-600 leading-snug">
                  <strong className="font-semibold text-gray-800">
                    Soňa Tomčalová
                  </strong>
                  <br />
                  Prezidentka
                  <br />
                  <a
                    href="mailto:kovt07@vse.cz"
                    className="text-sky-600 hover:text-sky-700"
                  >
                    sonat07@vse.cz
                  </a>
                </p>
              </div>
              <div>
                <p className="text-gray-600 leading-snug">
                  <strong className="font-semibold text-gray-800">
                    Samuel Graňák
                  </strong>
                  <br />
                  Head of Business Development <br />
                  <a
                    href="mailto:gras03@vse.cz"
                    className="text-sky-600 hover:text-sky-700"
                  >
                    gras03@vse.cz
                  </a>
                </p>
              </div>
              <div>
                <p className="text-gray-600 leading-snug">
                  <strong className="font-semibold text-gray-800">
                    Michal Procházka
                  </strong>
                  <br />
                  Head of Event Planning
                  <br />
                  <a
                    href="mailto:gras03@vse.cz"
                    className="text-sky-600 hover:text-sky-700"
                  >
                    havz05@vse.cz
                  </a>
                </p>
              </div>
              <div>
                <p className="text-gray-600 leading-snug">
                  <strong className="font-semibold text-gray-800">
                    Šárka Koudelková
                  </strong>
                  <br />
                  Head of Marketing
                  <br />
                  <a
                    href="mailto:pukp00@vse.cz"
                    className="text-sky-600 hover:text-sky-700"
                  >
                    pukp00@vse.cz
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact and Social Media */}
          <div className="space-y-1">
            <h3 className="font-primary font-semibold text-sky-600 text-right">
              Spojme se!
            </h3>
            <div className="flex flex-col items-center md:items-end justify-center gap-2">
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/klubmladychmanazeru/"
                  className="text-gray-500 hover:text-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={fbIcon} alt="Facebook" className="h-5 w-5" />
                </a>
                <a
                  href="https://www.threads.net/@kmm_vse"
                  className="text-gray-500 hover:text-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={thrIcon} alt="Threads" className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/kmm_vse"
                  className="text-gray-500 hover:text-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={igIcon} alt="Instagram" className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/28562319"
                  className="text-gray-500 hover:text-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={liIcon} alt="LinkedIn" className="h-5 w-5" />
                </a>
                <a
                  href="https://linktr.ee/kmm_vse"
                  className="text-gray-700 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkTreeIcon} alt="LinkTree" className="h-6 w-6" />
                </a>
              </div>
              <a
                href="mailto:tym@kmm.cz"
                className="text-sky-600 hover:text-sky-700 font-semibold"
              >
                tym@kmm.cz
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <p className="text-center text-gray-600 text-xs">© KMM 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
