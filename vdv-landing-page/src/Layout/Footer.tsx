import { PhoneIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-100 to-transparent text-sm font-semibold leading-6 text-gray-500">
      <div className="container mx-auto flex justify-between items-center py-5 px-10">
        {/* TODO: ADD Social Links */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            title="Instagram Icon"
            rel="noopener noreferrer"
            className="hover:text-blue-200"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            title="Facebook Icon"
            rel="noopener noreferrer"
            className="hover:text-blue-200"
          >
            <FaFacebook className="h-6 w-6" />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-sm">
          <PhoneIcon className="inline h-6 w-6 mr-2" /> Contáctanos: 221 530 4660
        </div>

        {/* Additional Information */}
        <div>
          <p className="text-sm">
            © 2024 Valle del Volcan. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
