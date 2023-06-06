import React from "react";
import "../Retailers/Retailers.css";
import "react-tooltip/dist/react-tooltip.css";
import useApiRequest from "../api/useApiRequest";
import { Link } from "react-router-dom";
function Retailers(props) {
  const { data, error, isLoaded } = useApiRequest(
    "http://localhost:5000/api/companies"
  );
  if (error !== null) 
    return <div>Error: {error.message}</div>;
  if (!isLoaded) 
    return <div>Loading...</div>;
  return (
    <div class="retailers-grid grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 h-fit">
      {data.map((item) => (
        <div class="col-span-1 retailers-grid-col border border-borders">
          <img src={require("D:/KODEON/Repositories/directory_app/src/components/images/retailers_img_1.png")}alt="retailers_img_1.png"class="retailers-grid-img border border-borders"></img>
          <div class="business-text m-2">
            <span class="text-xs">{item.name}</span>
            <span class="text-md md:text-xl block font-bold mb-2 md:mb-4">
              {item.company_name}
            </span>
            <button class="float-right my-2">
              <Link to={`/business-details/${item.industry_name}/${item.id}`}>
                Explore
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Retailers;
