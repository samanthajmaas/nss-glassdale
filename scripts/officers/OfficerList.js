import {officersCopy, getOfficers} from "./OfficerProvider.js"
import {officerHTML} from "./OfficerHTMLConverter.js"

const contentElement = document.querySelector(".officersContainer")
export const officerList = () => {

    getOfficers()
        .then(() => {
            const officerArray = officersCopy()
            let officerHTMLRepresentation=""
            for (const officer of officerArray) {
                officerHTMLRepresentation += officerHTML(officer)
            }
        
            contentElement.innerHTML = `
            <h2>Glassdale PD Officers</h2>
            <article class="officerList">
                ${officerHTMLRepresentation}
            </article>
            `
        })
}