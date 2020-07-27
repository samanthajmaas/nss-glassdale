import {convictionsCopy, getConvictions} from "./ConvictionProvider.js"


const contentElement = document.querySelector (".filters__crime")
const eventHub = document.querySelector (".container")

contentElement.addEventListener("change", (changeEvent) => {
    const customEvent = new CustomEvent("crimeSelected", {
        detail: {
            crimeId: changeEvent.target.value
        }
    })
    eventHub.dispatchEvent(customEvent)
})


    const render = convictionsCollection => {

        contentElement.innerHTML = `
        <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
                    convictionsCollection.map(
                        convictionObj => {
                            return `<option value = "${convictionObj.id}">${convictionObj.name}</option>`
                        }
                    ).join("")
                }
            </select>
        `
    }

    export const ConvictionSelect = () => {
        getConvictions().then(() => {
            const convictions = convictionsCopy()

            render (convictions)
        })
    }

