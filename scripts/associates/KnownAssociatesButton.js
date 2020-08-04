
const eventHub = document.querySelector(".container")

export const alibiButton = () => {

    eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("associates--")) {
        
        const associatesIdArray = clickEvent.target.id.split("--")[1]

        const contentTarget = document.querySelector(`.alibiDialog--${associatesIdArray}`)
        contentTarget.showModal()
        }
    else if (clickEvent.target.id ==="associateCloseButton") {
        const contentTarget = clickEvent.target.parentNode
        contentTarget.close()
    }
})
}
