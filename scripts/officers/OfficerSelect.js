import {officersCopy, getOfficers} from "./OfficerProvider.js"

const contentElement = document.querySelector (".filters__officer")
const eventHub = document.querySelector (".container")

contentElement.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

const render = officersCollection => {

    contentElement.innerHTML = `
    <select class="dropdown" id="officerSelect">
        <option value = "0"> Please select an officer...</option>
        ${
            officersCollection.map(
                    officersObj => {
                        return `<option value="${officersObj.id}"> ${officersObj.name} </option>`
                    }
            ).join("")
        }
    </select>
    `
}

export const officersSelect = () => {
    getOfficers().then(() => {
        const officers = officersCopy()

        render (officers)
    })
}
