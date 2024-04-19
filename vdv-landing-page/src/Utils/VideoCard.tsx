import ReactPlayer from "react-player";
import React, { useState } from "react";
import Modal from "./Modal";

interface VideoProps {
  url: string;
  description: string;
  title: string;
}

const VideoCard: React.FC<VideoProps> = ({ url, description, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleThumbnailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(!isModalOpen); // Toggle modal state
  };

  return (
    <div className="p-15 flex items-center bg-white shadow-lg p-4 rounded-lg max-w-full mx-auto my-2">
      <div className="w-full rounded-lg overflow-hidden">
        <div className="p-3 pt-2">
          <h3 className="text-left text-xl font-semibold ">{title}</h3>
        </div>
        <div className=" aspect-w-16 aspect-h-9">
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

export default VideoCard;
