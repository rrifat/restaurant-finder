import React from "react";
import { useAppSelector } from "store/hooks";
import { useMount } from "utils/hooks";
import { DEFAULT_LAT, DEFAULT_LNG } from "app-constants";

function Map() {
  const divRef = React.useRef<HTMLDivElement>(null);
  const hasMounted = useMount();
  const { lat, lng, name } = useAppSelector(
    (state) => state.findRestaurant.location
  );

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

      const infowindow = new google.maps.InfoWindow();
      const service = new google.maps.places.PlacesService(map);
      const searchRequest = {
        location: new google.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
        query: name,
        radius: 3000,
        type: "restaurant",
      };

      service.textSearch(searchRequest, (results, status) => {
        if (
          status !== google.maps.places.PlacesServiceStatus.OK ||
          results === null
        ) {
          return;
        }
        const result = results.filter((r) => r.name?.includes(name))[0];
        const detailsRequest = {
          placeId: result?.place_id ?? "ChIJhZiGChHHVTcRhRkX3Sj5juU",
        };
        service.getDetails(detailsRequest, (place, status) => {
          if (
            status !== google.maps.places.PlacesServiceStatus.OK ||
            place === null
          ) {
            return;
          }
          marker.addListener("mouseover", () => {
            const {
              rating,
              user_ratings_total,
              opening_hours,
              name,
              formatted_address,
              formatted_phone_number,
            } = place;

            const placeRating = rating ?? 0;
            const userRatingsTotal = user_ratings_total ?? 0;
            const ratingContent = `Rating: ${placeRating} (${userRatingsTotal})`;
            const isOpenText = opening_hours?.isOpen()
              ? "Open Now"
              : "Close Now";

            const content = document.createElement("div");

            content.appendChild(createElement("h2", name));
            content.appendChild(createElement("p", ratingContent));
            content.appendChild(
              createElement("p", `Address: ${formatted_address}`)
            );
            content.appendChild(
              createElement("p", `Phone: ${formatted_phone_number}`)
            );
            content.appendChild(createElement("p", isOpenText));

            infowindow.setContent(content);
            infowindow.open(map, marker);
          });
          marker.addListener("mouseout", function () {
            infowindow.close();
          });
        });
      });
    };
    hasMounted && initMap();
  }, [hasMounted, lat, lng, name]);

  return <div id="map" ref={divRef} style={{ height: "58vh" }} />;
}

const createElement = (tag: string, txtContent = "") => {
  const element = document.createElement(tag);
  element.textContent = txtContent;
  return element;
};

export default Map;
