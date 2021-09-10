import React from "react";
import { message } from "antd";
import { setLocation } from "features/find-restaurant/find-restaurant-slice";
import { getVenues } from "requests";
import { useAppDispatch } from "store/hooks";
import { FullPageOutlinedLoader } from "components/loader";
import { Venue } from "models";

const FindRestaurant = React.lazy(
  () => import("features/find-restaurant/find-restaurant")
);

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    getVenues()
      .then((data) => {
        const { venues } = data.response;
        const {
          location: { lat, lng },
          name,
        } = getRandomVenueInThreeKm(venues);
        dispatch(setLocation({ lat, lng, name }));
      })
      .catch((err) => {
        message.error(
          err.response.data.meta.errorDetail || "Oops! Something went wrong"
        );
      });
  }, [dispatch]);

  return (
    <React.Suspense fallback={<FullPageOutlinedLoader fontSize={50} />}>
      <FindRestaurant />
    </React.Suspense>
  );
}

function getRandomVenueInThreeKm(venues: Venue[]) {
  const randomIdx = Math.floor(Math.random() * venues.length);
  return venues[randomIdx];
}

export default App;
