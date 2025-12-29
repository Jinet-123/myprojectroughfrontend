import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Landproperty from "./Landproperty";
import Houseproperty from "./Houseproperty"
import Flatorapartproperty from "./Flatorapartproperty"
import Rentalproperty from "./Rentalproperty"
import Commercialproperty from "./Commercialproperty"
import Industrialproperty from "./Industrialproperty"
import { getapropertyapi } from "../../services/allapi";


function Viewpropertyy() {

  const [propertydetails, setpropertydetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getaproperty = async () => {
    const token = sessionStorage.getItem("token");
    const reqheader = { Authorization: `Bearer ${token}` };

    try {
      const result = await getapropertyapi(id, reqheader);
      setpropertydetails(result.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching property:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getaproperty();
  }, [id]);

  if (loading) return <p className="p-5 text-lg">Loading property...</p>;

  if (!propertydetails) return <p className="p-5 text-lg">Property not found</p>;

 
  const renderPropertyPage = () => {
    if (!propertydetails.propertytype) return <p>Type not found</p>;

    const type = propertydetails.propertytype.toLowerCase();

    switch (type) {
      case "land":
        return <Landproperty property={propertydetails} />;

      case "house":
        return <Houseproperty property={propertydetails} />;

      case "flat":
        return <Flatorapartproperty property={propertydetails} />;

      case "rental":
        return <Rentalproperty property={propertydetails} />;

      case "commercial":
        return <Commercialproperty property={propertydetails} />;

      case "industrial":
        return <Industrialproperty property={propertydetails} />;

      default:
        return <p>Unknown property type</p>;
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-5">
      {renderPropertyPage()}
    </div>
  );
}

export default Viewpropertyy;
