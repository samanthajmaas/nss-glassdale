import {witnessesCopy, getWitnesses} from "./WitnessesProvider.js"
import {witnessHTML} from "./WitnessesHTML.js"

const contentElement = document.querySelector(".criminalsContainer")



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