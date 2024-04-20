import React, { useState } from "react";
import axios from "axios";
import { useMapApi } from "../providers/MapContext";
import color from "../assets/ColorPalette";

const center = {
  lat: 19.0453,
  lng: -98.28759,
};

const deliveryZones = [
  { lat: 19.0453, lng: -98.28759 },

  // Define delivery zones here
];

export function LocationDeliveryChecker() {
  const { isLoaded } = useMapApi();

  const [address, setAddress] = useState("");
  const [, setLocation] = useState(center);
  const [message, setMessage] = useState("");
  const [isInDeliveryArea, setIsInDeliveryArea] = useState(false); 

  const checkDeliveryService = (lat: number, lng: number) => {
    return deliveryZones.some(
      (zone) => Math.abs(zone.lat - lat) < 1 && Math.abs(zone.lng - lng) < 1 // Define delivery zone radius
    );
  };

  const handleAddressSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=AIzaSyDjGnn29F9alL5gLx2urf_oY4FovxSJy38`;

    try {
      const response = await axios.get(url);
      const loc = response.data.results[0].geometry.location;
      setLocation(loc);
      const isInDeliveryArea: boolean = checkDeliveryService(loc.lat, loc.lng);
      setIsInDeliveryArea(isInDeliveryArea);
      setMessage(
        isInDeliveryArea
          ? 'Tu ubicación está disponible para entrega a domicilio! Puedes <a href="https://wa.me/12215304660?text=Me%20gustaría%20programar%20una%20entrega." class="underline text-blue-600 hover:text-blue-800">¡Agenda tu pedido ahora!</a>'
          : `Oops! Tu ubicación no está disponible para entrega. Llámanos al <a href="tel:+12215304660" class="underline text-blue-600 hover:text-blue-800">221 530 4660</a> para opciones.`
      );
    } catch (error) {
      setMessage(
        "Error al obtener la ubicación. Por favor, verifica que la dirección sea correcta."
      );
    }
  };

  return isLoaded ? (
    <div>
      <form onSubmit={handleAddressSubmit} className="flex flex-col space-y-4">
        <input
          className="border-2 border-gray-300 w-full p-2"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Inserta tu dirección aquí"
        />
        <button
          style={{ backgroundColor: color.nightBlueShade }}
          className=" border-black text-white py-2"
          type="submit"
        >
          Enviar
        </button>
      </form>
      <div
        className={`mt-4 text-sm ${
          isInDeliveryArea ? "text-green-500" : "text-red-500"
        } animate-pulse`}
      >
        <p dangerouslySetInnerHTML={{ __html: message }} />
      </div>
    </div>
  ) : (
    <div>Cargando...</div>
  );
}
