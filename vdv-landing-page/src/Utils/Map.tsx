import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useMapApi } from "../providers/MapContext";

const containerStyle = {
  width: "600px",
  height: "400px",
};

const center = {
  lat: 19.0453,
  lng: -98.28759,
};

export function Map() {
  const { isLoaded } = useMapApi();

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <div> Cargando el mapa...</div>
  );
}
