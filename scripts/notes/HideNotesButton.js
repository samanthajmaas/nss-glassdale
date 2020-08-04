const contentTarget = document.querySelector(".noteList")
const eventHub = document.querySelector(".container")

export const hideNotesButton = () => {
    eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "hideNotes") {
        contentTarget.innerHTML= ``
    }
})
}
