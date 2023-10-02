import React from "react";
import { useLocation } from "react-router-dom";

export default function ChurchLocation(){
    const location = useLocation()
    const locationName = JSON.stringify(location.pathname)
    const usableValue = locationName.slice(2, locationName.length -1)
    return  <h1 id="temp">{usableValue} appears here</h1>
}