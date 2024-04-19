import React, { useState } from "react";
import Modal from "../Utils/Modal"; // Make sure your Modal component supports content sizing correctly
import LogoCertificadora from "../assets/CertLogo.jpeg";
import Button from "../Utils/ButtonProps";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Certificate from "../assets/certificacion.jpg";
const certifications = [
  { src: Certificate, date: "Agosto 1, 2024" },
  { src: Certificate, date: "Enero 1, 2024" },
  { src: Certificate, date: "Agosto 1, 2023" },
];

const OurProcess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="pt-20 flex justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Calidad del Agua Certificada por
        </h1>
        <div className="pt-8 flex flex-col items-center">
          <img src={LogoCertificadora} alt="Trataquim Logo" />
          <Button
            text="Visualizar certificado"
            variant="secondary"
            onClick={onClick}
          />
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <Carousel showThumbs={false}>
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4"
              >
                <h3 className="text-center">{`Fecha de certificación: ${cert.date}`}</h3>
                <img
                  src={cert.src}
                  alt={`Certification ${index + 1}`}
                  className="object-contain h-1/2"
                />
              </div>
            ))}
          </Carousel>
        </Modal>
      )}
    </section>
  );
};

export default OurProcess;
