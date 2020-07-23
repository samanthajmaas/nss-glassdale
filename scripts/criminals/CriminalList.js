import {criminalsCopy, getCriminals} from "./CriminalProvider.js"
import {criminalHTML} from "./CriminalHTMLConverter.js"

const contentElement = document.querySelector(".criminalsContainer")

export const criminalsList =() => {
    getCriminals()
        .then(() => {
            const criminalsArray = criminalsCopy()
            let criminalHTMLRepresentation=""
            for(const criminal of criminalsArray) {
                criminalHTMLRepresentation += criminalHTML(criminal)
            }

            contentElement.innerHTML = criminalHTMLRepresentation
        })

}