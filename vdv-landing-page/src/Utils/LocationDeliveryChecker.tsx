import React, { useState } from "react";
import axios from "axios";
import { useMapApi } from "../providers/MapContext";

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

  const checkDeliveryService = (lat: number, lng: number) => {
    return deliveryZones.some(
      (zone) => Math.abs(zone.lat - lat) < 1 && Math.abs(zone.lng - lng) < 1, // Define delivery zone radius
    );
  };

  const handleAddressSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address,
    )}&key=AIzaSyDjGnn29F9alL5gLx2urf_oY4FovxSJy38`;

    try {
      const response = await axios.get(url);
      const loc = response.data.results[0].geometry.location;
      setLocation(loc);
      const isInDeliveryArea: boolean = checkDeliveryService(loc.lat, loc.lng);
      setMessage(
        isInDeliveryArea
          ? "Tu ubicación esta disponible para entrega a domicilio!"
          : "Oopsies! Tu ubicación no esta disponible para entrega a domicilio. Pero puedes solicitarnos en nuestra sucursal!" +
              loc.lat +
              " " +
              loc.lng,
      );
    } catch (error) {
      setMessage(
        "Error al obtener la ubicación. Por favor, verifica que la dirección sea correcta.",
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
          className="bg-sky-600 border-black text-white py-2"
          type="submit"
        >
          Enviar
        </button>
      </form>
      <p>{message}</p>
    </div>
  ) : (
    <div>Cargando...</div>
  );
}
