import GoogleMapReact from 'google-map-react';
import { useCallback, useEffect, useState } from 'react';
import californiaCountiesGeoJSON from "./geojson/california-counties.geojson"

import { createRoot } from 'react-dom/client';


import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { apiKey, californiaBounds, californiaCenter, LegendMapThresholds, mapOptions, zoom } from './mapConfig';
import { iconPerType } from './marker';
import { departmentOccurrences, getColorByThreshold } from './county';
import Legend from './Legend';
import { Box } from '@chakra-ui/react';
import { alertData } from '../fakeData/alert';
import { IAlert } from '../utils/alert';
import { useMapContext } from '../pages/map/MapContext';

const Map: React.FC = () => {
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const { selectedMarker, setSelectedMarker, cardRefs } = useMapContext();
    
    function legendToMap() {
        const legend = document.createElement('div');
        legend.style.cssText = `
          position: absolute;
          bottom: 10px;
          left: 10px;
          backgroundColor: white;
          padding: 10px;
          borderRadius: 5px;
          boxShadow: 0px 0px 5px rgba(0,0,0,0.3);
          fontFamily: Arial;
          fontSize: 12px;
          lineHeight: 15px;
          display: flex;
          justifyContent: space-between;
          width: 200px;
        `;
        return legend;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps

    const createInfoWindow = useCallback((marker: google.maps.Marker, content: string) => {
        const infoWindow = new google.maps.InfoWindow({
            content,
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });

        marker.addListener("mouseover", () => {
            infoWindow.open(map, marker);
        });

        marker.addListener("mouseout", () => {
            infoWindow.close();
        });
    }, [map]);
    

    useEffect(() => {
        if (map && selectedMarker) {
            map.panTo({ lat: selectedMarker.lat, lng: selectedMarker.lng });
            map.setZoom(12);
        }
    }, [map, selectedMarker]);

    useEffect(() => {
        
        if (map) {
            // Restricted bounds of Map 
            map.setOptions({
                restriction: {
                    latLngBounds: californiaBounds,
                    strictBounds: false
                }
            });

            // GeoJson county's California
            const geoJson = new google.maps.Data();
            geoJson.loadGeoJson(californiaCountiesGeoJSON);

            // Color of County 
            geoJson.setStyle((features: google.maps.Data.Feature) => {
                const countyName: string = features.getProperty('CountyName');
                const number: number = departmentOccurrences[countyName] || 0;
                const fillColor = getColorByThreshold(number);

                return {
                    fillColor: fillColor,
                    strokeWeight: 1,
                    fillOpacity: 0.4,
                    strokeColor: 'black',
                };
            });

            // Add overlay to map
            geoJson.setMap(map);

            // Add Gradient Legend to Map
            const legend = legendToMap()
            map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);
            createRoot(legend).render(
                <Box w={"100%"}>
                    <Box textColor={"black"}>Number of alerts</Box>
                    <Legend thresholds={LegendMapThresholds} />
                </Box>
            );


            // Cluster Marker
            const markers: google.maps.Marker[] = [];
            alertData.forEach((item: IAlert, id: number) => {
                const marker = new google.maps.Marker({
                    position: { lat: item.lat, lng: item.lng },
                    map: map,
                    icon: {
                        url: iconPerType[item.type],
                        size: new google.maps.Size(32, 32),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(16, 16),
                    }
                });

                // Create and display the info window
                const infoContent = `<div><strong>${item.title}</strong><br>${item.description}</div>`;
                createInfoWindow(marker, infoContent);

                // Add Action to Individual Marker
                marker.addListener("click", () => {
                    setSelectedMarker(item)
                });
                cardRefs.current[id] = null
                markers.push(marker);
            });
            new MarkerClusterer({ map, markers });
        }
    }, [map, createInfoWindow, cardRefs, setSelectedMarker]);
    

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: apiKey }}
            defaultCenter={californiaCenter}
            defaultZoom={zoom}
            onGoogleApiLoaded={({ map }) => setMap(map)}
            options={mapOptions}
            yesIWantToUseGoogleMapApiInternals={true}
        />

    );
};

export default Map;
