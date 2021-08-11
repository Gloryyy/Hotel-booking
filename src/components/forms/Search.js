import React, { useState } from "react";
import { DatePicker, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";
import { useHistory } from "react-router-dom";
import LocationAutoComplete from "../../autoComplete/locationAutoComplete";

const { RangePicker } = DatePicker;
const { Option } = Select;

const Search = ({ values, setValues }) => {
  const [location] = useState("");
  const [date, setDate] = useState("");
  const [bed, setBed] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    history.push(`/search-result?location=${location}&date=${date}&bed=${bed}`);
  };

  return (
    <div>
      <div className="w-100">
        <LocationAutoComplete values={values} setValues={setValues} />
      </div>
      <div className="d-flex pb-4">
        <RangePicker
          className="w-100"
          onChange={(value, dateString) => setDate(dateString)}
          disabledDate={(current) =>
            current && current.valueOf() < moment().subtract(1, "days")
          }
        />

        <Select
          onChange={(value) => setBed(value)}
          className="w-100"
          size="large"
          placeholder="Number of beds"
        >
          <Option key={1}>{1}</Option>
          <Option key={2}>{2}</Option>
          <Option key={3}>{3}</Option>
          <Option key={4}>{4}</Option>
        </Select>

        <SearchOutlined
          onClick={handleSubmit}
          className="btn btn-primary p-3 btn-square"
        />
      </div>
    </div>
  );
};

export default Search;
