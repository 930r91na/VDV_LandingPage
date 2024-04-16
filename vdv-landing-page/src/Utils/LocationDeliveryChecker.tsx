import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import axios from "axios";
import { useMapApi } from "../providers/MapAPI";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const deliveryZones = [
  { lat: -34.397, lng: 150.644 },
  { lat: -34.4, lng: 150.644 },
  // Define delivery zones here
];

export function LocationDeliveryChecker() {
  const { isLoaded } = useMapApi();

  const [address, setAddress] = useState("");
  const [location, setLocation] = useState(center);
  const [message, setMessage] = useState("");

  const checkDeliveryService = (lat: number, lng: number) => {
    return deliveryZones.some(
      (zone) =>
        Math.abs(zone.lat - lat) < 0.01 && Math.abs(zone.lng - lng) < 0.01 // Define delivery zone radius
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

      setMessage(
        isInDeliveryArea
          ? "Your location is available for delivery!"
          : "Oopsies! Your location is not available for delivery, but you can contact us to open a request."
      );
    } catch (error) {
      setMessage(
        "Failed to retrieve location. Please check the address and try again."
      );
    }
  };

  return isLoaded ? (
    <div>
    <form onSubmit={handleAddressSubmit}>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your address"
      />
      <button type="submit">Check Delivery Availability</button>
    </form>
    <p>{message}</p>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={10}
    >
      <Marker position={location} />
    </GoogleMap>
  </div>
  ) : (
    <></>
  );
}
