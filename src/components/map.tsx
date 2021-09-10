import React from "react";
import { useAppSelector } from "store/hooks";
import { useMount } from "utils/hooks";

function Map() {
  const divRef = React.useRef<HTMLDivElement>(null);
  const hasMounted = useMount();
  const { lat, lng } = useAppSelector((state) => state.findRestaurant.location);

  React.useEffect(() => {
    const initMap = () => {
      const center = new google.maps.LatLng(lat, lng);
      const map: google.maps.Map = new google.maps.Map(
        divRef.current as HTMLDivElement,
        {
          center,
          zoom: 18,
          disableDefaultUI: true,
        }
      );
      const marker = new google.maps.Marker({
        position: map.getCenter(),
      });
      marker.setMap(map);
    };
    hasMounted && initMap();
  }, [hasMounted, lat, lng]);

  return <div id="map" ref={divRef} style={{ height: "58vh" }}></div>;
}

export default Map;
