import { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import PropTypes from "prop-types";

const CountrySelect = ({ field = {}, form = {}, error, touched }) => {
  const options = useMemo(() => countryList().getData(), []);

  const customStyles = {
    control: (base) => ({
      ...base,
      height: "45px",
      minHeight: "45px",
      borderRadius: "0px",
      border: touched && error ? "2px solid #ef4444" : "2px solid #6b7280",
      boxShadow: "none",
      "&:hover": {
        border: "2px solid #000000",
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? "#000000" : "white",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: "#E5E7EB",
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "#6B7280",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#000000",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#000000",
      "&:hover": {
        color: "#000000",
      },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "0px",
      marginTop: "2px",
    }),
  };

  const handleChange = (option) => {
    if (form.setFieldValue && field.name) {
      form.setFieldValue(field.name, option ? option.value : "");
    }
  };

  const handleBlur = () => {
    if (form.setFieldTouched && field.name) {
      form.setFieldTouched(field.name, true);
    }
  };

  const getValue = () => {
    if (!field.value) return null;
    return options.find((option) => option.value === field.value) || null;
  };

  return (
    <div className="w-[300px] h-[45px] focus:outline-none">
      <Select
        styles={customStyles}
        options={options}
        value={getValue()}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Select a country"
        isSearchable
        className={`${touched && error ? "border-red-500" : ""}`}
        classNamePrefix="country-select"
      />
    </div>
  );
};

CountrySelect.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  }),
  form: PropTypes.shape({
    setFieldValue: PropTypes.func,
    setFieldTouched: PropTypes.func,
  }),
  error: PropTypes.string,
  touched: PropTypes.bool,
};

export default CountrySelect;
