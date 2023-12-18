//components/UserForm.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserForm.css";

const UserForm = ({ onCreateUser }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    country: "",
    timezone: ""
  });

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://country-state-city-search-rest-api.p.rapidapi.com/allcountries",
          {
            headers: {
              "X-RapidAPI-key":
                "46a1f39baamshf8b6d68ee32b5b9p1a3c54jsn224084e20342",
              "X-RapidAPI-Host":
                "country-state-city-search-rest-api.p.rapidapi.com"
            }
          }
        );
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setFormData((prevFormData) => ({ ...prevFormData, [field]: value }));

    const selectedCountry = countries.find((country) => country.name === value);
    if (selectedCountry) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        timezone: selectedCountry.timezones[0].zoneName
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add validation logic here

    // Create a unique id for the user
    const id = new Date().getTime().toString();
    const user = { id, ...formData };

    // Call the callback to create the user
    onCreateUser(user);

    //Reset the form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      address1: "",
      address2: "",
      state: "",
      city: "",
      country: "",
      timezone: ""
    });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName" className="form-label">
          First Name:
          <input
            id="firstName"
            type="text"
            className="form-input"
            value={formData.firstName}
            onChange={handleChange("firstName")}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="lastName" className="form-label">
          Last Name:
          <input
            id="lastName"
            type="text"
            className="form-input"
            value={formData.lastName}
            onChange={handleChange("lastName")}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email:
          <input
            id="email"
            type="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange("email")}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="mobile" className="form-label">
          Mobile:
          <input
            id="mobile"
            type="tel"
            className="form-input"
            value={formData.mobile}
            onChange={handleChange("mobile")}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="address1" className="form-label">
          Address 1:
          <input
            id="address1"
            type="text"
            className="form-input"
            value={formData.address1}
            onChange={handleChange("address1")}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="address2" className="form-label">
          Address 2:
          <input
            id="address2"
            type="text"
            className="form-input"
            value={formData.address2}
            onChange={handleChange("address2")}
          />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="country" className="form-label">
          Country:
          <select
            id="country"
            className="form-input"
            value={formData.country}
            onChange={handleChange("country")}
          >
            <option value="" disabled>
              Select Country
            </option>
            {countries.map((country) => (
              <option key={country.isoCode} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="timezone" className="form-label">
          Timezone:
          <input
            id="timezone"
            type="text"
            className="form-input"
            value={formData.timezone}
            readOnly
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="state" className="form-label">
          State:
          <input
            id="state"
            type="text"
            className="form-input"
            value={formData.state}
            onChange={handleChange("state")}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="city" className="form-label">
          City:
          <input
            id="city"
            type="text"
            className="form-input"
            value={formData.city}
            onChange={handleChange("city")}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="zipcode" className="form-label">
          Zip Code:
          <input
            id="zipcode"
            type="text"
            className="form-input"
            value={formData.zipCode}
            onChange={handleChange("zipCode")}
          />
        </label>
      </div>
      <div className="form-group">
        <button type="submit" className="submit-button">
          submit
        </button>
      </div>
    </form>
  );
};

export default UserForm;
