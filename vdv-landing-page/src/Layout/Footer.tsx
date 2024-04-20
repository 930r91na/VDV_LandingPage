import { PhoneIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-100 to-transparent text-xs sm:text-sm md:text-base font-semibold leading-6 text-gray-500">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-3 px-5 sm:py-5 sm:px-10">
        {/* Social Links */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            title="Instagram Icon"
            rel="noopener noreferrer"
            className="hover:text-blue-200"
          >
            <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            title="Facebook Icon"
            rel="noopener noreferrer"
            className="hover:text-blue-200"
          >
            <FaFacebook className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </div>

        {/* Contact Info */}
        <div className="mt-4 sm:mt-0 text-xs sm:text-sm">
          <PhoneIcon className="inline h-5 w-5 sm:h-6 sm:w-6 mr-1 sm:mr-2" /> Contáctanos: 221 530 4660
        </div>

        {/* Additional Information */}
        <div className="mt-4 sm:mt-0">
          <p className="text-xs sm:text-sm">
            © 2024 Valle del Volcan. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
