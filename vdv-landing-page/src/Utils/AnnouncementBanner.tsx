import React, { useState } from "react";
import Announcement from "../assets/broadcast-svgrepo-com (3).svg";

type AnnouncementBannerProps = {
  message: string;
  backgroundColor: string;
  textColor: string;
  hoverColor: string;
  onDismiss: () => void;
};

const AnnouncementBanner = ({
  message,
  backgroundColor = "bg-gradient-to-r from-blue-100 to-transparent",
  textColor = "text-blue-800",
  hoverColor = "hover:bg-blue-500",
  onDismiss,
}: AnnouncementBannerProps) => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-transparent shadow-sm ">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className={`w-0 flex-1 flex items-center ${textColor}`}>
            <span className="flex p-2 rounded-lg">
              <img
                src={Announcement}
                alt="Anuncios"
                className="w-8 h-8 md:w-12 md:h-12"
              />
            </span>
            <p className={`ml-3 font-medium ${textColor} truncate`}>
              {message}
            </p>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3 text-blue-400">
            <button
              type="button"
              className={`-mr-1 flex p-2 rounded-md  focus:outline-none sm:-mr-2`}
              onClick={onDismiss}
            >
              X{/* Include an icon or text to indicate dismissal */}
              <span className="sr-only">Dismiss</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
