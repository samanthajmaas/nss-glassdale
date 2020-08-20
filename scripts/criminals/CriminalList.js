import { criminalsCopy, getCriminals } from "./CriminalProvider.js"
import { criminalHTML } from "./CriminalHTMLConverter.js"
import { convictionsCopy, } from "../convictions/ConvictionProvider.js"
import { officersCopy } from "../officers/OfficerProvider.js"
import { alibiButton } from "../associates/KnownAssociatesButton.js"
import { showWitnessButton } from "../witnesses/WitnessesButton.js"
import { getFacilities, useFacilities } from "../facilities/FacilitiesDataProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facilities/CriminalFacilityProvider.js"

const contentElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("hideWitnessesButton", (hideButtonEvent) => {
    contentElement.innerHTML = ``
    criminalsList()
    showWitnessButton()
})


//Listening for the select from Criminal Select
eventHub.addEventListener("crimeSelected", (crimeSelectedEvent) => {

    const crimeThatWasSelected = crimeSelectedEvent.detail.crimeId

    const arrayOfCrimes = convictionsCopy()
    const foundCrimeObject = arrayOfCrimes.find(
        (crime) => {
            return parseInt(crimeThatWasSelected) === crime.id
        }
    )

    const allCriminals = criminalsCopy()
    const filteredCriminals = allCriminals.filter(
        (currentCriminalObj) => {
            return foundCrimeObject.name === currentCriminalObj.conviction
        }
    )

    render(filteredCriminals)
})


//Listening for the select from Officer Select
eventHub.addEventListener("officerSelected", (event) => {
    // How can you access the officer name that was selected by the user?
    const officerName = event.detail.officer
    // How can you get the criminals that were arrested by that officer?
    const officers = officersCopy()
    const foundOfficerName = officers.find(
        (officerObj) => {
            return parseInt(officerName) === officerObj.id
        }

    )
    const criminals = criminalsCopy()

    const filteredOfficers = criminals.filter(
        (currentCriminalObj) => {
            return foundOfficerName.name === currentCriminalObj.arrestingOfficer
        }
    )

    render(filteredOfficers)
})

//Creates the List of All Criminals
export const criminalsList = () => {

    getCriminals()
        .then(() => {
            const criminalsArray = criminalsCopy()

            render(criminalsArray)
        })
        .then(alibiButton)
}

//Function that creates html for all criminals, crime select, and officer select
const render = (arrayOfCriminals) => {
    getFacilities()
        .then(getCriminalFacilities)
        .then(() => {
            const facilities = useFacilities()
            const facilitiesCriminalRelationships = useCriminalFacilities()

            const allCriminalsTurnedIntoHTML = arrayOfCriminals.map(
                (criminal) => {
                    const relationship = facilitiesCriminalRelationships.filter(fcr => fcr.criminalId === criminal.id)
                    const findFacilitiesForCriminal = relationship.map(foundFacility => {
                        return facilities.find(facility => facility.id === foundFacility.facilityId)
                    })
                    return criminalHTML(criminal, findFacilitiesForCriminal)
                }
            ).join("")

            contentElement.innerHTML = `
            <h2>Glassdale Convicted Criminals</h2>
                <article class="criminalList">
                    ${allCriminalsTurnedIntoHTML}
                </article>
            `
        })
}


