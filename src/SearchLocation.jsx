import React, { useEffect, useRef } from "react";

const SearchLocation = () => {
  const inputRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.geometry || !place.geometry.location) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: place.geometry.location,
        zoom: 15,
      });

      new window.google.maps.Marker({
        position: place.geometry.location,
        map: map,
      });
    });
  }, []);

  return (
    <div>
      <h2>Search a Location</h2>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter a location"
        style={{ width: "300px", padding: "8px" }}
      />
      <div id="map" ref={mapRef} style={{ height: "400px", width: "100%", marginTop: "10px" }}></div>
    </div>
  );
};

export default SearchLocation;
