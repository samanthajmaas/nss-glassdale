import {criminalsCopy, getCriminals} from "./CriminalProvider.js"
import {criminalHTML} from "./CriminalHTMLConverter.js"
import {convictionsCopy,} from "../convictions/ConvictionProvider.js"
import {officersCopy} from "../officers/OfficerProvider.js"

const contentElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector (".container")

//Listening for the select from Crimal Select
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

    render (filteredCriminals)
})


//Listening for the select from Officer Select
eventHub.addEventListener("officerSelected", (event) => {
    // How can you access the officer name that was selected by the user?
    const officerName = event.detail.officer
    console.log("officerName")
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

    render (filteredOfficers)
})

//Creates the List of All Criminals
export const criminalsList =() => {

    getCriminals()
        .then(() => {
            const criminalsArray = criminalsCopy()

            render (criminalsArray)
        })

}

//Function that creates html for all criminals, crime select, and officer select
const render = (arrayOfCriminals) => {
    
    let criminalHTMLRepresentation=""
    arrayOfCriminals.forEach(criminal => {
        criminalHTMLRepresentation += criminalHTML(criminal)
    })
    

    contentElement.innerHTML = `
    <h2>Glassdale Convicted Criminals</h2>
    <article class="criminalList">
        ${criminalHTMLRepresentation}
    </article>
    `
}


