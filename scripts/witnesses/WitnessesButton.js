import {WitnessList} from "./WitnessesList.js"

const contentTarget = document.querySelector(".witnessButton")
const eventHub = document.querySelector(".container")

export const clickForWitnessButton = () => {
    eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showWitnesses") {
        WitnessList()
    }
})
}

export const showWitnessButton = () => {
    contentTarget.innerHTML = "<button id='showWitnesses'> Show Witnesses </button>"
}