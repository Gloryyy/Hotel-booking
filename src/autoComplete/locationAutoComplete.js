import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import scriptLoader from "react-async-script-loader";

const LocationAutoComplete = ({ isScriptLoaded, isScriptLoadSucceed }) => {
  const [values, setValues] = useState("");
  const { location } = values;

  if (isScriptLoaded && isScriptLoadSucceed) {
    return (
      <div>
        <PlacesAutocomplete
          value={location}
          name="location"
          onChange={(value) => setValues({ ...values, location: value })}
          onSelect={(value) => setValues({ ...values, location: value })}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({ placeholder: "Location" })}
                className="form-control"
                style={{ height: "50px", marginLeft: "8px" }}
              />
              <div>
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion, index) => {
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      key={index}
                      {...getSuggestionItemProps(suggestion, { style })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=geometry,drawing,places`,
])(LocationAutoComplete);
