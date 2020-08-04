import {witnessesCopy, getWitnesses} from "./WitnessesProvider.js"
import {witnessHTML} from "./WitnessesHTML.js"

const contentElement = document.querySelector(".criminalsContainer")
const contentTarget = document.querySelector(".witnessButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showWitnessesButton", (showButtonEvent) => {
    WitnessList()
    contentTarget.innerHTML += "<button id='hideWitnesses'> Hide Witnesses </button>"
})


export const WitnessList = () => {
        getWitnesses()
            .then(() => {
                const witnessArray = witnessesCopy()
    
                render(witnessArray)
            })
}



const render = (arrayOfWitnesses) => {
    let witnessesHTMLRepresentations = ""
    arrayOfWitnesses.forEach(witness => {
        witnessesHTMLRepresentations += witnessHTML(witness)
})

    contentElement.innerHTML =`
    <article class=" witnessesList">
        ${witnessesHTMLRepresentations}
    </article>
    `
}