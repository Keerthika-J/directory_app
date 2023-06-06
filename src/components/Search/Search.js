import React, { useState, useEffect } from "react";
import "./Search.css";
import axios from "axios";
import { Link } from "react-router-dom";
function Search() {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [selectedIndustry, setSelectedIndustry] = useState();
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const availableState = data2
    .filter((item) => item.country_name === selectedCountry)
    .map((item) => item.state_name);
  const availableCity = data3
    .filter((item) => item.state_name === selectedState)
    .map((item) => item.city_name);
  useEffect(() => {
    const fetchData = async () => {
      const result1 = await axios.get("http://localhost:5000/api/industries");
      setData1(result1.data);

      const result2 = await axios.get("http://localhost:5000/api/states");
      setData2(result2.data);

      const result3 = await axios.get("http://localhost:5000/api/cities");
      setData3(result3.data);

      const result4 = await axios.get("http://localhost:5000/api/companies");
      setData(result4.data);
    };
    fetchData();
  }, []);
  const resetValues = () => {
    setSelectedIndustry("--Choose Industry--");
    setSelectedState("--Choose State--");
    setSelectedCity("--Choose City--");
  };
  const filterValues = async () => 
  {
    if (selectedIndustry && selectedState && selectedCity) 
    {
      fetch(`http://localhost:5000/api/filter/companies/${selectedIndustry}/${selectedState}/${selectedCity}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
    } 
    else if (selectedIndustry && selectedState) {
      fetch(`http://localhost:5000/api/filter/companies/${selectedIndustry}/${selectedState}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
    } 
    // else if (selectedIndustry && selectedCity) {
    //   fetch(`http://localhost:5000/api/filter/companies/${selectedIndustry}/${selectedState}/${selectedCity}`)
    //   .then(response => response.json())
    //   .then(data => setData(data))
    //   .catch(error => console.error(error));
    // } 
    else if (selectedIndustry) {
      fetch(`http://localhost:5000/api/filter/industries/companies/${selectedIndustry}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
    } 
    else if (selectedState) {
      fetch(`http://localhost:5000/api/filter/states/companies/${selectedState}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
    } 
    // else if (selectedCity) {
    //   fetch(`http://localhost:5000/api/filter/companies/${selectedIndustry}/${selectedState}/${selectedCity}`)
    //   .then(response => response.json())
    //   .then(data => setData(data))
    //   .catch(error => console.error(error));
    // }

  };
  return (
    <div class="gray-section search-page bg-secondary">
      <div class="filters-section flex-col md:flex-row">
        {/* <select
          placeholder="Country"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option>--Choose Country--</option>
          {data.countries.map((value, key) => {
            return (
              <option value={value.name} key={key}>
                {value.name}
              </option>
            );
          })}
        </select> */}
        <select
          class="w-full md:w-1/4"
          placeholder="State"
          id="state"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option>--Choose State--</option>
          {availableState.map((state_name, key) => {
            return (
              <option value={state_name} key={key}>
                {state_name.charAt(0).toUpperCase() + state_name.slice(1)}
              </option>
            );
          })}
        </select>
        <select
          class="w-full md:w-1/4"
          placeholder="City"
          id="city"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option>--Choose City--</option>
          {availableCity.map((city_name, key) => {
            return (
              <option value={city_name} key={key}>
                {city_name.charAt(0).toUpperCase() + city_name.slice(1)}
              </option>
            );
          })}
        </select>
        <select
          class="w-full md:w-1/4"
          placeholder="Industry"
          id="industry"
          value={selectedIndustry}
          onChange={(e) => setSelectedIndustry(e.target.value)}
        >
          <option>--Choose Industry--</option>
          {data1.map((option, index) => {
            return (
              <option key={index} value={option.industry_name}>
                {option.industry_name.charAt(0).toUpperCase() +
                  option.industry_name.slice(1)}
              </option>
            );
          })}
        </select>
        <button onClick={filterValues}>Filter</button>
        <button onClick={resetValues}>Reset</button>
      </div>
      <div class="popular-retailers-container">
        <div class="retailers-grid">
          <div class="retailers-grid grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 h-fit">
          {data.length > 0 ? (


          data.map((item) => (
              <div class="col-span-1 retailers-grid-col border border-borders">
                <img
                  src={require("D:/KODEON/Repositories/directory_app/src/components/images/retailers_img_1.png")}
                  alt="retailers_img_1.png"
                  class="retailers-grid-img border border-borders"
                ></img>
                <div class="business-text m-2">
                  <span class="text-xs">{item.name}</span>
                  <span class="text-md md:text-xl block font-bold mb-2 md:mb-4">
                    {item.company_name}
                  </span>
                  <button class="float-right my-2">
                    <Link
                      to={`/business-details/${item.industry_name}/${item.id}`}
                    >
                      Explore
                    </Link>
                  </button>
                </div>
              </div>
            ))
      ) : (
        <div>
          {/* Display "not found" text */}
          <p>Not found</p>
        </div>
      )}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
