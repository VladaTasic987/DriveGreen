import React, { useRef, useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Feature from 'ol/Feature';
import LineString from 'ol/geom/LineString';
import { Stroke, Style } from 'ol/style';

export const MapBackground = forwardRef((props, ref) => {
  const mapRef = useRef();
  const mapInstance = useRef(null);
  const routeLayerRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    const checkContainer = () => {
      if (mapRef.current && mapRef.current.offsetWidth > 0 && mapRef.current.offsetHeight > 0) {
        setMapReady(true);
        return true;
      }
      return false;
    };

    if (!checkContainer()) {
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
      const belgradeCoords = fromLonLat([20.4489, 44.7866]);

      const map = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: belgradeCoords,
          zoom: 12
        })
      });

      const vectorSource = new VectorSource();
      const vectorLayer = new VectorLayer({
        source: vectorSource,
        style: new Style({
          stroke: new Stroke({
            color: '#465B4E', // Changed line color here
            width: 3
          })
        })
      });

      map.addLayer(vectorLayer);
      mapInstance.current = map;
      routeLayerRef.current = vectorSource;
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.setTarget(undefined);
        mapInstance.current = null;
      }
    };
  }, [mapReady]);

  // expose drawRandomRoute function to parent using ref
  useImperativeHandle(ref, () => ({
    drawRandomRoute
  }));

  const drawRandomRoute = () => {
    if (!mapInstance.current || !routeLayerRef.current) return;

    const points = [
      fromLonLat([20.53, 44.74]),
      fromLonLat([20.50, 44.76]),
      fromLonLat([20.47, 44.78]),
      fromLonLat([20.45, 44.79]),
      fromLonLat([20.42, 44.80]),
      fromLonLat([20.40, 44.81])
    ];

    const line = new LineString([points[0]]);
    const feature = new Feature({ geometry: line });
    routeLayerRef.current.clear();
    routeLayerRef.current.addFeature(feature);

    let index = 1;
    const interval = 3000 / (points.length - 1);

    const animate = () => {
      if (index < points.length) {
        line.appendCoordinate(points[index]);
        feature.setGeometry(line.clone());
        index++;
        setTimeout(animate, interval);
      }
    };

    animate();
  };

  return (
    <div id='map-background'>
      <div
        ref={mapRef}
        style={{
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      />
    </div>
  );
});

export default MapBackground;