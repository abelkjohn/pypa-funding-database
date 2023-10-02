import React from "react"
import { useLocation } from "react-router-dom"
import Header from "./Header"
import ProspectDetails from "./ProspectDetails"
import Button from "./Button"

export default function ChurchLocation(){
    const location = useLocation()
    const locationName = JSON.stringify(location.pathname)
    const usableValue = locationName.slice(2, locationName.length -1)
    return  (
        <>
        <Header location={usableValue} />
        <ProspectDetails />
        <Button />
        </>
    )
}