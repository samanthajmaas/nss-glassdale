
const contentTarget = document.querySelector(".witnessButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", showButtonEvent => {
    if (showButtonEvent.target.id === "showWitnesses") {
        const showButtonEvent = new CustomEvent("showWitnessesButton")
        eventHub.dispatchEvent(showButtonEvent)  
    }
})


export const showWitnessButton = () => {
    contentTarget.innerHTML = "<button id='showWitnesses'> Show Witnesses </button>"
}


eventHub.addEventListener("click", hideButtonEvent => {
    if(hideButtonEvent.target.id === "hideWitnesses") {
        const hideButtonEvent = new CustomEvent("hideWitnessesButton")
        eventHub.dispatchEvent(hideButtonEvent)  
        }
    })

