import {deleteNote} from "./NoteDataProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("noteDeleteButton--")){
        const [prompt, noteIdString] = clickEvent.target.id.split("--")

        deleteNote(noteIdString)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("noteEditButton--")) {
        const [prompt, noteId] = clickEvent.target.id.split("--")

        const customEvent= new CustomEvent("editNoteClicked" , {
            detail: {
                noteId: parseInt(noteId)
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})


export const noteHTML = (noteObj, criminalObj) => {
    return `
        <section class ="note">
            <div class="input note--title">Title: ${ noteObj.title }</div>
            <div class="input note--content">${ noteObj.content }</div>
            <div class="note--criminal">Criminal: ${criminalObj.name}</div>
            <div class="input note--author">Author: ${ noteObj.author }</div>
            <div class="input note--timetamp">Timestamp: ${ new Date(noteObj.timestamp).toLocaleDateString('en-US') }</div>

            <button id="noteEditButton--${noteObj.id}">Edit</button>
            <button id="noteDeleteButton--${noteObj.id}">Delete</button>
        </section>
            `
}