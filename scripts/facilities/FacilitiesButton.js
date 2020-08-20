const contentTarget = document.querySelector(".facility__button")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", showFaciltiesButtonEvent => {
    if (showFaciltiesButtonEvent.target.id === "showFacilites") {
        const showFaciltiesButtonEvent = new CustomEvent("showFacilitiesEvent")
        eventHub.dispatchEvent(showFaciltiesButtonEvent)  
    }
})


export const showFacilitiesButton = () => {
    contentTarget.innerHTML = "<button id='showFacilites'> Show Facilities </button>"
}


eventHub.addEventListener("click", hideFacilitiesButtonEvent => {
    if(hideFacilitiesButtonEvent.target.id === "hideFacilities") {
        const hideFacilitiesButtonEvent = new CustomEvent("hideFacilitiesEvent")
        eventHub.dispatchEvent(hideFacilitiesButtonEvent)  
        }
    })