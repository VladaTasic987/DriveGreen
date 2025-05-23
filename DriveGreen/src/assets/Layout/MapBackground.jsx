
import { useRef, useEffect, useState } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';


export function MapBackground() {
  
  const mapRef = useRef();
  const mapInstance = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    // Check if container is ready and has dimensions
    const checkContainer = () => {
      if (mapRef.current && mapRef.current.offsetWidth > 0 && mapRef.current.offsetHeight > 0) {
        setMapReady(true);
        return true;
      }
      return false;
    };

    if (!checkContainer()) {
      // If not ready, wait briefly and check again
      const timer = setTimeout(() => {
        if (checkContainer() && !mapInstance.current) {
          initializeMap();
        }
      }, 100); 

      return () => clearTimeout(timer);
    } else if (!mapInstance.current) {
      initializeMap();
    }

    function initializeMap() {
      // Coordinates for Belgrade, Serbia in lon/lat (EPSG:4326)
      const belgradeCoords = [20.4489, 44.7866];
      // Convert to OpenLayers projection (EPSG:3857)
      const belgradeProjected = fromLonLat(belgradeCoords);
      
      mapInstance.current = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: belgradeProjected,
          zoom: 12  // Adjust zoom level as needed (higher = more zoomed in)
        })
      });
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.setTarget(undefined);
        mapInstance.current = null;
      }
    };
  }, [mapReady]);

  return (
    <div>
     <div 
      ref={mapRef} 
      style={{ 
        width: '390px', 
        height: '738px',
        position: 'relative',
        zIndex: 0,
      }} 
    />
    </div>
  );
}

