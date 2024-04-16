import React, { createContext, ReactNode, useContext } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

type MapApiContextType = {
  isLoaded: boolean;
};

const MapApiContext = createContext<MapApiContextType | undefined>(undefined);

interface MapProviderProps {
  children: ReactNode;
}

export function MapProvider({ children }: MapProviderProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDjGnn29F9alL5gLx2urf_oY4FovxSJy38",
  });

  return (
    <MapApiContext.Provider value={{ isLoaded }}>
      {children}
    </MapApiContext.Provider>
  );
}

export function useMapApi() {
  const context = useContext(MapApiContext);

  if (context === undefined) {
    throw new Error("useMapApi must be used within a MapProvider");
  }

  return context;
}
