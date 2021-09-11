import React from "react";
import { AutoComplete, Input, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { useDebounce } from "utils/hooks";
import { getVenues } from "requests";
import { Venue } from "models";
import {
  setLocation,
  setVenues,
} from "features/find-restaurant/find-restaurant-slice";

function SearchBar() {
  const dispatch = useAppDispatch();
  const options = useAppSelector((state) => state.findRestaurant.venues);
  const [query, setQuery] = React.useState("");
  const debouncedQuery = useDebounce(query);

  React.useEffect(() => {
    getVenues(debouncedQuery)
      .then((data) => {
        const payload = debouncedQuery
          ? viewSearchResult(data.response.venues)
          : [];
        dispatch(setVenues(payload));
      })
      .catch((err) => {
        message.error(
          err.response.data.meta.errorDetail || "Oops! Something went wrong"
        );
      });
  }, [debouncedQuery, dispatch]);

  const handleSearch = (value: string) => {
    setQuery(value);
  };

  const onSelect = (value: string, option: any) => {
    const { lat, lng } = option;
    dispatch(setLocation({ lat, lng, name: value }));
  };

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{ width: "100%" }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
      data-testid="auto-complete"
    >
      <Input
        size="large"
        placeholder="type a restaurant name here"
        prefix={
          <SearchOutlined style={{ marginTop: "2px", fontSize: "18px" }} />
        }
      />
    </AutoComplete>
  );
}

function viewSearchResult(venues: Venue[]) {
  return venues.map((v) => ({
    value: v.name,
    lat: v.location.lat,
    lng: v.location.lng,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{v.name}</span>
        <span>{(v.location.distance / 1000).toFixed(2)} km</span>
      </div>
    ),
  }));
}

export type SearchResultView = ReturnType<typeof viewSearchResult>;
export default SearchBar;
