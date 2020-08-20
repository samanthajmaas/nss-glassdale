import {getFacilities, useFacilities} from "./FacilitiesDataProvider.js"
import {getCriminals, criminalsCopy} from "../criminals/CriminalProvider.js"
import {getCriminalFacilities, useCriminalFacilities} from "./CriminalFacilityProvider.js"
import {facilitiesHTML} from "./FacilitiesHTML.js"

const contentElement = document.querySelector(".criminalsContainer")
const contentTarget = document.querySelector(".facility__button")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showFacilitiesEvent" , (showFaciltiesEvent) => {
    facilitiesList()
    contentTarget.innerHTML += "<button id=`hideFacilities`> Hide Facilities </button>"
})

export const facilitiesList= () => {
    getFacilities()
        .then(() => {
            const facilitiesArray = useFacilities()

            render (facilitiesArray)
        })
}

const render = (arrayOfFacilities) => {
    getCriminals()
        .then(getCriminalFacilities)
        .then(() => {
            const criminals = criminalsCopy()
            const criminalFacilityRelationships = useCriminalFacilities()

            const allFacitiliesTurnedIntoHTML = arrayOfFacilities.map(
                (facility) => {
                    const relationship = criminalFacilityRelationships.filter(cfr => cfr.facilityId === facility.id)
                    const findCriminalsForFacility = relationship.map(foundFacility => {
                        return criminals.find(criminal => criminal.id === foundFacility.criminalId)
                    })
                    return facilitiesHTML(facility, findCriminalsForFacility)
                }
             ).join("")

             contentElement.innerHTML = `
             <h2> Facilities </h2>
                <article class="facilitiesList">
                ${allFacitiliesTurnedIntoHTML}
                </article>
             `
        })
}