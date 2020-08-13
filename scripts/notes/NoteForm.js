import { saveNote } from "./NoteDataProvider.js"
import { criminalsCopy, getCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote"){
    
    const noteTitle = document.querySelector("#note--title")
    const noteAuthor = document.querySelector("#note--author")
    const noteContent = document.querySelector("#note--content")
    const noteCriminal = document.querySelector("#noteForm--criminal")

    const criminalId = parseInt(noteCriminal.value)

    const newNote = {
        title: noteTitle.value,
        criminalId: parseInt(noteCriminal.value),
        author: noteAuthor.value,
        content:noteContent.value,
        timestamp: Date.now()
    }
    saveNote(newNote)
}
})

const render = (criminals) => {
    contentTarget.innerHTML = `
    <section class= "noteForm">
        <input type="text" id="note--title" placeholder="Enter note title"/>
        <input type="text" id="note--author" placeholder="Your Name"/>
        <select id="noteForm--criminal">
            <option value ="0">Select a Criminal...</option>
            ${
                criminals.map(
                    (criminalObj) => {
                        return `<option value="${criminalObj.id}">
                            ${criminalObj.name}
                        </option>
                        `
                    }
                )
            }
        <textarea id="note--content" placeholder="Note text here"></textarea>

        <button id="saveNote">Save Note</button>
    </section>
    `
}

export const NoteForm = () => {
    getCriminals()
        .then(() => {
            const criminals = criminalsCopy()
            render(criminals)
        }
        )
}