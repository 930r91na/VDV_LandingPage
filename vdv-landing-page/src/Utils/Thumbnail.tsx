import ReactPlayer from "react-player";
import React, { useState } from "react";
import Modal from "./Modal";

interface VideoProps {
  url: string;
  description: string;
  title: string;
  index: number;
}

const Thumbnail: React.FC<VideoProps> = ({
  url,
  description,
  title,
  index,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleThumbnailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(!isModalOpen); // Toggle modal state
  };

  return (
    <div className="p-15 flex items-center bg-white shadow-lg p-4 rounded-lg max-w-full mx-auto my-2">
      <div className="text-4xl font-bold pr-4">{index}</div>
      <div className="">
        <div className="w-96 h-56 bg-gray-200 rounded-lg overflow-hidden">
          {/* Clickable area to play the video, showing only the thumbnail initially */}
          <a
            href={url}
            onClick={handleThumbnailClick}
            className="block w-full h-full"
          >
            {!isModalOpen && (
              <ReactPlayer url={url} light={true} width="100%" height="100%" />
            )}
          </a>
        </div>
      </div>
      <div className="p-3 pt-2">
        <h3 className="text-left text-xl font-semibold ">{title}</h3>
        <p className="text-sm text-gray-600 ">{description}</p>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ReactPlayer
            url={url}
            playing={isModalOpen}
            controls
            width="100%"
            height="100%"
          />
        </Modal>
      )}
    </div>
  );
};

export default Thumbnail;
