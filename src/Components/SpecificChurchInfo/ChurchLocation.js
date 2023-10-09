import React from "react"
import { useLocation } from "react-router-dom"
import Header from "./Header"
import ProspectDetails from "./ProspectDetails"
import Button from "./Button"
import Password from "./Password"
import IndividualForms from "./IndividualForms"

export default function ChurchLocation(){
    const location = useLocation()
    const locationName = JSON.stringify(location.pathname)
    const usableValue = locationName.slice(2, locationName.length -1)
    const displayValue = usableValue.replace("%20", " ")

    return  (
        <>
            <Header location={usableValue} name={displayValue}/>
            <ProspectDetails location={usableValue} />
            <Button />
            <Password />
            <IndividualForms location={usableValue} />
        </>
    )
}