import React from "react";
// import colors from "./Colors.module.css";

interface AnnouncementBarProps {
  message: string;
  link: string;
  linkText: string;
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  message,
  link,
  linkText,
}) => {
  return (
    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        {message}{" "}
        <a href={link} className={`font-semibold`}>
          {linkText} <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;
