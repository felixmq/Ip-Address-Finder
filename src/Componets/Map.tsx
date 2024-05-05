import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import makerIcon from "../imagenes/icon-location.svg";

interface MapProps {
    coordinates: {
        lat: number;
        lng: number;
    } | undefined;
}

const Map = ({ coordinates }: MapProps) => {
    const marker = L.icon({ iconUrl: makerIcon });
    const keyMap = Math.random();

    return (
        <MapContainer
            key={keyMap}
            center={[coordinates?.lat || 0, coordinates?.lng || 0]}
            zoom={18}
            className="w-full h-3/5 z-0"
        >
            <TileLayer
                attribution="Google Maps"
                url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
            />
            {coordinates && (
                <Marker
                    position={[coordinates.lat, coordinates.lng]}
                    icon={marker}
                />
            )}
        </MapContainer>
    );
};

export default Map;

